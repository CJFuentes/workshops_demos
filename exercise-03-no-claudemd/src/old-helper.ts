// TODO: This file is scheduled for removal in v2.0
// Some functions still referenced by legacy endpoints

export function legacyTransform(data: unknown): string {
  return JSON.stringify(data);
}
