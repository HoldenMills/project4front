// jshint browser:true, jquery:true
'use strict';

var api = {

url: 'https://calm-spire-9782.herokuapp.com/',
// url: 'http://localhost:3000',


  ajax: function(config, cb) {
    $.ajax(config).done(function(data, textStatus, jqxhr) {
      cb(null, data);
    }).fail(function(jqxhr, status, error) {
      cb({jqxher: jqxhr, status: status, error: error});
    });
  },

 register: function(credentials, callback) {
    this.ajax({
      method: 'POST',
      url: this.url + '/register',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(credentials),
      dataType: 'json'
   }, callback);
 },

 login: function(credentials, callback) {
   this.ajax({
      method: 'POST',
      url: this.url + '/login',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(credentials),
      dataType: 'json'
    }, callback);
  },

  logout: function(callback) {
    this.ajax({
     method: 'DELETE',
     url: this.url + '/logout/' + session.userId,
     headers: {
       Authorization: 'Token token=' + session.token,
     },
     contentType: 'application/json',
     dataType: 'json'
    }, callback);
  },
};
