const {MongoClient} =require('mongodb')
const http =require('http')
const mongodburl="mongodb+srv://Bhavdeep:Bhavdeep_02{joy}@cluster0.dixfv.mongodb.net/products?retryWrites=true&w=majority&appName=Cluster0"
const port =8080
//connection to MongoDB
const client=new MongoClient(mongodburl)

client.connect()
.then(()=>{
    console.log("connected to MongoDB Database")
    
    // creating serving and listenning for requests
http.createServer((req,res)=>{
    const {url,method} =req

    if(method==='OPTIONS'){
        res.writeHead(204,{
            "Access-Control-Allow-Origin":"*"
            ,"Access-Control-Allow-Methods":'GET, POST, PUT, PATCH, DELETE, OPTIONS'
            ,"Access-Control-Allow-Headers": "*"
        })
        res.end()
      return
    }


    res.writeHead(200,{"Content-Type":"application/json","access-control-allow-origin":"*"})
    
    let result
    if(method==='GET' && url==='/trending'){
        client.db().collection('post').find({selling:"Trending"}).toArray()
        .then((result)=>{res.end(JSON.stringify(result))})
        .catch((e)=>console.log(e.message))
      
    }
    else if(method==='GET' && url ==='/bestselling'){
        client.db().collection('post').find({selling:"Bestselling"}).toArray()
        .then((result)=>{res.end(JSON.stringify(result))})
        .catch((e)=>console.log(e.message))
    }
    else if(method==='GET' && url==='/reviews'){
        client.db().collection('post').find({selling:"Bestselling"}).toArray()
        .then((result)=>{res.end(JSON.stringify(result))})
        .catch((e)=>console.log(e.message))
    }
    else if(method==='GET' && url==='/cart'){
        client.db().collection('post').find({count:{$ne:0}}).toArray()
        .then((result)=>{res.end(JSON.stringify(result))})
        .catch((e)=>{console.log(e.message)})
    }
    else if(method==='GET' && url==='/everything'){
        client.db().collection('post').find().toArray()
        .then((result)=>{res.end(JSON.stringify(result))})
        .catch((e)=>{console.log(e.message)})
    }
    else if(method==='GET'){       
       let id= parseInt(url.split("/")[2])// this provides id
       client.db().collection('post').findOne({_id:id})
       .then((result)=>{res.end(JSON.stringify(result))})
       .catch((e)=>console.log(e.message))
    }
    else if(method==='PATCH' && url==='/addtocart'){
         let body=''
        req.on('data',(chunk)=>{
          body =body +chunk.toString()
        })
        req.on('end',()=>{
            body =JSON.parse(body)
            client.db().collection('post').updateOne({_id:body._id},{$inc:{count:body.update}})
            .then(()=>res.end('{"success":true}'))
            .catch((e)=>{console.log(e.message)})
        })

    }
}).listen(port,()=>{console.log(`server is started ${port}`)})

})
.catch((e)=>console.log(e.message))

