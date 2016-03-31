(function (ng, crip) {
    'use strict';

    crip.sidebar
        .controller('TreeController', TreeController);

    TreeController.$inject = ['$scope', '$http'];

    /**
     * Tree Controller
     *
     */
    function TreeController($scope, $http) {
        // Loads filesystem tree as JSON
        $http.get('filesystem.json').then(function(response) {
            $scope.tree = response.data.filesystem;
        });
    }

})(angular, window.crip || (window.crip = {}));
