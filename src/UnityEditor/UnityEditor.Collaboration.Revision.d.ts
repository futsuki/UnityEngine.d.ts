declare namespace UnityEditor.Collaboration {
  class Revision {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly authorName: string;
    readonly author: string;
    readonly comment: string;
    readonly revisionID: string;
    readonly reference: string;
    readonly timeStamp: number;
    // fields
  }
}
