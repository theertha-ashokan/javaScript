//w.a.p to print pairs whose pair sum is 6
a=[2,3,4,5]
pairsum=3
for(i=0;i<=a.length-1;i++){
    for(j=i+1;j<a.length;j++){
        if(a[i]+a[j]==pairsum){
            ispresent = true
            console.log(`(${a[i]},${a[j]})`);
            
        }
    }
}
!ispresent && console.log('no pair sum');
