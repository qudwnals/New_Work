import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './testcrudcode.model';
import { Testcruddto } from '../testcruddto/testdto';
import { v1 as uuid } from 'uuid';
@Injectable()
export class TestcrudcodeService {
  private board: Board[] = [];

  getAllBoard() {
    return this.board;
  }
  createBoard(testcruddto: Testcruddto) {
    const { title, description } = testcruddto;
    const board: Board = {
      id: uuid(),
      title,
      description,
      status: BoardStatus.PUBLIC,
    };

    this.board.push(board);
    return board;
  }

  getBoardById(id: string): Board {
    return this.board.find((boards) => boards.id === id);
  }

  deletBoard(id: string): void {
    this.board = this.board.filter((board) => board.id !== id);
  }
  updateBoardStatus(id: string, status: BoardStatus): Board {
    const boards = this.getBoardById(id);
    boards.status = status;
    return boards;
  }
}
