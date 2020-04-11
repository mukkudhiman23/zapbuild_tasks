import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { PortfolioService } from "./portfolio.service";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
  providers: [PortfolioService],
  bootstrap: [AppComponent],
})
export class AppModule {}
