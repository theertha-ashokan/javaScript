//w.a.p.to find a number is amtrong or not.....153
num = 153
rem = 0
temp = num
sum = 0

while(num>0)
{
    rem = num % 10//153%10=150,rem=3
    sum = sum + rem**3
    num = Math.floor(num/10)

}
console.log(temp == sum ? 'amstrong':'not amstrong');







//find factorial

// i=1
// num = 5
// fact = 1
// while(i<=num)
// {
//     fact = fact+i
//     i++

// }
// console.log(fact);

