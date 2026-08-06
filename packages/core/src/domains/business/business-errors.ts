export class BusinessAlreadyExistsError extends Error {
  constructor(id: string) {
    super(`Business '${id}' already exists`);
    this.name = "BusinessAlreadyExistsError";
  }
}