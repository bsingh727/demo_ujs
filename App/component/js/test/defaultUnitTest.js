//test case checking password strength
describe('pwc',function() {
    beforeEach(module('phApp'));

    var $controller;

    beforeEach(inject(function (_$controller_) {
        //inject controller
        $controller = _$controller_;
    }));
    describe('$scope.checkPassword', function () {
        it('password is strong', function () {
            var $scope = {};
            var controller = $controller('pwc', {$scope: $scope});
            $scope.password = 'kaatoo@sssgk';
            $scope.checkPassword();
            expect($scope.strength).toEqual('strong');
        });
        it('password is medium', function () {
            var $scope = {};
            var controller = $controller('pwc', {$scope: $scope});
            $scope.password = 'kaato';
            $scope.checkPassword();
            expect($scope.strength).toEqual('medium');
        });
        it('password is weak', function () {
            var $scope = {};
            var controller = $controller('pwc', {$scope: $scope});
            $scope.password = 'ka';
            $scope.checkPassword();
            expect($scope.strength).toEqual('weak');
        });
    });
    describe('Equal Number',function () {
    it('should be equal',function () {
        var a=4;
        expect(a).toBe('4');

     });
    });
    describe('productDetails',function () {
        var $httpBackend;
        beforeEach(inject(function($injector) {
            $httpBackend = $injector.get('$httpBackend');
        }));
        it('should demonstrate using when (200 status)', inject(function($http) {

            var $scope = {};

            /* Code Under Test */
            $http.get('http://localhost:63342/CustomizeAdmin/product_details.json')
                .success(function(data, status, headers, config) {
                    $scope.valid = true;
                    $scope.response = data;
                })
                .error(function(data, status, headers, config) {
                    $scope.valid = false;
                });
            /* End */
            $httpBackend
                .when('http://localhost:63342/CustomizeAdmin/product_details.json')
                .respond(200, {"Data":[{"id":128282,"pd_name":"sumsungZ3"}]});
            $httpBackend.flush();
            expect($scope.valid).toBe(true);
            expect($scope.response).toEqual({"Data":[{"id":128282,"pd_name":"sumsungZ3"}]}
            );

        }));
    })
});
