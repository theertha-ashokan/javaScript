//w.a.p to display all numbers whose exponential is in the range of 8-36
//use can input the power value

// p = parseInt(prompt('enter the number:'))

i = 1
power = 2//user can change power
while (i <= 36) {
    if (8 <= i**power && i**power <= 36)
        {
       console.log(i);
        }
    if(i**power>36) {
        break
    } 

    i++

}