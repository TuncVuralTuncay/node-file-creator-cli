#!/usr/bin/env node
const fs = require("fs")
var args = process.argv.slice(2)

if(!args[0]) {
    console.log("Please enter a file.")
    process.exit(1)
}

// Read the file 
fs.readFile(args[0], "utf8", (err, data) => {
    if(err) {
        console.log(err)
        process.exit(1)
    }
    console.log(data)
})