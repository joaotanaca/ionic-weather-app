import { AppSettings } from './app-settings';
import { newSpecPage } from '@stencil/core/testing';

describe('app-settings', () => {
  describe('normalization', () => {
    it('returns a blank string if the name is undefined', async () => {
      const { rootInstance } = await newSpecPage({
        components: [AppSettings],
        html: '<app-settings></app-settings>',
      });
      expect(rootInstance.formattedName()).toEqual('');
    });

    it('capitalizes the first letter', async () => {
      const { rootInstance } = await newSpecPage({
        components: [AppSettings],
        html: '<app-settings name="quincy"></app-settings>',
      });
      expect(rootInstance.formattedName()).toEqual('Quincy');
    });

    it('lower-cases the following letters', async () => {
      const { rootInstance } = await newSpecPage({
        components: [AppSettings],
        html: '<app-settings name="JOSEPH"></app-settings>',
      });
      expect(rootInstance.formattedName()).toEqual('Joseph');
    });

    it('handles single letter names', async () => {
      const { rootInstance } = await newSpecPage({
        components: [AppSettings],
        html: '<app-settings name="Q"></app-settings>',
      });
      expect(rootInstance.formattedName()).toEqual('Q');
    });
  });
});
