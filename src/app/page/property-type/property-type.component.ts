import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MasterService } from '../../service/master.service';
import { IAPIResponseModel, IPropertyType } from '../../model/master';

@Component({
  selector: 'app-property-type',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './property-type.component.html',
  styleUrl: './property-type.component.css'
})
export class PropertyTypeComponent implements OnInit {
form : FormGroup = new FormGroup({

})

gridData : IPropertyType [] = []
masterSrv = inject(MasterService)

constructor() {
  this.initializeForm()
}

ngOnInit(): void {
 this.getGridData()
}

getGridData() {
  this.masterSrv.getAllPropertyType().subscribe((res: IAPIResponseModel) => {
    this.gridData = res.data;
  })
}

onSave() {
  this.masterSrv.savePropertyType(this.form.value).subscribe((res: IAPIResponseModel) => {
    if(res.result) {
      alert('Saved successfully')
      this.getGridData();
    } else {
      alert(res.message)
    }
  })
}

// onUpdate() {
//   this.masterSrv.upDatePropertyType(this.form.value).subscribe((res: IAPIResponseModel) => {
//     if(res.result) {
//       alert('record Updated')
//       this.getGridData();
//     } else {
//       alert(res.message)
//     }
//   })
// }

// onUpdate() {
//   console.log('Updating:', this.form.value);
//   this.masterSrv.updatePropertyType(this.form.value).subscribe((res: IAPIResponseModel) => {
//     if (res.result) {
//       alert('Record updated');
//       this.getGridData();
//       this.initializeForm();
//       // this.resetForm(); // Reset form after update to clear any old data
//     } else {
//       alert(res.message);
//     }
//   });
// }


onUpdate() {
  if (!this.form.value.propertyTypeId) {
    alert('Error: propertyTypeId is missing! Please try editing again.');
    return;
  }
  
  console.log('Updating with:', this.form.value);

  this.masterSrv.updatePropertyType(this.form.value).subscribe((res: IAPIResponseModel) => {
    if (res.result) {
      alert('Record updated');
      this.getGridData();
      this.initializeForm();
      
    } else {
      alert(res.message);
    }
  });
} 

onDelete(id: number) {
const isDelete = confirm('Are you sure you want to Delete')
if(isDelete) {
  this.masterSrv.deletePropertyTypeById(id).subscribe((res: IAPIResponseModel) => {
    if(res.result){
      alert('Record Deleted');
      this.getGridData()
    } else {
      alert(res.message)
    }
  })
}
}

initializeForm(item?: IPropertyType) {
  this.form = new FormGroup({
    propertyTypeId: new FormControl <number> (item ? item.propertyTypeId : 0),
    propertyType: new FormControl<string>(item ? item.propertyType : '', [Validators.required, Validators.minLength(3)])
  })
}


onEdit (item : IPropertyType) {
  console.log('Editing item:', item);
  this.initializeForm(item)
}

}
