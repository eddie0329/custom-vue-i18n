import _reduce from "lodash/reduce";
import I18nErrors, { errorTypes } from "./I18nErrors";

export default class Translator {
  constructor(lang) {
    if (!lang) throw new I18nErrors(errorTypes.NO_LANG);
    this._lang = lang;
    this._internationals = {};
    return this;
  }

  parseLang(jsonFile) {
    if (!jsonFile) throw new I18nErrors(errorTypes.NO_JSON);
    this._internationals = Object.assign(
      _reduce(
        jsonFile,
        (result, value, key) => {
          if (/{*}/.test(value[this._lang])) {
            result[key] = (opts) => {
              let template = value[this._lang];
              for (let key in opts) {
                template = template.replace(
                  new RegExp("\\$\\{" + key + "\\}", "g"),
                  opts[key]
                );
              }
              return template;
            };
            return result;
          }
          result[key] = value[this._lang];
          return result;
        },
        {}
      ),
      this._internationals
    );
    return this;
  }

  getJsonFile(...args) {
    args.forEach((file) => {
      this.parseLang(file);
    });
    return this;
  }

  getInternationals() {
    return this._internationals;
  }
}
