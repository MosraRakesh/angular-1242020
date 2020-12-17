import { Component, Inject, OnInit } from "@angular/core";
import { LOCAL_STORAGE, StorageService } from "ngx-webstorage-service";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  users = [];
  username = "";
  password = "";
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    @Inject(LOCAL_STORAGE) private storage: StorageService
  ) {}

  ngOnInit() {}

  validateUser(event: Event) {
    this.users = this.storage.get("myusers");
    console.log(event);
    console.log(this.username + "____" + this.password);
    var self = this;
    this.users.forEach(function(value) {
      console.log(value);
      if (value.username == self.username && value.password == self.password) {
        window.alert("login successful");
        this.router.navigate(["/products"]);
        return true;
      }
    });
  }
}
