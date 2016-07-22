angular.module('myApp')
  .controller('mainController', mainController)
  .controller('loginController', loginController)
  .controller('logoutController', logoutController)
  .controller('registerController', registerController)
  .controller('arenaController', arenaController)
  .controller('ModalInstanceCtrl', ModalInstanceCtrl)
  // .controller('ModalDemoCtrl', ModalDemoCtrl)


  mainController.$inject = ['$scope', '$rootScope', '$state', '$uibModal', 'AuthService']
  loginController.$inject = ['$state', 'AuthService']
  logoutController.$inject = ['$state', 'AuthService']
  registerController.$inject = ['$state', 'AuthService']
  arenaController.$inject = ['$state', 'AuthService', '$http', '$scope']
  // ModalDemoCtrl.$inject = ['$scope', '$uibModal', '$log']
  ModalInstanceCtrl.$inject = ['$scope', '$uibModalInstance']

// function ModalDemoCtrl($scope, $uibModal, $log) {
//   var vm = this
//   vm.animationsEnabled = true;
//
//   vm.open = function (size) {
//
//     console.log("Clicked...")
//
//     var modalInstance = $uibModal.open({
//       animation: true,
//       templateUrl: 'myModalContent.html',
//       controller: 'ModalInstanceCtrl',
//       size: size,
//       resolve: {
//         items: function () {
//           return $scope.items;
//         }
//       }
//     });
//
//     modalInstance.result.then(function (selectedItem) {
//       $scope.selected = selectedItem;
//     }, function () {
//       $log.info('Modal dismissed at: ' + new Date());
//     });
//   };
//
//   vm.toggleAnimation = function () {
//     $scope.animationsEnabled = !$scope.animationsEnabled;
//   };
// };

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

function ModalInstanceCtrl ($scope, $uibModalInstance, selectedArena) {

  $scope.selectedArena = JSON.parse(localStorage.selectedArena);
  // console.log("Selected Arena From Modal Instance Ctrl:")
  // console.log($scope.selectedArena)
  console.log();
  // $scope.selected = {
  //   item: $scope.items[0]
  // };
  $scope.ok = function () {
    $uibModalInstance.close($scope.selected.selectedArena);
  };
  $scope.cancel = function () {
    console.log("Closing the modal :)");
    $uibModalInstance.close();
  };
};


function arenaController($state, AuthService, $http, $scope) {
  var vm = this
  var currentUser = $scope.$parent.main.currentUser
  console.log(currentUser.arenas)
  console.log($scope)
  vm.title = "the Arena Ctrl"
    $http.get('/user/arenas')
    .success(function (arenas) {
      vm.arenas = arenas
      console.log(vm.arenas[0]);
    })
  vm.addArena = function (arena) {
    console.log("lets add arena");
    console.log(arena);
    // use $http to post arena to user
    $http.post('/user/' + currentUser._id + '/add-arena', {arenaId: arena._id})
    .success(function (response) {
      console.log(response);
      currentUser = response.user
    })
  }

  vm.makeUrl = function(name) {
    return 'http://' + name + 'nhl.com'
  }

  vm.selectArena = function(arena) {
    $scope.$parent.main.selectedArena = arena
    localStorage.selectedArena = JSON.stringify(arena)
  }
}

function mainController($scope, $rootScope, $state, $uibModal, AuthService) {
  var vm = this
  vm.testString = "Testing 123"

  $rootScope.$on('$stateChangeStart', function (event) {
    // console.log("Changing states")
    AuthService.getUserStatus()
      .then(function(data){
        vm.currentUser = data.data.user
      })
  })



  // MODAL STUFF:
  vm.open = function () {
    console.log("Clicked...")
    console.log("Selected Arena:", vm.selectedArena);

    vm.modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      // bindToController: true,
      resolve: {
        selectedArena: function () {
          return vm.selectedArena;
        }
      }
    });

    vm.modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

}

// LOGIN CONTROLLER:
function loginController($state, AuthService) {
  var vm = this
  vm.login = function () {

    // initial values
    vm.error = false
    vm.disabled = true

    // call login from service
    AuthService.login(vm.loginForm.username, vm.loginForm.password)
      // handle success
      .then(function () {
        console.log("Successful login...")

        // set up a route on the backend, like '/user/get-full-user', that simply searches the database for the currently logged in user, populates the arenas array and res.json() with that populated user.
        // then, set vm.currentUser here to the response you get back.
        $state.go('home')
        vm.disabled = false
        vm.loginForm = {}
      })
      // handle error
      .catch(function () {
        console.log("Whoops...")
        vm.error = true
        vm.errorMessage = "Invalid username and/or password"
        vm.disabled = false
        vm.loginForm = {}
      })
  }
}


// LOGOUT CONTROLLER:
function logoutController($state, AuthService) {
  var vm = this
  vm.logout = function () {

    // call logout from service
    AuthService.logout()
      .then(function () {
        $state.go('login')
      })
  }
}

// REGISTER CONTROLLER:
function registerController($state, AuthService) {
  var vm = this
  vm.register = function () {

    // initial values
    vm.error = false
    vm.disabled = true

    // call register from service
    AuthService.register(vm.registerForm.username, vm.registerForm.password)
      // handle success
      .then(function () {
        $state.go('profile')
        vm.disabled = false
        vm.registerForm = {}
      })
      // handle error
      .catch(function () {
        vm.error = true
        vm.errorMessage = "Something went wrong!"
        vm.disabled = false
        vm.registerForm = {}
      })
  }
}
