declare namespace UnityEngine.Networking {
  class UnityWebRequest extends System.Object {
    // constructors
    constructor();
    constructor(url: string);
    constructor(url: string, method: string);
    constructor(url: string, method: string, downloadHandler: UnityEngine.Networking.DownloadHandler, uploadHandler: UnityEngine.Networking.UploadHandler);
    // methods
    static Get(uri: string): UnityEngine.Networking.UnityWebRequest;
    static Delete(uri: string): UnityEngine.Networking.UnityWebRequest;
    static Head(uri: string): UnityEngine.Networking.UnityWebRequest;
    static GetTexture(uri: string): UnityEngine.Networking.UnityWebRequest;
    static GetTexture(uri: string, nonReadable: boolean): UnityEngine.Networking.UnityWebRequest;
    static GetAudioClip(uri: string, audioType: UnityEngine.AudioType): UnityEngine.Networking.UnityWebRequest;
    static GetAssetBundle(uri: string): UnityEngine.Networking.UnityWebRequest;
    static GetAssetBundle(uri: string, crc: number): UnityEngine.Networking.UnityWebRequest;
    static GetAssetBundle(uri: string, version: number, crc: number): UnityEngine.Networking.UnityWebRequest;
    static GetAssetBundle(uri: string, hash: UnityEngine.Hash128, crc: number): UnityEngine.Networking.UnityWebRequest;
    static Put(uri: string, bodyData: number[]): UnityEngine.Networking.UnityWebRequest;
    static Put(uri: string, bodyData: string): UnityEngine.Networking.UnityWebRequest;
    static Post(uri: string, postData: string): UnityEngine.Networking.UnityWebRequest;
    static Post(uri: string, formData: UnityEngine.WWWForm): UnityEngine.Networking.UnityWebRequest;
    static Post(uri: string, multipartFormSections: UnityEngine.Networking.IMultipartFormSection[]): UnityEngine.Networking.UnityWebRequest;
    static Post(uri: string, multipartFormSections: UnityEngine.Networking.IMultipartFormSection[], boundary: number[]): UnityEngine.Networking.UnityWebRequest;
    static Post(uri: string, formFields: any): UnityEngine.Networking.UnityWebRequest;
    static SerializeFormSections(multipartFormSections: UnityEngine.Networking.IMultipartFormSection[], boundary: number[]): number[];
    static GenerateBoundary(): number[];
    static SerializeSimpleForm(formFields: any): number[];
    Dispose(): void;
    Send(): UnityEngine.AsyncOperation;
    Abort(): void;
    GetRequestHeader(name: string): string;
    SetRequestHeader(name: string, value: string): void;
    GetResponseHeader(name: string): string;
    GetResponseHeaders(): any;
    // properties
    disposeDownloadHandlerOnDispose: boolean;
    disposeUploadHandlerOnDispose: boolean;
    method: string;
    readonly error: string;
    useHttpContinue: boolean;
    url: string;
    readonly responseCode: number;
    readonly uploadProgress: number;
    readonly isModifiable: boolean;
    readonly isDone: boolean;
    readonly isError: boolean;
    readonly downloadProgress: number;
    readonly uploadedBytes: number;
    readonly downloadedBytes: number;
    redirectLimit: number;
    chunkedTransfer: boolean;
    uploadHandler: UnityEngine.Networking.UploadHandler;
    downloadHandler: UnityEngine.Networking.DownloadHandler;
    // fields
    static kHttpVerbGET: string;
    static kHttpVerbHEAD: string;
    static kHttpVerbPOST: string;
    static kHttpVerbPUT: string;
    static kHttpVerbCREATE: string;
    static kHttpVerbDELETE: string;
  }
}
