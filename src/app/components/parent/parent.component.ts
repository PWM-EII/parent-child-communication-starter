import {Component, OnInit} from '@angular/core';
import {ChildData} from "../../models/child-data.model";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  child1Data: ChildData = {id: 1, name: "Child1"};
  child2Data: ChildData = {id: 2, name: "Child2"};

  child1Name?: string;
  child2Name?: string;

  receivedData?: ChildData;

  constructor() { }

  ngOnInit(): void {

  }

  onReceiveDataFromChild(data: ChildData) {

  }

  transformChildData() {


  }

  restoreChildData() {

  }

}
