export const report = {
  "title": "Acabo de analizar mi voz y así es como me siento:",
  "emotion": "Mi emoción más fuerte.",
  "stress": {
    "title": "Estrés",
    "descriptionFirstPerson": {
      "low": "A penas me siento en alerta o irritable.",
      "medium": "Me siento algo en alerta o irritable.",
      "high": "Me siento bastante en alerta o irritable."
    },
    "descriptionSecondPerson": {
      "low": "A penas te sientes en alerta o irritable.",
      "medium": "Te sientes algo en alerta o irritable.",
      "high": "Te sientes bastante en alerta o irritable."
    }
  },
  "anxiety": {
    "title": "Ansiedad",
    "descriptionFirstPerson": {
      "low": "A penas siento nervios o preocupación.",
      "medium": "Siento algo de nervios o preocupación.",
      "high": "Siento bastantes nervios o preocupación."
    },
    "descriptionSecondPerson": {
      "low": "A penas sientes nervios o preocupación.",
      "medium": "Sientes algo de nervios o preocupación.",
      "high": "Sientes bastantes nervios o preocupación."
    }
  },
  "depression": {
    "title": "Depresión",
    "descriptionFirstPerson": {
      "low": "A penas me siento triste o culpable.",
      "medium": "Me siento algo triste o culpable.",
      "high": "Me siento bastante triste o culpable."
    },
    "descriptionSecondPerson": {
      "low": "A penas te sientes triste o culpable.",
      "medium": "Te sientes algo triste o culpable.",
      "high": "Te sientes bastante triste o culpable."
    }
  },
  "level": {
    "low": "Bajo",
    "medium": "Media",
    "high": "Alta"
  },
  "link": "Más información",
  "emotions": {
    "angry": "😠 Enfado",
    "calm": "😌 Calma",
    "disgust": "🤢 Asco",
    "fearful": "😨 Temor",
    "happy": "😊 Felicidad",
    "neutral": "😐 Neutral",
    "sad": "😢 Tristeza",
    "surprised": "😲 Sorpresa"
  }
};

export const pctToTextFirstPerson = (metric, level) => {
  if (level <= 0.33) {
    return report[metric].descriptionFirstPerson.low;
  } else if (level <= 0.66) {
    return report[metric].descriptionFirstPerson.medium;
  } else {
    return report[metric].descriptionFirstPerson.high;
  }
}

export const pctToTextSecondPerson = (metric, level) => {
  if (level <= 0.33) {
    return report[metric].descriptionSecondPerson.low;
  } else if (level <= 0.66) {
    return report[metric].descriptionSecondPerson.medium;
  } else {
    return report[metric].descriptionSecondPerson.high;
  }
}

