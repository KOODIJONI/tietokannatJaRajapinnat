setTimeout(doSomething, 2000);

function doSomething() {
    console.log("Demonstrating the callbacks");
}
console.log("the application is started");

//tee aliohjelma käyttäen anonyymiä functiota

setTimeout(function () {
    console.log("Demonstrating the callbacks");
}, 2000);

//tee aliohjelma käyttäen nuolifunktiota

setTimeout(() => {
    console.log("Demonstrating the callbacks");
}, 2000);