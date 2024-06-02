import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostCreateComponent } from './post/post-create/post-create.component';
import { PostDisplayComponent } from './post/post-display/post-display.component';
import { LoginComponent } from './auth/login/login/login.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { PostServiceService } from './post/post-service.service';
import { ErrorComponent } from './error/error/error.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatDialogActions } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    PostDisplayComponent,
    LoginComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogActions,
    MatExpansionModule

  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true}, PostServiceService, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
