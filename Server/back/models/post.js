
module.exports =(sequelize,DataTypes)=>{
    const Post=sequelize.define('Post',{ //Mysql에는 users테이블생성
        
        content:{
            type:DataTypes.TEXT,
            allowNull:false,

        },
    },{
        charset:'utf8mb4',
        collate:'utf8mb4_general_ci'//이모티콘저장
    });
    Post.associate=(db)=>{
        db.Post.belongsTo(db.User)
        db.Post.hasMany(db.Comment)
        db.Post.hasMany(db.Image)
        db.Post.belongsToMany(db.Hashtag,{through:'HT'})
        db.Post.belongsToMany(db.User,{through:'Like',as:'Liked'})//좋아요
        db.Post.belongsTo(db.Post,{as:'Retweet'});
    };
return Post

}