var schema = new Schema({
    name:String,
    image:String,
    subtype:{
        type: Schema.Types.ObjectId,
        ref: 'Subtype',
        index: true
    },
    question:[{
        type: Schema.Types.ObjectId,
        ref: 'Question',
        index: true
    }]

});

schema.plugin(deepPopulate, {
    populate: {
        // "subtype":{
        //     select:''
        // },
        // "question":{
        //     select:''
        // }
        "subtype.brand": {
            select: ''
        },
        "question":{
            select: '_id name option'
        }
    }
});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);

module.exports = mongoose.model('Subcategory', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {
    getAll : function(data,callback){
        Subcategory.find().lean().deepPopulate("subtype.brand question").exec(function (err, found) {
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
        var deepSearch="subtype.brand question"
       Subcategory.findOne({
           _id:data._id
       }).lean().deepPopulate(deepSearch).exec(function (err, found) {
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