const ReverseText = (inputString) => {
    const cleanedString = inputString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    
    const reversedString = cleanedString.split('').reverse().join('');
    
    return reversedString;
  };

export default ReverseText