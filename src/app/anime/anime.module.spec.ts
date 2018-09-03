import { AnimeModule } from './anime.module';

describe('AnimeModule', () => {
  let animeModule: AnimeModule;

  beforeEach(() => {
    animeModule = new AnimeModule();
  });

  it('should create an instance', () => {
    expect(animeModule).toBeTruthy();
  });
});
