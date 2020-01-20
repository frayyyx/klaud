// var paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
// var regex = /[A-Z]/g;
// var found = paragraph.match(regex);

// console.log(found);
// // expected output: Array ["T", "I"]


var imena = document.getElementById("daj");

var regex = /201[4-8]\d+/g;


var res = imena.innerHTML.match(regex);

console.log(res);

var dugme = document.getElementById("but");
dugme.onclick = function() {

    imena.innerHTML = res.length;

};