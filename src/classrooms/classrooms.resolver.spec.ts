import { Test, TestingModule } from '@nestjs/testing';
import { ClassroomsResolver } from './classrooms.resolver';
import { ClassroomsService } from './classrooms.service';

describe('ClassroomsResolver', () => {
  let resolver: ClassroomsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClassroomsResolver, ClassroomsService],
    }).compile();

    resolver = module.get<ClassroomsResolver>(ClassroomsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
