const inquirer = require('inquirer');
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHub){
        this.gitHub = gitHub;

    }
    getGitHub = async () => {
        const response = await inquirer.prompt([
            {
                //pormpts for intern
                type:'input',
                name: 'gitHub',
                message: 'Enter Employees github:'

            }
        ])
        this.gitHub = await response.gitHub;
        return `https://github.com/${this.gitHub}/`;

    };
}

module.exports = Engineer;
