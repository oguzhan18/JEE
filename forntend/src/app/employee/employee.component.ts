import {Component, OnInit, ViewChild} from '@angular/core';
import {Employee} from '../models/employee';
import {NumberPlatesService} from './number-plates.service';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import {DeleteDialogComponent} from './delete-dialog/delete-dialog.component';
import {EditDialogComponent} from './edit-dialog/edit-dialog.component';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { NgxQrcodeElementTypes } from '@techiediaries/ngx-qrcode';
import { element } from 'protractor';

@Component({
  selector: 'app-employee-owners',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  @ViewChild('plateTable', { static: true }) table: MatTable<any>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;




  elementType = NgxQrcodeElementTypes.URL;
  xxx = this.elementType;
  value = '';


  copyText(val: any){
    let selBox = document.createElement('textarea');
      selBox.style.position = 'fixed';
      selBox.style.left = '0';
      selBox.style.top = '0';
      selBox.style.opacity = '0';
      selBox.value = val;
      document.body.appendChild(selBox);
      selBox.focus();
      selBox.select();
      document.execCommand('copy');
      document.body.removeChild(selBox);
    }

  dataSource = new MatTableDataSource<Employee[]>();
  displayedColumns: string[] = ['name', 'plate','date', 'edit', 'delete'];
  loading = false;

  EmployeeForm = new FormGroup({
    name: new FormControl(''),
    plate: new FormControl(''),
    date: new FormControl('')
  });
  constructor(private platesService: NumberPlatesService, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.getAllPlates();
    this.dataSource.paginator = this.paginator;
    // console.log(this.elementType)
  }

  editEmployee(Employee: any) {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '550px',
      data: Employee
    });
    dialogRef.afterClosed().subscribe(res => {
      this.getAllPlates();
    });
  }

  deleteEmployee(Employee: any) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
      data: Employee
    });
    dialogRef.afterClosed().subscribe(res => {
      this.getAllPlates();
    });
  }

  clearEmployee() {
    this.EmployeeForm.reset();
    Object.keys(this.EmployeeForm.controls).forEach(key => {
      this.EmployeeForm.controls[key].setErrors(null);
    });
  }

  createEmployee(EmployeeFrm) {
    if (EmployeeFrm.valid && EmployeeFrm.value.name && EmployeeFrm.value.plate) {
      this.platesService.addPlate({name: this.EmployeeForm.value.name, plate: this.EmployeeForm.value.plate, date: this.EmployeeForm.value.date}).subscribe(res => {
        this.getAllPlates();
        this.clearEmployee();
      });
    }
  }

  getAllPlates() {
    this.loading = true;
    this.platesService.getPlates().subscribe(res => {
      this.dataSource.data = this.sortEmployee(res);
      this.table.renderRows();
      this.dataSource.sort = this.sort;
      this.loading = false;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  sortEmployee(array) {
    array.sort( (a: Employee, b: Employee) => {
      if (a.name > b.name) {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      } else {
        return 0;
      }
    });
    return array;
  }
}
