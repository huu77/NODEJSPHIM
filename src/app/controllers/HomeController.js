const Course= require('../models/course');
class HomeContoller {
    //home [get]

    index(req,res,next){

          Course.find({})
          .then(courses=>{ 
            courses=courses.map(course=>course.toObject());
            res.render('home',{courses})
        })
          .catch(err=> next(err));
    }
}
module.exports= new HomeContoller;