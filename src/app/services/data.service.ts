import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getData() {
    return this.http.get (
      "https://wayofvod.com/liftbuddy_home.json"
      );
  }

  getChestData() {
    return this.http.get("https://wayofvod.com/liftbuddy_chest.json");
  }

  getBackData() {
    return this.http.get("https://wayofvod.com/liftbuddy_back.json");
  }
  getShouldersData() {
    return this.http.get("https://wayofvod.com/liftbuddy_shoulders.json");
  }
  getArmsData() {
    return this.http.get("https://wayofvod.com/liftbuddy_arms.json");
  }
  getLegsData() {
    return this.http.get("https://wayofvod.com/liftbuddy_legs.json");
  }
  getWorkoutData() {
    return this.http.get("https://wayofvod.com/liftbuddy_workouts.json")
  }
}
