const mongoose=require('mongoose');
require('dotenv').config();


const connectDB=()=>{
    mongoose.connect(process.env.MONGO_CONNECTION_URL,{ useUnifiedTopology: true, useNewUrlParser: true});
    const connection=mongoose.connection;

    connection.once('open',()=>{
        console.log('Database conected!');
    }).catch(err=>{
        console.log('Connection failed.');
    })
}



module.exports=connectDB;