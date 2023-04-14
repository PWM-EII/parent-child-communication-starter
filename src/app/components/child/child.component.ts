import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {ChildData} from "../../models/child-data.model";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {

  @Input() childName?: string;
  @Input() sharedData?: ChildData;
  @Output() dataEvent = new EventEmitter<ChildData>();


  sendDataToParent() {
     
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

}
