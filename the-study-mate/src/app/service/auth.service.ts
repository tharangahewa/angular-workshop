import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor() {}

  autorize(): Promise<boolean> {
    return Promise.resolve(false);
  }
}
