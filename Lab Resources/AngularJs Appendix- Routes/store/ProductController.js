angular.module("products", [])
    .controller("myController",
        function ($scope) {
            $scope.products = [{ name: 'book', unitPrice: 10.50, stockLevel: 3, dateReordered: new Date(2015, 10, 1) },
                               { name: 'pencil', unitPrice: 2.29, stockLevel: 10, dateReordered: new Date(2014, 0, 15) },
                               { name: 'ruler', unitPrice: 5.20, stockLevel: 6, dateReordered: new Date(2016, 7, 21) },
                               { name: 'eraser', unitPrice: 1.30, stockLevel: 21, dateReordered: new Date(2015, 6, 31) },
                               { name: 'pen', unitPrice: 1.80, stockLevel: 14, dateReordered: new Date(2013, 6, 16) }];
    });

