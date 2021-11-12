const fs = require('fs')
const chalk = require ('chalk')

let get_Notes = () => {
    return 'Your notes...';
};

const add_Notes = (title, body) => {
    const notes = load_Notes()
    const duplicate_Notes = notes.filter((note)=>{
        return note.title === title
    })

    if(duplicate_Notes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        save_Notes(notes)
        console.log(chalk.green.underline(`New Note Added..!✅`));
    } else {
        console.log(chalk.red.underline.bold.bgWhiteBright(`Note Title taken❌❌`));
    }
    
    console.log(notes);
}
const save_Notes = (notes)=>{
    const data_JSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', data_JSON) // writing whatever is store in JSON varaible 
}

const remove_Notes = (title)=>{
    // console.log(chalk.blue.inverse('Removing a note'));
    const notes = load_Notes();
    const notes_to_keep = notes.filter((note)=>{
        return note.title.toLowerCase() !== title.toLowerCase();
    })
    if (notes_to_keep.length === notes.length){
        console.log(chalk.red.inverse('No notes found!!'));
        return 
    } else {
        console.log(chalk.italic.magenta("Note " + chalk.grey.italic.inverse(`${title}`) + " was removed.! Congratulations"));
    }
        save_Notes(notes_to_keep);
    
};

const load_Notes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json') // this will open/load a new file. Readng a write file 'notes.json'
        const dataJSON = dataBuffer.toString() // This will convert data into human readable form
        return JSON.parse(dataJSON) // returning parsed data
    } catch(e){
        return[]
    }

    
}

module.exports = {
    get_Notes: get_Notes,
    add_Notes: add_Notes,
    remove_Notes: remove_Notes   
}
