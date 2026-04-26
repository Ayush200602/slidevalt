const mongoose = require('mongoose');

const PresentationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  cat: { type: String, required: true },
  desc: { type: String, required: true },

  tags: { type: [String], default: [] },
  slideCount: { type: Number, default: 20 },
  filename: { type: String, default: '' },

  downloads: { type: Number, default: 0 },
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 }

}, { timestamps: true });

module.exports = mongoose.model('Presentation', PresentationSchema);