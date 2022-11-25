const Course= require('../models/course');
class ListDSContoller {
    //home [get]
    list(req,res,next){
        res.json(req.body)
    }
    delete(req,res,next){
        res.render('deleteVideo')
    }
}
module.exports= new ListDSContoller;