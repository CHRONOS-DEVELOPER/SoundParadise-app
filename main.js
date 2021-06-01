const { app, BrowserWindow, Tray } = require('electron');
app.setAppUserModelId('com.chronosdev.soundParadise');

function createWindow() {
    const appIcon = new Tray(__dirname + '/icons/home_icon.png');
    var mainWindow = new BrowserWindow({
        width: 1024,
        height: 770,
        show: false,
        icon: __dirname + '/icons/home_icon.png'
    });
    mainWindow.loadFile(__dirname + '/src/login.html');
    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
    });
    mainWindow.on('closed', function() {
        mainWindow = null;
    });
    //mainWindow.setMenu(null); //esse comando ativa e desativa o menu de desenvolvedor, para desativar: apague o comentario.
}
app.on('ready', createWindow);