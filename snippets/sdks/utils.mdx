export const VerifyArgumentType = (arg, name, type) => {
    if (!arg) {
        throw new Error(`'${name}' is required!`);
    }
    if (typeof type === "string") {
        if (typeof arg !== type) {
            throw new Error(`Expected '${name}' to be of '${type}' type, got '${typeof arg}'!`);
        }
    } else if (Array.isArray(type)) {
        if (!type.includes(typeof arg)) {
            throw new Error(`Expected '${name}' to be one of '${type}' types, got '${typeof arg}'!`);
        }
    } else {
        throw new Error(`Expected 'type' to be one of 'string,array' types, got '${typeof type}'!`);
    }
}

export const Text = ({ x }) => {
    VerifyArgumentType(x, "x", ["string", "object"]);
    if (typeof x === "string") {
        return <>{x}</>;
    }
    VerifyArgumentType(x.Name, "x.Name", "string");
    return <>{x.Name}</>;
}

export const Bold = ({x}) => {
    VerifyArgumentType(x, "x", "string");
    return <strong>{x}</strong>;
}

export const Italic = ({x}) => {
    VerifyArgumentType(x, "x", "string");
    return <em>{x}</em>;
}

export const Code = ({x}) => {
    VerifyArgumentType(x, "x", ["string", "object"]);
    if (typeof x === "string") {
        return <code>{x}</code>;
    }
    VerifyArgumentType(x.Name, "x.Name", "string");
    return <code>{x.Name}</code>;
}

export const Ref = ({x, href}) => {
    VerifyArgumentType(x, "x", ["string", "object"]);
    if (typeof x === "string") {
        VerifyArgumentType(href, "href", "string");
        return <a href={href}>{x}</a>;
    }
    VerifyArgumentType(x.Name, "x.Name", "string");
    VerifyArgumentType(x.Ref, "x.Ref", "string");
    return <a href={x.Ref}>{x.Name}</a>;
}

export const CodeRef = ({x, href}) => {
    VerifyArgumentType(x, "x", ["string", "object"]);
    if (typeof x === "string") {
        VerifyArgumentType(href, "href", "string");
        return <a href={href}><code>{x}</code></a>;
    }
    VerifyArgumentType(x.Name, "x.Name", "string");
    VerifyArgumentType(x.Ref, "x.Ref", "string");
    return <a href={x.Ref}><code>{x.Name}</code></a>;
}

export const If = ({c, children}) => {
    return c ? <>{children}</> : null;
}

export const Switch = ({i, children}) => {
    const sections = {children}.children;
    const selected = sections[i];
    if (selected) {
        return selected;
    }
    throw new Error(`Specified section '${i}' is not found!`);
}

export const Select = ({name, children}) => {
    const sections = {children}.children;
    if (Array.isArray(sections)) {
        const selected = sections.find((sec) => sec.props?.name === name);
        if (selected) {
            return selected;
        }
    } else if (sections && (sections.props?.name === name)) {
        return sections;
    }
    throw new Error(`Specified section '${name}' is not found!`);
}
