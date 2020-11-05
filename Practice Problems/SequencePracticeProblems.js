//SEQUENCE PRACTICE PROBLEMS

//1
{
    let digit = Math.floor(Math.random()*10);
    console.log(digit);
}

//2
{
    let digit = Math.floor(Math.random()*10)%6+1;
    console.log("Dice Roll: "+digit);
}

//3
{
    let dice1 = Math.floor(Math.random()*10)%6+1;
    let dice2 = Math.floor(Math.random()*10)%6+1;
    let sum = dice1+dice2;
    console.log("Dice Roll Sum: "+sum);
}

//4
{
    let digit1 = Math.floor(Math.random()*100);  
    let digit2 = Math.floor(Math.random()*100);
    let digit3 = Math.floor(Math.random()*100);
    let digit4 = Math.floor(Math.random()*100);
    let digit5 = Math.floor(Math.random()*100);
    let sum = digit1+digit2+digit3+digit4+digit5;
    let avg = sum/5;
    console.log("sum: "+ sum+ " avg: "+avg); 
}
