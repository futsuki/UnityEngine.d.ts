declare namespace UnityEngine {
  class GameObject extends UnityEngine.Object {
    // constructors
    constructor(name: string);
    constructor();
    constructor(name: string, components: any[]);
    // methods
    static CreatePrimitive(type: UnityEngine.PrimitiveType): UnityEngine.GameObject;
    GetComponent(type: any): UnityEngine.Component;
    GetComponent(type: string): UnityEngine.Component;
    GetComponentInChildren(type: any, includeInactive: boolean): UnityEngine.Component;
    GetComponentInChildren(type: any): UnityEngine.Component;
    GetComponentInParent(type: any): UnityEngine.Component;
    GetComponents(type: any): UnityEngine.Component[];
    GetComponents(type: any, results: UnityEngine.Component[]): void;
    GetComponentsInChildren(type: any): UnityEngine.Component[];
    GetComponentsInChildren(type: any, includeInactive: boolean): UnityEngine.Component[];
    GetComponentsInParent(type: any): UnityEngine.Component[];
    GetComponentsInParent(type: any, includeInactive: boolean): UnityEngine.Component[];
    SetActive(value: boolean): void;
    SetActiveRecursively(state: boolean): void;
    CompareTag(tag: string): boolean;
    static FindGameObjectWithTag(tag: string): UnityEngine.GameObject;
    static FindWithTag(tag: string): UnityEngine.GameObject;
    static FindGameObjectsWithTag(tag: string): UnityEngine.GameObject[];
    SendMessageUpwards(methodName: string, value: any, options: UnityEngine.SendMessageOptions): void;
    SendMessageUpwards(methodName: string, value: any): void;
    SendMessageUpwards(methodName: string): void;
    SendMessageUpwards(methodName: string, options: UnityEngine.SendMessageOptions): void;
    SendMessage(methodName: string, value: any, options: UnityEngine.SendMessageOptions): void;
    SendMessage(methodName: string, value: any): void;
    SendMessage(methodName: string): void;
    SendMessage(methodName: string, options: UnityEngine.SendMessageOptions): void;
    BroadcastMessage(methodName: string, parameter: any, options: UnityEngine.SendMessageOptions): void;
    BroadcastMessage(methodName: string, parameter: any): void;
    BroadcastMessage(methodName: string): void;
    BroadcastMessage(methodName: string, options: UnityEngine.SendMessageOptions): void;
    AddComponent(componentType: any): UnityEngine.Component;
    AddComponent(className: string): UnityEngine.Component;
    static Find(name: string): UnityEngine.GameObject;
    SampleAnimation(clip: UnityEngine.Object, time: number): void;
    PlayAnimation(animation: UnityEngine.Object): void;
    StopAnimation(): void;
    // properties
    readonly transform: UnityEngine.Transform;
    layer: number;
    active: boolean;
    readonly activeSelf: boolean;
    readonly activeInHierarchy: boolean;
    isStatic: boolean;
    tag: string;
    readonly scene: UnityEngine.SceneManagement.Scene;
    readonly gameObject: UnityEngine.GameObject;
    readonly rigidbody: UnityEngine.Component;
    readonly rigidbody2D: UnityEngine.Component;
    readonly camera: UnityEngine.Component;
    readonly light: UnityEngine.Component;
    readonly animation: UnityEngine.Component;
    readonly constantForce: UnityEngine.Component;
    readonly renderer: UnityEngine.Component;
    readonly audio: UnityEngine.Component;
    readonly guiText: UnityEngine.Component;
    readonly networkView: UnityEngine.Component;
    readonly guiElement: UnityEngine.Component;
    readonly guiTexture: UnityEngine.Component;
    readonly collider: UnityEngine.Component;
    readonly collider2D: UnityEngine.Component;
    readonly hingeJoint: UnityEngine.Component;
    readonly particleEmitter: UnityEngine.Component;
    readonly particleSystem: UnityEngine.Component;
    // fields
  }
}
