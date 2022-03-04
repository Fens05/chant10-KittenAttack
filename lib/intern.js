
const inquirer = require('inquirer');
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school){
        this.school = school;

    }
    getSchool = async () => {
        const response = await inquirer.prompt([
            {
                //pormpts for intern
                type:'input',
                name: 'school',
                message: 'Name of Employees School:'

            }
        ])
        this.school = await response.school;
        return this.school;

    };
}

module.exports = Intern;
