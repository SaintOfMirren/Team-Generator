const inquirer = require('inquirer');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const generateHTML = require('./generateHTML');

const teamRoster = [];

// Function to prompt for team manager details
function promptManager() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "Enter the team manager's name:",
      validate: function (input) {
        return input !== '' ? true : "Please enter a valid name.";
      },
    },
    {
      type: 'input',
      name: 'employeeId',
      message: "Enter the team manager's employee ID:",
      validate: function (input) {
        return /^\d+$/.test(input) ? true : "Please enter a valid employee ID (numeric value only).";
      },
    },
    {
      type: 'input',
      name: 'email',
      message: "Enter the team manager's email address:",
      validate: function (input) {
        return /\S+@\S+\.\S+/.test(input) ? true : "Please enter a valid email address.";
      },
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "Enter the team manager's office number:",
      validate: function (input) {
        return /^\d+$/.test(input) ? true : "Please enter a valid office number (numeric value only).";
      },
    },
  ]);
}


// Function to prompt for engineer details
function promptEngineer() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "Enter the Engineer's name:",
      validate: function (input) {
        return input !== '' ? true : "Please enter a valid name.";
      },
    },
    {
      type: 'input',
      name: 'employeeId',
      message: "Enter the Engineer's employee ID:",
      validate: function (input) {
        return /^\d+$/.test(input) ? true : "Please enter a valid employee ID (numeric value only).";
      },
    },
    {
      type: 'input',
      name: 'email',
      message: "Enter the Engineer's email address:",
      validate: function (input) {
        return /\S+@\S+\.\S+/.test(input) ? true : "Please enter a valid email address.";
      },
    },
    {
      type: 'input',
      name: 'GitHubName',
      message: "Enter the Engineer's Github Username:",
      validate: function (input) {
        return input !== '' ? true : "Please enter a valid name.";
      },
    },
    {
      type: 'list',
      name: 'nextAction',
      message: 'What would you like to do next?',
      choices: ['Add another member', 'Finish building my team']
    },
  ])
  .then((answer) => {
    switch (answer.nextAction) {
      case 'Add another member':
        promptTeamMembers();
        break;
      case 'Finish building my team':
        generateHTML(teamRoster); // Generate HTML file
          console.log('Team roster generated successfully!');
          break;
    }
  })
}

// Function to prompt for intern details
function promptIntern() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "Enter the Intern's name:",
      validate: function (input) {
        return input !== '' ? true : "Please enter a valid name.";
      },
    },
    {
      type: 'input',
      name: 'employeeId',
      message: "Enter the Intern's employee ID:",
      validate: function (input) {
        return /^\d+$/.test(input) ? true : "Please enter a valid employee ID (numeric value only).";
      },
    },
    {
      type: 'input',
      name: 'email',
      message: "Enter the Intern's email address:",
      validate: function (input) {
        return /\S+@\S+\.\S+/.test(input) ? true : "Please enter a valid email address.";
      },
    },
    {
      type: 'input',
      name: 'githubName',
      message: "Enter the Intern's Github school:",
      validate: function (input) {
        return input !== '' ? true : "Please enter a valid name.";
      },
    },
    {
      type: 'list',
      name: 'nextAction',
      message: 'What would you like to do next?',
      choices: ['Add another member', 'Finish building my team']
    },
  ])
  .then((answer) => {
    switch (answer.nextAction) {
      case 'Add another member':
        promptTeamMembers();
        break;
      case 'Finish building my team':
        generateHTML(teamRoster); // Generate HTML file
          console.log('Team roster generated successfully!');
          break;
    }
  })
}

function promptTeamMembers() {
  // Prompt user for the type of team member to add
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'memberType',
        message: 'Select the type of team member to add:',
        choices: ['Engineer', 'Intern', 'Finish building my team'],
      },
    ])
    .then((answer) => {
      switch (answer.memberType) {
        case 'Engineer':
          promptEngineer();
          break;
        case 'Intern':
          promptIntern();
          break;
        case 'Finish building my team':
          generateHTML(teamRoster); // Generate HTML file
          console.log('Team roster generated successfully!');
          break;
        default:
          console.log('Invalid choice. Please try again.');
          promptTeamMembers(); // Prompt again if an invalid choice is made
          break;
      }
    });
}

module.exports = {
  promptManager,
  promptEngineer,
  promptIntern,
  promptTeamMembers,
};