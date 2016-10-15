const lodashJsDoc = require('./lodash.json');
const { flow, map, pick, filter, keyBy, mapValues, identity, update } = require('lodash/fp');

const convertParamToString = ({
  type: { names },
  optional = false,
  description = '',
  name = '',
  defaultvalue = null,
}) => {
  const defaultValueString = defaultvalue ? `=${defaultvalue}` : '';
  const optionalTransform = optional ? str => `[${str}]` : identity;
  const typeNames = names.join(', ');
  return optionalTransform(`${name}${defaultValueString}`) + ` (${typeNames}): ${description}`;
};

const convertToString = ({ name, description, params, returns }) =>
`${name}

${description}

*Params*
${params.join('\n')}

*Returns*
${returns.join('\n')}
`;

module.exports = () => {
  const docs = flow(
    filter((d) => d.name !== 'undefined'),
    map((d) => pick(['description', 'params', 'name', 'returns', 'examples'], d)),
    keyBy('name'),
    mapValues(flow(
      update('returns', map(convertParamToString)),
      update('params', map(convertParamToString)),
      convertToString
    ))
  )(lodashJsDoc.docs);


  console.log(docs);

  return docs;
};
