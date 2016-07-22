angular.module('myApp')
  .controller('mainController', mainController)
  .controller('loginController', loginController)
  .controller('logoutController', logoutController)
  .controller('registerController', registerController)
  .controller('arenaController', arenaController)
  .controller('ModalInstanceCtrl', ModalInstanceCtrl)



  mainController.$inject = ['$scope', '$rootScope', '$state', '$uibModal', 'AuthService']
  loginController.$inject = ['$state', 'AuthService']
  logoutController.$inject = ['$state', 'AuthService']
  registerController.$inject = ['$state', 'AuthService']
  arenaController.$inject = ['$state', 'AuthService', '$http', '$scope']
  ModalInstanceCtrl.$inject = ['$scope', '$uibModalInstance']


function ModalInstanceCtrl ($scope, $uibModalInstance, selectedArena) {

  $scope.selectedArena = JSON.parse(localStorage.selectedArena);
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
  vm.title = "the Arena Ctrl"
  $scope.loadData = function () {
    $http.get('/user/arenas')
    .success(function (arenas) {
      vm.arenas = arenass
    })
  }
  $scope.loadData()
  vm.addArena = function (arena) {
    $http.post('/user/' + currentUser._id + '/add-arena', {arenaId: arena._id})
    .success(function (response) {
      currentUser = response.user
      $scope.arenas = response.arenas
      // $state.go('profile')
    })
  }
  vm.selectArena = function(arena) {
    $scope.$parent.main.selectedArena = arena
    localStorage.selectedArena = JSON.stringify(arena)
  }
}

function mainController($scope, $rootScope, $state, $uibModal, AuthService) {
  var vm = this

  $rootScope.$on('$stateChangeStart', function (event) {
    AuthService.getUserStatus()
      .then(function(data){
        vm.currentUser = data.data.user
      })
  })



  // MODAL STUFF:
  vm.open = function () {
    vm.modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      resolve: {
        selectedArena: function () {
          return vm.selectedArena;
        }
      }
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
