num=Number(prompt("Enter a number: "));
console.log("The factors of "+num+" are ")
for(let i=1;i<=num;i++){
    if(num%i==0){
        console.log(i)
    }
}