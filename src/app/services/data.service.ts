import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getData() {
    return this.http.get (
      "https://awaadcc.github.io/liftbuddy_home.json"
      );
  }

  getChestData() {
    return this.http.get("https://awaadcc.github.io/liftbuddy_chest.json");
  }

  getBackData() {
    return this.http.get("https://awaadcc.github.io/liftbuddy_back.json");
  }
  getShouldersData() {
    return this.http.get("https://awaadcc.github.io/liftbuddy_shoulders.json");
  }
  getArmsData() {
    return this.http.get("https://awaadcc.github.io/liftbuddy_arms.json");
  }
  getLegsData() {
    return this.http.get("https://awaadcc.github.io/liftbuddy_legs.json");
  }
  getWorkoutData() {
    return this.http.get("https://awaadcc.github.io/liftbuddy_workouts.json")
  }
}
