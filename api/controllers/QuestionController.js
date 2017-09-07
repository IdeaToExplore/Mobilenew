module.exports = _.cloneDeep(require("sails-wohlig-controller"));
var controller = {
    getAll: function (req, res) {
        if (req.body) {
            Question.getAll(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: "Invalid Request"
            });
        }
    },
    getOne : function(data,callback){
        Question.getOne({
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
module.exports = _.assign(module.exports, controller);