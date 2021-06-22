export const isPlainObject = (item: unknown): item is Record < keyof string | number,
    unknown > => {
        return (
            item !== null &&
            typeof item === 'object' &&
            // TS thinks `item is possibly null` even though this was our first guard.
            // @ts-ignore
            item.constructor === Object
        );
    }

export interface IDeepMergeOptions {
    clone ? : boolean;
    queueLimit: number;
}

/**
 * merge target & source objects at all nesting levels 
 * @param {Object} target
 * @param {Object} source 
 * @param {IDeepMergeOptions} options 
 * @returns {Promise<unknown>}
 * @type {Function}
 */
export function mergeDeep < T > (
    target: T,
    source: unknown,
    options: IDeepMergeOptions = {
        clone: true,
        queueLimit: 100,
    },
): Promise < unknown > {
    let inProgress = 1;
    const __mergeDeep = (__target, __source, __options) => {
        if (inProgress >= __options.queueLimit) {
            return __mergeDeep(__target, __source, __options);
        } else {
            inProgress++;
        }

        const output = __options.clone ? {
            ...__target
        } : __target;

        if (isPlainObject(__target) && isPlainObject(__source)) {
            Object.keys(__source).forEach((key) => {
                // prototype pollution
                if (key === '__proto__') {
                    return;
                }

                if (isPlainObject(__source[key]) && key in __target && isPlainObject(__target[key])) {
                    // Since `output` is a clone of `target` and we have narrowed `target` in this block we can cast to the same type.
                    (output as Record < keyof string | number, unknown > )[key] = mergeDeep(__target[key], __source[key], __options);
                } else {
                    (output as Record < keyof string | number, unknown > )[key] = __source[key];
                }
            });
        }

        inProgress--;
        return output;
    }

    return __mergeDeep(target, source, options);
}

export default mergeDeep;
