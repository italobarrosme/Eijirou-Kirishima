const keyValueToString = ([key, value]) => {
  if (typeof value === 'object' && !Array.isArray(value)) {
    throw new Error('Plase check your parameters');
  }
  return `${key}=${value}`;
};

module.exports.queryString = obj =>
  Object.entries(obj).map(keyValueToString).join('&');

module.exports.parse = string =>
  Object.fromEntries(
    string.split('&').map(pair => {
      const [key, value] = pair.split('=');

      if (value.indexOf(',') > -1) {
        return [key, value.split(',')];
      }

      return [key, value];
    }),
  );
