var mongoose = require('mongoose'), Schema = mongoose.Schema;

var NotificationSchema = new Schema({
  title: String,
  text: String,
  url: String,
  img: String,
  date: String,
  isRead: Boolean,
  isArchive: Boolean
});

// third input is an existing collection
module.exports = mongoose.model('Notification', NotificationSchema, 'notification');