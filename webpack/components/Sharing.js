import { report, pctToTextFirstPerson, ProgressBarLabel } from './Copies';

export const reportSharing = (object) => {
  let text = ''
  text = `${report.title}\n\n`
  text = `${report.subtitle}\n\n`
  text = text + formatEmotions(object);
  text = text + formatBioMarkers(object);
  text = text + report.cta;
  return text
}

const formatBioMarkers = (item) => {
  let text = ''
  text = text + `😱 Estrés · ${ProgressBarLabel(item.stress.high*100)}\n${progressBar(item.stress.high, 1, 10)}\n${pctToTextFirstPerson("stress", item.stress.high)}\n\n`;
  text = text + `😰 Ansiedad · ${ProgressBarLabel(item.stress.high*100)}\n${progressBar(item.vemotions.fearful, 1, 10)}\n${pctToTextFirstPerson("anxiety", item.vemotions.fearful)}\n\n`;
  text = text + `😔 Depresión · ${ProgressBarLabel(item.stress.high*100)}\n${progressBar(item.depression.high, 1, 10)}\n${pctToTextFirstPerson("depression", item.depression.high)}\n\n`;
  return text;
};

const formatEmotions = (item) => {
  let text = ''
  let max = 0;
  let maxKey = "";
  for(let emotion in item.vemotions){
    if(item.vemotions[emotion]> max){
      max = item.vemotions[emotion];
      maxKey= emotion
    }
  }
  text = text + `${report.emotions[maxKey]} · ${ProgressBarLabel(item.vemotions[maxKey]*100)}\n${progressBar(item.vemotions[maxKey], 1, 10)}\n${report.emotion}\n\n`;
  return text;
};

const progressBar = (value, maxValue, size) => {
  const percentage = value / maxValue; 
  const progress = Math.round((size * percentage)); 
  const emptyProgress = size - progress; 

  const progressText = '■'.repeat(progress); 
  const emptyProgressText = '□'.repeat(emptyProgress); 
  const percentageText = Math.round(percentage * 100) + '%'; 

  const bar =  progressText + emptyProgressText + ` (${percentageText})`; 
  return bar;
}

