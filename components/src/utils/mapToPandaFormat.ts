type AnyObject = {
    [key: string]: any;
};

export function formatRecursive(obj: AnyObject, formatFn: (value: string) => any): AnyObject {
    return Object.keys(obj).reduce((formatted: AnyObject, key: string) => {
        const value = obj[key];
        const isObject = value !== null && typeof value === 'object' && !Array.isArray(value);
        formatted[key] = isObject ? formatRecursive(value, formatFn) : formatFn(value);
        return formatted;
    }, {});
}

export function format(obj: AnyObject) {
  return {
    toToken: () => formatRecursive(obj, (value: string) => ({ value })),
    toSemanticToken: (prefix: string = '') => formatRecursive(obj, (value: string) => ({ value: `{${prefix}.${value}}` })),
  }
}

