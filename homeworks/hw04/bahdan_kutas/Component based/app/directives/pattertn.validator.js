const patternValidator = () => ({
    restrict: 'A',
    require: 'ngModel',
    link: (scope, element, attr, ngModel) => {
        const defaultPattern = /^\d+$/;
        ngModel.$validators.patternValidator = (modelValue, viewValue) => {
            if (ngModel.$pristine) {
                return true;
            } else if (attr.patternValidator) {
                return new RegExp(attr.patternValidator.slice(1, attr.patternValidator.length - 1)).test(viewValue);
            } return defaultPattern.test(viewValue);
        };
    },
});

export default patternValidator;
