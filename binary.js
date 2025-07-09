//BINNARY SEARCH IMPORTANT ,FOR INTERVIEWS.

a = [10,11,12,3,4,2]
console.log(a);
console.log('---------------------');


//ascending
//arrayname.sort((a,b)=>a-b)
a = [10,11,12,3,4,2]
a.sort((num1,num2)=>num1-num2)
console.log(a);
console.log('---------------------');


//desecnding order
//arrayname.sort((a,b)=>b-a)
a = [10,11,12,3,4,2]
a.sort((num1,num2)=>num2-num1)
console.log(a);
console.log('---------------------');
console.log('---------------------');


//important

 // algorithm
//--------------
    
// 1) Start

// 2) Initialize variables - low & up
let arr = [10, 5, 2, 7, 15, 20];
let low = 0;
let up = arr.length - 1;
let searchItem = 20;
let mid = 0;
let ispresent = false;

// 3) Arrange the array in ascending order
arr.sort((a, b) => a - b);

// 6) Repeat step 4 and 5 until low > up
while (low <= up) {
    // 4) Mid index = (lower index + upper index) / 2
    mid = Math.floor((low + up) / 2);

    // 5) Compare the value at mid index with the search item
    if (arr[mid] == searchItem) {
        // a) Value in mid == search item
        ispresent = true;
        break;
    } else if (arr[mid] < searchItem) {
        // b) Value of mid < search item
        low = mid + 1; // Move to right half
    } else {
        // c) Value of mid > search item
        up = mid - 1; // Move to left half
    }
}

// 7) End
console.log(ispresent ? 'present' : 'not present');
console.log('------------------------------------------');

           

//find the common number
p = [10, 11, 12, 20, 30];
q = [11, 20, 25, 30, 33];
i = 0
j= 0
op =[]
while(i<p.length && j<q.length){

   if (p[i]==q[j]){
      op.push(p[i])
      i++
      j++
   }
   else if(p[i]>q[j]){
      j++
   }
   else{
      i++
   }
}
console.log(op.length==0?'no common number':op);
console.log('---------------------------------------');




//pairs
//w.p.to print pairs whose pair sum is 6.
a-[2,3,4,5]
low = 0
up = a.lenght-1
pairsum =6
Ispresent = false
//if the sum is greater than pairsum,then decrement the index all other casse increament the index
while(low<up)
{
    currsum = a[low]+a[up]
    if (currsum == pairsum){
    Ispresent = true
     console.log(`(${a[low]},(${a[up]})`);
     low++
    }
    else if(currsum<pairsum){
        low++
    }
    else{
        up--
    }
}
Ispresent && console.log('no pairs');

console.log('-----------------------------------');

