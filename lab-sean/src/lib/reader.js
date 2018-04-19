'use strict';

const fs = require('fs');
const logger = require('./logger');

const fileReader = module.exports = {};
fileReader.readFirstCharacterAsync = (filePath, callback) => {
  logger.log(logger.VERBOSE, `Reading ${filePath}`);

  return fs.readFile(filePath, (error, fileBuffer) => { 
    if (error) {
      throw error;
    }
    return callback(fileBuffer.toString('utf8', 0));
  }); 
};
