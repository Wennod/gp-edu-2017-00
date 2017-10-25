import 'angular';
import 'angular-mocks/angular-mocks';
import '../app';

const testContext = require.context('.', true, /\.spec\.js$/);
testContext.keys().forEach(testContext);

