const Jimp = require('jimp');
const rs = require('readline-sync');
const fs = require('fs');

const helpers = require('./helpers');

class TimpaText {

    constructor() {

        this.dirFilename = './image/pictures/';
        this.dirTemplate = './image/template/';
        this.dirResult = './results/';

        if (!fs.existsSync(this.dirResult)) fs.mkdirSync(this.dirResult);

    }

    async IndianaTemplate(name, image, template) {

        try {

            let nama = name;
            let picture = await Jimp.read(this.dirFilename + image);
    
            Jimp.read(this.dirTemplate + template, (err, image) => {
    
                // Here is the code to add the image to the template
                picture.resize(230, 280);
                image.composite(picture, 60, 280);

                if (err) throw err;

                let textImage = new Jimp(1000,1000, 0x0, (err, textImage) => {  
                    //((0x0 = 0 = rgba(0, 0, 0, 0)) = transparent)
                    if (err) throw err;
                })

                // Add details to the template
                Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(function (font) {

                    // textImage.color([{apply:'xor', params:['#46146b']}]);

                    textImage.print(font, 340, 300, `Name              :    ${nama}`);
                    image.composite(textImage, 0, 0);

                    textImage.print(font, 340, 360, `ID                    :    ${helpers.randomId()}`);
                    image.composite(textImage, 0, 0);

                    textImage.print(font, 340, 420, `DOB                :    ${helpers.randomBirthday()}`);
                    image.composite(textImage, 0, 0);

                    textImage.print(font, 340, 480, `Department     :    ${helpers.randomDepartement()}`);
                    image.composite(textImage, 0, 0);

                    image.write(`./results/${nama.replace(/ /g, '_')}.png`);

                })
    
            });
            
        } catch (error) {
            throw error;
        }

    }

    async UMSTemplate(name, image, template) {

        try {

            let nama = name;
            let picture = await Jimp.read(this.dirFilename + image);
    
            Jimp.read(this.dirTemplate + template, (err, image) => {
    
                // Here is the code to add the image to the template
                picture.resize(147, 197);
                image.composite(picture, 52, 208);

                if (err) throw err;

                let textImage = new Jimp(1000,1000, 0x0, (err, textImage) => {  
                    //((0x0 = 0 = rgba(0, 0, 0, 0)) = transparent)
                    if (err) throw err;
                })

                Jimp.loadFont(Jimp.FONT_SANS_32_WHITE).then(function (font) {

                    // textImage.color([{apply:'xor', params:['#46146b']}]);

                    textImage.print(font, 220, 220, `${nama}`);
                    image.composite(textImage, 0, 0);

                    textImage.print(font, 220, 265, `${helpers.randomId()}`);
                    image.composite(textImage, 0, 0);

                    textImage.print(font, 220, 310, `${helpers.randomBirthday()}`);
                    image.composite(textImage, 0, 0);

                    textImage.print(font, 220, 355, `${helpers.randomDepartement()}`);
                    image.composite(textImage, 0, 0);

                    image.write(`./results/${nama.replace(/ /g, '_')}.png`);

                })
    
            });
            
        } catch (error) {
            throw error;
        }

    }

}

module.exports = TimpaText;