import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface WoodData {
  timberId: number;
  count: number;
  lengthNominal: number;
  bigEndDiameter: number;
  smallEndDiameter: number;
  middleDiameter: number;
  cylinderDiameter: number;
  protocolId: number;
  installation: number;
  date: Date;
  length: number;
  volume: number;
  mainProductVolume: number;
  byProductVolume: number;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {

  private readonly dataUrl: string = '/assets/wood-data.json';

  constructor(private http: HttpClient) { }

  public loadData(): Promise<WoodData[]> {
    return new Promise<WoodData[]>((resolve, reject) => {
      this.http.get<WoodData[]>(this.dataUrl, { responseType: 'json' })
        .subscribe({ next: resolve, error: reject });
    });
  }
}
