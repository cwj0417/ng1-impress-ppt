<<<<<<< HEAD
export default function($httpProvider, $locationProvider, pptProvider) {
=======
export default function($stateProvider, $httpProvider, $locationProvider, pptProvider) {
>>>>>>> 63a127c2519aa4394b697f666afcad8a9dab5838
    'ngInject';


    "undefined" == typeof window.history || ($locationProvider.html5Mode(!1), $locationProvider.hashPrefix("!"));


    $httpProvider.interceptors.push(($q) => {
        return {
            request: config => config,
            response: response => response,
            responseError: rejection => rejection
        };
    });

    pptProvider.target('ppt');
};