import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { Injectable } from "@angular/core";
import { UserService } from "./user.service";
import { Observable } from "rxjs";
import { User } from "../models/user.interface";

@Injectable({ providedIn: "root" })
export class UserResolver implements Resolve<User> {
  constructor(private userService: UserService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return this.userService.currentUser;
  }
}
