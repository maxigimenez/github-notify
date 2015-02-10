'use strict';

angular.module('github-notify')
    .controller('ListController', ['$scope', 'Config', function($scope, Config){

        $scope.list = {};

        var config = Config.get(),
            github = new Github({
                token: config.access
            });

        var accountName = config.account,
            repositoriesList = config.repositories.split(',');


        async.each(repositoriesList, function(item, next){
            var issues = github.getIssues(accountName, item.trim());
            issues.list({}, function(err, list){
                $scope.list[item.trim()] = list;
                next();
            });
        }, function(){
            $scope.$digest();
        });
        
    }]);