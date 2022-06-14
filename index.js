const figlet = require("figlet");
const inquirer = require("inquirer");
const fs = require("fs").promises;
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Team = require("./lib/Team");
const generateHtml = require("./src/generateHTML");

class CLI {
  constructor() {
    this.team = null;
  }

  start() {
    new Promise((resolve, reject) => {
      figlet("Team Profile Generator", function (err, data) {
        if (err) {
          reject(err);
          return;
        }
        console.log(data);
        resolve();
      });
    })
      .catch(() => {
        console.log("Welcome to Team Profile Generator");
      })
      .then(() => {
        this.team = new Team();

        this.addManager();
      })
      .catch((err) => this.handleError(err));
  }

  handleError(err) {
    console.log(err);
    console.log("Something went wrong. Scroll up to see details.");
  }

  addManager() {
    return inquirer
      .prompt([
        {
          type: "input",
          message: "What is your team manager's name?",
          name: "managerName",
        },
        {
          type: "input",
          message: "What is your team manager's ID?",
          name: "managerId",
        },
        {
          type: "input",
          message: "What is your team manager's email?",
          name: "managerEmail",
        },
        {
          type: "input",
          message: "What is your team manager's office number?",
          name: "managerOfficeNumber",
        },
      ])
      .then((data) => {
        this.team.addManager(
          data.managerName,
          data.managerId,
          data.managerEmail,
          data.managerOfficeNumber
        );

        this.addMember();
      });
  }

  generateEngineer() {
    return inquirer
      .prompt([
        {
          type: "input",
          message: "What is your engineer's name?",
          name: "engineerName",
        },
        {
          type: "input",
          message: "What is your engineer's ID number?",
          name: "engineerId",
        },
        {
          type: "input",
          message: "What is your engineer's email address?",
          name: "engineerEmail",
        },
        {
          type: "input",
          message: "What is your engineer's GitHub username?",
          name: "engineerGithub",
        },
      ])
      .then((data) => {
        this.team.addEngineer(
          data.engineerName,
          data.engineerId,
          data.engineerEmail,
          data.engineerGithub
        );

        this.addMember();
      });
  }

  generateIntern() {
    return inquirer
      .prompt([
        {
          type: "input",
          message: "What is your intern's name?",
          name: "internName",
        },
        {
          type: "input",
          message: "What is your intern's ID number?",
          name: "internId",
        },
        {
          type: "input",
          message: "What is your intern's email address?",
          name: "internEmail",
        },
        {
          type: "input",
          message: "What is your intern's school?",
          name: "internSchool",
        },
      ])
      .then((data) => {
        this.team.addIntern(
          data.internName,
          data.internId,
          data.internEmail,
          data.internSchool
        );

        this.addMember();
      });
  }

  addMember() {
    return inquirer
      .prompt([
        {
          type: "list",
          message: "Which team member would you like to add?",
          name: "memberType",
          choices: ["Engineer", "Intern", "I am done"],
        },
      ])
      .then((data) => {
        let option = data.memberType;

        if (option === "Engineer") {
          this.generateEngineer();
        } else if (option === "Intern") {
          this.generateIntern();
        } else {
          return this.writeHtml();
        }
      })
      .catch((err) => this.handleError(err));
  }

  writeHtml() {
    // console.log(this.team);

    const htmlPageContent = generateHtml(this.team.Employees);

    fs.writeFile("dist/team.html", htmlPageContent, (err) =>
      err
        ? console.log(err)
        : console.log(
            "Created team.html file. You'll find it in the 'dist' folder."
          )
    );
  }
}

new CLI().start();
