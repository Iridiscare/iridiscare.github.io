import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { FaMicrophone, FaStop } from 'react-icons/fa';
import { IoSend } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

import Report from './Report';

import axios from "axios";

const Recorder = () => {
  const [state, setState] = useState({
    audioRecorded: false,
    audioSent: false,
    isRecording: false,
    timer: '00:00',
  });
  const [recorder, setRecorder] = useState(null);
  const audioContext = useRef(null);
  const gumStream = useRef(null);
  const timerInterval = useRef(null);
  const audioBlob = useRef(null);

  // Initialize the recorder on component mount
  useEffect(() => {
    audioContext.current = new (window.AudioContext || window.webkitAudioContext)();
    return () => {
      if (audioContext.current) audioContext.current.close();
    };
  }, []);

  // Function to start recording
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      gumStream.current = stream;
      const input = audioContext.current.createMediaStreamSource(stream);

      const Recorder = require('recorder-js').default; // Using recorder-js library
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

  // Function to stop recording
  const stopRecording = async () => {
    if (recorder) {
      try {
        const { blob } = await recorder.stop();
        audioBlob.current = blob;
        gumStream.current.getTracks().forEach(track => track.stop());
        stopTimer();
        setState((prev) => ({ ...prev, isRecording: false, audioRecorded: true }));
      } catch (err) {
        console.error("Error stopping recording:", err);
      }
    }
  };

  // Function to send the recorded audio
  const sendAudio = async (blob) => {
    try {
      const data = new FormData();
      data.append('text', "This is the transcription of the audio file");
      data.append('wavfile', blob, "recording.wav");

      const config = { headers: { 'content-type': 'multipart/form-data' } };
      console.error("Audio to send:", data);
      // const response = await axios.post('http://localhost:8080/asr/', data, config);
      // console.log("Audio sent successfully:", response.data);
    } catch (error) {
      console.error("Error sending audio:", error);
    }
  };

  // Toggle recording state
  const handleMicClick = () => {
    if (state.audioRecorded) setState({ isRecording: false, timer: '00:00', audioRecorded: false })
    else {
      if (state.isRecording) stopRecording();
      else startRecording()};
  };

  // Handle the click event for the send button
  const handleSendClick = () => {
    if (audioBlob.current) sendAudio(audioBlob.current);
    setState({ isRecording: false, timer: '00:00', audioRecorded: false, audioSent: true });
  };

  // Timer functions
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
      {state.audioSent? <Report/> : (
        <RecorderContainer>
          <AnimatedCircle isRecording={state.isRecording} />
          <Title>{state.audioRecorded ? "Audio listo para analizar" : "¿Cómo te sientes?"}</Title>
          <Subtitle>
            {state.isRecording ? "Grabando" : (state.audioRecorded ? "Pulsa para enviar o volver a grabar" : "Pulsa el micrófono para grabar")}
          </Subtitle>
          <ButtonContainer>
            <MicButton onClick={handleMicClick}>
              {state.isRecording ? <FaStop /> : (state.audioRecorded ? <MdDelete /> : <FaMicrophone />)}
            </MicButton>
            <Timer>{state.timer}</Timer>
            {state.audioRecorded ? (
              <SendButton onClick={handleSendClick}>
                <IoSend />
              </SendButton>
            ) : (
              <SendButtonBlocked>
                <IoSend />
              </SendButtonBlocked>
            )}
          </ButtonContainer>
        </RecorderContainer>)}
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
  ${({ isRecording }) => isRecording && css`
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
  color: #BDBDBD;
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
  background: #FAD5D5;
  border: none;
  border-radius: 50%;
  color: #EB5757;
  font-size: 28px;
  margin: 0 16px;
  cursor: pointer;
  transition: background 0.3s;
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
  cursor: pointer;
  transition: background 0.3s;
  justify-content: center;
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
  justify-content: center;
`;

const Timer = styled.div`
  font-size: 18px;
  margin: 16px 30px;
  color: #BDBDBD;
`;

export default Recorder;
