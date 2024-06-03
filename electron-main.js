const { app, BrowserWindow } = require('electron');
const childProcess = require('child_process');
const path = require("path");

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: false,
        },
    });

    win.loadFile(path.join(__dirname, "build", "index.html")); // Replace with your React app URL
    // win.loadURL('http://localhost:3000'); // Replace with your React app URL

    // Open the DevTools (optional)
    win.webContents.openDevTools();

    // Run Spring Boot backend when Electron app is ready
    win.webContents.on('did-finish-load', () => {
        // startSpringBootBackend();
    });

}

function startSpringBootBackend() {
    // Command to run the Spring Boot JAR file
    const command = 'java -jar rms-backend-1.0.0.jar';

    // Execute the command
    const backendProcess = childProcess.exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error starting Spring Boot backend: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });

    backendProcess.on('exit', (code) => {
        console.log(`Spring Boot backend process exited with code ${code}`);
    });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});