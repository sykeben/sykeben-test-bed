// Requires:
const util = require('util')

// Define leaders.
var leaders = []
leaders["blank"] =   "          "
leaders["message"] = "[MESSAGE] "
leaders["status"] =  "[STATUS]  "
leaders["error"] =   "[ERROR]   "
leaders["fatal"] =   "[FATAL]   "

// Internal custom log maker.
function custom(type, message) {
  if (!util.isUndefined(leaders[type])) {
    console.log(leaders[type] + message)
  } else {
    console.log(leaders["blank"] + message)
  }
}

// Define exports.
module.exports = {

  // Custom log maker.
  custom: function(type, message) {
    custom(type, message)
    return
  },

  // Message log maker.
  message: function(message) {
    custom("message", message)
    return
  },

  // Blank log maker.
  blank: function(message) {
    custom("blank", message)
    return
  },

  // Status log maker.
  status: function(message) {
    custom("status", message)
    return
  },

  // Error log maker.
  error: function(message) {
    custom("error", message)
    return
  },

  // Fatal log maker.
  fatal: function(message) {
    custom("fatal", message)
    return
  }
}