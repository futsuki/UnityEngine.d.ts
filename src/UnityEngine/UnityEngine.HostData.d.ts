declare namespace UnityEngine {
  class HostData {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    useNat: boolean;
    gameType: string;
    gameName: string;
    connectedPlayers: number;
    playerLimit: number;
    ip: string[];
    port: number;
    passwordProtected: boolean;
    comment: string;
    guid: string;
    // fields
  }
}
