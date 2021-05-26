var nativefier = require("nativefier").default;

var _today = new Date();

var version = `${_today.getFullYear().toString().substr(2, 4)}.${
  _today.getMonth() + 1
}.${_today.getDate()}`;

var options = {
  name: "Discord M1",
  targetUrl: "https://discord.com/app",
  version: version,
  out: ".",
  icon: "./static/discord.icns",
  browserwindowOptions:
    '{ "fullscreenable": "true", "simpleFullscreen": "false" }',
  darwinDarkModeSupport: true,
  backgroundColor: "36393f",
  titleBarStyle: "hiddenInset",
  inject: ["./static/discord.css"],
};

nativefier(options, (error, appPath) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log("Electron App has been Built to", appPath);
});
