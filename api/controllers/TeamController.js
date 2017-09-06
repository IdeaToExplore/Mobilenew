module.exports = _.cloneDeep(require("sails-wohlig-controller"));
var controller = {

getAll:function(req,res){ 
    if(req.body){
        Team.getAll(req.body,res.callback);
    }
    else{
        res.json({
            value:false,
            data:"invalid"
        });
    }

}

};
module.exports = _.assign(module.exports, controller);