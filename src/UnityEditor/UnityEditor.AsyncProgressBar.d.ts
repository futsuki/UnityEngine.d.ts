declare namespace UnityEditor {
  class AsyncProgressBar {
    // constructors
    constructor();
    // methods
    static Display(progressInfo: string, progress: number): any;
    static Clear(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly progress: number;
    static readonly progressInfo: string;
    static readonly isShowing: boolean;
    // fields
  }
}
