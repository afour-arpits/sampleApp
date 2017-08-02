var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var commentSchema = mongoose.Schema({
    id: String,
    description: String,
    like_count: Number,
    comment_count: Number,
    image: String
});

commentSchema.plugin(mongoosePaginate);

var Comments = mongoose.model('comments', commentSchema);
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.query.page)
  Comments.paginate({}, { page: req.query.page, limit: 10 }, function(err, comments) {
    if (err) return console.error(err);
    res.send({ comments: comments });
  });
});

module.exports = router;
