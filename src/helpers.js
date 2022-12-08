const fetch = require('node-fetch');

function randomId() {
    let pattern = "xx - xxx - xxxxx";
    let random = pattern.replace(/x/g, function (c) {
        let r = Math.random() * 10 | 0;
        return r;
    });
    return random;
}

function randomBirthday(){

    function randomValueBetween(min, max) {
      return Math.random() * (max - min) + min;
    }

    var date1 = '01-01-1995'
    var date2 = '01-01-2003'

    date1 = new Date(date1).getTime()
    date2 = new Date(date2).getTime()

    if(date1 > date2) {

        return new Date(randomValueBetween(date2,date1)).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric'})  

    } else{

        return new Date(randomValueBetween(date1, date2)).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric'})  

    }
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
        19: 'Transportation',
        20: 'Earth and Space Sciences',
    }

    var departement = Math.floor(Math.random() * 12) + 1;

    return departements[departement];


}

/* Credit it to https://github.com/EthanRBrown and https://openaddresses.io/ */
const randomAddress = async () =>  {

    const req = await fetch('https://raw.githubusercontent.com/EthanRBrown/rrad/master/addresses-us-all.json', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    
    const res = await req.json();

    let data = res.addresses[Math.floor(Math.random() * res.addresses.length)];
    let address = data.address1 + ', ' + data.city + ', ' + data.state + ', ' + data.postalCode;

    return address;

}

module.exports = {
    randomId,
    randomBirthday,
    randomDepartement,
    randomAddress
}