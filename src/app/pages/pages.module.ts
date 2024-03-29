import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UiModule } from '../shared/ui/ui.module';

import { PagesRoutingModule } from './pages-routing.module';

import { SimplebarAngularModule } from 'simplebar-angular';
import { NgbNavModule, NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgPipesModule } from 'ngx-pipes';

import { DashboardComponent } from './dashboard/dashboard.component';
import { GouvernanceModule } from './gouvernance/gouvernance.module';
import { DataModule } from './data/data.module';
import { ProjectsModule } from './projects/projects.module';
import { CatalogsModule } from './catalogs/catalogs.module';
import { AdministrationModule } from './administration/administration.module';
import { ChartModule } from './chart/chart.module';
import { StatComponent } from '../AdminCharts/widget/stat/stat.component';



@NgModule({
  declarations: [DashboardComponent,StatComponent],
  imports: [
    AdministrationModule,
    CatalogsModule,
    ProjectsModule,
    DataModule,
    GouvernanceModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    UiModule,
    ChartModule,
    NgPipesModule,
    NgbNavModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgApexchartsModule,
    SimplebarAngularModule
  ],
  providers: [
  ]
})
export class PagesModule { }
