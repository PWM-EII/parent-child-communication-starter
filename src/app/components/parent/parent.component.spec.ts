import { ComponentFixture, TestBed } from '@angular/core/testing';
import {ParentComponent} from "./parent.component";
import {ChildComponent} from "../child/child.component";

describe('ParentComponent', () => {
  let parentComponent: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentComponent, ChildComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentComponent);
    parentComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should receive undefined data when child event is not emitted', () => {
    expect(parentComponent.receivedData).toEqual(undefined);
  });


  test('should receive undefined child1 title when child1 event is not emitted', () => {
    const childComponents = fixture.debugElement.nativeElement.querySelectorAll('app-child');
    const title = childComponents[0].querySelector('.card-title');

    expect(title.innerHTML).toBe("Child1 Component");
  });

  test('should receive undefined child2 title when child2 event is not emitted', () => {
    const childComponents = fixture.debugElement.nativeElement.querySelectorAll('app-child');
    const title = childComponents[1].querySelector('.card-title');

    expect(title.innerHTML).toBe("Child2 Component");
  });

  test('should receive child1 data when child1 event is emitted', () => {
    const childComponents = fixture.debugElement.nativeElement.querySelectorAll('app-child');
    const button = childComponents[0].querySelector('button');
    button.click();
    fixture.detectChanges();

    expect(parentComponent.receivedData).toEqual({"id": 1, "name": "Child1"});
  });

  test('should receive child2 data when child2 event is emitted', () => {
    const childComponents = fixture.debugElement.nativeElement.querySelectorAll('app-child');
    const button = childComponents[1].querySelector('button');
    button.click();
    fixture.detectChanges();

    expect(parentComponent.receivedData).toEqual({"id": 2, "name": "Child2"});
  });

  test('should transform child1 data when parent button is clicked', () => {
    const childComponents = fixture.debugElement.nativeElement.querySelectorAll('app-child');
    const button = childComponents[0].querySelector('button');
    button.click();
    fixture.detectChanges();

    const expectedCode = fixture.debugElement.nativeElement.querySelector('code');

    const buttons = fixture.debugElement.nativeElement.querySelectorAll('button');
    buttons[0].click();
    fixture.detectChanges();

    expect(parentComponent.receivedData).toEqual({"id": 1, "name": "Child1"});

    const actualCode = childComponents[1].querySelector('code');
    expect(actualCode.innerHTML.trim()).not.toBe(expectedCode.innerHTML.trim());
  });

  test('should transform child2 data when parent button is clicked', () => {
    const childComponents = fixture.debugElement.nativeElement.querySelectorAll('app-child');
    const button = childComponents[1].querySelector('button');
    button.click();
    fixture.detectChanges();

    const expectedCode = fixture.debugElement.nativeElement.querySelector('code');

    const buttons = fixture.debugElement.nativeElement.querySelectorAll('button');
    buttons[0].click();
    fixture.detectChanges();

    expect(parentComponent.receivedData).toEqual({"id": 2, "name": "Child2"});

    const actualCode = childComponents[1].querySelector('code');
    expect(actualCode.innerHTML.trim()).not.toBe(expectedCode.innerHTML.trim());
  });

  test('should restore child1 data when parent button is clicked', () => {
    const childComponents = fixture.debugElement.nativeElement.querySelectorAll('app-child');
    const button = childComponents[0].querySelector('button');
    button.click();
    fixture.detectChanges();

    const buttons = fixture.debugElement.nativeElement.querySelectorAll('button');
    buttons[0].click();
    fixture.detectChanges();
    buttons[1].click();
    fixture.detectChanges();

    expect(parentComponent.receivedData).toEqual({"id": 1, "name": "Child1"});
  });

  test('should restore child2 data when parent button is clicked', () => {
    const childComponents = fixture.debugElement.nativeElement.querySelectorAll('app-child');
    const button = childComponents[1].querySelector('button');
    button.click();
    fixture.detectChanges();

    const buttons = fixture.debugElement.nativeElement.querySelectorAll('button');
    buttons[0].click();
    fixture.detectChanges();
    buttons[1].click();
    fixture.detectChanges();

    expect(parentComponent.receivedData).toEqual({"id": 2, "name": "Child2"});
  });


  test('should receive parent1 data when child1 event is emitted', () => {
    const childComponents = fixture.debugElement.nativeElement.querySelectorAll('app-child');
    const button = childComponents[0].querySelector('button');
    button.click();
    fixture.detectChanges();

    const buttons = fixture.debugElement.nativeElement.querySelectorAll('button');
    buttons[0].click();
    fixture.detectChanges();
    button.click();
    fixture.detectChanges();

    expect(parentComponent.receivedData).toEqual({"id": 1, "name": "Parent1"});
  });

  test('should receive parent2 data when child2 event is emitted', () => {
    const childComponents = fixture.debugElement.nativeElement.querySelectorAll('app-child');
    const button = childComponents[1].querySelector('button');
    button.click();
    fixture.detectChanges();

    const buttons = fixture.debugElement.nativeElement.querySelectorAll('button');
    buttons[0].click();
    fixture.detectChanges();
    button.click();
    fixture.detectChanges();

    expect(parentComponent.receivedData).toEqual({"id": 2, "name": "Parent2"});
  });
});
