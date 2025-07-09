//w.ap.to display all even numbers from the given array
//normal way using array of
a = [10,11,12,13,14,15]

  for(let item of a){
    if(item%2==0){
        console.log(item);
        
    }
  }
  console.log('----------------------');
  
  //using filter
  even = a.find((item)=>item%2==0)
  console.log(even);