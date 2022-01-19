import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../model/user'

@Component({
  selector: 'app-data-row',
  templateUrl: './data-row.component.html',
  styleUrls: ['./data-row.component.scss']
})
export class DataRowComponent implements OnInit {

  @Input() dataRow: User = new User()
  @Output() selectClick = new EventEmitter<User>()
  @Output() updateClick = new EventEmitter<User>()
  @Output() deleteClick = new EventEmitter<User>()

  onSelectClicked(): void {
    this.selectClick.emit(this.dataRow)
  }

  onUpdateClicked(): void {
    this.updateClick.emit(this.dataRow)
  }

  onDeleteClicked(): void {
    this.deleteClick.emit(this.dataRow)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
