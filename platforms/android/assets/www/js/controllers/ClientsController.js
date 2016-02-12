var ctrls=angular.module('starter.controllers');

ctrls.controller('ClientCtrl', function($scope, $ionicModal, $cordovaSQLite) {
	$ionicModal.fromTemplateUrl('modalstemplates/ModalDetailClient.html',{
		scope : $scope
	}).then(function(modal){
		$scope.modal=modal;
	});
	$scope.clients = [];
	var db;
	document.addEventListener('deviceready', function(){
		db = $cordovaSQLite.openDB({name: 'my.db'});
		db.executeSql('SELECT * FROM clients AS clt',[], function(res){
			//console.log(db);
			//console.log(res.rows);
			var clts = res.rows;
			for(var i = 0; i<res.rows.length; i++){
				var array = $.map(clts.item(i), function(value, index){
					return[value];
				});
				$scope.clients.push(array);
			}
			console.log($scope.clients);	
		}, function(error){
			console.log(error);
		});
		var res = $cordovaSQLite.execute(db, 'SELECT * FROM clients AS clt');
		//console.log(res);
	});
	
	//console.log($scope.clients);
	//console.log($scope.clients[0]);
	$scope.showDetail= function (id){
		$scope.clients.forEach(function(clt, index, clients){
			if(clt.id == id){
				$scope.client = clt;
			}
		});
		$scope.modal.show();
	}
	$scope.closeDetail = function (){
		$scope.modal.hide();
	}

	$scope.search=function(motCle){
		console.log(motCle);
		console.log('recherche des clients à faire quand le sqlite tournera');
	}

	$scope.select=function(codeClient){
		codeClient = codeClient.toString();
		console.log(typeof(codeClient));
		console.log(codeClient.length);
		if(codeClient.length<=6){
			bound= 6-codeClient.length;
			for(var i = 0; i < bound; i ++){
				codeClient = "0" + codeClient;
			}
		}
		console.log('à inscrire dans les cookies '+ codeClient);
	}
})