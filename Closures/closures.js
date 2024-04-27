//CLOSURE is a bundled with a lexical environment or function along with a lexical scope    



function x() {
    const a = 100
    function y() {
        console.log(a)
    }
    y()
}
x()