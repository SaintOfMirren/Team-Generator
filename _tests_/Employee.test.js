const Employee = require('../lib/Employee');

describe('Employee', () => {
  describe('Initialization', () => {
    it('should create an object with a name, employeeId, and email', () => {
      const employee = new Employee('John Doe', 123, 'john.doe@example.com');

      expect(employee.name).toEqual('John Doe');
      expect(employee.employeeId).toEqual(123);
      expect(employee.email).toEqual('john.doe@example.com');
    });
  });

  describe('Methods', () => {
    it('should return the name of the employee', () => {
      const employee = new Employee('John Doe', 123, 'john.doe@example.com');

      const result = employee.getName();

      expect(result).toEqual('John Doe');
    });

    it('should return the employee ID', () => {
      const employee = new Employee('John Doe', 123, 'john.doe@example.com');

      const result = employee.getEmployeeId();

      expect(result).toEqual(123);
    });

    it('should return the email address', () => {
      const employee = new Employee('John Doe', 123, 'john.doe@example.com');

      const result = employee.getEmail();

      expect(result).toEqual('john.doe@example.com');
    });

    it('should return "Employee" as the role', () => {
      const employee = new Employee('John Doe', 123, 'john.doe@example.com');

      const result = employee.getRole();

      expect(result).toEqual('Employee');
    });
  });
});