const prompt = require("prompt-sync")();
function ebook(title , ect , annes)
{
const book = {
    titre : title,
    writer : ect,
    year : annes
            };
            return(book);
}
let ibook = ebook("Metamorphosis", "franz kafka" , "1915");
console.log(ibook);