var schema = new Schema({
    name:String,
    features:[{
        name:String,   
    }],
    description:String,
    landline:String,
    mobile:String,
    email:String,
    addressLine1:String,
    addressLine2:String,
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);

module.exports = mongoose.model('About', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {
    getAll : function(data,callback){
        About.find().lean().exec(function (err, found) {
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
     
    getOne : function(data,callback){
        About.findOne({
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