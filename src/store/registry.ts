import { debug } from 'util';

//All the context objects will help in retrieving the files
const vueComponentsContext =		require.context('../../src/', true, /.*.vue$/);
const styleGuideComponentsContext = require.context(`../components/StyleGuide/`, true, /\.vue$/);
const mixifierHtmlFilesContext =	require.context(`../mixifier/`, true, /\.html$/);
const rawHtmlFilesContext =			require.context('!!raw-loader!../../src/', true, /.*.html$/);
const rawVueFilesContext =			require.context('!!raw-loader!../../src/', true, /.*.vue$/);

//Hashes to hold the actual information from the contexts' above
const vueComponents: any = vueComponentsContext.keys().map(vueComponentsContext);
const rawHtmlFiles: any = rawHtmlFilesContext.keys().map(rawHtmlFilesContext);
const rawVueFiles = rawVueFilesContext.keys().map(rawVueFilesContext);


const componentsHtmlFileHash = new Map<string, string>();



for (let i = 0; i < vueComponents.length; i++) {
  vueComponents[i].source = rawVueFiles[i];
}


mixifierHtmlFilesContext.keys().forEach((key: string, index: number) => {
  const path = key.replace(/(\.\/|\.html)/g, '');
  const file = path.substr(path.indexOf('/') + 1, path.length);
  componentsHtmlFileHash.set(file, rawHtmlFiles[index]);
});


function getHtmlSingleFile(name: string) {
  for (const c of rawHtmlFiles) {
    if (c.name === name) {
      return c;
    }
  }
}

function buildHtmlSingleFiles() {
  const hash = new Map<string, string[]>();
  // Loading file names from a folder
  mixifierHtmlFilesContext.keys().forEach((key: string, index: number) => {
    const path = key.replace(/(\.\/|\.html)/g, '');
    const folder = path.substr(0, path.indexOf('/'));
    const file = path.substr(path.indexOf('/') + 1, path.length);

    const currentFolder = hash.get(folder);
    if (!currentFolder) {
      hash.set(folder, new Array<string>());
    }
    currentFolder!.push(file);
  });
  return hash;
}

function buildRegistry() {
  const hash = new Map<string, string[]>();
  // Loading file names from a folder
  styleGuideComponentsContext.keys().forEach((key: string) => {
    const path = key.replace(/(\.\/|\.vue)/g, '');
    const folder = path.substr(0, path.indexOf('/'));
    const file = path.substr(path.indexOf('/') + 1, path.length);

    let currentFolder = hash.get(folder);
    if (!currentFolder) {
      hash.set(folder, new Array<string>());
      currentFolder = hash.get(folder);
    }

    currentFolder!.push(file);
  });
  return hash;
}

const componentsHash = buildRegistry();
console.log('Component Hash', componentsHash);



export default {
  vueComponents,
  rawHtmlFiles,
  componentsHtmlFileHash,
  buildRegistry,
  buildHtmlSingleFiles,
  componentsHash,
};
