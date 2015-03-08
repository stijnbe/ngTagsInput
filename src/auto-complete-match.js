'use strict';

/**
 * @ngdoc directive
 * @name tiAutocompleteMatch
 * @module ngTagsInput
 *
 * @description
 * Represents an autocomplete match. Used internally by the tagsInput directive.
 */
tagsInput.directive('tiAutocompleteMatch', function($sce, tiUtil) {
    return {
        restrict: 'E',
        require: '^autoComplete',
        template: '<ng-include src="template"></ng-include>',
        scope: { template: '@', data: '=', query: '=', highlight: '=', displayText: '=' },
        link: function(scope, element, attrs, autoComplete) {
           // autoComplete.ping();
            scope.util = {
                highlight: function(text) {
                    if (scope.highlight) {
                        text = tiUtil.safeToString(text);
                        text = tiUtil.encodeHTML(text);
                        text = tiUtil.safeHighlight(text, tiUtil.encodeHTML(scope.query));
                    }
                    return $sce.trustAsHtml(text);
                },
                getDisplayText: function() {
                    return scope.data[scope.displayText];
                }
            };
        }
    };
});
