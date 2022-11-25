const User= require('../models/user')


class LoginController {
    //login [get]
    index(req,res){
      User.find({},function(err,users){
        if(!err){
            res.json(users)
        }
        else{
            res.status(500).json({err:"loi"})
        }
      })
        // res.render('login'
        // ,{layout: false}
        //  );
    }
}
module.exports= new LoginController;