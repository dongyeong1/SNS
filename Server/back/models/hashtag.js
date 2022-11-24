
module.exports =(sequelize,DataTypes)=>{
    const Hashtag=sequelize.define('Hashtag',{ //Mysql에는 users테이블생성
        
        content:{
            type:DataTypes.STRING(20),
            allowNull:false,
        },
    },{
        charset:'utf8mb4',
        collate:'utf8mb4_general_ci'//이모티콘저장
    });
    Hashtag.associate=(db)=>{
        db.Hashtag.belongsToMany(db.Post,{through:'HT'})
    };
return Hashtag

}