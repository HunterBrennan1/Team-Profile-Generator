import inquirer from "inquirer";
import fs from "fs";
import generateTeam from "./src/Generate-Template.js";

import Manager from "./lib/Manager.js";
import Engineer from "./lib/Engineer.js";
import Intern from "./lib/Intern.js";

const teamMembers = [];

const basicQuestions = [{
  type: 'input',
  name: 'name',
  message: 'What is the the employee name? ',
  validate: nameInput => {
    if (nameInput) {
      return true;
    } else {
      console.log('Please enter the name');
      return false;
    }
  }
},
{
  type: 'input',
  name: 'id',
  message: 'What is the employee ID? ',
  validate: idInput => {
    if (idInput) {
      return true;
    } else {
      console.log('Please enter the employee Id');
      return false;
    }
  }
},
{
  type: 'input',
  name: 'email',
  message: 'What is the employee Email? ',
  validate: emailInput => {
    if (emailInput) {
      return true;
    } else {
      console.log('Please enter the email');
      return false;
    }
  }
}]

// Add a manager to list function
const promptManager = () => {
  return inquirer
    .prompt([
      ...basicQuestions,
      {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the office number? ',
        validate: numInput => {
          if (numInput) {
            return true;
          } else {
            console.log('Please enter the office number');
            return false;
          }
        }
      },
    ])
    .then(answers => {
      console.log(answers);
      const manager = new Manager(answers.name,
        answers.id,
        answers.email,
        answers.officeNumber);
      teamMembers.push(manager);
      promptMenu();
    })
}

// Add a new Engineer to list of employee function
const promptEngineer = () => {
  return inquirer
    .prompt([
      ...basicQuestions,
      {
        type: 'input',
        name: 'github',
        message: 'What is the Github username of the employee? ',
        validate: numInput => {
          if (numInput) {
            return true;
          } else {
            console.log('Please enter the Github username');
            return false;
          }
        }
      },
    ])
    .then(answers => {
      console.log(answers);
      const engineer = new Engineer(answers.name,
        answers.id,
        answers.email,
        answers.github);
      teamMembers.push(engineer);
      promptMenu();
    })
}

// Add a new Intern
const promptIntern = () => {
  return inquirer
    .prompt([
      ...basicQuestions,
      {
        type: 'input',
        name: 'school',
        message: 'What is the school name they attended? ',
        validate: numInput => {
          if (numInput) {
            return true;
          } else {
            console.log('Please enter the school name');
            return false;
          }
        }
      },
    ])
    .then(answers => {
      console.log(answers);
      const intern = new Intern(answers.name,
        answers.id,
        answers.email,
        answers.school);
      teamMembers.push(intern);
      promptMenu();
    })
}

// Add prompt menu
const promptMenu = () => {
  return inquirer
    .prompt([
      {
        type: 'list',
        name: 'menu',
        message: 'Please select your option below: ',
        choices: ['add a manager',
          'add an engineer',
          'add an intern',
          'finish my team'],
      }
    ])
    .then(userChoice => {
      switch (userChoice.menu) {
        case "add a manager":
          promptManager();
          break;
        case "add an engineer":
          promptEngineer();
          break;
        case "add an intern":
          promptIntern();
          break;
        default:
          buildTeam();
      }
    })
}


const buildTeam = () => {
  const HTMLContent = generateTeam(teamMembers);


  fs.writeFile('./dist/index.html', HTMLContent, (err) =>
    err ? console.log(err) : console.log('Successfully created HTML!'))
}

promptMenu();