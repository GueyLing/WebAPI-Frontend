import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudPlayersComponent } from './crud-players.component';

describe('CrudPlayersComponent', () => {
  let component: CrudPlayersComponent;
  let fixture: ComponentFixture<CrudPlayersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrudPlayersComponent]
    });
    fixture = TestBed.createComponent(CrudPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
