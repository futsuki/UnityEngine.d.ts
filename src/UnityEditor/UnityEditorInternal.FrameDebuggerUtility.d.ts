declare namespace UnityEditorInternal {
  class FrameDebuggerUtility extends System.Object {
    // constructors
    constructor();
    // methods
    static SetEnabled(enabled: boolean, remotePlayerGUID: number): void;
    static IsLocalEnabled(): boolean;
    static IsRemoteEnabled(): boolean;
    static GetRemotePlayerGUID(): number;
    static SetRenderTargetDisplayOptions(rtIndex: number, channels: any, blackLevel: number, whiteLevel: number): void;
    static GetFrameEvents(): UnityEditorInternal.FrameDebuggerEvent[];
    static GetFrameEventData(index: number, frameDebuggerEventData: any): boolean;
    static GetFrameEventInfoName(index: number): string;
    static GetFrameEventGameObject(index: number): any;
    // properties
    static readonly receivingRemoteFrameEventData: boolean;
    static readonly locallySupported: boolean;
    static readonly count: number;
    static limit: number;
    static readonly eventsHash: number;
    // fields
  }
}
