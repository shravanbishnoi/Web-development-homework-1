export const ReplaceSpacesWithUnderscores = (inputString) => {
    const botname = "SpaceSwapper";
    return {botname, text: inputString.replace(/\s/g, '_')};
  };
  