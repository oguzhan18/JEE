import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {NumberPlatesService} from '../number-plates.service';
import {Employee} from '../../models/employee';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Employee,
              private platesService: NumberPlatesService) { }

  ngOnInit() {
  }

  cancelDelete() {
    this.dialogRef.close();
  }

  deleteEmployee() {
    this.platesService.deletePlate(this.data).subscribe(res => {
      this.dialogRef.close();
    });
}
}
