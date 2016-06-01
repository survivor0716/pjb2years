(function() {
  'use strict';

  angular
    .module('paymewDistributor')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
