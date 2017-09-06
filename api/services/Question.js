var schema = new Schema({
    name:String,
    option:[{
        name:String,
        icon:String
    }]    
});

schema.plugin(deepPopulate, {
    
});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);

module.exports = mongoose.model('Question', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {

   getOne : function(data,callback){
        Question.findOne({
            _id:data._id
        }).lean().exec(function (err, found) {
                        if(err){
                            callback(err,null);
                        }else{
                            if(_.isEmpty(found)){
                                callback(null,[]);
                            }else{
                                callback(null,found);
                            }
                        }
                    });
    },    

    

};

    
module.exports = _.assign(module.exports, exports, model);