
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
        db.Post.belongsTo(db.User)//post.addUser, post.getUser, post.setUser
        db.Post.hasMany(db.Comment) //post.addComments.postgetComments
        db.Post.hasMany(db.Image) //post.addImages ,post.getImages
        db.Post.belongsToMany(db.Hashtag,{through:'HT'})//post.addHashtags
        db.Post.belongsToMany(db.User,{through:'Like',as:'Likers'})//좋아요 post.addLikers,post.removeLikers
        db.Post.belongsTo(db.Post,{as:'Retweet'});//post.addRetweets
    };
return Post

}