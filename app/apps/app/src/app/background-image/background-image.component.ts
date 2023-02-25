import { Component, Input, ViewEncapsulation } from "@angular/core"

@Component({
  selector: "app-background-image",
  templateUrl: "./background-image.component.html",
  styleUrls: ["background-image.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class FoBackgroundImageComponent {
  @Input() public imagePath = ''
}
