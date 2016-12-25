declare namespace UnityEngine {
  class WWWForm {
    // constructors
    constructor();
    // methods
    AddField(fieldName: string, value: string): any;
    AddField(fieldName: string, value: string, e: any): any;
    AddField(fieldName: string, i: number): any;
    AddBinaryData(fieldName: string, contents: number[], fileName: string): any;
    AddBinaryData(fieldName: string, contents: number[]): any;
    AddBinaryData(fieldName: string, contents: number[], fileName: string, mimeType: string): any;
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
