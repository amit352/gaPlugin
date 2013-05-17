(function() {
  var cordovaRef = window.PhoneGap || window.Cordova || window.cordova;

  /**
   * Constructor
   */
  var GAPlugin = function() {
  };

  /**
   * Initialize Google Analytics configuration
   *
   * @param accountId            The Google Analytics account id
   * @param successCallback    The success callback
   * @param failureCallback    The error callback
   */
  GAPlugin.prototype.init = function(accountId, successCallback, failureCallback) {
    return cordova.exec(
        successCallback,
        failureCallback,
        'GAPlugin',
        'init',
        [accountId]);
  };

  /**
   * Track an event on Google Analytics
   * @param category            The name that you supply as a way to group objects that you want to track
   * @param action            The name the type of event or interaction you want to track for a particular web object
   * @param label                Provides additional information for events that you want to track (optional)
   * @param value                Assign a numerical value to a tracked page object (optional)

   * @param successCallback    The success callback
   * @param failureCallback    The error callback
   */

  GAPlugin.prototype.sendEvent = function(category, action, label, value, successCallback, failureCallback) {
    return cordova.exec(
        successCallback,
        failureCallback,
        'GAPlugin',
        'sendEvent',
        [
          category,
          action,
          typeof label === "undefined" ? "" : label,
          (isNaN(parseInt(value, 10))) ? 0 : parseInt(value, 10)
        ]);
  };

  /**
   * Manually dispatch events on Google Analytics Account
   *
   * @param successCallback    The success callback
   * @param failureCallback    The error callback
   */

  GAPlugin.prototype.dispatch = function(successCallback, failureCallback) {
    return cordova.exec(
        successCallback,
        failureCallback,
        'GAPlugin',
        'dispatch',
        []);
  };

  /**
   * Load Analytics
   */

  GAPlugin.install = function() {
    if (!window.plugins) {
      window.plugins = {};
    }
    if (!window.plugins.GoogleAnalytics) {
      window.plugins.GoogleAnalytics = new GAPlugin();
    }
  };

  if (cordovaRef) {
    GAPlugin.install();
  }
  else {
    console.log("Google Analytics Plugin could not be installed.");
    return null;
  }
})();