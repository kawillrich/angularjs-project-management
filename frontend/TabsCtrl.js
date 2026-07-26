angular.module('myApp').controller('TabsCtrl', function($scope, $window) {
    $scope.tabs = [
        {
            title: "Backlog",
            content: "Backlog"
        },
        {
            title: "Board",
            content: "Board"
        },
        {
            title: "List",
            content: "List"
        },
        {
            title: "Reference",
            content: "Reference"
        }
    ];

    $scope.model = {
        name: 'Tabs'
    }
})