'use strict';

angular
    .module('github-notify')
    .factory('Config', ['$cookieStore', function($cookieStore){
        var key = 'GITHUB-NOTIFY-CONFIG';
        return {
            get: function(){
                return $cookieStore.get(key);
            },
            have: function(){
                return (!angular.isUndefined($cookieStore.get(key))) ? true : false;
            },
            save: function(data, callback){
                $cookieStore.put(key, data);
                callback();
            },
            remove: function(callback){
                $cookieStore.remove(key);
                callback();
            }
        };
    }]);