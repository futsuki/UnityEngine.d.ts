declare namespace UnityEngine.WSA {
  class Toast extends System.Object {
    // constructors
    protected constructor();
    // methods
    static GetTemplate(templ: UnityEngine.WSA.ToastTemplate): string;
    static Create(xml: string): UnityEngine.WSA.Toast;
    static Create(image: string, text: string): UnityEngine.WSA.Toast;
    Show(): void;
    Hide(): void;
    // properties
    "arguments": string;
    readonly activated: boolean;
    readonly dismissed: boolean;
    readonly dismissedByUser: boolean;
    // fields
  }
}
