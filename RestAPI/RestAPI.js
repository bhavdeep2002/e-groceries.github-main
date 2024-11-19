const {MongoClient} =require('mongodb')
const http =require('http')
const port=3000
const mongodburl="mongodb+srv://Bhavdeep:Bhavdeep_02{joy}@cluster0.dixfv.mongodb.net/products?retryWrites=true&w=majority&appName=Cluster0"

//connection to MongoDB
const client=new MongoClient(mongodburl)

client.connect()
.then(()=>{
    console.log("connected to MongoDB Database")
    
    // creating serving and listenning for requests
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"application/json","access-control-allow-origin":"*"})
    const {url,method} =req
    let result
    if(method==='GET' && url==='/Trending'){
        client.db().collection('post').find({selling:"Trending"}).toArray()
        .then((result)=>{res.end(JSON.stringify(result))})
        .catch((e)=>console.log(e.message))
      
    }
    else if(method==='GET' && url ==='/Bestselling'){
        client.db().collection('post').find({selling:"Bestselling"}).toArray()
        .then((result)=>{res.end(JSON.stringify(result))})
        .catch((e)=>console.log(e.message))
    }
    
}).listen(3000,()=>{console.log(`server is started ${3000}`)})

})
.catch((e)=>console.log(e.message))

