require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const Log = require('./models/log.js');

//Middleware
app.set('view engine','jsx');
app.engine('jsx',require('express-react-views').createEngine());
app.use(express.urlencoded({extended:false}));//built in middleware function in Express.
//It parses incoming requests with urlencoded payloads and is based on body parser.
app.use(methodOverride('_method'));

//DB connection /Remove Deprication warnings
mongoose.set('strictQuery',true);
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});
mongoose.connection.once('open',()=>{
    console.log('Connected to MongoDB');
})


//Routes
//Index Route
app.get('/logs',(req,res)=>{
   Log.find({},(error,allLogs)=>{
        res.render('Index',{
            logs:allLogs
        })
    })
})

//Show route
app.get('/logs/:id',(req,res)=>{
   Log.findById(req.params.id,(err,foundLog)=>{
    res.render('Show',{
        log:foundLog
    })
   })
})
//New Route
app.get('/logs/new',(req,res)=>{
    res.render('New');
})

//Create Route
app.post('/logs',(req,res)=>{
    // res.send(req.body)
    if(req.body.shipIsBroken === 'on'){
        req.body.shipIsBroken = true;
    }
    else{
        req.body.shipIsBroken = false;
    }
    Log.create(req.body,(err,createdLog)=>{
        // res.send(createdLog);
        res.redirect('/logs');
    })
})

app.listen(3000,()=>{
    console.log('Listening');
})