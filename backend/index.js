const {app,BrowserWindow}=require('electron');
const url=require('url');
const path=require('path');
function createMainWindow(){
    const mainWindow= new BrowserWindow({
        title:'Electron',
        width:1000,
        height:600,
        webPreferences:{
            nodeIntegration:true
        }
    });
    const startUrl=url.format(
        {
            pathname:path.join(__dirname,'main.html'),
            protocol:'file'
        }
    );
    //mainWindow.loadFile("main.html");
    mainWindow.loadURL("http://localhost:3000/");
}
app.whenReady().then(createMainWindow);