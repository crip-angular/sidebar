angular.module("crip.treeView.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("/crip/tree-view/node.html","<i class=\"fa fa-folder fa-lg\" ng-if=\"node.type == \'dir\'\"></i>\n<i class=\"fa fa-file-o fa-lg\" ng-if=\"node.type == \'file\'\"></i>\n<a href=\"#\">{{ node.name }}</a>\n<ul ng-if=\"node.type == \'dir\' && node.children\">\n    <li class=\"{{ node.type }}\" ng-repeat=\"node in node.children\" ng-include=\"\'/crip/tree-view/node.html\'\"></li>\n</ul>\n");
$templateCache.put("/crip/tree-view/tree.html","<ul class=\"tree\">\n    <li class=\"{{ node.type }}\" ng-repeat=\"node in data\" ng-include=\"\'/crip/tree-view/node.html\'\"></li>\n</ul>\n");}]);
(function (ng, crip) {
	
    'use strict';

    crip.treeView = ng.module('crip.tree-view', [
		'crip.treeView.templates'
    ]);

})(angular, window.crip || (window.crip = {}));

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
            link: link,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlcy90ZW1wbGF0ZXMuanMiLCJhc3NldHMvanMvdHJlZS12aWV3Lm1vZHVsZS5qcyIsImFzc2V0cy9qcy9kaXJlY3RpdmVzL3RyZWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZShcImNyaXAudHJlZVZpZXcudGVtcGxhdGVzXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHskdGVtcGxhdGVDYWNoZS5wdXQoXCIvY3JpcC90cmVlLXZpZXcvbm9kZS5odG1sXCIsXCI8aSBjbGFzcz1cXFwiZmEgZmEtZm9sZGVyIGZhLWxnXFxcIiBuZy1pZj1cXFwibm9kZS50eXBlID09IFxcJ2RpclxcJ1xcXCI+PC9pPlxcbjxpIGNsYXNzPVxcXCJmYSBmYS1maWxlLW8gZmEtbGdcXFwiIG5nLWlmPVxcXCJub2RlLnR5cGUgPT0gXFwnZmlsZVxcJ1xcXCI+PC9pPlxcbjxhIGhyZWY9XFxcIiNcXFwiPnt7IG5vZGUubmFtZSB9fTwvYT5cXG48dWwgbmctaWY9XFxcIm5vZGUudHlwZSA9PSBcXCdkaXJcXCcgJiYgbm9kZS5jaGlsZHJlblxcXCI+XFxuICAgIDxsaSBjbGFzcz1cXFwie3sgbm9kZS50eXBlIH19XFxcIiBuZy1yZXBlYXQ9XFxcIm5vZGUgaW4gbm9kZS5jaGlsZHJlblxcXCIgbmctaW5jbHVkZT1cXFwiXFwnL2NyaXAvdHJlZS12aWV3L25vZGUuaHRtbFxcJ1xcXCI+PC9saT5cXG48L3VsPlxcblwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcIi9jcmlwL3RyZWUtdmlldy90cmVlLmh0bWxcIixcIjx1bCBjbGFzcz1cXFwidHJlZVxcXCI+XFxuICAgIDxsaSBjbGFzcz1cXFwie3sgbm9kZS50eXBlIH19XFxcIiBuZy1yZXBlYXQ9XFxcIm5vZGUgaW4gZGF0YVxcXCIgbmctaW5jbHVkZT1cXFwiXFwnL2NyaXAvdHJlZS12aWV3L25vZGUuaHRtbFxcJ1xcXCI+PC9saT5cXG48L3VsPlxcblwiKTt9XSk7IiwiKGZ1bmN0aW9uIChuZywgY3JpcCkge1xuXHRcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBjcmlwLnRyZWVWaWV3ID0gbmcubW9kdWxlKCdjcmlwLnRyZWUtdmlldycsIFtcblx0XHQnY3JpcC50cmVlVmlldy50ZW1wbGF0ZXMnXG4gICAgXSk7XG5cbn0pKGFuZ3VsYXIsIHdpbmRvdy5jcmlwIHx8ICh3aW5kb3cuY3JpcCA9IHt9KSk7XG4iLCIoZnVuY3Rpb24gKG5nLCBjcmlwKSB7ICBcblxuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGNyaXAudHJlZVZpZXdcbiAgICAgICAgLmRpcmVjdGl2ZSgndHJlZScsIHRyZWUpO1xuXG4gICAgdHJlZS4kaW5qZWN0ID0gWyckbG9nJywgJyRkb2N1bWVudCddO1xuXG4gICAgLyoqXG4gICAgICogVHJlZSBkaXJlY3RpdmVcbiAgICAgKlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHRyZWUoJGxvZywgJGRvY3VtZW50KSB7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnRUEnLCAgICAgICAgXG4gICAgICAgICAgICBzY29wZToge1xuICAgICAgICAgICAgICAgIGRhdGE6ICc9J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnL2NyaXAvdHJlZS12aWV3L3RyZWUuaHRtbCcsXG4gICAgICAgICAgICBsaW5rOiBsaW5rLFxuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBMaW5rXG4gICAgICAgICAqXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRyLCBjdHJscykge1xuICAgICAgICAgICAgZWxlbWVudC5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkgeyAgICAgICAgXG4gICAgICAgICAgICAgICAgdmFyIGxpID0gKGUudGFyZ2V0LnRhZ05hbWUgPT0gJ0xJJylcbiAgICAgICAgICAgICAgICAgICAgPyBuZy5lbGVtZW50KGUudGFyZ2V0KVxuICAgICAgICAgICAgICAgICAgICA6IG5nLmVsZW1lbnQoZS50YXJnZXQucGFyZW50Tm9kZSk7XG4gICAgICAgICAgICAgICAgaWYgKGxpLmhhc0NsYXNzKCdkaXInKSkge1xuICAgICAgICAgICAgICAgICAgICBsaS5maW5kKCdpJykuZXEoMCkudG9nZ2xlQ2xhc3MoJ2ZhLWZvbGRlciBmYS1mb2xkZXItb3BlbicpO1xuICAgICAgICAgICAgICAgICAgICBsaS5maW5kKCd1bCcpLmVxKDApLnRvZ2dsZUNsYXNzKCdvcGVuZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59KSAoYW5ndWxhciwgd2luZG93LmNyaXApO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
