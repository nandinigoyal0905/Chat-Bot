const mongoose = require('mongoose');
//checking connection with mongoDb
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'), () => {
    console.log("error in connection to database");
});
db.once('open', function () {
    // we're connected!
    console.log(" connected to database");
});
//connecting to mongoDb
let URI = "mongodb+srv://disha:Disha123@cluster0.sfljv.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(URI);
module.exports = db;