const mongoose = require("mongoose")

const password = `Satyam@2001`;
const databaseName = `cluster0`;
const url = `mongodb+srv://Satyam2001:${encodeURIComponent(password)}@${databaseName}.3bctm.mongodb.net/cluster0?retryWrites=true&w=majority`;
console.log(url);
mongoose.connect(url,{
    useNewUrlParser : true,
})