const CountWords = (inputString) => {
    // Remove punctuations from the string
    const cleanedString = inputString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  
    // Split the string by any whitespace and filter out empty strings
    const wordsArray = cleanedString.trim().split(/\s+/);
  
    return wordsArray.length;
  }
  
  export default CountWords;