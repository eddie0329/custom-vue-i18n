import I18nErrors, { errorTypes } from '../../src/i18n/I18nErrors';

describe('i18n errors test', () => {
  describe('not found test', () => {
    it('test1', () => {
      try {
        throw new I18nErrors(errorTypes.NOT_FOUND);
      } catch (error) {
        expect(error.message).toEqual(
          'i18n error: require validate filename: '
        );
      }
    });

    it('test2', () => {
      try {
        throw new I18nErrors(errorTypes.NOT_FOUND, '123');
      } catch (error) {
        expect(error.message).toEqual(
          'i18n error: require validate filename: 123'
        );
      }
    });
  });

  describe('non string test', () => {
    it('test1', () => {
      try {
        throw new I18nErrors(errorTypes.NON_STRING);
      } catch (error) {
        expect(error.message).toEqual(
          'i18n error: require string for filename.'
        );
      }
    });
  });

  describe('no lang test', () => {
    it('test1', () => {
      try {
        throw new I18nErrors(errorTypes.NO_LANG);
      } catch (error) {
        expect(error.message).toEqual('i18n error: require language.');
      }
    });
  });

  describe('no json test', () => {
    it('test1', () => {
      try {
        throw new I18nErrors(errorTypes.NO_JSON);
      } catch (error) {
        expect(error.message).toEqual('i18n error: require json file.');
      }
    });
  });
});
