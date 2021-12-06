const brands=[
    {
        name:"TATA", category:"Indian" ,established:"1943", firstCar:"TATA INDICA"    },
        {
            name:"Maruti Suzuki" , category:"Indian",established:"1982" , FirstCar:"Maruti 800"

        },
        {name:"Mahindra & Mahindra" , category:"Indian" , established:"1945" , FirstCar:"Jeep Cj3"},
        {
         name:"Honda", category:"Non-Indian" ,established:"1948" , FirstCar:"1360"
        },
        {
            name:"BMW" ,category:"Non-Indaian",established:"1916",FirstCar:"BMW"
        },
        {
            name:"Toyota", category:"Nom-Indian",established:"1936",FirstCar:"Model AA Sedan"
        }
];
const ages=[24,5,19,23,36,46,64,57,12,16,48,72]


//Using for

for(let i=0;i<brands.length;i++){
    console.log(brands[i])
}

//Using For each

// brands.forEach(function(brands){
//     console.log(brands)
// }) 
//in replace of brand in parameter we can assign x value also or any char

brands.forEach(function(x){
    console.log(`${x.name}'\s first car is ${x.firstCar}'`)
})

//using filter

let canVote=[]

// for(i=0;i<ages.length;i++){
//     if(ages[i]>=18){
//         console.log(`they can vote: ${ages[i]}`)
//         canVote.push(ages[i])
//         console.log(canVote)
//     }
// }

const canVote2=ages.filter(function(age){
    if(age>=18){
        return true
    }
    
})
console.log(canVote2)


const canVote3=ages.filter(age=>age>=18)
console.log("canVote3",canVote3)

//filter indian brands

const brad=brands.filter(function(brand){
    if(brand.category=="Indian"){
        return true
    }
})
console.log(brad)

const brand1=brands.filter(brand=>brand.category=="Indian")


console.log(brand1)

//first car
const firstCar=brands.filter(Car=>Car.FirstCar)
console.log(firstCar)

//brand before 1948

const before1940=brands.filter(function(brand){
    if(brand.established<1940){
        return true
    }
})
console.log(before1940)

//arrow function

const before194=brands.filter(brand=>(brand.established)<1940)
console.log("before1940",before194)







//map function 

const bname=brands.map(function(brand){
return brand.name
})
console.log(bname)

//Brand with established year

const established=brands.map(function(brand){
    return `${brand.name} is established in ${brand.established}`
})
console.log(established)

// double ages

const Agedouble=ages.map(function(age){
    return age*2
})
console.log(ages)
console.log("DoubleAges",Agedouble)

const AgesDoubled2=ages.map(age=>age*2)
console.log(AgesDoubled2)

const sqrt=Agedouble.map(age=>Math.sqrt(age))
console.log(sqrt)

const sqrt2=ages.map(function(age){
    return Math.sqrt(age)
})
console.log(sqrt2)


//sort by established year

const sortbyestablish=brands.sort(function(a,b){
    if(a.established > b.established){
        return 1;
    }else{
        return -1;
    }
})
console.log(sortbyestablish);


const sort2=brands.sort((a,b)=>(a.established > b.established) ? 1:-1)
console.log(sort2)

//sort ages
const sort1=ages.sort()
//const sort1=ages.reverse()
console.log(sort1)

const sortDes=ages.sort((a,b)=>(b-a))
console.log(sortDes)


//reduce

const agesR=ages.reduce(function(total, age){
    return total + age
},0)
console.log(agesR)

b=ages.reduce((total,age)=>total+age,0)
console.log(b)

//total years of brands

// brands.forEach(i => {
//    d=( `${i.established}`) 
//    console.log(d )
// });

c=brands.reduce(function(total,brand){
    //return total+(2021-brand.established)
    return total +(new Date().getFullYear()-brand.established)
},0)
console.log(c)

const e=brands.reduce((total,brand)=>total+(new Date().getFullYear() - brand.established),0)
console.log(e)

//combined methods

const combine=ages.map(age=>age*2)
.filter(age=>age>=40)
.sort((a,b)=>a-b)
.reduce((a,b)=>a+b,0)

console.log(combine)

//getting data from API

async function getData(){
    try{
     let response =await fetch('https://jsonplaceholder.typicode.com/todos')
     return await response.json();
    }catch(error) {
        console.log(error)
    }
}


//displaying data
async function showData(){
    let data= await getData();

    let html="";//initalise

    data.map(todo =>{
        let htmlTodo=`<p><strong>task:</strong> ${todo.title}</p>
        <p>Completed: ${todo.completed}</p>
        <br>`
        html+=htmlTodo;//append each todo
    })
    let contain=document.querySelector(".container")
    contain.innerHTML=html;
}
showData()