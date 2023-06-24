const todoCheck = require("../schema/todoSchema")
const db = require("../config/db")



module.exports.read = async (req , res) => {
    const todoChkRes = await todoCheck.find()
    res.send({
        status:200,
        message:"read api is working",
        data:todoChkRes
    })
}

module.exports.create = async (req , res) => {
    const { text , check } = req.body
    const newData = new todoCheck({
        text,
        check
    })
    const newDataRes = await newData.save()
    res.send({
        status:200,
        message:"create api is working",
    })
}

module.exports.del = async (req , res) => {
    const todoDelRes = await todoCheck.findByIdAndRemove({_id:req.body._id})
    res.send({
        status:200,
        message:"delete api is working",
    })
}

module.exports.update = async (req , res) => {
    const {_id , text } = req.body
    const updateTodoRes = await todoCheck.findByIdAndUpdate({ _id }, { text })
    res.send({
        status:200,
        message:"update api is working",
    })
}

module.exports.updateCheck = async (req , res) => {
    const {_id , check } = req.body
    const updateTodoRes = await todoCheck.findByIdAndUpdate({ _id }, { check })
    res.send({
        status:200,
        message:"update Check api is working",
    })
}