declare namespace UnityEngine {
  class WWWForm extends System.Object {
    // constructors
    constructor();
    // methods
    AddField(fieldName: string, value: string): void;
    AddField(fieldName: string, value: string, e: any): void;
    AddField(fieldName: string, i: number): void;
    AddBinaryData(fieldName: string, contents: number[], fileName: string): void;
    AddBinaryData(fieldName: string, contents: number[]): void;
    AddBinaryData(fieldName: string, contents: number[], fileName: string, mimeType: string): void;
    // properties
    readonly headers: any;
    readonly data: number[];
    // fields
  }
}
