import { NgModule }             from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { AppComponent } from './app.component';
import { PopupBoxComponent } from './popup-box/popup-box.component'

const appRoutes: Routes = [
  {
    path: ':id',
    component: PopupBoxComponent
  }
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
