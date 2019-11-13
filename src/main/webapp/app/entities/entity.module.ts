import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'region',
        loadChildren: './region/region.module#HumanressourceRegionModule'
      },
      {
        path: 'country',
        loadChildren: './country/country.module#HumanressourceCountryModule'
      },
      {
        path: 'location',
        loadChildren: './location/location.module#HumanressourceLocationModule'
      },
      {
        path: 'department',
        loadChildren: './department/department.module#HumanressourceDepartmentModule'
      },
      {
        path: 'task',
        loadChildren: './task/task.module#HumanressourceTaskModule'
      },
      {
        path: 'employee',
        loadChildren: './employee/employee.module#HumanressourceEmployeeModule'
      },
      {
        path: 'job',
        loadChildren: './job/job.module#HumanressourceJobModule'
      },
      {
        path: 'job-history',
        loadChildren: './job-history/job-history.module#HumanressourceJobHistoryModule'
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HumanressourceEntityModule {}
