import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroTributoComponent } from './cadastro-tributo.component';

describe('CadastroTributoComponent', () => {
  let component: CadastroTributoComponent;
  let fixture: ComponentFixture<CadastroTributoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroTributoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroTributoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
