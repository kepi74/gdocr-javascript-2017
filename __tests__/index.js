import failingFunction from '../';

describe('Gandalf', () => {
  it('You Shall not Pass!', () => {
    expect(failingFunction()).toBeTruthy();
  });
});
