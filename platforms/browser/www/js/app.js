// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var defaultRoute= "";
angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova', 'ngCookies', 'utf8-base64', 'ng'])

.constant('constants', {
  url:"http://192.168.0.2:80/caahmro-api",
  token:"56b2220e3ca1d9.39423583",
  client: "clientTest",
  //ip:"127.0.0.1"
  ip:"192.168.0.226"
})

.run(function($ionicPlatform, $rootScope, $cookies, $ionicModal, $cordovaSQLite) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    //$cookies.remove('login'); $cookies.remove('pwd');
    console.log($cookies.getAll());
    db = $cordovaSQLite.openDB({name: 'my.db'});
    $cordovaSQLite.execute(db, 'CREATE TABLE IF NOT EXISTS user (id integer primary key, login text, pwd text)');
    $cordovaSQLite.execute(db, "INSERT INTO user (login, pwd) VALUES ('huaminTest','toto')"); 
    $cordovaSQLite.execute(db, 'CREATE TABLE IF NOT EXISTS familles (id integer primary key, depth integer, label text, parent integer, parents text, creation text, modif text)');
    $cordovaSQLite.execute(db, 'CREATE TABLE IF NOT EXISTS articles (id integer primary key, label text, description text, ref text, taxePhyto text, putarif real, creation text, modif text)');
    $cordovaSQLite.execute(db, 'CREATE TABLE IF NOT EXISTS familleArticle (id integer primary key, arcticleId integer, familleId integer)');
    $cordovaSQLite.execute(db, 'CREATE TABLE IF NOT EXISTS clients (id integer primary key, code text, nom text, adr text, cp text, ville text, id_pays integer, market text, commentaire text)');
    $cordovaSQLite.execute(db, 'CREATE TABLE IF NOT EXISTS tarifsQte (type text primary key, id integer primary key, ref text primary key, seuil integer, limite integer, puqte real, modif text');
    $cordovaSQLite.execute(db, 'CREATE TABLE IF NOT EXISTS prixNets (type text primary key, market text primary key, ref text primary key, puht real)');
    $cordovaSQLite.execute(db, 'CREATE TABLE IF NOT EXISTS commandes (id integer primary key, idUser integer, idClient integer, creation text, validation text, createur text, valideur text, etat text, commentaire text, issues text, contactName text, contactFirstname text, tel text, totalttc real)');
    $cordovaSQLite.execute(db, 'CREATE TABLE IF NOT EXISTS commandesContent (id integer primary key, idCommande integer, idArticle integer, refArticle text, qte integer, puttc real');
    $cordovaSQLite.execute(db, 'CREATE TABLE IF NOT EXISTS facture (id integer primary key, idUser integer, codeClient text, type text, gauge text, creation text, destinataire text, adressLiv text, villeLiv text, paysLiv text, total real, paymentCondition text, modif text)');
    $cordovaSQLite.execute(db, 'CREATE TABLE IF NOT EXISTS factureDet (id integer primary key, idFacture integer, refArticle text, postion integer, qte integer, mesureUnit text, puttc real)');
    $cordovaSQLite.exectue(db, 'CREATE TABLE IF NOT EXISTS modifLocal (id integer primary key, ligneModif integer, tableModif text, status text)'); 


    /*if($cookies.get('login') && $cookies.get('pwd')){
      defaultRoute = '/app/clients';
    }else{
      defaultRoute = '/app/welcome';
    }*/
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('main', {
    url: '/main',
    abstract: true,
    templateUrl: 'templates/main.html',
    controller: 'AppCtrl'
  })
  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.Welcome',{
    url: "/welcome",
    views: {
      'menuContent':{
        templateUrl: 'templates/welcome.html'
      }
    }
  })
  .state('app.clients', {
    url: '/clients',
    views: {
      'menuContent': {
        templateUrl: 'templates/clients.html',
        controller: 'ClientCtrl'
      }
    }
  })

  .state('app.commandes', {
      url: '/commandes',
      views: {
        'menuContent': {
          templateUrl: 'templates/commandes.html',
          controller: 'CdeCtrl'
        }
      }
    })
  .state('app.catalogue', {
      url: '/catalogue',
      views: {
        'menuContent': {
          templateUrl: 'templates/catalogue.html',
          controller: 'CataCtrl'
        }
      }
    })
  .state('app.sync', {
    url:'/sync',
    views:{
      'menuContent':{
        templateUrl: 'templates/sync.html',
        controller: 'SyncCtrl'
      }
    }
  })  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('app/welcome');
});
