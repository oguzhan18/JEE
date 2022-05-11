import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from '../models/employee';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumberPlatesService {
  constructor(private http: HttpClient) {
  }

  getPlates(): any {
    return this.http.get('http://localhost:3000/getPlates');
  }

  editPlate(oldEmployee: Employee, Employee: Employee): Observable<any> {
    return this.http.post('http://localhost:3000/editPlate', [oldEmployee, Employee]);
  }
  addPlate(Employee: Employee): Observable<any> {
    return this.http.post('http://localhost:3000/addPlate', Employee);
  }

  deletePlate(plate: Employee): Observable<any> {
    return this.http.delete(`http://localhost:3000/deletePlate/${plate.plate}`);
  }
}
