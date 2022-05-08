import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SkillzComponent } from './skillz/skillz.component';

const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: '', component: SkillzComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
