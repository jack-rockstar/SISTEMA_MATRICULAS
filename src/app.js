//SINONIMO DE REQUIRE
import express from 'express'
import config from './config'


// ROUTER 
import student from './routes/studentRoutes'
import courses from './routes/coursesRoutes'

//ASI EJECUTAMOS EXPRESS
const app=express();

//cors
const cors = require('cors')
var corsOptions = {
    origin: '*', // Reemplazar con dominio
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))



//PARA QUE EL SERVIDOR ACEPTE DATOS EN JSON
//MIDDLEWARES
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//SETTING (SERVER)
app.set('port', config.PORT)

//ASI USAMOS LOS ROUTES
app.use(student,courses)


export default app
