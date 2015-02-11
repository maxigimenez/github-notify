'use strict';

angular.module('github-notify')
    .controller('SetupController', ['$scope', 'Config', '$location', function($scope, Config, $location){

        $scope.data = {};

        if(Config.have()){
            $scope.data = Config.get();
        }

        $scope.save = function(){
            Config.save($scope.data, function(){
                $location.path('/');
            });
        };
        
    }]);