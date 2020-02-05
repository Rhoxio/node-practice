const fs = require('fs');
var stuff;

let load = new Promise((resolve, reject) => {
  fs.readFile("./test.json",'utf8', (err, data) => {
    resolve(data)
    reject(err)
  })
})

load.then(data => {
  console.log(data)
  stuff = JSON.parse(data)
}).then(()=>{
  console.log(stuff)  
})

