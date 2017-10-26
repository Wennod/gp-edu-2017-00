describe('blurDirective', () => {
    angular.mock.module.sharedInjector();
    beforeAll(angular.mock.module('msmApp'));
    beforeAll(angular.mock.inject(($rootScope, $compile) => {
        suit = {};
        suit.scope = $rootScope.$new();
        suit.element = angular.element('<form name="form">' + '<input ng-model="val" onblur-formatter name="input" >' + '</form>');
        suit.element = $compile(suit.element)(suit.scope);
        form = suit.scope.form;
        suit.scope.$digest();
    }));
    it('should format viewValue on blur into a comma delimited numeric string', () => {
        form.input.$setViewValue('123123');
        angular.element(suit.element[0][0]).triggerHandler('blur');
        expect(form.input.$viewValue).toEqual('123,123');
    });
    it('it should format viewValue into non delimited numeric string', () => {
        form.input.$setViewValue('123123');
        angular.element(suit.element[0][0]).triggerHandler('blur');
        angular.element(suit.element[0][0]).triggerHandler('focus');
        expect(form.input.$viewValue).toEqual('123123');
    });
});