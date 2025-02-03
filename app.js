const express=require('express')
const app=express()


function greet(){
    let date=new Date()
    let day=date.getDay()

    if (day==1){
        return{
            "dayMeessage": "Happy Monday! Start your week with energy!"
        }
    }
    else if (day==5)
        return{
            "dayMeessage": "Happy Friday! Start your week with energy!"
        }
    else{
        return{
            "dayMessage":"Have a Wonderfull day"
        }
    }
}



app.get("/assistant/greet",async(req,res)=>{
    try {
        let user =req.query.name
        let message =greet()
        console.log(message)
        let welcomeMessage =`Hello, ${user} welcome to our assistant app!`
        message["welcomeMessage"]=welcomeMessage
        console.log(message)

        res.status(200).json(message)
    } catch (error) {
        res.status(500).json({status:false,message:"internal Serve error"})
    }
})


app.listen(3000,()=>{
    try {
        console.log("Working successfully ")
    } catch (error) {
       console.log(error) 
    }
})

