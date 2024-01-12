// 监听主进程和渲染进程进行通信
import { ipcRenderer } from 'electron';
/**
 * electron 提供一个 app 模块，该模块提供了一个 getAppPath() 方法，
 * 用于获取当前应用程序在本机中的目录路径，
 * 但有个问题在于，该 app 模块仅能在主进程中使用，而我们期望在渲染进程中得到此目录路径，只能通过 IPC 进程间通信获取。
 */

export function getAppPath() {
  return new Promise((resolve: (value: string) => void, reject: (value: Error) => void) => {
    ipcRenderer.send('get-root-path', '');
    ipcRenderer.on('reply-root-path', (event, arg: string) => {
      if (arg) {
        resolve(arg);
      } else {
        reject(new Error('项目路径错误'));
      }
    });
  });
}
