//string
x = 'hello'
console.log(x);
console.log(x.length);

//we canot change existing string

//we can reasign
y = 'haaaallo'
console.log(y);
console.log('-----------------------------');


//string methodss

//1)startswith
   str = 'Luminar'

   console.log(str.startsWith('l')?'yes':'no');

//2)endwith
   console.log(str.endsWith('l')?'yes':'no');

   console.log('-----------------------------');

//3)substring
   s1 =str.substring(2,5)
   console.log(s1);

//4)toUpperCase
 s2 = str.toUpperCase()
 console.log(s2);
 
 //5)toLoweCase
  str1 ='LUMINAR'
  s3 = str.toLowerCase()
 console.log(s3);
 
 //6)trim
   str2 ='      LU  MINAR'
   console.log(str2.trim());
   
//7)slice
    s4 = str.slice(-5,-2)
    console.log(s4);
    
//8)split(seperator)
str = 'hello theertha'
s = str.split('e')
console.log(s);


str = 'hello theertha'
s1 = str.split(' ')
console.log(s1);

//9)Array.from
  
  s2 = Array.from(str)
  console.log(s2);
  
//10)replace
  text = 'i am working in google'
  text1 = text.replace('google','microsoft')
  console.log(text1);
  

  //11)replaceAll
  text = 'i am working in google,and i am developer in google'
  text2 = text.replaceAll('google','microsoft')
  console.log(text2);
  