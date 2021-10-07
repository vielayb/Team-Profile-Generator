const Employee = require('../lib/Employee.js');

test('creates a employee object', () => {
    const employee = new Employee('Vielay', 'email');

    expect(employee.name).toBe('Vielay');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('email');
})