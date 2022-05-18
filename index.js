const path = require('path');
const url = require('url');
const {app, BrowserWindow} = require('electron');

let win;

function createWindow() {
    win = new BrowserWindow({
        width:700,
        height: 550,
        titleBarStyle: 'hiddenInset',
        icon: __dirname + "/img//",

    });
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));
    // win.webContents.openDevTools();

    win.on('closed', () => {
        win = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    app.quit();
});


// var AutoLaunch = require('auto-launch');
// var autoLauncher = new AutoLaunch({
//     name: "sra",
//     path: '/Applications/sra.app'
// });
// // Checking if autoLaunch is enabled, if not then enabling it.
// autoLauncher.isEnabled().then(function(isEnabled) {
//   if (isEnabled) return;
//    autoLauncher.enable();
// }).catch(function (err) {
//   throw err;
// });


 