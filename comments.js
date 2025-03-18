//create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/comments', { useNewUrlParser: true, useUnifiedTopology: true });

//create comment schema
const commentSchema = new mongoose.Schema({
    name: String,
    comment: String,
    date: { type: Date, default: Date.now }
});

//create comment model
const Comment = mongoose.model('Comment', commentSchema);

//use body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//use cors middleware
app.use(cors());

//get all comments
app.get('/comments', (req, res) => {
    Comment.find({}, (err, comments) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(comments);
        }
    });
});
