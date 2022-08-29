const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('./db.js');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const routes = require('./routes/route.js');
const admins = require('./routes/admins.js');
const sadmins = require('./routes/sadmins');
const posts = require('./routes/posts.js')


const app = express();

//cors
app.use(cors({
  origin: ['http://localhost:4200', 'http://127.0.0.1:4200'],
  credentials:true  
}));


app.use(session({
    name:'myname.sid',
    resave:false,
    saveUninitialized:false,
    secret:'secret',
    cookie:{
      maxAge:36000000,
      httpOnly:false,
      secure:false
    }
    //store: new MongoStore({ mongooseConnection: mongoose.connection })
  }));


//passport
require('./passport');
app.use(passport.initialize());
app.use(passport.session());

//static folser
app.use(express.static(path.join(__dirname, 'public')));

//cookieParser
app.use(cookieParser());

//bodyParser
app.use(bodyParser.json());

app.use('/admins',admins);
app.use('/sadmins',sadmins);
app.use('/posts',posts);

//index route
app.get('/',(req,res) => {
    res.send('Invalid Endpoint');
});

//start server
app.listen(5000, ()=> console.log('Server started at port: 5000')); 