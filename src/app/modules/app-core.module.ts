import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembershipService } from '../services/membership.service';
import { MembershipServiceConfig } from '../services/membership.service';


@NgModule({
  imports:      [ CommonModule ],
  providers:    [ MembershipService ]
})
export class AppCoreModule {
  constructor (@Optional() @SkipSelf() parentModule: AppCoreModule) {
    if (parentModule) {
      throw new Error(
        'AppCoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(config: MembershipServiceConfig): ModuleWithProviders {
    return {
      ngModule: AppCoreModule,
      providers: [
        { provide: MembershipServiceConfig, useValue: config }
      ]
    };
  }
}
