// Dom7
var $$ = Dom7;
$$('.logoff').hide();
$$('.login-screen-open').show();


// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
  // Enable panel left visibility breakpoint
  panel: {
    leftBreakpoint: 960,
  },
});

// Init/Create left panel view
var mainView = app.views.create('.view-left', {
  url: '/'
});

// Init/Create main view
var mainView = app.views.create('.view-main', {
  url: '/'
});

// Login Screen Demo
$$('#my-login-screen .SingUp').on('click', function () {
  var username = $$('#my-login-screen [name="email"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  firebase
    .auth()
    .createUserWithEmailAndPassword(username,password)//Promisses
    .then( function () {
      app.dialog.alert('Bem vindo: ' + username);
      this.$$('.toolbar-inner').innerHtml = 'Bem Vindo: ' + username;
    })
    .catch(function(error){
      console.error(error.code)
      console.error(error.message)
      if (error.code =='auth/ivalid-email'){
        app.dialog.alert('Email invalido no seu formato!!!');
      }
      app.dialog.alert('Falha ao cadastrar, verifique o erro no console');
      //this.$$('.toolbar-inner').innerHtml = 'Bem Vindo: ' + username;
    })
  app.loginScreen.close('#my-login-screen');
});




$$('#my-login-screen .SingIn').on('click', function () {
  var username = $$('#my-login-screen [name="email"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  firebase
    .auth()
    .signInWithEmailAndPassword(username,password)//Promisses
    .then( function () {
      app.dialog.alert('Bem vindo: ' + username);
      this.$$('.toolbar-inner').text('Bem Vindo: ' + username + 'vc está logado!');
      $$('.!logoff').show();
      $$('.!login-screen-open').hide();
      $$('.!input#email').val('');
      $$('.!input#password').val('');
    })
    .catch(function(error){
      console.error(error.code)
      console.error(error.message)
      if (error.code =='auth/user-not-found'){
        app.dialog.alert('Não há registro de usuario correspondente a este identificador. O usuário pode ter sido excluído');
      }
      else if (error.code =='auth/wrong-password'){
        app.dialog.alert('Email invalido no seu formato!!!');
      }
      app.dialog.alert('A senha é invalida ou o usuario não possui uma senha');
    })
  app.loginScreen.close('#my-login-screen');
});






$$('#my-login-screen .logoff').on('click', function () {
  app.loginScreen.close('#my-login-screen');
    $$('input#email').val('');
    $$('input#password').val('');
    firebase
    .auth()
    .signOut()
    .then( function () {
      this.$$('.toolbar-inner').text('Usuario nao autenticado');
      app.dialog.alert('Usuario nao autenticado');
      app.loginScreen.close('#my-login-screen');
      $$('.logoff').hide();
      $$('.login-screen-open').show();
    }, function(error){
        console.error(error)
    })
});


$$('#my-login-screen .login-screen-close').om('click', function () {
  $$('input#email').val('');
  $$('input#password').val('');
})
$$('.logoff').on('click', function() {
  firebase
  .auth()
  .signOut()
  .then( function() {
    this.$$('.toolbar-inner').text('Usuario não autenticado');
    app.diolog.alert('Usuario não autenticado');
    $$('input#email').val('');
    $$('input#password').val('');
    $$('.logoff').hide();
    $$('.login-screen-open').show();
  }, function(error){
    console.error(error)
  })
});
   