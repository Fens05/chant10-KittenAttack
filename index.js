const Manager = require('./lib/Manger');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Itern');

newManager = async () => {
    const manager = new Manager();
    manager.name = await manager.getName();
    manager.id = await manager.getId();
    manager.email = await manager.getEmail();
    manager.officeNumber = await manager.getOfficeNumber();
    manager.role = 'Manager';
    
    // build the managerData array with new manager entry
    // managerData.push(manager.name, manager.id, manager.email, manager.officeNumber, manager.role);
    managerData.push(manager);

    return await choseNewEmployee();
};

// chose what new employee to add or exit the app - then it generates the HTML file
const choseNewEmployee = async () => {
    const getRole = await inquirer.prompt({
        // inquirer - ask for employee role - Engineer or Intern
        type: 'list',
        name: 'role',
        message: `Chose to create an Engineer or an Intern or exit the app`,
        choices: ['Engineer', 'Intern', 'Exit App']
    })
    const role = await getRole.role;
    
    if (role === 'Engineer') {
        await newEngineer();
    } else if (role === 'Intern') {
        await newIntern();
    } else if (role === 'Exit App') {
        await createPage();
    }
};

// New Engineer function
const newEngineer = async () => {
    const engineer = new Engineer();
    engineer.name = await engineer.getName();
    engineer.id = await engineer.getId();
    engineer.email = await engineer.getEmail();
    engineer.gitHub = await engineer.getGitHub();
    engineer.role = 'Engineer';

    //Engineer data 
    engineerData.push(engineer);

    return await choseNewEmployee();
};


// New Intern function
const newIntern = async () => {
    const intern = new Intern();
    intern.name = await intern.getName();
    intern.id = await intern.getId();
    intern.email = await intern.getEmail();
    intern.school = await intern.getSchool();
    intern.role = 'Intern';

    // build the internData array with new intern entry
    // internData.push(intern.name, intern.id, intern.email, intern.school, intern.role);
    internData.push(intern);

    return await choseNewEmployee();
};


const generatePage = require('./src/template.js');
const { writeFile } = require('./utils/site.js');
const { async } = require('rxjs');
const inquirer = require('inquirer');
const fs = require('fs');


// Create HTML file
const createPage = async () => {
    const pageHTML = generatePage(managerData, engineerData, internData);
    return await writeFile(pageHTML);
};

function init() {
    console.log('Welcome to My Team Employee Management App');

    // create new Manager Employee
    newManager();
}

init();