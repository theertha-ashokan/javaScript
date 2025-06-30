function greet(name,callme){
    console.log(`hai ${name}`);
    callme()
}


function callback() {
    console.log('inside the call back fuction');
    
}

greet('peter',callback)