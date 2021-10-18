const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const pageHTML = require('./src/pageHTML');
const generatePage = require('./src/pageHTML');
let employees = [];

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the managers name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the managers name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please provide employee ID.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide employee ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: 'What is their office number',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter their office number!');
                    return false;
                }
            }
        },
    ]);
};

const promptOption = () => {
    return inquirer.prompt([
        {
            type: 'list',
            message: 'Would you like to add an Engineer, Intern or Finish building the team?',
            name: 'option',
            choices: ['Engineer', 'Intern', 'Finish Team']
        },
    ])  
};

const promptEngineer = () => {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the Engineers name?',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter the Engineers name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: 'Please provide employee ID.',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please provide employee ID!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email address',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter your email address!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'office',
                message: 'What is their GitHub username',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter their GitHub username!');
                        return false;
                    }
                }
            },
        ]) .then(answers => {
            const engineer = new Engineer(answers.name, answers.email, answers.id, answers.office);
            engineer.role = engineer.getRole();
            employees.push(engineer);
            return
        })
}

const promptIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the Inters name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the Interns name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please provide employee ID.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide employee ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is intern school name',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter intern school name!');
                    return false;
                }
            }
        },
    ]) .then(answers => {
        const intern = new Intern(answers.name, answers.email, answers.id, answers.school);
        intern.role = intern.getRole();
        employees.push(intern);
    })
}

const nextEmployee = optionAnswers => {
    if (optionAnswers.option === 'Finish Team') {
        return "Team Completed";
    } 
    if (optionAnswers.option === 'Engineer') {
        return  promptEngineer() .then(promptOption) .then(nextEmployee);
    }
    if (optionAnswers.option === 'Intern') {
        return promptIntern() .then(promptOption) .then(nextEmployee);
    }
    
}

promptManager()
    .then(answers => {
        console.log(answers)
        const manager = new Manager(answers.name, answers.email, answers.id, answers.office);
        employees.push(manager)
        manager.role = manager.getRole()
        console.log(manager);
        console.log(manager.getRole());
    })
    .then(promptOption)
    .then(nextEmployee)
    .then(nextAnswers => {
        console.log("Hi")
        console.log(employees)
        writeToFile(pageHTML(employees));
    })

function writeToFile(data) {
    fs.writeFile('index.html', data, err => {
        if (err) throw err;
        console.log('Team Generator complete! Check out index.html to see the output!');
        });
}


    // manager.getName();
    // manager.getId();
    // manager.getEmail();

