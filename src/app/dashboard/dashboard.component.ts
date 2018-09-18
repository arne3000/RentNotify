import { Component, OnInit } from '@angular/core';

import { HouseholdService, UserHousehold } from '../services/household.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public households: Array<UserHousehold>;

  constructor(private householdService: HouseholdService) { }

  ngOnInit() {
    this.householdService.currentUserHouseholds().then((households) => {
      this.households = households;
    });
  }
}
