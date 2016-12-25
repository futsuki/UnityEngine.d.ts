declare namespace UnityEngine.Networking.Match {
  class NetworkMatch {
    // constructors
    constructor();
    // methods
    SetProgramAppID(programAppID: UnityEngine.Networking.Types.AppID): any;
    CreateMatch(matchName: string, matchSize: number, matchAdvertise: boolean, matchPassword: string, publicClientAddress: string, privateClientAddress: string, eloScoreForMatch: number, requestDomain: number, callback: any): UnityEngine.Coroutine;
    JoinMatch(netId: UnityEngine.Networking.Types.NetworkID, matchPassword: string, publicClientAddress: string, privateClientAddress: string, eloScoreForClient: number, requestDomain: number, callback: any): UnityEngine.Coroutine;
    DestroyMatch(netId: UnityEngine.Networking.Types.NetworkID, requestDomain: number, callback: UnityEngine.Networking.Match.NetworkMatch.BasicResponseDelegate): UnityEngine.Coroutine;
    DropConnection(netId: UnityEngine.Networking.Types.NetworkID, dropNodeId: UnityEngine.Networking.Types.NodeID, requestDomain: number, callback: UnityEngine.Networking.Match.NetworkMatch.BasicResponseDelegate): UnityEngine.Coroutine;
    ListMatches(startPageNumber: number, resultPageSize: number, matchNameFilter: string, filterOutPrivateMatchesFromResults: boolean, eloScoreTarget: number, requestDomain: number, callback: any): UnityEngine.Coroutine;
    SetMatchAttributes(networkId: UnityEngine.Networking.Types.NetworkID, isListed: boolean, requestDomain: number, callback: UnityEngine.Networking.Match.NetworkMatch.BasicResponseDelegate): UnityEngine.Coroutine;
    Invoke(methodName: string, time: number): any;
    InvokeRepeating(methodName: string, time: number, repeatRate: number): any;
    CancelInvoke(): any;
    CancelInvoke(methodName: string): any;
    IsInvoking(methodName: string): boolean;
    IsInvoking(): boolean;
    StartCoroutine(routine: any): UnityEngine.Coroutine;
    StartCoroutine_Auto(routine: any): UnityEngine.Coroutine;
    StartCoroutine(methodName: string, value: any): UnityEngine.Coroutine;
    StartCoroutine(methodName: string): UnityEngine.Coroutine;
    StopCoroutine(methodName: string): any;
    StopCoroutine(routine: any): any;
    StopCoroutine(routine: UnityEngine.Coroutine): any;
    StopAllCoroutines(): any;
    GetComponent(type: any): UnityEngine.Component;
    GetComponent(type: string): UnityEngine.Component;
    GetComponentInChildren(t: any, includeInactive: boolean): UnityEngine.Component;
    GetComponentInChildren(t: any): UnityEngine.Component;
    GetComponentsInChildren(t: any): UnityEngine.Component[];
    GetComponentsInChildren(t: any, includeInactive: boolean): UnityEngine.Component[];
    GetComponentInParent(t: any): UnityEngine.Component;
    GetComponentsInParent(t: any): UnityEngine.Component[];
    GetComponentsInParent(t: any, includeInactive: boolean): UnityEngine.Component[];
    GetComponents(type: any): UnityEngine.Component[];
    GetComponents(type: any, results: any): any;
    CompareTag(tag: string): boolean;
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
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    baseUri: any;
    useGUILayout: boolean;
    runInEditMode: boolean;
    enabled: boolean;
    readonly isActiveAndEnabled: boolean;
    readonly transform: UnityEngine.Transform;
    readonly gameObject: UnityEngine.GameObject;
    tag: string;
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
