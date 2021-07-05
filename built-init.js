const shellJS = require('shelljs');
const fs = require('fs');
const { REPO_BRANCH, REPO_LINK } = require('./constants');
const fsExtra = require('fs-extra');
const URL = REPO_LINK + '.git';
const path = __dirname +  '/src/nb/NativeBase';

try {
  if (fs.existsSync(path)) {
    shellJS.cd(path);
    shellJS.exec('git checkout ' + REPO_BRANCH);
    shellJS.exec('git pull origin ' + REPO_BRANCH);
  }
  else{
    const PARENTFOLDER = __dirname +'/src/nb'; 
    shellJS.cd(PARENTFOLDER);
    shellJS.exec('git clone ' + URL);
  }

  const componentsPath = __dirname + '/src/nb/NativeBase/example/storybook/stories/components';
  const basicComponentsPath = __dirname +'/src/nb/components';
  fs.rmdir(basicComponentsPath, { recursive: true }, (err) => {
    if (err) {
        throw err;
    }
    console.log(`deleted!`);
    fs.mkdir(basicComponentsPath, (err) => {
      if (err) throw err;

      fsExtra.copy(componentsPath, basicComponentsPath, (err) => {
        if(err){
            console.log("Error occurred");
            return;
        }
        console.log('Copy completed');
      });
    })
  });
    
} catch(err) {
  console.error(err)
}