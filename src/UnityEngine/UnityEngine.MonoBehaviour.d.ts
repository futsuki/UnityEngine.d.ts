declare namespace UnityEngine {
  class MonoBehaviour extends UnityEngine.Behaviour {
    // constructors
    constructor();
    // methods
    Invoke(methodName: string, time: number): void;
    InvokeRepeating(methodName: string, time: number, repeatRate: number): void;
    CancelInvoke(): void;
    CancelInvoke(methodName: string): void;
    IsInvoking(methodName: string): boolean;
    IsInvoking(): boolean;
    StartCoroutine(routine: any): UnityEngine.Coroutine;
    StartCoroutine(methodName: string, value: any): UnityEngine.Coroutine;
    StartCoroutine(methodName: string): UnityEngine.Coroutine;
    StartCoroutine_Auto(routine: any): UnityEngine.Coroutine;
    StopCoroutine(methodName: string): void;
    StopCoroutine(routine: any): void;
    StopCoroutine(routine: UnityEngine.Coroutine): void;
    StopAllCoroutines(): void;
    static print(message: any): void;
    // properties
    useGUILayout: boolean;
    runInEditMode: boolean;
    // fields
  }
}
