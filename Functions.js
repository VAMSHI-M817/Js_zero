   //Functions
        //Scopes are 3 types
        //1)Global scope
        //2)Function scope
        //3)Block scope

        //Global Scope
        //Traditional Function
        function vamshiMarepu() {
            var Role = "Developers"
            document.write(Role + "<br>")
        }

        vamshiMarepu();
        //--------------------------------------

        //Function Scope
        function vamshiMarepu123() {
            var i = "vamshi"
            let j = "Kumar"
            const k = "Tirupathi"

            document.write(i + "<br>");
            document.write(j + "<br>");
            document.write(k + "<hr>");
        }
        vamshiMarepu123();
        //---------------------------------------

        //Block Scope
        function sports() {
            if (10 < 20) {

                let place = "Stadium"
                const game = "Cricket"

                document.write(game + "<br>")
                document.write(place + "<hr>")
            }
        }
        sports();

        //Functions With Return Values

        //1) Function Expression
        //2) Anonymous Function
        //3) Function With parameters and Return Value

        //function Expression
        var a = function vamshi() {
            document.write("Function Expression is activated" + "<br>")
        }
        //we need to call a function by variable which we assigned
        a();

        //Anonymous Function
        // A function without any parameters and conditions and arguments
        function Anonymous() {
            document.write("Anonymous Function Activated" + "<hr>")
        }
        Anonymous();

        //Function With parameters and Return Value

        function meanStack(Role, Salary) {
            return document.write("Vamshi's Role: " + Role + "<br>" + "Vamshi's Salary: " + Salary + "<br>")
        }
        meanStack("Fullstack", 50000);

        function adding(x, y) {
            return x + y
        }
        document.write(adding(10, 20) + "<br>");
        // adding(10,20);

        function vamshi(a, b, c) {
            return a + b + c
        }
        document.write(vamshi(9, 9, 9) + "<br>");

        function thirupathi() {
            document.write("Thirupathi is Good Boy" + "<hr>")
        }
        thirupathi();

        //ex-1
        // var age = prompt("Enter Your Age")

        // function License(getage) {
        //     return document.write("Your age is :" + getage+"Eligible for license")
        // }
        // License(age);


        //Arrow Function

        let x = (a, b) => {
            document.write(a + b)
            document.write(a % b)
        }
        x(10, 50);