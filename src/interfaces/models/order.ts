export default interface IOrder {
  id: string;
  userId?: number;
  name: string;
  description: string;
  quantity: number;
  value: number;
}
