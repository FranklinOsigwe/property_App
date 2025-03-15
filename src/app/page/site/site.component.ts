import { Component, inject, OnInit, signal } from '@angular/core';
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
export class SiteComponent implements OnInit {
isFormView = signal<boolean>(true)
formObj : Site = new Site()
masterSrv = inject(MasterService)
gridData: Site[] = []

propertyType$: Observable<IPropertyType[]> = new Observable<IPropertyType[]>

constructor() {
  this.propertyType$ = this.masterSrv.getAllPropertyType().pipe(  
    map((item: IAPIResponseModel) => {
    return item.data
  } ))
}

ngOnInit(): void {
  this.getGridData()
}

getGridData(){
 this.masterSrv.getAllSites().subscribe((res: IAPIResponseModel) => {
this.gridData = res.data
 })
}

toggleView(){
  this.isFormView.set(!this.isFormView())
}

onSave(){
  this.masterSrv.saveSite(this.formObj).subscribe((res: IAPIResponseModel) => {
    if(res.result){
      alert("Record Saved")
    }
  })
}
}
