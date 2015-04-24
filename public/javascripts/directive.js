/**
 * Created by lenovo on 2015/4/17.
 */
var myModule = angular.module('myModule',[]);
myModule.directive("hello",function(){
   return{
       restrict:'AEMC',
       templateUrl:'/loginForm',
       replace:true
   }
});