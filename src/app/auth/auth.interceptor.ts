import { Inject, Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from "@angular/common/http";
import { AuthServiceService } from "./auth-service.service";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private authservice: AuthServiceService){}

    //adds the token to the headers on outgoing call
    intercept(request: HttpRequest<unknown>, next: HttpHandler){
        const authToken = this.authservice.getToken();
        const authRequest = 

        request.clone({headers:request.headers.set("Authorization", "Bearer " + authToken)});
        return next.handle(authRequest);
    }
}