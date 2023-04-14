import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChildComponent } from './child.component';

describe('ChildComponent', () => {
  let component: ChildComponent;
  let fixture: ComponentFixture<ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  test('should emit child event when child button is clicked', () => {
    const data = {"id": 1, "name": "Child1"};
    component.sharedData=data;
    jest.spyOn(component.dataEvent, 'emit');
    component.sendDataToParent();

    expect(component.dataEvent.emit).toHaveBeenCalledWith(data);
  });


});
