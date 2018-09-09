import { VillainModule } from './villain.module';

describe('VillainModule', () => {
  let villainModule: VillainModule;

  beforeEach(() => {
    villainModule = new VillainModule();
  });

  it('should create an instance', () => {
    expect(villainModule).toBeTruthy();
  });
});
