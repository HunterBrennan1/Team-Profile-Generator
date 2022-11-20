const Employee = require('./Employee');

class Intern extends Employee {
  constructor(nameEmp, id, email, school) {
    super(nameEmp, id, email);
    this.school = school;
    this.role = "Intern";
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return this.role;
  }
}

module.exports = Intern;