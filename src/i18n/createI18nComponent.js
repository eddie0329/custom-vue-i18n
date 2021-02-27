import Vue from 'vue';
import Translator from './Translator';

const i18nFactory = (...args) => {
  const translator = new Translator('kr')._getJsonFile(...args);
  return Vue.component('i18n', {
    created() {
      this._i18n = translator._getInternationals();
    },
    provide() {
      const i18n = {};
      Object.defineProperty(i18n, 'i18n', {
        enumerable: true,
        get: () => this._i18n
      });
      return { i18n };
    },
    data: () => ({
      _i18n: null
    }),
    render: function(h) {
      return h('div', [this.$slots.default]);
    }
  });
};

export default i18nFactory;
