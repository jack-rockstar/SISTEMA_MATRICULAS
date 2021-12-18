import sql from 'mssql'
import config from '../config'


const dbconfig={
    user:config.USER,
    password:config.PASS,
    server:config.SERVER,
    database:config.DB,
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
      }
}

export async function getConexion(){

    try {
        const conect=await sql.connect(dbconfig)
        return conect
    } catch (e) {
        console.log('Error conexion database'+e)
    }
}

export {sql}
