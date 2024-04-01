export namespace Model {
  const extendedModels: { [key: string]: Function } = {};

  export function register(target: any) {
    const instance = new target();

    extendedModels[Object.getPrototypeOf(instance.constructor).name] =
      target.map;
  }

  export function getMap() {
    return extendedModels;
  }
}
