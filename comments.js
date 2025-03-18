//create web server
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const { Schema } = mongoose;

//create express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/comments', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//create comment schema
const commentSchema = new Schema({
  name: String,
  email: String,
  comment: String,
});

//create comment model
const Comment = mongoose.model('Comment', commentSchema);

//use body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//use cors middleware
app.use(cors());

//create route for getting all comments
app.get('/comments', async (req, res) => {
  const comments = await Comment.find();
  res.json(comments);
});