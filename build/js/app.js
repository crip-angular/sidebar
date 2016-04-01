angular.module("crip.treeView.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("/crip/tree-view/node.html","<i class=\"fa fa-folder fa-lg\" ng-if=\"node.type == \'dir\'\"></i>\n<i class=\"fa fa-file-o fa-lg\" ng-if=\"node.type == \'file\'\"></i>\n{{ node.name }}\n<ul ng-if=\"node.type == \'dir\' && node.children\">\n    <li class=\"{{ node.type }}\" ng-repeat=\"node in node.children\" ng-include=\"\'/crip/tree-view/node.html\'\"></li>\n</ul>\n");
$templateCache.put("/crip/tree-view/tree.html","<ul class=\"tree\" ng-controller=\"TreeController\">\n    <li class=\"{{ node.type }}\" ng-repeat=\"node in tree\" ng-include=\"\'/crip/tree-view/node.html\'\"></li>\n</ul>\n");}]);
(function (ng, crip) {
	
    'use strict';

    crip.treeView = ng.module('crip.tree-view', [
		'crip.treeView.templates'
    ]);

})(angular, window.crip || (window.crip = {}));

(function (ng, crip) {
    'use strict';

    crip.treeView
        .controller('TreeController', TreeController);

    TreeController.$inject = ['$scope', '$http'];

    /**
     * Tree Controller
     *
     */
    function TreeController($scope, $http) {
        // Loads filesystem tree as JSON
        $http.get('demo/filesystem.json').then(function(response) {
            $scope.tree = response.data.filesystem;
        });
    }

})(angular, window.crip || (window.crip = {}));

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlcy90ZW1wbGF0ZXMuanMiLCJhc3NldHMvanMvdHJlZS12aWV3Lm1vZHVsZS5qcyIsImFzc2V0cy9qcy9jb250cm9sbGVycy9UcmVlQ29udHJvbGxlci5qcyIsImFzc2V0cy9qcy9kaXJlY3RpdmVzL3RyZWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZShcImNyaXAudHJlZVZpZXcudGVtcGxhdGVzXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHskdGVtcGxhdGVDYWNoZS5wdXQoXCIvY3JpcC90cmVlLXZpZXcvbm9kZS5odG1sXCIsXCI8aSBjbGFzcz1cXFwiZmEgZmEtZm9sZGVyIGZhLWxnXFxcIiBuZy1pZj1cXFwibm9kZS50eXBlID09IFxcJ2RpclxcJ1xcXCI+PC9pPlxcbjxpIGNsYXNzPVxcXCJmYSBmYS1maWxlLW8gZmEtbGdcXFwiIG5nLWlmPVxcXCJub2RlLnR5cGUgPT0gXFwnZmlsZVxcJ1xcXCI+PC9pPlxcbnt7IG5vZGUubmFtZSB9fVxcbjx1bCBuZy1pZj1cXFwibm9kZS50eXBlID09IFxcJ2RpclxcJyAmJiBub2RlLmNoaWxkcmVuXFxcIj5cXG4gICAgPGxpIGNsYXNzPVxcXCJ7eyBub2RlLnR5cGUgfX1cXFwiIG5nLXJlcGVhdD1cXFwibm9kZSBpbiBub2RlLmNoaWxkcmVuXFxcIiBuZy1pbmNsdWRlPVxcXCJcXCcvY3JpcC90cmVlLXZpZXcvbm9kZS5odG1sXFwnXFxcIj48L2xpPlxcbjwvdWw+XFxuXCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiL2NyaXAvdHJlZS12aWV3L3RyZWUuaHRtbFwiLFwiPHVsIGNsYXNzPVxcXCJ0cmVlXFxcIiBuZy1jb250cm9sbGVyPVxcXCJUcmVlQ29udHJvbGxlclxcXCI+XFxuICAgIDxsaSBjbGFzcz1cXFwie3sgbm9kZS50eXBlIH19XFxcIiBuZy1yZXBlYXQ9XFxcIm5vZGUgaW4gdHJlZVxcXCIgbmctaW5jbHVkZT1cXFwiXFwnL2NyaXAvdHJlZS12aWV3L25vZGUuaHRtbFxcJ1xcXCI+PC9saT5cXG48L3VsPlxcblwiKTt9XSk7IiwiKGZ1bmN0aW9uIChuZywgY3JpcCkge1xuXHRcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBjcmlwLnRyZWVWaWV3ID0gbmcubW9kdWxlKCdjcmlwLnRyZWUtdmlldycsIFtcblx0XHQnY3JpcC50cmVlVmlldy50ZW1wbGF0ZXMnXG4gICAgXSk7XG5cbn0pKGFuZ3VsYXIsIHdpbmRvdy5jcmlwIHx8ICh3aW5kb3cuY3JpcCA9IHt9KSk7XG4iLCIoZnVuY3Rpb24gKG5nLCBjcmlwKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgY3JpcC50cmVlVmlld1xuICAgICAgICAuY29udHJvbGxlcignVHJlZUNvbnRyb2xsZXInLCBUcmVlQ29udHJvbGxlcik7XG5cbiAgICBUcmVlQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGh0dHAnXTtcblxuICAgIC8qKlxuICAgICAqIFRyZWUgQ29udHJvbGxlclxuICAgICAqXG4gICAgICovXG4gICAgZnVuY3Rpb24gVHJlZUNvbnRyb2xsZXIoJHNjb3BlLCAkaHR0cCkge1xuICAgICAgICAvLyBMb2FkcyBmaWxlc3lzdGVtIHRyZWUgYXMgSlNPTlxuICAgICAgICAkaHR0cC5nZXQoJ2RlbW8vZmlsZXN5c3RlbS5qc29uJykudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgJHNjb3BlLnRyZWUgPSByZXNwb25zZS5kYXRhLmZpbGVzeXN0ZW07XG4gICAgICAgIH0pO1xuICAgIH1cblxufSkoYW5ndWxhciwgd2luZG93LmNyaXAgfHwgKHdpbmRvdy5jcmlwID0ge30pKTtcbiIsIihmdW5jdGlvbiAobmcsIGNyaXApIHsgIFxuXG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgY3JpcC50cmVlVmlld1xuICAgICAgICAuZGlyZWN0aXZlKCd0cmVlJywgdHJlZSk7XG5cbiAgICB0cmVlLiRpbmplY3QgPSBbJyRsb2cnLCAnJGRvY3VtZW50J107XG5cblxuICAgIGZ1bmN0aW9uIHRyZWUoJGxvZywgJGRvY3VtZW50KSB7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnL2NyaXAvdHJlZS12aWV3L3RyZWUuaHRtbCcsXG4gICAgICAgICAgICBsaW5rOiBsaW5rXG4gICAgICAgIH07XG5cbiAgICAgICAgZnVuY3Rpb24gbGluayhzY29wZSwgZWxlbWVudCwgYXR0cikge1xuXG5cbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbn0pKGFuZ3VsYXIsIHdpbmRvdy5jcmlwKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
