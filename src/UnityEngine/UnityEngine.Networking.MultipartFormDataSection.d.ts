declare namespace UnityEngine.Networking {
  class MultipartFormDataSection {
    // constructors
    constructor(name: string, data: number[], contentType: string);
    constructor(name: string, data: number[]);
    constructor(data: number[]);
    constructor(name: string, data: string, encoding: any, contentType: string);
    constructor(name: string, data: string, contentType: string);
    constructor(name: string, data: string);
    constructor(data: string);
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
