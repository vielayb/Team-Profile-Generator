const Engineer = require('../lib/Engineer.js');

test('creates a engineer object', () => {
    const engineer = new Engineer('Vielay', 'email', 5, 'mygithub');

    expect(engineer.name).toBe('Vielay');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('email');
    expect(engineer.github).toBe('mygithub');

 
})

test("gets engineer's name", () => {
    const engineer = new Engineer('Vielay', 'email', 5);
  
    expect(engineer.getName()).toEqual(expect.stringContaining(engineer.name.toString()));
  });

  test("gets engineer's id", () => {
    const engineer = new Engineer('Vielay', 'email', 5);
  
    expect(engineer.getId()).toEqual(expect.stringContaining(engineer.id.toString()));
  });

  test("gets engineer's email", () => {
    const engineer = new Engineer('Vielay', 'email', 5);
  
    expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email.toString()));
  });

  test("gets engineer's github", () => {
    const engineer = new Engineer('Vielay', 'email', 5, 'mygithub');
  
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
  });