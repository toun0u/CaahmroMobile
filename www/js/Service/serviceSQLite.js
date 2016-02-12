var services=angular.module('starter.services');

services.factory('dataInjector', function($cordovaSQLite){
	return{
		clients:function(clients){
			var req = "INSERT INTO clients VALUES (?,?,?,?,?,?,?,?,?)";
			clients.forEach(function(clt, index){
				//console.log(clt.id);
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
		}, 
		familles:function(obj){
			var req = "INSERT INTO familles(?,?,?,?,?,?,?)";
			obj.forEach(function(item, index){
				var param =[
					item.id,
					item.depth,
					item.label,
					item.parent,
					item.parents,
					item.creation,
					item.modif,
				]	
				$cordovaSQLite.execute(db, req, param);
			});
		},
		articles:function(obj){
			var req = "INSERT INTO articles (?,?,?,?,?,?,?,?)";
			obj.forEach(function(item,index){
				var param=[
					item.id,
					item.label,
					item.description,
					item.ref,
					item.taxe_phyto,
					item.putarif,
					item.creation,
					item.modif,
				]
				$cordovaSQLite.execute(db, req, param);
			});
		},
		familleArticles:function(obj){
			var req = "INSERT INTO familleArticle (?,?,?)";
			obj.forEach(function(item,index){
				param=[
					item.id,
					item.article,
					item.famille
				]
				$cordovaSQLite.execute(db, req, param);
			});
		},
		tarifsQte:function(obj){
			var req = "INSERT INTO tarifsQte (?,?,?,?,?,?,?)";
			obj.forEach(function(item,index){
				param=[
					item.type,
					item.id,
					item.ref,
					item.seuil,
					item.limite,
					item.puqte,
					item.modif
				]
				$cordovaSQLite.execute(db, req, param);
			});
		},
		prixnets:function(obj){
			var req = "INSERT INTO prixNets (?,?,?,?)";
			obj.forEach(function(item,index){
				param =[
					item.type,
					item.marketcode,
					item.ref,
					item.puht,
				]
				$cordovaSQLite.execute(db, req, param);
			});
		},
		cde:function(obj){
			var req = "INSERT INTO commandes (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
			obj.forEach(function(item,index){
				param = [
					item.id,
					item.user,
					item.client,
					item.creation,
					item.validation,
					item.createur,
					item.valideur,
					item.etat,
					item.commentaire,
					item.prb,
					item.c_nom,
					item.c_prenom,
					item.c_tel,
					item.totalttc

				]
				$cordovaSQLite.execute(db, req, param);
			});
		},
		cdecontent:function(obj){
			var req = "INSERT INTO commandesContent (?,?,?,?,?,?)";
			obj.forEach(function(item,index){
				param=[
					item.id,
					item.cde,
					item.article,
					item.refart,
					item.quantite,
					item.puttc
				]
				$cordovaSQLite.execute(db, req, param);
			});
		},
		facture:function(obj){
			var req = "INSERT INTO facture (?,?,?,?,?,?,?,?,?,?,?,?,?)";
			obj.forEach(function(item,index){
				param = [
					item.id,
					item.user,
					item.client,
					item.type,
					item.gauge,
					item.creation,
					item.destinataire,
					item.adrliv,
					item.villeliv,
					item.paysliv,
					item.total,
					item.condition,
					item.modif
				]
				$cordovaSQLite.execute(db, req, param);
			});
		},
		facturedet:function(obj){
			var req = "INSERT INTO facturedet (?,?,?,?,?,?,?)";
			obj.forEach(function(item,index){
				param = [
					item.id,
					item.idfacture,
					item.idarticle,
					item.refarticle,
					item.position,
					item.qte,
					item.unie,
					item.puttc
				]
				$cordovaSQLite.execute(db, req, param);
			});
		},
	}
})
