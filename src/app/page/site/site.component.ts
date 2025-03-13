import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IAPIResponseModel, IPropertyType, Site } from '../../model/master';
import { map, Observable } from 'rxjs';
import { MasterService } from '../../service/master.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-site',
  standalone: true,
  imports: [FormsModule, AsyncPipe],
  templateUrl: './site.component.html',
  styleUrl: './site.component.css'
})
export class SiteComponent {
isFormView = signal<boolean>(true)
formObj : Site = new Site()
masterSrv = inject(MasterService)

propertyType$: Observable<IPropertyType[]> = new Observable<IPropertyType[]>

constructor() {
  this.propertyType$ = this.masterSrv.getAllPropertyType().pipe(  
    map((item: IAPIResponseModel) => {
    return item.data
  } ))
}

toggleView(){
  this.isFormView.set(!this.isFormView())
}
}
