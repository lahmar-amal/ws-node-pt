const lc = require("./localModules.js");
//process.argv => input index 0&1 reservés donc on commence par 2
// how to run : node main.js add (name of our command) achref(for exemple for name ) tunis(adresse)
const command = process.argv[2];
const nom = process.argv[3];
const adresse = process.argv[4];

if (command === "add") {
    console.log("adding note");
    lc.addingNote(nom, adresse);
} else {
    console.log("nada");
}
