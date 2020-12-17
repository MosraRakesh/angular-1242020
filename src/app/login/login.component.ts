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
  username: String = "";
  password: String = "";
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    @Inject(LOCAL_STORAGE) private storage: StorageService
  ) {}

  ngOnInit() {}

  validateUser() {
    this.users = this.storage.get("myusers");
    this.users.forEach(function(value) {
      console.log(value);
      if (
        value.username === this.username &&
        value.password === this.password
      ) {
        return true;
      }
    });
  }
}
