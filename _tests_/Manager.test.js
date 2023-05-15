const Manager = require('../lib/Manager');

describe('Manager', () => {
  describe('Initialization', () => {
    it('should create an object with a name, employeeId, email, and office number', () => {
      const manager = new Manager('Michael Scott', 123, 'michael.scott@example.com', 'A101');

      expect(manager.name).toEqual('Michael Scott');
      expect(manager.employeeId).toEqual(123);
      expect(manager.email).toEqual('michael.scott@example.com');
      expect(manager.officeNumber).toEqual('A101');
    });
  });

  describe('Methods', () => {
    it('should return the name of the manager', () => {
      const manager = new Manager('Michael Scott', 123, 'michael.scott@example.com', 'A101');

      const result = manager.getName();

      expect(result).toEqual('Michael Scott');
    });

    it('should return the employee ID', () => {
      const manager = new Manager('Michael Scott', 123, 'michael.scott@example.com', 'A101');

      const result = manager.getEmployeeId();

      expect(result).toEqual(123);
    });

    it('should return the email address', () => {
      const manager = new Manager('Michael Scott', 123, 'michael.scott@example.com', 'A101');

      const result = manager.getEmail();

      expect(result).toEqual('michael.scott@example.com');
    });

    it('should return the office number', () => {
      const manager = new Manager('Michael Scott', 123, 'michael.scott@example.com', 'A101');

      const result = manager.getOfficeNumber();

      expect(result).toEqual('A101');
    });

    it('should return "Manager" as the role', () => {
      const manager = new Manager('Michael Scott', 123, 'michael.scott@example.com', 'A101');

      const result = manager.getRole();

      expect(result).toEqual('Manager');
    });
  });
});