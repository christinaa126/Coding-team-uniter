const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = require("./generateHTML");

const init = () => {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'teamManager',
          message: 'What is the name of your team manager?',
        },
        
      ])
      .then((answers) => {
        const htmlContent = generateHTML(answers);
    
        fs.writeFile('index.html', readMeContent, (err) =>
          err ? console.log(err) : console.log('Successfully created index.html!')
        );
      });
  };
  
  init();
  
  