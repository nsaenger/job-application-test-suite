import { Component, Input, OnInit } from '@angular/core';
import { WoodData } from '../../services/data-service/data.service';

@Component({
  selector: 'data-viewer',
  templateUrl: './data-viewer.component.html',
  styleUrls: [ './data-viewer.component.scss' ],
})
export class DataViewerComponent implements OnInit {
  @Input() public data: WoodData[] = [];

  public ngOnInit(): void {
    console.table(this.data);
    // TODO: Implement me
  }
}
