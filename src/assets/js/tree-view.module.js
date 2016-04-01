(function (ng, crip) {
	
    'use strict';

    crip.treeView = ng.module('crip.tree-view', [
		'crip.treeView.templates'
    ]);

})(angular, window.crip || (window.crip = {}));
