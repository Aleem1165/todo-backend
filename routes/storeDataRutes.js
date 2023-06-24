const express = require("express")
const router = express.Router()

const { read  } = require("../controllers/storeDataControllers")

router.get(`/read` , read)

module.exports = router