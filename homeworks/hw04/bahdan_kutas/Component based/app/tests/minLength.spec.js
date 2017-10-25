describe('minLengthDirective', () => {
    angular.mock.module.sharedInjector();
    let suit = {};
    beforeAll(angular.mock.module('msmApp'));
    beforeAll(angular.mock.inject(($rootScope, $compile) => {
        suit.scope = $rootScope.$new();
        suit.element = angular.element('<form name="form">' + '<input ng-model="val" min-length-validator="2" name="input" >' + '</form>');
        suit.element = $compile(suit.element)(suit.scope);
        form = suit.scope.form;
        suit.scope.$digest();
    }));
    it('length eq 2 should be ok', () => {
        form.input.$setViewValue('12');
        expect(form.input.$valid).toEqual(true);
    });
    it('length eq 1 should be false', () => {
        form.input.$setViewValue('1');
        expect(form.input.$valid).toEqual(false);
    });
});