//w.a.p.to find a given number is mobile number or not
number= '6253647890'
console.log(number.length==10?'yes,this is number':'not phone number');
console.log('-----------------------------');
console.log('*************************************************');


//w.a.p to check a given mail id is g mail or not

const checkMail = (mail) => {
    console.log(mail.endsWith('@gmail.com') ? 'yes' : 'no');
}

// Example usage
checkMail("example@gmail.com");  // Output: yes
checkMail("user@yahoo.com");     // Output: no
console.log('*************************************************');



//w.a p to check a given word starts with letter q
str1 = 'queen'
console.log(str1.startsWith('q') || str1.startsWith('Q')?'yes':'no');
console.log('*************************************************');



//w.ap.to print all wovels from a given string
//o/p=a,i,e,e,o,u
sentance = "hai everyone"
vowel = ['a','e','i','o','u','A','E','I','O','U']
characters = sentance.split('')

for(let item of characters){
    if(vowel.includes(item)){
        console.log(item);
        
    }
}
console.log('*************************************************');
//in array method
Array.from(sentance).filter((item)=>vowel.includes(item)).forEach((item)=>console.log(item));
console.log('*************************************************');


//w.a.p.to print a given string is palindrome or not
str = 'MALAYALAM'
pal = ''
for(i=str.length-1;i>=0;i--)
{
    pal+=str[i]
}
console.log(pal==str?'palintrome':'not palintrome');







