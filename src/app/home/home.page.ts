import { Component, Input, ViewChild,  OnInit  } from '@angular/core';
import { DataService } from '../data.service';
import { Todo } from '../todo.item';
import { IonReorderGroup, ModalController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EditModalPage } from '../edit-modal/edit-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonReorderGroup) reorderGroup: IonReorderGroup;
  @Input() todo: Todo;
  form: FormGroup;
  
  constructor(private data: DataService, private modalController: ModalController) {

  }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.minLength(3)]
      }),
      dueDate: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }), 
      priority: new FormControl('high', {
        validators: [Validators.required]
      }),
      description: new FormControl(null, {
        updateOn: 'blur'
      })
    });
  }

  async openModal(id: string) {
    const modal = await this.modalController.create({
      component: EditModalPage,
      componentProps: {
        'todo': this.data.getTodo(id)
      }
    });
    return await modal.present();
  }

  doReorder(event: any) {
    this.data.reOrder(event.detail.complete(this.data.todos));
  }

  getTodos() {
    return this.data.getTodos();
  }

  editTodo(id: string) {
    let todo = this.data.getTodo(id);
  }

  onSubmit() {
    if( !this.form.valid ) {
      return;
    }

    this.data.addTodo(this.form.value.title, this.form.value.dueDate, this.form.value.priority, this.form.value.description);
    this.form.reset();

  }

  todoRemove(id: string){
    this.data.removeTodo(id);
  }

  todoDone(id: string) {
    this.data.doneTodo(id);
  }

}
