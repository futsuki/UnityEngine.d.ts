declare namespace UnityEngine {
  class WWWTranscoder extends System.Object {
    // constructors
    constructor();
    // methods
    static URLEncode(toEncode: string): string;
    static URLEncode(toEncode: string, e: any): string;
    static URLEncode(toEncode: number[]): number[];
    static QPEncode(toEncode: string): string;
    static QPEncode(toEncode: string, e: any): string;
    static QPEncode(toEncode: number[]): number[];
    static Encode(input: number[], escapeChar: number, space: number, forbidden: number[], uppercase: boolean): number[];
    static URLDecode(toEncode: string): string;
    static URLDecode(toEncode: string, e: any): string;
    static URLDecode(toEncode: number[]): number[];
    static QPDecode(toEncode: string): string;
    static QPDecode(toEncode: string, e: any): string;
    static QPDecode(toEncode: number[]): number[];
    static Decode(input: number[], escapeChar: number, space: number): number[];
    static SevenBitClean(s: string): boolean;
    static SevenBitClean(s: string, e: any): boolean;
    static SevenBitClean(input: number[]): boolean;
    // properties
    // fields
  }
}
