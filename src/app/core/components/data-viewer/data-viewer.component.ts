import { Component, Input, OnInit } from '@angular/core';
import { WoodData } from '../../services/data-service/data.service';

@Component({
  selector: 'data-viewer',
  templateUrl: './data-viewer.component.html',
  styleUrls: [ './data-viewer.component.scss' ],
})
export class DataViewerComponent implements OnInit {
  @Input() public data: WoodData[] = [];
  displayedColumns: string[] = [];
  columnsDefs = [
    { id: 'timberId', name: 'ID' },
    { id: 'count', name: 'Count' },
    { id: 'lengthNominal', name: 'Length Nominal' },
    { id: 'bigEndDiameter', name: 'Big End Diameter' },
    { id: 'smallEndDiameter', name: 'small End Diameter' },
    { id: 'middleDiameter', name: 'Middle Diameter' },
    { id: 'cylinderDiameter', name: 'Cylinder Diameter' },
    { id: 'protocolId', name: 'Protocol ID' },
    { id: 'installation', name: 'Installation' },
    { id: 'date', name: 'Date' },
    { id: 'length', name: 'Length' },
    { id: 'volume', name: 'Volume' },
    { id: 'mainProductVolume', name: 'Main Product Volume' },
    { id: 'byProductVolume', name: 'Product Volume' },
  ];

  public ngOnInit(): void {
    this.displayedColumns = this.columnsDefs.map((column) => column.id);
  }
}
