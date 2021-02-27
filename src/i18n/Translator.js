import _reduce from 'lodash/reduce';
import I18nErrors, { errorTypes } from './I18nErrors';

export default class Translator {
  constructor(lang) {
    if (!lang) throw new I18nErrors(errorTypes.NO_LANG);
    this.lang = lang;
    this.internationals = {};
    return this;
  }

  _parseLang(jsonFile) {
    if (!jsonFile) throw new I18nErrors(errorTypes.NO_JSON);
    this.internationals = Object.assign(
      _reduce(
        jsonFile,
        (result, value, key) => {
          if (/{*}/.test(value[this.lang])) {
            result[key] = opts => {
              let template = value[this.lang];
              for (let key in opts) {
                template = template.replace(
                  new RegExp('\\$\\{' + key + '\\}', 'g'),
                  opts[key]
                );
              }
              return template;
            };
            return result;
          }
          result[key] = value[this.lang];
          return result;
        },
        {}
      ),
      this.internationals
    );
    return this;
  }

  _getJsonFile(...args) {
    args.forEach(file => {
      this._parseLang(file);
    });
    return this;
  }

  _getInternationals() {
    return this.internationals;
  }
}
