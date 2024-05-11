//String Methods

        //Split() Method :-  method is a built-in function for strings that splits a string into an 
        //array of substrings based on a specified delimiter. The delimiter is a character or a 
        //regular expression that defines where the string should be split. The resulting substrings 
        //are stored as elements in an array.
        let Sample = "Vamshi is a web developer"

        document.write(Sample.split(" ") + "<br>")

        let date = "20-12-2020"

        document.write(date.split("-") + "<br>")
        console.log(date.split("-"))


        //Trim() Method:-  method is used to remove whitespace characters (spaces, tabs, or newlines)
        // from both ends of a string. 

        let Game = "Cricket       is     my     favourate     Sport"

        document.write(Game.trim() + "<br>")

        //charAt() Method :- The charAt method in JavaScript is a string method used to retrieve the character at
        // a specified index within a string.

        let Mobile = "Realme"

        const Mob = Mobile.charAt(0)

        document.write(Mob + "<br>");

        //subString() Method :- The substring method in JavaScript is used to extract a portion of
        // a string. It takes two parameters: the starting index (inclusive) and the ending index
        // (exclusive) of the substring.

        const laptop = "MSI-LAPTOP"

        const Buy = laptop.substring(0, 7)

        document.write(Buy + "<br>");

        //Replace() METHOD :-  method in JavaScript is used to replace a specified substring or 
        //pattern with another string.

        let users = "Kelvin"

        const user = users.replace("Kelvin", "Mr, Kelvin");

        document.write(user + "<br>");

        //toUpperCase() METHOD :- The toUpperCase method in JavaScript is used to convert all characters in a string to uppercase.

        let name = "pawankalyan"

        const named = name.toUpperCase();

        document.write(named + "<br>");

        //toLowerCase() METHOD :- The toUpperCase method in JavaScript is used to convert all characters in a string to lowercase.


        let hero = "ALLUARJUN"

        const Lower = hero.toLowerCase();

        document.write(Lower)
