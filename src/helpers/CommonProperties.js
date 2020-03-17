

export const PADDING_RX = 6;

export function commonContextProperties (prefix = undefined, customProperties = undefined) {

    const properties = {};

    for (let i = 1; i <= 20; i++) {

        const p = i * 5;
        properties[p + "cw"] = p + "cw";
        properties[p + "ch"] = p + "ch";

        properties[p + "pw"] = p + "pw";
        properties[p + "ph"] = p + "ph";

        properties[p + "tw"] = p + "tw";
        properties[p + "th"] = p + "th";
    }

    return createPrefixedProperties(properties, prefix, customProperties);
}

export function commonRxProperties (prefix = undefined, customProperties = undefined) {

    const properties = {
        "0d1": 0.1,
        "0d2": 0.2,
        "0d3": 0.3,
        "0d4": 0.4,
        "0d5": 0.5,

        Padding: PADDING_RX,

        SmallFx: "2fx",
        SmallLx: "2lx",

        TextFx: "2.25fx",
        TextLx: "2.25lx",

        H6Fx: "2.5fx",
        H6Lx: "2.5lx",

        H5Fx: "3fx",
        H5Lx: "3lx",

        H4Fx: "3.5fx",
        H4Lx: "3.5lx",

        H3Fx: "4fx",
        H3Lx: "4lx",

        H2Fx: "5fx",
        H2Lx: "5lx",

        H1Fx: "6fx",
        H1Lx: "6lx"
    };

    for (let i = 1; i <= 20; i++) {
        properties[i] = i;
        properties[i + "d5"] = i + 0.5;
    }

    return createPrefixedProperties(properties, prefix, customProperties);
}

function createPrefixedProperties (properties, prefix = "g", customProperties = {}) {

    properties = Object.assign(properties, customProperties);

    const result = {};
    for (let key of properties) {
        result[(key == "onResize" ? '': prefix) + key] = properties[key];
    }

    return result;
}
