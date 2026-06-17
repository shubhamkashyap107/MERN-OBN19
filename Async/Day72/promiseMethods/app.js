// let p1 = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("p1")
//     }, 2000)
// })

// let p2 = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("p2")
//     }, 14000)
// })

// let p3 = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("p3")
//     }, 3000)
// })


// let p = Promise.any([p1,p2,p3])

// p.then((d) => {
//     console.log(d)
// })

// .any() => first resolved promise wins, if all rejects, the final promise rejects.
// .all() => all promises needs to resolve, if any rejects, the final promise rejects.
// .race() => waits for first promise to settle
// .allSettled() => waits for all promises to settle



const api1 = "https://dummyjson.com/products"
const api2 = "https://jsonplaceholder.typicode.com/users/"
const api3 = "https://jsonplaceholder.typicode.com/photos"


// const p = Promise.any([
//     fetch(api1).then(res => res.json()),
//     fetch(api2).then(res => res.json()),
//     fetch(api3).then(res => res.json()),
// ])


// const p = Promise.all([
//     fetch(api1).then(res => res.json()),
//     fetch(api2).then(res => res.json()),
//     fetch(api3).then(res => res.json()),
// ])


// const p = Promise.race([
//     fetch(api1).then(res => res.json()),
//     fetch(api2).then(res => res.json()),
//     fetch(api3).then(res => res.json()),
// ])


// const p = Promise.allSettled([
//     fetch(api1).then(res => res.json()),
//     fetch(api2).then(res => res.json()),
//     fetch(api3).then(res => res.json()),
// ])


// p.then((d) => {
//     console.log(d)
// })
// .catch((e) => {
//     console.log(e.message)
// })
