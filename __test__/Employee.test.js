const Employee = require('../lib/Employee.js');

test('creates a employee object', () => {
    const employee = new Employee('Vielay', 'email', 5);

    expect(employee.name).toBe('Vielay');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('email');

 
})

test("gets employee's name", () => {
    const employee = new Employee('Vielay', 'email', 5);
  
    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
  });

  test("gets employee's id", () => {
    const employee = new Employee('Vielay', 'email', 5);
  
    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
  });

  test("gets employee's email", () => {
    const employee = new Employee('Vielay', 'email', 5);
  
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
  });