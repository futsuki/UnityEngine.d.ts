declare namespace UnityEditor.Connect {
  class UserInfo {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    readonly valid: boolean;
    readonly userId: string;
    readonly userName: string;
    readonly displayName: string;
    readonly primaryOrg: string;
    readonly whitelisted: boolean;
    readonly organizationForeignKeys: string;
    readonly accessToken: string;
    readonly accessTokenValiditySeconds: number;
    // fields
  }
}
