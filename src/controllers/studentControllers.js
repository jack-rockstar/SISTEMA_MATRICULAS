//IMPORTAMOS TODOS LOS METODOS DESDE LA CARPETA
import { getConexion, sql, querys } from '../database'


export const getStudent = async (req, res) => {
    try {
        const connect = await getConexion()
        const result = await connect.request().query(querys.getAllStudent)
        res.json(result.recordset)
    } catch (e) {
        res.status(500)
        res.send(e.message)
    }

}

export const createStudent = async (req, res) => {
    const { nombre, apellidos, dni,
        carrera, idCurso } = req.body
    let { correo } = req.body


    if (nombre == null || apellidos == null || dni == null || carrera == null || idCurso == null) {
        return res.status(400).json({ msg: 'Bad request. Please fill all fields' })
    }
    if (correo == null || correo == "") correo = "No tiene"

    try {
        const connect = await getConexion()
        await connect.request()
            .input('nombre', sql.VarChar, nombre)
            .input('apellidos', sql.VarChar, apellidos)
            .input('correo', sql.VarChar, correo)
            .input('dni', sql.VarChar, dni)
            .input('carrera', sql.VarChar, carrera)
            .input('idCurso', sql.Int, idCurso)
            .execute(querys.insertStudent)

        res.json({ nombre, apellidos, correo, dni, carrera, idCurso })
    } catch (e) {
        res.status(500)
        res.send(e.message)
    }
}

export const getStundentById = async (req, res) => {
    const { id } = req.params
    try {
        const connect = await getConexion()
        const result = await connect.request()
            .input('idAlumno', id)
            .execute(querys.getStudentById)
        res.send(result.recordset[0])
    } catch (e) {
        res.status(500)
        res.send(e.message)
    }
}
export const deleteStudentById = async (req, res) => {
    const { id } = req.params
    try {
        const connect = await getConexion()
        const result = await connect.request()
            .input('idAlumno', id)
            .execute(querys.deleteStudent)
        res.sendStatus(204)
    } catch (e) {
        res.status(500)
        res.send(e.message)
    }

}
export const TotalStudent= async (req,res)=>{
    //try {
        console.log('entramos');
        const connect=await getConexion()
        const result=await connect.request()
        .query(querys.getTotalStudent)
        //res.json(result.recordset[0][''])
        console.log('salimos');
        console.log(result);
    /*} catch (e) {
        res.status(500)
        res.send(e.message)
    } */
    
}

export const updateStudentById = async (req, res) => {
    const { nombre, apellidos,correo, dni,
        carrera, idCurso } = req.body
    const {id}=req.params

    if (nombre == null || apellidos == null ||correo == null || dni == null || carrera == null || idCurso == null) {
        return res.status(400).json({ msg: 'Bad request. Please fill all fields' })
    }
    try {
        const connect=await getConexion()
        await connect.request()
        .input('nombre', sql.VarChar, nombre)
        .input('apellidos', sql.VarChar, apellidos)
        .input('correo', sql.VarChar, correo)
        .input('dni', sql.VarChar, dni)
        .input('carrera', sql.VarChar, carrera)
        .input('idCurso', sql.Int, idCurso)
        .input('idAlumno',sql.Int,id)
        .execute(querys.updateStudent)
        res.json({nombre,apellidos,correo,dni,carrera,idCurso})
    } catch (error) {
        console.log('error ac'+error)
    }
    

}