const CountWords = (inputString) => {
    const cleanedString = inputString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  
    const wordsArray = cleanedString.trim().split(/\s+/);
    const botname = "WordCountWizard";
    return {botName: botname , text: wordsArray.length};
  }
  
  export default CountWords;