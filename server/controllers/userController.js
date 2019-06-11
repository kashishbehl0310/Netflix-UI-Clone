const User = require('../models/Users');

exports.returnUser = ((req, res) => {
    User.findById(req.params.id,function(err, user){
        if(err){
            return next(err);
        }
        let movieList = user.movie.map(movie => {
            return JSON.parse(movie)
        })
        res.json(movieList)
    })
})

exports.addToUserList = function(req, res){
    var movieDetails = req.body.movie;
    User.findByIdAndUpdate(req.params.id, {$push: {
        movie: JSON.stringify(movieDetails)
    }}, function(err, product){
        if(err){
            return next(err)
        }
        res.json({
            success: true,
        })
    })
}