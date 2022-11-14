const Jimp = require('jimp');
const rs = require('readline-sync');

// random number with pattern xx-xxx-xxxxx
function randomNumber() {
    let pattern = "xx - xxx - xxxxx";
    let random = pattern.replace(/x/g, function (c) {
        let r = Math.random() * 10 | 0;
        return r;
    });
    return random;
}

function randomBirthday() {

    var day = Math.floor(Math.random() * 30) + 1;

    var months = {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
        8: 'August',
        9: 'September',
        10: 'October',
        11: 'November',
        12: 'December'
    }

    var month = Math.floor(Math.random() * 12) + 1;

    // years from 1990 to 2003
    var year = Math.floor(Math.random() * 13) + 1990;

    return day + ' ' + months[month] + ' ' + year;

}

function randomDepartement() {

    var departements = {
        1: 'Biology',
        2: 'Accounting',
        3: 'Art & Design',
        4: 'Information Technology',
        5: 'Teacher Education',
        6: 'Computer Science',
        7: 'Administration',
        8: 'Engineering',
        9: 'Psychology',
        10: 'Economics and Finance',
        11: 'Educational Leadership',
        12: 'Mathematics',
        13: 'Political Science',
        14: 'General Business',
        15: 'Marketing and Management',
        16: 'Chemistry and Biochemistry',
        17: 'English and Modern Languages',
        18: 'Information Systems Analysis',
        19: 'M.B.A.',
        20: 'Earth and Space Sciences',
    }

    var departement = Math.floor(Math.random() * 12) + 1;

    return departements[departement];


}

const functionGenerateImage = async (name, img_profile) => {

    try {

        let nama = name;
        let picture = await Jimp.read(img_profile);

        

        Jimp.read('./template/template.png', (err, image) => {

            // Here is the code to add the image to the template
            picture.resize(230, 280);
            image.composite(picture, 60, 280);

            if (err) throw err;

            let textImage = new Jimp(1000,1000, 0x0, (err, textImage) => {  
                //((0x0 = 0 = rgba(0, 0, 0, 0)) = transparent)
                if (err) throw err;
            })

            // Add name
            Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(function (font) {

                // textImage.color([{apply:'xor', params:['#46146b']}]);

                textImage.print(font, 340, 300, `Name              :    ${nama}`);
                image.composite(textImage, 0, 0);

                textImage.print(font, 340, 360, `ID                    :    ${randomNumber()}`);
                image.composite(textImage, 0, 0);

                textImage.print(font, 340, 420, `DOB                :    ${randomBirthday()}`);
                image.composite(textImage, 0, 0);

                textImage.print(font, 340, 480, `Department     :    ${randomDepartement()}`);
                image.composite(textImage, 0, 0);

                image.write(`./results/${nama.replace(/ /g, '_')}.png`);

            })

        });

        
        
    } catch (error) {
        throw error;
    }

};

(async () => {

    console.log(`
███████╗ █████╗ ██╗  ██╗███████╗██╗██████╗ 
██╔════╝██╔══██╗██║ ██╔╝██╔════╝██║██╔══██╗
█████╗  ███████║█████╔╝ █████╗  ██║██║  ██║
██╔══╝  ██╔══██║██╔═██╗ ██╔══╝  ██║██║  ██║
██║     ██║  ██║██║  ██╗███████╗██║██████╔╝
╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝╚═════╝ 

Note :
- Save your image inside "img" folder
- Input name manually
- ID , DOB , and Department will be generated automatically
- Result will be saved inside "results" folder
    `)

    var name = rs.question('Name : ');
    var img = rs.question('Filename : ');
    if (!img.includes('.png' || '.jpg' || '.jpeg')) {
        console.log('Make sure your image is in .png or .jpg or .jpeg format');
        return;
    } else {

        await functionGenerateImage(name, `./img/${img}`).then(() => {
            console.log('Done !');
        });

    }

})();