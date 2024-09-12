
const CountVowelsAndConsonants = (inputString) => {
    const vowels = 'aeiouAEIOU';
    let vowelsCount = 0;
    let consonantsCount = 0;
    let counts = ''


    for (let char of inputString) {
      if (/[a-zA-Z]/.test(char)) {
        if (vowels.includes(char)) {
          vowelsCount++;
        } else {
          consonantsCount++;
        }
      }
    }
    const botname = "VocalMaster";
    counts = `Vowels: ${vowelsCount} \n Consonants: ${consonantsCount}`
    return {botname, text: counts}
  };

export default CountVowelsAndConsonants