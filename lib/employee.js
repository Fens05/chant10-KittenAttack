const inquirer = require('inquirer');

class Employee {
    construtor(name, id, emial) {
        this.name = name;
        this.id = id;
        this.emial = email;

    };
    getName = async () => {
        const response = await inquirer.prompt([
            {
                //promt for employee
                type: 'imput',
                name: 'name',
                message: 'Name of Employee:'
            }
        ])
        this.name = await response.name;

        return this.name;

    };
    getId = async () => {
        let response = await inquirer.prompt([
            {
                //prompt id
                type: 'input',
                name: 'id',
                message: 'Input Empoloyee Id:'

            }
        ])
        this.id = await response.id;
        return this.id;

    };

    getEmail = async () => {
        let response = await inquierer.prompt([
            {
                //prompt email
                type: 'input',
                name: 'email',
                message: 'input email:'

            }
        ])
        this.email = await response.email;
        return this.email;


    };
    getRole() {
        return 'Employee';
    };
}

    module.exports = Employee