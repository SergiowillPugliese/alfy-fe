export interface BaseResponseInterface<T> {
  success: boolean;
  message: string;
  data: T;
}
