import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { FaMicrophone, FaStop, FaArrowRight } from 'react-icons/fa';
import { MdDelete } from "react-icons/md";
import Report from './Report';
import axios from "axios";

import Loading from './Loading';

const STRESS_URL =  'https://stresstech-api-main-8287389.d2.zuplo.dev';
const API_KEY = 'zpka_7cd573150cae48148f90cef1eb405148_58499c45';

const Recorder = () => {
  const [state, setState] = useState({
    audioRecorded: false,
    audioSent: false,
    isRecording: false,
    isPlaying: false,
    timer: '00:00',
  });
  const [analysisData, setAnalysisData] = useState(null); // New state to store analysis data

  const [recorder, setRecorder] = useState(null);
  const audioContext = useRef(null);
  const gumStream = useRef(null);
  const timerInterval = useRef(null);
  const audioBlob = useRef(null);
  const audioPlayer = useRef(null);

  useEffect(() => {
    const handleUserGesture = () => {
      audioContext.current = new (window.AudioContext || window.webkitAudioContext)();
      window.removeEventListener('click', handleUserGesture);
    };
    window.addEventListener('click', handleUserGesture);
    
    return () => {
      if (audioContext.current) audioContext.current.close();
    };
  }, []);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      gumStream.current = stream;
      const input = audioContext.current.createMediaStreamSource(stream);

      const Recorder = require('recorder-js').default;
      const newRecorder = new Recorder(audioContext.current, { numChannels: 1 });
      newRecorder.init(stream);
      setRecorder(newRecorder);

      newRecorder.start();
      setState((prev) => ({ ...prev, isRecording: true }));
      startTimer();
    } catch (err) {
      console.error("Error starting recording:", err);
      alert("Microphone access is required to record your voice.");
    }
  };

  const stopRecording = async () => {
    if (recorder) {
      try {
        const { blob } = await recorder.stop();
        
        // Convert blob to a valid WAV file
        const validWavBlob = await convertToValidWav(blob);

        audioBlob.current = validWavBlob;
        gumStream.current.getTracks().forEach(track => track.stop());
        stopTimer();
        setState((prev) => ({ ...prev, isRecording: false, audioRecorded: true }));
      } catch (err) {
        console.error("Error stopping recording:", err);
      }
    }
  };

  // Convert audio blob to a valid WAV format
  const convertToValidWav = async (blob) => {
    const arrayBuffer = await blob.arrayBuffer();
    const dataView = new DataView(arrayBuffer);
    return new Blob([dataView], { type: 'audio/wav' });
  };

  const sendAudio = async (blob) => {
    try {
      const data = new FormData();
      data.append('text', "This is the transcription of the audio file");
      data.append('file', blob, "recording.wav");
      data.append('external_vars', JSON.stringify({}));

      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${API_KEY}`,
        }
      };

      const response = await axios.post(STRESS_URL + '/v1/audio/upload', data, config);
      const resultUrl = response.data?.response?.result_url;

      if (resultUrl) {
        const pollResultUrl = async () => {
          try {
            const resultResponse = await axios.get(STRESS_URL + resultUrl, {
              headers: {
                'Authorization': `Bearer ${API_KEY}`,
              }
            });

            const status = resultResponse.data?.response?.status;
            if (status?.STRESS_ANALYSED) {
              console.log('Stress Analysis Completed:', resultResponse.data);
              
              // Store the relevant analysis data
              const { stress, depression, vemotions } = resultResponse.data?.response?.data;
              setAnalysisData({ stress, depression, vemotions });
              
              setState((prev) => ({ ...prev, audioSent: true }));
              return resultResponse.data;
            } else {
              console.log('Stress Analysis In Progress...');
              setTimeout(pollResultUrl, 5000); // Wait 5 seconds before checking again
            }
          } catch (error) {
            console.error('Error polling the result URL:', error);
          }
        };
        pollResultUrl();
      } else {
        console.error('Result URL not found in the response.');
      }
    } catch (error) {
      console.error("Error during the audio upload:", error);
      if (error.response) {
        console.error("Server Error:", error.response.data);
        console.error("Status Code:", error.response.status);
        console.error("Headers:", error.response.headers);
      }
    }
  };

  const handleMicClick = () => {
    if (state.audioRecorded) setState({ isRecording: false, timer: '00:00', audioRecorded: false });
    else {
      if (state.isRecording) stopRecording();
      else startRecording();
    }
  };

  const handleSendClick = () => {
    if (audioBlob.current) sendAudio(audioBlob.current);
    setState({ isRecording: false, timer: '00:00', audioRecorded: false, audioSent: true });
  };

  const startTimer = () => {
    let seconds = 0;
    timerInterval.current = setInterval(() => {
      seconds++;
      const min = String(Math.floor(seconds / 60)).padStart(2, '0');
      const sec = String(seconds % 60).padStart(2, '0');
      setState((prev) => ({ ...prev, timer: `${min}:${sec}` }));
    }, 1000);
  };

  const stopTimer = () => clearInterval(timerInterval.current);

  return (
    <div>
      {state.audioSent ? (analysisData ?
        // Pass analysis data to Report component
        <Report analysisData={analysisData} /> :
        <Loading /> 
      ) : (
        <RecorderContainer>
          <AnimatedCircle isRecording={state.isRecording} />
          <Title>{state.audioRecorded ? "Audio listo para analizar" : "¿Cómo te sientes?"}</Title>
          <Subtitle>
            {state.isRecording
              ? "Grabando"
              : state.audioRecorded
              ? "Pulsa para volver a grabar o enviar"
              : "Pulsa el micrófono para grabar"}
          </Subtitle>
          <ButtonContainer>
            <MicButton onClick={handleMicClick}>
              {state.isRecording ? <FaStop size={32} /> : state.audioRecorded ? <MdDelete size={38} /> : <FaMicrophone size={32} />}
            </MicButton>
            <Timer>{state.timer}</Timer>
            {state.audioRecorded ? (
              <SendButton onClick={handleSendClick}>
                <FaArrowRight />
              </SendButton>
            ) : (
              <SendButtonBlocked>
                <FaArrowRight />
              </SendButtonBlocked>
            )}
          </ButtonContainer>
        </RecorderContainer>
      )}
    </div>
  );
};

// Styled Components for UI
const RecorderContainer = styled.div`
  justify-content: center;
  text-align: center;
  margin: 50px 0;
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.02); }
  100% { transform: scale(1); }
