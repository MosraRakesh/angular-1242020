import { Component, Inject, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { User } from "../user";
import { AccountService } from "../account.service";
import { LOCAL_STORAGE, StorageService } from "ngx-webstorage-service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  username: String;
  firstName: String;
  LastName: String;
  password: String;

  constructor(
    private route: ActivatedRoute,
    private accountservice: AccountService,
    @Inject(LOCAL_STORAGE) private storage: StorageService
  ) {}

  ngOnInit() {}

  register(event: Event) {
    console.log(this.username + "-------------" + this.firstName);
    // user=new User();

    //this.accountservice.register();
  }
}
