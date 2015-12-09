'use strict'
url: 'http://www.localhost:3000';
var api = {



 ajax: function(config, cb) {
   $.ajax(config).done(function(data, textStatus, jqxhr) {
     cb(null, data);
   }).fail(function(jqxhr, status, error) {
     cb({jqxher: jqxhr, status: status, error: error});
   });
 },

 register: function register(credentials, callback) {
   this.ajax({
     method: 'POST',
     // url: 'http://httpbin.org/post',
     url: this.url + '/register',
     contentType: 'application/json; charset=utf-8',
     data: JSON.stringify(credentials),
     dataType: 'json'
   }, callback);
 },

 login: function login(credentials, callback) {
   this.ajax({
     method: 'POST',
     // url: 'http://httpbin.org/post',
     url: this.url + '/login',
     contentType: 'application/json; charset=utf-8',
     data: JSON.stringify(credentials),
     dataType: 'json'
   }, callback);
 },
};
