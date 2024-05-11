//ENCAPSULATION :- Encapsulation is a functionality to hide the data in a single unit
//along with a functionality to  protect information from outside


//Taking Example a Bank Account Creation
//Account Name, Account No, Account Type
//Creating Encapsulating classes

class Bank {
    constructor(account_name, account_no, account_type) {
        //Encapsulating the properties of bankaccount using variables var let and const
        //"this" keyword allows the properties to use outside of the class
        //ex:- [this.acc_name = account_name]
        var acc_name = account_name
        var acc_no = account_no
        var acc_type = account_type

        //THESE ARE GETTERS
        this.getAccName = function () {
            return acc_name
        }
        this.getAccNo = function () {
            return acc_no
        }
        this.getAccType = function () {
            return acc_type
        }

        //THESE ARE SETTERS
        //we can use arrow function
        this.setAccname = (newName) => {
            acc_name = newName
        }

        this.setAccNo = function () {
            acc_no = Math.floor(Math.random() * 100000000)
        }

        this.setAccType = function (newType) {
            acc_type = newType
        }
    }
}

//Creating Objects using calsses
let client1 = new Bank("Vamshi Marepu", 1221, "Savings")
let client2 = new Bank("Tajmul Mohd", null, "Current")
//GETTING DATA BY USING GETTERS AND SETTERS     
console.log(client1.getAccName());
console.log(client1.getAccNo());
client1.setAccNo()
console.log(client1.getAccNo());
//Getting and Setting the properties and actions with created objects

