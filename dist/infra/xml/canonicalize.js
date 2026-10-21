"use strict";
/**
 * Simplified Exclusive XML Canonicalization (exc-c14n) for DFe XML.
 *
 * Covers the subset required by NFe/CTe/MDFe:
 * - Removes XML declaration
 * - Removes extra whitespace between tags
 * - Sorts attributes alphabetically
 * - Preserves namespace declarations on the element where they appear
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.canonicalize = canonicalize;
function sortAttributes(tagContent) {
    return tagContent.replace(/<([a-zA-Z0-9:]+)((?:\s+[^>]+?)?)(\s*\/?)>/g, (_match, tagName, attrs, selfClose) => {
        if (!attrs.trim())
            return `<${tagName}${selfClose}>`;
        const attrRegex = /([a-zA-Z0-9:_-]+)\s*=\s*"([^"]*)"/g;
        const attrList = [];
        let attrMatch;
        while ((attrMatch = attrRegex.exec(attrs)) !== null) {
            attrList.push({ name: attrMatch[1], value: attrMatch[2] });
        }
        attrList.sort((a, b) => {
            const aIsNs = a.name.startsWith('xmlns');
            const bIsNs = b.name.startsWith('xmlns');
            if (aIsNs && !bIsNs)
                return -1;
            if (!aIsNs && bIsNs)
                return 1;
            return a.name.localeCompare(b.name);
        });
        const sortedAttrs = attrList.map((a) => `${a.name}="${a.value}"`).join(' ');
        return `<${tagName} ${sortedAttrs}${selfClose}>`;
    });
}
function canonicalize(xml) {
    let result = xml;
    // Remove XML declaration
    result = result.replace(/<\?xml[^?]*\?>\s*/g, '');
    // Remove carriage returns
    result = result.replace(/\r/g, '');
    // Remove whitespace between tags (but not inside text content)
    result = result.replace(/>\s+</g, '><');
    // Expand self-closing tags (C14N requires <tag></tag>, not <tag/>)
    result = result.replace(/<([a-zA-Z0-9:]+)([^>]*?)\/>/g, '<$1$2></$1>');
    // Trim leading/trailing whitespace
    result = result.trim();
    // Sort attributes
    result = sortAttributes(result);
    return result;
}
//# sourceMappingURL=canonicalize.js.map