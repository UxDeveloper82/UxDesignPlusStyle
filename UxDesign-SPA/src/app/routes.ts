import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import { RegisterComponent } from './register/register.component';
import { ValueComponent } from './value/value.component';

export const appRoutes: Routes = [
   { path: 'home', component: HomeComponent },
   { path: 'contact', component: ContactComponent },
   { path: 'portfolio', component: PortfolioComponent },
   { path: 'blog', component: BlogComponent },
   { path: 'register', component: RegisterComponent },
   { path: 'value' , component: ValueComponent },
   { path: '**', redirectTo: 'home', pathMatch: 'full'},
];
