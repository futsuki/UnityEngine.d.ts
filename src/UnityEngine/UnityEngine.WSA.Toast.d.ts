declare namespace UnityEngine.WSA {
  class Toast {
    // constructors
    private constructor();
    // methods
    static GetTemplate(templ: UnityEngine.WSA.ToastTemplate): string;
    static Create(xml: string): UnityEngine.WSA.Toast;
    static Create(image: string, text: string): UnityEngine.WSA.Toast;
    Show(): void;
    Hide(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    "arguments": string;
    readonly activated: boolean;
    readonly dismissed: boolean;
    readonly dismissedByUser: boolean;
    // fields
  }
}
