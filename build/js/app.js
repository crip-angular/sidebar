(function (ng, crip) {
	
    'use strict';

    crip.sidebar = ng.module('crip.sidebar', []);

})(angular, window.crip || (window.crip = {}));

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXIubW9kdWxlLmpzIiwiY29udHJvbGxlcnMvVHJlZUNvbnRyb2xsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKG5nLCBjcmlwKSB7XG5cdFxuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGNyaXAuc2lkZWJhciA9IG5nLm1vZHVsZSgnY3JpcC5zaWRlYmFyJywgW10pO1xuXG59KShhbmd1bGFyLCB3aW5kb3cuY3JpcCB8fCAod2luZG93LmNyaXAgPSB7fSkpO1xuIiwiKGZ1bmN0aW9uIChuZywgY3JpcCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGNyaXAuc2lkZWJhclxuICAgICAgICAuY29udHJvbGxlcignVHJlZUNvbnRyb2xsZXInLCBUcmVlQ29udHJvbGxlcik7XG5cbiAgICBUcmVlQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGh0dHAnXTtcblxuICAgIC8qKlxuICAgICAqIFRyZWUgQ29udHJvbGxlclxuICAgICAqXG4gICAgICovXG4gICAgZnVuY3Rpb24gVHJlZUNvbnRyb2xsZXIoJHNjb3BlLCAkaHR0cCkge1xuICAgICAgICAvLyBMb2FkcyBmaWxlc3lzdGVtIHRyZWUgYXMgSlNPTlxuICAgICAgICAkaHR0cC5nZXQoJ2ZpbGVzeXN0ZW0uanNvbicpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICRzY29wZS50cmVlID0gcmVzcG9uc2UuZGF0YS5maWxlc3lzdGVtO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn0pKGFuZ3VsYXIsIHdpbmRvdy5jcmlwIHx8ICh3aW5kb3cuY3JpcCA9IHt9KSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
