//Data for mixed messages to be randomised from:

const earthTimeUnit = ['first light', 'sunrise', 'music', 'training', 'ablutions', 'noon', 'libations', 'prayer', 'leasure', 'endings', 'sunset', 'evening']
const moonTimeUnit = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const sunTimeUnit = ['Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scoropius', 'Ophiuchus', 'Sagittarius']

const timeGenerator = () => {
  let rand = Math.floor(Math.random() * 13)
  console.log(`The hour of the day is ${earthTimeUnit[rand]}.\nWhile the sun is in the constellation ${sunTimeUnit[rand]}.\nAnd the moon is ${moonTimeUnit[rand]}.`)
}

timeGenerator()