`;

const AnimatedCircle = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 auto;
  border-radius: 50%;
  background: url('/assets/images/landings/space.png') center center/cover no-repeat;
  box-shadow: 0px 4px 10px 10px rgba(164, 96, 221, 0.3);
  margin-bottom: 30px;
  transition: box-shadow 0.5s ease;
  ${({ isRecording }) =>
    isRecording &&
    css`
      animation: ${pulse} 1.5s infinite;
      box-shadow: 0px 4px 10px 10px rgba(164, 96, 221, 0.3);
    `}
`;

const Title = styled.h3`
  font-size: 24px;
  color: #333;
  margin-top: 34px;
  width: 100%;
`;

const Subtitle = styled.h6`
  color: #333;
  margin-top: 8px;
  text-align: center !important;
  width: 100%;
  font-weight: normal;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 50px;
`;

const MicButton = styled.a`
  width: 60px;
  height: 60px;
  background: #fad5d5;
  border: none;
  border-radius: 50%;
  color: #eb5757;
  font-size: 28px;
  margin: 0 16px;
  cursor: pointer;
  transition: background 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SendButtonBlocked = styled.a`
  width: 60px;
  height: 60px;
  background: #D9D9D9;
  border: none;
  border-radius: 50%;
  color: #828282;
  font-size: 30px;
  margin: 0 16px;
  display: flex; /* Centering content */
  align-items: center; /* Center vertically */
  justify-content: center; /* Center horizontally */
`;

const SendButton = styled.a`
  width: 60px;
  height: 60px;
  background: #C7E5D4;
  border: none;
  border-radius: 50%;
  color: #219653;
  font-size: 30px;
  margin: 0 16px;
  cursor: pointer;
  transition: background 0.3s;
  display: flex; /* Centering content */
  align-items: center; /* Center vertically */
  justify-content: center; /* Center horizontally */
`;

const Timer = styled.div`
  font-size: 18px;
  margin: 16px 30px;
  color: #BDBDBD;
`;

export default Recorder;
