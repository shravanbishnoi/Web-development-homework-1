const CountWords = (inputString) => {
    // Remove punctuations from the string
    const cleanedString = inputString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  
    // Split the string by any whitespace and filter out empty strings
    const wordsArray = cleanedString.trim().split(/\s+/);
    const botname = "WordCountWizard";
    return {botName: botname , text: wordsArray.length};
  }
  
  export default CountWords;