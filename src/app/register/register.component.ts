import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { User } from "../user";
import { AccountService } from "../account.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  users = User;
  constructor(
    private route: ActivatedRoute,
    private accountservice: AccountService
  ) {}

  ngOnInit() {}

  register(users) {
    this.accountservice.register(users);
  }
}
