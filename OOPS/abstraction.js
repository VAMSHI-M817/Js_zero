//Abstraction :- Abstraction extracts only the essential parts or features that we need, while hiding the complex details that we don't need to know about.
class Mobile {
    constructor(name, color, initialCharging) {
        this.name = name
        this.color = color
        var initialCharging = initialCharging;
        var currentCharging = 0
        //This will lead to leak the process of data
        var chargingDetails = function (charge) {
            currentCharging = initialCharging + charge
            if (currentCharging > 100) {
                throw Error("Your Mobile is Full Charged")
            } else {
                console.log("Current Charging", currentCharging);
            }
        }
        //APPLYING THE ABSTRACTION METHOD BY HIDING ALL UNWANTED INFORMATION AND DISPLAYING NECESSARY OUTPUT
        this.pluginCharge = function (charge) {
            chargingDetails(charge)
        }
    }
}
const Redmi = new Mobile("Redmi note 7 Pro", "Black", 20)
console.log(Redmi.name);
console.log(Redmi.color);
Redmi.pluginCharge(20)
