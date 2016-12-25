declare namespace UnityEngine.WSA {
  class Toast {
    // constructors
    private constructor();
    // methods
    static GetTemplate(templ: UnityEngine.WSA.ToastTemplate): string;
    static Create(xml: string): UnityEngine.WSA.Toast;
    static Create(image: string, text: string): UnityEngine.WSA.Toast;
    // properties
    // fields
  }
}
