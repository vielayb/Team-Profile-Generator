const Employee = require('../lib/Employee.js')

class Manager extends Employee {
    constructor(name, email, id, officeNumber) {
        super(name, email, id)
        this.officeNumber = officeNumber;
}

officeNumber() {
    return `${this.officeNumber}`;
}

getRole() {
    return `"Manager"`;
}
}

// const manager = new Manager(managerName, managerId, managerEmail, managerOffice);
// console.log(manager);

module.exports = Manager;