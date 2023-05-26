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
  .then(() => {
    // After the manager's information is entered, ask the user to add team members or finish building the team
    promptTeamMembers();
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });
}

// Call the startApp function to begin the application
startApp();