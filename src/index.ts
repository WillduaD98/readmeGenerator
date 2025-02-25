// TODO: Include packages needed for this application

import * as fs from 'fs';
import generateMarkdown from './generateMarkdown';
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
const questions: string[] = [
//* 0 *//    
    `Your Project Title?`, 
//* 1 *//    
    `How would you describe your project? Please Answer: What was your motivation? `, 
//* 2 *//    
    `Why did you build this project? (Note: the answer is not "Because it was a homework")`, 
//* 3 *//    
    `What problem  does it solve? `, 
//* 4 *//    
    `What did you learn? `, 
//* 5 *//     
    `Do you want a table of Contents? (optional)`,
//* 6 *//    
    `Whats steps are requiered to install your project?`,
//* 7 *//    
    `What credits you want to give?`,
//* 8 *//    
    `Which license you want to add?`,
//* 9 *//
    `Explain the Usage: `,
//* 10 *//
    `Github username: `,
//* 11 *//
    `Email: `
];

const licenses: string[] = ['No License', "MIT", 'GPLv3','Apache 2.0', 'BSD 3-Clause', 'Mozilla Public License 2.0']



console.log(questions[0]);

// TODO: Create a function to initialize app
async function init() {
        try{
        const response = await inquirer.prompt([
            {
                name: 'title',
                message: questions[0],
                type: 'input',
                default: 'titulo'
            },
            {
                name: 'motivation',
                message: questions[1],
                type:  'input',
                default: 'Description'
            },
            {
                name: 'why',
                message: questions[2],
                type: 'input',
                default: 'Why did you build this project?'
            },
            {
                name: 'problemSolve',
                message: questions[3],
                type: 'input',
                default: 'What problem does it solve?'
            },
            {
                name: 'learn',
                message: questions[4],
                type: 'input',
                default: 'What did you learn?'
            },
            {
                name: 'table',
                message: questions[5],
                type: 'confirm',
                default: 'y'
            },
            {
                name: 'installation',
                message: questions[6],
                type: 'input',
                default: 'What are the steps required to install your project?'
            },
            {
                name: 'credits',
                message: questions[7],
                type: 'input',
                default: 'What credits you want to give?'
            },
            {
                name: 'license',
                message: questions[8],
                type: 'list',
                choices: licenses
            },
            {
                name: 'usage',
                message: questions[9],
                type: 'input',
                default: `What usage do you want to give.`
            },
            {
                name: 'questions',
                message: questions[10],
                type: 'input'
            },
            {
                name: 'email',
                message: questions[11],
                type: 'input'
            }

        ])
        
        let toWrite: any = generateMarkdown(response)
        const fileName: string = 'README.md';
        writeToFile(fileName, toWrite)
    } catch (error) {
        console.error(error)
    }
}


// TODO: Create a function to write README file
function writeToFile(fileName: string, data: any) {
    fs.writeFileSync(fileName, data)
}

// Function call to initialize app
init();

