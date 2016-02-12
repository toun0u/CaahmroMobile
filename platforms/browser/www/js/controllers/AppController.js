angular.module('starter.controllers', ['starter.services'])

.controller('AppCtrl', function($scope, $state,$ionicModal, $timeout, $cookies, $cordovaSQLite, auth) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};
  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('modalstemplates/ModalLogin.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });
  if($cookies.get('login') && $cookies.get('pwd')){
    $scope.login = "Deconnexion";
  }else{
    $scope.login = "Connexion"
  }
  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.Connexion = function() {
    $scope.modal.show();
    var msg = document.getElementById('msg');
    var att = document.createAttribute('hidden');
    msg.setAttributeNode(att);
  };

  $scope.Deconnexion = function(){
    $cookies.remove('login');
    $cookies.remove('pwd');
  }
  
  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    var res = auth.token($scope.loginData.username, $scope.loginData.password);
    res.then(function(){
      console.log(res.$$state.value.data.token);
      //$cordovaSQLite.execute("select * from user where login= '"+$scope.loginData.username+"' and pwd= '"+$scope.loginData.password+"'");
      if($scope.loginData.username=='humainTest' && $scope.loginData.password=='toto'){
        $scope.modal.hide();
        //$state.go('app.clients');
        $cookies.put('login', $scope.loginData.username);
        $cookies.put('pwd', $scope.loginData.password);
        if($cookies.get('token')){
          $cookies.remove('token');
        }
        $cookies.put('token', res.$$state.value.data.token);
      } 
    }, function(reason){
      msg.removeAttribute('hidden');
      $scope.message = reason;
    });
  };
})
