module.exports = function (app){
  
  return {
    index : function *(next) {
      this.body = yield app.render("index");
    }
  };
  
};
