(function(ng, crip) {  

    'use strict';

    crip.treeView
        .directive('cripTree', tree);

    tree.$inject = ['$log', '$document'];

    /**
     * Tree directive
     *
     */
    function tree($log, $document) {

        return {
            restrict: 'A',
            scope: {
                tree: '=cripTree'
            },
            templateUrl: templateUrl,
            link: link
        };

        /**
         * Template URL
         *
         */
        function templateUrl(element, attrs) {
            return attrs.templateUrl || '/crip/tree-view/tree.html';
        }

        /**
         * Link
         *
         */
        function link(scope, element, attr, ctrls) {
            // Open or close directory
            scope.openClose = function(e) {
                // Select list item element
                var node = (e.target.tagName == 'A')
                    ? e.target.parentNode
                    : e.target.parentNode.parentNode;

                // Checks if clicked on directory node
                if (node.classList.contains('dir')) {
                    // Shows/hides directory contents
                    ng.element(node.querySelector('.fa')).toggleClass('fa-folder fa-folder-open');
                    ng.element(node.querySelector('ul')).toggleClass('opened');
                }
            };
        }

    }

}) (angular, window.crip);
