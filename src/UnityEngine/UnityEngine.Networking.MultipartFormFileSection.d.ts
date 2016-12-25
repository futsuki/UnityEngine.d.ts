declare namespace UnityEngine.Networking {
  class MultipartFormFileSection {
    // constructors
    constructor(name: string, data: number[], fileName: string, contentType: string);
    constructor(data: number[]);
    constructor(fileName: string, data: number[]);
    constructor(name: string, data: string, dataEncoding: any, fileName: string);
    constructor(data: string, dataEncoding: any, fileName: string);
    constructor(data: string, fileName: string);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly sectionName: string;
    readonly sectionData: number[];
    readonly fileName: string;
    readonly contentType: string;
    // fields
  }
}
