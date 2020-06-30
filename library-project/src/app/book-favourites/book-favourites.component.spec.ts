import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFavouritesComponent } from './book-favourites.component';

describe('BookFavouritesComponent', () => {
  let component: BookFavouritesComponent;
  let fixture: ComponentFixture<BookFavouritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookFavouritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookFavouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
