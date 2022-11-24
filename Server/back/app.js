// const http =require('http')
const express =require('express')
const postRouter=require('./routes/post')
const userRouter=require('./routes/user')
const db = require('./models')
const app = express();
const cors=require('cors')
const passportConfig=require('./passport')
const session=require('express-session')
const cookieParser=require('cookie-parser')
const passport = require('passport')
const dotenv=require('dotenv')

db.sequelize.sync()
 .then(()=>{
     console.log('db연결성공')
 })
 .catch(console.error)
dotenv.config()

 passportConfig();
app.use(cors({
    origin:true,
    credentials:true,//쿠키를 같이전달하고싶으면
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}))
//프론트에서 보낸데이터를 req.body에 넣어주는 역할
app.use(session({
    saveUninitialized:false,
    resave:false,
    secret:process.env.COOKIE_SECRET
}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(passport.initialize());
app.use(passport.session())


app.get('/',(req,res)=>{
res.send('hello Express')
})

app.use('/user',userRouter)
app.use('/post',postRouter)

// app.use((err,req,res,next)=>{

// })

app.listen(3065,()=>{
    console.log('서버실행중')
})