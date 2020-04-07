import { Todo } from './todo.item';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo('title','2020-04-02', 'low', 'test' )).toBeTruthy();
  });
});
