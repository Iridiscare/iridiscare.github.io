import React, { useEffect, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

import { FiShare } from "react-icons/fi";
import { FaWhatsapp, FaRegCopy } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoCloseSharp } from 'react-icons/io5';
import { MdOutlineMail } from "react-icons/md";

import { reportSharing } from './Sharing';
import { report, pctToTextSecondPerson, ProgressBarLabel } from './Copies';

const Report = (data) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  
  const key = getMaxKey(data.analysisData.vemotions)

  const emotions = [
    // { name: report.emotions[key], percentage: Math.round(data.analysisData.vemotions[key]*100), description: 'Tu emoción más fuerte ahora mismo.'},
    {inverse: true, name: '🌱 Resiliencia', percentage: Math.round(data.analysisData.stress.low*100), description: pctToTextSecondPerson("resilience", data.analysisData.stress.low)},
    {inverse: true, name: '💪 Autoeficacia', percentage: Math.round(data.analysisData.self_efficacy.high*100), description: pctToTextSecondPerson("self_efficacy", data.analysisData.self_efficacy.high)},
    {inverse: true, name: '🪞 Autoestima', percentage: Math.round(data.analysisData.traits.self_esteem*100), description: pctToTextSecondPerson("self_esteem", data.analysisData.traits.self_esteem)},
    {inverse: false, name: '😰 Ansiedad', percentage: Math.round(data.analysisData.vemotions.fearful*100), description: pctToTextSecondPerson("anxiety", data.analysisData.vemotions.fearful)},
    {inverse: false, name: '😔 Depresión', percentage: Math.round(data.analysisData.depression.high*100), description: pctToTextSecondPerson("depression", data.analysisData.depression.high)},
  ];

  const reportMessage = `${reportSharing(data.analysisData)}`;

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(reportMessage)}`,
    email: `mailto:?subject=Informe%20emocional&body=${encodeURIComponent(reportMessage)}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(reportMessage)}`
  };

  return (
    <Container>
      <Header>¡Tu informe de salud emocional!</Header>
      {emotions.map((emotion, index) => (
        <EmotionItem key={index} emotion={emotion} />
      ))}
      <AdviceSection>
        <AdviceHeader>Consejos</AdviceHeader>
        <AdviceItem>🧘 Practica ejercicios de relajación.</AdviceItem>
        <AdviceItem>🥰 Haz actividades que disfrutes.</AdviceItem>
        <AdviceItem>🗣️ Habla sobre tus sentimientos.</AdviceItem>
      </AdviceSection>
      <Footer>Iridis puede cometer errores. Consulta los resultados con tu interior.</Footer>
      <ShareButton onClick={toggleModal}>
        <a className="feature-button button button-primary btn-lg animate__animated animate__pulse"
        onclick="gtag('event', 'share_report', { event_category: 'Share Report', event_action: 'Sharing Button Opened', event_label:'sharing'})">
          <FiShare size={18}/>&nbsp;&nbsp;Compartir
        </a>
      </ShareButton>

      {/* Modal de compartir */}
      {isModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <CloseIcon onClick={toggleModal} />
            <TitleModal>Comparte tu informe</TitleModal>
            <SubtitleModal>Elige dónde compartir o cópialo al portapapeles.</SubtitleModal>
            <SocialLinks>
              <SocialLink href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer"><FaWhatsapp size={32} /></SocialLink>
              <SocialLink href={shareLinks.twitter} target="_blank" rel="noopener noreferrer"><FaXTwitter size={32} /></SocialLink>
              <SocialLink href={shareLinks.email} target="_blank" rel="noopener noreferrer"><MdOutlineMail size={32} /></SocialLink>
              <SocialLink onClick={() => {navigator.clipboard.writeText(reportMessage)}} target="_blank" rel="noopener noreferrer"><FaRegCopy size={32} /></SocialLink>
            </SocialLinks>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
};

const EmotionItem = ({ emotion }) => {
  const [filled, setFilled] = useState(0);
  const [percentage, setPercentage] = useState(0);

  // Animate progress bar
  useEffect(() => {
    const animateProgressBar = () => {
      let start = filled;
      const end = emotion.percentage;

      const step = () => {
        start += (end - start) * 0.05; // Adjust the speed of animation
        if (Math.abs(end - start) < 0.5) {
          setFilled(end);
        } else {
          setFilled(start);
          requestAnimationFrame(step);
        }
      };

      step();
    };

    const timeout = setTimeout(animateProgressBar, 300); // delay to start the animation
    return () => clearTimeout(timeout);
  }, [emotion.percentage]);

  // Animate percentage display
  useEffect(() => {
    const animatePercentage = () => {
      let currentPercentage = 0;
      const endPercentage = emotion.percentage;

      const increment = setInterval(() => {
        currentPercentage += 1;
        if (currentPercentage >= endPercentage) {
          clearInterval(increment);
          setPercentage(endPercentage);
        } else {
          setPercentage(currentPercentage);
        }
      }, 10); // Adjust speed of percentage increment

      return () => clearInterval(increment);
    };

    animatePercentage();
  }, [emotion.percentage]);

  return (
    <EmotionContainer>
      <EmotionHeader>
        <b>{emotion.name}</b>&nbsp;·&nbsp;
        {emotion.inverse ? (
          <EmotionLevelInverse pct={emotion.percentage}>
            {ProgressBarLabel(emotion.percentage)}
          </EmotionLevelInverse>
        ) : (
          <EmotionLevel pct={emotion.percentage}>
            {ProgressBarLabel(emotion.percentage)}
          </EmotionLevel>
        )}
        &nbsp;·&nbsp;<Percentage>{percentage}%</Percentage>
      </EmotionHeader>
      <ProgressBar color={emotion.percentage} percentage={filled} inverse={emotion.inverse} />
      <EmotionDescription>{emotion.description}</EmotionDescription>
    </EmotionContainer>
  );
};

const ProgressBar = ({ color, percentage, inverse }) => (
  <BarContainer>
    {inverse ? <BarInverse color={color} percentage={percentage} />:<Bar color={color} percentage={percentage} />}
  </BarContainer>
);

const getMaxKey = (obj) => {
  return Object.keys(obj).reduce((maxKey, currentKey) =>
    obj[currentKey] > obj[maxKey] ? currentKey : maxKey
  );
};
 
const Percentage = styled.span`
  color: #BDBDBD;
