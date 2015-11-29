app
.controller('VentasCtrl', ['$scope','usuariosModel', function ($scope,usuariosModel) {
	$scope.usuarios = usuariosModel.getUsuarios8;
	
	$scope.buscar = function(){
		if($scope.aBuscar.length==1){
			$scope.usuarios = usuariosModel.getUsuarios7;		
		}
		if($scope.aBuscar.length==2){
			$scope.usuarios = usuariosModel.getUsuarios6;		
		}
		if($scope.aBuscar.length==3){
			$scope.usuarios = usuariosModel.getUsuarios5;		
		}
		if($scope.aBuscar.length==4){
			$scope.usuarios = usuariosModel.getUsuarios4;		
		}
		if($scope.aBuscar.length==5){
			$scope.usuarios = usuariosModel.getUsuarios3;		
		}
		if($scope.aBuscar.length==6){
			$scope.usuarios = usuariosModel.getUsuarios2;		
		}
		if($scope.aBuscar.length==7){
			$scope.usuarios = usuariosModel.getUsuarios1;		
		}
	}
}])
.controller('CompraCtrl', ['$scope', '$location', function ($scope,$location) {
	$scope.usuario = {
        link: "43512934",
        imgUrl: "img/users/1.jpg",
        nombre: "María Sanchez Cardona",
        cedula: "43.512.934",
        pais: "colombia",
        edad: "28",
        codigo: "yug56rf"
    };
    $scope.go = function ( path ) {
    	setTimeout(function(){console.log("aproved");}, 5000);
  		$location.path( "#/historia" );
	};
}])
.controller('historiaCtrl', ['$scope', 'historias', function ($scope,historias) {
	$scope.historias = historias.getHistoria;
}]);