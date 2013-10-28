// Load operations
slate.source("~/.slate/operations.js");

// Register keybindings
_.each(bindings, function(keystroke, operation) {
  slate.bind(keystroke, function(win) {
    win.doOperation(operations[operation]);    
  });
});
