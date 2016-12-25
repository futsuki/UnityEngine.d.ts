declare namespace UnityEditor {
  class MenuCommand {
    // constructors
    constructor(inContext: any, inUserData: number);
    constructor(inContext: any);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    context: any;
    userData: number;
  }
}
