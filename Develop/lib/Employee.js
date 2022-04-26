class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }

    getName(){
        console.log(`This team member's name is ${this.name} `);
    }

    getId(){
        console.log(`This team member's id is ${this.id}`);
    }

    getEmail(){
        console.log(`This team member's email address is ${this.email}`);
    }

    getRole(){
        console.log(`This team member is an employee`);
    }
}
    module.exports = Employee;