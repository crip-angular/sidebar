(function (ng, crip) {
	
    'use strict';

    crip.treeView = ng.module('crip.tree-view', [
		'crip.tree-view.templates'
    ]);

})(angular, window.crip || (window.crip = {}));
