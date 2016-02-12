var ctrls=angular.module('starter.controllers');

ctrls.controller('CataCtrl', function($scope, $ionicModal) {
	$ionicModal.fromTemplateUrl('modalstemplates/ModalDetailClient.html',{
		scope : $scope
	}).then(function(modal){
		$scope.modal=modal;
	});
	var backbutton = document.getElementById('backbutton');
	var att = document.createAttribute('hidden');
	backbutton.setAttributeNode(att);
	families = [
	    {
	      "id": "1",
	      "depth": "1",
	      "label": "Catalogue",
	      "parent": "0",
	      "parents": "0",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": 2,
	      "depth": 2,
	      "label": "Fertilisation et traitements",
	      "parent": "1",
	      "parents": "0;1",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "3",
	      "depth": "3",
	      "label": "Engrais-amendements",
	      "parent": 2,
	      "parents": "0;1;2",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "4",
	      "depth": "4",
	      "label": "Engrais minéraux",
	      "parent": "3",
	      "parents": "0;1;2;3",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "5",
	      "depth": "4",
	      "label": "Engrais organiques",
	      "parent": "3",
	      "parents": "0;1;2;3",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "6",
	      "depth": "4",
	      "label": "Engrais organo-minéraux",
	      "parent": "3",
	      "parents": "0;1;2;3",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "7",
	      "depth": "4",
	      "label": "Engrais désherbants",
	      "parent": "3",
	      "parents": "0;1;2;3",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "8",
	      "depth": "4",
	      "label": "Engrais à libération lente",
	      "parent": "3",
	      "parents": "0;1;2;3",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "9",
	      "depth": "4",
	      "label": "Engrais liquides",
	      "parent": "3",
	      "parents": "0;1;2;3",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "10",
	      "depth": "4",
	      "label": "Engrais solubles",
	      "parent": "3",
	      "parents": "0;1;2;3",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "11",
	      "depth": "4",
	      "label": "Oligo-éléments & stimulateurs",
	      "parent": "3",
	      "parents": "0;1;2;3",
	      "creation": "20140302115927",
	      "modif": "20140627104500"
	    },
	    {
	      "id": "11",
	      "depth": "4",
	      "label": "Oligo-éléments",
	      "parent": "3",
	      "parents": "0;1;2;3",
	      "creation": "20140302115927",
	      "modif": "20140627104500"
	    },
	    {
	      "id": "11",
	      "depth": "4",
	      "label": "Oligo-éléments",
	      "parent": "3",
	      "parents": "0;1;2;3",
	      "creation": "20140302115927",
	      "modif": "20140627104500"
	    },
	    {
	      "id": "12",
	      "depth": "4",
	      "label": "Amendements organiques",
	      "parent": "3",
	      "parents": "0;1;2;3",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "13",
	      "depth": "4",
	      "label": "Amendements basiques",
	      "parent": "3",
	      "parents": "0;1;2;3",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "14",
	      "depth": "3",
	      "label": "Produits de traitement",
	      "parent": 2,
	      "parents": "0;1;2",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "15",
	      "depth": "4",
	      "label": "Insecticides & acaricides",
	      "parent": "14",
	      "parents": "0;1;2;14",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "16",
	      "depth": "4",
	      "label": "Fongicides",
	      "parent": "14",
	      "parents": "0;1;2;14",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "17",
	      "depth": "4",
	      "label": "Herbicides",
	      "parent": "14",
	      "parents": "0;1;2;14",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "18",
	      "depth": "4",
	      "label": "Anti algues, mousses, lichens",
	      "parent": "14",
	      "parents": "0;1;2;14",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "19",
	      "depth": "4",
	      "label": "Adjuvants, mouillants, solvants",
	      "parent": "14",
	      "parents": "0;1;2;14",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "20",
	      "depth": "4",
	      "label": "Substances de croissance",
	      "parent": "14",
	      "parents": "0;1;2;14",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "21",
	      "depth": "4",
	      "label": "Attractifs / répulsifs",
	      "parent": "14",
	      "parents": "0;1;2;14",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "22",
	      "depth": "4",
	      "label": "Badigeons & sprays",
	      "parent": "14",
	      "parents": "0;1;2;14",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "23",
	      "depth": "4",
	      "label": "Nématicides",
	      "parent": "14",
	      "parents": "0;1;2;14",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "24",
	      "depth": "4",
	      "label": "Rodenticides",
	      "parent": "14",
	      "parents": "0;1;2;14",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "25",
	      "depth": "4",
	      "label": "Taupicides",
	      "parent": "14",
	      "parents": "0;1;2;14",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "26",
	      "depth": "4",
	      "label": "Molluscicides",
	      "parent": "14",
	      "parents": "0;1;2;14",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "27",
	      "depth": "4",
	      "label": "Organismes auxiliaires",
	      "parent": "14",
	      "parents": "0;1;2;14",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "28",
	      "depth": "4",
	      "label": "Divers (phytosanitaires)",
	      "parent": "14",
	      "parents": "0;1;2;14",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "29",
	      "depth": "3",
	      "label": "Produits chimiques",
	      "parent": 2,
	      "parents": "0;1;2",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "30",
	      "depth": "4",
	      "label": "Produits chimiques divers",
	      "parent": "29",
	      "parents": "0;1;2;29",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "31",
	      "depth": "4",
	      "label": "Désinfection & nettoyage",
	      "parent": "29",
	      "parents": "0;1;2;29",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "32",
	      "depth": "4",
	      "label": "Acides & produits assimilés",
	      "parent": "29",
	      "parents": "0;1;2;29",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "33",
	      "depth": "4",
	      "label": "Produits de déneigement",
	      "parent": "29",
	      "parents": "0;1;2;29",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "34",
	      "depth": "4",
	      "label": "Peintures & traçages",
	      "parent": "29",
	      "parents": "0;1;2;29",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "35",
	      "depth": "4",
	      "label": "Ombrage-désombrage de serre",
	      "parent": "29",
	      "parents": "0;1;2;29",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "36",
	      "depth": "4",
	      "label": "Colles-mastics-étanchéité",
	      "parent": "29",
	      "parents": "0;1;2;29",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "37",
	      "depth": "4",
	      "label": "Gaz",
	      "parent": "29",
	      "parents": "0;1;2;29",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "38",
	      "depth": "4",
	      "label": "Lubrifiants",
	      "parent": "29",
	      "parents": "0;1;2;29",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "39",
	      "depth": 2,
	      "label": "Poteries & emballages",
	      "parent": "1",
	      "parents": "0;1",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "40",
	      "depth": "3",
	      "label": "Poteries de production",
	      "parent": "39",
	      "parents": "0;1;39",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "41",
	      "depth": "4",
	      "label": "Poterie terre (de production)",
	      "parent": "40",
	      "parents": "0;1;39;40",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "42",
	      "depth": "4",
	      "label": "Godets",
	      "parent": "40",
	      "parents": "0;1;39;40",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "43",
	      "depth": "4",
	      "label": "Clayettes",
	      "parent": "40",
	      "parents": "0;1;39;40",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "44",
	      "depth": "4",
	      "label": "Plaques, terrines, packs, barquettes",
	      "parent": "40",
	      "parents": "0;1;39;40",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "45",
	      "depth": "4",
	      "label": "Pots",
	      "parent": "40",
	      "parents": "0;1;39;40",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "46",
	      "depth": "4",
	      "label": "Conteneurs, paniers",
	      "parent": "40",
	      "parents": "0;1;39;40",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "47",
	      "depth": "4",
	      "label": "Coupes, suspensions (pots, sacs…)",
	      "parent": "40",
	      "parents": "0;1;39;40",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "48",
	      "depth": "4",
	      "label": "Jardinières, balconnières, bacs",
	      "parent": "40",
	      "parents": "0;1;39;40",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "49",
	      "depth": "4",
	      "label": "Soucoupes, plateaux",
	      "parent": "40",
	      "parents": "0;1;39;40",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "50",
	      "depth": "4",
	      "label": "Accessoires et divers (poterie)",
	      "parent": "40",
	      "parents": "0;1;39;40",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "51",
	      "depth": "4",
	      "label": "Poterie biodégradable",
	      "parent": "40",
	      "parents": "0;1;39;40",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "52",
	      "depth": "3",
	      "label": "Récolte-emballage-étiquettage",
	      "parent": "39",
	      "parents": "0;1;39",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "53",
	      "depth": "4",
	      "label": "Caisses cartons",
	      "parent": "52",
	      "parents": "0;1;39;52",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "54",
	      "depth": "4",
	      "label": "Caisses-pallox-box plastiques",
	      "parent": "52",
	      "parents": "0;1;39;52",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "55",
	      "depth": "4",
	      "label": "Emballages fruits & légumes",
	      "parent": "52",
	      "parents": "0;1;39;52",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "56",
	      "depth": "4",
	      "label": "Sacherie",
	      "parent": "52",
	      "parents": "0;1;39;52",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "57",
	      "depth": "4",
	      "label": "Accessoires d'emballage",
	      "parent": "52",
	      "parents": "0;1;39;52",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "58",
	      "depth": "4",
	      "label": "Cueillette-manutention-palettisation",
	      "parent": "52",
	      "parents": "0;1;39;52",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "59",
	      "depth": "4",
	      "label": "Etiquetage",
	      "parent": "52",
	      "parents": "0;1;39;52",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "60",
	      "depth": "4",
	      "label": "Tontines et emballages de mottes",
	      "parent": "52",
	      "parents": "0;1;39;52",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "61",
	      "depth": 2,
	      "label": "Substrats et paillages",
	      "parent": "1",
	      "parents": "0;1",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "62",
	      "depth": "3",
	      "label": "Supports de culture",
	      "parent": "61",
	      "parents": "0;1;61",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "63",
	      "depth": "4",
	      "label": "Tourbes",
	      "parent": "62",
	      "parents": "0;1;61;62",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "64",
	      "depth": "4",
	      "label": "Terreaux prêts à l'emploi",
	      "parent": "62",
	      "parents": "0;1;61;62",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "65",
	      "depth": "4",
	      "label": "Améliorants du sol",
	      "parent": "62",
	      "parents": "0;1;61;62",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "66",
	      "depth": "4",
	      "label": "Supports de culture hors-sol",
	      "parent": "62",
	      "parents": "0;1;61;62",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "67",
	      "depth": "4",
	      "label": "Mottes de multiplication",
	      "parent": "62",
	      "parents": "0;1;61;62",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "68",
	      "depth": "3",
	      "label": "Paillages",
	      "parent": "61",
	      "parents": "0;1;61",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "69",
	      "depth": "4",
	      "label": "Paillages organiques fluides",
	      "parent": "68",
	      "parents": "0;1;61;68",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "70",
	      "depth": "4",
	      "label": "Paillages minéraux",
	      "parent": "68",
	      "parents": "0;1;61;68",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "71",
	      "depth": "4",
	      "label": "Toiles de paillage synthétiques",
	      "parent": "68",
	      "parents": "0;1;61;68",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "72",
	      "depth": "4",
	      "label": "Toiles-feutres paillage bio & assimilés",
	      "parent": "68",
	      "parents": "0;1;61;68",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "73",
	      "depth": "4",
	      "label": "Films plastiques de paillage",
	      "parent": "68",
	      "parents": "0;1;61;68",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "74",
	      "depth": "4",
	      "label": "Films biodégradables",
	      "parent": "68",
	      "parents": "0;1;61;68",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "75",
	      "depth": "4",
	      "label": "Accessoires de fixation paillage",
	      "parent": "68",
	      "parents": "0;1;61;68",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "76",
	      "depth": 2,
	      "label": "Outillage-appareils-matériaux",
	      "parent": "1",
	      "parents": "0;1",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "77",
	      "depth": "3",
	      "label": "Outillage",
	      "parent": "76",
	      "parents": "0;1;76",
	      "creation": "20140302115927",
	      "modif": "20151214144524"
	    },
	    {
	      "id": "78",
	      "depth": "4",
	      "label": "Outils de coupe",
	      "parent": "77",
	      "parents": "0;1;76;77",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "79",
	      "depth": "4",
	      "label": "Outils manuels",
	      "parent": "77",
	      "parents": "0;1;76;77",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "80",
	      "depth": "4",
	      "label": "Outils de balayage & nettoyage",
	      "parent": "77",
	      "parents": "0;1;76;77",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "81",
	      "depth": "4",
	      "label": "Manches d'outils et pièces détachées",
	      "parent": "77",
	      "parents": "0;1;76;77",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "82",
	      "depth": "4",
	      "label": "Petits outils et accessoires",
	      "parent": "77",
	      "parents": "0;1;76;77",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "83",
	      "depth": "4",
	      "label": "Outils de mesure",
	      "parent": "77",
	      "parents": "0;1;76;77",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "84",
	      "depth": "4",
	      "label": "Outillage atelier & chantier",
	      "parent": "77",
	      "parents": "0;1;76;77",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "85",
	      "depth": "3",
	      "label": "Matériels fixes & mobiles",
	      "parent": "76",
	      "parents": "0;1;76",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "86",
	      "depth": "4",
	      "label": "Accessoires phyto-engrais",
	      "parent": "85",
	      "parents": "0;1;76;85",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "87",
	      "depth": "4",
	      "label": "Matériel de transport-manutention",
	      "parent": "85",
	      "parents": "0;1;76;85",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "88",
	      "depth": "4",
	      "label": "Matériel de présentation-exposition",
	      "parent": "85",
	      "parents": "0;1;76;85",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "89",
	      "depth": "4",
	      "label": "Chauffage",
	      "parent": "85",
	      "parents": "0;1;76;85",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "90",
	      "depth": "4",
	      "label": "Pulvérisation & haute pression",
	      "parent": "85",
	      "parents": "0;1;76;85",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "91",
	      "depth": "4",
	      "label": "Pièces détachées pulvé-haute pression",
	      "parent": "85",
	      "parents": "0;1;76;85",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "92",
	      "depth": "4",
	      "label": "Appareils de taille",
	      "parent": "85",
	      "parents": "0;1;76;85",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "93",
	      "depth": "4",
	      "label": "Traçeuses",
	      "parent": "85",
	      "parents": "0;1;76;85",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "94",
	      "depth": "4",
	      "label": "Désherbage thermique",
	      "parent": "85",
	      "parents": "0;1;76;85",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "95",
	      "depth": "4",
	      "label": "Appareils divers",
	      "parent": "85",
	      "parents": "0;1;76;85",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "96",
	      "depth": "4",
	      "label": "Machinisme",
	      "parent": "85",
	      "parents": "0;1;76;85",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "97",
	      "depth": "4",
	      "label": "Matériel de semis",
	      "parent": "85",
	      "parents": "0;1;76;85",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "98",
	      "depth": "3",
	      "label": "Métaux & matériaux",
	      "parent": "76",
	      "parents": "0;1;76",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "99",
	      "depth": "4",
	      "label": "Quincaillerie",
	      "parent": "98",
	      "parents": "0;1;76;98",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "100",
	      "depth": "4",
	      "label": "Fers & métaux",
	      "parent": "98",
	      "parents": "0;1;76;98",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "101",
	      "depth": "4",
	      "label": "Matériaux en plaques",
	      "parent": "98",
	      "parents": "0;1;76;98",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "102",
	      "depth": "4",
	      "label": "Matériaux fluides",
	      "parent": "98",
	      "parents": "0;1;76;98",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "103",
	      "depth": "4",
	      "label": "Matériaux naturels",
	      "parent": "98",
	      "parents": "0;1;76;98",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "104",
	      "depth": "4",
	      "label": "Autres matériaux",
	      "parent": "98",
	      "parents": "0;1;76;98",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "105",
	      "depth": 2,
	      "label": "Plantations & protections végétales",
	      "parent": "1",
	      "parents": "0;1",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "106",
	      "depth": "3",
	      "label": "Tuteurage-liage-ancrage",
	      "parent": "105",
	      "parents": "0;1;105",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "107",
	      "depth": "4",
	      "label": "Tuteurs matière plastique",
	      "parent": "106",
	      "parents": "0;1;105;106",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "108",
	      "depth": "4",
	      "label": "Tuteurs métalliques",
	      "parent": "106",
	      "parents": "0;1;105;106",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "109",
	      "depth": "4",
	      "label": "Bambous & flower-sticks",
	      "parent": "106",
	      "parents": "0;1;105;106",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "110",
	      "depth": "4",
	      "label": "Tuteurs bois",
	      "parent": "106",
	      "parents": "0;1;105;106",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "111",
	      "depth": "4",
	      "label": "Ancrage & accessoires",
	      "parent": "106",
	      "parents": "0;1;105;106",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "112",
	      "depth": "4",
	      "label": "Liens plastiques-PVC-caoutchouc",
	      "parent": "106",
	      "parents": "0;1;105;106",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "113",
	      "depth": "4",
	      "label": "Liens armés et métalliques",
	      "parent": "106",
	      "parents": "0;1;105;106",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "114",
	      "depth": "4",
	      "label": "Ficelles-cordeaux-raphias",
	      "parent": "106",
	      "parents": "0;1;105;106",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "115",
	      "depth": "4",
	      "label": "Pinces et accessoires pour liage",
	      "parent": "106",
	      "parents": "0;1;105;106",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "116",
	      "depth": "3",
	      "label": "Soin et protection des plantes",
	      "parent": "105",
	      "parents": "0;1;105",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "117",
	      "depth": "4",
	      "label": "Protection des troncs",
	      "parent": "116",
	      "parents": "0;1;105;116",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "118",
	      "depth": "4",
	      "label": "Filets de protection pour plantes",
	      "parent": "116",
	      "parents": "0;1;105;116",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "119",
	      "depth": "4",
	      "label": "Toiles protection thermique pour plantes",
	      "parent": "116",
	      "parents": "0;1;105;116",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "120",
	      "depth": "4",
	      "label": "Accessoires de protection des plantes",
	      "parent": "116",
	      "parents": "0;1;105;116",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "121",
	      "depth": "4",
	      "label": "Accessoires greffage",
	      "parent": "116",
	      "parents": "0;1;105;116",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "122",
	      "depth": "4",
	      "label": "Pièges et effaroucheurs",
	      "parent": "116",
	      "parents": "0;1;105;116",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "123",
	      "depth": 2,
	      "label": "Aménagements paysagers",
	      "parent": "1",
	      "parents": "0;1",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "124",
	      "depth": "3",
	      "label": "Aménagement urbain",
	      "parent": "123",
	      "parents": "0;1;123",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "125",
	      "depth": "4",
	      "label": "Poteries & contenants (aménagt urbain)",
	      "parent": "124",
	      "parents": "0;1;123;124",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "126",
	      "depth": "4",
	      "label": "Supports-fixation poteries (aménagt urbain)",
	      "parent": "124",
	      "parents": "0;1;123;124",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "127",
	      "depth": "4",
	      "label": "Mobilier urbain",
	      "parent": "124",
	      "parents": "0;1;123;124",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "128",
	      "depth": "4",
	      "label": "Bois d'œuvre et terrasses",
	      "parent": "124",
	      "parents": "0;1;123;124",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "129",
	      "depth": "4",
	      "label": "Structures en bois",
	      "parent": "124",
	      "parents": "0;1;123;124",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "130",
	      "depth": "4",
	      "label": "Panneaux décoratifs",
	      "parent": "124",
	      "parents": "0;1;123;124",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "131",
	      "depth": "4",
	      "label": "Clôtures et portails bois",
	      "parent": "124",
	      "parents": "0;1;123;124",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "132",
	      "depth": "4",
	      "label": "Décoration urbaine (hors bois)",
	      "parent": "124",
	      "parents": "0;1;123;124",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "133",
	      "depth": "4",
	      "label": "Pavages, bordures et décorations minérales",
	      "parent": "124",
	      "parents": "0;1;123;124",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "134",
	      "depth": "4",
	      "label": "Fixations et accessoires pour éléments bois",
	      "parent": "124",
	      "parents": "0;1;123;124",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "135",
	      "depth": "4",
	      "label": "Mobilier et jeux d'enfants",
	      "parent": "124",
	      "parents": "0;1;123;124",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "136",
	      "depth": "4",
	      "label": "Mobilier d'intérieur",
	      "parent": "124",
	      "parents": "0;1;123;124",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "137",
	      "depth": "4",
	      "label": "Piscines, fontaines & bassins d'ornement",
	      "parent": "124",
	      "parents": "0;1;123;124",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "138",
	      "depth": "3",
	      "label": "Séparations horizontales et verticales",
	      "parent": "123",
	      "parents": "0;1;123",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "139",
	      "depth": "4",
	      "label": "Bordures jardin",
	      "parent": "138",
	      "parents": "0;1;123;138",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "140",
	      "depth": "4",
	      "label": "Plaques, dalles, anti-érosion",
	      "parent": "138",
	      "parents": "0;1;123;138",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "141",
	      "depth": "4",
	      "label": "Clôtures et portails métalliques",
	      "parent": "138",
	      "parents": "0;1;123;138",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "142",
	      "depth": "4",
	      "label": "Clôtures électriques",
	      "parent": "138",
	      "parents": "0;1;123;138",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "143",
	      "depth": "4",
	      "label": "Fil de fer & structures métalliques",
	      "parent": "138",
	      "parents": "0;1;123;138",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "144",
	      "depth": "4",
	      "label": "Accessoires clôtures et palissages",
	      "parent": "138",
	      "parents": "0;1;123;138",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "145",
	      "depth": "4",
	      "label": "Occultation & entourages",
	      "parent": "138",
	      "parents": "0;1;123;138",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "146",
	      "depth": "4",
	      "label": "Séparations à enterrer",
	      "parent": "138",
	      "parents": "0;1;123;138",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "147",
	      "depth": 2,
	      "label": "Semences, bulbes & végétalisation",
	      "parent": "1",
	      "parents": "0;1",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "148",
	      "depth": "3",
	      "label": "Produits végétaux & assimilés",
	      "parent": "147",
	      "parents": "0;1;147",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "149",
	      "depth": "4",
	      "label": "Gazons",
	      "parent": "148",
	      "parents": "0;1;147;148",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "150",
	      "depth": "4",
	      "label": "Végétalisation murs et toitures",
	      "parent": "148",
	      "parents": "0;1;147;148",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "151",
	      "depth": "4",
	      "label": "Autres semences",
	      "parent": "148",
	      "parents": "0;1;147;148",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "152",
	      "depth": "4",
	      "label": "Bulbes à fleurs",
	      "parent": "148",
	      "parents": "0;1;147;148",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "153",
	      "depth": "4",
	      "label": "Pelouses-prairies fleuries",
	      "parent": "148",
	      "parents": "0;1;147;148",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "154",
	      "depth": "4",
	      "label": "Enherbement vergers",
	      "parent": "148",
	      "parents": "0;1;147;148",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "155",
	      "depth": "4",
	      "label": "Graines fleurs grand public",
	      "parent": "148",
	      "parents": "0;1;147;148",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "156",
	      "depth": "4",
	      "label": "Graines potagères jardin",
	      "parent": "148",
	      "parents": "0;1;147;148",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "157",
	      "depth": "4",
	      "label": "Graines potagères professionnelles",
	      "parent": "148",
	      "parents": "0;1;147;148",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "158",
	      "depth": "4",
	      "label": "Bulbes potagers jardin",
	      "parent": "148",
	      "parents": "0;1;147;148",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "159",
	      "depth": "4",
	      "label": "Plants",
	      "parent": "148",
	      "parents": "0;1;147;148",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "160",
	      "depth": 2,
	      "label": "Autour de la personne",
	      "parent": "1",
	      "parents": "0;1",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "161",
	      "depth": "3",
	      "label": "Equipement de la personne",
	      "parent": "160",
	      "parents": "0;1;160",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "162",
	      "depth": "4",
	      "label": "Vêtements de travail",
	      "parent": "161",
	      "parents": "0;1;160;161",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "163",
	      "depth": "4",
	      "label": "Vêtements de pluie",
	      "parent": "161",
	      "parents": "0;1;160;161",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "164",
	      "depth": "4",
	      "label": "Gants",
	      "parent": "161",
	      "parents": "0;1;160;161",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "165",
	      "depth": "4",
	      "label": "Chaussures & bottes",
	      "parent": "161",
	      "parents": "0;1;160;161",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "166",
	      "depth": "4",
	      "label": "EPI (equipts de protection indiv.)",
	      "parent": "161",
	      "parents": "0;1;160;161",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "167",
	      "depth": "3",
	      "label": "Fournitures domestiques",
	      "parent": "160",
	      "parents": "0;1;160",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "168",
	      "depth": "4",
	      "label": "Produits d'entretien",
	      "parent": "167",
	      "parents": "0;1;160;167",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "169",
	      "depth": "4",
	      "label": "Coutellerie",
	      "parent": "167",
	      "parents": "0;1;160;167",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "170",
	      "depth": "4",
	      "label": "Fournitures ménagères",
	      "parent": "167",
	      "parents": "0;1;160;167",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "171",
	      "depth": "4",
	      "label": "Aliments pour animaux",
	      "parent": "167",
	      "parents": "0;1;160;167",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "172",
	      "depth": "4",
	      "label": "Accessoires pour animaux",
	      "parent": "167",
	      "parents": "0;1;160;167",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "173",
	      "depth": "4",
	      "label": "Livres",
	      "parent": "167",
	      "parents": "0;1;160;167",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "174",
	      "depth": "4",
	      "label": "Supports d'information (hors livres)",
	      "parent": "167",
	      "parents": "0;1;160;167",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "175",
	      "depth": 2,
	      "label": "Arrosage & serres",
	      "parent": "1",
	      "parents": "0;1",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "176",
	      "depth": "3",
	      "label": "Irrigation & arrosage",
	      "parent": "175",
	      "parents": "0;1;175",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "177",
	      "depth": "4",
	      "label": "Arrosage manuel",
	      "parent": "176",
	      "parents": "0;1;175;176",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "178",
	      "depth": "4",
	      "label": "Automatisation d' irrigation",
	      "parent": "176",
	      "parents": "0;1;175;176",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "179",
	      "depth": "4",
	      "label": "Raccords compression-PP & colliers prise ch.",
	      "parent": "176",
	      "parents": "0;1;175;176",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "180",
	      "depth": "4",
	      "label": "Raccords PVC",
	      "parent": "176",
	      "parents": "0;1;175;176",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "181",
	      "depth": "4",
	      "label": "Raccords cannelés et à bagues",
	      "parent": "176",
	      "parents": "0;1;175;176",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "182",
	      "depth": "4",
	      "label": "Raccords métalliques",
	      "parent": "176",
	      "parents": "0;1;175;176",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "183",
	      "depth": "4",
	      "label": "Raccords manuels",
	      "parent": "176",
	      "parents": "0;1;175;176",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "184",
	      "depth": "4",
	      "label": "Tubes, tuyaux, flexibles",
	      "parent": "176",
	      "parents": "0;1;175;176",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "185",
	      "depth": "4",
	      "label": "Vannes manuelles & robinets",
	      "parent": "176",
	      "parents": "0;1;175;176",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "186",
	      "depth": "4",
	      "label": "Filtration, régulation, protection",
	      "parent": "176",
	      "parents": "0;1;175;176",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "187",
	      "depth": "4",
	      "label": "Goutteur, gaine, capillaire, tubing",
	      "parent": "176",
	      "parents": "0;1;175;176",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "188",
	      "depth": "4",
	      "label": "Aspersion espaces verts",
	      "parent": "176",
	      "parents": "0;1;175;176",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "189",
	      "depth": "4",
	      "label": "Réseaux espaces verts",
	      "parent": "176",
	      "parents": "0;1;175;176",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "190",
	      "depth": "4",
	      "label": "Aspersion production",
	      "parent": "176",
	      "parents": "0;1;175;176",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "191",
	      "depth": "4",
	      "label": "Accessoires de fixation arrosage",
	      "parent": "176",
	      "parents": "0;1;175;176",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "192",
	      "depth": "4",
	      "label": "Outils, fournitures, consommables arrosage",
	      "parent": "176",
	      "parents": "0;1;175;176",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "193",
	      "depth": "3",
	      "label": "Pompes-réservoirs-doseurs",
	      "parent": "175",
	      "parents": "0;1;175",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "194",
	      "depth": "4",
	      "label": "Systèmes de récupération d'eau",
	      "parent": "193",
	      "parents": "0;1;175;193",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "195",
	      "depth": "4",
	      "label": "Pompes",
	      "parent": "193",
	      "parents": "0;1;175;193",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "196",
	      "depth": "4",
	      "label": "Pièces détachées pour pompes",
	      "parent": "193",
	      "parents": "0;1;175;193",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "197",
	      "depth": "4",
	      "label": "Réservoirs & cuves",
	      "parent": "193",
	      "parents": "0;1;175;193",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "198",
	      "depth": "4",
	      "label": "Doseurs (fertirrigation)",
	      "parent": "193",
	      "parents": "0;1;175;193",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "199",
	      "depth": "4",
	      "label": "Pièces détachées pour doseurs",
	      "parent": "193",
	      "parents": "0;1;175;193",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "200",
	      "depth": "4",
	      "label": "Compteurs d'eau-vannes volumétriques",
	      "parent": "193",
	      "parents": "0;1;175;193",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "201",
	      "depth": "3",
	      "label": "Serres-abris-bâtiments",
	      "parent": "175",
	      "parents": "0;1;175",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "202",
	      "depth": "4",
	      "label": "Gestion climatique",
	      "parent": "201",
	      "parents": "0;1;175;201",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "203",
	      "depth": "4",
	      "label": "Electricité industrielle",
	      "parent": "201",
	      "parents": "0;1;175;201",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "204",
	      "depth": "4",
	      "label": "Eclairage physiologique",
	      "parent": "201",
	      "parents": "0;1;175;201",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "205",
	      "depth": "4",
	      "label": "Films de couverture serres-abris",
	      "parent": "201",
	      "parents": "0;1;175;201",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "206",
	      "depth": "4",
	      "label": "Films utilisables en serres-abris",
	      "parent": "201",
	      "parents": "0;1;175;201",
	      "creation": "20140302115927",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "207",
	      "depth": "4",
	      "label": "Bâches et toiles serres-abris",
	      "parent": "201",
	      "parents": "0;1;175;201",
	      "creation": "20140326110219",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "208",
	      "depth": "4",
	      "label": "Pièces pour serres et abris",
	      "parent": "201",
	      "parents": "0;1;175;201",
	      "creation": "20140326110219",
	      "modif": "20140331095217"
	    },
	    {
	      "id": "209",
	      "depth": "1",
	      "label": "Racine",
	      "parent": "0",
	      "parents": "0",
	      "creation": "20150113084719",
	      "modif": "20150113084719"
	    }
	];
	$scope.familles=[];
	famillesHistory=[];
	families.forEach(function(fml, index){
		if(fml.depth == 2){
			$scope.familles.push(fml);
		}
	})
	//console.log($scope.familles);
	$scope.nextFamilies= function (id, depth){
		document.getElementById('backbutton').removeAttribute('hidden');
		famillesHistory.push($scope.familles);
		$scope.familles=[];
		families.forEach(function(fml, index, families){
			if(fml.depth == depth+1 && fml.parent ==id){
				$scope.familles.push(fml);
			}
		});
	}
	//console.log($scope.familles);
	$scope.retour=function(){
		var last = famillesHistory.length -1;
		$scope.familles = famillesHistory[last];
		famillesHistory.pop();
		if($scope.familles[0].depth == 2){
			backbutton.setAttributeNode(att);
		}
	}

	$scope.search=function(motCle){
		console.log(motCle);
		console.log('recherche des produits à faire quand le sqlite tournera');
	}
})