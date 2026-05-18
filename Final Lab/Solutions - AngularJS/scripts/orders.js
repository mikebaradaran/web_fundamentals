ordersApp = angular.module('Orders', []);

ordersController = function ($scope, $http) {
    
    // getting customers 
    var ordersSuccessCallback = function (results) {
        $scope.message = "";
        $scope.customers = results.data;
    };

    $scope.message = "Loading...";
    $scope.customers = null;
    $scope.orders = null;

    $http({
        method: "GET", url: "http://localhost:5000/getcustomers"
    }).then(ordersSuccessCallback);

    // getting Orders 

    var ordersSuccessCallback = function (results) {
        $scope.message = "";
        $scope.orders = results.data;
    }

    $scope.customerClicked = function (customer) {
        $scope.customerID = customer.CustomerID;
        $scope.message = "Loading...";
        $scope.orders = null;
        id = customer.CustomerID;
        $http({
            method: "GET", url: "http://localhost:5000/getordersbycustomerid/" + id
        }).then(ordersSuccessCallback);
    };

};

ordersApp.controller("ordersController", ordersController);