export interface IOptions {
  label: string;
  value: string | number;
}

export interface IValue<T extends string | number> {
  value: T;
}
