/*jshint esversion: 6 */

const express=require('express');

const friendsRouter=require('./routes/friends.router');
const messagesRouter=require('./routes/messages.router');

//const res = require('express/lib/response');

const app=express(); 
const PORT=3000;

app.use((req,res,next) =>

    {   // LOGGING MIDDLEWARE
    const start=Date.now();  
    
    console.log(req.method +req.baseUrl+ req.url);
    next();
    }
    
);
app.use(express.json());

app.use('/friends',friendsRouter);  
app.use('/messages',messagesRouter);


app.listen(PORT, ()=> {
    console.log('listening on ' + PORT);
});