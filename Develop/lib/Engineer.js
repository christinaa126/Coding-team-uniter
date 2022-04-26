const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
      super ()
       
      this.gitHub = gitHub;

    }

    getGithub(){
        console.log(`This team member's GitHub username is ${this.gitHub}`);
    }

    getRole(){
        console.log(`This employee is an intern`);
    }



}
Engineer.getName();
Engineer.getId();
Engineer.getEmail();
Engineer.getGithub();
Engineer.getRole();