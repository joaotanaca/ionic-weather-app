import { newE2EPage } from '@stencil/core/testing';

describe('app-settings', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-settings></app-settings>');

    const element = await page.find('app-settings');
    expect(element).toHaveClass('hydrated');
  });

  it('displays the specified name', async () => {
    const page = await newE2EPage({ url: '/profile/joseph' });

    const element = await page.find('app-settings ion-content p');
    expect(element.textContent).toContain('My name is Joseph.');
  });
});
