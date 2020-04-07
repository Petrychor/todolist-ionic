import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { Todo } from '../todo.item';
import { DataService } from '../data.service';


@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.page.html',
  styleUrls: ['./edit-modal.page.scss'],
})
export class EditModalPage implements OnInit {
  editableData: Todo;

  constructor(private params: NavParams, private modalCtrl: ModalController, private dts: DataService) {
    this.editableData = new Todo(params.data.todo.title, params.data.todo.dueDate, params.data.todo.priority, params.data.todo.description);
  }

  ngOnInit() {
  }

  saveEdit() {
    this.dts.editTodo(this.params.data.todo.id, this.editableData);
    this.dismiss();
  }

  dismiss() {
    this.modalCtrl.dismiss({});
  }

}
