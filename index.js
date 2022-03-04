const Manager = require('./lib/Manger');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Itern');

newManager = async() => {
    const manager = new Manager();
    manager.name = await manager.getName();
    manager.id = await manager.getId();
    manager.email = await manager.getEmail();
}