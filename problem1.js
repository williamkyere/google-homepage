/*
The algorithm is simple 
Loop from 1 to 1000 with i
    if(i%3 ===0)total+= i;
    break;
    if(i%5===0)total+=i;
    break;
    
End loop

*/


var l= 0;

var i = 1;

for(; i < 1000; i++){
    
    if(i%3 === 0)l+=i;
    if(i%5 ===0)l+=i;

}

    console.log(l);
