const ReverseText = (inputString) => {
    // Remove punctuations from the string
    const cleanedString = inputString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    
    const reversedString = cleanedString.split('').reverse().join('');
    
    return reversedString;
  };

export default reverseText