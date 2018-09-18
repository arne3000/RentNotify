import { Component, OnInit } from '@angular/core';

import { HouseholdService, UserHousehold } from '../services/household.service';

@Component({
  selector: 'app-household',
  templateUrl: './household.component.html',
  styleUrls: ['./household.component.css']
})
export class HouseholdComponent {

  public model: UserHousehold;

  constructor(private householdService: HouseholdService) { }

  onSubmit() {
    console.log(this.model);
  }
}
