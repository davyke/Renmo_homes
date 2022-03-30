fetch(`heiahiehal `)
.then(response=>response.json)
.then(data=>{
    let html="";
    if(data.meals){
        data.meals.forEach(meal=>{
            html+=`
            data
            `
        })
    }
})
const route=express.Route();
route.post(req,res,next){
    res.send("hello there this is our first node app")
}

const express=requre"express";
const path=require"path";
const app=express();
app.use(express)
app.use((req,res,next)=>{
    res.send("yess we can finaly make our server serve some ")
    next();