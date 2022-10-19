#!/usr/bin/env node
const fs = require("fs")
var args = process.argv.slice(2)

switch (args[0]) {
    case '--file':
        if (!args[1]) {
            console.log("Please enter folder name.")
            process.exit(1)
        }
        if (args[1]) {
            fs.writeFile(args[1], '', function (err) {
                if (err) console.log(err)
                console.log("File created was successful")
            })
        }
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
Options
    --folder,  Create a new folder
    --file, Create a new file
    --help, Show help list
Examples
    $ create --folder my-folder`)
    break;
    default:
        console.log(`    
Usage
    $ create <input>
Options
    --folder, Create a new folder
    --file, Create a new file
    --help , Show help list
Examples
    $ create --folder my-folder`)
        break;
}
