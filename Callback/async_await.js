console.log(`person 1 shows ticket`)
console.log(`person 2 shows ticket`)

// let promiseWifeBringingTicks= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('Ticket')
//     },2000)
// })

// let getPopcorn=promiseWifeBringingTicks.then((t)=>{
//     console.log(`wife: I have  the ${t}`)
//     console.log(`Husband: Lets go in`)
//     console.log(`Wife: I'm Hungry`)
//     return new Promise((resolve,reject)=>resolve(`${t} popcorn`))
// })

// const getButter=getPopcorn.then((t)=>{
//     console.log(`Husband: I got some Popcorn`)
//     console.log(`Husband: Lets go in`)
//     console.log(`Wife: I need butter on my popcorn`)
//     return new Promise((resolve,reject)=>resolve(`${t} butter`))
// })

// const getColdDrink=getPopcorn.then((t)=>{
//     console.console.log(`Husband: i got Coldrink as well`);
//     return new Promise((resolve,reject)=>resolve(`${t} coldrink`))
// })
// getButter.then((t)=> console.log(t))

const preMovie = async () => {

    const promiseWifeBringingTicks = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('ticket')
        }, 2000);
    })
    // const getPopcorn = new Promise((resolve, reject) => {
    //     resolve('Popcorn')
    // })
    // const getButter = new Promise((resolve, reject) => {
    //     resolve('Butter')
    // })
    // const getColdDrink= new Promise((resolve, reject) => {
    //     resolve('Coldrink')
    // })


    // let ticket = await promiseWifeBringingTicks;
    // let [popcorn,butter,coldrink] = await Promise.all([getPopcorn,getButter,getColdDrink]) 
    
    // console.log(`${popcorn},${butter},${coldrink}`)
    // return ticket;

    let ticket
    try{
        ticket = await promiseWifeBringingTicks;
    }catch(e){
        ticket='sad face';
    }
 return ticket
}

preMovie().then((m) => console.log(`Person 3 Shows ${m}`))

console.log(`person 4 shows ticket`)
console.log(`person 5 shows ticket`)
