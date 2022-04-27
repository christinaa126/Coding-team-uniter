class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }

    getName(){
        console.log(`This team member's name is ${this.name} `);
        return this.name;
    }

    getId(){
        console.log(`This team member's id is ${this.id}`);
        return this.id;
    }

    getEmail(){
        console.log(`This team member's email address is ${this.email}`);
        return this.email;
    }

    getRole(){
        console.log(`This team member is an employee`);
        return "Employee"
    }
}
    module.exports = Employee;