const lodashJsDoc = require('./lodash.json');
const { flow, map, pick, filter, keyBy } = require('lodash/fp');

module.exports = () => {
  const docs = flow(
    filter((d) => d.name !== 'undefined'),
    map((d) => pick(['description', 'params', 'name', 'returns'], d)),
    keyBy('name')
  )(lodashJsDoc.docs);


  console.log(docs);

  return docs;
};
