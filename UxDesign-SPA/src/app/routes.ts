import { MemberListResolver } from './_resolvers/member-list.resolver';
import { MyportfolioDetailComponent } from './myportfolio/myportfolio-detail/myportfolio-detail.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { ValueComponent } from './value/value.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MyportfolioListComponent } from './myportfolio/myportfolio-list/myportfolio-list.component';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';

export const appRoutes: Routes = [
   { path: 'home', component: HomeComponent },
   {
      path: '',
      runGuardsAndResolvers: 'always',
      canActivate: [AuthGuard],
      children: [
        { path: 'members', component: MemberListComponent,
           resolve: {users: MemberListResolver}},
        { path: 'members/:id', component: MemberDetailComponent,
            resolve: {user: MemberDetailResolver}},
        { path: 'messages', component: MessagesComponent },
        { path: 'lists' , component: ListsComponent },
        { path: 'portfolio', component: MyportfolioListComponent },
        { path: 'portfolio/:id', component: MyportfolioDetailComponent},
        { path: 'contact', component: ContactComponent },
        { path: 'blog', component: BlogComponent },
        { path: 'value' , component: ValueComponent },
      ]
   },
   { path: '**', redirectTo: 'home', pathMatch: 'full'},
];

