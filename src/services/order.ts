import IOrder from 'interfaces/models/order';
import { IPaginationParams, IPaginationResponse } from 'interfaces/pagination';
import { Observable } from 'rxjs';

import apiService, { ApiService } from './api';

export class OrderService {
  constructor(private apiService: ApiService) {}

  public list(params: IPaginationParams): Observable<IPaginationResponse<IOrder>> {
    return this.apiService.get('/order', params);
  }

  public getOne(id: string): Observable<IOrder> {
    return this.apiService.get(`/order/${id}`, id);
  }

  public save(model: Partial<IOrder>): Observable<IOrder> {
    return this.apiService.post('/order', model);
  }

  public update(model: Partial<IOrder>): Observable<IOrder> {
    return this.apiService.put(`/order/${model.id}`, model);
  }

  public delete(id: string): Observable<void> {
    return this.apiService.delete(`/order/${id}`);
  }
}

const orderService = new OrderService(apiService);
export default orderService;
