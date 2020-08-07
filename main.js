const { app, BrowserWindow } = require("electron");

var path = require('path');
let win;

function createWindows() {
    win = new BrowserWindow({ 
        width: 1280
        , height: 800
        // , icon: path.join(__dirname, 'assets/icons/win/gmail-icon.png')
        // , icon: 'gmail-icon.png'
    });
    win.loadURL(`https://mail.google.com/a/hist.co.kr`);
    win.on("closed", () => { win = null; });

    win.setIcon(path.join(__dirname, '/assets/icons/png/gmail-icon.png'));
}

app.on("ready", createWindows);
app.on("windows-all-closed", () => {
    if(process.platform !== "darwin") {
        app.quit();
    }
});
app.on("active", () => {
    if(win === null) {
        createWindows();
    }
});
