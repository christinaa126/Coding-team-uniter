const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);

    this.github = github;
  }

  getGithub() {
    console.log(`This team member's GitHub username is ${this.gitHub}`);
    return this.github;
  }

  getRole() {
    console.log(`This employee is an intern`);
    return "Engineer";
  }
}
module.exports = Engineer;
