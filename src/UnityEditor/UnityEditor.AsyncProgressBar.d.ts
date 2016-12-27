declare namespace UnityEditor {
  class AsyncProgressBar extends System.Object {
    // constructors
    constructor();
    // methods
    static Display(progressInfo: string, progress: number): void;
    static Clear(): void;
    // properties
    static readonly progress: number;
    static readonly progressInfo: string;
    static readonly isShowing: boolean;
    // fields
  }
}
