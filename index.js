const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const teamMembers = [];

const generateHTML = require("./src/generateHTML");

const init = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of your team manager?",
      },
      {
        type: "input",
        name: "id",
        message: "What is this team manager's id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is this team manager's email address?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is this team manager's office number?",
      },
      {
        type: "list",
        name: "options",
        message: "Which team member would you like to view next",
        choices: ["Engineer", "Intern", "Done"],
      },
    ])
    .then((answers) => {
      console.log(answers);
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      teamMembers.push(manager);
    });
  if (answers.options === "Engineer") {
    return createEngineer();
  } else if (answers.options === "Intern") {
    return createIntern();
  } else {
    fs.appendFile("./dist/team.html", "</section></body></html>", (err) =>
      err
        ? console.log(err)
        : console.log(
            "Thanks for using the application, your team html will be under dist file."
          )
    );
    // return;
  }
};

const createEngineer = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of your team engineer?",
      },
      {
        type: "input",
        name: "id",
        message: "What is this engineer's id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is this engineer's email?",
      },
      {
        type: "input",
        name: "github",
        message: "What is this engineer's github username?",
      },
      {
        type: "list",
        message: "Which type of team member would you like to add?",
        name: "addMember",
        choices: [
          "Engineer",
          "Intern",
          "I don't want to add any more team members",
        ],
      },
    ])
    .then((answers) => {
      console.log(answers);
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      teamMembers.push(engineer);
      fs.appendFile("./dist/team.html", engineerContent, (err) => {
        if (err) {
          console.log(err);
        }
      });
      if (answers.options === "Engineer") {
        return createEngineer();
      } else if (answers.options === "Intern") {
        return createIntern();
      } else {
        fs.appendFile("./dist/team.html", "</section></body></html>", (err) =>
          err
            ? console.log(err)
            : console.log(
                "Thanks for using the application, your team html will be under dist file."
              )
        );
        return;
      }
    });
};

const createIntern = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of your team intern?",
      },
      {
        type: "input",
        name: "id",
        message: "What is this intern's id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is this intern's email?",
      },
      {
        type: "input",
        name: "school",
        message: "What is this intern's school?",
      },
      {
        type: "list",
        message: "Which type of team member would you like to add?",
        name: "addMember",
        choices: [
          "Engineer",
          "Intern",
          "I don't want to add any more team members",
        ],
      },
    ])
    .then((answers) => {
      console.log(answers);
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      teamMembers.push(intern);
      fs.appendFile("./dist/team.html", internContent, (err) => {
        if (err) {
          console.log(err);
        }
      });
      if (answers.options === "Engineer") {
        return createEngineer();
      } else if (answers.options === "Intern") {
        return createIntern();
      } else {
        fs.appendFile("./dist/team.html", "</section></body></html>", (err) =>
          err
            ? console.log(err)
            : console.log(
                "Thanks for using the application, your team html will be under dist file."
              )
        );
        return;
      }
    });
};

init();
