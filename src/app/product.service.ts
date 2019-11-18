import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:63099/api';

  constructor(private http: HttpClient) { }

  getProductList(): Observable<any> {
    return this.http.get(this.baseUrl + '/productdetails');
  }
  deleteProduct(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/productdetails/'+id);
  }
  getProduct(id: number):Observable<any>
  {
    return this.http.get(this.baseUrl+'/productdetails/'+id);
  }
  updateProduct(id: number,product: Product)
  {
    return this.http.put(this.baseUrl+'/productdetails/'+id,product);
  }
  addProduct(pdt:Product)
  {
    return this.http.post(this.baseUrl+'/productdetails',pdt);
  }


}
