export enum RequestMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  PATCH = "PATCH",
}

export type MainRequest = {
  method: RequestMethod;
  url: string;
  headers?: Record<string, string>;
  body?: string;
};

export enum AuthorizationType {
  None = "none",
  Basic = "basic",
  Bearer = "bearer",
}
