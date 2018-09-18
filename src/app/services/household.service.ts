import { Injectable, Optional } from '@angular/core';

import Firebase from '@firebase/database';

import { MembershipService } from '../services/membership.service';

export class UserHousehold {
  public id: string;
  public displayName: string;
  public members: number;
}

@Injectable({
  providedIn: 'root'
})
export class HouseholdService {
  private cache: Array<UserHousehold>;

  constructor(private membershipService: MembershipService) {  }

  currentUserHouseholds() {
    return new Promise<Array<UserHousehold>>((resolve, reject) => {
      this.membershipService.getCurrentUser().then((user) => {
        if (this.cache) {
          resolve(this.cache);
        } else {
          Firebase.database().ref('user/' + user.uid + '/households/').limitToLast(100).once().then((snapshot) => {
            this.cache = this.mapArray(snapshot.val(), this.mapToUserHousehold);
            if (this.cache) {
              resolve(this.cache);
            } else {
              reject('failed to map households');
            }
          }, reject);
        }
      }, reject);
    });
  }

  private mapToUserHousehold(input): UserHousehold {
    const newHousehold = new UserHousehold();
    if (input) {
      newHousehold.id = input.id;
      newHousehold.displayName = input.displayName;
      newHousehold.members = input.members;
    }
    return newHousehold;
  }
  private mapArray<T>(input, mapFunction): Array<T> {
    if (input && Array.isArray(input)) {
      return input.map<T>(element => mapFunction(element));
    } else {
      return null;
    }
  }

  /*******
  users {
    <id>: {
      households: [ 
        {
          id: <id>,
          displayName: <text>
          members: <number>
        } 
      ]
    }
  },
  households: {
    <id>: {
      name: <text>
      members: [
        <id>: {
          displayName: <text>
        }
      ]
    }
  }
  */
}
