angular.module("crip.tree-view.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("/crip/tree-view/node.html","<i class=\"fa fa-folder fa-lg\" ng-if=\"node.type == \'dir\'\"></i>\n<i class=\"fa fa-file-o fa-lg\" ng-if=\"node.type == \'file\'\"></i>\n<a href=\"#\">{{ node.name }}</a>\n<ul ng-if=\"node.type == \'dir\' && node.children\">\n    <li class=\"{{ node.type }}\" ng-repeat=\"node in node.children\" ng-include=\"\'/crip/tree-view/node.html\'\"></li>\n</ul>\n");
$templateCache.put("/crip/tree-view/tree.html","<ul class=\"tree\">\n    <li class=\"{{ node.type }}\" ng-repeat=\"node in data\" ng-include=\"\'/crip/tree-view/node.html\'\"></li>\n</ul>\n");}]);
(function (ng, crip) {
	
    'use strict';

    crip.treeView = ng.module('crip.tree-view', [
		'crip.tree-view.templates'
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlcy90ZW1wbGF0ZXMuanMiLCJhc3NldHMvanMvdHJlZS12aWV3Lm1vZHVsZS5qcyIsImFzc2V0cy9qcy9kaXJlY3RpdmVzL3RyZWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZShcImNyaXAudHJlZS12aWV3LnRlbXBsYXRlc1wiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7JHRlbXBsYXRlQ2FjaGUucHV0KFwiL2NyaXAvdHJlZS12aWV3L25vZGUuaHRtbFwiLFwiPGkgY2xhc3M9XFxcImZhIGZhLWZvbGRlciBmYS1sZ1xcXCIgbmctaWY9XFxcIm5vZGUudHlwZSA9PSBcXCdkaXJcXCdcXFwiPjwvaT5cXG48aSBjbGFzcz1cXFwiZmEgZmEtZmlsZS1vIGZhLWxnXFxcIiBuZy1pZj1cXFwibm9kZS50eXBlID09IFxcJ2ZpbGVcXCdcXFwiPjwvaT5cXG48YSBocmVmPVxcXCIjXFxcIj57eyBub2RlLm5hbWUgfX08L2E+XFxuPHVsIG5nLWlmPVxcXCJub2RlLnR5cGUgPT0gXFwnZGlyXFwnICYmIG5vZGUuY2hpbGRyZW5cXFwiPlxcbiAgICA8bGkgY2xhc3M9XFxcInt7IG5vZGUudHlwZSB9fVxcXCIgbmctcmVwZWF0PVxcXCJub2RlIGluIG5vZGUuY2hpbGRyZW5cXFwiIG5nLWluY2x1ZGU9XFxcIlxcJy9jcmlwL3RyZWUtdmlldy9ub2RlLmh0bWxcXCdcXFwiPjwvbGk+XFxuPC91bD5cXG5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCIvY3JpcC90cmVlLXZpZXcvdHJlZS5odG1sXCIsXCI8dWwgY2xhc3M9XFxcInRyZWVcXFwiPlxcbiAgICA8bGkgY2xhc3M9XFxcInt7IG5vZGUudHlwZSB9fVxcXCIgbmctcmVwZWF0PVxcXCJub2RlIGluIGRhdGFcXFwiIG5nLWluY2x1ZGU9XFxcIlxcJy9jcmlwL3RyZWUtdmlldy9ub2RlLmh0bWxcXCdcXFwiPjwvbGk+XFxuPC91bD5cXG5cIik7fV0pOyIsIihmdW5jdGlvbiAobmcsIGNyaXApIHtcblx0XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgY3JpcC50cmVlVmlldyA9IG5nLm1vZHVsZSgnY3JpcC50cmVlLXZpZXcnLCBbXG5cdFx0J2NyaXAudHJlZS12aWV3LnRlbXBsYXRlcydcbiAgICBdKTtcblxufSkoYW5ndWxhciwgd2luZG93LmNyaXAgfHwgKHdpbmRvdy5jcmlwID0ge30pKTtcbiIsIihmdW5jdGlvbiAobmcsIGNyaXApIHsgIFxuXG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgY3JpcC50cmVlVmlld1xuICAgICAgICAuZGlyZWN0aXZlKCd0cmVlJywgdHJlZSk7XG5cbiAgICB0cmVlLiRpbmplY3QgPSBbJyRsb2cnLCAnJGRvY3VtZW50J107XG5cbiAgICAvKipcbiAgICAgKiBUcmVlIGRpcmVjdGl2ZVxuICAgICAqXG4gICAgICovXG4gICAgZnVuY3Rpb24gdHJlZSgkbG9nLCAkZG9jdW1lbnQpIHtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdHJpY3Q6ICdFQScsICAgICAgICBcbiAgICAgICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICAgICAgZGF0YTogJz0nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcvY3JpcC90cmVlLXZpZXcvdHJlZS5odG1sJyxcbiAgICAgICAgICAgIGxpbms6IGxpbmtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogTGlua1xuICAgICAgICAgKlxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gbGluayhzY29wZSwgZWxlbWVudCwgYXR0ciwgY3RybHMpIHtcbiAgICAgICAgICAgIGVsZW1lbnQub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHsgICAgICAgIFxuICAgICAgICAgICAgICAgIHZhciBsaSA9IChlLnRhcmdldC50YWdOYW1lID09ICdMSScpXG4gICAgICAgICAgICAgICAgICAgID8gbmcuZWxlbWVudChlLnRhcmdldClcbiAgICAgICAgICAgICAgICAgICAgOiBuZy5lbGVtZW50KGUudGFyZ2V0LnBhcmVudE5vZGUpO1xuICAgICAgICAgICAgICAgIGlmIChsaS5oYXNDbGFzcygnZGlyJykpIHtcbiAgICAgICAgICAgICAgICAgICAgbGkuZmluZCgnaScpLmVxKDApLnRvZ2dsZUNsYXNzKCdmYS1mb2xkZXIgZmEtZm9sZGVyLW9wZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgbGkuZmluZCgndWwnKS5lcSgwKS50b2dnbGVDbGFzcygnb3BlbmVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgIH1cblxufSkgKGFuZ3VsYXIsIHdpbmRvdy5jcmlwKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
