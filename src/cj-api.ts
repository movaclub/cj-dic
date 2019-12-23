import Axios from "axios-observable";
import {AxiosObservable} from "axios-observable/dist/axios-observable.interface";

export interface CodeByZiResponce {
  zi: string;
  code: string[];
}

export interface ZiByCodeResponce {
  zi: string[];
  code: string;
}

export class CjApi {

  private baseUrl = 'http://localhost:3000';

  getCodeByZi(zi: string): AxiosObservable<CodeByZiResponce> {
    return Axios.get(`${this.baseUrl}/api/zi2c/${zi}`);
  }

  getZiByCode(code: string): AxiosObservable<ZiByCodeResponce> {
    return Axios.get(`${this.baseUrl}/api/c2zi/${code}`);
  }

}
