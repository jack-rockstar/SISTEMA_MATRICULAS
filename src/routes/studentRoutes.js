import {Router} from 'express'
import {createStudent, deleteStudentById, 
    getStudent, getStundentById, 
     TotalStudent, 
     updateStudentById, } 
    from '../controllers/studentControllers'


const router=Router()

router.get('/student', getStudent)

router.post('/student', createStudent)

router.get('/student/:id', getStundentById)

router.get('/student/count', TotalStudent)

router.delete('/student/:id',deleteStudentById)

router.put('/student/:id', updateStudentById)


export default router