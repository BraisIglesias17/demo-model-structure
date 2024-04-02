export namespace Model {
  const extendedModels: { [key: string]: Function } = {};

  // TO DO: Quitar any con "new ()=> {}""
  export function register(target: any) {
    const instance = new target();

    extendedModels[Object.getPrototypeOf(instance.constructor).name] =
      target.map;
  }

  export function getMap() {
    return extendedModels;
  }
}
