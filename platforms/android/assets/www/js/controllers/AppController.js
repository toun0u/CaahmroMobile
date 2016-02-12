angular.module('starter.controllers', ['starter.services'])

.controller('AppCtrl', function($filter, $scope, $state,$ionicModal, $timeout, $cookies, $cordovaSQLite, auth) {

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
  if($cookies['token']){
    $scope.msg=$cookies['token'];
  }else{
    $scope.msg='pas d\'cookies';
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
  $scope.test=function(){
    var d = new Date();
    d = $filter('date')(d, 'yyyyMMddHHmmss');
    console.log(timestp);
  }
  
  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    var res = auth.token($scope.loginData.username, $scope.loginData.password);
    res.then(function(){
      //console.log(res.$$state.value.data.token);
      //$cordovaSQLite.execute("select * from user where login= '"+$scope.loginData.username+"' and pwd= '"+$scope.loginData.password+"'");
      if($scope.loginData.username=='humainTest' && $scope.loginData.password=='toto'){
        $scope.modal.hide();
        //$state.go('app.clients');
        //$cookies.put('login', $scope.loginData.username);
        //$cookies.put('pwd', $scope.loginData.password);
        $cookies['login']=$scope.loginData.username;
        $cookies['pwd']=$scope.loginData.password;
        if($cookies['token']){
          $cookies['token']="";
        }
        //$cookies.put('token', res.$$state.value.data.token);
        $cookies['token'] = res.$$state.value.data.token;
        //console.log($cookies.get('token'));
        console.log($cookies['token']);
      } 
    }, function(reason){
      msg.removeAttribute('hidden');
      $scope.message = reason;
    });
  };
})
