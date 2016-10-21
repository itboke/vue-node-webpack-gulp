module.exports = function*(next){

    var _id = this._data.Q.id;
    this.render('demo',{
        userId:_id
    });

};
