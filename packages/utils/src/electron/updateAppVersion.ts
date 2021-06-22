import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { dialog } from 'electron';

import { autoUpdater } from 'electron-updater';

import log from 'electron-log';

export default class AppUpdateUtility {
    public autoUpdater;

    constructor() {
        log.transports.file.level = 'info';
        autoUpdater.logger = log;
        this.autoUpdater = autoUpdater;
    }

    public updateAppNow() {
        autoUpdater.checkForUpdatesAndNotify();

        autoUpdater.on('update-downloaded', (event, releaseNotes, releaseName) => {
            const dialogOpts = {
                type: 'info',
                buttons: ['Restart', 'Later'],
                title: 'Application Update',
                message: process.platform === 'win32' ? releaseNotes : releaseName,
                detail: 'A new version has been downloaded. Restart the application to apply the updates.',
            };

            dialog.showMessageBox(dialogOpts).then((returnValue) => {
                if (returnValue.response === 0) autoUpdater.quitAndInstall();
            });
        });

        this.autoUpdater.on('error', (message) => {
            console.error('There was a problem updating the application');
            console.error(message);
        });
    }
}
