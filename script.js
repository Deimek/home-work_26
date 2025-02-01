
function Student(firstName, lastName, birthYear, marks = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.marks = marks;
    // this.attendance = [null, null, null, null, null, null, null, null, null, null, null, null,
    //     null, null, null, null, null, null, null, null, null, null, null, null, null];
    this.attendance = new Array(25).fill(null);
    this.age = function () {
        const year = new Date().getFullYear();
        return year - this.birthYear;
    }
    this.present = function () {
        const visit = this.attendance.indexOf(null);
        if (visit !== -1) {
            this.attendance[visit] = true;
        } else {
            console.log("Всі 25 занять вже заповнені!");
        }
    }
    this.absent = function () {
        const visit = this.attendance.indexOf(null);
        if (visit !== -1) {
            this.attendance[visit] = false;
        } else {
            console.log("Всі 25 занять вже заповнені!");
        }
    }
    this.summary = function () {
        const sumMarks = this.marks.reduce((acc, num) => acc + num, 0);
        const averageMarks = sumMarks / this.marks.length;
        console.log(averageMarks);
        // const sumAttendance = this.attendance.reduce((acc, visit) => visit === true ? acc + 1 : acc === acc, 0);
        const sumAttendance = this.attendance.filter((visit) => visit === true).length;
        const averageAttendance = sumAttendance / 25;
        console.log(averageAttendance);

        if (averageMarks > 90 && averageAttendance > 0.9) {
            console.log('Молодець');
            alert('Молодець')
        } else if (averageMarks < 90 && averageAttendance > 0.9 || averageMarks > 90 && averageAttendance < 0.9) {
            console.log('Добре, але можна краще');
            alert('Добре, але можна краще')
        } else if (averageMarks < 90 && averageAttendance < 0.9) {
            console.log('Редиска!');
            alert('Редиска!')
        }
    }
}

// -----------------------------------
const studentOleh = new Student('Oleh', 'Deimek', 1984, [100, 99, 90, 90, 95]);

for (let i = 1; i <= 25; i++) studentOleh.present();
studentOleh.summary();

const studentUser = new Student('User', 'Proger', 2002, [80, 85, 90, 90, 95]);

for (let i = 1; i <= 25; i++) studentUser.present(25);
studentUser.summary();

const studentUser2 = new Student('User', 'Proger', 2002, [80, 85, 80, 90, 95]);

for (let i = 1; i <= 20; i++) studentUser2.present();
for (let i = 1; i <= 5; i++) studentUser2.absent();
studentUser2.summary();