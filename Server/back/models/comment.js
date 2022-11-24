
module.exports =(sequelize,DataTypes)=>{
    const Comment=sequelize.define('Comment',{ //Mysql에는 users테이블생성
        
        content:{
            type:DataTypes.TEXT,
            allowNull:false,
        },
        //UserId:{},
        //PostId:{},//belogsTo가 만들어준다
    },{
        charset:'utf8mb4',
        collate:'utf8mb4_general_ci'//이모티콘저장
    });
    Comment.associate=(db)=>{
        db.Comment.belongsTo(db.User)
        db.Comment.belongsTo(db.Post)
    };
return Comment

}