# React Chat Bot Interface (StringShaper)
This project is a React-based chat interface where a user can send messages and interact with a simple bot. The bot performs random text transformations on the user's messages and responds within the chat interface. This chat app mimics the look and feel of popular messaging platforms like Discord or Slack and demonstrates various text manipulation techniques.

## Features
- User Input and Bot Response: The user sends a message, and the bot replies with a transformed version of the message.
- Random Text Transformations: The bot randomly applies one of five transformations to the user’s input:
  - Counting the total number of characters. (CharCountMaster)
  - Counting the number of vowels and consonants. (VocalMaster)
  - Counting the number of words. (WordCountWizard)
  - Replacing spaces with underscores. (SpaceSwapper)
  - Reversing the text. (BackFlipBot)
  - Converting text to uppercase. (ShoutBot)
  - Converting text to lowercase. (WhisperBot)

- Simple, Intuitive UI: The chat interface resembles modern chat apps and is styled to distinguish between the user’s messages and the bot’s responses.
- Scroll Feature: The chat history can scroll as messages are added, ensuring a smooth user experience.
- Basic Input Validation: The user cannot submit an empty or invalid message.
- Random Bot Name: The bot's name changes with every message, adding variety to the chat experience.
- Theme: User can switch themes between light and dark.

## Technologies Used
- React (Functional Components, Hooks)
- CSS for styling
- JavaScript for text transformations

## Getting Started
### Prerequisites
To run this project, you need to have Node.js and npm installed on your machine. If you haven't installed them yet, you can download and install from [here](https://nodejs.org/en)

https://github.com/shravanbishnoi/Web-development-homework-1

## Installation and Setup
Follow these steps to set up and run the project:

- Clone the Repository: First, clone the project repository to your local machine:
  `git clone https://github.com/shravanbishnoi/Web-development-homework-1`
- Navigate to the Project Directory: After cloning, navigate to the project folder:
  `cd bot-app`
- Install Dependencies: Install the required npm packages by running:
  `npm install`
- Start the Development Server: Run the following command to start the local development server:
  `npm run dev`
This command will start the app and open it in your default web browser by `ctrl + click` the URL.

## Using the App:
- Type a message into the chat input field and press Enter or click the Send button.
- The user’s message will appear in the chat window, and after a short delay, the bot will reply with a transformed version of the text.
- The bot will apply a random transformation each time and will display its name along with the transformation.

## Contributing
Feel free to open issues or submit pull requests if you have suggestions for improvements or new features!
