import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService, WoodData } from '../../services/data-service/data.service';

@Component({
  selector: 'application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {

  public data: WoodData[] = [];

  constructor(
    private dataService: DataService
  ) {
  }

  public ngOnInit(): void {
    this.dataService.loadData()
      .then(data => this.handleData(data))
      .catch(error => this.handleError(error))
  }

  public handleData(data: WoodData[]) {
    this.data = data;
  }

  public handleError(error: HttpErrorResponse) {
    console.error(error);
  }
}
