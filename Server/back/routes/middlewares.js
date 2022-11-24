exports.isLoggedIn=(req,res,next)=>{
    if(req.isAuthenticated()){
        next();
    }else{
        res.status(401).send('로그인이필요합니다.')
    }
}



exports.isNotLoggedIn=(req,res,next)=>{
    if(!req.isAuthenticated()){
        next();
    }else{
        res.status(401).send('로그인안한 사용자만 접근가능합니다..')
    }
}

