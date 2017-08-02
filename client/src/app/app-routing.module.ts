import { NgModule }             from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { AppComponent } from './app.component';
import { PopupBoxComponent } from './popup-box/popup-box.component'

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'comments',
    pathMatch: "full",
  },
  {
    path: 'comments',
    component: AppComponent,
    children : [
      {
        path: ':id',
        component: PopupBoxComponent
      }
    ]
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {}
