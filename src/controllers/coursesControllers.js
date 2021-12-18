import { getConexion,sql,querys } from "../database";


export const getCourses=async (req,res)=>{
        try {
            const connect= await getConexion()
            const result=await connect.request().query(querys.getAllCourses)
            res.json(result.recordset)
        } catch (e) {
            res.status(500)
            res.send(e.message)
        }
}
export const createCourses= async(req,res)=>{
    const {idCurso , curso,nivelCurso,profesor}=req.body
    
    if(idCurso==null || curso==null || nivelCurso==null || profesor==null){
        return res.status(400).json({ msg: 'Bad request. Please fill all fields' })
    }
    try {
         const connect=await getConexion()
         await connect.request()
         .input('idCurso',sql.Int,idCurso)
         .input('curso', sql.VarChar,curso)
         .input('nivelCurso', sql.VarChar,nivelCurso)
         .input('profesor',sql.VarChar,profesor)
         .execute(querys.insertCourses)
         res.json({idCurso,curso,nivelCurso,profesor})
    }catch(e) {
        res.status(500)
        res.send(e.message)
    }
}

export const deleteCourses=async (req,res)=>{
    const {id}=req.params
    try {
        const connect=await getConexion()
        const result=await connect.request()
        .input('idCurso', id)
        .execute(querys.deleteCourse)
        res.send({status:204,msg:'Register delete'})
    } catch (e) {
        res.status(500)
        res.send(e.message)
    }

}
export const udpateCourseById=async (req,res)=>{
    const {idCurso,curso,nivelCurso,profesor}=req.body
    //const {idCurso}=req.params

    if(curso==null || nivelCurso==null || profesor==null){
        return res.status(400).json({ msg: 'Bad request. Please fill all fields' })
    }
    try {
        const connect=await getConexion()
        const result=await connect.request()
        .input('curso', sql.VarChar,curso)
        .input('nivelCurso', sql.VarChar,nivelCurso)
        .input('profesor',sql.VarChar,profesor)
        .input('idCurso',sql.Int,idCurso)
        .execute(querys.udpateCourse)
         res.json({curso,nivelCurso,profesor,idCurso})
    } catch (e) {
          res.status(500)
          res.send(e.message)  
    }


}
