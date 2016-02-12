var services=angular.module('starter.services', []);

services.factory('HeaderBuilder', function(base64){
  return {
    param: function(param){
      var a = "";
      for (var i in param){
        a = a+i+param[i];
      }
      console.log(a);
      a = a.toString(CryptoJS.enc.Utf8);
      a = CryptoJS.HmacSHA256(a, '81f0bf647bf014c935638bb1db968a85');
      a = a.toString(CryptoJS.enc.Hex);
      a = base64.encode(a);
      return a; 
    },
    basicAuth: function(param, user){
      var a = "";
      for (var i in param){
        a = a+i+param[i];
      }
      console.log(a);
      a = a.toString(CryptoJS.enc.Utf8);
      a = CryptoJS.HmacSHA256(a, '81f0bf647bf014c935638bb1db968a85');
      a = a.toString(CryptoJS.enc.Hex);
      a = base64.encode(a);
      a = user +":"+ a;
      a = base64.encode(a);

      return a; 
    }
  };
})

services.factory('auth', function(HeaderBuilder, constants, $http, $rootScope, $q){
	return{
		token: function(login, pwd){
			var deferred = $q.defer();
			var param = {POST:constants.ip , Login:login, Password:pwd};
			var Basicauth = HeaderBuilder.basicAuth(param, constants.client);
			var config = {
				method: 'POST',
				url: constants.url + "/user",
				WithCredentials: true,
				headers : {
					'Content-Type': "application/json",
					'authorization' : 'Basic '+ Basicauth 
				},
				data: {
					'Login': login,
					'Password':pwd
				}
			};
			var response=$http(config);
			response.then(function (response){
				deferred.resolve(response);
			},
			function (response){
				console.log(response.data.status.statusCode);
				deferred.reject(response.data.status.statusCode);
			})
			return deferred.promise;
			//console.log(response);
			//return response;
		}
	};
})
services.factory('sync', function(HeaderBuilder, constants, $http, $rootScope, $q, $cookies){
	return{
		clients: function(){
			var deferred = $q.defer();
			var jeton = $cookies.get('token');
			var param = {GET:constants.ip, Token:jeton};
			var Basicauth = HeaderBuilder.basicAuth(param, constants.client);
			var config = {
				method: 'GET',
				url: constants.url + "/clients",
				WithCredentials: true,
				headers:{
					'Content-Type': "application/json",
					'authorization': 'Basic '+Basicauth
				},
				params:{
					'Token': jeton
				}
			};
			var response = $http(config);
			response.then(function(response){
				deferred.resolve(response);
			},
			function(response){
				deferred.reject('erreur');
			})
			return deferred.promise;
		}
	}
})