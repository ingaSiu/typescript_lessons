export interface Job {
  title: string;
  description: string;
  price: number;
  type: string;
  starting_from: Date; //string?
  drivers_license: boolean;
  user_id: number;
}
