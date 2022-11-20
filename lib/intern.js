import Employee from './Employee.js';

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

export default Intern;