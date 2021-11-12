
// const validator = require ('validator')
const chalk = require ('chalk')
const yargs = require ('yargs')
const notes = require ('./notes.js') 

// Customize yargs version
yargs.version('1.1.0')

// Create add command (Command is a method in yargs)
yargs.command({
    command: `add`,
    describe: `Add a new note`,
    builder:{ // The builder provides hints/instructions about the options that the command takes. Use it whenever you want to provide information on a specific command.
        title:{
            describe: 'Note title',
            demandOption: true, //This will make sure that we provide title name. It demanding the title from the user by setting it true. 
            type: 'string'
        },
        body:{
            describe: `Note body`,
            demandOption: true,
            type: `string`
        }
    },
    handler: function(argv){
        notes.add_Notes(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: `remove`,
    describe: `Remove a new note`,
    builder:{
        title:{
            describe: `Note title`,
            demandOption: true, // Require option 
            type: 'string'
        },
        body:{
            describe: `Note title`
        }
    },
    handler: argv => {
        notes.remove_Notes(argv.title)
        // console.log(`Removing a new note!`);
    }
})

// Create list command
yargs.command({
    command: `list`,
    describe: `list a new note`,
    handler: function(argv){
        
        console.log(`listing a new note!`);
    }
})

// Create read command
yargs.command({
    command: `read`,
    describe: `read a new note`,
    handler: function(){
        console.log(`reading a new note!`);
    }
})


// add, remove, read, list
yargs.parse() // Does the same as below line..!!!
// console.log(yargs.argv);

