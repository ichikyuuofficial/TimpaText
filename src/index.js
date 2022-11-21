const Jimp = require('jimp');
const rs = require('readline-sync');
const fs = require('fs');

const helpers = require('./helpers');

class TimpaText {

    constructor() {

        /* Font */
        this.Bahnschrift_Indigo_20 = './assets/Font/Bahnschrift_Indigo_20.ttf/fV7UicCke24kZs1VMpL96msB.TTF.fnt';
        this.Bahnschrift_Indigo_24 = './assets/Font/Bahnschrift_Indigo_24.ttf/dGTTLHQfQx2kXxbjefUftQ7C.TTF.fnt';
        this.Bahnschrift_White_24 = './assets/Font/Bahnschrift_White_24.ttf/tFfOBCrKN7xW3exj60hR7QaL.TTF.fnt';

        /* Path */
        this.dirFilename = './assets/Image/';
        this.dirTemplate = './assets/Template/';
        this.dirResult = './Results/';

        if (!fs.existsSync(this.dirResult)) fs.mkdirSync(this.dirResult);

    }

    async BinusTemplate(name, image, templates) {

        try {

            let picture = await Jimp.read(this.dirFilename + image);
            picture.resize(137, 191);
    
            let template = await Jimp.read(this.dirTemplate + templates);
            template.composite(picture, 30, 240);
    
            let fonts = await Jimp.loadFont(this.Bahnschrift_White_24);
    
            /* Detail Info */
            var Nama = name;
            var Id = helpers.randomId();
            var Birthday = helpers.randomBirthday();
            var Departement = helpers.randomDepartement();
    
            /* QR CODE */
            var qr = await Jimp.read(`https://api.qrserver.com/v1/create-qr-code/?size=121x121&data=${Id}&bgcolor=255-127-39`);
    
            template.print(fonts, 230, 200, Nama);
            template.print(fonts, 230, 250, Id);
            template.print(fonts, 230, 300, Birthday);
            template.print(fonts, 230, 350, Departement);
            template.composite(qr, 620, 200);
    
            template.write(this.dirResult + Nama.replace(/ /g, '_') + '.png');
            
        } catch (error) {
            throw error;
            
        }

    }

    async CiputraTemplate(name, image, templates) {

        try {

            let picture = await Jimp.read(this.dirFilename + image);
            picture.resize(137, 191);
        
            let template = await Jimp.read(this.dirTemplate + templates);
            template.composite(picture, 600, 240);
    
            let fonts = await Jimp.loadFont(this.Bahnschrift_Indigo_24);
    
            /* Detail Info */
            var Nama = name;
            var Id = helpers.randomId();
            var Birthday = helpers.randomBirthday();
            var Departement = helpers.randomDepartement();
    
            /* QR CODE */
            var qr = await Jimp.read(`https://api.qrserver.com/v1/create-qr-code/?size=121x121&data=${Id}&bgcolor=255-242-0`);
    
            template.print(fonts, 30, 200, Nama);
            template.print(fonts, 30, 250, Id);
            template.print(fonts, 30, 300, Birthday);
            template.print(fonts, 30, 350, Departement);
            template.composite(qr, 410, 200);
    
            template.write(this.dirResult + Nama.replace(/ /g, '_') + '.png');
            
        } catch (error) {
            throw error;
        }

    }

    async UnivTexasDallasTemplate(name, image, templates) {

        try {

            let picture = await Jimp.read(this.dirFilename + image);
            picture.resize(171, 231);
    
            let template = await Jimp.read(this.dirTemplate + templates);
            template.composite(picture, 30, 170);
    
            let fonts = await Jimp.loadFont(this.Bahnschrift_Indigo_24);
    
            /* Detail Info */
            var Nama = name;
            var Id = helpers.randomId();
            var Birthday = helpers.randomBirthday();
            var Departement = helpers.randomDepartement();
            var Address = await helpers.randomAddress();
    
            /* QR CODE */
            var qr = await Jimp.read(`https://api.qrserver.com/v1/create-qr-code/?size=121x121&data=${Id}&bgcolor=200-191-231`);
    
            template.print(fonts, 225, 170, Nama);
            template.print(fonts, 225, 220, Id);
            template.print(fonts, 225, 270, Birthday);
            template.print(fonts, 225, 320, Departement);
            template.print(fonts, 225, 370, Address);
    
            template.composite(qr, 610, 170);
    
            template.write(this.dirResult + Nama.replace(/ /g, '_') + '.png');
            
        } catch (error) {
            throw error;
            
        }

    }

    async PhoenixUnivTemplate(name, image, templates) {

        try {

            let picture = await Jimp.read(this.dirFilename + image);
            picture.resize(171, 231);
        
            let template = await Jimp.read(this.dirTemplate + templates);
            template.composite(picture, 30, 170);
        
            let fonts = await Jimp.loadFont(this.Bahnschrift_White_24);

            /* Detail Info */
            var Nama = name;
            var Id = helpers.randomId();
            var Birthday = helpers.randomBirthday();
            var Departement = helpers.randomDepartement();
            var Address = await helpers.randomAddress();
    
            template.print(fonts, 225, 170, Nama);
            template.print(fonts, 225, 220, Id);
            template.print(fonts, 225, 270, Birthday);
            template.print(fonts, 225, 320, Departement);
            template.print(fonts, 225, 370, Address);
    
            /* QR CODE */
            var qr = await Jimp.read(`https://api.qrserver.com/v1/create-qr-code/?size=121x121&data=${Id}&bgcolor=112-146-190`);
            template.composite(qr, 600, 170);
    
            template.write(this.dirResult + Nama.replace(/ /g, '_') + '.png');
            
        } catch (error) {
            throw error;
        }

    }

    async SingaporeManagementUnivTemplate(name, image, templates) {

        try {

            let picture = await Jimp.read(this.dirFilename + image);
            picture.resize(171, 231);
        
            let template = await Jimp.read(this.dirTemplate + templates);
            template.composite(picture, 30, 170);
        
            let fonts = await Jimp.loadFont(this.Bahnschrift_Indigo_24);

            /* Detail Info */
            var Nama = name;
            var Id = helpers.randomId();
            var Birthday = helpers.randomBirthday();
            var Departement = helpers.randomDepartement();
    
            template.print(fonts, 225, 170, Nama);
            template.print(fonts, 225, 220, Id);
            template.print(fonts, 225, 270, Birthday);
            template.print(fonts, 225, 320, Departement);
    
            // qr
            var qr = await Jimp.read(`https://barcode.tec-it.com/barcode.ashx?data=${Id}&code=Code128&translate-esc=true&bgcolor=c3c3c3&imagetype=Png&hidehrt=True`);
            qr.resize(170, 30);
            template.composite(qr, 228, 370);
    
            template.write(this.dirResult + Nama.replace(/ /g, '_') + '.png');
            
        } catch (error) {
            throw error;
        }

    }

}

module.exports = TimpaText;