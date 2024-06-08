import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkedPlayersComponent } from './bookmarked-players.component';

describe('BookmarkedPlayersComponent', () => {
  let component: BookmarkedPlayersComponent;
  let fixture: ComponentFixture<BookmarkedPlayersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookmarkedPlayersComponent]
    });
    fixture = TestBed.createComponent(BookmarkedPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
