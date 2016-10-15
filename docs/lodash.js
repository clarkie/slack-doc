const lodashJsDoc = require('./lodash.json');
const { flow, map, pick, filter, keyBy, mapValues } = require('lodash/fp');

const convertToString = ({ name, description, params, returns }) =>
`${name}

${description}
`;

module.exports = () => {
  const docs = flow(
    filter((d) => d.name !== 'undefined'),
    map((d) => pick(['description', 'params', 'name', 'returns', 'examples'], d)),
    keyBy('name'),
    mapValues(convertToString)
  )(lodashJsDoc.docs);


  console.log(docs);

  return docs;
};
