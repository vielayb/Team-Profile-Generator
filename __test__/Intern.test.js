const Intern = require('../lib/Intern.js');

test('creates a intern object', () => {
    const intern = new Intern('Vielay', 'email', 5, "UNCC");

    expect(intern.name).toBe('Vielay');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('email');
    expect(intern.school).toBe('UNCC');
 
})

test("gets intern's name", () => {
    const intern = new Intern('Vielay', 'email', 5);
  
    expect(intern.getName()).toEqual(expect.stringContaining(intern.name.toString()));
  });

  test("gets intern's id", () => {
    const intern = new Intern('Vielay', 'email', 5);
  
    expect(intern.getId()).toEqual(expect.stringContaining(intern.id.toString()));
  });

  test("gets intern's email", () => {
    const intern = new Intern('Vielay', 'email', 5);
  
    expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email.toString()));
  });

  test("gets intern's school", () => {
    const intern = new Intern('Vielay', 'email', 5, 'UNCC');
  
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
  });