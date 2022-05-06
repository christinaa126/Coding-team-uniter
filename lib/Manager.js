const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
      super (name, id, email)
       
      this.officeNumber = officeNumber;

    }


    getRole(){
        console.log(`This team member is a manager`);
        return "Manager";
    }
    getOfficeNumber(){
      console.log('This team member\'s office number is ${this.officeNumber}');
      return this.officeNumber;
    }


}
module.exports = Manager;
