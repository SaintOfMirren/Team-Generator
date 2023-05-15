const Intern = require('../lib/Intern');

describe('Intern', () => {
  describe('Initialization', () => {
    it('should create an object with a name, employeeId, email, and school', () => {
      const intern = new Intern('Sarah Johnson', 789, 'sarah.johnson@example.com', 'University of ABC');

      expect(intern.name).toEqual('Sarah Johnson');
      expect(intern.employeeId).toEqual(789);
      expect(intern.email).toEqual('sarah.johnson@example.com');
      expect(intern.school).toEqual('University of ABC');
    });
  });

  describe('Methods', () => {
    it('should return the name of the intern', () => {
      const intern = new Intern('Sarah Johnson', 789, 'sarah.johnson@example.com', 'University of ABC');

      const result = intern.getName();

      expect(result).toEqual('Sarah Johnson');
    });

    it('should return the employee ID', () => {
      const intern = new Intern('Sarah Johnson', 789, 'sarah.johnson@example.com', 'University of ABC');

      const result = intern.getEmployeeId();

      expect(result).toEqual(789);
    });

    it('should return the email address', () => {
      const intern = new Intern('Sarah Johnson', 789, 'sarah.johnson@example.com', 'University of ABC');

      const result = intern.getEmail();

      expect(result).toEqual('sarah.johnson@example.com');
    });

    it('should return the school of the intern', () => {
      const intern = new Intern('Sarah Johnson', 789, 'sarah.johnson@example.com', 'University of ABC');

      const result = intern.getSchool();

      expect(result).toEqual('University of ABC');
    });

    it('should return "Intern" as the role', () => {
      const intern = new Intern('Sarah Johnson', 789, 'sarah.johnson@example.com', 'University of ABC');

      const result = intern.getRole();

      expect(result).toEqual('Intern');
    });
  });
});