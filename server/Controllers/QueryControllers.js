const Query = require('../models/Query')

class QueryBreackpoints {
    async CreateQuery(req, res) {
        const {name, mail, comment, isValidate} = req.body
        console.log(req.body)
        try {
            let body= " "
            if(comment != "") {
                body = comment
            }
            const result = await Query.create({name, mail, body, PDataValidation:isValidate})
            return res.json({Message:"Done"})
        }
        catch(e){
            return res.json({Message:"Error"})
        }
    }

    async GetUsers(req, res) {
        try {
        const result = await Query.find()
            return res.json(result)
        }
        catch(e){
            return res.json({Message:"Error"})
        }
    }

    async GetById(req, res) {
        const {id} = req.query
        try {
        const result = await Query.findById(id)
            return res.json(result)
        }
        catch(e){
            return res.json({Message:"Error"})
        }
    }

    async AddComment(req, res) {
        const {id, body} = req.body
        const update = { $push: { comments: [{text:body}] } };
        try {
          const result = await Query.findByIdAndUpdate(id, update, {new:true})
          return res.json({Message:"Done"})
        }
        catch(e) {
            return res.json({Message:"Error"})
        }
    }

    async GetComments(req, res) {
        try {
            const {id} = req.query
            const data = await Query.findById(id)
            const cm = data.comments
            console.log(cm)

        return res.json(cm)
        }
        catch(e) {
            return res.json({Message:"Error"})
        }
    }

    async UpdateQuery(req, res) {
        const {id, body, isVal, mail} = req.body
        try {
        const result = await Query.findByIdAndUpdate(id, {body:"fdfdffds"}, {new:true})
       
            return res.json({Message:"Done"})
        }
        catch(e){
            return res.json({Message:"Error"})
        }
    }

    async DeleteById(req, res) {
        const {id} = req.query
        try {
        const result = await Query.findByIdAndDelete(id)
            return res.json(result)
        }
        catch(e){
            return res.json({Message:"Error"})
        }
    }
}

module.exports = new QueryBreackpoints()