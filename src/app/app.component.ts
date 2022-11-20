import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "DPA";
  age: Number = 30;
  fullName: String = "Claudia Alocen";

  constructor(private http: HttpClient) {}

  ngOnInit() {
    //cuando quiero usar unavariable usar this.variable
    //ejm this.fullName

    this.http
      .get<any>(
        "https://mongodb-nodejsdpa2022.vanessaalocen.repl.co/api/v1/customer/getall"
      )
      .subscribe((response) => {
        console.log(response);
      });
  }
}
