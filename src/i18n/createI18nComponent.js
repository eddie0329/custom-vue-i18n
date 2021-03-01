import Vue from "vue";
import { mapState } from "vuex";
import Translator from "./Translator";

const i18nFactory = (...args) => {
  return Vue.component("i18n", {
    created() {
      this._i18n = new Translator(this.language)
        .getJsonFile(...args)
        .getInternationals();
    },
    provide() {
      const i18n = {};
      Object.defineProperty(i18n, "i18n", {
        enumerable: true,
        get: () => this._i18n,
      });
      return { i18n };
    },
    data: () => ({
      _i18n: null,
    }),
    computed: {
      ...mapState(["language"]),
    },
    render: function(h) {
      return h("div", [this.$slots.default]);
    },
  });
};

export default i18nFactory;
