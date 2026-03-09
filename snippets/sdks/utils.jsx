export const Text = ({ x }) => {
    if (typeof x === "string") {
        return <>{x}</>;
    }
    return <>{x?.Name ?? ""}</>;
};

export const Bold = ({x}) => {
    return <strong>{x}</strong>;
};

export const Italic = ({x}) => {
    return <em>{x}</em>;
};

export const Code = ({x}) => {
    if (typeof x === "string") {
        return <code>{x}</code>;
    }
    return <code>{x?.Name ?? ""}</code>;
};

export const Ref = ({x, href}) => {
    if (typeof x === "string") {
        return <a href={href}>{x}</a>;
    }
    return <a href={x?.Ref}>{x?.Name ?? ""}</a>;
};

export const CodeRef = ({x, href}) => {
    if (typeof x === "string") {
        return <a href={href}><code>{x}</code></a>;
    }
    return <a href={x?.Ref}><code>{x?.Name ?? ""}</code></a>;
};

export const If = ({c, children}) => {
    return c ? <>{children}</> : null;
};

export const Switch = ({i, children}) => {
    const sections = {children}.children;
    const selected = sections[i];
    if (selected) {
        return selected;
    }
    throw new Error(`Specified section '${i}' is not found!`);
};

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
};
