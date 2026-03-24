export function stringToBoolean(value: unknown): boolean {
  if (typeof value === 'boolean') return value;

  if (typeof value === 'string') {
    return value.toLowerCase() === 'true';
  }

  return false;
}

export function bodyToUpperCase<T extends Record<string, any>>(body: T): T {
    const newBody: any = {};

    for (const key in body) {
        if (typeof body[key] === "string"  && key !== "status") {
            newBody[key] = body[key].toUpperCase();
        } else {
            newBody[key] = body[key]; // mantém números, booleanos etc.
        }
    }

    return newBody;
}