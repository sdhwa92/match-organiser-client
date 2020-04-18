import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchManagementViewComponent } from './match-management-view.component';

describe('MatchManagementViewComponent', () => {
  let component: MatchManagementViewComponent;
  let fixture: ComponentFixture<MatchManagementViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchManagementViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchManagementViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
