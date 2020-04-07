import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { Storage } from '@ionic/storage';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  const storageIonicMock: any = {
    get: () => new Promise<any>((resolve, reject) => resolve('As2342fAfgsdr')),
   };
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [IonicModule.forRoot()],
      providers: [
        {
          provide: Storage,
          useValue: storageIonicMock
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
