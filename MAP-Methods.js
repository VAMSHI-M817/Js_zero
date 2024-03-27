 // let user = [
        //     {
        //         Name: "Vamshi",
        //         Role: "Web Developer",
        //         Experience: "5 Years",
        //         Salary: "50000"
        //     }
        // ]

        // const meth = user.map(function (Props) {
        //     document.write(Props.Name)
        //     return;
        // })

        // const Ameth = user.map((props) => {
        //     console.log(props.Role)
        //     document.write(props.Role + "<br>")

        //     return;
        // })

        // let Num = [10, 20, 30, 40, 55];

        // const Doing = Num.forEach(function (Values) {
        //     if (Values % 2 == 0) {
        //         document.write(Values * 10 + "<br>")
        //     } else {
        //         document.write("Not Divisible")
        //     }
        // })

        // let age = [2000,2001,2002,2003,2004,2005]

        // const findage = age.map(function(ele,index,arr){
        //     2024-ele


        //     return age;
        // })
        // console.table(findage)



        //Map Functions
        //method 1
        const input0 = [1, 2, 3, 4, 5]

        function double(x) {
            return x * 2
        }

        const output = input0.map(double);

        console.log(output)


        //method 2

        const input1 = [1, 2, 3, 4, 5]

        const output1 = input1.map((value) => {
            return document.write(value * 2)
        })
        console.log(output1)


        //map method to triple the num 
        const input3 = [10, 10, 20, 20]
        const output3 = input3.map((value) => {
            return value * 3
        })
        console.log(output3)


        //map method to find binary

        const input2 = [1, 2, 3, 4, 5]

        const output2 = input2.map((value) => {
            return value.toString(2)
        })
        console.log(output2)

        //forEach Method
        const input4 = [10, 20, 30, 40, 55, 60]
        const output4 = input4.forEach((value) => {
            if (value % 2 == 0) {
                console.log(value)
            }
        })

        //Filter Method
        input5 = [1, 2, 3, 4, 5]
        output5 = input5.filter((Value) => {

            return Value < 5
        })
        console.log(output5);


    //    const input6 = 20;
    //    output6 = input6
    //    console.log(typeof output6)
    //    console.log(typeof output6)
    
       




