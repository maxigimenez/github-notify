'use strict';

angular.module('github-notify')
    .controller('SetupController', ['$scope', 'Config', '$location', function($scope, Config, $location){

        $scope.data = {};

        $scope.save = function(){
            Config.save($scope.data, function(){
                $location.path('/');
            });
        };
        
    }]);