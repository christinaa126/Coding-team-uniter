const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
      super ()
       
      this.officeNumber = officeNumber;

    }


    getRole(){
        console.log(`This team member is a manager`);
    }



}
Manager.getName();
Manager.getId();
Manager.getEmail();
Manager.getRole();