const express = require("express")
const router = express.Router()

router.use(`/admin` ,(req , res) => {
    res.send({
        status:200,
        message:`admin`,
        data:[]
    })
})

router.use(`/todo` ,
 require(`./routes/todoRoutes`)
)

router.use(`/storeData` , 
require(`./routes/storeDataRutes`) )

module.exports = router