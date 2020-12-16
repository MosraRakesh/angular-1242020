import { Inject, Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { LOCAL_STORAGE, StorageService } from "ngx-webstorage-service";

@Injectable()
export class AccountService {
  users = [];

  constructor(
    @Inject(LOCAL_STORAGE) private storage: StorageService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.users = this.storage.get("user") ? this.storage.get("user") : [];
  }
  login(user) {}
  register(user) {
    this.users.push(user);
    this.storage.set("myusers", this.users);
  }
}
