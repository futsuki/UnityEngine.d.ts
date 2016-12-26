declare namespace UnityEditor.VisualStudioIntegration {
  class SolutionGuidGenerator {
    // constructors
    private constructor();
    // methods
    static GuidForProject(projectName: string): string;
    static GuidForSolution(projectName: string): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
