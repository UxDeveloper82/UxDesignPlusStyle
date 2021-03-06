import { PortfolioDetailResolver } from './_resolvers/portfolio-detail.resolver';
import { PortfolioListResolver } from './_resolvers/portfolio-list.resolver';
import { PortfolioService } from './_services/portfolio.service';
import { BlogListResolver } from './_resolvers/blog-list.resolver';
import { BlogDetailResolver } from './_resolvers/blog-detail.resolver';
import { BlogDetailComponent } from './myblog/blog-detail/blog-detail.component';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { AuthGuard } from './_guards/auth.guard';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BsDropdownModule, TabsModule, BsDatepickerModule, PaginationModule, ButtonsModule } from 'ngx-bootstrap';
import { JwtModule } from '@auth0/angular-jwt';
import { NgxGalleryModule } from 'ngx-gallery';
import { FileUploadModule } from 'ng2-file-upload';
import {TimeAgoPipe} from 'time-ago-pipe';
import { BlogService } from './_services/blog.service';
import { UserService } from './_services/user.service';
import { AuthService } from './_services/auth.service';
import { AlertifyService } from './_services/alertify.service';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { appRoutes } from './routes';
import { RegisterComponent } from './register/register.component';
import { ValueComponent } from './value/value.component';
import { ListsComponent } from './lists/lists.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberCardComponent } from './members/member-card/member-card.component';
import { MessagesComponent } from './messages/messages.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MyportfolioListComponent } from './myportfolio/myportfolio-list/myportfolio-list.component';
import { MyportfolioDetailComponent } from './myportfolio/myportfolio-detail/myportfolio-detail.component';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { PhotoEditorComponent } from './members/photo-editor/photo-editor.component';
import { ListsResolver } from './_resolvers/lists.resolver';
import { MessagesResolver } from './_resolvers/messages.resolver';
import { MemberMessagesComponent } from './members/member-messages/member-messages.component';
import { BlogListComponent } from './myblog/blog-list/blog-list.component';
import { BlogNewComponent } from './myblog/blog-new/blog-new.component';

export function tokenGetter() {
   return localStorage.getItem('token');
}

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      FooterComponent,
      ContactComponent,
      RegisterComponent,
      ValueComponent,
      ListsComponent,
      MemberListComponent,
      MessagesComponent,
      MemberCardComponent,
      MemberDetailComponent,
      MemberEditComponent,
      MyportfolioListComponent,
      MyportfolioDetailComponent,
      PhotoEditorComponent,
      TimeAgoPipe,
      MemberMessagesComponent,
      BlogListComponent,
      BlogDetailComponent,
      BlogNewComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      BsDropdownModule.forRoot(),
      TabsModule.forRoot(),
      NgxGalleryModule,
      FileUploadModule,
      BsDatepickerModule.forRoot(),
      PaginationModule.forRoot(),
      ButtonsModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      JwtModule.forRoot({
         config: {
           tokenGetter: tokenGetter,
           whitelistedDomains: ['localhost:5000'],
           blacklistedRoutes: ['localhost:5000/api/auth']
         }
       })
     ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      AlertifyService,
      AuthGuard,
      UserService,
      BlogService,
      PortfolioService,
      MemberDetailResolver,
      MemberListResolver,
      MemberEditResolver,
      PreventUnsavedChanges,
      ListsResolver,
      MessagesResolver,
      BlogListResolver,
      BlogDetailResolver,
      PortfolioListResolver,
      PortfolioDetailResolver
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
