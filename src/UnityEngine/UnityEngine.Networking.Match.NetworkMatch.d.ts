declare namespace UnityEngine.Networking.Match {
  class NetworkMatch {
    // constructors
    constructor();
    // methods
    SetProgramAppID(programAppID: UnityEngine.Networking.Types.AppID): void;
    CreateMatch(matchName: string, matchSize: number, matchAdvertise: boolean, matchPassword: string, publicClientAddress: string, privateClientAddress: string, eloScoreForMatch: number, requestDomain: number, callback: ((boolean, string, UnityEngine.Networking.Match.MatchInfo) => void)): UnityEngine.Coroutine;
    JoinMatch(netId: UnityEngine.Networking.Types.NetworkID, matchPassword: string, publicClientAddress: string, privateClientAddress: string, eloScoreForClient: number, requestDomain: number, callback: ((boolean, string, UnityEngine.Networking.Match.MatchInfo) => void)): UnityEngine.Coroutine;
    DestroyMatch(netId: UnityEngine.Networking.Types.NetworkID, requestDomain: number, callback: ((boolean, string) => void)): UnityEngine.Coroutine;
    DropConnection(netId: UnityEngine.Networking.Types.NetworkID, dropNodeId: UnityEngine.Networking.Types.NodeID, requestDomain: number, callback: ((boolean, string) => void)): UnityEngine.Coroutine;
    ListMatches(startPageNumber: number, resultPageSize: number, matchNameFilter: string, filterOutPrivateMatchesFromResults: boolean, eloScoreTarget: number, requestDomain: number, callback: ((boolean, string, any) => void)): UnityEngine.Coroutine;
    SetMatchAttributes(networkId: UnityEngine.Networking.Types.NetworkID, isListed: boolean, requestDomain: number, callback: ((boolean, string) => void)): UnityEngine.Coroutine;
    Invoke(methodName: string, time: number): void;
    InvokeRepeating(methodName: string, time: number, repeatRate: number): void;
    CancelInvoke(): void;
    CancelInvoke(methodName: string): void;
    IsInvoking(methodName: string): boolean;
    IsInvoking(): boolean;
    StartCoroutine(routine: any): UnityEngine.Coroutine;
    StartCoroutine_Auto(routine: any): UnityEngine.Coroutine;
    StartCoroutine(methodName: string, value: any): UnityEngine.Coroutine;
    StartCoroutine(methodName: string): UnityEngine.Coroutine;
    StopCoroutine(methodName: string): void;
    StopCoroutine(routine: any): void;
    StopCoroutine(routine: UnityEngine.Coroutine): void;
    StopAllCoroutines(): void;
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
    GetComponents(type: any, results: any): void;
    CompareTag(tag: string): boolean;
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
