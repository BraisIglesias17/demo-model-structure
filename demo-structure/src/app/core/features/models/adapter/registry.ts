
export namespace ModelExtension {
    const extendedModels: { [key: string]: Function } = {};

    export function register(base: Function) {
        return function (constructor: Function) {
            const baseClassName = base.prototype.constructor.name;
            extendedModels[baseClassName] = constructor;
        }
    }
    
    export function getExtendedModel(base: Function){
        const baseClassName = base.prototype.constructor.name;
        return extendedModels[baseClassName] ? extendedModels[baseClassName] : base;
    }
}