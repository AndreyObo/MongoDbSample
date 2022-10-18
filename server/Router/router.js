const Router = require('express')
const router = new Router()
const QueryControllers = require('../Controllers/QueryControllers')

router.post('/create',QueryControllers.CreateQuery)
router.get('/getall', QueryControllers.GetUsers)
router.get('/getbyid', QueryControllers.GetById)
router.post('/update', QueryControllers.UpdateQuery)
router.post('/addcomment', QueryControllers.AddComment)
router.get('/getcom', QueryControllers.GetComments)
router.delete('/delete', QueryControllers.DeleteById)

module.exports = router