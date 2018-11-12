import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import { ValueComponent } from './value/value.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
   { path: 'home', component: HomeComponent },
   {
      path: '',
      runGuardsAndResolvers: 'always',
      canActivate: [AuthGuard],
      children: [
        { path: 'members', component: MemberListComponent },
        { path: 'messages', component: MessagesComponent },
        { path: 'lists' , component: ListsComponent },
        { path: 'contact', component: ContactComponent },
        { path: 'portfolio', component: PortfolioComponent },
        { path: 'blog', component: BlogComponent },
        { path: 'value' , component: ValueComponent },
      ]
   },
   { path: '**', redirectTo: 'home', pathMatch: 'full'},
];

