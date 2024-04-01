

const user = {
    userName: "vamshi",
    userId: "12945",
    userRole: "Developer",
    userSalary: "80000",

    printingData: function () {
        console.log(this.userName)
    },

    printingData2() {
        console.log("second method :" + this.userName)
    }
}

const employee = {
    calctax: function () {
        console.log("Tax rate is 10%")
    }
}

const vamshi = { 
    salary : 50000
}

vamshi.__proto__ = employee
