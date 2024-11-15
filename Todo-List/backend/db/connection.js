const mongoose=require('mongoose');
mongourl=process.env.MONGOURL


mongoose.connect(mongourl,).then(()=>{
    console.log('DB is connected')
}).catch(()=>{
    console.log('connection failed to DB')
});