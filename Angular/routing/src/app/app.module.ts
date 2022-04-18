import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
// import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExamModule } from './exam/exam.module';
import { ProductRoutingModule } from './product/product-routing.module';
import { ProductModule } from './product/product.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { DeshBoardComponent } from './desh-board/desh-board.component';
import { NotFoundService } from 'src/app/services/not-found.service';
//import { ExamRoutingModule } from './exam/exam-routing.module';

@NgModule({
  declarations: [AppComponent, NotFoundComponent, DeshBoardComponent],
  imports: [
    BrowserModule,
    FormsModule,
    // CommonModule,
    // HttpModule,
    // ProductRoutingModule,
    // ExamRoutingModule,
    ProductModule,
    ExamModule,
    // the root routing module must on the end of this array
    AppRoutingModule,
  ],
  providers: [NotFoundService],
  bootstrap: [AppComponent],
})
export class AppModule {}