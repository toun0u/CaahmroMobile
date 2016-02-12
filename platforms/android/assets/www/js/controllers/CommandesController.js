var ctrls=angular.module('starter.controllers');

ctrls.controller('CdeCtrl', function($scope, $ionicModal) {
	$ionicModal.fromTemplateUrl('modalstemplates/ModalDetailCde.html',{
		scope : $scope
	}).then(function(modal){
		$scope.modal=modal;
	});

	$scope.clients = [
		{id: 1, nom : "test1", code_client: "000003", ville: "Nancy", adresse: "2 rue du test", commentaire: "je suis le voisin du test1 quifait un super long commentaire pour voir comment ionic gère les long texte passkon sait jamais parfois ça peut faire chier maiso n continue parce que c'est pas assez long ça devient nimportequoi et on continue encore pour la beauté de la science parce qu'on sais jamais des fois que les mecs aient envie de raconter leurs life", pays: 'France'},
		{id: 2, nom : "test2", code_client: "000004", ville: "Metz", adresse: "4 rue du test", commentaire:"je suis le voisin du test2", pays: 'France'},
	];
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
})