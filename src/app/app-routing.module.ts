import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompanyComponent } from './company/company.component';
import { TechnologyComponent } from './technology/technology.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'company',component:CompanyComponent},
  {path:'technology',component:TechnologyComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    BrowserAnimationsModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
