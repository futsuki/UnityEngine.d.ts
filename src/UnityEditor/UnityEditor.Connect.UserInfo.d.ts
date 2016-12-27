declare namespace UnityEditor.Connect {
  class UserInfo extends System.ValueType {
    // constructors
    protected constructor();
    // methods
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
