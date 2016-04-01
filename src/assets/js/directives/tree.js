(function (ng, crip) {  

    'use strict';

    crip.treeView
        .directive('tree', tree);

    tree.$inject = ['$log', '$document'];


    function tree($log, $document) {
        
        return {
            restrict: 'E',
            templateUrl: '/crip/tree-view/tree.html',
            link: link
        };

        function link(scope, element, attr) {


        }
        
    }

})(angular, window.crip);
