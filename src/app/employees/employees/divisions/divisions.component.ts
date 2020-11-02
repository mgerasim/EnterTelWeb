import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Division} from '../../../api/models';

@Component({
  selector: 'app-divisions',
  templateUrl: './divisions.component.html',
  styleUrls: ['./divisions.component.scss']
})
export class DivisionsComponent implements OnInit {

  @Input() divisions: Division[];

  @Output() onSelected = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onItemClick($event: {itemData: Division}) {
    this.onSelected.emit($event.itemData);
  }
}
