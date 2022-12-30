#!/usr/bin/env node
const fs = require("fs")
var args = process.argv.slice(2)
const open = require("open")
const fetch = require("node-fetch")
const {Database} = require("tuncvr-db")
const db = new Database("./p.json")
const frstcntrl = db.get("kntrl")

switch (args[0]) {
    case '--file':
        if (!args[1]) {
            console.log("Please enter file name.")
            process.exit(1)
        }
        if (args[1]) {
            fs.writeFile(args[1], '', function (err) {
                if (err) console.log(err)
                console.log("File created was successful")
            })
        }
        break;
    case '--rl':
        console.log("YOU RİCKROLLED XD")
        open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
        break;
    case '--folder':
        if (!args[1]) {
            console.log("Please enter folder name.")
            process.exit(1)
        }
        try {
            if (!fs.existsSync(args[1])) {
                fs.mkdirSync(args[1]);
            }
        } catch (err) {
            console.error(err);
        }
        break;
    case '--help':
    console.log(`    
Usage
    $ create <input>
    $ readf <file>
Options
    --folder,  Create a new folder
    --file, Create a new file
    --help, Show help list
Examples
    $ create --folder my-folder
    $ readf index.js`)
    break;
    default:
        console.log(`    
Usage
    $ create <input>
    $ readf <file>
Options
    --folder, Create a new folder
    --file, Create a new file
    --help , Show help list
Examples
    $ create --folder my-folder
    $ readf index.js`)
        break;
    case '--feedback':
        var name = args[1]
        if(!name) console.log("Please enter your name !")
        var fd = args.slice(2).join(" ")
        fetch("https://tuncvr-api.glitch.me/feedback?name="+name+"&msg="+fd) 
        console.log("Thanks for your feedback")  
        break;  
}
