declare namespace UnityEngine {
  class WWWForm {
    // constructors
    constructor();
    // methods
    AddField(fieldName: string, value: string): void;
    AddField(fieldName: string, value: string, e: any): void;
    AddField(fieldName: string, i: number): void;
    AddBinaryData(fieldName: string, contents: number[], fileName: string): void;
    AddBinaryData(fieldName: string, contents: number[]): void;
    AddBinaryData(fieldName: string, contents: number[], fileName: string, mimeType: string): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly headers: any;
    readonly data: number[];
    // fields
  }
}
