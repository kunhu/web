import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycssComponent } from './mycss.component';

describe('MycssComponent', () => {
  let component: MycssComponent;
  let fixture: ComponentFixture<MycssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
