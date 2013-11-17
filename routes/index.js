
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Hello' });
};

exports.demo = function(req, res){
    res.render('demo',{
        title:'this a demo page',
        header:'demo haha .'
    });

};



exports.app = function(req, res){
    res.render('bootstrap',{
        title:'this a app page',
        content:'app .....'
    });

};