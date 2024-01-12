// https://nodejs.cn/api/v16/fs.html\
import fs, { promises as fsPromiseAPIs } from 'fs';

const fileAction = {
  // 增， 改
  write: ({ path, content, encoding }: { path: string; content: string; encoding?: BufferEncoding }): Promise<void> => {
    return fsPromiseAPIs.writeFile(path, content, { encoding: encoding || 'utf-8' });
  },
  // 删
  delete: (path: string) => fsPromiseAPIs.unlink(path),
  // 查
  read: (path: string, encoding?: BufferEncoding): Promise<string> => {
    return fsPromiseAPIs.readFile(path, { encoding: encoding || 'utf8' });
  },
  rename: (oldPath: string, newPath: string) => {
    return fsPromiseAPIs.rename(oldPath, newPath);
  },
  hasFile: (path: string) => {
    return fsPromiseAPIs.access(path, fs.constants.F_OK);
  },
  canWrite: (path: string) => {
    return fsPromiseAPIs.access(path, fs.constants.W_OK);
  },
  canRead: (path: string) => {
    return fsPromiseAPIs.access(path, fs.constants.R_OK);
  },
};

export default fileAction;
