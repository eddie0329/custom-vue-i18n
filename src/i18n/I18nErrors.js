export const errorTypes = {
  NON_STRING: 'NON_STRING',
  NOT_FOUND: 'NOT_FOUND',
  NO_LANG: 'NO_LANG',
  NO_JSON: 'NO_JSON'
};

const errorMsgs = {
  NON_STRING: () => 'require string for filename.',
  NOT_FOUND: (filename = '') => `require validate filename: ${filename}`,
  NO_LANG: () => 'require language.',
  NO_JSON: () => 'require json file.'
};

export default class I18nErrors extends Error {
  constructor(type, filename = '') {
    super(`i18n error: ${errorMsgs[type](filename)}`);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, I18nErrors);
    }
    return this;
  }
}
