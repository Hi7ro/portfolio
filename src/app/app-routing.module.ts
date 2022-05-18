import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ImprintComponent } from './imprint/imprint.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SkillzComponent } from './skillz/skillz.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
  { path: 'nav', component: NavbarComponent },
  { path: '', component: HomeComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'skills', component: SkillzComponent },
  { path: 'about', component: HomeComponent },
  { path: 'work', component: WorkComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'data-protection', component: DataProtectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
