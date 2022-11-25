
const Course= require('../models/course');
const { mongooseToObject} =require('../../until/mongoose')
class VideoContoller {
   
    
   create(req,res,next){
    res.render('createVideo')
   }
   
    show(req,res,next){
       Course.findOne({slug: req.params.slug})
       .then(
        course=>
        res.render('video',{course :mongooseToObject(course),})
       )
       .catch(next)
    }

  
}
module.exports= new VideoContoller;