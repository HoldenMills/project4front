var form2object = function(form) {
  var data = {};
   $(form).find("input").each(function(index, element) {
      var type = $(this).attr('type');
      if ($(this).attr('name') && type !== 'submit' && type !== 'hidden') {
       data[$(this).attr('name')] = $(this).val();
      }
   });
  return data;
};

var wrap = function(root, formData) {
  var wrapper = {};
  wrapper[root] = formData;
  return wrapper;
};


$(document).ready(function() {

  ux.login();
  cb.init();

  //Login Actions//

  $('#registerForm').on('submit', function (e) {
    var credentials = form2object(this);
    api.register(credentials, cb.registerCB);
    $(".form-control").val('');
    e.preventDefault();
  });

  $('#loginForm').on('submit', function (e){
    var credentials = form2object(this);
    console.log("creds:", credentials);
    api.login(credentials, cb.loginCB);
    $('.enter').hide(900);
    $('.profile').show(800);
    $(".form-control").val('');
    e.preventDefault();
    $('.loginMessage').show();
  });

  $('#skipLogIn').on('click', function (e){
    ux.skipLogin();
    api.indexProducts(cb.allProdsCB);
    api.mostClicks(cb.mostClicksCB);
    e.preventDefault();
  });

  //NavBar//

  $('#logoutButton').on('click', function (e) {
    api.logout(cb.logoutCB);
    e.preventDefault();
  });

  $('#histButton').on('click', function (e) {
    ux.histPage();
    api.showTransaction('purchased', cb.showHistCB);
    e.preventDefault();
  });
});