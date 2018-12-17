import { BlogDetailResolver } from './_resolvers/blog-detail.resolver';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';
import { MyportfolioDetailComponent } from './myportfolio/myportfolio-detail/myportfolio-detail.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ValueComponent } from './value/value.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MyportfolioListComponent } from './myportfolio/myportfolio-list/myportfolio-list.component';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { ListsResolver } from './_resolvers/lists.resolver';
import { MessagesResolver } from './_resolvers/messages.resolver';
import { BlogDetailComponent } from './myblog/blog-detail/blog-detail.component';
import { BlogListComponent } from './myblog/blog-list/blog-list.component';
import { BlogListResolver } from './_resolvers/blog-list.resolver';
import { PortfolioListResolver } from './_resolvers/portfolio-list.resolver';
import { PortfolioDetailResolver } from './_resolvers/portfolio-detail.resolver';
import { BlogNewComponent } from './myblog/blog-new/blog-new.component';

export const appRoutes: Routes = [
   { path: 'home', component: HomeComponent },
   { path: 'portfolio', component: MyportfolioListComponent,
            resolve: { portfolios: PortfolioListResolver }},
    { path: 'portfolio/:id', component: MyportfolioDetailComponent,
             resolve: { portfolio: PortfolioDetailResolver }},
    { path: 'blog', component: BlogListComponent,
             resolve: {blogs: BlogListResolver}},
    { path: 'blog/:id', component: BlogDetailComponent,
             resolve: {blog: BlogDetailResolver}},
    { path: 'contact', component: ContactComponent },
    { path: 'value' , component: ValueComponent },
    { path: 'blog-new' , component: BlogNewComponent },
    {
      path: '',
      runGuardsAndResolvers: 'always',
      canActivate: [AuthGuard],
      children: [
        { path: 'members', component: MemberListComponent,
           resolve: {users: MemberListResolver}},
        { path: 'members/:id', component: MemberDetailComponent,
            resolve: {user: MemberDetailResolver}},
        { path: 'member/edit', component: MemberEditComponent,
            resolve: {user: MemberEditResolver}, canDeactivate: [PreventUnsavedChanges]},
        { path: 'messages', component: MessagesComponent, resolve: { messages: MessagesResolver}},
        { path: 'lists' , component: ListsComponent,  resolve: {users: ListsResolver}},
      ]
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full'},
];

