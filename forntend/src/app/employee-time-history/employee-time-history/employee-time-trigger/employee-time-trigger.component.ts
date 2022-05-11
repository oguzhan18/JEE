import {Component, OnInit, ViewChild} from '@angular/core';
import {Employee} from '../../../models/employee';
import {NumberPlatesService} from '../../../employee/number-plates.service';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';

import {FormControl, FormGroup, Validators} from '@angular/forms';
import { NgxQrcodeElementTypes } from '@techiediaries/ngx-qrcode';
import { element } from 'protractor';
@Component({
  selector: 'app-employee-time-trigger',
  templateUrl: './employee-time-trigger.component.html',
  styleUrls: ['./employee-time-trigger.component.css']
})
export class EmployeeTimeTriggerComponent implements OnInit {
  loading = false;


  



  @ViewChild('plateTable', { static: true }) table: MatTable<any>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;





  dataSource = new MatTableDataSource<Employee[]>();
  displayedColumns: string[] = ['name', 'plate'];

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
    console.log(this.dataSource[1]);
    console.log(this.dataSource);
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


  selected:any;
  filtered :any;



      stat = [
          { value: "All", id: "123" },
          { value: "Unpaid and sent", id:"12" },
  
          { value: "Unpaid and sent",id:"23" },
          { value: "Unpaid and not sent" ,id:"45"},
          { value: "Unpaid with due date",id:"56" },
          { value: "Paid",id:"57" },
          { value: "Open",id:"78" },
          { value: "Overdue" ,id:"45"}];
  
      status = ['Select Status', 'All', 'Unpaid and sent', 'Unpaid with due date', 'Paid', 'Open', 'Overdue'];
  
  
  
  onOptionsSelected() {
        console.log(this.platesService); 
        this.filtered = this.stat.filter(t=>t.value ==this.selected);
        console.log(this.selected);
  
      }














}
