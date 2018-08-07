import { EarnModule } from './earn.module';

describe('EarnModule', () => {
  let earnModule: EarnModule;

  beforeEach(() => {
    earnModule = new EarnModule();
  });

  it('should create an instance', () => {
    expect(earnModule).toBeTruthy();
  });
});
