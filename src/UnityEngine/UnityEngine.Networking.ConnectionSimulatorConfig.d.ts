declare namespace UnityEngine.Networking {
  class ConnectionSimulatorConfig {
    // constructors
    constructor(outMinDelay: number, outAvgDelay: number, inMinDelay: number, inAvgDelay: number, packetLossPercentage: number);
    // methods
    Dispose(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
