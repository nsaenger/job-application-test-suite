import { Injectable } from '@angular/core';

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

  constructor( ) { }

  public loadData(): Promise<WoodData[]> {
    return new Promise<WoodData[]>((resolve, reject) => {
      // TODO: Implement me
    });
  }
}
