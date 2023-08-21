const { default: mongoose } = require("mongoose");
mongoose.set('strictQuery', true);

var mongoURL = 'mongodb+srv://Jayath:Jayath123@cluster0.fcp5r9d.mongodb.net/mern-rooms'

mongoose.connect(mongoURL,{useUnifiedTopology : true,useNewUrlParser : true})

var connection = mongoose.connection 

connection.on('error', ()=>{
 console.log('Mongo DB Connection failed')
})

connection.on('connected', ()=>{
    console.log('Mongo DB Connection Successful')
});


module.exports = mongoose