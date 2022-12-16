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
        
        case 'BinusTemplate.png':
            await bot.BinusTemplate(answers_name.name, answers_filename.filename, answers_template.template);
            console.log({ success: true, path: bot.dirResult + answers_name.name.replace(/ /g, '_') + '.png' });
            break;

        case 'CiputraTemplate.png':
            await bot.CiputraTemplate(answers_name.name, answers_filename.filename, answers_template.template);
            console.log({ success: true, path: bot.dirResult + answers_name.name.replace(/ /g, '_') + '.png' });
            break;

        case 'UnivTexasDallasTemplate.png':
            await bot.UnivTexasDallasTemplate(answers_name.name, answers_filename.filename, answers_template.template);
            console.log({ success: true, path: bot.dirResult + answers_name.name.replace(/ /g, '_') + '.png' });
            break;

        case 'PhoenixUnivTemplate.png':
            await bot.PhoenixUnivTemplate(answers_name.name, answers_filename.filename, answers_template.template);
            console.log({ success: true, path: bot.dirResult + answers_name.name.replace(/ /g, '_') + '.png' });
            break;

        case 'SingaporeManagementUnivTemplate.png':
            await bot.SingaporeManagementUnivTemplate(answers_name.name, answers_filename.filename, answers_template.template);
            console.log({ success: true, path: bot.dirResult + answers_name.name.replace(/ /g, '_') + '.png' });
            break;

        case 'SriwijayaTemplate.png':
            await bot.SriwijayaTemplate(answers_name.name, answers_filename.filename, answers_template.template);
            console.log({ success: true, path: bot.dirResult + answers_name.name.replace(/ /g, '_') + '.png' });
            break;

        case 'IndianaTemplate.png':
            await bot.IndianaTemplate(answers_name.name, answers_filename.filename, answers_template.template);
            console.log({ success: true, path: bot.dirResult + answers_name.name.replace(/ /g, '_') + '.png' });
            break;

        default:
            break;

    }


})();

function Head() {
    console.log(`
████████╗██╗███╗   ███╗██████╗  █████╗ ████████╗███████╗██╗  ██╗████████╗
╚══██╔══╝██║████╗ ████║██╔══██╗██╔══██╗╚══██╔══╝██╔════╝╚██╗██╔╝╚══██╔══╝
   ██║   ██║██╔████╔██║██████╔╝███████║   ██║   █████╗   ╚███╔╝    ██║   
   ██║   ██║██║╚██╔╝██║██╔═══╝ ██╔══██║   ██║   ██╔══╝   ██╔██╗    ██║   
   ██║   ██║██║ ╚═╝ ██║██║     ██║  ██║   ██║   ███████╗██╔╝ ██╗   ██║   
   ╚═╝   ╚═╝╚═╝     ╚═╝╚═╝     ╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═╝  ╚═╝   ╚═╝   
                                                               
Note :

1. Save your image inside "./assets/Image" folder ( .png or .jpg or .jpeg only )
2. Input name manually
3. ID , DOB , and Department will be generated automatically
4. Result will be saved inside "./Results" folder
    `)
}
