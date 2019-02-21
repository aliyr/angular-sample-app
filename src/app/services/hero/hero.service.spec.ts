import { TestBed } from '@angular/core/testing';

import { HeroService } from './hero.service';
import {testDeps} from '../../test-dependencies';

fdescribe('HeroService', () => {
  beforeEach(() => TestBed.configureTestingModule(testDeps));

  it('should be created', () => {
    const service: HeroService = TestBed.get(HeroService);
    expect(service).toBeTruthy();
  });
  it('should handle error', () => {
    const service: HeroService = TestBed.get(HeroService);
    const error = service.handleError('some error happened');
    expect(error).toBeDefined();
  });
});
