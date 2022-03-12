import { Test, TestingModule } from '@nestjs/testing';
import { ShController } from './sh.controller';

describe('ShController', () => {
  let controller: ShController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShController],
    }).compile();

    controller = module.get<ShController>(ShController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
