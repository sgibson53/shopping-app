import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home/home.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { AuthGuard } from '../auth/auth-guard.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../shared/auth.interceptor';
import { LoggingInterceptor } from '../shared/logging.interceptor';

@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent
    ],
    imports: [
        SharedModule,
        AppRoutingModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent
    ],
    providers: [
        AuthGuard,
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}, // Order matters here (Auth interceptor will run first)
        {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true}
    ]
})
export class CoreModule {}
