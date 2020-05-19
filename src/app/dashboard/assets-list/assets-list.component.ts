import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from "@angular/core";
import { AssetsList } from "src/app/models/asset.interface";

@Component({
  selector: "app-assets-list",
  templateUrl: "./assets-list.component.html",
  styleUrls: ["./assets-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssetsListComponent implements OnInit {
  @Input()
  assets: AssetsList;

  constructor() {}

  ngOnInit() {}
}
