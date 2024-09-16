export const ReplaceSpacesWithUnderscores = (inputString) => {
    const botname = "SpaceSwapper";
    return {botName: botname, text: inputString.replace(/\s/g, '_')};
  };
  