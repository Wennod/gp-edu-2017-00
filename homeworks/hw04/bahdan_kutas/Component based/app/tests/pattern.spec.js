describe('patternDirective', () => {
    angular.mock.module.sharedInjector();
    let suit = {};
    beforeAll(angular.mock.module('msmApp'));
    beforeAll(angular.mock.inject(($rootScope, $compile) => {
        suit.scope = $rootScope.$new();
        suit.element = angular.element('<form name="form">' + '<input ng-model="val" pattern-validator name="input" >' + '</form>');
        suit.element = $compile(suit.element)(suit.scope);
        form = suit.scope.form;
        suit.scope.$digest();
    }));
    it('value eq numeric string to be true', () => {
        form.input.$setViewValue('100000');
        expect(form.input.$valid).toEqual(true);
    });
    it('value eq comma delimited numeric string to be true', () => {
        form.input.$setViewValue('100,000');
        expect(form.input.$valid).toEqual(true);
    });
    it('value eq non-comma delimited numeric string to be true', () => {
        form.input.$setViewValue('100/000');
        expect(form.input.$valid).toEqual(false);
    });
    it('value eq non-numeric string to be false', () => {
        form.input.$setViewValue('string');
        expect(form.input.$valid).toEqual(false);        
    });
});