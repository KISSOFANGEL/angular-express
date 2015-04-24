/**
 * Created by lenovo on 2015/4/17.
 */
var UserInfoModule = angular.module("UserInfoModule", []);
UserInfoModule.controller('UserInfoCtrl', ['$scope', function ($scope) {
    $scope.UserInfo = {
        email: '475683936@qq.com',
        password: '123123132',
        autoLogin: true
    };
    $scope.getFormData = function () {
        console.log($scope.UserInfo);
    };
    $scope.setFormData = function () {
        $scope.UserInfo = {
            email: 'demaxiya@163.com',
            password: 'sadfafsaf',
            autoLogin: false
        }
    };
    $scope.resetForm=function(){
        $scope.UserInfo={
            email: '475683936@qq.com',
            password: '123123132',
            autoLogin: true
        }
    }
}])