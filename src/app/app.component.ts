import { Component } from "@angular/core";
import { PortfolioService } from "./portfolio.service";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor(
    private protfolioService: PortfolioService,
    private fb: FormBuilder
  ) {}
  portfolioForm = this.fb.group({
    slug: [""],
    nick_name: [""],
    location: [""],
    country: [""],
    about: [""],
    description: [""],
    fb_link: [""],
    instagram_link: [""],
    twitter_link: [""],
    share_link: [""],
    card_img: [null],
    banner_img: [null],
  });

  //form submit method

  public onSubmit(values: any) {
    if (this.portfolioForm.valid) {
      this.protfolioService.editProtfolio(values).subscribe(
        (data) => {
          console.log("data updated successfully", data);
          // this.portfolioForm.reset(this.portfolioForm.value);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
