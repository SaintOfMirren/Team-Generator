// const promptTeamMembers = require('./src/prompt');
const {
  promptManager,
  promptEngineer,
  promptIntern,
  promptTeamMembers,
} = require('./src/prompt');

// Function to start the application
function startApp() {
  console.log('Welcome to the Team Roster Generator!');
  console.log('Please enter the details for your team members.');

  promptManager()
  .catch((error) => {
    console.error('An error occurred:', error);
  });
}

// Call the startApp function to begin the application
startApp();