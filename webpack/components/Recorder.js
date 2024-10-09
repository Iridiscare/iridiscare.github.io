import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { FaMicrophone, FaStop, FaPlay, FaPause, FaDownload } from 'react-icons/fa';
import { IoSend } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import Report from './Report';
import axios from "axios";

const STRESS_URL =  'https://stresstech-api-main-8287389.d2.zuplo.dev/v1/audio/upload';
const API_KEY = 'zpka_7cd573150cae48148f90cef1eb405148_58499c45';

const Recorder = () => {
  const [state, setState] = useState({
    audioRecorded: false,
    audioSent: false,
    isRecording: false,
    isPlaying: false,
    timer: '00:00',
  });

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
    // Read blob as an array buffer
    const arrayBuffer = await blob.arrayBuffer();
    const dataView = new DataView(arrayBuffer);

    // Modify the DataView if needed (e.g., change headers, formats)
    // For now, we assume Recorder.js has created a valid WAV format, and we'll directly use it.
    
    // Convert back to a Blob of type 'audio/wav'
    return new Blob([dataView], { type: 'audio/wav' });
  };

  const handlePlayPauseClick = () => {
    if (state.isPlaying) {
      audioPlayer.current.pause();
    } else {
      audioPlayer.current.play();
    }
    setState((prev) => ({ ...prev, isPlaying: !state.isPlaying }));
  };

  const handleAudioEnded = () => {
    setState((prev) => ({ ...prev, isPlaying: false }));
  };

  const sendAudio = async (blob) => {
    try {
      // Step 1: Ensure the MIME type of the blob is set correctly
      console.log("Audio Blob Type:", blob.type); // Should print "audio/wav"
  
      // Step 2: Create the FormData and append necessary fields
      const data = new FormData();
      data.append('text', "This is the transcription of the audio file");
      data.append('file', blob, "recording.wav");
      data.append('external_vars', JSON.stringify({}));
  
      // Log FormData content (for debugging purposes)
      for (let [key, value] of data.entries()) {
        console.log(key, value); // Prints out each key-value pair in the FormData
      }
  
      // Step 3: Set the request headers, including Content-Type and Authorization
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${API_KEY}`,
        }
      };
  
      // Step 4: Send the request to the server
      const response = await axios.post(STRESS_URL, data, config);
      console.log('Response:', response.data);
    } catch (error) {
      // Step 5: Capture and log the error message and response
      console.error("Error during the audio upload:", error);
      if (error.response) {
        // If the server responded with an error code, print response details
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
      {state.audioSent ? (
        <Report />
      ) : (
        <RecorderContainer>
          <AnimatedCircle isRecording={state.isRecording} />
          <Title>{state.audioRecorded ? "Audio listo para analizar" : "¿Cómo te sientes?"}</Title>
          <Subtitle>
            {state.isRecording
              ? "Grabando"
              : state.audioRecorded
              ? "Pulsa para volver a grabar o reproducir"
              : "Pulsa el micrófono para grabar"}
          </Subtitle>
          <ButtonContainer>
            <MicButton onClick={handleMicClick}>
              {state.isRecording ? <FaStop /> : state.audioRecorded ? <MdDelete /> : <FaMicrophone />}
            </MicButton>
            <Timer>{state.timer}</Timer>
            {state.audioRecorded ? (
              <>
                {/* <DownloadButton 
                  href={audioBlob.current ? URL.createObjectURL(audioBlob.current) : "#"}
                  download="recording.wav"
                >
                  <FaDownload />
                </DownloadButton> */}
                <SendButton onClick={handleSendClick}>
                  <IoSend />
                </SendButton>
                <audio
                  ref={audioPlayer}
                  src={audioBlob.current ? URL.createObjectURL(audioBlob.current) : ""}
                  onEnded={handleAudioEnded}
                />
              </>
            ) : (
              <SendButtonBlocked>
                <IoSend />
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
  color: #bdbdbd;
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

const MicButton = styled.button`
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

const PlayPauseButton = styled.button`
  width: 60px;
  height: 60px;
  background: #f5e1c7;
  border: none;
  border-radius: 50%;
  color: #e69319;
  font-size: 28px;
  margin: 0 16px;
  cursor: pointer;
  transition: background 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DownloadButton = styled.a`
  width: 60px;
  height: 60px;
  background: #d1e7f3;
  border: none;
  border-radius: 50%;
  color: #e69319;
  font-size: 28px;
  margin: 0 16px;
  cursor: pointer;
  transition: background 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SendButtonBlocked = styled.button`
  width: 60px;
  height: 60px;
  background: #D9D9D9;
  border: none;
  border-radius: 50%;
  color: #828282;
  font-size: 28px;
  margin: 0 16px;
  display: flex; /* Centering content */
  align-items: center; /* Center vertically */
  justify-content: center; /* Center horizontally */
`;

const SendButton = styled.button`
  width: 60px;
  height: 60px;
  background: #C7E5D4;
  border: none;
  border-radius: 50%;
  color: #219653;
  font-size: 28px;
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
