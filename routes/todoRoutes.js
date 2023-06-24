const express = require("express")
const router = express.Router()

const { read , create , del , update , updateCheck } = require("../controllers/todoControllers")

router.get(`/read` , read)
router.post(`/create` , create)
router.delete(`/delete` , del)
router.put(`/update` , update)
router.put(`/updateCheck` , updateCheck)




module.exports = router