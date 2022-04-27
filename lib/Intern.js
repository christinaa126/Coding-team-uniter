const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
      super (name, id, email)
       
      this.school = school;

    }

    getSchool(){
        console.log(`This team member's attending school at ${this.school}`);
        return this.school;
    }

    getRole(){
        console.log(`This team member is an intern`);
        return "Intern";
    }



}
module.exports = Intern;
// Intern.getName();
// Intern.getId();
// Intern.getEmail();
// Intern.getSchool();
// Intern.getRole();