
'use restrict', // It helps developers to write cleaner code.

// LATEST NEWS 
angular.module('borgesApp', [])
.controller('newsCtrl', ['$scope', function($scope){
      $scope.news = [
        {        
        title: 'GBS portal now live!',
        time: '24d ago in',
        timeLink: 'General',
        body: 'The new Global Business Services portal is now live. This effort presents users with a unified web interface for employess to access informationand resources related to HR, IT, and Procurement. Then n'
       },
       {        
        title: 'GBS portal now live!',
        time: '24d ago in',
        timeLink: 'General',
        body: 'The new Global Business Services portal is now live. This effort presents users with a unified web interface for employess to access informationand resources related to HR, IT, and Procurement. Then n'
        }
    ];
}]);

// MY IT TICKET 
angular.module('borgesApp').controller('ticketsCtrl', ['$scope', function($scope){
  $scope.tickets = [
      {        
      name: 'Engineering Laptop - HP ZBook 17 G3 Bundle',
      code: 'REQ0078372',
      time: '13h ago',
     },
     {        
      name: 'Engineering Laptop - HP ZBook 17 G3 Bundle',
      code: 'REQ0078371',
      time: '7d ago',
     },
     {        
      name: '3 requested items',
      code: 'REQ0078333',
      time: '17d ago',
     }
  ];
}]);

// WELCOME INTRO
angular.module('borgesApp')
.controller('welcomeIntroCtrl', ['$scope', function($scope) {
  $scope.welcome = {
    bold: 'Global Business Services'
  };
}])
.directive('helloDirective', function() {
  return {
    template: 'Welcome to<br><strong> {{welcome.bold}}</strong>'// Bigger projects use 'templateUrl' instead. Example: templateUrl: 'example.html'    
  };
});
