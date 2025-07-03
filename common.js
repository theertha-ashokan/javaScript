//w.a.p.to print common number from the given two arrays
p=[10,11,12,20,30]
q=[11,20,25,30,33]
let Common = []
for(i=0;i<p.length;i++){
    for(j=0;j<q.length;j++){
        if(p[i]==q[j]){
            Common.push(p[i]);
        }
}
}
console.log("commom num:",Common);
console.log('------------------------');


//using of 

p=[10,11,12,20,30]
q=[11,20,25,30,33]
let op = []

for(let i of p){
    for(let j of q){
        if(i==j){
            op.push(i)
        }
    }
}
console.log(op.length==0?'no common number':op);
