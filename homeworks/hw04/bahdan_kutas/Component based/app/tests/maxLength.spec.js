describe('maxLengthDirective', () => {
    angular.mock.module.sharedInjector();
    let suit = {};
    beforeAll(angular.mock.module('msmApp'));
    beforeAll(angular.mock.inject(($rootScope, $compile) => {
        suit.scope = $rootScope.$new();
        suit.element = angular.element('<form name="form">' + '<input ng-model="val" max-length-validator="8" name="input" >' + '</form>');
        suit.element = $compile(suit.element)(suit.scope);
        form = suit.scope.form;
        suit.scope.$digest();
    }));
    it('length eq 7 should be ok', () => {
        form.input.$setViewValue('1234567');
        expect(form.input.$valid).toEqual(true);
    });
    it('length eq 8 should be ok', () => {
        form.input.$setViewValue('12345678');
        expect(form.input.$valid).toEqual(true);        
    });
    it('length eq 9 should be false', () => {
        form.input.$setViewValue('123456789');
        expect(form.input.$valid).toEqual(false);        
    });
});