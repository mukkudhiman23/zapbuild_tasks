import { Component } from "@angular/core";
import { PortfolioService } from "./portfolio.service";
import { FormBuilder, Validators } from "@angular/forms";

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

  // Regular expression to check valid URL
  private urlRegex = /[-a-zA-Z0-9@:%_\+.~#?&\/\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&=]*)?/gi;

  portfolioForm = this.fb.group({
    slug: ["", Validators.required],
    nick_name: ["", Validators.required],
    location: ["", [Validators.required, Validators.minLength(3)]],
    country: ["", [Validators.required, Validators.minLength(3)]],
    about: [
      "",
      [Validators.required, Validators.minLength(5), Validators.maxLength(20)],
    ],
    description: [
      "",
      [Validators.required, Validators.minLength(20), Validators.maxLength(40)],
    ],
    fb_link: ["", [Validators.required, Validators.pattern(this.urlRegex)]],
    instagram_link: [
      "",
      [Validators.required, Validators.pattern(this.urlRegex)],
    ],
    twitter_link: [
      "",
      [Validators.required, Validators.pattern(this.urlRegex)],
    ],
    share_link: ["", [Validators.required, Validators.pattern(this.urlRegex)]],
    card_img: [null, Validators.required],
    banner_img: [null, Validators.required],
    card_image_file: [""],
    banner_img_file: [""],
  });

  /**
   * Return the form controls
   */
  get formVal() {
    return this.portfolioForm.controls;
  }

  //Set the selected file into form object
  fileProgress(fileInput: any) {
    if (fileInput.target.files.length > 0) {
      const file = fileInput.target.files[0];
      this.portfolioForm.patchValue({
        card_image_file: file,
      });
    } else {
      this.portfolioForm.patchValue({
        card_image_file: "",
      });
    }
  }

  //Set the selected file into form object
  bannerProgress(fileInput: any) {
    if (fileInput.target.files.length > 0) {
      const file = fileInput.target.files[0];
      this.portfolioForm.patchValue({
        banner_img_file: file,
      });
    } else {
      this.portfolioForm.patchValue({
        banner_img_file: "",
      });
    }
  }
  //form submit method

  public onSubmit() {
    if (this.portfolioForm.valid) {
      const formData = new FormData();
      const values = this.portfolioForm.value;

      for (const key of Object.keys(values)) {
        formData.append(key, values[key]);
      }

      this.protfolioService.editProtfolio(formData).subscribe(
        (data) => {
          console.log("data updated successfully", data);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      for (const control of Object.keys(this.portfolioForm.controls)) {
        this.portfolioForm.controls[control].markAsTouched();
      }
    }
  }
}
