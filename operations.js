var operations = {

  // Window operations
  pushLeft: slate.operation("push", {
    direction: "left",
    style: "bar-resize:screenSizeX/2"
  }),
  pushRight: slate.operation("push", {
    direction: "right",
    style: "bar-resize:screenSizeX/2"
  }),
  pushTop: slate.operation("push", {
    direction : "top",
    style : "bar-resize:screenSizeY/2"
  }),
  pushBottom: slate.operation("push", {
    direction: "bottom",
    style: "bar-resize:screenSizeY/2"
  }),
  fullscreen: slate.operation("move", {
    x: "screenOriginX",
    y: "screenOriginY",
    width: "screenSizeX",
    height: "screenSizeY"
  }),

  // Resizing windows
  smaller: slate.operation("resize", {
    width: "-10%",
    height: "-10%",
    anchor: "top-left"
  }),
  larger: slate.operation("resize", {
    width: "+10%",
    height: "+10%",
    anchor: "top-left"
  }),
  narrower: slate.operation("resize", {
    width: "-10%",
    height: "+0",
    anchor: "top-left"
  }),
  wider: slate.operation("resize", {
    width: "+10%",
    height: "+0",
    anchor: "bottom-left"
  }),
  shorter: slate.operation("resize", {
    height: "-10%",
    width: "+0",
    anchor: "top-left"
  }),
  taller: slate.operation("resize", {
    height: "+10%",
    width: "+0",
    anchor: "top-left"
  }),

  // Focusing windows
  focus_right: slate.operation("focus", {
    direction: "right"
  }),
  focus_left: slate.operation("focus", {
    direction: "left",
  }),
  focus_up: slate.operation("focus", {
    direction: "up"
  }),
  focus_down: slate.operation("focus", {
    direction: "down",
  }),

  // Multiple monitors
  throw_laptop: slate.operation("throw", {
    "screen" : "1",
    "width" : "screenSizeX",
    "height" : "screenSizeY"
  }),
  throw_left: slate.operation("throw", {
    "screen" : "0",
    "width" : "screenSizeX",
    "height" : "screenSizeY"
  }),
  throw_right: slate.operation("throw", {
    "screen" : "2",
    "width" : "screenSizeX",
    "height" : "screenSizeY"
  })

};
