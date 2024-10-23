export const report = {
  "title": "¡Mira! Me ha parecido interesante esto.",
  "subtitle": "¡Mira! Acabo de analizar mi voz y así es como me siento:",
  "cta": "Tu también puedes analizar tu voz en https://iridis.care",
  "emotion": "Mi emoción más fuerte.",
  "stress": {
    "title": "Estrés",
    "descriptionFirstPerson": {
      "low": "Casi no noto tensión ni me siento irritable. Me siento tranquilo.",
      "medium": "Siento algo de tensión y un poco de irritabilidad, pero puedo manejarlo.",
      "high": "Me siento muy tenso y fácilmente irritable. Estoy en alerta constante."
    },
    "descriptionSecondPerson": {
      "low": "Casi no notas tensión ni te sientes irritable. Te sientes tranquilo.",
      "medium": "Sientes algo de tensión y un poco de irritabilidad, pero puedes manejarlo.",
      "high": "Te sientes muy tenso y fácilmente irritable. Estás en alerta constante."
    }
  },
  "anxiety": {
    "title": "Ansiedad",
    "descriptionFirstPerson": {
      "low": "Apenas siento nervios o preocupación. Estoy relajado.",
      "medium": "Siento algo de nervios o preocupación, pero puedo sobrellevarlo.",
      "high": "Me siento muy nervioso y preocupado. Cuesta concentrarme."
    },
    "descriptionSecondPerson": {
      "low": "Apenas sientes nervios o preocupación. Estás relajado.",
      "medium": "Sientes algo de nervios o preocupación, pero puedes sobrellevarlo.",
      "high": "Sientes nervioso y preocupación. Te cuesta concentrarte."
    }
  },
  "self_esteem": {
    "title": "Autoestima",
    "descriptionFirstPerson": {
      "low": "Me cuesta reconocer mis cualidades. Dudo de mí y de mi valor.",
      "medium": "Tengo una visión equilibrada de mí, aunque a veces dudo de mis capacidades.",
      "high": "Me siento seguro de mi valor. Reconozco mis fortalezas."
    },
    "descriptionSecondPerson": {
      "low": "Te cuesta reconocer tus cualidades. Dudas de ti y de tu valor.",
      "medium": "Tienes una visión equilibrada de ti, aunque a veces dudas de tus capacidades.",
      "high": "Te sientes seguridad. Reconoces tus fortalezas."
    }
  },
  "self_efficacy": {
    "title": "Autoeficacia",
    "descriptionFirstPerson": {
      "low": "Dudo mucho de mi capacidad para alcanzar mis objetivos.",
      "medium": "Confío algo en mi capacidad, pero a veces me siento inseguro ante los desafíos.",
      "high": "Confío plenamente en mi capacidad para lograr lo que me propongo."
    },
    "descriptionSecondPerson": {
      "low": "Dudas mucho de tu capacidad para alcanzar tus objetivos.",
      "medium": "Confías algo en tu capacidad, pero a veces te sientes inseguro ante los desafíos.",
      "high": "Confías plenamente en tu capacidad para lograr lo que te propones."
    }
  },
  "resilience": {
    "title": "Resiliencia",
    "descriptionFirstPerson": {
      "low": "Me siento frágil ante las dificultades y me cuesta recuperarme.",
      "medium": "Me recupero de los problemas, aunque a veces me toma esfuerzo.",
      "high": "Me siento fuerte ante las adversidades y sé que puedo recuperarme rápidamente."
    },
    "descriptionSecondPerson": {
      "low": "Te sientes frágil ante las dificultades y te cuesta recuperarte.",
      "medium": "Te recuperas de los problemas, aunque a veces te toma esfuerzo.",
      "high": "Te sientes fuerte ante las adversidades y sabes que puedes recuperarte rápidamente."
    }
  },
  "depression": {
    "title": "Depresión",
    "descriptionFirstPerson": {
      "low": "Apenas me siento triste o culpable.",
      "medium": "Siento algo de tristeza o culpa, pero puedo continuar.",
      "high": "Me siento muy triste o culpable, y me cuesta manejar estas emociones."
    },
    "descriptionSecondPerson": {
      "low": "Apenas te sientes triste o culpable.",
      "medium": "Sientes algo de tristeza o culpa, pero puedes continuar.",
      "high": "Te sientes muy triste o culpable, y te cuesta manejar estas emociones."
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

export const ProgressBarLabel = (percentage) => {
  if (percentage < 20) {
    return 'Muy baja';
  } else if (percentage < 40) {
    return 'Baja';
  } else if (percentage < 60) {
    return 'Media';
  } else if (percentage < 80) {
    return 'Alta';
  } else {
    return 'Muy alta';
  }
};