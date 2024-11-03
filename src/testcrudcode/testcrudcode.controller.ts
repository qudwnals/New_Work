import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TestcrudcodeService } from './testcrudcode.service';
import { Testcruddto } from '../testcruddto/testdto';
import { Board, BoardStatus } from './testcrudcode.model';

@Controller('testcrudcode')
export class TestcrudcodeController {
  private readonly testcrudcodeService: TestcrudcodeService;

  constructor(testcrudcodeService: TestcrudcodeService) {
    this.testcrudcodeService = testcrudcodeService;
  }

  @Get()
  getAllBoard(): Board[] {
    return this.testcrudcodeService.getAllBoard();
  }
  @Post()
  createBoard(@Body() testcruddto: Testcruddto): Board {
    return this.testcrudcodeService.createBoard(testcruddto);
  }

  @Get('/:id')
  getBoardById(@Param('id') id: string) {
    return this.testcrudcodeService.getBoardById(id);
  }

  @Delete('/:id')
  deletBoard(@Param('id') id: string) {
    this.testcrudcodeService.deletBoard(id);
  }

  @Patch('/id:/status')
  updateBoardStatus(
    @Param('id') id: string,
    @Body('status') status: BoardStatus,
  ) {
    return this.testcrudcodeService.updateBoardStatus(id, status);
  }
}
