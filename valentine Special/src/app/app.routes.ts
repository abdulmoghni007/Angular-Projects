import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { TodoComponent } from './todo/todo.component';
import { SpecialarrangementComponent } from './specialarrangement/specialarrangement.component';

export const routes: Routes = [
  {
    'path':'header',component :HeaderComponent},
    {'path':'',component :HomeComponent},
    {'path':'footer',component :FooterComponent},
    {'path':'todo' ,component:TodoComponent },
    {'path':'specialarrangement',component:SpecialarrangementComponent}


];
