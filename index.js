const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const teamMembers = [];

const generateHTML = require("./src/generateHTML");

const init = () => {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is the name of your team manager?',
        },
        {
          type: 'input',
          name: 'id',
          message: 'What is this team manager\'s id?',
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is this team manager\'s email address?',
        },
        {
          type: 'input',
          name: 'officeNumber',
          message: 'What is this team manager\'s office number?',
        },
      ])
      .then((answers) => {
        console.log(answers)
         const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        teamMembers.push(manager);
        teamOptions();
        // const htmlContent = generateHTML(answers);        
      });
  };

  const teamOptions = () => {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'options',
          message: 'Which team member would you like to view next',
          choices: ['Engineer', 'Intern' , 'Done'],
        }
      ])
      .then((answers) => {
        if (answers.options === 'Engineer'){
          createEngineer();
        }
        if (answers.options === 'Intern'){
          createIntern();
        }else{
          const htmlContent = generateHTML(answers);
          fs.writeFile('./dist/team.html', htmlContent, (err) => {
            if (err) {
              console.log(err);
            }
          } )
        }
      })
  }
  
  const createEngineer = () => {
    inquirer  
      .prompt ([
        {
          type: 'input',
          name: 'name',
          message: 'What is the name of your team engineer?',
        },
        {
          type: 'input',
          name: 'id',
          message: 'What is this engineer\'s id?',
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is this engineer\'s email?',
        },
        {
          type: 'input',
          name: 'gitHub',
          message: 'What is this engineer\'s gitHub username?',
        },
      ])
      .then((answers) => {
        console.log(answers)
         const engineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHub);
        teamMembers.push(engineer);
        teamOptions();
        // const htmlContent = generateHTML(answers);
    
        
      });
  };

const createIntern = () => {
  inquirer  
    .prompt ([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your team intern?',
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is this intern\'s id?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is this intern\'s email?',
      },
      {
        type: 'input',
        name: 'school',
        message: 'What is this intern\'s school?',
      },
      ])
      .then((answers) => {
        console.log(answers)
         const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        teamMembers.push(intern);
        teamOptions();
        // const htmlContent = generateHTML(answers);
    
        
      });
  };

  init();
  
  // generateHTML();  {
  //   const html = generateList(this.list);
  //   fs.writeFile("dist/list.html", html)
  //     .then(() => {
  //       console.log(
  //         "Created list.html file. You'll find it in the 'dist' folder."
  //       );
  //     })
  //     .catch((err) => this.handleError(err));
  // }

  
  // fs.writeFile('index.html', readMeContent, (err) =>
  //         err ? console.log(err) : console.log('Successfully created index.html!')
  //       );