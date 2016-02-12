angular.module('starter.controllers')

.controller('SyncCtrl', function($filter,$state,dataInjector, $scope, $q, $rootScope, $cordovaSQLite, $cookies, sync){
	var spinner = document.getElementById('spinner');
	var syncButton = document.getElementById('syncButton');
	var suite = document.getElementById('suite');
	var att = document.createAttribute('hidden');
	var att2 = document.createAttribute('hidden');
	var att3 = document.createAttribute('hidden');
	//var scope = $rootScope;
	var completed = 0;
	spinner.setAttributeNode(att);
	suite.setAttributeNode(att3);
	$scope.message = "Synchroniser les données de l'appareil";
	var status =[];
	$scope.sync=function(){
		syncButton.setAttributeNode(att2);
		spinner.removeAttributeNode(att);
		if(!$cookies.get('lastSync')){
			$scope.message="Synchronisation en cours, cette opération peut prendre plusieurs minutes";
			var clts = sync.clients();
			clts.then(function(){
				status.push('success');
				console.log(clts);
				completed = completed + 1;
			},function(reason){
				status.push(reason);
				completed = completed + 1;
			});
			var familles = sync.familles();
			familles.then(function(){
				status.push('success');
				completed = completed + 1;
			},function(reason){
				status.push(reason);
				completed = completed + 1;
			});
			var articles = sync.articles();
			articles.then(function(){
				status.push('success');
				completed = completed + 1;
			},function(reason){
				status.push(reason);
				completed = completed + 1;
			});
			var familleArticles = sync.familleArticles();
			familleArticles.then(function(){
				status.push('success');
				completed = completed + 1;
			},function(reason){
				status.push(reason);
				completed = completed + 1;
			});
			var tarifsQte = sync.tarifsQte();
			tarifsQte.then(function(){
				status.push('success');
				completed = completed + 1;
			},function(reason){
				status.push(reason);
				completed = completed + 1;
			});
			var prixnets = sync.prixnets();
			prixnets.then(function(){
				status.push('success');
				completed = completed + 1;
			},function(reason){
				status.push(reason);
				completed = completed + 1;
			});
			var cde = sync.commandes();
			cde.then(function(){
				status.push('success');
				completed = completed + 1;
			},function(reason){
				status.push(reason);
				completed = completed + 1;
			});
			var cdecontent = sync.commandeContent();
			cdecontent.then(function(){;
				status.push('success');
				completed = completed + 1;
			},function(reason){
				status.push(reason);
				completed = completed + 1;
			});
			var facture = sync.facture();
			facture.then(function(){
				status.push('success');
				completed = completed + 1;
			},function(reason){
				status.push(reason);
				completed = completed + 1;
			});
			var facturedet = sync.factureDet();
			facturedet.then(function(){
				status.push('success');
				completed = completed + 1;
			},function(reason){
				status.push(reason);
				completed = completed + 1;
			});
			$scope.$watch(function(){return completed}, function(newValue, oldValue){			
				if(newValue == 10){
					ok = true;
					console.log(status);
					status.forEach(function(status, index){
						if (status !== 'success'){
							ok = false;
						}
					})
					if(ok){
						suite.removeAttributeNode(att3);
						$scope.message="Synchronisation effectuée";
					    var d = new Date();
					    d = $filter('date')(d, 'yyyyMMddHHmmss');
						//$cookies.put('lastSync', d);				
						$cookies['lastSync']=d;
					}else{
						syncButton.removeAttributeNode(att2);
						$scope.message="Une erreur est survenue, voulez vous réessayer?";
					}
					spinner.setAttributeNode(att);
				}
			});
		}else{
			console.log($cookies['lastSync']);
			var modif = sync.updatedRows();
			modif.then(function(){
				status.push('success');
				completed = completed + 1;
			},function(reason){
				status.push(reason);
				completed = completed + 1;
			})
			var suppr = sync.deletedRows();
			suppr.then(function(){
				status.push('success');
				completed = completed + 1;
			},function(reason){
				status.push(reason);
				completed = completed + 1;
			})
			$scope.$watch(function(){return completed}, function(newValue, oldValue){
				var ok = false;
				if(newValue == 2){
					ok = true;
					console.log(status);
					status.forEach(function(status, index){
						if (status !== 'success'){
							ok = false;
						}
					})
					console.log(ok);
					if(ok){
						suite.removeAttributeNode(att3);
						$scope.message="Synchronisation effectuée";	
						d = $filter('date')(d, 'yyyyMMddHHmmss');
						$cookies['lastSync']=d;				
					}else{
						syncButton.removeAttributeNode(att2);
						$scope.message="Une erreur est survenue, voulez vous réessayer?";
					}
					spinner.setAttributeNode(att);
				}
			});
		}
	}
	$scope.redirect=function(){
		$state.go('app.clients');
	}
	
})

//$cordovaSQLite.execute(db, 'CREATE TABLE IF NOT EXISTS clients (id integer primary key, code text, nom text, adr text, cp text, ville text, id_pays integer, market text, commentaire text)');