`;

const Container = styled.div`
  justify-content: center;
  text-align: center;
  color: #333;
`;

const Header = styled.h3`
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;
`;

const EmotionContainer = styled.div`
  margin-bottom: 20px;
`;

const EmotionHeader = styled.div`
  font-size: 18px;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const EmotionLevel = styled.span`
  color: ${({ pct }) => {
    if (pct < 20) return '#8BC34A';      // Muy Bajo (Green)
    if (pct < 40) return '#CDDC39';      // Bajo (Yellow-green)
    if (pct < 60) return '#FFEB3B';      // Medio (Yellow)
    if (pct < 80) return '#FF9800';      // Alto (Orange)
    return '#F44336';                           // Muy Alto (Red)
  }};
  margin-left: 4px;
`;

const BarContainer = styled.div`
  background: #f0f0f0;
  border-radius: 10px;
  height: 10px;
  width: 100%;
`;

const Bar = styled.div`
  background: ${({ percentage }) => {
    if (percentage < 20) return '#8BC34A';      // Muy Bajo (Green)
    if (percentage < 40) return '#CDDC39';      // Bajo (Yellow-green)
    if (percentage < 60) return '#FFEB3B';      // Medio (Yellow)
    if (percentage < 80) return '#FF9800';      // Alto (Orange)
    return '#F44336';                           // Muy Alto (Red)
  }};
  border-radius: 10px;
  height: 100%;
  width: ${({ percentage }) => percentage}%;
  transition: width 2s ease-in-out;
`;

const EmotionLevelInverse = styled.span`
  color: ${({ pct }) => {
    if (pct < 20) return '#F44336';      // Muy Bajo (Red)
    if (pct < 40) return '#FF9800';      // Bajo (Orange)
    if (pct < 60) return '#FFEB3B';      // Medio (Yellow)
    if (pct < 80) return '#CDDC39';      // Alto (Yellow-green)
    return '#8BC34A';                    // Muy Alto (Green)
  }};
  margin-left: 4px;
`;

const BarInverse = styled.div`
  background: ${({ percentage }) => {
    if (percentage < 20) return '#F44336';      // Muy Bajo (Red)
    if (percentage < 40) return '#FF9800';      // Bajo (Orange)
    if (percentage < 60) return '#FFEB3B';      // Medio (Yellow)
    if (percentage < 80) return '#CDDC39';      // Alto (Yellow-green)
    return '#8BC34A';                           // Muy Alto (Green)
  }};
  border-radius: 10px;
  height: 100%;
  width: ${({ percentage }) => percentage}%;
  transition: width 2s ease-in-out;
`;

const EmotionDescription = styled.p`
  font-size: 14px;
  margin-top: 10px;
  text-align: left;
`;

const AdviceSection = styled.div`
  margin-top: 20px;
`;

const AdviceHeader = styled.h3`
  margin-bottom: 10px;
  text-align: left;
`;

const AdviceItem = styled.p`
  font-size: 14px;
  margin: 5px 0;
  text-align: left;
`;

const Footer = styled.footer`
  text-align: left;
  font-size: 12px;
  margin-top: 20px;
  color: #333;
`;

const ShareButton = styled.div`
  margin-top: 30px;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const ModalContent = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  width: 400px;
  max-width: 90%;
  position: relative;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const SocialLink = styled.a`
  padding: 15px;
  font-size: 30px;
  color: #555;
  text-decoration: none;
  border: 1px solid #ddd;
  border-radius: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const CloseIcon = styled(IoCloseSharp)`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
  font-size: 24px;
  color: #333;
  &:hover {
    color: #9B51E0;
  }
`;

const TitleModal = styled.h3`
  font-size: 24px;
  color: #333;
  width: 100%;
`;

const SubtitleModal = styled.h6`
  margin-top: 8px;
  text-align: center !important;
  width: 100%;
  font-weight: normal;
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeOut = keyframes`
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(-10px); }
`;

export default Report;
