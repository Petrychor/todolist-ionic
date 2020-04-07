import uuid from 'uuid';

export class Todo {
  constructor(public title: string,
              public dueDate: string,
              public priority: string,
              public description: string,
              public id: string = uuid.v4(),
              public isDone: boolean = false,) {
  }

  setTitle(title: string){
      this.title = title;
  }

}