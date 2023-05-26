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

  // Start prompting for team members
  promptTeamMembers();
}

// Call the startApp function to begin the application
startApp();