//Data for mixed messages to be randomised from:

const timeUnits = {
  earthTimeUnit: ['first light', 'sunrise', 'music', 'training', 'ablutions', 'noon', 'libations', 'prayer', 'leasure', 'endings', 'sunset', 'evening']
  sunTimeUnit: ['Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scoropius', 'Ophiuchus', 'Sagittarius']
  moonTimeUnit: ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
}

//Randomiser function
const randIndex = (timeUnit) => {
  return Math.floor(Math.random() * (timeUnit.length))
}

const timeGenerator = () => {
  console.log(`The hour of the day is ${earthTimeUnit[randIndex(earthTimeUnit)]}.\nWhile the sun is in the constellation ${sunTimeUnit[randIndex(sunTimeUnit)]}.\nAnd the moon is ${moonTimeUnit[randIndex(moonTimeUnit)]}.`)
}

timeGenerator()