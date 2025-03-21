import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { IAPIResponseModel, IPropertyType, Site } from '../model/master';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) {}

  getAllPropertyType():Observable <IAPIResponseModel> {
    return this.http.get<IAPIResponseModel>(environment.API_URL + 'GetAllPropertyType')
  }
  
  savePropertyType(obj: IPropertyType):Observable <IAPIResponseModel> {
    const newObh = [obj]
    return this.http.post<IAPIResponseModel>(environment.API_URL + 'AddPropertyType', newObh)
  }


  updatePropertyType(obj: IPropertyType) : Observable<IAPIResponseModel> {
    return this.http.put<IAPIResponseModel>(environment.API_URL + 'UpdatePropertyType', obj)
  }

  deletePropertyTypeById(id: number):Observable <IAPIResponseModel> {
    return this.http.delete<IAPIResponseModel>(environment.API_URL + 'DeletePropertyTypeById?id='+id)
  }

  saveSite(obj: Site):Observable <IAPIResponseModel> {
    return this.http.post<IAPIResponseModel>(environment.API_URL + 'AddSites', obj)
  }

  getAllSites():Observable <IAPIResponseModel> {
    return this.http.get<IAPIResponseModel>(environment.API_URL + 'GetAllSites')
  }
  
  
  
}
