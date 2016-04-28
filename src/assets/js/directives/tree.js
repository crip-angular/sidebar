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
            restrict: 'EA',        
            scope: {
                data: '='
            },
            templateUrl: '/crip/tree-view/tree.html',
            link: link
        };

        /**
         * Link
         *
         */
        function link(scope, element, attr, ctrls) {
            element.on('click', function (e) {        
                var li = (e.target.tagName == 'LI')
                    ? ng.element(e.target)
                    : ng.element(e.target.parentNode);
                if (li.hasClass('dir')) {
                    li.find('i').eq(0).toggleClass('fa-folder fa-folder-open');
                    li.find('ul').eq(0).toggleClass('opened');
                }
            });
        }

    }

}) (angular, window.crip);
