export default function($httpProvider, $locationProvider, pptProvider) {
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