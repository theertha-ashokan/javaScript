function parent() {
    console.log('inside the parent function');
    function child() {
        console.log('inside child function');
        
    }
    child()
}
parent()


//CLOSURE property

function parent() {
    console.log('inside the parent function');
    const x ="parent varriable" 
console.log(x);


    function child() {
        console.log('inside child function');
        console.log(x); 
    }
    child()
}
parent()