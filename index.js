const inquirer = require('inquirer');
const fs = require('fs');

const TimpaText = require('./src/index');
const bot = new TimpaText();

(async () => {

    Head();

    const questions_template = [
        {
            type: 'list',
            name: 'template',
            message: 'Choose template ?',
            choices: fs.readdirSync(bot.dirTemplate)
        },
    ];
    const answers_template = await inquirer.prompt(questions_template);

    const questions_filename = [
        {
            type: 'list',
            name: 'filename',
            message: 'Choose filename ?',
            choices: fs.readdirSync(bot.dirFilename)
        }
    ]
    const answers_filename = await inquirer.prompt(questions_filename);

    const questions_name = [
        {
            type: 'input',
            name: 'name',
            message: 'Enter name ?'
        }
    ]
    const answers_name = await inquirer.prompt(questions_name);

    switch (answers_template.template) {
        case 'IndianaTemplate.png':
            await bot.IndianaTemplate(answers_name.name, answers_filename.filename, answers_template.template);
            console.log({ success: true, path: `./results/${answers_name.name.replace(/ /g, '_')}.png` });
            break;

        case 'UMSTemplate.png':
            await bot.UMSTemplate(answers_name.name, answers_filename.filename, answers_template.template);
            console.log({ success: true, path: `./results/${answers_name.name.replace(/ /g, '_')}.png` });
            break;

        default:
            break;

    }


})();

function Head() {
    console.log(`
███████╗ █████╗ ██╗  ██╗███████╗██╗██████╗ 
██╔════╝██╔══██╗██║ ██╔╝██╔════╝██║██╔══██╗
█████╗  ███████║█████╔╝ █████╗  ██║██║  ██║
██╔══╝  ██╔══██║██╔═██╗ ██╔══╝  ██║██║  ██║
██║     ██║  ██║██║  ██╗███████╗██║██████╔╝
╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝╚═════╝ 

Note :

1. Save your image inside "./image/pictures" folder ( .png or .jpg or .jpeg only )
2. Input name manually
3. ID , DOB , and Department will be generated automatically
4. Result will be saved inside "./results" folder
    `)
}