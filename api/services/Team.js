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
    
};
module.exports = _.assign(module.exports, exports, model);