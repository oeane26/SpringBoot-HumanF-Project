import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HumanressourceSharedLibsModule, HumanressourceSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [HumanressourceSharedLibsModule, HumanressourceSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [HumanressourceSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HumanressourceSharedModule {
  static forRoot() {
    return {
      ngModule: HumanressourceSharedModule
    };
  }
}
