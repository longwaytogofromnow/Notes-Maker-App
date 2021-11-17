const mongoose=require('mongoose');
const mongoURI="mongodb://localhost:27017/notes_reminder?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
const connectToMongo= () =>{
    mongoose.connect(mongoURI,()=>{
        console.log('connected to mongo successfully');
    })
}

module.exports=connectToMongo;