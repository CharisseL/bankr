'use strict';

exports.about = function(req, res){
  res.render('home/about');
};
exports.contact = function(req, res){
  res.render('home/contact');
};
exports.faq = function(req, res){
  res.render('home/faq');
};
