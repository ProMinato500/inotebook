const mongoose = require('mongoose');

const mongoURI = "mongodb://0.0.0.0:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"

    const connectToMongo = ()=>{
        mongoose.connect(mongoURI).then(() => {
            console.log("Connected to MongoDB successfully :)");
        }).catch((e) => {
            console.log("Error while attempting to connect to MongoDB");
            console.log(e);
        });
}




module.exports = connectToMongo;