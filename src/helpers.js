// random number with pattern xx-xxx-xxxxx
function randomId() {
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
    if(months[month] == 'February' && day > 28) {
        day = 28;
    } else {
        day = day;
    }

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

module.exports = {
    randomId,
    randomBirthday,
    randomDepartement
}