import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';



/////////////// Meterial //////////////////////////////////

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatTreeModule } from "@angular/material/tree";
import { MatRadioModule } from "@angular/material/radio";


/////////////// Component //////////////////////////////////

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DeleteDialogComponent } from './employee/delete-dialog/delete-dialog.component';
import { NumberPlatesService } from './employee/number-plates.service';
import { EditDialogComponent } from './employee/edit-dialog/edit-dialog.component';
import { UppercaseDirective } from './employee/directives/uppercase.directive';
import { EmployeeComponent } from './employee/employee.component';

/////////////// Other Package //////////////////////////////////

import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { EmployeeTimeHistoryComponent } from './employee-time-history/employee-time-history/employee-time-history.component';
import { EmployeeTimeTriggerComponent } from './employee-time-history/employee-time-history/employee-time-trigger/employee-time-trigger.component';
import { MatSelect, MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeComponent,
    DeleteDialogComponent,
    EditDialogComponent,
    UppercaseDirective,
    EmployeeTimeHistoryComponent,
    EmployeeTimeTriggerComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    ////////////////
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule, 
    MatFormFieldModule, 
    MatSelectModule,
    

    MatRadioModule,
    MatTreeModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    ///////////////
    NgxQRCodeModule
  ],
  entryComponents: [DeleteDialogComponent, EditDialogComponent],
  providers: [NumberPlatesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
