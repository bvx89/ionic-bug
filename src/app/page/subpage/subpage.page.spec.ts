import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubpagePage } from './subpage.page';

describe('SubpagePage', () => {
  let component: SubpagePage;
  let fixture: ComponentFixture<SubpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubpagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
