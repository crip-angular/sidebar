(function (ng, crip) {  

    'use strict';

    crip.treeView
        .directive('tree', tree);

    tree.$inject = ['$log', '$document'];

    /**
     * Tree directive
     *
     */
    function tree($log, $document) {

        return {
            restrict: 'E',
            templateUrl: '/crip/tree-view/tree.html',
            link: link
        };


        function link(scope, element, attr, ctrls) {



        }
        
    }

})(angular, window.crip);
