const readline = require('node:readline')
const { MongoClient } = require('mongodb')

const cleint = new MongoClient('mongodb+srv://Bhavdeep:Bhavdeep_02{joy}@cluster0.dixfv.mongodb.net/products?retryWrites=true&w=majority&appName=Cluster0')


const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
})

function askquestion(question) {
    return new Promise((res, rej) => {
        r1.question(question, (value) => {
            if(parseInt(value)){
                res(parseInt(value))
            }
            else
            res(value)
        })
    })
}
const properties = ['_id', 'name', 'image', 'category']
async function loop() {
    let student = []

    for (let i = 0; i < 1; i++) {
        let item = {}

        for (const props of properties) {
            item[props] = await askquestion(`Enter ${props}: `)
        }

        student.push(item)
        console.log('\n')
    }
    r1.close()

    cleint.connect()
        .then(() => {
            return cleint.db().collection('menu').insertMany(student)
        }).then(()=>{
            console.log('data added correctly')
            r1.close()
        }).catch((e)=>{
            console.log(e.message)
        })

}

loop().catch((e) => {
    console.log(e)
    r1.close()
})

