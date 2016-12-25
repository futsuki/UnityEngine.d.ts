declare namespace UnityEngine {
  class GameObject {
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
    GetComponents(type: any, results: any): any;
    GetComponentsInChildren(type: any): UnityEngine.Component[];
    GetComponentsInChildren(type: any, includeInactive: boolean): UnityEngine.Component[];
    GetComponentsInParent(type: any): UnityEngine.Component[];
    GetComponentsInParent(type: any, includeInactive: boolean): UnityEngine.Component[];
    SetActive(value: boolean): any;
    SetActiveRecursively(state: boolean): any;
    CompareTag(tag: string): boolean;
    static FindGameObjectWithTag(tag: string): UnityEngine.GameObject;
    static FindWithTag(tag: string): UnityEngine.GameObject;
    static FindGameObjectsWithTag(tag: string): UnityEngine.GameObject[];
    SendMessageUpwards(methodName: string, value: any, options: UnityEngine.SendMessageOptions): any;
    SendMessageUpwards(methodName: string, value: any): any;
    SendMessageUpwards(methodName: string): any;
    SendMessageUpwards(methodName: string, options: UnityEngine.SendMessageOptions): any;
    SendMessage(methodName: string, value: any, options: UnityEngine.SendMessageOptions): any;
    SendMessage(methodName: string, value: any): any;
    SendMessage(methodName: string): any;
    SendMessage(methodName: string, options: UnityEngine.SendMessageOptions): any;
    BroadcastMessage(methodName: string, parameter: any, options: UnityEngine.SendMessageOptions): any;
    BroadcastMessage(methodName: string, parameter: any): any;
    BroadcastMessage(methodName: string): any;
    BroadcastMessage(methodName: string, options: UnityEngine.SendMessageOptions): any;
    AddComponent(componentType: any): UnityEngine.Component;
    static Find(name: string): UnityEngine.GameObject;
    SampleAnimation(clip: UnityEngine.Object, time: number): any;
    AddComponent(className: string): UnityEngine.Component;
    PlayAnimation(animation: UnityEngine.Object): any;
    StopAnimation(): any;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
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
    name: string;
    hideFlags: UnityEngine.HideFlags;
    // fields
  }
}
