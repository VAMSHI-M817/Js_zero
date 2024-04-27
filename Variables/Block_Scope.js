//BLOCK SCOPE 
//block and scope are different,  where the block is used to store the multiple statements in a block 
//where the that block of statement is used when it is required


//BLOCK -  can declared by {  //block of code   }
{
    //Statement
    var x = 1100
    console.log(x);
}

//SCOPE

{
    var x = 100
    let y = 200
    const z = 300
    console.log(x)
    console.log(y)
    console.log(z)
}
//we can access the all variable within the block but!
//we can't access the blockscope variables out of the block

//var x is accessible because it is a globally stored data
console.log(x);

// //let y can't because it is the block level variable and it stores in local memory
// console.log(y);
// //same for Const
// console.log(z);


//Shadowing of variables

var naam = "VAMSHI"
let user = "deva"

{
    var naam = "vamshi"
    let user = "dev"
    const exp = "23"

    console.log(naam);
}
console.log(naam);
console.log(user);


//Illegal shadowing
{
    const a = 100
    const b = 400

    //each and every block has a Lexical scope  
    {
        const c = 200
        const a = 200
        console.log(a)
        console.log(b)
    }
    console.log(a)
}

const a = 45
{
    const a = 65
    {
        const a = 55
        const b = 'ss'
        console.log(b)

    }

}
