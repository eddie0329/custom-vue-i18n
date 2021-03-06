import Translator from "../../src/i18n/Translator";
import commonFile from "../../src/lang/common.json";
import userFile from "../../src/lang/user.json";

describe("Mediator test", () => {
  let translator;

  beforeEach(() => {
    translator = new Translator("en");
  });

  describe("_getJsonFile & _getInternationals test", () => {
    it("test1", () => {
      const toBe = {
        HEADER: "LVUP X LOL",
      };
      expect(
        translator.getJsonFile(commonFile).getInternationals()
      ).toMatchObject(toBe);
    });
  });

  describe("_getJsonFile for template test", () => {
    it("test1", () => {
      const toBe = `Hello! eddie`;
      expect(
        translator
          .getJsonFile(userFile)
          .getInternationals()
          .GREETING_USER({ username: "eddie" })
      ).toBe(toBe);
    });
  });
});
