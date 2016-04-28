angular.module("crip.tree-view.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("/crip/tree-view/node.html","<a href=\"#\" ng-click=\"openClose($event)\">\n	<i class=\"fa fa-folder fa-lg\" ng-if=\"node.type == \'dir\'\"></i>\n	<i class=\"fa fa-file-o fa-lg\" ng-if=\"node.type == \'file\'\"></i>\n	{{ node.name }}\n</a>\n<ul ng-if=\"node.type == \'dir\' && node.children\">\n    <li class=\"{{ node.type }}\" ng-repeat=\"node in node.children\" ng-include=\"\'/crip/tree-view/node.html\'\"></li>\n</ul>\n");
$templateCache.put("/crip/tree-view/tree.html","<ul class=\"tree\">\n    <li class=\"{{ node.type }}\" ng-repeat=\"node in tree\" ng-include=\"\'/crip/tree-view/node.html\'\"></li>\n</ul>\n");}]);
(function (ng, crip) {
	
    'use strict';

    crip.treeView = ng.module('crip.tree-view', [
		'crip.tree-view.templates'
    ]);

})(angular, window.crip || (window.crip = {}));

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlcy90ZW1wbGF0ZXMuanMiLCJhc3NldHMvanMvdHJlZS12aWV3Lm1vZHVsZS5qcyIsImFzc2V0cy9qcy9kaXJlY3RpdmVzL3RyZWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKFwiY3JpcC50cmVlLXZpZXcudGVtcGxhdGVzXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHskdGVtcGxhdGVDYWNoZS5wdXQoXCIvY3JpcC90cmVlLXZpZXcvbm9kZS5odG1sXCIsXCI8YSBocmVmPVxcXCIjXFxcIiBuZy1jbGljaz1cXFwib3BlbkNsb3NlKCRldmVudClcXFwiPlxcblx0PGkgY2xhc3M9XFxcImZhIGZhLWZvbGRlciBmYS1sZ1xcXCIgbmctaWY9XFxcIm5vZGUudHlwZSA9PSBcXCdkaXJcXCdcXFwiPjwvaT5cXG5cdDxpIGNsYXNzPVxcXCJmYSBmYS1maWxlLW8gZmEtbGdcXFwiIG5nLWlmPVxcXCJub2RlLnR5cGUgPT0gXFwnZmlsZVxcJ1xcXCI+PC9pPlxcblx0e3sgbm9kZS5uYW1lIH19XFxuPC9hPlxcbjx1bCBuZy1pZj1cXFwibm9kZS50eXBlID09IFxcJ2RpclxcJyAmJiBub2RlLmNoaWxkcmVuXFxcIj5cXG4gICAgPGxpIGNsYXNzPVxcXCJ7eyBub2RlLnR5cGUgfX1cXFwiIG5nLXJlcGVhdD1cXFwibm9kZSBpbiBub2RlLmNoaWxkcmVuXFxcIiBuZy1pbmNsdWRlPVxcXCJcXCcvY3JpcC90cmVlLXZpZXcvbm9kZS5odG1sXFwnXFxcIj48L2xpPlxcbjwvdWw+XFxuXCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiL2NyaXAvdHJlZS12aWV3L3RyZWUuaHRtbFwiLFwiPHVsIGNsYXNzPVxcXCJ0cmVlXFxcIj5cXG4gICAgPGxpIGNsYXNzPVxcXCJ7eyBub2RlLnR5cGUgfX1cXFwiIG5nLXJlcGVhdD1cXFwibm9kZSBpbiB0cmVlXFxcIiBuZy1pbmNsdWRlPVxcXCJcXCcvY3JpcC90cmVlLXZpZXcvbm9kZS5odG1sXFwnXFxcIj48L2xpPlxcbjwvdWw+XFxuXCIpO31dKTsiLCIoZnVuY3Rpb24gKG5nLCBjcmlwKSB7XG5cdFxuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGNyaXAudHJlZVZpZXcgPSBuZy5tb2R1bGUoJ2NyaXAudHJlZS12aWV3JywgW1xuXHRcdCdjcmlwLnRyZWUtdmlldy50ZW1wbGF0ZXMnXG4gICAgXSk7XG5cbn0pKGFuZ3VsYXIsIHdpbmRvdy5jcmlwIHx8ICh3aW5kb3cuY3JpcCA9IHt9KSk7XG4iLCIoZnVuY3Rpb24obmcsIGNyaXApIHsgIFxuXG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgY3JpcC50cmVlVmlld1xuICAgICAgICAuZGlyZWN0aXZlKCdjcmlwVHJlZScsIHRyZWUpO1xuXG4gICAgdHJlZS4kaW5qZWN0ID0gWyckbG9nJywgJyRkb2N1bWVudCddO1xuXG4gICAgLyoqXG4gICAgICogVHJlZSBkaXJlY3RpdmVcbiAgICAgKlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHRyZWUoJGxvZywgJGRvY3VtZW50KSB7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICAgICAgICBzY29wZToge1xuICAgICAgICAgICAgICAgIHRyZWU6ICc9Y3JpcFRyZWUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6IHRlbXBsYXRlVXJsLFxuICAgICAgICAgICAgbGluazogbGlua1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUZW1wbGF0ZSBVUkxcbiAgICAgICAgICpcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIHRlbXBsYXRlVXJsKGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICAgICAgICByZXR1cm4gYXR0cnMudGVtcGxhdGVVcmwgfHwgJy9jcmlwL3RyZWUtdmlldy90cmVlLmh0bWwnO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIExpbmtcbiAgICAgICAgICpcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHIsIGN0cmxzKSB7XG4gICAgICAgICAgICAvLyBPcGVuIG9yIGNsb3NlIGRpcmVjdG9yeVxuICAgICAgICAgICAgc2NvcGUub3BlbkNsb3NlID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIC8vIFNlbGVjdCBsaXN0IGl0ZW0gZWxlbWVudFxuICAgICAgICAgICAgICAgIHZhciBub2RlID0gKGUudGFyZ2V0LnRhZ05hbWUgPT0gJ0EnKVxuICAgICAgICAgICAgICAgICAgICA/IGUudGFyZ2V0LnBhcmVudE5vZGVcbiAgICAgICAgICAgICAgICAgICAgOiBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG5cbiAgICAgICAgICAgICAgICAvLyBDaGVja3MgaWYgY2xpY2tlZCBvbiBkaXJlY3Rvcnkgbm9kZVxuICAgICAgICAgICAgICAgIGlmIChub2RlLmNsYXNzTGlzdC5jb250YWlucygnZGlyJykpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2hvd3MvaGlkZXMgZGlyZWN0b3J5IGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgICAgIG5nLmVsZW1lbnQobm9kZS5xdWVyeVNlbGVjdG9yKCcuZmEnKSkudG9nZ2xlQ2xhc3MoJ2ZhLWZvbGRlciBmYS1mb2xkZXItb3BlbicpO1xuICAgICAgICAgICAgICAgICAgICBuZy5lbGVtZW50KG5vZGUucXVlcnlTZWxlY3RvcigndWwnKSkudG9nZ2xlQ2xhc3MoJ29wZW5lZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgIH1cblxufSkgKGFuZ3VsYXIsIHdpbmRvdy5jcmlwKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
