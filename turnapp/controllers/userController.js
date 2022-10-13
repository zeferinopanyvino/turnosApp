const userController = {
    'index':(req, res)=>{
        return res.render('index');
    },
    'login':(req, res)=>{
        return res.render('login');
    },
    'list': function(req, res){
        let users = [
            {id:1, name:"Cliente1"},
            {id:2, name:"cliente2"}
        ];
        res.render(userList, {'users':users});
    }
    
};

module.exports= controller;