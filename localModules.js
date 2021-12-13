// require fs
//core module
const fs = require("fs");

const data = fs.readFileSync("file.txt");

const addingNote = (nom, adresse) => {
    //convert my json data to string

    // data =[{"nom":"amal","adresse":"tunis"},{"nom":"ahmed","adresse":"tunis"},{"nom":"achref","adresse":"tunis"}]
    const notes = JSON.parse(data);
    console.log(notes);
    //objet note that has keys : nom ,adresse
    let note = { nom, adresse };
    // ==: comparaison value , ===: type+value
    //notes=[{nom:"  ", adresse:""},{},{}]
    // filter: array function
    // double = notes (tab) .filter((note)=> note.nom === nom)=>double: [{},{}]
    let double = notes.filter((note) => note.nom === nom);
    console.log(double);

    double.length === 0
        ? (notes.push(note),
          //JSON.stringify(notes): converts notes to json
          fs.writeFileSync("file.txt", JSON.stringify(notes)),
          logNote(note))
        : console.log("STOP: Name already exists.");

    //ternary operator
    // const a = false;
    // a && console.log("aa");
};
const logNote = (note) => {
    console.log("********************************");
    console.log(`Nom: ${note.nom}`);
    console.log(`Adresse: ${note.adresse}`);
};

module.exports = {
    addingNote,
    logNote,
};
