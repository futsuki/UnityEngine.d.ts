declare namespace UnityEditor.Utils {
  class MonoInstallationFinder {
    // constructors
    constructor();
    // methods
    static GetFrameWorksFolder(): string;
    static GetProfileDirectory(target: UnityEditor.BuildTarget, profile: string): string;
    static GetProfileDirectory(target: UnityEditor.BuildTarget, profile: string, monoInstallation: string): string;
    static GetProfilesDirectory(monoInstallation: string): string;
    static GetEtcDirectory(monoInstallation: string): string;
    static GetMonoInstallation(): string;
    static GetMonoInstallation(monoName: string): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    static MonoInstallation: string;
    static MonoBleedingEdgeInstallation: string;
  }
}
