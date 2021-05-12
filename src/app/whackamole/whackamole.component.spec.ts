import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhackamoleComponent } from './whackamole.component';

describe('WhackamoleComponent', () => {
  let component: WhackamoleComponent;
  let fixture: ComponentFixture<WhackamoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhackamoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhackamoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
