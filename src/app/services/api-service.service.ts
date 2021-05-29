import { Injectable } from "@angular/core";
import { from, of } from "rxjs";
import { filter } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  getPatients() {
    return this.httpClient.get(environment.queryURI + "/Patient", {
      headers: this.getHeaders(),
    });
  }
  getPatiestsByBirthYearRange() {
    const patientsData = this.httpClient.get(
      environment.queryURI + "/Patient",
      {
        headers: this.getHeaders(),
      }
    );
    return patientsData.pipe((data: any) => {
      const patientObject = from(data.entry);
      const dateofbRange = patientObject.pipe(
        filter((data: any) => {
          let yearofBirthDate = data.resorce.birthDate.split("-");
          return yearofBirthDate[0] >= 1960 && yearofBirthDate[0] <= 1965;
        })
      );
      console.log("DOB", dateofbRange);
      return dateofbRange;
    });
  }

  searchPatient(name, birthdate) {
    return this.httpClient.get(
      environment.queryURI +
        "/Patient?birthdate=" +
        birthdate +
        "&name=" +
        name,
      { headers: this.getHeaders() }
    );
  }
  private getHeaders(): HttpHeaders {
    const headers = new HttpHeaders({
      "Content-Type": "application/fhir+json",
    });
    return headers;
  }
}
