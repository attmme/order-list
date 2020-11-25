import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    MatListModule,
    MatIconModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    MatListModule,
    MatIconModule
  ]
})
export class MaterialModule { }
