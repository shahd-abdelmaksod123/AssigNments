//Q1
let x="123"
console.log(Number(x)+7);
console.log("-------------------------------------------")
//Q2
let variable=0
if(!variable){
   console.log("invalid")
}
console.log("-------------------------------------------")
//Q3
for(let i=0;i<=10;i++){
    if(i%2==0)
        continue
    console.log(i)
}
console.log("-------------------------------------------")
//Q4
let arr=[1,2,3,4,5]
let evenNums=arr.filter(function(even){
        return even%2==0
    }
    )
console.log(evenNums)  
//Q5
console.log("-------------------------------------------")
let arr1=[1,2,3]
let arr2=[4,5,6]
let mergedArr=[...arr1,...arr2]
console.log(mergedArr)
//Q6
console.log("------------------------------------------")
let day=2
switch(day){
    case 1:
        console.log("sunday")
        break;
    case 2:
        console.log("monday")
        break;
    case 3:
        console.log("tuesday")
        break;
    case 4:
        console.log("wednesday")
        break;
    case 5:
        console.log("thuresday")
        break;
    case 6:
        console.log("friday")
        break;
    case 7:
        console.log("Saturday")
        break;
    default:
        console.log("invalid day")
}
console.log("-------------------------------")
//Q7
let strArr= ["a", "ab", "abc"] 
let lengths=strArr.map(word=>word.length)
console.log(lengths)
console.log("-------------------------------")
//Q8
function divitionByThreeOrFive(x){
    if(x%3==0 && x%5==0)
        console.log("divisible by both")
       
}
divitionByThreeOrFive(10)
console.log("-------------------------------")
//Q9
let SquareOfNum=(x)=>{
    let p=x**2
    console.log(p);
}
SquareOfNum(5)
console.log("------------------------------")
//Q10
const person={
    name :"john",
    age:25
}
function identification(obj){
    let identity=`${obj.name} is ${obj.age} years old`
    return identity
}
console.log(identification(person))
console.log("_________________________________")
//Q11
function sum(...n){
    let total=0
    for(let numbers of  n){
        total+=numbers
    }
    return total
}
console.log(sum(1,2,3,4))
console.log("_________________________________")
//Q13
let elements=[1,20,7,2,11]
function getLargestNum(arr){
    let l=arr.length
    let max=arr[0]

    for(let i=1;i<=l;i++){
        if(arr[i]>max){
            max=arr[i]
        }
      
    }
      return max
}
console.log(getLargestNum(elements))
console.log("_________________________________")
//Q12
function prom() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("success");
        }, 3000);
    });
}

prom().then((message) => {
    console.log(message);
});
console.log("_________________________________")
// Q14
function Keys(obj){
    let newArr=Object.keys(obj)
    console.log(newArr)
}
Keys(person)
console.log("_________________________________")
//Q15
let word="The quick brown fox"
function splitting(word){
    let arr=word.split(" ")
    console.log(arr)
}
splitting(word)
console.log("_________________________________")
