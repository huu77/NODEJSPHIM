const loginRoute=require('./login')
const homeController=require('./home.js');
const videoController=require('./video')
const listDSController=require('./listDS')
function route(app){
    // app.use('/login',loginRoute)
    app.use('/list',listDSController);
    app.use('/video',videoController);
    app.use('/',homeController);
   
    
}
module.exports=route;