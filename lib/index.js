const inquire = require('inquire');
const fs = require('fs');
const teamMember = newEmployee
const engineer = require('../lib/engineer');
const manager = require('../lib/manager');
const intern = reqiore('../lib/intern');

intitialzeNewEmployee(){
   this.newteamMember.push(new Employee('manager',''));
   this.newteamMember.push(new Employee('engineer', ''));
   this.newteamMemeber.push(new Employee('intern', ''));
}


 inquire.prompt(
    {
      type:'input',
      name: 'employeeName',
      email: 'email address',
      id: 'employeeId',
      role: ['manager', 'engineer', 'intern'],
      message: 'Goodday, what is your name?'
    });
    console.log ('hello intern')
// const promptManger = profileData => [
//     returen inquire.prompt(mangerPrompts)
//     .then((answers) => {
//         console.logansweres
//     })

// // const promptEmployee = proileData => [
//     const employeePrompt [
//         type: 'input',
//         name: 'employeeName',
//         id: 'employeeId',
//         emial: 'employee'
//         message: 'What is the employee name?'
    
  
// ]



fs.writeFile('index.html', 'Team Build', function(err) {
   if (err) {
      return console.error(err);
   }
   
   // console.log("Data written successfully!");
   // console.log("Let's read newly written data");
   
   fs.readFile('index.html', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("Asynchronous read: " + data.toString());
   });
});
// getNewEmployee(){
//    if(this.questions.length){
//       return this.questions;

//    }
//    return false;
// }
// inquire.prompt([.manager.test.js])