var services=angular.module('starter.services');

services.factory('dataInjector', function($cordovaSQLite){
	return{
		clients:function(clients){
			var req = "INSERT INTO clients VALUES (?,?,?,?,?,?,?,?,?)";
			clients.forEach(function(clt, index){
				console.log(clt.id);
				var param = [
					clt.id,
					clt.code,
					clt.nom,
					clt.adr1,
					clt.cp,
					clt.ville,
					clt.id_pays,
					clt.marche,
					clt.commentaire
				]
			$cordovaSQLite.execute(db, req, param);
			});
		}
	}
})

/*console.log(res.$$state.value.data.clients);
			
			});*/