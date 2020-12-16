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
  userName:String='default';
 
  constructor(
    private route: ActivatedRoute,
    private accountservice: AccountService
  ) {}

  ngOnInit() {}

  register(username,password,lastName,firstName) {
    
    this.accountservice.register(users);
  }
}
