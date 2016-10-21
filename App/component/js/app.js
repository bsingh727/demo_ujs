/**
 * Created by 310264470 on 10/7/2016.
 */
var app=angular.module('phApp',[]);
app.controller('pwc',function($scope,romanToHinduArabic,productDetails) {
    $scope.password='';
    $scope.name="Bishal Singh";
    $scope.checkPassword=function () {
        var size=$scope.password.length;
        if(size > 8){
            $scope.strength="strong";
        } else if(size > 3){
            $scope.strength="medium";
        }else {
            $scope.strength="weak";
        }
    }
    $scope.convertRoman=function () {
        console.log(typeof ($scope.roman));
        if($scope.roman == ""){
            console.log(1);
            $scope.result = "invalid";
            return;
        }else if(typeof $scope.roman  == undefined){
            console.log(2);

            $scope.result = "invalid";
            return;
        }
        $scope.result=romanToHinduArabic.convertRomanToHinduArabic($scope.roman)
    }
    var productdetails='';
     productdetails=productDetails.getProductDetails();
    console.log(productdetails);

});
app.service('romanToHinduArabic',function (convertDigit) {
    var service=this;
    service.convertRomanToHinduArabic=function (roman) {
        roman=roman.toLowerCase();
        console.log(roman);
        var size=roman.length;
        var han=0;
        for(var i=0;i<size;i++){
            r1=roman.charAt(i);
            d1=convertDigit.getDigit(r1);
            if(d1==0){
                han="invalid";
                break;
            }
            op=0;
            if(i<size-1){
                r2=roman.charAt(i+1);
                d2=convertDigit.getDigit(r2);
                if(d1<d2)op=1;
            }
            if(op==0){
            han += d1;}
            else {
                han -= d1;
            }
        }

     return han;
    }
});
app.service('convertDigit',function () {
this.getDigit=function (r) {
    var roman=['i', 'v', 'x', 'l', 'c', 'd', 'm'];
    var value=[1, 5, 10, 50, 100, 500, 1000];
    for(var i=0;i<roman.length;i++)
        if(r==roman[i])
            return value[i];

          return 0;

         }

});
app.service('productDetails',function ($http) {
    this.getProductDetails=function () {
        var responsedata=[];
    $http.get('http://localhost:63342/CustomizeAdmin/product_details.json').then(function successCallback(response) {
        //console.log(response);
        responsedata.push(response);

    })
        return responsedata;
    }

});