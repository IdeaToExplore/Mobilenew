var schema = new Schema({
    name:String,
    designation:String,
    dob:Date,
    mobile:String,
    email:String,
    addressLine1:String,
    addressLine2:String,
    description:String,
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);

module.exports = mongoose.model('Team', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {
    getAll : function(data,callback){
         Team.find().lean().exec(function (err, found) {
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
    getOne :function(data,callback){
       Team.findOne({
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
    }
    
};
module.exports = _.assign(module.exports, exports, model);