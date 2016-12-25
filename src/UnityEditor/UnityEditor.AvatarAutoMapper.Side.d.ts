declare namespace UnityEditor.AvatarAutoMapper {
  class Side {
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
    static None: UnityEditor.AvatarAutoMapper.Side;
    static Left: UnityEditor.AvatarAutoMapper.Side;
    static Right: UnityEditor.AvatarAutoMapper.Side;
  }
}
