const inquirer = require("inquirer");
const fs = require("fs");
// const open = require("open");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");
const writeAsync = util.promisify(fs.writeFile);


// array of questions to generate readme file
const questions = [
    {
        message: "What is your project title?",
        name: "title",
        type: "input"
    },
    {
        message: "Please enter project description",
        name: "description",
        type: "input"
    },
    {
        message: "Provide simple installation instructions",
        name: "installation",
        type: "input"
    },
    {
        message: "Please enter usage information",
        name: "usage",
        type: "input"
    },
    {
        message: "Please mention any contribution guidelines",
        name: "contribution",
        type: "input"
    },
    {
        message: "Please provide test instructions",
        name: "test",
        type: "input"
    },
    {
        message: "Choose your license",
        choices: ["MIT", "Apache 2.0", "GPL 3.0"],
        name: "license",
        type: "list"
    },
    {
        message: "Github username?",
        name: "username",
        type: "input"
    }
];



//function to run this app
async function init() {
    //get answers
    const answers = await inquirer.prompt(questions);

    // generate html
    const htmlString = generateMarkdown(answers);

    // save to file
    await writeAsync(answers.title + ".md", htmlString);

}

// call the function to run this app
init();
