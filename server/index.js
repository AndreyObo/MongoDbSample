const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Query = require('./models/Query')
const router = require('./Router/router')
require('dotenv').config()

const app = express()

/*Для работы c запросами*/
app.use(cors())
/*Для работы c json форматом*/
app.use(express.json())

/*Подлючаем компонент с маршрутами нашего сервера*/
app.use('/app', router)

const start = async () => {
    try {
         const cl =  await mongoose.connect(process.env.DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})

        const res = await Query.create({name:"liiiivfdvvrgri", mail:"Oneiiiul",body:"guiuilieet", PDataValidation:true})
        app.listen(process.env.PORT, ()=>console.log('Server is run'))
    
    } catch(e) {
        console.log(e)
    }
}


start()