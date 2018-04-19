'use strict';

const logger = require('./logger');
const reader = require('./reader');

const document1Path = `${__dirname}/../assets/document1.txt`;
const document2Path = `${__dirname}/../assets/document2.txt`;
const document3Path = `${__dirname}/../assets/document3.txt`;
const solution = [];

const printCharacters = (characters) => {
  solution.push(`\n${characters}\n`);
};
const files = [document1Path, document2Path, document3Path]; 

const readFileArrayAsync = (fileArray, currentIndex, callback) => {
  if (currentIndex >= fileArray.length) {
    return callback();
  }
  const currentFilePath = fileArray[currentIndex];
  try {
    return reader.readFirstCharacterAsync(currentFilePath, (file) => {
      printCharacters(file);
      return readFileArrayAsync(fileArray, currentIndex + 1, callback);
    });
  } catch (error) {
    logger.log(logger.ERROR, error);
  }
  return undefined;
};
readFileArrayAsync(files, 0, () => {
  logger.log(logger.INFO, `[${solution}]`);
  return solution;
});
