const ROUTER_URL = {
  root: '/',
  resume: '/resume',
};

export default ROUTER_URL;

export const ROUTER_KEY = {
  root: 'root',
  resume: 'resume',
};

export const ROUTER_ENTRY: TSRouter.Item[] = [
  { url: 'https://github.com/kunGlad/electron-biographical-notes', key: 'intro', text: '介绍' },
  { url: ROUTER_URL.resume, key: ROUTER_KEY.resume, text: '简历' },
  { url: 'https://github.com/kunGlad/electron-biographical-notes', key: 'code', text: '源码' },
];
