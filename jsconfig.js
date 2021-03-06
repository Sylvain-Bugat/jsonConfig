var fs = require('fs');

function requireModule(opt) {
  var separator;
  var isWin = /^win/.test(process.platform);
  if(isWin) {
    separator = "\\";
  } else {
    separator = "/";
  } 
  myOpt = opt || {};
  var directory = myOpt.directory || 'config';
  if(directory.indexOf('.') === -1) {
    var fullDirectoryName = process.cwd() + separator + directory;
    var directoryContent = fs.readdirSync(fullDirectoryName);

    if(directoryContent[0]) {
      var config = JSON.parse(fs.readFileSync(fullDirectoryName + separator + directoryContent[0]));
      console.log("Use configuration file : " , fullDirectoryName + separator + directoryContent[0]);
      return config
    } else {

      throw new Error("No configuration file found in " + fullDirectoryName);
    }
  }
}

exports.requireModule = requireModule;