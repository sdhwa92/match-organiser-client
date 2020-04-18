import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchManagementListComponent } from './match-management-list.component';

describe('MatchManagementListComponent', () => {
  let component: MatchManagementListComponent;
  let fixture: ComponentFixture<MatchManagementListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchManagementListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchManagementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
