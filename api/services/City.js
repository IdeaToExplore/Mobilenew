var schema = new Schema({
    cityName:String,
    
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);

module.exports = mongoose.model('City', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {
    getAll : function(data,callback){
         City.find().lean().exec(function (err, found) {
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