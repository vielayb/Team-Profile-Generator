const { getDiffieHellman } = require('crypto');
const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');

// const Employee = require('../lib/Employee.js');
// const Engineer = require('../lib/Engineer.js');
// const Intern = require('../lib/Intern.js');


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
        ]);
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
            name: 'office',
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
    ]);
}

// const addEmployee = () => {
//     return inquirer.prompt([
//         {
//             type: 'confirm',
//             name: 'feature',
//             message: 'Would you like to add another employee?',
//             default: false
//           },
//     ])
// }

// const nextEmployee = optionAnswers => {
    // if (optionAnswers.option === 'Finish Team') {
    //     return false;
    // } 
    // if (optionAnswers.option === 'Engineer') {
    //     return  promptEngineer();
    // }
    // if (optionAnswers.option === 'Intern') {
    //     return promptIntern();
    // }

// }

promptManager()
    .then(answers => {
        console.log(answers)
        const manager = new Manager(answers.name, answers.email, answers.id, answers.office);
        console.log(manager);
    })
    .then(promptOption)
    .then(optionAnswers => {
        if (optionAnswers.option === 'Finish Team') {
            return false;
        } 
        if (optionAnswers.option === 'Engineer') {
            return  promptEngineer();
        }
        if (optionAnswers.option === 'Intern') {
            return promptIntern();
        }
    })


    // manager.getName();
    // manager.getId();
    // manager.getEmail();
    // manager.getRole();