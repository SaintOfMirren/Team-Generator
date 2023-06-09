const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, employeeId, email, githubUsername) {
    super(name, employeeId, email);
    this.githubUsername = githubUsername;
  }

  getGithubUsername() {
    return this.githubUsername;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;