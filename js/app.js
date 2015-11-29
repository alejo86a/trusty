var configFiao = function($routeProvider){
 
    $routeProvider.when("/", {
        controller: "VentasCtrl",
        templateUrl: "templates/venta.html"
    })
    .when("/asigna_venta", {
        controller: "CompraCtrl",
        templateUrl: "templates/asigna_compra.html"
    })
    .when("/historia", {
        controller: "historiaCtrl",
        templateUrl: "templates/historia.html"
    })
    .otherwise({ redirectTo: '/' });
 
}
 
//creamos el modulo y le aplicamos la configuración
var app = angular.module("fi-a-o", ["ngRoute"]).config(configFiao);