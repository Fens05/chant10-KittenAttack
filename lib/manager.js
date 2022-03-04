const inquirer = require('inquirer');
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        

        this.officeNumber = officeNumber;
    }

    getOfficeNumber = async () => {
        // return this.name;
        let response = await inquirer.prompt([
                {
                    // prompt ofice number
                    type: 'input',
                    name: 'officeNumber',
                    message: `What is the Managers office number:`
                }
            ])
            this.officeNumber = await response.officeNumber;
            return this.officeNumber;
    };

    getRole() {
        return 'Manager';
    }
}