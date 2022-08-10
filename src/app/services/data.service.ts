import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getData() {
    return this.http.get (
      "https://wayofvod.com/liftbuddy/liftbuddy_home.json"
      );
  }

  getChestData() {
    return this.http.get("https://wayofvod.com/liftbuddy/liftbuddy_chest.json");
  }

  getBackData() {
    return this.http.get("https://wayofvod.com/liftbuddy/liftbuddy_back.json");
  }
  getShouldersData() {
    return this.http.get("https://wayofvod.com/liftbuddy/liftbuddy_shoulders.json");
  }
  getArmsData() {
    return this.http.get("https://wayofvod.com/liftbuddy/liftbuddy_arms.json");
  }
  getLegsData() {
    return this.http.get("https://wayofvod.com/liftbuddy/liftbuddy_legs.json");
  }
  getWorkoutData() {
    return this.http.get("https://wayofvod.com/liftbuddy/liftbuddy_workouts.json")
  }
}
