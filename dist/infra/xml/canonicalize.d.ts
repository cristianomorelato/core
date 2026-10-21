/**
 * Simplified Exclusive XML Canonicalization (exc-c14n) for DFe XML.
 *
 * Covers the subset required by NFe/CTe/MDFe:
 * - Removes XML declaration
 * - Removes extra whitespace between tags
 * - Sorts attributes alphabetically
 * - Preserves namespace declarations on the element where they appear
 */
export declare function canonicalize(xml: string): string;
//# sourceMappingURL=canonicalize.d.ts.map