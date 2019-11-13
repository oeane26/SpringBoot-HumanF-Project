import { NgModule } from '@angular/core';

import { HumanressourceSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [HumanressourceSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [HumanressourceSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class HumanressourceSharedCommonModule {}
