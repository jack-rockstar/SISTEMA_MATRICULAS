import {Router} from 'express'
import {getCourses,createCourses,deleteCourses,udpateCourseById} from '../controllers/coursesControllers'

const router=Router()


router.get('/courses', getCourses )
router.post('/courses', createCourses)
router.delete('/courses/:id', deleteCourses)
router.put('/courses/:id', udpateCourseById)


export default router


