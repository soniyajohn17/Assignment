import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ApiService } from "./services/api-service.service";
import { PatientDetailsComponent } from "./patient-details/patient-details.component";

@NgModule({
  declarations: [AppComponent, PatientDetailsComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule, FormsModule],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
