'use strict';

//$(document).ready(...
$(function() {
  var form2object = function(form) {
  var data = {};
  $(form).children().each(function(index, element) {
    var type = $(this).attr('type');
    if ($(this).attr('name') && type !== 'submit' && type !== 'hidden') {
      data[$(this).attr('name')] = $(this).val();
    }
  });
  return data;
  };

var wrap = function wrap(root, formData) {
  var wrapper = {};
  wrapper[root] = formData;
  return wrapper;
};

// $('#result').val(JSON.stringify(data, null, 4));
//   console.log(data);
// });

$('#register').on('submit', function(e) {
  var credentials = wrap('credentials', form2object(this));
  url.register(credentials, cb.registerCB);
  e.preventDefault();
});

$('#login').on('submit', function(e) {
  var credentials = wrap('credentials', form2object(this));
  var cb = function cb(error, data) {
    if (error) {
      cb.loginCB;
      return;
    }
    // callback(null, data);
    // // $('.token').val(data.user.token);
    // game.token = data.user.token;
    // console.log(game.token);
    // $('.player-messages').text('Welcome, user #' + data.user.id);
    e.preventDefault();
    url.login(credentials, cb);
    };
  });
});
