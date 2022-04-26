const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
      super ()
       
      this.school = school;

    }

    getSchool(){
        console.log(`This team member's attending school at ${this.school}`);
    }

    getRole(){
        console.log(`This team member is an intern`);
    }



}
Intern.getName();
Intern.getId();
Intern.getEmail();
Intern.getSchool();
Intern.getRole();