console.log("Start");

await new Promise((resolve, reject)=>{
setTimeout(() => {
    console.log("Timeout");
    // resolve()
    reject(`reject by force`)
}, 0);

})




// setImmediate(()=>{
//     console.log("Immediate");
// })
// process.nextTick(()=>{
//     console.log("NextTick");
// })
console.log("End");