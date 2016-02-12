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
		},
		unauth:function(){
			var deferred = $q.defer();
			var param = {DELETE:constants.ip , Login:login, Password:pwd};
			var Basicauth = HeaderBuilder.basicAuth(param, constants.client);
			var config = {
				method: 'DELETE',
				url: constants.url + "/user/unauth",
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
		}

	};
})
services.factory('sync', function(HeaderBuilder, constants, $http, $rootScope, $q, $cookies){
	return{
		clients: function(){
			var deferred = $q.defer();
			var jeton = $cookies['token'];
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
		},
		familles:function(){
			var deferred = $q.defer();
			var jeton = $cookies['token'];
			var param = {GET:constants.ip, Token:jeton};
			var Basicauth = HeaderBuilder.basicAuth(param, constants.client);
			var config = {
				method: 'GET',
				url: constants.url + "/families",
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
		},
		articles:function(){
			var deferred = $q.defer();
			var jeton = $cookies['token'];
			var param = {GET:constants.ip, Token:jeton};
			var Basicauth = HeaderBuilder.basicAuth(param, constants.client);
			var config = {
				method: 'GET',
				url: constants.url + "/articles",
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
		},
		familleArticles:function(){
			var deferred = $q.defer();
			var jeton = $cookies['token'];
			var param = {GET:constants.ip, Token:jeton};
			var Basicauth = HeaderBuilder.basicAuth(param, constants.client);
			var config = {
				method: 'GET',
				url: constants.url + "/articles/getfamillearticle",
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
		},
		tarifsQte:function(){
			var deferred = $q.defer();
			var jeton = $cookies['token'];
			var param = {GET:constants.ip, Token:jeton};
			var Basicauth = HeaderBuilder.basicAuth(param, constants.client);
			var config = {
				method: 'GET',
				url: constants.url + "/tarifs/tarifsqte",
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
		},
		prixnets:function(){
			var deferred = $q.defer();
			var jeton = $cookies['token'];
			var param = {GET:constants.ip, Token:jeton};
			var Basicauth = HeaderBuilder.basicAuth(param, constants.client);
			var config = {
				method: 'GET',
				url: constants.url + "/tarifs/prixnets",
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
		},
		commandes:function(){
			var deferred = $q.defer();
			var jeton = $cookies['token'];
			var param = {GET:constants.ip, Token:jeton};
			var Basicauth = HeaderBuilder.basicAuth(param, constants.client);
			var config = {
				method: 'GET',
				url: constants.url + "/commandes/getcde",
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
		},
		commandeContent:function(){
			var deferred = $q.defer();
			var jeton = $cookies['token'];
			var param = {GET:constants.ip, Token:jeton};
			var Basicauth = HeaderBuilder.basicAuth(param, constants.client);
			var config = {
				method: 'GET',
				url: constants.url + "/commandes/getcdecontent",
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
		},
		facture:function(){
			var deferred = $q.defer();
			var jeton = $cookies['token'];
			var param = {GET:constants.ip, Token:jeton};
			var Basicauth = HeaderBuilder.basicAuth(param, constants.client);
			var config = {
				method: 'GET',
				url: constants.url + "/facture/getfacture",
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
		},
		factureDet:function(){
			var deferred = $q.defer();
			var jeton = $cookies['token'];
			var param = {GET:constants.ip, Token:jeton};
			var Basicauth = HeaderBuilder.basicAuth(param, constants.client);
			var config = {
				method: 'GET',
				url: constants.url + "/facture/getfacturedet",
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
		},
		updatedRows:function(){
			var deferred = $q.defer();
			var jeton = $cookies['token'];
			var param = {GET:constants.ip, Token:jeton};
			var Basicauth = HeaderBuilder.basicAuth(param, constants.client);
			var config = {
				method: 'GET',
				url: constants.url + "/update/updatedrow/" + $cookies['lastSync'],
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

		},
		deletedRows:function(){
			var deferred = $q.defer();
			var jeton = $cookies['token'];
			var param = {GET:constants.ip, Token:jeton};
			var Basicauth = HeaderBuilder.basicAuth(param, constants.client);
			var config = {
				method: 'GET',
				url: constants.url + "/update/deleted/" + $cookies['lastSync'],
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