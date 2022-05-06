const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
      super (name, id, email)
       
      this.gitHub = gitHub;

    }

    getGithub(){
        console.log(`This team member's GitHub username is ${this.gitHub}`);
        return this.gitHub;
    }

    getRole(){
        console.log(`This employee is an intern`);
        return "Engineer";
    }



}
module.exports = Engineer;
