import { Component, OnInit, Input } from "@angular/core";
import { Asset } from "src/app/models/asset.interface";

@Component({
  selector: "app-asset",
  templateUrl: "./asset.component.html",
  styleUrls: ["./asset.component.scss"],
})
export class AssetComponent implements OnInit {
  @Input()
  asset: Asset;

  constructor() {}

  ngOnInit() {
    console.log(this.asset);
  }
}
