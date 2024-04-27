//Scope Chain
//Lexical Environments


function a() {
    function c() {
        function d() {
            console.log(b)
        }
    }

}
var b = 10
a()
