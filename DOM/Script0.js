//DOM Element Properties
let output;

// output = document.all
// output = document.all.length
// output = document.documentElement   
// output = document.head
// output = document.body

// output = document.head.children
// output = document.body.children

// output = document.doctype
// output = document.domain
// output = document.characterSet
// output = document.contentType
// output = document.URL


output = document.forms
output = document.forms[0]
output = document.forms[0].method
output = document.forms[0].action

// // document.forms[0].id = "new-id"
// output = document.links
// output = document.links[0].id = "bitch dom"
// output = document.links[0].className = "bitch class"
// output = document.links[0].href;
// output = document.links[0].href = "https://google.com"
// output = document.links[0].classList;


output = document.images;
output = document.images[0]
output = document.images[0].src;

const forms = Array.from(document.forms)
forms.forEach(element => {
    console.log(document.forms)
});


console.log(output)