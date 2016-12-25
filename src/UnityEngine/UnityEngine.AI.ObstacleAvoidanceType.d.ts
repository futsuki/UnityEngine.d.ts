declare namespace UnityEngine.AI {
  class ObstacleAvoidanceType {
    // constructors
    private constructor();
    // methods
    GetTypeCode(): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    value__: number;
    static NoObstacleAvoidance: UnityEngine.AI.ObstacleAvoidanceType;
    static LowQualityObstacleAvoidance: UnityEngine.AI.ObstacleAvoidanceType;
    static MedQualityObstacleAvoidance: UnityEngine.AI.ObstacleAvoidanceType;
    static GoodQualityObstacleAvoidance: UnityEngine.AI.ObstacleAvoidanceType;
    static HighQualityObstacleAvoidance: UnityEngine.AI.ObstacleAvoidanceType;
  }
}
