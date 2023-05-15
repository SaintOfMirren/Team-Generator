const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
  describe('Initialization', () => {
    it('should create an object with a name, employeeId, email, and GitHub username', () => {
      const engineer = new Engineer('Jane Smith', 456, 'jane.smith@example.com', 'janesmith');

      expect(engineer.name).toEqual('Jane Smith');
      expect(engineer.employeeId).toEqual(456);
      expect(engineer.email).toEqual('jane.smith@example.com');
      expect(engineer.githubUsername).toEqual('janesmith');
    });
  });

  describe('Methods', () => {
    it('should return the name of the engineer', () => {
      const engineer = new Engineer('Jane Smith', 456, 'jane.smith@example.com', 'janesmith');

      const result = engineer.getName();

      expect(result).toEqual('Jane Smith');
    });

    it('should return the employee ID', () => {
      const engineer = new Engineer('Jane Smith', 456, 'jane.smith@example.com', 'janesmith');

      const result = engineer.getEmployeeId();

      expect(result).toEqual(456);
    });

    it('should return the email address', () => {
      const engineer = new Engineer('Jane Smith', 456, 'jane.smith@example.com', 'janesmith');

      const result = engineer.getEmail();

      expect(result).toEqual('jane.smith@example.com');
    });

    it('should return the GitHub username', () => {
      const engineer = new Engineer('Jane Smith', 456, 'jane.smith@example.com', 'janesmith');

      const result = engineer.getGithubUsername();

      expect(result).toEqual('janesmith');
    });

    it('should return "Engineer" as the role', () => {
      const engineer = new Engineer('Jane Smith', 456, 'jane.smith@example.com', 'janesmith');

      const result = engineer.getRole();

      expect(result).toEqual('Engineer');
    });
  });
});