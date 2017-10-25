describe('rangeDirective', () => {
    angular.mock.module.sharedInjector();
    let suit = {};
    beforeAll(angular.mock.module('msmApp'));
    beforeAll(angular.mock.inject(($rootScope, $compile) => {
        suit.scope = $rootScope.$new();
        suit.element = angular.element('<form name="form">' + '<input ng-model="val" range-validator="10;5000" name="input" >' + '</form>');
        suit.element = $compile(suit.element)(suit.scope);
        form = suit.scope.form;
        suit.scope.$digest();
    }));
    it('value eq 9 to be false', () => {
        form.input.$setViewValue('9');
        expect(form.input.$valid).toEqual(false);
    });
    it('value eq 6000 to be false', () => {
        form.input.$setViewValue('6000');
        expect(form.input.$valid).toEqual(false);
    });
    it('value eq 10 to be true', () => {
        form.input.$setViewValue('10');
        expect(form.input.$valid).toEqual(true);
    });
    it('value eq 5000 to be true', () => {
        form.input.$setViewValue('5000');
        expect(form.input.$valid).toEqual(true);
    });
});