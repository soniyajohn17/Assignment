import { Component, OnInit } from "@angular/core";
import { ApiService } from "../services/api-service.service";
import { DatePipe } from "@angular/common";

@Component({
  selector: "app-patient-details",
  templateUrl: "./patient-details.component.html",
  styleUrls: ["./patient-details.component.scss"],
})
export class PatientDetailsComponent implements OnInit {
  constructor(private apiService: ApiService) {}
  patients;
  birthYearData;
  timeOfRequest;
  name: any;
  dob: any;
  ngOnInit(): void {
    this.apiService.getPatients().subscribe((data: any) => {
      this.timeOfRequest = Date();
      this.patients = data.entry.sort((a, b) => {
        return (
          b.resource.birthDate?.split("-")[0] -
          a.resource.birthDate?.split("-")[0]
        );
      });
    });

    this.apiService.getPatiestsByBirthYearRange().subscribe((data) => {
      console.log("filtered data", data);
    });
  }
  searchByInput(namesearch, birthdate) {
    const dateSendingToServer = new DatePipe("en-US").transform(
      birthdate,
      "yyyy/MM/dd"
    );
    this.apiService.searchPatient(namesearch, birthdate).subscribe((data) => {
      data = data;
    });
  }
}
