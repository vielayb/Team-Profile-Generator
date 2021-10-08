const Manager = require('./lib/Manager')

const manager = new Manager('Bob', 'bob@mail.com', '20', '310-333-3212' )

console.log(manager)

console.log("ID is", manager.getId())