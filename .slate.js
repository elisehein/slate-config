/*
 * Slate config
 * See https://github.com/jigish/slate
 * and https://github.com/jigish/slate/wiki/JavaScript-Configs for js config wiki
 */

// Declare modifier key
// This needs to be pressed before each slate command
var modal = "return,cmd";
function mod (key, options) {
  var keystroke = key + ":" + modal;
  if (options) {
    keystroke = options.extra_mod ? keystroke + "," + options.extra_mod : keystroke;
    keystroke = options.continuous ? keystroke + ":toggle" : keystroke;
  }
  return keystroke;
};
slate.config("modalEscapeKey","esc");

// Define bindings
var bindings = {

  // Organising windows
  pushLeft:       mod("h"),
  pushRight:      mod("l"),
  pushTop:        mod("k"),
  pushBottom:     mod("j"),
  fullscreen:     mod("f"),

  // Resizing windows
  smaller:  mod("-", {continuous: true}),
  larger:   mod("=", {continuous: true}),
  narrower: "h:cmd,alt",
  wider:    "l:cmd,alt",
  shorter:  "k:cmd,alt",
  taller:   "j:cmd,alt",

  // Focusing windows
  focus_right:  "l:cmd",
  focus_left:   "h:cmd",
  focus_up:    "k:cmd",
  focus_down: "j:cmd",

  // Multiple monitors
  throw_laptop: mod("1"),
  throw_left:   mod("2"),
  throw_right:  mod("3")
};

slate.source("~/.slate/register_bindings.js");

// Reload slate
slate.bind(mod("r"), slate.operation("relaunch"));
