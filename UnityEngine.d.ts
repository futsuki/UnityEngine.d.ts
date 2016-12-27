declare namespace AOT {
  class MonoPInvokeCallbackAttribute extends System.Attribute {
    // constructors
    constructor(type: any);
    // methods
    // properties
    // fields
  }
}
declare namespace JetBrains.Annotations {
  class AssertionMethodAttribute extends System.Attribute {
    // constructors
    constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace JetBrains.Annotations {
  class BaseTypeRequiredAttribute extends System.Attribute {
    // constructors
    constructor(baseType: any);
    // methods
    // properties
    readonly BaseType: any;
    // fields
  }
}
declare namespace JetBrains.Annotations {
  class CanBeNullAttribute extends System.Attribute {
    // constructors
    constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace JetBrains.Annotations {
  class CannotApplyEqualityOperatorAttribute extends System.Attribute {
    // constructors
    constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace JetBrains.Annotations {
  class ContractAnnotationAttribute extends System.Attribute {
    // constructors
    constructor(contract: string);
    constructor(contract: string, forceFullStates: boolean);
    // methods
    // properties
    readonly Contract: string;
    readonly ForceFullStates: boolean;
    // fields
  }
}
declare namespace JetBrains.Annotations {
  class ImplicitUseKindFlags extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Default: JetBrains.Annotations.ImplicitUseKindFlags;
    static Access: JetBrains.Annotations.ImplicitUseKindFlags;
    static Assign: JetBrains.Annotations.ImplicitUseKindFlags;
    static InstantiatedWithFixedConstructorSignature: JetBrains.Annotations.ImplicitUseKindFlags;
    static InstantiatedNoFixedConstructorSignature: JetBrains.Annotations.ImplicitUseKindFlags;
  }
}
declare namespace JetBrains.Annotations {
  class ImplicitUseTargetFlags extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Default: JetBrains.Annotations.ImplicitUseTargetFlags;
    static Itself: JetBrains.Annotations.ImplicitUseTargetFlags;
    static Members: JetBrains.Annotations.ImplicitUseTargetFlags;
    static WithMembers: JetBrains.Annotations.ImplicitUseTargetFlags;
  }
}
declare namespace JetBrains.Annotations {
  class InstantHandleAttribute extends System.Attribute {
    // constructors
    constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace JetBrains.Annotations {
  class InvokerParameterNameAttribute extends System.Attribute {
    // constructors
    constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace JetBrains.Annotations {
  class LinqTunnelAttribute extends System.Attribute {
    // constructors
    constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace JetBrains.Annotations {
  class LocalizationRequiredAttribute extends System.Attribute {
    // constructors
    constructor();
    constructor(required: boolean);
    // methods
    // properties
    readonly Required: boolean;
    // fields
  }
}
declare namespace JetBrains.Annotations {
  class MeansImplicitUseAttribute extends System.Attribute {
    // constructors
    constructor();
    constructor(useKindFlags: JetBrains.Annotations.ImplicitUseKindFlags);
    constructor(targetFlags: JetBrains.Annotations.ImplicitUseTargetFlags);
    constructor(useKindFlags: JetBrains.Annotations.ImplicitUseKindFlags, targetFlags: JetBrains.Annotations.ImplicitUseTargetFlags);
    // methods
    // properties
    readonly UseKindFlags: JetBrains.Annotations.ImplicitUseKindFlags;
    readonly TargetFlags: JetBrains.Annotations.ImplicitUseTargetFlags;
    // fields
  }
}
declare namespace JetBrains.Annotations {
  class NoEnumerationAttribute extends System.Attribute {
    // constructors
    constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace JetBrains.Annotations {
  class NotifyPropertyChangedInvocatorAttribute extends System.Attribute {
    // constructors
    constructor();
    constructor(parameterName: string);
    // methods
    // properties
    readonly ParameterName: string;
    // fields
  }
}
declare namespace JetBrains.Annotations {
  class NotNullAttribute extends System.Attribute {
    // constructors
    constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace JetBrains.Annotations {
  class PathReferenceAttribute extends System.Attribute {
    // constructors
    constructor();
    constructor(basePath: string);
    // methods
    // properties
    readonly BasePath: string;
    // fields
  }
}
declare namespace JetBrains.Annotations {
  class PublicAPIAttribute extends System.Attribute {
    // constructors
    constructor();
    constructor(comment: string);
    // methods
    // properties
    readonly Comment: string;
    // fields
  }
}
declare namespace JetBrains.Annotations {
  class PureAttribute extends System.Attribute {
    // constructors
    constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace JetBrains.Annotations {
  class StringFormatMethodAttribute extends System.Attribute {
    // constructors
    constructor(formatParameterName: string);
    // methods
    // properties
    readonly FormatParameterName: string;
    // fields
  }
}
declare namespace JetBrains.Annotations {
  class UsedImplicitlyAttribute extends System.Attribute {
    // constructors
    constructor();
    constructor(useKindFlags: JetBrains.Annotations.ImplicitUseKindFlags);
    constructor(targetFlags: JetBrains.Annotations.ImplicitUseTargetFlags);
    constructor(useKindFlags: JetBrains.Annotations.ImplicitUseKindFlags, targetFlags: JetBrains.Annotations.ImplicitUseTargetFlags);
    // methods
    // properties
    readonly UseKindFlags: JetBrains.Annotations.ImplicitUseKindFlags;
    readonly TargetFlags: JetBrains.Annotations.ImplicitUseTargetFlags;
    // fields
  }
}
declare namespace SimpleJson {
  class IJsonSerializerStrategy {
    // constructors
    protected constructor();
    // methods
    TrySerializeNonPrimitiveObject(input: any, output: any): boolean;
    DeserializeObject(value: any, type: any): any;
    // properties
    // fields
  }
}
declare namespace SimpleJson {
  class JsonArray {
    // constructors
    constructor();
    constructor(capacity: number);
    // methods
    ToString(): string;
    Add(item: any): void;
    AddRange(collection: any): void;
    AsReadOnly(): any;
    BinarySearch(item: any): number;
    BinarySearch(item: any, comparer: any): number;
    BinarySearch(index: number, count: number, item: any, comparer: any): number;
    Clear(): void;
    Contains(item: any): boolean;
    CopyTo(array: any[]): void;
    CopyTo(array: any[], arrayIndex: number): void;
    CopyTo(index: number, array: any[], arrayIndex: number, count: number): void;
    Exists(match: ((obj: any) => boolean)): boolean;
    Find(match: ((obj: any) => boolean)): any;
    FindAll(match: ((obj: any) => boolean)): any[];
    FindIndex(match: ((obj: any) => boolean)): number;
    FindIndex(startIndex: number, match: ((obj: any) => boolean)): number;
    FindIndex(startIndex: number, count: number, match: ((obj: any) => boolean)): number;
    FindLast(match: ((obj: any) => boolean)): any;
    FindLastIndex(match: ((obj: any) => boolean)): number;
    FindLastIndex(startIndex: number, match: ((obj: any) => boolean)): number;
    FindLastIndex(startIndex: number, count: number, match: ((obj: any) => boolean)): number;
    ForEach(action: ((obj: any) => void)): void;
    GetEnumerator(): any;
    GetRange(index: number, count: number): any[];
    IndexOf(item: any): number;
    IndexOf(item: any, index: number): number;
    IndexOf(item: any, index: number, count: number): number;
    Insert(index: number, item: any): void;
    InsertRange(index: number, collection: any): void;
    LastIndexOf(item: any): number;
    LastIndexOf(item: any, index: number): number;
    LastIndexOf(item: any, index: number, count: number): number;
    Remove(item: any): boolean;
    RemoveAll(match: ((obj: any) => boolean)): number;
    RemoveAt(index: number): void;
    RemoveRange(index: number, count: number): void;
    Reverse(): void;
    Reverse(index: number, count: number): void;
    Sort(): void;
    Sort(comparer: any): void;
    Sort(comparison: ((x: any, y: any) => number)): void;
    Sort(index: number, count: number, comparer: any): void;
    ToArray(): any[];
    TrimExcess(): void;
    TrueForAll(match: ((obj: any) => boolean)): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    Capacity: number;
    readonly Count: number;
    get_Item(index: number): any;
    set_Item(index: number, value: any): void;
    // fields
  }
}
declare namespace SimpleJson {
  class JsonObject extends System.Object {
    // constructors
    constructor();
    constructor(comparer: any);
    // methods
    Add(key: string, value: any): void;
    Add(item: any): void;
    ContainsKey(key: string): boolean;
    Remove(key: string): boolean;
    Remove(item: any): boolean;
    TryGetValue(key: string, value: any): boolean;
    Clear(): void;
    Contains(item: any): boolean;
    CopyTo(array: any[], arrayIndex: number): void;
    GetEnumerator(): any;
    ToString(): string;
    // properties
    get_Item(index: number): any;
    readonly Keys: any;
    readonly Values: any;
    get_Item(key: string): any;
    set_Item(key: string, value: any): void;
    readonly Count: number;
    readonly IsReadOnly: boolean;
    // fields
  }
}
declare namespace SimpleJson {
  class PocoJsonSerializerStrategy extends System.Object {
    // constructors
    constructor();
    // methods
    TrySerializeNonPrimitiveObject(input: any, output: any): boolean;
    DeserializeObject(value: any, type: any): any;
    // properties
    // fields
  }
}
declare namespace SimpleJson.Reflection {
  class ReflectionUtils extends System.Object {
    // constructors
    constructor();
    // methods
    static GetAttribute(info: any, type: any): System.Attribute;
    static GetAttribute(objectType: any, attributeType: any): System.Attribute;
    static GetGenericTypeArguments(type: any): any[];
    static IsTypeGenericeCollectionInterface(type: any): boolean;
    static IsAssignableFrom(type1: any, type2: any): boolean;
    static IsTypeDictionary(type: any): boolean;
    static IsNullableType(type: any): boolean;
    static ToNullableType(obj: any, nullableType: any): any;
    static IsValueType(type: any): boolean;
    static GetConstructors(type: any): any;
    static GetConstructorInfo(type: any, argsType: any[]): any;
    static GetProperties(type: any): any;
    static GetFields(type: any): any;
    static GetGetterMethodInfo(propertyInfo: any): any;
    static GetSetterMethodInfo(propertyInfo: any): any;
    static GetContructor(constructorInfo: any): ((args: any[]) => any);
    static GetContructor(type: any, argsType: any[]): ((args: any[]) => any);
    static GetConstructorByReflection(constructorInfo: any): ((args: any[]) => any);
    static GetConstructorByReflection(type: any, argsType: any[]): ((args: any[]) => any);
    static GetGetMethod(propertyInfo: any): ((source: any) => any);
    static GetGetMethod(fieldInfo: any): ((source: any) => any);
    static GetGetMethodByReflection(propertyInfo: any): ((source: any) => any);
    static GetGetMethodByReflection(fieldInfo: any): ((source: any) => any);
    static GetSetMethod(propertyInfo: any): ((source: any, value: any) => void);
    static GetSetMethod(fieldInfo: any): ((source: any, value: any) => void);
    static GetSetMethodByReflection(propertyInfo: any): ((source: any, value: any) => void);
    static GetSetMethodByReflection(fieldInfo: any): ((source: any, value: any) => void);
    // properties
    // fields
  }
}
declare namespace SimpleJson {
  class SimpleJson extends System.Object {
    // constructors
    protected constructor();
    // methods
    static DeserializeObject(json: string): any;
    static DeserializeObject(json: string, type: any, jsonSerializerStrategy: SimpleJson.IJsonSerializerStrategy): any;
    static DeserializeObject(json: string, type: any): any;
    static TryDeserializeObject(json: string, obj: any): boolean;
    static SerializeObject(json: any, jsonSerializerStrategy: SimpleJson.IJsonSerializerStrategy): string;
    static SerializeObject(json: any): string;
    static EscapeToJavascriptString(jsonString: string): string;
    // properties
    static CurrentJsonSerializerStrategy: SimpleJson.IJsonSerializerStrategy;
    static readonly PocoJsonSerializerStrategy: SimpleJson.PocoJsonSerializerStrategy;
    // fields
  }
}
declare namespace System {
  class Attribute extends System.Object {
    // constructors
    protected constructor();
    // methods
    static GetCustomAttribute(element: any, attributeType: any): System.Attribute;
    static GetCustomAttribute(element: any, attributeType: any): System.Attribute;
    static GetCustomAttribute(element: any, attributeType: any): System.Attribute;
    static GetCustomAttribute(element: any, attributeType: any): System.Attribute;
    static GetCustomAttribute(element: any, attributeType: any, inherit: boolean): System.Attribute;
    static GetCustomAttribute(element: any, attributeType: any, inherit: boolean): System.Attribute;
    static GetCustomAttribute(element: any, attributeType: any, inherit: boolean): System.Attribute;
    static GetCustomAttribute(element: any, attributeType: any, inherit: boolean): System.Attribute;
    static GetCustomAttributes(element: any): System.Attribute[];
    static GetCustomAttributes(element: any): System.Attribute[];
    static GetCustomAttributes(element: any): System.Attribute[];
    static GetCustomAttributes(element: any): System.Attribute[];
    static GetCustomAttributes(element: any, attributeType: any): System.Attribute[];
    static GetCustomAttributes(element: any, attributeType: any): System.Attribute[];
    static GetCustomAttributes(element: any, attributeType: any): System.Attribute[];
    static GetCustomAttributes(element: any, type: any): System.Attribute[];
    static GetCustomAttributes(element: any, attributeType: any, inherit: boolean): System.Attribute[];
    static GetCustomAttributes(element: any, attributeType: any, inherit: boolean): System.Attribute[];
    static GetCustomAttributes(element: any, attributeType: any, inherit: boolean): System.Attribute[];
    static GetCustomAttributes(element: any, type: any, inherit: boolean): System.Attribute[];
    static GetCustomAttributes(element: any, inherit: boolean): System.Attribute[];
    static GetCustomAttributes(element: any, inherit: boolean): System.Attribute[];
    static GetCustomAttributes(element: any, inherit: boolean): System.Attribute[];
    static GetCustomAttributes(element: any, inherit: boolean): System.Attribute[];
    GetHashCode(): number;
    IsDefaultAttribute(): boolean;
    static IsDefined(element: any, attributeType: any): boolean;
    static IsDefined(element: any, attributeType: any): boolean;
    static IsDefined(element: any, attributeType: any): boolean;
    static IsDefined(element: any, attributeType: any): boolean;
    static IsDefined(element: any, attributeType: any, inherit: boolean): boolean;
    static IsDefined(element: any, attributeType: any, inherit: boolean): boolean;
    static IsDefined(element: any, attributeType: any, inherit: boolean): boolean;
    static IsDefined(element: any, attributeType: any, inherit: boolean): boolean;
    Match(obj: any): boolean;
    Equals(obj: any): boolean;
    // properties
    readonly TypeId: any;
    // fields
  }
}
declare namespace System.Collections {
  class Stack extends System.Object {
    // constructors
    constructor();
    constructor(col: any);
    constructor(initialCapacity: number);
    // methods
    static Synchronized(stack: System.Collections.Stack): System.Collections.Stack;
    Clear(): void;
    Clone(): any;
    Contains(obj: any): boolean;
    CopyTo(array: any, index: number): void;
    GetEnumerator(): any;
    Peek(): any;
    Pop(): any;
    Push(obj: any): void;
    ToArray(): any[];
    // properties
    readonly Count: number;
    readonly IsSynchronized: boolean;
    readonly SyncRoot: any;
    // fields
  }
}
declare namespace System {
  class Enum extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    GetTypeCode(): any;
    static GetValues(enumType: any): any;
    static GetNames(enumType: any): string[];
    static GetName(enumType: any, value: any): string;
    static IsDefined(enumType: any, value: any): boolean;
    static GetUnderlyingType(enumType: any): any;
    static Parse(enumType: any, value: string): any;
    static Parse(enumType: any, value: string, ignoreCase: boolean): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    static ToObject(enumType: any, value: number): any;
    static ToObject(enumType: any, value: number): any;
    static ToObject(enumType: any, value: number): any;
    static ToObject(enumType: any, value: number): any;
    static ToObject(enumType: any, value: any): any;
    static ToObject(enumType: any, value: number): any;
    static ToObject(enumType: any, value: number): any;
    static ToObject(enumType: any, value: number): any;
    static ToObject(enumType: any, value: number): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    static Format(enumType: any, value: any, format: string): string;
    // properties
    // fields
  }
}
declare namespace System {
  class Exception extends System.Object {
    // constructors
    constructor();
    constructor(message: string);
    constructor(message: string, innerException: System.Exception);
    // methods
    GetBaseException(): System.Exception;
    GetObjectData(info: any, context: any): void;
    ToString(): string;
    GetType(): any;
    GetType(): any;
    // properties
    readonly InnerException: System.Exception;
    HelpLink: string;
    readonly Message: string;
    Source: string;
    readonly StackTrace: string;
    readonly TargetSite: any;
    readonly Data: any;
    // fields
  }
}
declare namespace System.IO {
  class TextWriter extends System.MarshalByRefObject {
    // constructors
    protected constructor();
    // methods
    Close(): void;
    Dispose(): void;
    Flush(): void;
    static Synchronized(writer: System.IO.TextWriter): System.IO.TextWriter;
    Write(value: boolean): void;
    Write(value: any): void;
    Write(buffer: any[]): void;
    Write(value: number): void;
    Write(value: number): void;
    Write(value: number): void;
    Write(value: number): void;
    Write(value: any): void;
    Write(value: number): void;
    Write(value: string): void;
    Write(value: number): void;
    Write(value: number): void;
    Write(format: string, arg0: any): void;
    Write(format: string, arg: any[]): void;
    Write(buffer: any[], index: number, count: number): void;
    Write(format: string, arg0: any, arg1: any): void;
    Write(format: string, arg0: any, arg1: any, arg2: any): void;
    WriteLine(): void;
    WriteLine(value: boolean): void;
    WriteLine(value: any): void;
    WriteLine(buffer: any[]): void;
    WriteLine(value: number): void;
    WriteLine(value: number): void;
    WriteLine(value: number): void;
    WriteLine(value: number): void;
    WriteLine(value: any): void;
    WriteLine(value: number): void;
    WriteLine(value: string): void;
    WriteLine(value: number): void;
    WriteLine(value: number): void;
    WriteLine(format: string, arg0: any): void;
    WriteLine(format: string, arg: any[]): void;
    WriteLine(buffer: any[], index: number, count: number): void;
    WriteLine(format: string, arg0: any, arg1: any): void;
    WriteLine(format: string, arg0: any, arg1: any, arg2: any): void;
    // properties
    readonly Encoding: any;
    readonly FormatProvider: any;
    NewLine: string;
    // fields
    static Null: System.IO.TextWriter;
  }
}
declare namespace System {
  class MarshalByRefObject extends System.Object {
    // constructors
    protected constructor();
    // methods
    CreateObjRef(requestedType: any): any;
    GetLifetimeService(): any;
    InitializeLifetimeService(): any;
    // properties
    // fields
  }
}
declare namespace System {
  class Object {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    static Equals(objA: any, objB: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    static ReferenceEquals(objA: any, objB: any): boolean;
    // properties
    // fields
  }
}
declare namespace System {
  class SystemException extends System.Exception {
    // constructors
    constructor();
    constructor(message: string);
    constructor(message: string, innerException: System.Exception);
    // methods
    // properties
    // fields
  }
}
declare namespace System {
  class ValueType extends System.Object {
    // constructors
    protected constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    // properties
    // fields
  }
}
declare namespace Unity.BindingsGenerator.Core.Attributes {
  class NativeEnumAttribute extends System.Attribute {
    // constructors
    constructor();
    // methods
    // properties
    Name: string;
    Header: string;
    GenerateNativeType: boolean;
    // fields
  }
}
declare namespace Unity.BindingsGenerator.Core.Attributes {
  class NativeGetterAttribute extends System.Attribute {
    // constructors
    constructor();
    // methods
    // properties
    Name: string;
    // fields
  }
}
declare namespace Unity.BindingsGenerator.Core.Attributes {
  class NativeIncludeAttribute extends System.Attribute {
    // constructors
    constructor();
    // methods
    // properties
    Header: string;
    // fields
  }
}
declare namespace Unity.BindingsGenerator.Core.Attributes {
  class NativeMethodAttribute extends System.Attribute {
    // constructors
    constructor();
    // methods
    // properties
    Name: string;
    IsThreadSafe: boolean;
    IsFreeFunction: boolean;
    // fields
  }
}
declare namespace Unity.BindingsGenerator.Core.Attributes {
  class NativeParameterAttribute extends System.Attribute {
    // constructors
    constructor();
    // methods
    // properties
    CanBeNull: boolean;
    // fields
  }
}
declare namespace Unity.BindingsGenerator.Core.Attributes {
  class NativePropertyAttribute extends System.Attribute {
    // constructors
    constructor();
    // methods
    // properties
    Name: string;
    IsThreadSafe: boolean;
    // fields
  }
}
declare namespace Unity.BindingsGenerator.Core.Attributes {
  class NativeSetterAttribute extends System.Attribute {
    // constructors
    constructor();
    // methods
    // properties
    Name: string;
    // fields
  }
}
declare namespace Unity.BindingsGenerator.Core.Attributes {
  class NativeStructAttribute extends System.Attribute {
    // constructors
    constructor();
    // methods
    // properties
    Name: string;
    Header: string;
    GenerateMarshallingType: Unity.BindingsGenerator.Core.Attributes.NativeStructGenerateOption;
    // fields
  }
}
declare namespace Unity.BindingsGenerator.Core.Attributes {
  class NativeStructGenerateOption extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Default: Unity.BindingsGenerator.Core.Attributes.NativeStructGenerateOption;
    static UseCustomStruct: Unity.BindingsGenerator.Core.Attributes.NativeStructGenerateOption;
    static ForceGenerate: Unity.BindingsGenerator.Core.Attributes.NativeStructGenerateOption;
  }
}
declare namespace Unity.BindingsGenerator.Core.Attributes {
  class NativeTypeAttribute extends System.Attribute {
    // constructors
    constructor();
    // methods
    // properties
    Name: string;
    Header: string;
    ObjectType: Unity.BindingsGenerator.Core.Attributes.ScriptingObjectType;
    // fields
  }
}
declare namespace Unity.BindingsGenerator.Core.Attributes {
  class ScriptingObjectType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static UnityEngineObject: Unity.BindingsGenerator.Core.Attributes.ScriptingObjectType;
    static IntPtrObject: Unity.BindingsGenerator.Core.Attributes.ScriptingObjectType;
  }
}
declare namespace UnityEditor.Advertisements {
  class AdvertisementSettings extends System.Object {
    // constructors
    protected constructor();
    // methods
    static IsPlatformEnabled(platform: UnityEngine.RuntimePlatform): boolean;
    static SetPlatformEnabled(platform: UnityEngine.RuntimePlatform, value: boolean): void;
    static GetGameId(platform: UnityEngine.RuntimePlatform): string;
    static SetGameId(platform: UnityEngine.RuntimePlatform, gameId: string): void;
    // properties
    static enabled: boolean;
    static initializeOnStartup: boolean;
    static testMode: boolean;
    // fields
  }
}
declare namespace UnityEditorInternal {
  class AnimatorController extends UnityEngine.RuntimeAnimatorController {
    // constructors
    constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEditorInternal {
  class AnimatorControllerLayer extends System.Object {
    // constructors
    constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEditorInternal {
  class AnimatorControllerParameter extends System.Object {
    // constructors
    constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEditorInternal {
  class AnimatorControllerParameterType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Float: UnityEditorInternal.AnimatorControllerParameterType;
    static Int: UnityEditorInternal.AnimatorControllerParameterType;
    static Bool: UnityEditorInternal.AnimatorControllerParameterType;
    static Trigger: UnityEditorInternal.AnimatorControllerParameterType;
  }
}
declare namespace UnityEditorInternal {
  class AnimatorLayerBlendingMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Override: UnityEditorInternal.AnimatorLayerBlendingMode;
    static Additive: UnityEditorInternal.AnimatorLayerBlendingMode;
  }
}
declare namespace UnityEditorInternal {
  class BlendTree extends UnityEngine.Motion {
    // constructors
    constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEditorInternal {
  class State extends UnityEngine.Object {
    // constructors
    constructor();
    // methods
    GetMotion(): UnityEngine.Motion;
    GetMotion(layer: UnityEditorInternal.AnimatorControllerLayer): UnityEngine.Motion;
    CreateBlendTree(): UnityEditorInternal.BlendTree;
    CreateBlendTree(layer: UnityEditorInternal.AnimatorControllerLayer): UnityEditorInternal.BlendTree;
    // properties
    readonly uniqueName: string;
    readonly uniqueNameHash: number;
    speed: number;
    mirror: boolean;
    iKOnFeet: boolean;
    tag: string;
    // fields
  }
}
declare namespace UnityEditorInternal {
  class StateMachine extends UnityEngine.Object {
    // constructors
    constructor();
    // methods
    GetState(index: number): UnityEditorInternal.State;
    AddState(stateName: string): UnityEditorInternal.State;
    GetStateMachine(index: number): UnityEditorInternal.StateMachine;
    AddStateMachine(stateMachineName: string): UnityEditorInternal.StateMachine;
    AddTransition(src: UnityEditorInternal.State, dst: UnityEditorInternal.State): UnityEditorInternal.Transition;
    AddAnyStateTransition(dst: UnityEditorInternal.State): UnityEditorInternal.Transition;
    GetStateMachinePosition(i: number): UnityEngine.Vector3;
    GetTransitionsFromState(srcState: UnityEditorInternal.State): UnityEditorInternal.Transition[];
    // properties
    defaultState: UnityEditorInternal.State;
    anyStatePosition: UnityEngine.Vector3;
    parentStateMachinePosition: UnityEngine.Vector3;
    // fields
  }
}
declare namespace UnityEditorInternal {
  class Transition extends UnityEngine.Object {
    // constructors
    constructor();
    // methods
    GetTransitionContentForRect(rect: UnityEngine.Rect): UnityEngine.GUIContent;
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class AccelerationEvent extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    readonly acceleration: UnityEngine.Vector3;
    readonly deltaTime: number;
    // fields
  }
}
declare namespace UnityEngine {
  class ADBannerView extends System.Object {
    // constructors
    constructor(type: UnityEngine.ADBannerView.Type, layout: UnityEngine.ADBannerView.Layout);
    // methods
    static IsAvailable(type: UnityEngine.ADBannerView.Type): boolean;
    // properties
    readonly loaded: boolean;
    visible: boolean;
    layout: UnityEngine.ADBannerView.Layout;
    position: UnityEngine.Vector2;
    readonly size: UnityEngine.Vector2;
    // fields
  }
}
declare namespace UnityEngine.ADBannerView {
  class Layout extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Top: UnityEngine.ADBannerView.Layout;
    static Bottom: UnityEngine.ADBannerView.Layout;
    static TopLeft: UnityEngine.ADBannerView.Layout;
    static TopRight: UnityEngine.ADBannerView.Layout;
    static TopCenter: UnityEngine.ADBannerView.Layout;
    static BottomLeft: UnityEngine.ADBannerView.Layout;
    static BottomRight: UnityEngine.ADBannerView.Layout;
    static BottomCenter: UnityEngine.ADBannerView.Layout;
    static CenterLeft: UnityEngine.ADBannerView.Layout;
    static CenterRight: UnityEngine.ADBannerView.Layout;
    static Center: UnityEngine.ADBannerView.Layout;
    static Manual: UnityEngine.ADBannerView.Layout;
  }
}
declare namespace UnityEngine.ADBannerView {
  class Type extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Banner: UnityEngine.ADBannerView.Type;
    static MediumRect: UnityEngine.ADBannerView.Type;
  }
}
declare namespace UnityEngine {
  class AddComponentMenu extends System.Attribute {
    // constructors
    constructor(menuName: string);
    constructor(menuName: string, order: number);
    // methods
    // properties
    readonly componentMenu: string;
    readonly componentOrder: number;
    // fields
  }
}
declare namespace UnityEngine {
  class ADInterstitialAd extends System.Object {
    // constructors
    constructor(autoReload: boolean);
    constructor();
    // methods
    Show(): void;
    ReloadAd(): void;
    // properties
    static readonly isAvailable: boolean;
    readonly loaded: boolean;
    // fields
  }
}
declare namespace UnityEngine.AI {
  class NavMesh extends System.Object {
    // constructors
    constructor();
    // methods
    static Raycast(sourcePosition: UnityEngine.Vector3, targetPosition: UnityEngine.Vector3, hit: any, areaMask: number): boolean;
    static CalculatePath(sourcePosition: UnityEngine.Vector3, targetPosition: UnityEngine.Vector3, areaMask: number, path: UnityEngine.AI.NavMeshPath): boolean;
    static FindClosestEdge(sourcePosition: UnityEngine.Vector3, hit: any, areaMask: number): boolean;
    static SamplePosition(sourcePosition: UnityEngine.Vector3, hit: any, maxDistance: number, areaMask: number): boolean;
    static SetLayerCost(layer: number, cost: number): void;
    static GetLayerCost(layer: number): number;
    static GetNavMeshLayerFromName(layerName: string): number;
    static SetAreaCost(areaIndex: number, cost: number): void;
    static GetAreaCost(areaIndex: number): number;
    static GetAreaFromName(areaName: string): number;
    static CalculateTriangulation(): UnityEngine.AI.NavMeshTriangulation;
    static Triangulate(vertices: any, indices: any): void;
    static AddOffMeshLinks(): void;
    static RestoreNavMesh(): void;
    // properties
    static avoidancePredictionTime: number;
    static pathfindingIterationsPerFrame: number;
    // fields
    static AllAreas: number;
  }
}
declare namespace UnityEngine.AI {
  class NavMeshAgent extends UnityEngine.Behaviour {
    // constructors
    constructor();
    // methods
    SetDestination(target: UnityEngine.Vector3): boolean;
    ActivateCurrentOffMeshLink(activated: boolean): void;
    CompleteOffMeshLink(): void;
    Warp(newPosition: UnityEngine.Vector3): boolean;
    Move(offset: UnityEngine.Vector3): void;
    Stop(): void;
    Stop(stopUpdates: boolean): void;
    Resume(): void;
    ResetPath(): void;
    SetPath(path: UnityEngine.AI.NavMeshPath): boolean;
    FindClosestEdge(hit: any): boolean;
    Raycast(targetPosition: UnityEngine.Vector3, hit: any): boolean;
    CalculatePath(targetPosition: UnityEngine.Vector3, path: UnityEngine.AI.NavMeshPath): boolean;
    SamplePathPosition(areaMask: number, maxDistance: number, hit: any): boolean;
    SetLayerCost(layer: number, cost: number): void;
    GetLayerCost(layer: number): number;
    SetAreaCost(areaIndex: number, areaCost: number): void;
    GetAreaCost(areaIndex: number): number;
    // properties
    destination: UnityEngine.Vector3;
    stoppingDistance: number;
    velocity: UnityEngine.Vector3;
    nextPosition: UnityEngine.Vector3;
    readonly steeringTarget: UnityEngine.Vector3;
    readonly desiredVelocity: UnityEngine.Vector3;
    readonly remainingDistance: number;
    baseOffset: number;
    readonly isOnOffMeshLink: boolean;
    readonly currentOffMeshLinkData: UnityEngine.AI.OffMeshLinkData;
    readonly nextOffMeshLinkData: UnityEngine.AI.OffMeshLinkData;
    autoTraverseOffMeshLink: boolean;
    autoBraking: boolean;
    autoRepath: boolean;
    readonly hasPath: boolean;
    readonly pathPending: boolean;
    readonly isPathStale: boolean;
    readonly pathStatus: UnityEngine.AI.NavMeshPathStatus;
    readonly pathEndPosition: UnityEngine.Vector3;
    path: UnityEngine.AI.NavMeshPath;
    walkableMask: number;
    areaMask: number;
    speed: number;
    angularSpeed: number;
    acceleration: number;
    updatePosition: boolean;
    updateRotation: boolean;
    radius: number;
    height: number;
    obstacleAvoidanceType: UnityEngine.AI.ObstacleAvoidanceType;
    avoidancePriority: number;
    readonly isOnNavMesh: boolean;
    // fields
  }
}
declare namespace UnityEngine.AI {
  class NavMeshHit extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    position: UnityEngine.Vector3;
    normal: UnityEngine.Vector3;
    distance: number;
    mask: number;
    hit: boolean;
    // fields
  }
}
declare namespace UnityEngine.AI {
  class NavMeshObstacle extends UnityEngine.Behaviour {
    // constructors
    constructor();
    // methods
    // properties
    height: number;
    radius: number;
    velocity: UnityEngine.Vector3;
    carving: boolean;
    carveOnlyStationary: boolean;
    carvingMoveThreshold: number;
    carvingTimeToStationary: number;
    shape: UnityEngine.AI.NavMeshObstacleShape;
    center: UnityEngine.Vector3;
    size: UnityEngine.Vector3;
    // fields
  }
}
declare namespace UnityEngine.AI {
  class NavMeshObstacleShape extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Capsule: UnityEngine.AI.NavMeshObstacleShape;
    static Box: UnityEngine.AI.NavMeshObstacleShape;
  }
}
declare namespace UnityEngine.AI {
  class NavMeshPath extends System.Object {
    // constructors
    constructor();
    // methods
    GetCornersNonAlloc(results: UnityEngine.Vector3[]): number;
    ClearCorners(): void;
    // properties
    readonly corners: UnityEngine.Vector3[];
    readonly status: UnityEngine.AI.NavMeshPathStatus;
    // fields
  }
}
declare namespace UnityEngine.AI {
  class NavMeshPathStatus extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static PathComplete: UnityEngine.AI.NavMeshPathStatus;
    static PathPartial: UnityEngine.AI.NavMeshPathStatus;
    static PathInvalid: UnityEngine.AI.NavMeshPathStatus;
  }
}
declare namespace UnityEngine.AI {
  class NavMeshTriangulation extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    readonly layers: number[];
    // fields
    vertices: UnityEngine.Vector3[];
    indices: number[];
    areas: number[];
  }
}
declare namespace UnityEngine.AI {
  class ObstacleAvoidanceType extends System.Enum {
    // constructors
    protected constructor();
    // methods
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
declare namespace UnityEngine.AI {
  class OffMeshLink extends UnityEngine.Component {
    // constructors
    constructor();
    // methods
    UpdatePositions(): void;
    // properties
    activated: boolean;
    readonly occupied: boolean;
    costOverride: number;
    biDirectional: boolean;
    navMeshLayer: number;
    area: number;
    autoUpdatePositions: boolean;
    startTransform: UnityEngine.Transform;
    endTransform: UnityEngine.Transform;
    // fields
  }
}
declare namespace UnityEngine.AI {
  class OffMeshLinkData extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    readonly valid: boolean;
    readonly activated: boolean;
    readonly linkType: UnityEngine.AI.OffMeshLinkType;
    readonly startPos: UnityEngine.Vector3;
    readonly endPos: UnityEngine.Vector3;
    readonly offMeshLink: UnityEngine.AI.OffMeshLink;
    // fields
  }
}
declare namespace UnityEngine.AI {
  class OffMeshLinkType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static LinkTypeManual: UnityEngine.AI.OffMeshLinkType;
    static LinkTypeDropDown: UnityEngine.AI.OffMeshLinkType;
    static LinkTypeJumpAcross: UnityEngine.AI.OffMeshLinkType;
  }
}
declare namespace UnityEngine.Analytics {
  class Analytics extends System.Object {
    // constructors
    protected constructor();
    // methods
    static FlushEvents(): UnityEngine.Analytics.AnalyticsResult;
    static SetUserId(userId: string): UnityEngine.Analytics.AnalyticsResult;
    static SetUserGender(gender: UnityEngine.Analytics.Gender): UnityEngine.Analytics.AnalyticsResult;
    static SetUserBirthYear(birthYear: number): UnityEngine.Analytics.AnalyticsResult;
    static Transaction(productId: string, amount: number, currency: string): UnityEngine.Analytics.AnalyticsResult;
    static Transaction(productId: string, amount: number, currency: string, receiptPurchaseData: string, signature: string): UnityEngine.Analytics.AnalyticsResult;
    static CustomEvent(customEventName: string): UnityEngine.Analytics.AnalyticsResult;
    static CustomEvent(customEventName: string, position: UnityEngine.Vector3): UnityEngine.Analytics.AnalyticsResult;
    static CustomEvent(customEventName: string, eventData: any): UnityEngine.Analytics.AnalyticsResult;
    // properties
    // fields
  }
}
declare namespace UnityEngine.Analytics {
  class AnalyticsResult extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Ok: UnityEngine.Analytics.AnalyticsResult;
    static NotInitialized: UnityEngine.Analytics.AnalyticsResult;
    static AnalyticsDisabled: UnityEngine.Analytics.AnalyticsResult;
    static TooManyItems: UnityEngine.Analytics.AnalyticsResult;
    static SizeLimitReached: UnityEngine.Analytics.AnalyticsResult;
    static TooManyRequests: UnityEngine.Analytics.AnalyticsResult;
    static InvalidData: UnityEngine.Analytics.AnalyticsResult;
    static UnsupportedPlatform: UnityEngine.Analytics.AnalyticsResult;
  }
}
declare namespace UnityEngine.Analytics {
  class CustomEventData extends System.Object {
    // constructors
    constructor(name: string);
    // methods
    Dispose(): void;
    Add(key: string, value: string): boolean;
    Add(key: string, value: boolean): boolean;
    Add(key: string, value: any): boolean;
    Add(key: string, value: number): boolean;
    Add(key: string, value: number): boolean;
    Add(key: string, value: number): boolean;
    Add(key: string, value: number): boolean;
    Add(key: string, value: number): boolean;
    Add(key: string, value: number): boolean;
    Add(key: string, value: number): boolean;
    Add(key: string, value: number): boolean;
    Add(key: string, value: number): boolean;
    Add(key: string, value: number): boolean;
    Add(key: string, value: number): boolean;
    Add(eventData: any): boolean;
    InternalCreate(name: string): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine.Analytics {
  class Gender extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Male: UnityEngine.Analytics.Gender;
    static Female: UnityEngine.Analytics.Gender;
    static Unknown: UnityEngine.Analytics.Gender;
  }
}
declare namespace UnityEngine.Analytics {
  class UnityAnalyticsHandler extends System.Object {
    // constructors
    constructor();
    // methods
    Dispose(): void;
    FlushEvents(): UnityEngine.Analytics.AnalyticsResult;
    SetUserId(userId: string): UnityEngine.Analytics.AnalyticsResult;
    SetUserGender(gender: UnityEngine.Analytics.Gender): UnityEngine.Analytics.AnalyticsResult;
    SetUserBirthYear(birthYear: number): UnityEngine.Analytics.AnalyticsResult;
    Transaction(productId: string, amount: number, currency: string): UnityEngine.Analytics.AnalyticsResult;
    Transaction(productId: string, amount: number, currency: string, receiptPurchaseData: string, signature: string): UnityEngine.Analytics.AnalyticsResult;
    CustomEvent(customEventName: string): UnityEngine.Analytics.AnalyticsResult;
    CustomEvent(eventData: UnityEngine.Analytics.CustomEventData): UnityEngine.Analytics.AnalyticsResult;
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class AnchoredJoint2D extends UnityEngine.Joint2D {
    // constructors
    constructor();
    // methods
    // properties
    anchor: UnityEngine.Vector2;
    connectedAnchor: UnityEngine.Vector2;
    autoConfigureConnectedAnchor: boolean;
    // fields
  }
}
declare namespace UnityEngine {
  class AndroidActivityIndicatorStyle extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static DontShow: UnityEngine.AndroidActivityIndicatorStyle;
    static Large: UnityEngine.AndroidActivityIndicatorStyle;
    static InversedLarge: UnityEngine.AndroidActivityIndicatorStyle;
    static Small: UnityEngine.AndroidActivityIndicatorStyle;
    static InversedSmall: UnityEngine.AndroidActivityIndicatorStyle;
  }
}
declare namespace UnityEngine {
  class AndroidInput extends System.Object {
    // constructors
    protected constructor();
    // methods
    static GetSecondaryTouch(index: number): UnityEngine.Touch;
    // properties
    static readonly touchCountSecondary: number;
    static readonly secondaryTouchEnabled: boolean;
    static readonly secondaryTouchWidth: number;
    static readonly secondaryTouchHeight: number;
    // fields
  }
}
declare namespace UnityEngine {
  class AndroidJavaClass extends UnityEngine.AndroidJavaObject {
    // constructors
    constructor(className: string);
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class AndroidJavaException extends System.Exception {
    // constructors
    protected constructor();
    // methods
    // properties
    readonly StackTrace: string;
    // fields
  }
}
declare namespace UnityEngine {
  class AndroidJavaObject extends System.Object {
    // constructors
    constructor(className: string, args: any[]);
    // methods
    Dispose(): void;
    Call(methodName: string, args: any[]): void;
    CallStatic(methodName: string, args: any[]): void;
    GetRawObject(): any;
    GetRawClass(): any;
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class AndroidJavaProxy extends System.Object {
    // constructors
    constructor(javaInterface: string);
    constructor(javaInterface: UnityEngine.AndroidJavaClass);
    // methods
    Invoke(methodName: string, args: any[]): UnityEngine.AndroidJavaObject;
    Invoke(methodName: string, javaArgs: UnityEngine.AndroidJavaObject[]): UnityEngine.AndroidJavaObject;
    // properties
    // fields
    javaInterface: UnityEngine.AndroidJavaClass;
  }
}
declare namespace UnityEngine {
  class AndroidJavaRunnableProxy extends UnityEngine.AndroidJavaProxy {
    // constructors
    constructor(runnable: (() => void));
    // methods
    run(): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class AndroidJNI extends System.Object {
    // constructors
    protected constructor();
    // methods
    static AttachCurrentThread(): number;
    static DetachCurrentThread(): number;
    static GetVersion(): number;
    static FindClass(name: string): any;
    static FromReflectedMethod(refMethod: any): any;
    static FromReflectedField(refField: any): any;
    static ToReflectedMethod(clazz: any, methodID: any, isStatic: boolean): any;
    static ToReflectedField(clazz: any, fieldID: any, isStatic: boolean): any;
    static GetSuperclass(clazz: any): any;
    static IsAssignableFrom(clazz1: any, clazz2: any): boolean;
    static Throw(obj: any): number;
    static ThrowNew(clazz: any, message: string): number;
    static ExceptionOccurred(): any;
    static ExceptionDescribe(): void;
    static ExceptionClear(): void;
    static FatalError(message: string): void;
    static PushLocalFrame(capacity: number): number;
    static PopLocalFrame(ptr: any): any;
    static NewGlobalRef(obj: any): any;
    static DeleteGlobalRef(obj: any): void;
    static NewLocalRef(obj: any): any;
    static DeleteLocalRef(obj: any): void;
    static IsSameObject(obj1: any, obj2: any): boolean;
    static EnsureLocalCapacity(capacity: number): number;
    static AllocObject(clazz: any): any;
    static NewObject(clazz: any, methodID: any, args: UnityEngine.jvalue[]): any;
    static GetObjectClass(obj: any): any;
    static IsInstanceOf(obj: any, clazz: any): boolean;
    static GetMethodID(clazz: any, name: string, sig: string): any;
    static GetFieldID(clazz: any, name: string, sig: string): any;
    static GetStaticMethodID(clazz: any, name: string, sig: string): any;
    static GetStaticFieldID(clazz: any, name: string, sig: string): any;
    static NewStringUTF(bytes: string): any;
    static GetStringUTFLength(str: any): number;
    static GetStringUTFChars(str: any): string;
    static CallStringMethod(obj: any, methodID: any, args: UnityEngine.jvalue[]): string;
    static CallObjectMethod(obj: any, methodID: any, args: UnityEngine.jvalue[]): any;
    static CallIntMethod(obj: any, methodID: any, args: UnityEngine.jvalue[]): number;
    static CallBooleanMethod(obj: any, methodID: any, args: UnityEngine.jvalue[]): boolean;
    static CallShortMethod(obj: any, methodID: any, args: UnityEngine.jvalue[]): number;
    static CallByteMethod(obj: any, methodID: any, args: UnityEngine.jvalue[]): number;
    static CallCharMethod(obj: any, methodID: any, args: UnityEngine.jvalue[]): any;
    static CallFloatMethod(obj: any, methodID: any, args: UnityEngine.jvalue[]): number;
    static CallDoubleMethod(obj: any, methodID: any, args: UnityEngine.jvalue[]): number;
    static CallLongMethod(obj: any, methodID: any, args: UnityEngine.jvalue[]): number;
    static CallVoidMethod(obj: any, methodID: any, args: UnityEngine.jvalue[]): void;
    static GetStringField(obj: any, fieldID: any): string;
    static GetObjectField(obj: any, fieldID: any): any;
    static GetBooleanField(obj: any, fieldID: any): boolean;
    static GetByteField(obj: any, fieldID: any): number;
    static GetCharField(obj: any, fieldID: any): any;
    static GetShortField(obj: any, fieldID: any): number;
    static GetIntField(obj: any, fieldID: any): number;
    static GetLongField(obj: any, fieldID: any): number;
    static GetFloatField(obj: any, fieldID: any): number;
    static GetDoubleField(obj: any, fieldID: any): number;
    static SetStringField(obj: any, fieldID: any, val: string): void;
    static SetObjectField(obj: any, fieldID: any, val: any): void;
    static SetBooleanField(obj: any, fieldID: any, val: boolean): void;
    static SetByteField(obj: any, fieldID: any, val: number): void;
    static SetCharField(obj: any, fieldID: any, val: any): void;
    static SetShortField(obj: any, fieldID: any, val: number): void;
    static SetIntField(obj: any, fieldID: any, val: number): void;
    static SetLongField(obj: any, fieldID: any, val: number): void;
    static SetFloatField(obj: any, fieldID: any, val: number): void;
    static SetDoubleField(obj: any, fieldID: any, val: number): void;
    static CallStaticStringMethod(clazz: any, methodID: any, args: UnityEngine.jvalue[]): string;
    static CallStaticObjectMethod(clazz: any, methodID: any, args: UnityEngine.jvalue[]): any;
    static CallStaticIntMethod(clazz: any, methodID: any, args: UnityEngine.jvalue[]): number;
    static CallStaticBooleanMethod(clazz: any, methodID: any, args: UnityEngine.jvalue[]): boolean;
    static CallStaticShortMethod(clazz: any, methodID: any, args: UnityEngine.jvalue[]): number;
    static CallStaticByteMethod(clazz: any, methodID: any, args: UnityEngine.jvalue[]): number;
    static CallStaticCharMethod(clazz: any, methodID: any, args: UnityEngine.jvalue[]): any;
    static CallStaticFloatMethod(clazz: any, methodID: any, args: UnityEngine.jvalue[]): number;
    static CallStaticDoubleMethod(clazz: any, methodID: any, args: UnityEngine.jvalue[]): number;
    static CallStaticLongMethod(clazz: any, methodID: any, args: UnityEngine.jvalue[]): number;
    static CallStaticVoidMethod(clazz: any, methodID: any, args: UnityEngine.jvalue[]): void;
    static GetStaticStringField(clazz: any, fieldID: any): string;
    static GetStaticObjectField(clazz: any, fieldID: any): any;
    static GetStaticBooleanField(clazz: any, fieldID: any): boolean;
    static GetStaticByteField(clazz: any, fieldID: any): number;
    static GetStaticCharField(clazz: any, fieldID: any): any;
    static GetStaticShortField(clazz: any, fieldID: any): number;
    static GetStaticIntField(clazz: any, fieldID: any): number;
    static GetStaticLongField(clazz: any, fieldID: any): number;
    static GetStaticFloatField(clazz: any, fieldID: any): number;
    static GetStaticDoubleField(clazz: any, fieldID: any): number;
    static SetStaticStringField(clazz: any, fieldID: any, val: string): void;
    static SetStaticObjectField(clazz: any, fieldID: any, val: any): void;
    static SetStaticBooleanField(clazz: any, fieldID: any, val: boolean): void;
    static SetStaticByteField(clazz: any, fieldID: any, val: number): void;
    static SetStaticCharField(clazz: any, fieldID: any, val: any): void;
    static SetStaticShortField(clazz: any, fieldID: any, val: number): void;
    static SetStaticIntField(clazz: any, fieldID: any, val: number): void;
    static SetStaticLongField(clazz: any, fieldID: any, val: number): void;
    static SetStaticFloatField(clazz: any, fieldID: any, val: number): void;
    static SetStaticDoubleField(clazz: any, fieldID: any, val: number): void;
    static ToBooleanArray(array: boolean[]): any;
    static ToByteArray(array: number[]): any;
    static ToCharArray(array: any[]): any;
    static ToShortArray(array: number[]): any;
    static ToIntArray(array: number[]): any;
    static ToLongArray(array: number[]): any;
    static ToFloatArray(array: number[]): any;
    static ToDoubleArray(array: number[]): any;
    static ToObjectArray(array: any[], arrayClass: any): any;
    static ToObjectArray(array: any[]): any;
    static FromBooleanArray(array: any): boolean[];
    static FromByteArray(array: any): number[];
    static FromCharArray(array: any): any[];
    static FromShortArray(array: any): number[];
    static FromIntArray(array: any): number[];
    static FromLongArray(array: any): number[];
    static FromFloatArray(array: any): number[];
    static FromDoubleArray(array: any): number[];
    static FromObjectArray(array: any): any[];
    static GetArrayLength(array: any): number;
    static NewBooleanArray(size: number): any;
    static NewByteArray(size: number): any;
    static NewCharArray(size: number): any;
    static NewShortArray(size: number): any;
    static NewIntArray(size: number): any;
    static NewLongArray(size: number): any;
    static NewFloatArray(size: number): any;
    static NewDoubleArray(size: number): any;
    static NewObjectArray(size: number, clazz: any, obj: any): any;
    static GetBooleanArrayElement(array: any, index: number): boolean;
    static GetByteArrayElement(array: any, index: number): number;
    static GetCharArrayElement(array: any, index: number): any;
    static GetShortArrayElement(array: any, index: number): number;
    static GetIntArrayElement(array: any, index: number): number;
    static GetLongArrayElement(array: any, index: number): number;
    static GetFloatArrayElement(array: any, index: number): number;
    static GetDoubleArrayElement(array: any, index: number): number;
    static GetObjectArrayElement(array: any, index: number): any;
    static SetBooleanArrayElement(array: any, index: number, val: number): void;
    static SetByteArrayElement(array: any, index: number, val: number): void;
    static SetCharArrayElement(array: any, index: number, val: any): void;
    static SetShortArrayElement(array: any, index: number, val: number): void;
    static SetIntArrayElement(array: any, index: number, val: number): void;
    static SetLongArrayElement(array: any, index: number, val: number): void;
    static SetFloatArrayElement(array: any, index: number, val: number): void;
    static SetDoubleArrayElement(array: any, index: number, val: number): void;
    static SetObjectArrayElement(array: any, index: number, obj: any): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class AndroidJNIHelper extends System.Object {
    // constructors
    protected constructor();
    // methods
    static GetConstructorID(javaClass: any): any;
    static GetConstructorID(javaClass: any, signature: string): any;
    static GetConstructorID(jclass: any, args: any[]): any;
    static GetMethodID(javaClass: any, methodName: string, signature: string): any;
    static GetMethodID(javaClass: any, methodName: string): any;
    static GetMethodID(javaClass: any, methodName: string, signature: string, isStatic: boolean): any;
    static GetMethodID(jclass: any, methodName: string, args: any[], isStatic: boolean): any;
    static GetFieldID(javaClass: any, fieldName: string, signature: string): any;
    static GetFieldID(javaClass: any, fieldName: string): any;
    static GetFieldID(javaClass: any, fieldName: string, signature: string, isStatic: boolean): any;
    static CreateJavaRunnable(jrunnable: (() => void)): any;
    static CreateJavaProxy(proxy: UnityEngine.AndroidJavaProxy): any;
    static ConvertToJNIArray(array: any): any;
    static CreateJNIArgArray(args: any[]): UnityEngine.jvalue[];
    static DeleteJNIArgArray(args: any[], jniArgs: UnityEngine.jvalue[]): void;
    static GetSignature(obj: any): string;
    static GetSignature(args: any[]): string;
    // properties
    static debug: boolean;
    // fields
  }
}
declare namespace UnityEngine {
  class AndroidJNISafe extends System.Object {
    // constructors
    constructor();
    // methods
    static CheckException(): void;
    static DeleteGlobalRef(globalref: any): void;
    static DeleteLocalRef(localref: any): void;
    static NewStringUTF(bytes: string): any;
    static GetStringUTFChars(str: any): string;
    static GetObjectClass(ptr: any): any;
    static GetStaticMethodID(clazz: any, name: string, sig: string): any;
    static GetMethodID(obj: any, name: string, sig: string): any;
    static GetFieldID(clazz: any, name: string, sig: string): any;
    static GetStaticFieldID(clazz: any, name: string, sig: string): any;
    static FromReflectedMethod(refMethod: any): any;
    static FromReflectedField(refField: any): any;
    static FindClass(name: string): any;
    static NewObject(clazz: any, methodID: any, args: UnityEngine.jvalue[]): any;
    static SetStaticObjectField(clazz: any, fieldID: any, val: any): void;
    static SetStaticStringField(clazz: any, fieldID: any, val: string): void;
    static SetStaticCharField(clazz: any, fieldID: any, val: any): void;
    static SetStaticDoubleField(clazz: any, fieldID: any, val: number): void;
    static SetStaticFloatField(clazz: any, fieldID: any, val: number): void;
    static SetStaticLongField(clazz: any, fieldID: any, val: number): void;
    static SetStaticShortField(clazz: any, fieldID: any, val: number): void;
    static SetStaticByteField(clazz: any, fieldID: any, val: number): void;
    static SetStaticBooleanField(clazz: any, fieldID: any, val: boolean): void;
    static SetStaticIntField(clazz: any, fieldID: any, val: number): void;
    static GetStaticObjectField(clazz: any, fieldID: any): any;
    static GetStaticStringField(clazz: any, fieldID: any): string;
    static GetStaticCharField(clazz: any, fieldID: any): any;
    static GetStaticDoubleField(clazz: any, fieldID: any): number;
    static GetStaticFloatField(clazz: any, fieldID: any): number;
    static GetStaticLongField(clazz: any, fieldID: any): number;
    static GetStaticShortField(clazz: any, fieldID: any): number;
    static GetStaticByteField(clazz: any, fieldID: any): number;
    static GetStaticBooleanField(clazz: any, fieldID: any): boolean;
    static GetStaticIntField(clazz: any, fieldID: any): number;
    static CallStaticVoidMethod(clazz: any, methodID: any, args: UnityEngine.jvalue[]): void;
    static CallStaticObjectMethod(clazz: any, methodID: any, args: UnityEngine.jvalue[]): any;
    static CallStaticStringMethod(clazz: any, methodID: any, args: UnityEngine.jvalue[]): string;
    static CallStaticCharMethod(clazz: any, methodID: any, args: UnityEngine.jvalue[]): any;
    static CallStaticDoubleMethod(clazz: any, methodID: any, args: UnityEngine.jvalue[]): number;
    static CallStaticFloatMethod(clazz: any, methodID: any, args: UnityEngine.jvalue[]): number;
    static CallStaticLongMethod(clazz: any, methodID: any, args: UnityEngine.jvalue[]): number;
    static CallStaticShortMethod(clazz: any, methodID: any, args: UnityEngine.jvalue[]): number;
    static CallStaticByteMethod(clazz: any, methodID: any, args: UnityEngine.jvalue[]): number;
    static CallStaticBooleanMethod(clazz: any, methodID: any, args: UnityEngine.jvalue[]): boolean;
    static CallStaticIntMethod(clazz: any, methodID: any, args: UnityEngine.jvalue[]): number;
    static SetObjectField(obj: any, fieldID: any, val: any): void;
    static SetStringField(obj: any, fieldID: any, val: string): void;
    static SetCharField(obj: any, fieldID: any, val: any): void;
    static SetDoubleField(obj: any, fieldID: any, val: number): void;
    static SetFloatField(obj: any, fieldID: any, val: number): void;
    static SetLongField(obj: any, fieldID: any, val: number): void;
    static SetShortField(obj: any, fieldID: any, val: number): void;
    static SetByteField(obj: any, fieldID: any, val: number): void;
    static SetBooleanField(obj: any, fieldID: any, val: boolean): void;
    static SetIntField(obj: any, fieldID: any, val: number): void;
    static GetObjectField(obj: any, fieldID: any): any;
    static GetStringField(obj: any, fieldID: any): string;
    static GetCharField(obj: any, fieldID: any): any;
    static GetDoubleField(obj: any, fieldID: any): number;
    static GetFloatField(obj: any, fieldID: any): number;
    static GetLongField(obj: any, fieldID: any): number;
    static GetShortField(obj: any, fieldID: any): number;
    static GetByteField(obj: any, fieldID: any): number;
    static GetBooleanField(obj: any, fieldID: any): boolean;
    static GetIntField(obj: any, fieldID: any): number;
    static CallVoidMethod(obj: any, methodID: any, args: UnityEngine.jvalue[]): void;
    static CallObjectMethod(obj: any, methodID: any, args: UnityEngine.jvalue[]): any;
    static CallStringMethod(obj: any, methodID: any, args: UnityEngine.jvalue[]): string;
    static CallCharMethod(obj: any, methodID: any, args: UnityEngine.jvalue[]): any;
    static CallDoubleMethod(obj: any, methodID: any, args: UnityEngine.jvalue[]): number;
    static CallFloatMethod(obj: any, methodID: any, args: UnityEngine.jvalue[]): number;
    static CallLongMethod(obj: any, methodID: any, args: UnityEngine.jvalue[]): number;
    static CallShortMethod(obj: any, methodID: any, args: UnityEngine.jvalue[]): number;
    static CallByteMethod(obj: any, methodID: any, args: UnityEngine.jvalue[]): number;
    static CallBooleanMethod(obj: any, methodID: any, args: UnityEngine.jvalue[]): boolean;
    static CallIntMethod(obj: any, methodID: any, args: UnityEngine.jvalue[]): number;
    static FromObjectArray(array: any): any[];
    static FromCharArray(array: any): any[];
    static FromDoubleArray(array: any): number[];
    static FromFloatArray(array: any): number[];
    static FromLongArray(array: any): number[];
    static FromShortArray(array: any): number[];
    static FromByteArray(array: any): number[];
    static FromBooleanArray(array: any): boolean[];
    static FromIntArray(array: any): number[];
    static ToObjectArray(array: any[]): any;
    static ToObjectArray(array: any[], type: any): any;
    static ToCharArray(array: any[]): any;
    static ToDoubleArray(array: number[]): any;
    static ToFloatArray(array: number[]): any;
    static ToLongArray(array: number[]): any;
    static ToShortArray(array: number[]): any;
    static ToByteArray(array: number[]): any;
    static ToBooleanArray(array: boolean[]): any;
    static ToIntArray(array: number[]): any;
    static GetObjectArrayElement(array: any, index: number): any;
    static GetArrayLength(array: any): number;
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class AndroidReflection extends System.Object {
    // constructors
    constructor();
    // methods
    static IsPrimitive(t: any): boolean;
    static IsAssignableFrom(t: any, from: any): boolean;
    static GetConstructorMember(jclass: any, signature: string): any;
    static GetMethodMember(jclass: any, methodName: string, signature: string, isStatic: boolean): any;
    static GetFieldMember(jclass: any, fieldName: string, signature: string, isStatic: boolean): any;
    static NewProxyInstance(delegateHandle: number, interfaze: any): any;
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class Animation extends UnityEngine.Behaviour {
    // constructors
    constructor();
    // methods
    Stop(): void;
    Stop(name: string): void;
    Rewind(name: string): void;
    Rewind(): void;
    Sample(): void;
    IsPlaying(name: string): boolean;
    Play(): boolean;
    Play(mode: UnityEngine.PlayMode): boolean;
    Play(animation: string, mode: UnityEngine.PlayMode): boolean;
    Play(animation: string): boolean;
    Play(mode: UnityEngine.AnimationPlayMode): boolean;
    Play(animation: string, mode: UnityEngine.AnimationPlayMode): boolean;
    CrossFade(animation: string, fadeLength: number, mode: UnityEngine.PlayMode): void;
    CrossFade(animation: string, fadeLength: number): void;
    CrossFade(animation: string): void;
    Blend(animation: string, targetWeight: number, fadeLength: number): void;
    Blend(animation: string, targetWeight: number): void;
    Blend(animation: string): void;
    CrossFadeQueued(animation: string, fadeLength: number, queue: UnityEngine.QueueMode, mode: UnityEngine.PlayMode): UnityEngine.AnimationState;
    CrossFadeQueued(animation: string, fadeLength: number, queue: UnityEngine.QueueMode): UnityEngine.AnimationState;
    CrossFadeQueued(animation: string, fadeLength: number): UnityEngine.AnimationState;
    CrossFadeQueued(animation: string): UnityEngine.AnimationState;
    PlayQueued(animation: string, queue: UnityEngine.QueueMode, mode: UnityEngine.PlayMode): UnityEngine.AnimationState;
    PlayQueued(animation: string, queue: UnityEngine.QueueMode): UnityEngine.AnimationState;
    PlayQueued(animation: string): UnityEngine.AnimationState;
    AddClip(clip: UnityEngine.AnimationClip, newName: string): void;
    AddClip(clip: UnityEngine.AnimationClip, newName: string, firstFrame: number, lastFrame: number, addLoopFrame: boolean): void;
    AddClip(clip: UnityEngine.AnimationClip, newName: string, firstFrame: number, lastFrame: number): void;
    RemoveClip(clip: UnityEngine.AnimationClip): void;
    RemoveClip(clipName: string): void;
    GetClipCount(): number;
    SyncLayer(layer: number): void;
    GetEnumerator(): any;
    GetClip(name: string): UnityEngine.AnimationClip;
    // properties
    clip: UnityEngine.AnimationClip;
    playAutomatically: boolean;
    wrapMode: UnityEngine.WrapMode;
    readonly isPlaying: boolean;
    get_Item(name: string): UnityEngine.AnimationState;
    animatePhysics: boolean;
    animateOnlyIfVisible: boolean;
    cullingType: UnityEngine.AnimationCullingType;
    localBounds: UnityEngine.Bounds;
    // fields
  }
}
declare namespace UnityEngine.Animation {
  class Enumerator extends System.Object {
    // constructors
    protected constructor();
    // methods
    MoveNext(): boolean;
    Reset(): void;
    // properties
    readonly Current: any;
    // fields
  }
}
declare namespace UnityEngine {
  class AnimationBlendMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Blend: UnityEngine.AnimationBlendMode;
    static Additive: UnityEngine.AnimationBlendMode;
  }
}
declare namespace UnityEngine {
  class AnimationClip extends UnityEngine.Motion {
    // constructors
    constructor();
    // methods
    SampleAnimation(go: UnityEngine.GameObject, time: number): void;
    SetCurve(relativePath: string, type: any, propertyName: string, curve: UnityEngine.AnimationCurve): void;
    EnsureQuaternionContinuity(): void;
    ClearCurves(): void;
    AddEvent(evt: UnityEngine.AnimationEvent): void;
    // properties
    readonly length: number;
    frameRate: number;
    wrapMode: UnityEngine.WrapMode;
    localBounds: UnityEngine.Bounds;
    legacy: boolean;
    readonly humanMotion: boolean;
    events: UnityEngine.AnimationEvent[];
    // fields
  }
}
declare namespace UnityEngine {
  class AnimationClipPair extends System.Object {
    // constructors
    constructor();
    // methods
    // properties
    // fields
    originalClip: UnityEngine.AnimationClip;
    overrideClip: UnityEngine.AnimationClip;
  }
}
declare namespace UnityEngine {
  class AnimationCullingType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static AlwaysAnimate: UnityEngine.AnimationCullingType;
    static BasedOnRenderers: UnityEngine.AnimationCullingType;
    static BasedOnClipBounds: UnityEngine.AnimationCullingType;
    static BasedOnUserBounds: UnityEngine.AnimationCullingType;
  }
}
declare namespace UnityEngine {
  class AnimationCurve extends System.Object {
    // constructors
    constructor(keys: UnityEngine.Keyframe[]);
    constructor();
    // methods
    Evaluate(time: number): number;
    AddKey(time: number, value: number): number;
    AddKey(key: UnityEngine.Keyframe): number;
    MoveKey(index: number, key: UnityEngine.Keyframe): number;
    RemoveKey(index: number): void;
    SmoothTangents(index: number, weight: number): void;
    static Linear(timeStart: number, valueStart: number, timeEnd: number, valueEnd: number): UnityEngine.AnimationCurve;
    static EaseInOut(timeStart: number, valueStart: number, timeEnd: number, valueEnd: number): UnityEngine.AnimationCurve;
    // properties
    keys: UnityEngine.Keyframe[];
    get_Item(index: number): UnityEngine.Keyframe;
    readonly length: number;
    preWrapMode: UnityEngine.WrapMode;
    postWrapMode: UnityEngine.WrapMode;
    // fields
  }
}
declare namespace UnityEngine {
  class AnimationEvent extends System.Object {
    // constructors
    constructor();
    // methods
    // properties
    data: string;
    stringParameter: string;
    floatParameter: number;
    intParameter: number;
    objectReferenceParameter: UnityEngine.Object;
    functionName: string;
    time: number;
    messageOptions: UnityEngine.SendMessageOptions;
    readonly isFiredByLegacy: boolean;
    readonly isFiredByAnimator: boolean;
    readonly animationState: UnityEngine.AnimationState;
    readonly animatorStateInfo: UnityEngine.AnimatorStateInfo;
    readonly animatorClipInfo: UnityEngine.AnimatorClipInfo;
    // fields
  }
}
declare namespace UnityEngine {
  class AnimationEventSource extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static NoSource: UnityEngine.AnimationEventSource;
    static Legacy: UnityEngine.AnimationEventSource;
    static Animator: UnityEngine.AnimationEventSource;
  }
}
declare namespace UnityEngine {
  class AnimationInfo extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    readonly clip: UnityEngine.AnimationClip;
    readonly weight: number;
    // fields
  }
}
declare namespace UnityEngine {
  class AnimationPlayMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Stop: UnityEngine.AnimationPlayMode;
    static Queue: UnityEngine.AnimationPlayMode;
    static Mix: UnityEngine.AnimationPlayMode;
  }
}
declare namespace UnityEngine {
  class AnimationState extends UnityEngine.TrackedReference {
    // constructors
    constructor();
    // methods
    AddMixingTransform(mix: UnityEngine.Transform, recursive: boolean): void;
    AddMixingTransform(mix: UnityEngine.Transform): void;
    RemoveMixingTransform(mix: UnityEngine.Transform): void;
    // properties
    enabled: boolean;
    weight: number;
    wrapMode: UnityEngine.WrapMode;
    time: number;
    normalizedTime: number;
    speed: number;
    normalizedSpeed: number;
    readonly length: number;
    layer: number;
    readonly clip: UnityEngine.AnimationClip;
    name: string;
    blendMode: UnityEngine.AnimationBlendMode;
    // fields
  }
}
declare namespace UnityEngine {
  class Animator extends UnityEngine.Experimental.Director.DirectorPlayer {
    // constructors
    constructor();
    // methods
    GetFloat(name: string): number;
    GetFloat(id: number): number;
    SetFloat(name: string, value: number): void;
    SetFloat(name: string, value: number, dampTime: number, deltaTime: number): void;
    SetFloat(id: number, value: number): void;
    SetFloat(id: number, value: number, dampTime: number, deltaTime: number): void;
    GetBool(name: string): boolean;
    GetBool(id: number): boolean;
    SetBool(name: string, value: boolean): void;
    SetBool(id: number, value: boolean): void;
    GetInteger(name: string): number;
    GetInteger(id: number): number;
    SetInteger(name: string, value: number): void;
    SetInteger(id: number, value: number): void;
    SetTrigger(name: string): void;
    SetTrigger(id: number): void;
    ResetTrigger(name: string): void;
    ResetTrigger(id: number): void;
    IsParameterControlledByCurve(name: string): boolean;
    IsParameterControlledByCurve(id: number): boolean;
    GetIKPosition(goal: UnityEngine.AvatarIKGoal): UnityEngine.Vector3;
    SetIKPosition(goal: UnityEngine.AvatarIKGoal, goalPosition: UnityEngine.Vector3): void;
    GetIKRotation(goal: UnityEngine.AvatarIKGoal): UnityEngine.Quaternion;
    SetIKRotation(goal: UnityEngine.AvatarIKGoal, goalRotation: UnityEngine.Quaternion): void;
    GetIKPositionWeight(goal: UnityEngine.AvatarIKGoal): number;
    SetIKPositionWeight(goal: UnityEngine.AvatarIKGoal, value: number): void;
    GetIKRotationWeight(goal: UnityEngine.AvatarIKGoal): number;
    SetIKRotationWeight(goal: UnityEngine.AvatarIKGoal, value: number): void;
    GetIKHintPosition(hint: UnityEngine.AvatarIKHint): UnityEngine.Vector3;
    SetIKHintPosition(hint: UnityEngine.AvatarIKHint, hintPosition: UnityEngine.Vector3): void;
    GetIKHintPositionWeight(hint: UnityEngine.AvatarIKHint): number;
    SetIKHintPositionWeight(hint: UnityEngine.AvatarIKHint, value: number): void;
    SetLookAtPosition(lookAtPosition: UnityEngine.Vector3): void;
    SetLookAtWeight(weight: number, bodyWeight: number, headWeight: number, eyesWeight: number): void;
    SetLookAtWeight(weight: number, bodyWeight: number, headWeight: number): void;
    SetLookAtWeight(weight: number, bodyWeight: number): void;
    SetLookAtWeight(weight: number): void;
    SetLookAtWeight(weight: number, bodyWeight: number, headWeight: number, eyesWeight: number, clampWeight: number): void;
    SetBoneLocalRotation(humanBoneId: UnityEngine.HumanBodyBones, rotation: UnityEngine.Quaternion): void;
    GetLayerName(layerIndex: number): string;
    GetLayerIndex(layerName: string): number;
    GetLayerWeight(layerIndex: number): number;
    SetLayerWeight(layerIndex: number, weight: number): void;
    GetCurrentAnimatorStateInfo(layerIndex: number): UnityEngine.AnimatorStateInfo;
    GetNextAnimatorStateInfo(layerIndex: number): UnityEngine.AnimatorStateInfo;
    GetAnimatorTransitionInfo(layerIndex: number): UnityEngine.AnimatorTransitionInfo;
    GetCurrentAnimatorClipInfoCount(layerIndex: number): number;
    GetCurrentAnimatorClipInfo(layerIndex: number): UnityEngine.AnimatorClipInfo[];
    GetCurrentAnimatorClipInfo(layerIndex: number, clips: UnityEngine.AnimatorClipInfo[]): void;
    GetNextAnimatorClipInfoCount(layerIndex: number): number;
    GetNextAnimatorClipInfo(layerIndex: number): UnityEngine.AnimatorClipInfo[];
    GetNextAnimatorClipInfo(layerIndex: number, clips: UnityEngine.AnimatorClipInfo[]): void;
    IsInTransition(layerIndex: number): boolean;
    GetParameter(index: number): UnityEngine.AnimatorControllerParameter;
    MatchTarget(matchPosition: UnityEngine.Vector3, matchRotation: UnityEngine.Quaternion, targetBodyPart: UnityEngine.AvatarTarget, weightMask: UnityEngine.MatchTargetWeightMask, startNormalizedTime: number, targetNormalizedTime: number): void;
    MatchTarget(matchPosition: UnityEngine.Vector3, matchRotation: UnityEngine.Quaternion, targetBodyPart: UnityEngine.AvatarTarget, weightMask: UnityEngine.MatchTargetWeightMask, startNormalizedTime: number): void;
    InterruptMatchTarget(completeMatch: boolean): void;
    InterruptMatchTarget(): void;
    ForceStateNormalizedTime(normalizedTime: number): void;
    CrossFadeInFixedTime(stateName: string, transitionDuration: number, layer: number): void;
    CrossFadeInFixedTime(stateName: string, transitionDuration: number): void;
    CrossFadeInFixedTime(stateName: string, transitionDuration: number, layer: number, fixedTime: number): void;
    CrossFadeInFixedTime(stateNameHash: number, transitionDuration: number, layer: number, fixedTime: number): void;
    CrossFadeInFixedTime(stateNameHash: number, transitionDuration: number, layer: number): void;
    CrossFadeInFixedTime(stateNameHash: number, transitionDuration: number): void;
    CrossFade(stateName: string, transitionDuration: number, layer: number): void;
    CrossFade(stateName: string, transitionDuration: number): void;
    CrossFade(stateName: string, transitionDuration: number, layer: number, normalizedTime: number): void;
    CrossFade(stateNameHash: number, transitionDuration: number, layer: number, normalizedTime: number): void;
    CrossFade(stateNameHash: number, transitionDuration: number, layer: number): void;
    CrossFade(stateNameHash: number, transitionDuration: number): void;
    PlayInFixedTime(stateName: string, layer: number): void;
    PlayInFixedTime(stateName: string): void;
    PlayInFixedTime(stateName: string, layer: number, fixedTime: number): void;
    PlayInFixedTime(stateNameHash: number, layer: number, fixedTime: number): void;
    PlayInFixedTime(stateNameHash: number, layer: number): void;
    PlayInFixedTime(stateNameHash: number): void;
    Play(stateName: string, layer: number): void;
    Play(stateName: string): void;
    Play(stateName: string, layer: number, normalizedTime: number): void;
    Play(stateNameHash: number, layer: number, normalizedTime: number): void;
    Play(stateNameHash: number, layer: number): void;
    Play(stateNameHash: number): void;
    Play(pStruct: UnityEngine.Experimental.Director.Playable): void;
    SetTarget(targetIndex: UnityEngine.AvatarTarget, targetNormalizedTime: number): void;
    IsControlled(transform: UnityEngine.Transform): boolean;
    GetBoneTransform(humanBoneId: UnityEngine.HumanBodyBones): UnityEngine.Transform;
    StartPlayback(): void;
    StopPlayback(): void;
    StartRecording(frameCount: number): void;
    StopRecording(): void;
    HasState(layerIndex: number, stateID: number): boolean;
    static StringToHash(name: string): number;
    Update(deltaTime: number): void;
    Rebind(): void;
    ApplyBuiltinRootMotion(): void;
    GetVector(name: string): UnityEngine.Vector3;
    GetVector(id: number): UnityEngine.Vector3;
    SetVector(name: string, value: UnityEngine.Vector3): void;
    SetVector(id: number, value: UnityEngine.Vector3): void;
    GetQuaternion(name: string): UnityEngine.Quaternion;
    GetQuaternion(id: number): UnityEngine.Quaternion;
    SetQuaternion(name: string, value: UnityEngine.Quaternion): void;
    SetQuaternion(id: number, value: UnityEngine.Quaternion): void;
    GetCurrentAnimationClipState(layerIndex: number): UnityEngine.AnimationInfo[];
    GetNextAnimationClipState(layerIndex: number): UnityEngine.AnimationInfo[];
    // properties
    readonly isOptimizable: boolean;
    readonly isHuman: boolean;
    readonly hasRootMotion: boolean;
    readonly humanScale: number;
    readonly isInitialized: boolean;
    readonly deltaPosition: UnityEngine.Vector3;
    readonly deltaRotation: UnityEngine.Quaternion;
    readonly velocity: UnityEngine.Vector3;
    readonly angularVelocity: UnityEngine.Vector3;
    rootPosition: UnityEngine.Vector3;
    rootRotation: UnityEngine.Quaternion;
    applyRootMotion: boolean;
    linearVelocityBlending: boolean;
    animatePhysics: boolean;
    updateMode: UnityEngine.AnimatorUpdateMode;
    readonly hasTransformHierarchy: boolean;
    readonly gravityWeight: number;
    bodyPosition: UnityEngine.Vector3;
    bodyRotation: UnityEngine.Quaternion;
    stabilizeFeet: boolean;
    readonly layerCount: number;
    readonly parameters: UnityEngine.AnimatorControllerParameter[];
    readonly parameterCount: number;
    feetPivotActive: number;
    readonly pivotWeight: number;
    readonly pivotPosition: UnityEngine.Vector3;
    readonly isMatchingTarget: boolean;
    speed: number;
    readonly targetPosition: UnityEngine.Vector3;
    readonly targetRotation: UnityEngine.Quaternion;
    cullingMode: UnityEngine.AnimatorCullingMode;
    playbackTime: number;
    recorderStartTime: number;
    recorderStopTime: number;
    readonly recorderMode: UnityEngine.AnimatorRecorderMode;
    runtimeAnimatorController: UnityEngine.RuntimeAnimatorController;
    avatar: UnityEngine.Avatar;
    layersAffectMassCenter: boolean;
    readonly leftFeetBottomHeight: number;
    readonly rightFeetBottomHeight: number;
    logWarnings: boolean;
    fireEvents: boolean;
    // fields
  }
}
declare namespace UnityEngine {
  class AnimatorClipInfo extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    readonly clip: UnityEngine.AnimationClip;
    readonly weight: number;
    // fields
  }
}
declare namespace UnityEngine {
  class AnimatorControllerParameter extends System.Object {
    // constructors
    constructor();
    // methods
    Equals(o: any): boolean;
    GetHashCode(): number;
    // properties
    name: string;
    readonly nameHash: number;
    type: UnityEngine.AnimatorControllerParameterType;
    defaultFloat: number;
    defaultInt: number;
    defaultBool: boolean;
    // fields
  }
}
declare namespace UnityEngine {
  class AnimatorControllerParameterType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Float: UnityEngine.AnimatorControllerParameterType;
    static Int: UnityEngine.AnimatorControllerParameterType;
    static Bool: UnityEngine.AnimatorControllerParameterType;
    static Trigger: UnityEngine.AnimatorControllerParameterType;
  }
}
declare namespace UnityEngine {
  class AnimatorCullingMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static AlwaysAnimate: UnityEngine.AnimatorCullingMode;
    static CullUpdateTransforms: UnityEngine.AnimatorCullingMode;
    static CullCompletely: UnityEngine.AnimatorCullingMode;
    static BasedOnRenderers: UnityEngine.AnimatorCullingMode;
  }
}
declare namespace UnityEngine {
  class AnimatorOverrideController extends UnityEngine.RuntimeAnimatorController {
    // constructors
    constructor();
    // methods
    // properties
    runtimeAnimatorController: UnityEngine.RuntimeAnimatorController;
    get_Item(name: string): UnityEngine.AnimationClip;
    set_Item(name: string, value: UnityEngine.AnimationClip): void;
    get_Item(clip: UnityEngine.AnimationClip): UnityEngine.AnimationClip;
    set_Item(clip: UnityEngine.AnimationClip, value: UnityEngine.AnimationClip): void;
    clips: UnityEngine.AnimationClipPair[];
    // fields
  }
}
declare namespace UnityEngine {
  class AnimatorRecorderMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Offline: UnityEngine.AnimatorRecorderMode;
    static Playback: UnityEngine.AnimatorRecorderMode;
    static Record: UnityEngine.AnimatorRecorderMode;
  }
}
declare namespace UnityEngine {
  class AnimatorStateInfo extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    IsName(name: string): boolean;
    IsTag(tag: string): boolean;
    // properties
    readonly fullPathHash: number;
    readonly nameHash: number;
    readonly shortNameHash: number;
    readonly normalizedTime: number;
    readonly length: number;
    readonly speed: number;
    readonly speedMultiplier: number;
    readonly tagHash: number;
    readonly loop: boolean;
    // fields
  }
}
declare namespace UnityEngine {
  class AnimatorTransitionInfo extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    IsName(name: string): boolean;
    IsUserName(name: string): boolean;
    // properties
    readonly fullPathHash: number;
    readonly nameHash: number;
    readonly userNameHash: number;
    readonly normalizedTime: number;
    readonly anyState: boolean;
    // fields
  }
}
declare namespace UnityEngine {
  class AnimatorUpdateMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Normal: UnityEngine.AnimatorUpdateMode;
    static AnimatePhysics: UnityEngine.AnimatorUpdateMode;
    static UnscaledTime: UnityEngine.AnimatorUpdateMode;
  }
}
declare namespace UnityEngine {
  class AnimatorUtility extends System.Object {
    // constructors
    constructor();
    // methods
    static OptimizeTransformHierarchy(go: UnityEngine.GameObject, exposedTransforms: string[]): void;
    static DeoptimizeTransformHierarchy(go: UnityEngine.GameObject): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class AnisotropicFiltering extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Disable: UnityEngine.AnisotropicFiltering;
    static Enable: UnityEngine.AnisotropicFiltering;
    static ForceEnable: UnityEngine.AnisotropicFiltering;
  }
}
declare namespace UnityEngine.Apple.ReplayKit {
  class ReplayKit extends System.Object {
    // constructors
    protected constructor();
    // methods
    static StartRecording(enableMicrophone: boolean, enableCamera: boolean): boolean;
    static StartRecording(enableMicrophone: boolean): boolean;
    static StartRecording(): boolean;
    static StopRecording(): boolean;
    static Preview(): boolean;
    static Discard(): boolean;
    static StartBroadcasting(callback: ((hasStarted: boolean, errorMessage: string) => void), enableMicrophone: boolean, enableCamera: boolean): void;
    static StartBroadcasting(callback: ((hasStarted: boolean, errorMessage: string) => void), enableMicrophone: boolean): void;
    static StartBroadcasting(callback: ((hasStarted: boolean, errorMessage: string) => void)): void;
    static StopBroadcasting(): void;
    static ShowCameraPreviewAt(posX: number, posY: number): boolean;
    static HideCameraPreview(): void;
    // properties
    static readonly APIAvailable: boolean;
    static readonly recordingAvailable: boolean;
    static readonly lastError: string;
    static readonly isRecording: boolean;
    static readonly broadcastingAPIAvailable: boolean;
    static readonly isBroadcasting: boolean;
    static readonly broadcastURL: string;
    static cameraEnabled: boolean;
    static microphoneEnabled: boolean;
    // fields
  }
}
declare namespace UnityEngine.Apple.TV {
  class Remote extends System.Object {
    // constructors
    constructor();
    // methods
    // properties
    static allowExitToHome: boolean;
    static allowRemoteRotation: boolean;
    static reportAbsoluteDpadValues: boolean;
    static touchesEnabled: boolean;
    // fields
  }
}
declare namespace UnityEngine {
  class Application extends System.Object {
    // constructors
    constructor();
    // methods
    static Quit(): void;
    static CancelQuit(): void;
    static Unload(): void;
    static GetStreamProgressForLevel(levelIndex: number): number;
    static GetStreamProgressForLevel(levelName: string): number;
    static CanStreamedLevelBeLoaded(levelIndex: number): boolean;
    static CanStreamedLevelBeLoaded(levelName: string): boolean;
    static CaptureScreenshot(filename: string, superSize: number): void;
    static CaptureScreenshot(filename: string): void;
    static HasProLicense(): boolean;
    static DontDestroyOnLoad(mono: UnityEngine.Object): void;
    static ExternalCall(functionName: string, args: any[]): void;
    static ExternalEval(script: string): void;
    static RequestAdvertisingIdentifierAsync(delegateMethod: ((advertisingId: string, trackingEnabled: boolean, errorMsg: string) => void)): boolean;
    static OpenURL(url: string): void;
    static ForceCrash(mode: number): void;
    static GetStackTraceLogType(logType: UnityEngine.LogType): UnityEngine.StackTraceLogType;
    static SetStackTraceLogType(logType: UnityEngine.LogType, stackTraceType: UnityEngine.StackTraceLogType): void;
    static RequestUserAuthorization(mode: UnityEngine.UserAuthorization): UnityEngine.AsyncOperation;
    static HasUserAuthorization(mode: UnityEngine.UserAuthorization): boolean;
    static RegisterLogCallback(handler: ((condition: string, stackTrace: string, type: UnityEngine.LogType) => void)): void;
    static RegisterLogCallbackThreaded(handler: ((condition: string, stackTrace: string, type: UnityEngine.LogType) => void)): void;
    static LoadLevel(index: number): void;
    static LoadLevel(name: string): void;
    static LoadLevelAdditive(index: number): void;
    static LoadLevelAdditive(name: string): void;
    static LoadLevelAsync(index: number): UnityEngine.AsyncOperation;
    static LoadLevelAsync(levelName: string): UnityEngine.AsyncOperation;
    static LoadLevelAdditiveAsync(index: number): UnityEngine.AsyncOperation;
    static LoadLevelAdditiveAsync(levelName: string): UnityEngine.AsyncOperation;
    static UnloadLevel(index: number): boolean;
    static UnloadLevel(scenePath: string): boolean;
    // properties
    static readonly isLoadingLevel: boolean;
    static readonly streamedBytes: number;
    static readonly isPlaying: boolean;
    static readonly isEditor: boolean;
    static readonly isWebPlayer: boolean;
    static readonly platform: UnityEngine.RuntimePlatform;
    static readonly isMobilePlatform: boolean;
    static readonly isConsolePlatform: boolean;
    static runInBackground: boolean;
    static readonly isPlayer: boolean;
    static readonly dataPath: string;
    static readonly streamingAssetsPath: string;
    static readonly persistentDataPath: string;
    static readonly temporaryCachePath: string;
    static readonly srcValue: string;
    static readonly absoluteURL: string;
    static readonly unityVersion: string;
    static readonly version: string;
    static readonly installerName: string;
    static readonly bundleIdentifier: string;
    static readonly installMode: UnityEngine.ApplicationInstallMode;
    static readonly sandboxType: UnityEngine.ApplicationSandboxType;
    static readonly productName: string;
    static readonly companyName: string;
    static readonly cloudProjectId: string;
    static readonly webSecurityEnabled: boolean;
    static readonly webSecurityHostUrl: string;
    static targetFrameRate: number;
    static readonly systemLanguage: UnityEngine.SystemLanguage;
    static stackTraceLogType: UnityEngine.StackTraceLogType;
    static backgroundLoadingPriority: UnityEngine.ThreadPriority;
    static readonly internetReachability: UnityEngine.NetworkReachability;
    static readonly genuine: boolean;
    static readonly genuineCheckAvailable: boolean;
    static readonly isShowingSplashScreen: boolean;
    static readonly levelCount: number;
    static readonly loadedLevel: number;
    static readonly loadedLevelName: string;
    static readonly absoluteUrl: string;
    // fields
  }
}
declare namespace UnityEngine {
  class ApplicationInstallMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Unknown: UnityEngine.ApplicationInstallMode;
    static Store: UnityEngine.ApplicationInstallMode;
    static DeveloperBuild: UnityEngine.ApplicationInstallMode;
    static Adhoc: UnityEngine.ApplicationInstallMode;
    static Enterprise: UnityEngine.ApplicationInstallMode;
    static Editor: UnityEngine.ApplicationInstallMode;
  }
}
declare namespace UnityEngine {
  class ApplicationSandboxType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Unknown: UnityEngine.ApplicationSandboxType;
    static NotSandboxed: UnityEngine.ApplicationSandboxType;
    static Sandboxed: UnityEngine.ApplicationSandboxType;
    static SandboxBroken: UnityEngine.ApplicationSandboxType;
  }
}
declare namespace UnityEngine {
  class AreaEffector2D extends UnityEngine.Effector2D {
    // constructors
    constructor();
    // methods
    // properties
    forceDirection: number;
    forceAngle: number;
    useGlobalAngle: boolean;
    forceMagnitude: number;
    forceVariation: number;
    drag: number;
    angularDrag: number;
    forceTarget: UnityEngine.EffectorSelection2D;
    // fields
  }
}
declare namespace UnityEngine {
  class ArmDoF extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static ShoulderDownUp: UnityEngine.ArmDoF;
    static ShoulderFrontBack: UnityEngine.ArmDoF;
    static ArmDownUp: UnityEngine.ArmDoF;
    static ArmFrontBack: UnityEngine.ArmDoF;
    static ArmRollInOut: UnityEngine.ArmDoF;
    static ForeArmCloseOpen: UnityEngine.ArmDoF;
    static ForeArmRollInOut: UnityEngine.ArmDoF;
    static HandDownUp: UnityEngine.ArmDoF;
    static HandInOut: UnityEngine.ArmDoF;
    static LastArmDoF: UnityEngine.ArmDoF;
  }
}
declare namespace UnityEngine {
  class ArrayUtils extends System.Object {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class AssemblyIsEditorAssembly extends System.Attribute {
    // constructors
    constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine.Assertions {
  class Assert extends System.Object {
    // constructors
    protected constructor();
    // methods
    static Equals(obj1: any, obj2: any): boolean;
    Equals(obj: any): boolean;
    static ReferenceEquals(obj1: any, obj2: any): boolean;
    static IsTrue(condition: boolean): void;
    static IsTrue(condition: boolean, message: string): void;
    static IsFalse(condition: boolean): void;
    static IsFalse(condition: boolean, message: string): void;
    static AreApproximatelyEqual(expected: number, actual: number): void;
    static AreApproximatelyEqual(expected: number, actual: number, message: string): void;
    static AreApproximatelyEqual(expected: number, actual: number, tolerance: number): void;
    static AreApproximatelyEqual(expected: number, actual: number, tolerance: number, message: string): void;
    static AreNotApproximatelyEqual(expected: number, actual: number): void;
    static AreNotApproximatelyEqual(expected: number, actual: number, message: string): void;
    static AreNotApproximatelyEqual(expected: number, actual: number, tolerance: number): void;
    static AreNotApproximatelyEqual(expected: number, actual: number, tolerance: number, message: string): void;
    static AreEqual(expected: UnityEngine.Object, actual: UnityEngine.Object, message: string): void;
    static AreNotEqual(expected: UnityEngine.Object, actual: UnityEngine.Object, message: string): void;
    static IsNull(value: UnityEngine.Object, message: string): void;
    static IsNotNull(value: UnityEngine.Object, message: string): void;
    // properties
    // fields
    static raiseExceptions: boolean;
  }
}
declare namespace UnityEngine.Assertions {
  class AssertionException extends System.Exception {
    // constructors
    constructor(message: string, userMessage: string);
    // methods
    // properties
    readonly Message: string;
    // fields
  }
}
declare namespace UnityEngine.Assertions {
  class AssertionMessageUtil extends System.Object {
    // constructors
    constructor();
    // methods
    static GetMessage(failureMessage: string): string;
    static GetMessage(failureMessage: string, expected: string): string;
    static GetEqualityMessage(actual: any, expected: any, expectEqual: boolean): string;
    static NullFailureMessage(value: any, expectNull: boolean): string;
    static BooleanFailureMessage(expected: boolean): string;
    // properties
    // fields
  }
}
declare namespace UnityEngine.Assertions.Comparers {
  class FloatComparer extends System.Object {
    // constructors
    constructor();
    constructor(relative: boolean);
    constructor(error: number);
    constructor(error: number, relative: boolean);
    // methods
    Equals(a: number, b: number): boolean;
    Equals(obj: any): boolean;
    GetHashCode(obj: number): number;
    GetHashCode(): number;
    static AreEqual(expected: number, actual: number, error: number): boolean;
    static AreEqualRelative(expected: number, actual: number, error: number): boolean;
    // properties
    // fields
    static s_ComparerWithDefaultTolerance: UnityEngine.Assertions.Comparers.FloatComparer;
    static kEpsilon: number;
  }
}
declare namespace UnityEngine.Assertions.Must {
  class MustExtensions extends System.Object {
    // constructors
    protected constructor();
    // methods
    static MustBeTrue(value: boolean): void;
    static MustBeTrue(value: boolean, message: string): void;
    static MustBeFalse(value: boolean): void;
    static MustBeFalse(value: boolean, message: string): void;
    static MustBeApproximatelyEqual(actual: number, expected: number): void;
    static MustBeApproximatelyEqual(actual: number, expected: number, message: string): void;
    static MustBeApproximatelyEqual(actual: number, expected: number, tolerance: number): void;
    static MustBeApproximatelyEqual(actual: number, expected: number, tolerance: number, message: string): void;
    static MustNotBeApproximatelyEqual(actual: number, expected: number): void;
    static MustNotBeApproximatelyEqual(actual: number, expected: number, message: string): void;
    static MustNotBeApproximatelyEqual(actual: number, expected: number, tolerance: number): void;
    static MustNotBeApproximatelyEqual(actual: number, expected: number, tolerance: number, message: string): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class AssetBundle extends UnityEngine.Object {
    // constructors
    constructor();
    // methods
    static LoadFromFileAsync(path: string, crc: number, offset: number): UnityEngine.AssetBundleCreateRequest;
    static LoadFromFileAsync(path: string, crc: number): UnityEngine.AssetBundleCreateRequest;
    static LoadFromFileAsync(path: string): UnityEngine.AssetBundleCreateRequest;
    static LoadFromFile(path: string, crc: number, offset: number): UnityEngine.AssetBundle;
    static LoadFromFile(path: string, crc: number): UnityEngine.AssetBundle;
    static LoadFromFile(path: string): UnityEngine.AssetBundle;
    static LoadFromMemoryAsync(binary: number[], crc: number): UnityEngine.AssetBundleCreateRequest;
    static LoadFromMemoryAsync(binary: number[]): UnityEngine.AssetBundleCreateRequest;
    static LoadFromMemory(binary: number[], crc: number): UnityEngine.AssetBundle;
    static LoadFromMemory(binary: number[]): UnityEngine.AssetBundle;
    Contains(name: string): boolean;
    Load(name: string): UnityEngine.Object;
    Load(name: string, type: any): UnityEngine.Object;
    LoadAsync(name: string, type: any): UnityEngine.AssetBundleRequest;
    LoadAll(type: any): UnityEngine.Object[];
    LoadAll(): UnityEngine.Object[];
    LoadAsset(name: string): UnityEngine.Object;
    LoadAsset(name: string, type: any): UnityEngine.Object;
    LoadAssetAsync(name: string): UnityEngine.AssetBundleRequest;
    LoadAssetAsync(name: string, type: any): UnityEngine.AssetBundleRequest;
    LoadAssetWithSubAssets(name: string): UnityEngine.Object[];
    LoadAssetWithSubAssets(name: string, type: any): UnityEngine.Object[];
    LoadAssetWithSubAssetsAsync(name: string): UnityEngine.AssetBundleRequest;
    LoadAssetWithSubAssetsAsync(name: string, type: any): UnityEngine.AssetBundleRequest;
    LoadAllAssets(): UnityEngine.Object[];
    LoadAllAssets(type: any): UnityEngine.Object[];
    LoadAllAssetsAsync(): UnityEngine.AssetBundleRequest;
    LoadAllAssetsAsync(type: any): UnityEngine.AssetBundleRequest;
    Unload(unloadAllLoadedObjects: boolean): void;
    AllAssetNames(): string[];
    GetAllAssetNames(): string[];
    GetAllScenePaths(): string[];
    static CreateFromFile(path: string): UnityEngine.AssetBundle;
    static CreateFromMemory(binary: number[]): UnityEngine.AssetBundleCreateRequest;
    static CreateFromMemoryImmediate(binary: number[]): UnityEngine.AssetBundle;
    // properties
    readonly mainAsset: UnityEngine.Object;
    readonly isStreamedSceneAssetBundle: boolean;
    // fields
  }
}
declare namespace UnityEngine {
  class AssetBundleCreateRequest extends UnityEngine.AsyncOperation {
    // constructors
    constructor();
    // methods
    // properties
    readonly assetBundle: UnityEngine.AssetBundle;
    // fields
  }
}
declare namespace UnityEngine {
  class AssetBundleManifest extends UnityEngine.Object {
    // constructors
    constructor();
    // methods
    GetAllAssetBundles(): string[];
    GetAllAssetBundlesWithVariant(): string[];
    GetAssetBundleHash(assetBundleName: string): UnityEngine.Hash128;
    GetDirectDependencies(assetBundleName: string): string[];
    GetAllDependencies(assetBundleName: string): string[];
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class AssetBundleRequest extends UnityEngine.AsyncOperation {
    // constructors
    constructor();
    // methods
    // properties
    readonly asset: UnityEngine.Object;
    readonly allAssets: UnityEngine.Object[];
    // fields
  }
}
declare namespace UnityEngine {
  class AsyncOperation extends UnityEngine.YieldInstruction {
    // constructors
    constructor();
    // methods
    // properties
    readonly isDone: boolean;
    readonly progress: number;
    priority: number;
    allowSceneActivation: boolean;
    // fields
  }
}
declare namespace UnityEngine {
  class AttributeHelperEngine extends System.Object {
    // constructors
    constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine.Audio {
  class AudioMixer extends UnityEngine.Object {
    // constructors
    protected constructor();
    // methods
    FindMatchingGroups(subPath: string): UnityEngine.Audio.AudioMixerGroup[];
    FindSnapshot(name: string): UnityEngine.Audio.AudioMixerSnapshot;
    TransitionToSnapshots(snapshots: UnityEngine.Audio.AudioMixerSnapshot[], weights: number[], timeToReach: number): void;
    SetFloat(name: string, value: number): boolean;
    ClearFloat(name: string): boolean;
    GetFloat(name: string, value: any): boolean;
    // properties
    outputAudioMixerGroup: UnityEngine.Audio.AudioMixerGroup;
    updateMode: UnityEngine.Audio.AudioMixerUpdateMode;
    // fields
  }
}
declare namespace UnityEngine.Audio {
  class AudioMixerGroup extends UnityEngine.Object {
    // constructors
    protected constructor();
    // methods
    // properties
    readonly audioMixer: UnityEngine.Audio.AudioMixer;
    // fields
  }
}
declare namespace UnityEngine.Audio {
  class AudioMixerSnapshot extends UnityEngine.Object {
    // constructors
    protected constructor();
    // methods
    TransitionTo(timeToReach: number): void;
    // properties
    readonly audioMixer: UnityEngine.Audio.AudioMixer;
    // fields
  }
}
declare namespace UnityEngine.Audio {
  class AudioMixerUpdateMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Normal: UnityEngine.Audio.AudioMixerUpdateMode;
    static UnscaledTime: UnityEngine.Audio.AudioMixerUpdateMode;
  }
}
declare namespace UnityEngine {
  class AudioChorusFilter extends UnityEngine.Behaviour {
    // constructors
    constructor();
    // methods
    // properties
    dryMix: number;
    wetMix1: number;
    wetMix2: number;
    wetMix3: number;
    delay: number;
    rate: number;
    depth: number;
    feedback: number;
    // fields
  }
}
declare namespace UnityEngine {
  class AudioClip extends UnityEngine.Object {
    // constructors
    constructor();
    // methods
    LoadAudioData(): boolean;
    UnloadAudioData(): boolean;
    GetData(data: number[], offsetSamples: number): boolean;
    SetData(data: number[], offsetSamples: number): boolean;
    static Create(name: string, lengthSamples: number, channels: number, frequency: number, _3D: boolean, stream: boolean): UnityEngine.AudioClip;
    static Create(name: string, lengthSamples: number, channels: number, frequency: number, _3D: boolean, stream: boolean, pcmreadercallback: ((data: number[]) => void)): UnityEngine.AudioClip;
    static Create(name: string, lengthSamples: number, channels: number, frequency: number, _3D: boolean, stream: boolean, pcmreadercallback: ((data: number[]) => void), pcmsetpositioncallback: ((position: number) => void)): UnityEngine.AudioClip;
    static Create(name: string, lengthSamples: number, channels: number, frequency: number, stream: boolean): UnityEngine.AudioClip;
    static Create(name: string, lengthSamples: number, channels: number, frequency: number, stream: boolean, pcmreadercallback: ((data: number[]) => void)): UnityEngine.AudioClip;
    static Create(name: string, lengthSamples: number, channels: number, frequency: number, stream: boolean, pcmreadercallback: ((data: number[]) => void), pcmsetpositioncallback: ((position: number) => void)): UnityEngine.AudioClip;
    // properties
    readonly length: number;
    readonly samples: number;
    readonly channels: number;
    readonly frequency: number;
    readonly isReadyToPlay: boolean;
    readonly loadType: UnityEngine.AudioClipLoadType;
    readonly preloadAudioData: boolean;
    readonly loadState: UnityEngine.AudioDataLoadState;
    readonly loadInBackground: boolean;
    // fields
  }
}
declare namespace UnityEngine {
  class AudioClipLoadType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static DecompressOnLoad: UnityEngine.AudioClipLoadType;
    static CompressedInMemory: UnityEngine.AudioClipLoadType;
    static Streaming: UnityEngine.AudioClipLoadType;
  }
}
declare namespace UnityEngine {
  class AudioCompressionFormat extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static PCM: UnityEngine.AudioCompressionFormat;
    static Vorbis: UnityEngine.AudioCompressionFormat;
    static ADPCM: UnityEngine.AudioCompressionFormat;
    static MP3: UnityEngine.AudioCompressionFormat;
    static VAG: UnityEngine.AudioCompressionFormat;
    static HEVAG: UnityEngine.AudioCompressionFormat;
    static XMA: UnityEngine.AudioCompressionFormat;
    static AAC: UnityEngine.AudioCompressionFormat;
    static GCADPCM: UnityEngine.AudioCompressionFormat;
    static ATRAC9: UnityEngine.AudioCompressionFormat;
  }
}
declare namespace UnityEngine {
  class AudioConfiguration extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    speakerMode: UnityEngine.AudioSpeakerMode;
    dspBufferSize: number;
    sampleRate: number;
    numRealVoices: number;
    numVirtualVoices: number;
  }
}
declare namespace UnityEngine {
  class AudioDataLoadState extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Unloaded: UnityEngine.AudioDataLoadState;
    static Loading: UnityEngine.AudioDataLoadState;
    static Loaded: UnityEngine.AudioDataLoadState;
    static Failed: UnityEngine.AudioDataLoadState;
  }
}
declare namespace UnityEngine {
  class AudioDistortionFilter extends UnityEngine.Behaviour {
    // constructors
    constructor();
    // methods
    // properties
    distortionLevel: number;
    // fields
  }
}
declare namespace UnityEngine {
  class AudioEchoFilter extends UnityEngine.Behaviour {
    // constructors
    constructor();
    // methods
    // properties
    delay: number;
    decayRatio: number;
    dryMix: number;
    wetMix: number;
    // fields
  }
}
declare namespace UnityEngine {
  class AudioHighPassFilter extends UnityEngine.Behaviour {
    // constructors
    constructor();
    // methods
    // properties
    cutoffFrequency: number;
    highpassResonanceQ: number;
    highpassResonaceQ: number;
    // fields
  }
}
declare namespace UnityEngine {
  class AudioListener extends UnityEngine.Behaviour {
    // constructors
    constructor();
    // methods
    static GetOutputData(numSamples: number, channel: number): number[];
    static GetOutputData(samples: number[], channel: number): void;
    static GetSpectrumData(numSamples: number, channel: number, window: UnityEngine.FFTWindow): number[];
    static GetSpectrumData(samples: number[], channel: number, window: UnityEngine.FFTWindow): void;
    // properties
    static volume: number;
    static pause: boolean;
    velocityUpdateMode: UnityEngine.AudioVelocityUpdateMode;
    // fields
  }
}
declare namespace UnityEngine {
  class AudioLowPassFilter extends UnityEngine.Behaviour {
    // constructors
    constructor();
    // methods
    // properties
    cutoffFrequency: number;
    customCutoffCurve: UnityEngine.AnimationCurve;
    lowpassResonanceQ: number;
    lowpassResonaceQ: number;
    // fields
  }
}
declare namespace UnityEngine {
  class AudioReverbFilter extends UnityEngine.Behaviour {
    // constructors
    constructor();
    // methods
    // properties
    reverbPreset: UnityEngine.AudioReverbPreset;
    dryLevel: number;
    room: number;
    roomHF: number;
    roomRolloff: number;
    decayTime: number;
    decayHFRatio: number;
    reflectionsLevel: number;
    reflectionsDelay: number;
    reverbLevel: number;
    reverbDelay: number;
    diffusion: number;
    density: number;
    hfReference: number;
    roomLF: number;
    lfReference: number;
    lFReference: number;
    // fields
  }
}
declare namespace UnityEngine {
  class AudioReverbPreset extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Off: UnityEngine.AudioReverbPreset;
    static Generic: UnityEngine.AudioReverbPreset;
    static PaddedCell: UnityEngine.AudioReverbPreset;
    static Room: UnityEngine.AudioReverbPreset;
    static Bathroom: UnityEngine.AudioReverbPreset;
    static Livingroom: UnityEngine.AudioReverbPreset;
    static Stoneroom: UnityEngine.AudioReverbPreset;
    static Auditorium: UnityEngine.AudioReverbPreset;
    static Concerthall: UnityEngine.AudioReverbPreset;
    static Cave: UnityEngine.AudioReverbPreset;
    static Arena: UnityEngine.AudioReverbPreset;
    static Hangar: UnityEngine.AudioReverbPreset;
    static CarpetedHallway: UnityEngine.AudioReverbPreset;
    static Hallway: UnityEngine.AudioReverbPreset;
    static StoneCorridor: UnityEngine.AudioReverbPreset;
    static Alley: UnityEngine.AudioReverbPreset;
    static Forest: UnityEngine.AudioReverbPreset;
    static City: UnityEngine.AudioReverbPreset;
    static Mountains: UnityEngine.AudioReverbPreset;
    static Quarry: UnityEngine.AudioReverbPreset;
    static Plain: UnityEngine.AudioReverbPreset;
    static ParkingLot: UnityEngine.AudioReverbPreset;
    static SewerPipe: UnityEngine.AudioReverbPreset;
    static Underwater: UnityEngine.AudioReverbPreset;
    static Drugged: UnityEngine.AudioReverbPreset;
    static Dizzy: UnityEngine.AudioReverbPreset;
    static Psychotic: UnityEngine.AudioReverbPreset;
    static User: UnityEngine.AudioReverbPreset;
  }
}
declare namespace UnityEngine {
  class AudioReverbZone extends UnityEngine.Behaviour {
    // constructors
    constructor();
    // methods
    // properties
    minDistance: number;
    maxDistance: number;
    reverbPreset: UnityEngine.AudioReverbPreset;
    room: number;
    roomHF: number;
    roomLF: number;
    decayTime: number;
    decayHFRatio: number;
    reflections: number;
    reflectionsDelay: number;
    reverb: number;
    reverbDelay: number;
    HFReference: number;
    LFReference: number;
    roomRolloffFactor: number;
    diffusion: number;
    density: number;
    // fields
  }
}
declare namespace UnityEngine {
  class AudioRolloffMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Logarithmic: UnityEngine.AudioRolloffMode;
    static Linear: UnityEngine.AudioRolloffMode;
    static Custom: UnityEngine.AudioRolloffMode;
  }
}
declare namespace UnityEngine {
  class AudioSettings extends System.Object {
    // constructors
    constructor();
    // methods
    static GetDSPBufferSize(bufferLength: any, numBuffers: any): void;
    static SetDSPBufferSize(bufferLength: number, numBuffers: number): void;
    static GetConfiguration(): UnityEngine.AudioConfiguration;
    static Reset(config: UnityEngine.AudioConfiguration): boolean;
    // properties
    static readonly driverCapabilities: UnityEngine.AudioSpeakerMode;
    static speakerMode: UnityEngine.AudioSpeakerMode;
    static readonly dspTime: number;
    static outputSampleRate: number;
    static readonly driverCaps: UnityEngine.AudioSpeakerMode;
    // fields
  }
}
declare namespace UnityEngine {
  class AudioSource extends UnityEngine.Behaviour {
    // constructors
    constructor();
    // methods
    Play(delay: number): void;
    Play(): void;
    PlayDelayed(delay: number): void;
    PlayScheduled(time: number): void;
    SetScheduledStartTime(time: number): void;
    SetScheduledEndTime(time: number): void;
    Stop(): void;
    Pause(): void;
    UnPause(): void;
    PlayOneShot(clip: UnityEngine.AudioClip, volumeScale: number): void;
    PlayOneShot(clip: UnityEngine.AudioClip): void;
    static PlayClipAtPoint(clip: UnityEngine.AudioClip, position: UnityEngine.Vector3): void;
    static PlayClipAtPoint(clip: UnityEngine.AudioClip, position: UnityEngine.Vector3, volume: number): void;
    SetCustomCurve(type: UnityEngine.AudioSourceCurveType, curve: UnityEngine.AnimationCurve): void;
    GetCustomCurve(type: UnityEngine.AudioSourceCurveType): UnityEngine.AnimationCurve;
    GetOutputData(numSamples: number, channel: number): number[];
    GetOutputData(samples: number[], channel: number): void;
    GetSpectrumData(numSamples: number, channel: number, window: UnityEngine.FFTWindow): number[];
    GetSpectrumData(samples: number[], channel: number, window: UnityEngine.FFTWindow): void;
    SetSpatializerFloat(index: number, value: number): boolean;
    GetSpatializerFloat(index: number, value: any): boolean;
    // properties
    volume: number;
    pitch: number;
    time: number;
    timeSamples: number;
    clip: UnityEngine.AudioClip;
    outputAudioMixerGroup: UnityEngine.Audio.AudioMixerGroup;
    readonly isPlaying: boolean;
    readonly isVirtual: boolean;
    loop: boolean;
    ignoreListenerVolume: boolean;
    playOnAwake: boolean;
    ignoreListenerPause: boolean;
    velocityUpdateMode: UnityEngine.AudioVelocityUpdateMode;
    panStereo: number;
    spatialBlend: number;
    spatialize: boolean;
    spatializePostEffects: boolean;
    reverbZoneMix: number;
    bypassEffects: boolean;
    bypassListenerEffects: boolean;
    bypassReverbZones: boolean;
    dopplerLevel: number;
    spread: number;
    priority: number;
    mute: boolean;
    minDistance: number;
    maxDistance: number;
    rolloffMode: UnityEngine.AudioRolloffMode;
    minVolume: number;
    maxVolume: number;
    rolloffFactor: number;
    panLevel: number;
    pan: number;
    // fields
  }
}
declare namespace UnityEngine {
  class AudioSourceCurveType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static CustomRolloff: UnityEngine.AudioSourceCurveType;
    static SpatialBlend: UnityEngine.AudioSourceCurveType;
    static ReverbZoneMix: UnityEngine.AudioSourceCurveType;
    static Spread: UnityEngine.AudioSourceCurveType;
  }
}
declare namespace UnityEngine {
  class AudioSpeakerMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Raw: UnityEngine.AudioSpeakerMode;
    static Mono: UnityEngine.AudioSpeakerMode;
    static Stereo: UnityEngine.AudioSpeakerMode;
    static Quad: UnityEngine.AudioSpeakerMode;
    static Surround: UnityEngine.AudioSpeakerMode;
    static Mode5point1: UnityEngine.AudioSpeakerMode;
    static Mode7point1: UnityEngine.AudioSpeakerMode;
    static Prologic: UnityEngine.AudioSpeakerMode;
  }
}
declare namespace UnityEngine {
  class AudioType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static UNKNOWN: UnityEngine.AudioType;
    static ACC: UnityEngine.AudioType;
    static AIFF: UnityEngine.AudioType;
    static IT: UnityEngine.AudioType;
    static MOD: UnityEngine.AudioType;
    static MPEG: UnityEngine.AudioType;
    static OGGVORBIS: UnityEngine.AudioType;
    static S3M: UnityEngine.AudioType;
    static WAV: UnityEngine.AudioType;
    static XM: UnityEngine.AudioType;
    static XMA: UnityEngine.AudioType;
    static VAG: UnityEngine.AudioType;
    static AUDIOQUEUE: UnityEngine.AudioType;
  }
}
declare namespace UnityEngine {
  class AudioVelocityUpdateMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Auto: UnityEngine.AudioVelocityUpdateMode;
    static Fixed: UnityEngine.AudioVelocityUpdateMode;
    static Dynamic: UnityEngine.AudioVelocityUpdateMode;
  }
}
declare namespace UnityEngine {
  class Avatar extends UnityEngine.Object {
    // constructors
    protected constructor();
    // methods
    // properties
    readonly isValid: boolean;
    readonly isHuman: boolean;
    // fields
  }
}
declare namespace UnityEngine {
  class AvatarBuilder extends System.Object {
    // constructors
    constructor();
    // methods
    static BuildHumanAvatar(go: UnityEngine.GameObject, humanDescription: UnityEngine.HumanDescription): UnityEngine.Avatar;
    static BuildGenericAvatar(go: UnityEngine.GameObject, rootMotionTransformName: string): UnityEngine.Avatar;
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class AvatarIKGoal extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static LeftFoot: UnityEngine.AvatarIKGoal;
    static RightFoot: UnityEngine.AvatarIKGoal;
    static LeftHand: UnityEngine.AvatarIKGoal;
    static RightHand: UnityEngine.AvatarIKGoal;
  }
}
declare namespace UnityEngine {
  class AvatarIKHint extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static LeftKnee: UnityEngine.AvatarIKHint;
    static RightKnee: UnityEngine.AvatarIKHint;
    static LeftElbow: UnityEngine.AvatarIKHint;
    static RightElbow: UnityEngine.AvatarIKHint;
  }
}
declare namespace UnityEngine {
  class AvatarTarget extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Root: UnityEngine.AvatarTarget;
    static Body: UnityEngine.AvatarTarget;
    static LeftFoot: UnityEngine.AvatarTarget;
    static RightFoot: UnityEngine.AvatarTarget;
    static LeftHand: UnityEngine.AvatarTarget;
    static RightHand: UnityEngine.AvatarTarget;
  }
}
declare namespace UnityEngine {
  class Behaviour extends UnityEngine.Component {
    // constructors
    constructor();
    // methods
    // properties
    enabled: boolean;
    readonly isActiveAndEnabled: boolean;
    // fields
  }
}
declare namespace UnityEngine {
  class BillboardAsset extends UnityEngine.Object {
    // constructors
    constructor();
    // methods
    GetImageTexCoords(imageTexCoords: UnityEngine.Vector4[]): void;
    GetImageTexCoords(): UnityEngine.Vector4[];
    SetImageTexCoords(imageTexCoords: UnityEngine.Vector4[]): void;
    SetImageTexCoords(imageTexCoords: UnityEngine.Vector4[]): void;
    GetVertices(vertices: UnityEngine.Vector2[]): void;
    GetVertices(): UnityEngine.Vector2[];
    SetVertices(vertices: UnityEngine.Vector2[]): void;
    SetVertices(vertices: UnityEngine.Vector2[]): void;
    GetIndices(indices: number[]): void;
    GetIndices(): number[];
    SetIndices(indices: number[]): void;
    SetIndices(indices: number[]): void;
    // properties
    width: number;
    height: number;
    bottom: number;
    readonly imageCount: number;
    readonly vertexCount: number;
    readonly indexCount: number;
    material: UnityEngine.Material;
    // fields
  }
}
declare namespace UnityEngine {
  class BillboardRenderer extends UnityEngine.Renderer {
    // constructors
    constructor();
    // methods
    // properties
    billboard: UnityEngine.BillboardAsset;
    // fields
  }
}
declare namespace UnityEngine {
  class BitStream extends System.Object {
    // constructors
    constructor();
    // methods
    Serialize(value: any): void;
    Serialize(value: any): void;
    Serialize(value: any): void;
    Serialize(value: any): void;
    Serialize(value: any): void;
    Serialize(value: any, maxDelta: number): void;
    Serialize(value: any): void;
    Serialize(value: any, maxDelta: number): void;
    Serialize(value: any): void;
    Serialize(value: any, maxDelta: number): void;
    Serialize(value: any): void;
    Serialize(viewID: any): void;
    // properties
    readonly isReading: boolean;
    readonly isWriting: boolean;
    // fields
  }
}
declare namespace UnityEngine {
  class BlendWeights extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static OneBone: UnityEngine.BlendWeights;
    static TwoBones: UnityEngine.BlendWeights;
    static FourBones: UnityEngine.BlendWeights;
  }
}
declare namespace UnityEngine {
  class BodyDoF extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static SpineFrontBack: UnityEngine.BodyDoF;
    static SpineLeftRight: UnityEngine.BodyDoF;
    static SpineRollLeftRight: UnityEngine.BodyDoF;
    static ChestFrontBack: UnityEngine.BodyDoF;
    static ChestLeftRight: UnityEngine.BodyDoF;
    static ChestRollLeftRight: UnityEngine.BodyDoF;
    static LastBodyDoF: UnityEngine.BodyDoF;
  }
}
declare namespace UnityEngine {
  class BoneWeight extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    GetHashCode(): number;
    Equals(other: any): boolean;
    // properties
    weight0: number;
    weight1: number;
    weight2: number;
    weight3: number;
    boneIndex0: number;
    boneIndex1: number;
    boneIndex2: number;
    boneIndex3: number;
    // fields
  }
}
declare namespace UnityEngine {
  class BoundingSphere extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    position: UnityEngine.Vector3;
    radius: number;
  }
}
declare namespace UnityEngine {
  class Bounds extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    Contains(point: UnityEngine.Vector3): boolean;
    SqrDistance(point: UnityEngine.Vector3): number;
    IntersectRay(ray: UnityEngine.Ray): boolean;
    IntersectRay(ray: UnityEngine.Ray, distance: any): boolean;
    ClosestPoint(point: UnityEngine.Vector3): UnityEngine.Vector3;
    GetHashCode(): number;
    Equals(other: any): boolean;
    SetMinMax(min: UnityEngine.Vector3, max: UnityEngine.Vector3): void;
    Encapsulate(point: UnityEngine.Vector3): void;
    Encapsulate(bounds: UnityEngine.Bounds): void;
    Expand(amount: number): void;
    Expand(amount: UnityEngine.Vector3): void;
    Intersects(bounds: UnityEngine.Bounds): boolean;
    ToString(): string;
    ToString(format: string): string;
    // properties
    center: UnityEngine.Vector3;
    size: UnityEngine.Vector3;
    extents: UnityEngine.Vector3;
    min: UnityEngine.Vector3;
    max: UnityEngine.Vector3;
    // fields
  }
}
declare namespace UnityEngine {
  class BoxCollider extends UnityEngine.Collider {
    // constructors
    constructor();
    // methods
    // properties
    center: UnityEngine.Vector3;
    size: UnityEngine.Vector3;
    extents: UnityEngine.Vector3;
    // fields
  }
}
declare namespace UnityEngine {
  class BoxCollider2D extends UnityEngine.Collider2D {
    // constructors
    constructor();
    // methods
    // properties
    center: UnityEngine.Vector2;
    size: UnityEngine.Vector2;
    // fields
  }
}
declare namespace UnityEngine {
  class BuoyancyEffector2D extends UnityEngine.Effector2D {
    // constructors
    constructor();
    // methods
    // properties
    surfaceLevel: number;
    density: number;
    linearDrag: number;
    angularDrag: number;
    flowAngle: number;
    flowMagnitude: number;
    flowVariation: number;
    // fields
  }
}
declare namespace UnityEngine {
  class CacheIndex extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    name: string;
    bytesUsed: number;
    expires: number;
  }
}
declare namespace UnityEngine {
  class Caching extends System.Object {
    // constructors
    constructor();
    // methods
    static Authorize(name: string, domain: string, size: number, signature: string): boolean;
    static Authorize(name: string, domain: string, size: number, expiration: number, signature: string): boolean;
    static Authorize(name: string, domain: string, size: number, expiration: number, signature: string): boolean;
    static Authorize(name: string, domain: string, size: number, signature: string): boolean;
    static CleanCache(): boolean;
    static CleanNamedCache(name: string): boolean;
    static DeleteFromCache(url: string): boolean;
    static GetVersionFromCache(url: string): number;
    static IsVersionCached(url: string, version: number): boolean;
    static IsVersionCached(url: string, hash: UnityEngine.Hash128): boolean;
    static MarkAsUsed(url: string, version: number): boolean;
    static MarkAsUsed(url: string, hash: UnityEngine.Hash128): boolean;
    static SetNoBackupFlag(url: string, version: number): void;
    static SetNoBackupFlag(url: string, hash: UnityEngine.Hash128): void;
    static ResetNoBackupFlag(url: string, version: number): void;
    static ResetNoBackupFlag(url: string, hash: UnityEngine.Hash128): void;
    // properties
    static readonly index: UnityEngine.CacheIndex[];
    static readonly spaceFree: number;
    static maximumAvailableDiskSpace: number;
    static readonly spaceOccupied: number;
    static readonly spaceAvailable: number;
    static readonly spaceUsed: number;
    static expirationDelay: number;
    static enabled: boolean;
    static compressionEnabled: boolean;
    static readonly ready: boolean;
    // fields
  }
}
declare namespace UnityEngine {
  class CalendarIdentifier extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static GregorianCalendar: UnityEngine.CalendarIdentifier;
    static BuddhistCalendar: UnityEngine.CalendarIdentifier;
    static ChineseCalendar: UnityEngine.CalendarIdentifier;
    static HebrewCalendar: UnityEngine.CalendarIdentifier;
    static IslamicCalendar: UnityEngine.CalendarIdentifier;
    static IslamicCivilCalendar: UnityEngine.CalendarIdentifier;
    static JapaneseCalendar: UnityEngine.CalendarIdentifier;
    static RepublicOfChinaCalendar: UnityEngine.CalendarIdentifier;
    static PersianCalendar: UnityEngine.CalendarIdentifier;
    static IndianCalendar: UnityEngine.CalendarIdentifier;
    static ISO8601Calendar: UnityEngine.CalendarIdentifier;
  }
}
declare namespace UnityEngine {
  class CalendarUnit extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Era: UnityEngine.CalendarUnit;
    static Year: UnityEngine.CalendarUnit;
    static Month: UnityEngine.CalendarUnit;
    static Day: UnityEngine.CalendarUnit;
    static Hour: UnityEngine.CalendarUnit;
    static Minute: UnityEngine.CalendarUnit;
    static Second: UnityEngine.CalendarUnit;
    static Week: UnityEngine.CalendarUnit;
    static Weekday: UnityEngine.CalendarUnit;
    static WeekdayOrdinal: UnityEngine.CalendarUnit;
    static Quarter: UnityEngine.CalendarUnit;
  }
}
declare namespace UnityEngine {
  class Camera extends UnityEngine.Behaviour {
    // constructors
    constructor();
    // methods
    SetTargetBuffers(colorBuffer: UnityEngine.RenderBuffer, depthBuffer: UnityEngine.RenderBuffer): void;
    SetTargetBuffers(colorBuffer: UnityEngine.RenderBuffer[], depthBuffer: UnityEngine.RenderBuffer): void;
    ResetWorldToCameraMatrix(): void;
    ResetProjectionMatrix(): void;
    ResetAspect(): void;
    ResetFieldOfView(): void;
    GetStereoViewMatrices(): UnityEngine.Matrix4x4[];
    GetStereoViewMatrix(eye: UnityEngine.Camera.StereoscopicEye): UnityEngine.Matrix4x4;
    SetStereoViewMatrices(leftMatrix: UnityEngine.Matrix4x4, rightMatrix: UnityEngine.Matrix4x4): void;
    SetStereoViewMatrix(eye: UnityEngine.Camera.StereoscopicEye, matrix: UnityEngine.Matrix4x4): void;
    ResetStereoViewMatrices(): void;
    GetStereoProjectionMatrices(): UnityEngine.Matrix4x4[];
    GetStereoProjectionMatrix(eye: UnityEngine.Camera.StereoscopicEye): UnityEngine.Matrix4x4;
    SetStereoProjectionMatrix(eye: UnityEngine.Camera.StereoscopicEye, matrix: UnityEngine.Matrix4x4): void;
    SetStereoProjectionMatrices(leftMatrix: UnityEngine.Matrix4x4, rightMatrix: UnityEngine.Matrix4x4): void;
    CalculateFrustumCorners(viewport: UnityEngine.Rect, z: number, eye: UnityEngine.Camera.MonoOrStereoscopicEye, outCorners: UnityEngine.Vector3[]): void;
    ResetStereoProjectionMatrices(): void;
    WorldToScreenPoint(position: UnityEngine.Vector3): UnityEngine.Vector3;
    WorldToViewportPoint(position: UnityEngine.Vector3): UnityEngine.Vector3;
    ViewportToWorldPoint(position: UnityEngine.Vector3): UnityEngine.Vector3;
    ScreenToWorldPoint(position: UnityEngine.Vector3): UnityEngine.Vector3;
    ScreenToViewportPoint(position: UnityEngine.Vector3): UnityEngine.Vector3;
    ViewportToScreenPoint(position: UnityEngine.Vector3): UnityEngine.Vector3;
    ViewportPointToRay(position: UnityEngine.Vector3): UnityEngine.Ray;
    ScreenPointToRay(position: UnityEngine.Vector3): UnityEngine.Ray;
    static GetAllCameras(cameras: UnityEngine.Camera[]): number;
    Render(): void;
    RenderWithShader(shader: UnityEngine.Shader, replacementTag: string): void;
    SetReplacementShader(shader: UnityEngine.Shader, replacementTag: string): void;
    ResetReplacementShader(): void;
    ResetCullingMatrix(): void;
    RenderDontRestore(): void;
    static SetupCurrent(cur: UnityEngine.Camera): void;
    RenderToCubemap(cubemap: UnityEngine.Cubemap): boolean;
    RenderToCubemap(cubemap: UnityEngine.Cubemap, faceMask: number): boolean;
    RenderToCubemap(cubemap: UnityEngine.RenderTexture): boolean;
    RenderToCubemap(cubemap: UnityEngine.RenderTexture, faceMask: number): boolean;
    CopyFrom(other: UnityEngine.Camera): void;
    AddCommandBuffer(evt: UnityEngine.Rendering.CameraEvent, buffer: UnityEngine.Rendering.CommandBuffer): void;
    RemoveCommandBuffer(evt: UnityEngine.Rendering.CameraEvent, buffer: UnityEngine.Rendering.CommandBuffer): void;
    RemoveCommandBuffers(evt: UnityEngine.Rendering.CameraEvent): void;
    RemoveAllCommandBuffers(): void;
    GetCommandBuffers(evt: UnityEngine.Rendering.CameraEvent): UnityEngine.Rendering.CommandBuffer[];
    CalculateObliqueMatrix(clipPlane: UnityEngine.Vector4): UnityEngine.Matrix4x4;
    GetScreenWidth(): number;
    GetScreenHeight(): number;
    DoClear(): void;
    // properties
    fov: number;
    near: number;
    far: number;
    fieldOfView: number;
    nearClipPlane: number;
    farClipPlane: number;
    renderingPath: UnityEngine.RenderingPath;
    readonly actualRenderingPath: UnityEngine.RenderingPath;
    hdr: boolean;
    orthographicSize: number;
    orthographic: boolean;
    opaqueSortMode: UnityEngine.Rendering.OpaqueSortMode;
    transparencySortMode: UnityEngine.TransparencySortMode;
    depth: number;
    aspect: number;
    cullingMask: number;
    eventMask: number;
    backgroundColor: UnityEngine.Color;
    rect: UnityEngine.Rect;
    pixelRect: UnityEngine.Rect;
    targetTexture: UnityEngine.RenderTexture;
    readonly pixelWidth: number;
    readonly pixelHeight: number;
    readonly cameraToWorldMatrix: UnityEngine.Matrix4x4;
    worldToCameraMatrix: UnityEngine.Matrix4x4;
    projectionMatrix: UnityEngine.Matrix4x4;
    nonJitteredProjectionMatrix: UnityEngine.Matrix4x4;
    useJitteredProjectionMatrixForTransparentRendering: boolean;
    readonly velocity: UnityEngine.Vector3;
    clearFlags: UnityEngine.CameraClearFlags;
    readonly stereoEnabled: boolean;
    stereoSeparation: number;
    stereoConvergence: number;
    cameraType: UnityEngine.CameraType;
    stereoMirrorMode: boolean;
    stereoTargetEye: UnityEngine.StereoTargetEyeMask;
    readonly stereoActiveEye: UnityEngine.Camera.MonoOrStereoscopicEye;
    targetDisplay: number;
    static readonly main: UnityEngine.Camera;
    static readonly current: UnityEngine.Camera;
    static readonly allCameras: UnityEngine.Camera[];
    static readonly allCamerasCount: number;
    useOcclusionCulling: boolean;
    cullingMatrix: UnityEngine.Matrix4x4;
    layerCullDistances: number[];
    layerCullSpherical: boolean;
    depthTextureMode: UnityEngine.DepthTextureMode;
    clearStencilAfterLightingPass: boolean;
    readonly commandBufferCount: number;
    isOrthoGraphic: boolean;
    static readonly mainCamera: UnityEngine.Camera;
    // fields
    static onPreCull: ((cam: UnityEngine.Camera) => void);
    static onPreRender: ((cam: UnityEngine.Camera) => void);
    static onPostRender: ((cam: UnityEngine.Camera) => void);
  }
}
declare namespace UnityEngine.Camera {
  class MonoOrStereoscopicEye extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Left: UnityEngine.Camera.MonoOrStereoscopicEye;
    static Right: UnityEngine.Camera.MonoOrStereoscopicEye;
    static Mono: UnityEngine.Camera.MonoOrStereoscopicEye;
  }
}
declare namespace UnityEngine.Camera {
  class StereoscopicEye extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Left: UnityEngine.Camera.StereoscopicEye;
    static Right: UnityEngine.Camera.StereoscopicEye;
  }
}
declare namespace UnityEngine {
  class CameraClearFlags extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Skybox: UnityEngine.CameraClearFlags;
    static Color: UnityEngine.CameraClearFlags;
    static SolidColor: UnityEngine.CameraClearFlags;
    static Depth: UnityEngine.CameraClearFlags;
    static Nothing: UnityEngine.CameraClearFlags;
  }
}
declare namespace UnityEngine {
  class CameraType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Game: UnityEngine.CameraType;
    static SceneView: UnityEngine.CameraType;
    static Preview: UnityEngine.CameraType;
    static VR: UnityEngine.CameraType;
  }
}
declare namespace UnityEngine {
  class Canvas extends UnityEngine.Behaviour {
    // constructors
    constructor();
    // methods
    static GetDefaultCanvasMaterial(): UnityEngine.Material;
    static GetETC1SupportedCanvasMaterial(): UnityEngine.Material;
    static GetDefaultCanvasTextMaterial(): UnityEngine.Material;
    static ForceUpdateCanvases(): void;
    // properties
    renderMode: UnityEngine.RenderMode;
    readonly isRootCanvas: boolean;
    worldCamera: UnityEngine.Camera;
    readonly pixelRect: UnityEngine.Rect;
    scaleFactor: number;
    referencePixelsPerUnit: number;
    overridePixelPerfect: boolean;
    pixelPerfect: boolean;
    planeDistance: number;
    readonly renderOrder: number;
    overrideSorting: boolean;
    sortingOrder: number;
    targetDisplay: number;
    sortingGridNormalizedSize: number;
    normalizedSortingGridSize: number;
    sortingLayerID: number;
    readonly cachedSortingLayerValue: number;
    sortingLayerName: string;
    readonly rootCanvas: UnityEngine.Canvas;
    // fields
  }
}
declare namespace UnityEngine {
  class CanvasGroup extends UnityEngine.Component {
    // constructors
    constructor();
    // methods
    IsRaycastLocationValid(sp: UnityEngine.Vector2, eventCamera: UnityEngine.Camera): boolean;
    // properties
    alpha: number;
    interactable: boolean;
    blocksRaycasts: boolean;
    ignoreParentGroups: boolean;
    // fields
  }
}
declare namespace UnityEngine {
  class CanvasRenderer extends UnityEngine.Component {
    // constructors
    constructor();
    // methods
    SetColor(color: UnityEngine.Color): void;
    GetColor(): UnityEngine.Color;
    GetAlpha(): number;
    SetAlpha(alpha: number): void;
    SetVertices(vertices: UnityEngine.UIVertex[]): void;
    SetVertices(vertices: UnityEngine.UIVertex[], size: number): void;
    EnableRectClipping(rect: UnityEngine.Rect): void;
    DisableRectClipping(): void;
    SetMaterial(material: UnityEngine.Material, index: number): void;
    SetMaterial(material: UnityEngine.Material, texture: UnityEngine.Texture): void;
    GetMaterial(): UnityEngine.Material;
    GetMaterial(index: number): UnityEngine.Material;
    SetPopMaterial(material: UnityEngine.Material, index: number): void;
    GetPopMaterial(index: number): UnityEngine.Material;
    SetTexture(texture: UnityEngine.Texture): void;
    SetAlphaTexture(texture: UnityEngine.Texture): void;
    SetMesh(mesh: UnityEngine.Mesh): void;
    Clear(): void;
    static SplitUIVertexStreams(verts: UnityEngine.UIVertex[], positions: UnityEngine.Vector3[], colors: UnityEngine.Color32[], uv0S: UnityEngine.Vector2[], uv1S: UnityEngine.Vector2[], normals: UnityEngine.Vector3[], tangents: UnityEngine.Vector4[], indicies: number[]): void;
    static CreateUIVertexStream(verts: UnityEngine.UIVertex[], positions: UnityEngine.Vector3[], colors: UnityEngine.Color32[], uv0S: UnityEngine.Vector2[], uv1S: UnityEngine.Vector2[], normals: UnityEngine.Vector3[], tangents: UnityEngine.Vector4[], indicies: number[]): void;
    static AddUIVertexStream(verts: UnityEngine.UIVertex[], positions: UnityEngine.Vector3[], colors: UnityEngine.Color32[], uv0S: UnityEngine.Vector2[], uv1S: UnityEngine.Vector2[], normals: UnityEngine.Vector3[], tangents: UnityEngine.Vector4[]): void;
    // properties
    isMask: boolean;
    readonly hasRectClipping: boolean;
    hasPopInstruction: boolean;
    materialCount: number;
    popMaterialCount: number;
    readonly relativeDepth: number;
    cull: boolean;
    readonly absoluteDepth: number;
    readonly hasMoved: boolean;
    // fields
  }
}
declare namespace UnityEngine {
  class CapsuleCollider extends UnityEngine.Collider {
    // constructors
    constructor();
    // methods
    // properties
    center: UnityEngine.Vector3;
    radius: number;
    height: number;
    direction: number;
    // fields
  }
}
declare namespace UnityEngine {
  class CapsuleCollider2D extends UnityEngine.Collider2D {
    // constructors
    constructor();
    // methods
    // properties
    size: UnityEngine.Vector2;
    direction: UnityEngine.CapsuleDirection2D;
    // fields
  }
}
declare namespace UnityEngine {
  class CapsuleDirection2D extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Vertical: UnityEngine.CapsuleDirection2D;
    static Horizontal: UnityEngine.CapsuleDirection2D;
  }
}
declare namespace UnityEngine {
  class CharacterController extends UnityEngine.Collider {
    // constructors
    constructor();
    // methods
    SimpleMove(speed: UnityEngine.Vector3): boolean;
    Move(motion: UnityEngine.Vector3): UnityEngine.CollisionFlags;
    // properties
    readonly isGrounded: boolean;
    readonly velocity: UnityEngine.Vector3;
    readonly collisionFlags: UnityEngine.CollisionFlags;
    radius: number;
    height: number;
    center: UnityEngine.Vector3;
    slopeLimit: number;
    stepOffset: number;
    skinWidth: number;
    detectCollisions: boolean;
    enableOverlapRecovery: boolean;
    // fields
  }
}
declare namespace UnityEngine {
  class CharacterInfo extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    advance: number;
    glyphWidth: number;
    glyphHeight: number;
    bearing: number;
    minY: number;
    maxY: number;
    minX: number;
    maxX: number;
    uvBottomLeft: UnityEngine.Vector2;
    uvBottomRight: UnityEngine.Vector2;
    uvTopRight: UnityEngine.Vector2;
    uvTopLeft: UnityEngine.Vector2;
    // fields
    index: number;
    uv: UnityEngine.Rect;
    vert: UnityEngine.Rect;
    width: number;
    size: number;
    style: UnityEngine.FontStyle;
    flipped: boolean;
  }
}
declare namespace UnityEngine {
  class CharacterJoint extends UnityEngine.Joint {
    // constructors
    constructor();
    // methods
    // properties
    swingAxis: UnityEngine.Vector3;
    twistLimitSpring: UnityEngine.SoftJointLimitSpring;
    swingLimitSpring: UnityEngine.SoftJointLimitSpring;
    lowTwistLimit: UnityEngine.SoftJointLimit;
    highTwistLimit: UnityEngine.SoftJointLimit;
    swing1Limit: UnityEngine.SoftJointLimit;
    swing2Limit: UnityEngine.SoftJointLimit;
    enableProjection: boolean;
    projectionDistance: number;
    projectionAngle: number;
    // fields
    targetRotation: UnityEngine.Quaternion;
    targetAngularVelocity: UnityEngine.Vector3;
    rotationDrive: UnityEngine.JointDrive;
  }
}
declare namespace UnityEngine {
  class CircleCollider2D extends UnityEngine.Collider2D {
    // constructors
    constructor();
    // methods
    // properties
    center: UnityEngine.Vector2;
    radius: number;
    // fields
  }
}
declare namespace UnityEngine {
  class ClassLibraryInitializer extends System.Object {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class Cloth extends UnityEngine.Component {
    // constructors
    constructor();
    // methods
    ClearTransformMotion(): void;
    SetEnabledFading(enabled: boolean, interpolationTime: number): void;
    SetEnabledFading(enabled: boolean): void;
    // properties
    sleepThreshold: number;
    bendingStiffness: number;
    stretchingStiffness: number;
    damping: number;
    externalAcceleration: UnityEngine.Vector3;
    randomAcceleration: UnityEngine.Vector3;
    useGravity: boolean;
    selfCollision: boolean;
    enabled: boolean;
    readonly vertices: UnityEngine.Vector3[];
    readonly normals: UnityEngine.Vector3[];
    friction: number;
    collisionMassScale: number;
    useContinuousCollision: number;
    useVirtualParticles: number;
    coefficients: UnityEngine.ClothSkinningCoefficient[];
    worldVelocityScale: number;
    worldAccelerationScale: number;
    solverFrequency: boolean;
    capsuleColliders: UnityEngine.CapsuleCollider[];
    sphereColliders: UnityEngine.ClothSphereColliderPair[];
    // fields
  }
}
declare namespace UnityEngine {
  class ClothSkinningCoefficient extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    maxDistance: number;
    collisionSphereDistance: number;
  }
}
declare namespace UnityEngine {
  class ClothSphereColliderPair extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    first: UnityEngine.SphereCollider;
    second: UnityEngine.SphereCollider;
    // fields
  }
}
declare namespace UnityEngine {
  class ClusterInput extends System.Object {
    // constructors
    constructor();
    // methods
    static GetAxis(name: string): number;
    static GetButton(name: string): boolean;
    static GetTrackerPosition(name: string): UnityEngine.Vector3;
    static GetTrackerRotation(name: string): UnityEngine.Quaternion;
    static SetAxis(name: string, value: number): void;
    static SetButton(name: string, value: boolean): void;
    static SetTrackerPosition(name: string, value: UnityEngine.Vector3): void;
    static SetTrackerRotation(name: string, value: UnityEngine.Quaternion): void;
    static AddInput(name: string, deviceName: string, serverUrl: string, index: number, type: UnityEngine.ClusterInputType): boolean;
    static EditInput(name: string, deviceName: string, serverUrl: string, index: number, type: UnityEngine.ClusterInputType): boolean;
    static CheckConnectionToServer(name: string): boolean;
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class ClusterInputType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Button: UnityEngine.ClusterInputType;
    static Axis: UnityEngine.ClusterInputType;
    static Tracker: UnityEngine.ClusterInputType;
    static CustomProvidedInput: UnityEngine.ClusterInputType;
  }
}
declare namespace UnityEngine {
  class ClusterNetwork extends System.Object {
    // constructors
    constructor();
    // methods
    // properties
    static readonly isMasterOfCluster: boolean;
    static readonly isDisconnected: boolean;
    static nodeIndex: number;
    // fields
  }
}
declare namespace UnityEngine {
  class Collider extends UnityEngine.Component {
    // constructors
    constructor();
    // methods
    ClosestPointOnBounds(position: UnityEngine.Vector3): UnityEngine.Vector3;
    Raycast(ray: UnityEngine.Ray, hitInfo: any, maxDistance: number): boolean;
    // properties
    enabled: boolean;
    readonly attachedRigidbody: UnityEngine.Rigidbody;
    isTrigger: boolean;
    contactOffset: number;
    material: UnityEngine.PhysicMaterial;
    sharedMaterial: UnityEngine.PhysicMaterial;
    readonly bounds: UnityEngine.Bounds;
    // fields
  }
}
declare namespace UnityEngine {
  class Collider2D extends UnityEngine.Behaviour {
    // constructors
    constructor();
    // methods
    IsTouching(collider: UnityEngine.Collider2D): boolean;
    IsTouchingLayers(layerMask: number): boolean;
    IsTouchingLayers(): boolean;
    OverlapPoint(point: UnityEngine.Vector2): boolean;
    Raycast(direction: UnityEngine.Vector2, results: UnityEngine.RaycastHit2D[], distance: number, layerMask: number, minDepth: number, maxDepth: number): number;
    Raycast(direction: UnityEngine.Vector2, results: UnityEngine.RaycastHit2D[], distance: number, layerMask: number, minDepth: number): number;
    Raycast(direction: UnityEngine.Vector2, results: UnityEngine.RaycastHit2D[], distance: number, layerMask: number): number;
    Raycast(direction: UnityEngine.Vector2, results: UnityEngine.RaycastHit2D[], distance: number): number;
    Raycast(direction: UnityEngine.Vector2, results: UnityEngine.RaycastHit2D[]): number;
    Cast(direction: UnityEngine.Vector2, results: UnityEngine.RaycastHit2D[], distance: number, ignoreSiblingColliders: boolean): number;
    Cast(direction: UnityEngine.Vector2, results: UnityEngine.RaycastHit2D[], distance: number): number;
    Cast(direction: UnityEngine.Vector2, results: UnityEngine.RaycastHit2D[]): number;
    // properties
    density: number;
    isTrigger: boolean;
    usedByEffector: boolean;
    offset: UnityEngine.Vector2;
    readonly attachedRigidbody: UnityEngine.Rigidbody2D;
    readonly shapeCount: number;
    readonly bounds: UnityEngine.Bounds;
    sharedMaterial: UnityEngine.PhysicsMaterial2D;
    readonly friction: number;
    readonly bounciness: number;
    // fields
  }
}
declare namespace UnityEngine {
  class ColliderErrorState2D extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static None: UnityEngine.ColliderErrorState2D;
    static NoShapes: UnityEngine.ColliderErrorState2D;
    static RemovedShapes: UnityEngine.ColliderErrorState2D;
  }
}
declare namespace UnityEngine {
  class Collision extends System.Object {
    // constructors
    constructor();
    // methods
    GetEnumerator(): any;
    // properties
    readonly relativeVelocity: UnityEngine.Vector3;
    readonly rigidbody: UnityEngine.Rigidbody;
    readonly collider: UnityEngine.Collider;
    readonly transform: UnityEngine.Transform;
    readonly gameObject: UnityEngine.GameObject;
    readonly contacts: UnityEngine.ContactPoint[];
    readonly impulse: UnityEngine.Vector3;
    readonly impactForceSum: UnityEngine.Vector3;
    readonly frictionForceSum: UnityEngine.Vector3;
    readonly other: UnityEngine.Component;
    // fields
  }
}
declare namespace UnityEngine {
  class Collision2D extends System.Object {
    // constructors
    constructor();
    // methods
    // properties
    readonly enabled: boolean;
    readonly rigidbody: UnityEngine.Rigidbody2D;
    readonly collider: UnityEngine.Collider2D;
    readonly transform: UnityEngine.Transform;
    readonly gameObject: UnityEngine.GameObject;
    readonly contacts: UnityEngine.ContactPoint2D[];
    readonly relativeVelocity: UnityEngine.Vector2;
    // fields
  }
}
declare namespace UnityEngine {
  class CollisionDetectionMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Discrete: UnityEngine.CollisionDetectionMode;
    static Continuous: UnityEngine.CollisionDetectionMode;
    static ContinuousDynamic: UnityEngine.CollisionDetectionMode;
  }
}
declare namespace UnityEngine {
  class CollisionDetectionMode2D extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static None: UnityEngine.CollisionDetectionMode2D;
    static Discrete: UnityEngine.CollisionDetectionMode2D;
    static Continuous: UnityEngine.CollisionDetectionMode2D;
  }
}
declare namespace UnityEngine {
  class CollisionFlags extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static None: UnityEngine.CollisionFlags;
    static Sides: UnityEngine.CollisionFlags;
    static Above: UnityEngine.CollisionFlags;
    static Below: UnityEngine.CollisionFlags;
    static CollidedSides: UnityEngine.CollisionFlags;
    static CollidedAbove: UnityEngine.CollisionFlags;
    static CollidedBelow: UnityEngine.CollisionFlags;
  }
}
declare namespace UnityEngine {
  class Color extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    ToString(): string;
    ToString(format: string): string;
    GetHashCode(): number;
    Equals(other: any): boolean;
    static Lerp(a: UnityEngine.Color, b: UnityEngine.Color, t: number): UnityEngine.Color;
    static LerpUnclamped(a: UnityEngine.Color, b: UnityEngine.Color, t: number): UnityEngine.Color;
    static RGBToHSV(rgbColor: UnityEngine.Color, H: any, S: any, V: any): void;
    static HSVToRGB(H: number, S: number, V: number): UnityEngine.Color;
    static HSVToRGB(H: number, S: number, V: number, hdr: boolean): UnityEngine.Color;
    // properties
    static readonly red: UnityEngine.Color;
    static readonly green: UnityEngine.Color;
    static readonly blue: UnityEngine.Color;
    static readonly white: UnityEngine.Color;
    static readonly black: UnityEngine.Color;
    static readonly yellow: UnityEngine.Color;
    static readonly cyan: UnityEngine.Color;
    static readonly magenta: UnityEngine.Color;
    static readonly gray: UnityEngine.Color;
    static readonly grey: UnityEngine.Color;
    static readonly clear: UnityEngine.Color;
    readonly grayscale: number;
    readonly linear: UnityEngine.Color;
    readonly gamma: UnityEngine.Color;
    readonly maxColorComponent: number;
    get_Item(index: number): number;
    set_Item(index: number, value: number): void;
    // fields
    r: number;
    g: number;
    b: number;
    a: number;
  }
}
declare namespace UnityEngine {
  class Color32 extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    static Lerp(a: UnityEngine.Color32, b: UnityEngine.Color32, t: number): UnityEngine.Color32;
    static LerpUnclamped(a: UnityEngine.Color32, b: UnityEngine.Color32, t: number): UnityEngine.Color32;
    ToString(): string;
    ToString(format: string): string;
    // properties
    // fields
    r: number;
    g: number;
    b: number;
    a: number;
  }
}
declare namespace UnityEngine {
  class ColorSpace extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Uninitialized: UnityEngine.ColorSpace;
    static Gamma: UnityEngine.ColorSpace;
    static Linear: UnityEngine.ColorSpace;
  }
}
declare namespace UnityEngine {
  class ColorUsageAttribute extends UnityEngine.PropertyAttribute {
    // constructors
    constructor(showAlpha: boolean);
    constructor(showAlpha: boolean, hdr: boolean, minBrightness: number, maxBrightness: number, minExposureValue: number, maxExposureValue: number);
    // methods
    // properties
    // fields
    showAlpha: boolean;
    hdr: boolean;
    minBrightness: number;
    maxBrightness: number;
    minExposureValue: number;
    maxExposureValue: number;
  }
}
declare namespace UnityEngine {
  class ColorUtility extends System.Object {
    // constructors
    constructor();
    // methods
    static TryParseHtmlString(htmlString: string, color: any): boolean;
    static ToHtmlStringRGB(color: UnityEngine.Color): string;
    static ToHtmlStringRGBA(color: UnityEngine.Color): string;
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class CombineInstance extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    mesh: UnityEngine.Mesh;
    subMeshIndex: number;
    transform: UnityEngine.Matrix4x4;
    // fields
  }
}
declare namespace UnityEngine {
  class Compass extends System.Object {
    // constructors
    constructor();
    // methods
    // properties
    readonly magneticHeading: number;
    readonly trueHeading: number;
    readonly headingAccuracy: number;
    readonly rawVector: UnityEngine.Vector3;
    readonly timestamp: number;
    enabled: boolean;
    // fields
  }
}
declare namespace UnityEngine {
  class Component extends UnityEngine.Object {
    // constructors
    constructor();
    // methods
    GetComponent(type: any): UnityEngine.Component;
    GetComponent(type: string): UnityEngine.Component;
    GetComponentInChildren(t: any, includeInactive: boolean): UnityEngine.Component;
    GetComponentInChildren(t: any): UnityEngine.Component;
    GetComponentsInChildren(t: any): UnityEngine.Component[];
    GetComponentsInChildren(t: any, includeInactive: boolean): UnityEngine.Component[];
    GetComponentInParent(t: any): UnityEngine.Component;
    GetComponentsInParent(t: any): UnityEngine.Component[];
    GetComponentsInParent(t: any, includeInactive: boolean): UnityEngine.Component[];
    GetComponents(type: any): UnityEngine.Component[];
    GetComponents(type: any, results: UnityEngine.Component[]): void;
    CompareTag(tag: string): boolean;
    SendMessageUpwards(methodName: string, value: any, options: UnityEngine.SendMessageOptions): void;
    SendMessageUpwards(methodName: string, value: any): void;
    SendMessageUpwards(methodName: string): void;
    SendMessageUpwards(methodName: string, options: UnityEngine.SendMessageOptions): void;
    SendMessage(methodName: string, value: any, options: UnityEngine.SendMessageOptions): void;
    SendMessage(methodName: string, value: any): void;
    SendMessage(methodName: string): void;
    SendMessage(methodName: string, options: UnityEngine.SendMessageOptions): void;
    BroadcastMessage(methodName: string, parameter: any, options: UnityEngine.SendMessageOptions): void;
    BroadcastMessage(methodName: string, parameter: any): void;
    BroadcastMessage(methodName: string): void;
    BroadcastMessage(methodName: string, options: UnityEngine.SendMessageOptions): void;
    // properties
    readonly transform: UnityEngine.Transform;
    readonly gameObject: UnityEngine.GameObject;
    tag: string;
    readonly rigidbody: UnityEngine.Component;
    readonly rigidbody2D: UnityEngine.Component;
    readonly camera: UnityEngine.Component;
    readonly light: UnityEngine.Component;
    readonly animation: UnityEngine.Component;
    readonly constantForce: UnityEngine.Component;
    readonly renderer: UnityEngine.Component;
    readonly audio: UnityEngine.Component;
    readonly guiText: UnityEngine.Component;
    readonly networkView: UnityEngine.Component;
    readonly guiElement: UnityEngine.Component;
    readonly guiTexture: UnityEngine.Component;
    readonly collider: UnityEngine.Component;
    readonly collider2D: UnityEngine.Component;
    readonly hingeJoint: UnityEngine.Component;
    readonly particleEmitter: UnityEngine.Component;
    readonly particleSystem: UnityEngine.Component;
    // fields
  }
}
declare namespace UnityEngine {
  class ComputeBuffer extends System.Object {
    // constructors
    constructor(count: number, stride: number);
    constructor(count: number, stride: number, type: UnityEngine.ComputeBufferType);
    // methods
    Dispose(): void;
    Release(): void;
    SetData(data: any): void;
    SetCounterValue(counterValue: number): void;
    GetData(data: any): void;
    static CopyCount(src: UnityEngine.ComputeBuffer, dst: UnityEngine.ComputeBuffer, dstOffset: number): void;
    GetNativeBufferPtr(): any;
    // properties
    readonly count: number;
    readonly stride: number;
    // fields
  }
}
declare namespace UnityEngine {
  class ComputeBufferType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Default: UnityEngine.ComputeBufferType;
    static Raw: UnityEngine.ComputeBufferType;
    static Append: UnityEngine.ComputeBufferType;
    static Counter: UnityEngine.ComputeBufferType;
    static DrawIndirect: UnityEngine.ComputeBufferType;
    static IndirectArguments: UnityEngine.ComputeBufferType;
    static GPUMemory: UnityEngine.ComputeBufferType;
  }
}
declare namespace UnityEngine {
  class ComputeShader extends UnityEngine.Object {
    // constructors
    constructor();
    // methods
    FindKernel(name: string): number;
    HasKernel(name: string): boolean;
    GetKernelThreadGroupSizes(kernelIndex: number, x: any, y: any, z: any): void;
    SetFloat(name: string, val: number): void;
    SetFloat(nameID: number, val: number): void;
    SetInt(name: string, val: number): void;
    SetInt(nameID: number, val: number): void;
    SetBool(name: string, val: boolean): void;
    SetBool(nameID: number, val: boolean): void;
    SetVector(name: string, val: UnityEngine.Vector4): void;
    SetVector(nameID: number, val: UnityEngine.Vector4): void;
    SetFloats(name: string, values: number[]): void;
    SetFloats(nameID: number, values: number[]): void;
    SetInts(name: string, values: number[]): void;
    SetInts(nameID: number, values: number[]): void;
    SetTexture(kernelIndex: number, name: string, texture: UnityEngine.Texture): void;
    SetTexture(kernelIndex: number, nameID: number, texture: UnityEngine.Texture): void;
    SetTextureFromGlobal(kernelIndex: number, name: string, globalTextureName: string): void;
    SetTextureFromGlobal(kernelIndex: number, nameID: number, globalTextureNameID: number): void;
    SetBuffer(kernelIndex: number, name: string, buffer: UnityEngine.ComputeBuffer): void;
    SetBuffer(kernelIndex: number, nameID: number, buffer: UnityEngine.ComputeBuffer): void;
    Dispatch(kernelIndex: number, threadGroupsX: number, threadGroupsY: number, threadGroupsZ: number): void;
    DispatchIndirect(kernelIndex: number, argsBuffer: UnityEngine.ComputeBuffer): void;
    DispatchIndirect(kernelIndex: number, argsBuffer: UnityEngine.ComputeBuffer, argsOffset: number): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class ConfigurableJoint extends UnityEngine.Joint {
    // constructors
    constructor();
    // methods
    // properties
    secondaryAxis: UnityEngine.Vector3;
    xMotion: UnityEngine.ConfigurableJointMotion;
    yMotion: UnityEngine.ConfigurableJointMotion;
    zMotion: UnityEngine.ConfigurableJointMotion;
    angularXMotion: UnityEngine.ConfigurableJointMotion;
    angularYMotion: UnityEngine.ConfigurableJointMotion;
    angularZMotion: UnityEngine.ConfigurableJointMotion;
    linearLimitSpring: UnityEngine.SoftJointLimitSpring;
    angularXLimitSpring: UnityEngine.SoftJointLimitSpring;
    angularYZLimitSpring: UnityEngine.SoftJointLimitSpring;
    linearLimit: UnityEngine.SoftJointLimit;
    lowAngularXLimit: UnityEngine.SoftJointLimit;
    highAngularXLimit: UnityEngine.SoftJointLimit;
    angularYLimit: UnityEngine.SoftJointLimit;
    angularZLimit: UnityEngine.SoftJointLimit;
    targetPosition: UnityEngine.Vector3;
    targetVelocity: UnityEngine.Vector3;
    xDrive: UnityEngine.JointDrive;
    yDrive: UnityEngine.JointDrive;
    zDrive: UnityEngine.JointDrive;
    targetRotation: UnityEngine.Quaternion;
    targetAngularVelocity: UnityEngine.Vector3;
    rotationDriveMode: UnityEngine.RotationDriveMode;
    angularXDrive: UnityEngine.JointDrive;
    angularYZDrive: UnityEngine.JointDrive;
    slerpDrive: UnityEngine.JointDrive;
    projectionMode: UnityEngine.JointProjectionMode;
    projectionDistance: number;
    projectionAngle: number;
    configuredInWorldSpace: boolean;
    swapBodies: boolean;
    // fields
  }
}
declare namespace UnityEngine {
  class ConfigurableJointMotion extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Locked: UnityEngine.ConfigurableJointMotion;
    static Limited: UnityEngine.ConfigurableJointMotion;
    static Free: UnityEngine.ConfigurableJointMotion;
  }
}
declare namespace UnityEngine.Connect {
  class UnityAdsSettings extends System.Object {
    // constructors
    constructor();
    // methods
    static IsPlatformEnabled(platform: UnityEngine.RuntimePlatform): boolean;
    static SetPlatformEnabled(platform: UnityEngine.RuntimePlatform, value: boolean): void;
    static GetGameId(platform: UnityEngine.RuntimePlatform): string;
    static SetGameId(platform: UnityEngine.RuntimePlatform, gameId: string): void;
    // properties
    static enabled: boolean;
    static initializeOnStartup: boolean;
    static testMode: boolean;
    // fields
  }
}
declare namespace UnityEngine.Connect {
  class UnityConnectSettings extends System.Object {
    // constructors
    constructor();
    // methods
    // properties
    static enabled: boolean;
    static testMode: boolean;
    static testEventUrl: string;
    static testConfigUrl: string;
    // fields
  }
}
declare namespace UnityEngine {
  class ConnectionTesterStatus extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Error: UnityEngine.ConnectionTesterStatus;
    static Undetermined: UnityEngine.ConnectionTesterStatus;
    static PrivateIPNoNATPunchthrough: UnityEngine.ConnectionTesterStatus;
    static PrivateIPHasNATPunchThrough: UnityEngine.ConnectionTesterStatus;
    static PublicIPIsConnectable: UnityEngine.ConnectionTesterStatus;
    static PublicIPPortBlocked: UnityEngine.ConnectionTesterStatus;
    static PublicIPNoServerStarted: UnityEngine.ConnectionTesterStatus;
    static LimitedNATPunchthroughPortRestricted: UnityEngine.ConnectionTesterStatus;
    static LimitedNATPunchthroughSymmetric: UnityEngine.ConnectionTesterStatus;
    static NATpunchthroughFullCone: UnityEngine.ConnectionTesterStatus;
    static NATpunchthroughAddressRestrictedCone: UnityEngine.ConnectionTesterStatus;
  }
}
declare namespace UnityEngine {
  class ConstantForce extends UnityEngine.Behaviour {
    // constructors
    constructor();
    // methods
    // properties
    force: UnityEngine.Vector3;
    relativeForce: UnityEngine.Vector3;
    torque: UnityEngine.Vector3;
    relativeTorque: UnityEngine.Vector3;
    // fields
  }
}
declare namespace UnityEngine {
  class ConstantForce2D extends UnityEngine.PhysicsUpdateBehaviour2D {
    // constructors
    constructor();
    // methods
    // properties
    force: UnityEngine.Vector2;
    relativeForce: UnityEngine.Vector2;
    torque: number;
    // fields
  }
}
declare namespace UnityEngine {
  class ConstructorSafeAttribute extends System.Attribute {
    // constructors
    constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class ContactPoint extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    readonly point: UnityEngine.Vector3;
    readonly normal: UnityEngine.Vector3;
    readonly thisCollider: UnityEngine.Collider;
    readonly otherCollider: UnityEngine.Collider;
    readonly separation: number;
    // fields
  }
}
declare namespace UnityEngine {
  class ContactPoint2D extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    readonly point: UnityEngine.Vector2;
    readonly normal: UnityEngine.Vector2;
    readonly collider: UnityEngine.Collider2D;
    readonly otherCollider: UnityEngine.Collider2D;
    // fields
  }
}
declare namespace UnityEngine {
  class ContextMenu extends System.Attribute {
    // constructors
    constructor(itemName: string);
    constructor(itemName: string, isValidateFunction: boolean);
    constructor(itemName: string, isValidateFunction: boolean, priority: number);
    // methods
    // properties
    // fields
    menuItem: string;
    validate: boolean;
    priority: number;
  }
}
declare namespace UnityEngine {
  class ContextMenuItemAttribute extends UnityEngine.PropertyAttribute {
    // constructors
    constructor(name: string, function_: string);
    // methods
    // properties
    // fields
    name: string;
    "function": string;
  }
}
declare namespace UnityEngine {
  class ControllerColliderHit extends System.Object {
    // constructors
    constructor();
    // methods
    // properties
    readonly controller: UnityEngine.CharacterController;
    readonly collider: UnityEngine.Collider;
    readonly rigidbody: UnityEngine.Rigidbody;
    readonly gameObject: UnityEngine.GameObject;
    readonly transform: UnityEngine.Transform;
    readonly point: UnityEngine.Vector3;
    readonly normal: UnityEngine.Vector3;
    readonly moveDirection: UnityEngine.Vector3;
    readonly moveLength: number;
    // fields
  }
}
declare namespace UnityEngine {
  class Coroutine extends UnityEngine.YieldInstruction {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class CppBodyAttribute extends System.Attribute {
    // constructors
    constructor(body: string);
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class CppDefineAttribute extends System.Attribute {
    // constructors
    constructor(symbol: string, value: string);
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class CppIncludeAttribute extends System.Attribute {
    // constructors
    constructor(header: string);
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class CppInvokeAttribute extends System.Attribute {
    // constructors
    constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class CppPropertyAttribute extends System.Attribute {
    // constructors
    constructor(getter: string, setter: string);
    constructor(getter: string);
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class CppPropertyBodyAttribute extends System.Attribute {
    // constructors
    constructor(getterBody: string, setterBody: string);
    constructor(getterBody: string);
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class CrashReport extends System.Object {
    // constructors
    protected constructor();
    // methods
    static RemoveAll(): void;
    Remove(): void;
    // properties
    static readonly reports: UnityEngine.CrashReport[];
    static readonly lastReport: UnityEngine.CrashReport;
    // fields
    time: any;
    text: string;
  }
}
declare namespace UnityEngine.CrashReportHandler {
  class CrashReportHandler extends System.Object {
    // constructors
    protected constructor();
    // methods
    // properties
    static enableCaptureExceptions: boolean;
    // fields
  }
}
declare namespace UnityEngine {
  class CreateAssetMenuAttribute extends System.Attribute {
    // constructors
    constructor();
    // methods
    // properties
    menuName: string;
    fileName: string;
    order: number;
    // fields
  }
}
declare namespace UnityEngine {
  class Cubemap extends UnityEngine.Texture {
    // constructors
    constructor(size: number, format: UnityEngine.TextureFormat, mipmap: boolean);
    // methods
    SetPixel(face: UnityEngine.CubemapFace, x: number, y: number, color: UnityEngine.Color): void;
    GetPixel(face: UnityEngine.CubemapFace, x: number, y: number): UnityEngine.Color;
    GetPixels(face: UnityEngine.CubemapFace, miplevel: number): UnityEngine.Color[];
    GetPixels(face: UnityEngine.CubemapFace): UnityEngine.Color[];
    SetPixels(colors: UnityEngine.Color[], face: UnityEngine.CubemapFace, miplevel: number): void;
    SetPixels(colors: UnityEngine.Color[], face: UnityEngine.CubemapFace): void;
    Apply(updateMipmaps: boolean, makeNoLongerReadable: boolean): void;
    Apply(updateMipmaps: boolean): void;
    Apply(): void;
    SmoothEdges(smoothRegionWidthInPixels: number): void;
    SmoothEdges(): void;
    // properties
    readonly mipmapCount: number;
    readonly format: UnityEngine.TextureFormat;
    // fields
  }
}
declare namespace UnityEngine {
  class CubemapArray extends UnityEngine.Texture {
    // constructors
    constructor(faceSize: number, cubemapCount: number, format: UnityEngine.TextureFormat, mipmap: boolean);
    constructor(faceSize: number, cubemapCount: number, format: UnityEngine.TextureFormat, mipmap: boolean, linear: boolean);
    // methods
    Apply(updateMipmaps: boolean, makeNoLongerReadable: boolean): void;
    Apply(updateMipmaps: boolean): void;
    Apply(): void;
    SetPixels(colors: UnityEngine.Color[], face: UnityEngine.CubemapFace, arrayElement: number, miplevel: number): void;
    SetPixels(colors: UnityEngine.Color[], face: UnityEngine.CubemapFace, arrayElement: number): void;
    SetPixels32(colors: UnityEngine.Color32[], face: UnityEngine.CubemapFace, arrayElement: number, miplevel: number): void;
    SetPixels32(colors: UnityEngine.Color32[], face: UnityEngine.CubemapFace, arrayElement: number): void;
    GetPixels(face: UnityEngine.CubemapFace, arrayElement: number, miplevel: number): UnityEngine.Color[];
    GetPixels(face: UnityEngine.CubemapFace, arrayElement: number): UnityEngine.Color[];
    GetPixels32(face: UnityEngine.CubemapFace, arrayElement: number, miplevel: number): UnityEngine.Color32[];
    GetPixels32(face: UnityEngine.CubemapFace, arrayElement: number): UnityEngine.Color32[];
    // properties
    readonly cubemapCount: number;
    readonly format: UnityEngine.TextureFormat;
    // fields
  }
}
declare namespace UnityEngine {
  class CubemapFace extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Unknown: UnityEngine.CubemapFace;
    static PositiveX: UnityEngine.CubemapFace;
    static NegativeX: UnityEngine.CubemapFace;
    static PositiveY: UnityEngine.CubemapFace;
    static NegativeY: UnityEngine.CubemapFace;
    static PositiveZ: UnityEngine.CubemapFace;
    static NegativeZ: UnityEngine.CubemapFace;
  }
}
declare namespace UnityEngine {
  class CullingGroup extends System.Object {
    // constructors
    constructor();
    // methods
    Dispose(): void;
    SetBoundingSpheres(array: UnityEngine.BoundingSphere[]): void;
    SetBoundingSphereCount(count: number): void;
    EraseSwapBack(index: number): void;
    QueryIndices(visible: boolean, result: number[], firstIndex: number): number;
    QueryIndices(distanceIndex: number, result: number[], firstIndex: number): number;
    QueryIndices(visible: boolean, distanceIndex: number, result: number[], firstIndex: number): number;
    IsVisible(index: number): boolean;
    GetDistance(index: number): number;
    SetBoundingDistances(distances: number[]): void;
    SetDistanceReferencePoint(point: UnityEngine.Vector3): void;
    SetDistanceReferencePoint(transform: UnityEngine.Transform): void;
    // properties
    onStateChanged: ((sphere: UnityEngine.CullingGroupEvent) => void);
    enabled: boolean;
    targetCamera: UnityEngine.Camera;
    // fields
  }
}
declare namespace UnityEngine {
  class CullingGroupEvent extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    readonly index: number;
    readonly isVisible: boolean;
    readonly wasVisible: boolean;
    readonly hasBecomeVisible: boolean;
    readonly hasBecomeInvisible: boolean;
    readonly currentDistance: number;
    readonly previousDistance: number;
    // fields
  }
}
declare namespace UnityEngine {
  class CullingQueryOptions extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Normal: UnityEngine.CullingQueryOptions;
    static IgnoreVisibility: UnityEngine.CullingQueryOptions;
    static IgnoreDistance: UnityEngine.CullingQueryOptions;
  }
}
declare namespace UnityEngine {
  class Cursor extends System.Object {
    // constructors
    constructor();
    // methods
    static SetCursor(texture: UnityEngine.Texture2D, hotspot: UnityEngine.Vector2, cursorMode: UnityEngine.CursorMode): void;
    // properties
    static visible: boolean;
    static lockState: UnityEngine.CursorLockMode;
    // fields
  }
}
declare namespace UnityEngine {
  class CursorLockMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static None: UnityEngine.CursorLockMode;
    static Locked: UnityEngine.CursorLockMode;
    static Confined: UnityEngine.CursorLockMode;
  }
}
declare namespace UnityEngine {
  class CursorMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Auto: UnityEngine.CursorMode;
    static ForceSoftware: UnityEngine.CursorMode;
  }
}
declare namespace UnityEngine {
  class CustomYieldInstruction extends System.Object {
    // constructors
    protected constructor();
    // methods
    MoveNext(): boolean;
    Reset(): void;
    // properties
    readonly keepWaiting: boolean;
    readonly Current: any;
    // fields
  }
}
declare namespace UnityEngine {
  class Debug extends System.Object {
    // constructors
    constructor();
    // methods
    static DrawLine(start: UnityEngine.Vector3, end: UnityEngine.Vector3, color: UnityEngine.Color, duration: number, depthTest: boolean): void;
    static DrawLine(start: UnityEngine.Vector3, end: UnityEngine.Vector3, color: UnityEngine.Color, duration: number): void;
    static DrawLine(start: UnityEngine.Vector3, end: UnityEngine.Vector3, color: UnityEngine.Color): void;
    static DrawLine(start: UnityEngine.Vector3, end: UnityEngine.Vector3): void;
    static DrawRay(start: UnityEngine.Vector3, dir: UnityEngine.Vector3, color: UnityEngine.Color, duration: number): void;
    static DrawRay(start: UnityEngine.Vector3, dir: UnityEngine.Vector3, color: UnityEngine.Color): void;
    static DrawRay(start: UnityEngine.Vector3, dir: UnityEngine.Vector3): void;
    static DrawRay(start: UnityEngine.Vector3, dir: UnityEngine.Vector3, color: UnityEngine.Color, duration: number, depthTest: boolean): void;
    static Break(): void;
    static DebugBreak(): void;
    static Log(message: any): void;
    static Log(message: any, context: UnityEngine.Object): void;
    static LogFormat(format: string, args: any[]): void;
    static LogFormat(context: UnityEngine.Object, format: string, args: any[]): void;
    static LogError(message: any): void;
    static LogError(message: any, context: UnityEngine.Object): void;
    static LogErrorFormat(format: string, args: any[]): void;
    static LogErrorFormat(context: UnityEngine.Object, format: string, args: any[]): void;
    static ClearDeveloperConsole(): void;
    static LogException(exception: System.Exception): void;
    static LogException(exception: System.Exception, context: UnityEngine.Object): void;
    static LogWarning(message: any): void;
    static LogWarning(message: any, context: UnityEngine.Object): void;
    static LogWarningFormat(format: string, args: any[]): void;
    static LogWarningFormat(context: UnityEngine.Object, format: string, args: any[]): void;
    static Assert(condition: boolean): void;
    static Assert(condition: boolean, context: UnityEngine.Object): void;
    static Assert(condition: boolean, message: any): void;
    static Assert(condition: boolean, message: string): void;
    static Assert(condition: boolean, message: any, context: UnityEngine.Object): void;
    static Assert(condition: boolean, message: string, context: UnityEngine.Object): void;
    static Assert(condition: boolean, format: string, args: any[]): void;
    static AssertFormat(condition: boolean, format: string, args: any[]): void;
    static AssertFormat(condition: boolean, context: UnityEngine.Object, format: string, args: any[]): void;
    static LogAssertion(message: any): void;
    static LogAssertion(message: any, context: UnityEngine.Object): void;
    static LogAssertionFormat(format: string, args: any[]): void;
    static LogAssertionFormat(context: UnityEngine.Object, format: string, args: any[]): void;
    // properties
    static readonly logger: UnityEngine.ILogger;
    static developerConsoleVisible: boolean;
    static readonly isDebugBuild: boolean;
    // fields
  }
}
declare namespace UnityEngine {
  class DebugLogHandler extends System.Object {
    // constructors
    constructor();
    // methods
    LogFormat(logType: UnityEngine.LogType, context: UnityEngine.Object, format: string, args: any[]): void;
    LogException(exception: System.Exception, context: UnityEngine.Object): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class DefaultExecutionOrder extends System.Attribute {
    // constructors
    constructor(order: number);
    // methods
    // properties
    readonly order: number;
    // fields
  }
}
declare namespace UnityEngine {
  class DelayedAttribute extends UnityEngine.PropertyAttribute {
    // constructors
    constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class DepthTextureMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static None: UnityEngine.DepthTextureMode;
    static Depth: UnityEngine.DepthTextureMode;
    static DepthNormals: UnityEngine.DepthTextureMode;
    static MotionVectors: UnityEngine.DepthTextureMode;
  }
}
declare namespace UnityEngine {
  class DetailPrototype extends System.Object {
    // constructors
    constructor();
    // methods
    // properties
    prototype: UnityEngine.GameObject;
    prototypeTexture: UnityEngine.Texture2D;
    minWidth: number;
    maxWidth: number;
    minHeight: number;
    maxHeight: number;
    noiseSpread: number;
    bendFactor: number;
    healthyColor: UnityEngine.Color;
    dryColor: UnityEngine.Color;
    renderMode: UnityEngine.DetailRenderMode;
    usePrototypeMesh: boolean;
    // fields
  }
}
declare namespace UnityEngine {
  class DetailRenderMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static GrassBillboard: UnityEngine.DetailRenderMode;
    static VertexLit: UnityEngine.DetailRenderMode;
    static Grass: UnityEngine.DetailRenderMode;
  }
}
declare namespace UnityEngine {
  class DeviceOrientation extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Unknown: UnityEngine.DeviceOrientation;
    static Portrait: UnityEngine.DeviceOrientation;
    static PortraitUpsideDown: UnityEngine.DeviceOrientation;
    static LandscapeLeft: UnityEngine.DeviceOrientation;
    static LandscapeRight: UnityEngine.DeviceOrientation;
    static FaceUp: UnityEngine.DeviceOrientation;
    static FaceDown: UnityEngine.DeviceOrientation;
  }
}
declare namespace UnityEngine {
  class DeviceType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Unknown: UnityEngine.DeviceType;
    static Handheld: UnityEngine.DeviceType;
    static Console: UnityEngine.DeviceType;
    static Desktop: UnityEngine.DeviceType;
  }
}
declare namespace UnityEngine.Diagnostics {
  class PlayerConnection extends System.Object {
    // constructors
    protected constructor();
    // methods
    static SendFile(remoteFilePath: string, data: number[]): void;
    // properties
    static readonly connected: boolean;
    // fields
  }
}
declare namespace UnityEngine {
  class DiagnosticSwitch extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    name: string;
    description: string;
    flags: UnityEngine.DiagnosticSwitchFlags;
    value: any;
    minValue: any;
    maxValue: any;
    persistentValue: any;
    enumInfo: UnityEngine.EnumInfo;
  }
}
declare namespace UnityEngine {
  class DiagnosticSwitchFlags extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static None: UnityEngine.DiagnosticSwitchFlags;
    static CanChangeAfterEngineStart: UnityEngine.DiagnosticSwitchFlags;
  }
}
declare namespace UnityEngine {
  class DisableBatchingType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static False: UnityEngine.DisableBatchingType;
    static True: UnityEngine.DisableBatchingType;
    static WhenLODFading: UnityEngine.DisableBatchingType;
  }
}
declare namespace UnityEngine {
  class DisallowMultipleComponent extends System.Attribute {
    // constructors
    constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class Display extends System.Object {
    // constructors
    protected constructor();
    // methods
    Activate(): void;
    Activate(width: number, height: number, refreshRate: number): void;
    SetParams(width: number, height: number, x: number, y: number): void;
    SetRenderingResolution(w: number, h: number): void;
    static MultiDisplayLicense(): boolean;
    static RelativeMouseAt(inputMouseCoordinates: UnityEngine.Vector3): UnityEngine.Vector3;
    // properties
    readonly renderingWidth: number;
    readonly renderingHeight: number;
    readonly systemWidth: number;
    readonly systemHeight: number;
    readonly colorBuffer: UnityEngine.RenderBuffer;
    readonly depthBuffer: UnityEngine.RenderBuffer;
    static readonly main: UnityEngine.Display;
    // fields
    static displays: UnityEngine.Display[];
  }
}
declare namespace UnityEngine {
  class DistanceJoint2D extends UnityEngine.AnchoredJoint2D {
    // constructors
    constructor();
    // methods
    // properties
    autoConfigureDistance: boolean;
    distance: number;
    maxDistanceOnly: boolean;
    // fields
  }
}
declare namespace UnityEngine {
  class DoF extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static BodyDoFStart: UnityEngine.DoF;
    static HeadDoFStart: UnityEngine.DoF;
    static LeftLegDoFStart: UnityEngine.DoF;
    static RightLegDoFStart: UnityEngine.DoF;
    static LeftArmDoFStart: UnityEngine.DoF;
    static RightArmDoFStart: UnityEngine.DoF;
    static LeftThumbDoFStart: UnityEngine.DoF;
    static LeftIndexDoFStart: UnityEngine.DoF;
    static LeftMiddleDoFStart: UnityEngine.DoF;
    static LeftRingDoFStart: UnityEngine.DoF;
    static LeftLittleDoFStart: UnityEngine.DoF;
    static RightThumbDoFStart: UnityEngine.DoF;
    static RightIndexDoFStart: UnityEngine.DoF;
    static RightMiddleDoFStart: UnityEngine.DoF;
    static RightRingDoFStart: UnityEngine.DoF;
    static RightLittleDoFStart: UnityEngine.DoF;
    static LastDoF: UnityEngine.DoF;
  }
}
declare namespace UnityEngine {
  class DrivenRectTransformTracker extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    Add(driver: UnityEngine.Object, rectTransform: UnityEngine.RectTransform, drivenProperties: UnityEngine.DrivenTransformProperties): void;
    Clear(): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class DrivenTransformProperties extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static None: UnityEngine.DrivenTransformProperties;
    static All: UnityEngine.DrivenTransformProperties;
    static AnchoredPositionX: UnityEngine.DrivenTransformProperties;
    static AnchoredPositionY: UnityEngine.DrivenTransformProperties;
    static AnchoredPositionZ: UnityEngine.DrivenTransformProperties;
    static Rotation: UnityEngine.DrivenTransformProperties;
    static ScaleX: UnityEngine.DrivenTransformProperties;
    static ScaleY: UnityEngine.DrivenTransformProperties;
    static ScaleZ: UnityEngine.DrivenTransformProperties;
    static AnchorMinX: UnityEngine.DrivenTransformProperties;
    static AnchorMinY: UnityEngine.DrivenTransformProperties;
    static AnchorMaxX: UnityEngine.DrivenTransformProperties;
    static AnchorMaxY: UnityEngine.DrivenTransformProperties;
    static SizeDeltaX: UnityEngine.DrivenTransformProperties;
    static SizeDeltaY: UnityEngine.DrivenTransformProperties;
    static PivotX: UnityEngine.DrivenTransformProperties;
    static PivotY: UnityEngine.DrivenTransformProperties;
    static AnchoredPosition: UnityEngine.DrivenTransformProperties;
    static AnchoredPosition3D: UnityEngine.DrivenTransformProperties;
    static Scale: UnityEngine.DrivenTransformProperties;
    static AnchorMin: UnityEngine.DrivenTransformProperties;
    static AnchorMax: UnityEngine.DrivenTransformProperties;
    static Anchors: UnityEngine.DrivenTransformProperties;
    static SizeDelta: UnityEngine.DrivenTransformProperties;
    static Pivot: UnityEngine.DrivenTransformProperties;
  }
}
declare namespace UnityEngine {
  class DynamicGI extends System.Object {
    // constructors
    constructor();
    // methods
    static SetEmissive(renderer: UnityEngine.Renderer, color: UnityEngine.Color): void;
    static UpdateMaterials(renderer: UnityEngine.Renderer): void;
    static UpdateMaterials(terrain: UnityEngine.Terrain): void;
    static UpdateMaterials(terrain: UnityEngine.Terrain, x: number, y: number, width: number, height: number): void;
    static UpdateEnvironment(): void;
    // properties
    static indirectScale: number;
    static updateThreshold: number;
    static synchronousMode: boolean;
    // fields
  }
}
declare namespace UnityEngine {
  class EdgeCollider2D extends UnityEngine.Collider2D {
    // constructors
    constructor();
    // methods
    Reset(): void;
    // properties
    readonly edgeCount: number;
    readonly pointCount: number;
    points: UnityEngine.Vector2[];
    // fields
  }
}
declare namespace UnityEngine {
  class Effector2D extends UnityEngine.Behaviour {
    // constructors
    constructor();
    // methods
    // properties
    useColliderMask: boolean;
    colliderMask: number;
    // fields
  }
}
declare namespace UnityEngine {
  class EffectorForceMode2D extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Constant: UnityEngine.EffectorForceMode2D;
    static InverseLinear: UnityEngine.EffectorForceMode2D;
    static InverseSquared: UnityEngine.EffectorForceMode2D;
  }
}
declare namespace UnityEngine {
  class EffectorSelection2D extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Rigidbody: UnityEngine.EffectorSelection2D;
    static Collider: UnityEngine.EffectorSelection2D;
  }
}
declare namespace UnityEngine {
  class EllipsoidParticleEmitter extends UnityEngine.ParticleEmitter {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class EnumInfo extends System.Object {
    // constructors
    constructor();
    // methods
    // properties
    // fields
    names: string[];
    values: number[];
    annotations: string[];
    isFlags: boolean;
    guiNames: UnityEngine.GUIContent[];
  }
}
declare namespace UnityEngine {
  class Event extends System.Object {
    // constructors
    constructor();
    constructor(displayIndex: number);
    constructor(other: UnityEngine.Event);
    // methods
    static KeyboardEvent(key: string): UnityEngine.Event;
    GetHashCode(): number;
    Equals(obj: any): boolean;
    ToString(): string;
    Use(): void;
    GetTypeForControl(controlID: number): UnityEngine.EventType;
    static PopEvent(outEvent: UnityEngine.Event): boolean;
    static GetEventCount(): number;
    // properties
    mousePosition: UnityEngine.Vector2;
    delta: UnityEngine.Vector2;
    mouseRay: UnityEngine.Ray;
    shift: boolean;
    control: boolean;
    alt: boolean;
    command: boolean;
    capsLock: boolean;
    numeric: boolean;
    readonly functionKey: boolean;
    static current: UnityEngine.Event;
    readonly isKey: boolean;
    readonly isMouse: boolean;
    readonly rawType: UnityEngine.EventType;
    type: UnityEngine.EventType;
    button: number;
    modifiers: UnityEngine.EventModifiers;
    pressure: number;
    clickCount: number;
    character: any;
    commandName: string;
    keyCode: UnityEngine.KeyCode;
    displayIndex: number;
    // fields
  }
}
declare namespace UnityEngine {
  class EventModifiers extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static None: UnityEngine.EventModifiers;
    static Shift: UnityEngine.EventModifiers;
    static Control: UnityEngine.EventModifiers;
    static Alt: UnityEngine.EventModifiers;
    static Command: UnityEngine.EventModifiers;
    static Numeric: UnityEngine.EventModifiers;
    static CapsLock: UnityEngine.EventModifiers;
    static FunctionKey: UnityEngine.EventModifiers;
  }
}
declare namespace UnityEngine {
  class EventProvider extends System.Object {
    // constructors
    constructor();
    // methods
    static WriteCustomEvent(value: number, text: string): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine.Events {
  class ArgumentCache extends System.Object {
    // constructors
    constructor();
    // methods
    OnBeforeSerialize(): void;
    OnAfterDeserialize(): void;
    // properties
    unityObjectArgument: UnityEngine.Object;
    readonly unityObjectArgumentAssemblyTypeName: string;
    intArgument: number;
    floatArgument: number;
    stringArgument: string;
    boolArgument: boolean;
    // fields
  }
}
declare namespace UnityEngine.Events {
  class BaseInvokableCall extends System.Object {
    // constructors
    protected constructor();
    // methods
    Invoke(args: any[]): void;
    Find(targetObj: any, method: any): boolean;
    // properties
    // fields
  }
}
declare namespace UnityEngine.Events {
  class InvokableCall extends UnityEngine.Events.BaseInvokableCall {
    // constructors
    constructor(target: any, theFunction: any);
    constructor(action: (() => void));
    // methods
    Invoke(args: any[]): void;
    Find(targetObj: any, method: any): boolean;
    // properties
    // fields
  }
}
declare namespace UnityEngine.Events {
  class InvokableCallList extends System.Object {
    // constructors
    constructor();
    // methods
    AddPersistentInvokableCall(call: UnityEngine.Events.BaseInvokableCall): void;
    AddListener(call: UnityEngine.Events.BaseInvokableCall): void;
    RemoveListener(targetObj: any, method: any): void;
    Clear(): void;
    ClearPersistent(): void;
    Invoke(parameters: any[]): void;
    // properties
    readonly Count: number;
    // fields
  }
}
declare namespace UnityEngine.Events {
  class PersistentCall extends System.Object {
    // constructors
    constructor();
    // methods
    IsValid(): boolean;
    GetRuntimeCall(theEvent: UnityEngine.Events.UnityEventBase): UnityEngine.Events.BaseInvokableCall;
    RegisterPersistentListener(ttarget: UnityEngine.Object, mmethodName: string): void;
    UnregisterPersistentListener(): void;
    // properties
    readonly target: UnityEngine.Object;
    readonly methodName: string;
    mode: UnityEngine.Events.PersistentListenerMode;
    readonly "arguments": UnityEngine.Events.ArgumentCache;
    callState: UnityEngine.Events.UnityEventCallState;
    // fields
  }
}
declare namespace UnityEngine.Events {
  class PersistentCallGroup extends System.Object {
    // constructors
    constructor();
    // methods
    GetListener(index: number): UnityEngine.Events.PersistentCall;
    GetListeners(): any;
    AddListener(): void;
    AddListener(call: UnityEngine.Events.PersistentCall): void;
    RemoveListener(index: number): void;
    Clear(): void;
    RegisterEventPersistentListener(index: number, targetObj: UnityEngine.Object, methodName: string): void;
    RegisterVoidPersistentListener(index: number, targetObj: UnityEngine.Object, methodName: string): void;
    RegisterObjectPersistentListener(index: number, targetObj: UnityEngine.Object, argument: UnityEngine.Object, methodName: string): void;
    RegisterIntPersistentListener(index: number, targetObj: UnityEngine.Object, argument: number, methodName: string): void;
    RegisterFloatPersistentListener(index: number, targetObj: UnityEngine.Object, argument: number, methodName: string): void;
    RegisterStringPersistentListener(index: number, targetObj: UnityEngine.Object, argument: string, methodName: string): void;
    RegisterBoolPersistentListener(index: number, targetObj: UnityEngine.Object, argument: boolean, methodName: string): void;
    UnregisterPersistentListener(index: number): void;
    RemoveListeners(target: UnityEngine.Object, methodName: string): void;
    Initialize(invokableList: UnityEngine.Events.InvokableCallList, unityEventBase: UnityEngine.Events.UnityEventBase): void;
    // properties
    readonly Count: number;
    // fields
  }
}
declare namespace UnityEngine.Events {
  class PersistentListenerMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static EventDefined: UnityEngine.Events.PersistentListenerMode;
    static Void: UnityEngine.Events.PersistentListenerMode;
    static Object: UnityEngine.Events.PersistentListenerMode;
    static Int: UnityEngine.Events.PersistentListenerMode;
    static Float: UnityEngine.Events.PersistentListenerMode;
    static String: UnityEngine.Events.PersistentListenerMode;
    static Bool: UnityEngine.Events.PersistentListenerMode;
  }
}
declare namespace UnityEngine.Events {
  class UnityEvent extends UnityEngine.Events.UnityEventBase {
    // constructors
    constructor();
    // methods
    AddListener(call: (() => void)): void;
    RemoveListener(call: (() => void)): void;
    Invoke(): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine.Events {
  class UnityEventBase extends System.Object {
    // constructors
    protected constructor();
    // methods
    GetPersistentEventCount(): number;
    GetPersistentTarget(index: number): UnityEngine.Object;
    GetPersistentMethodName(index: number): string;
    SetPersistentListenerState(index: number, state: UnityEngine.Events.UnityEventCallState): void;
    RemoveAllListeners(): void;
    ToString(): string;
    static GetValidMethodInfo(obj: any, functionName: string, argumentTypes: any[]): any;
    // properties
    // fields
  }
}
declare namespace UnityEngine.Events {
  class UnityEventCallState extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Off: UnityEngine.Events.UnityEventCallState;
    static EditorAndRuntime: UnityEngine.Events.UnityEventCallState;
    static RuntimeOnly: UnityEngine.Events.UnityEventCallState;
  }
}
declare namespace UnityEngine.EventSystems {
  class AbstractEventData extends System.Object {
    // constructors
    protected constructor();
    // methods
    Reset(): void;
    Use(): void;
    // properties
    readonly used: boolean;
    // fields
  }
}
declare namespace UnityEngine.EventSystems {
  class AxisEventData extends UnityEngine.EventSystems.BaseEventData {
    // constructors
    constructor(eventSystem: UnityEngine.EventSystems.EventSystem);
    // methods
    // properties
    moveVector: UnityEngine.Vector2;
    moveDir: UnityEngine.EventSystems.MoveDirection;
    // fields
  }
}
declare namespace UnityEngine.EventSystems {
  class BaseEventData extends UnityEngine.EventSystems.AbstractEventData {
    // constructors
    constructor(eventSystem: UnityEngine.EventSystems.EventSystem);
    // methods
    // properties
    readonly currentInputModule: UnityEngine.EventSystems.BaseInputModule;
    selectedObject: UnityEngine.GameObject;
    // fields
  }
}
declare namespace UnityEngine.EventSystems {
  class BaseInput extends UnityEngine.EventSystems.UIBehaviour {
    // constructors
    constructor();
    // methods
    GetMouseButtonDown(button: number): boolean;
    GetMouseButtonUp(button: number): boolean;
    GetMouseButton(button: number): boolean;
    GetTouch(index: number): UnityEngine.Touch;
    GetAxisRaw(axisName: string): number;
    GetButtonDown(buttonName: string): boolean;
    // properties
    readonly compositionString: string;
    imeCompositionMode: UnityEngine.IMECompositionMode;
    compositionCursorPos: UnityEngine.Vector2;
    readonly mousePresent: boolean;
    readonly mousePosition: UnityEngine.Vector2;
    readonly mouseScrollDelta: UnityEngine.Vector2;
    readonly touchSupported: boolean;
    readonly touchCount: number;
    // fields
  }
}
declare namespace UnityEngine.EventSystems {
  class BaseInputModule extends UnityEngine.EventSystems.UIBehaviour {
    // constructors
    protected constructor();
    // methods
    Process(): void;
    IsPointerOverGameObject(pointerId: number): boolean;
    ShouldActivateModule(): boolean;
    DeactivateModule(): void;
    ActivateModule(): void;
    UpdateModule(): void;
    IsModuleSupported(): boolean;
    // properties
    readonly input: UnityEngine.EventSystems.BaseInput;
    // fields
  }
}
declare namespace UnityEngine.EventSystems {
  class BaseRaycaster extends UnityEngine.EventSystems.UIBehaviour {
    // constructors
    protected constructor();
    // methods
    Raycast(eventData: UnityEngine.EventSystems.PointerEventData, resultAppendList: UnityEngine.EventSystems.RaycastResult[]): void;
    ToString(): string;
    // properties
    readonly eventCamera: UnityEngine.Camera;
    readonly priority: number;
    readonly sortOrderPriority: number;
    readonly renderOrderPriority: number;
    // fields
  }
}
declare namespace UnityEngine.EventSystems {
  class EventHandle extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Unused: UnityEngine.EventSystems.EventHandle;
    static Used: UnityEngine.EventSystems.EventHandle;
  }
}
declare namespace UnityEngine.EventSystems {
  class EventSystem extends UnityEngine.EventSystems.UIBehaviour {
    // constructors
    protected constructor();
    // methods
    UpdateModules(): void;
    SetSelectedGameObject(selected: UnityEngine.GameObject, pointer: UnityEngine.EventSystems.BaseEventData): void;
    SetSelectedGameObject(selected: UnityEngine.GameObject): void;
    RaycastAll(eventData: UnityEngine.EventSystems.PointerEventData, raycastResults: UnityEngine.EventSystems.RaycastResult[]): void;
    IsPointerOverGameObject(): boolean;
    IsPointerOverGameObject(pointerId: number): boolean;
    ToString(): string;
    // properties
    static current: UnityEngine.EventSystems.EventSystem;
    sendNavigationEvents: boolean;
    pixelDragThreshold: number;
    readonly currentInputModule: UnityEngine.EventSystems.BaseInputModule;
    firstSelectedGameObject: UnityEngine.GameObject;
    readonly currentSelectedGameObject: UnityEngine.GameObject;
    readonly lastSelectedGameObject: UnityEngine.GameObject;
    readonly alreadySelecting: boolean;
    // fields
  }
}
declare namespace UnityEngine.EventSystems {
  class EventTrigger extends UnityEngine.MonoBehaviour {
    // constructors
    protected constructor();
    // methods
    OnPointerEnter(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnPointerExit(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnDrag(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnDrop(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnPointerDown(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnPointerUp(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnPointerClick(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnSelect(eventData: UnityEngine.EventSystems.BaseEventData): void;
    OnDeselect(eventData: UnityEngine.EventSystems.BaseEventData): void;
    OnScroll(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnMove(eventData: UnityEngine.EventSystems.AxisEventData): void;
    OnUpdateSelected(eventData: UnityEngine.EventSystems.BaseEventData): void;
    OnInitializePotentialDrag(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnBeginDrag(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnEndDrag(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnSubmit(eventData: UnityEngine.EventSystems.BaseEventData): void;
    OnCancel(eventData: UnityEngine.EventSystems.BaseEventData): void;
    // properties
    triggers: UnityEngine.EventSystems.EventTrigger.Entry[];
    // fields
    delegates: UnityEngine.EventSystems.EventTrigger.Entry[];
  }
}
declare namespace UnityEngine.EventSystems.EventTrigger {
  class Entry extends System.Object {
    // constructors
    constructor();
    // methods
    // properties
    // fields
    eventID: UnityEngine.EventSystems.EventTriggerType;
    callback: UnityEngine.EventSystems.EventTrigger.TriggerEvent;
  }
}
declare namespace UnityEngine.EventSystems.EventTrigger {
  class TriggerEvent {
    // constructors
    constructor();
    // methods
    AddListener(call: ((arg0: UnityEngine.EventSystems.BaseEventData) => void)): void;
    RemoveListener(call: ((arg0: UnityEngine.EventSystems.BaseEventData) => void)): void;
    Invoke(arg0: UnityEngine.EventSystems.BaseEventData): void;
    GetPersistentEventCount(): number;
    GetPersistentTarget(index: number): UnityEngine.Object;
    GetPersistentMethodName(index: number): string;
    SetPersistentListenerState(index: number, state: UnityEngine.Events.UnityEventCallState): void;
    RemoveAllListeners(): void;
    ToString(): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
  }
}
declare namespace UnityEngine.EventSystems {
  class EventTriggerType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static PointerEnter: UnityEngine.EventSystems.EventTriggerType;
    static PointerExit: UnityEngine.EventSystems.EventTriggerType;
    static PointerDown: UnityEngine.EventSystems.EventTriggerType;
    static PointerUp: UnityEngine.EventSystems.EventTriggerType;
    static PointerClick: UnityEngine.EventSystems.EventTriggerType;
    static Drag: UnityEngine.EventSystems.EventTriggerType;
    static Drop: UnityEngine.EventSystems.EventTriggerType;
    static Scroll: UnityEngine.EventSystems.EventTriggerType;
    static UpdateSelected: UnityEngine.EventSystems.EventTriggerType;
    static Select: UnityEngine.EventSystems.EventTriggerType;
    static Deselect: UnityEngine.EventSystems.EventTriggerType;
    static Move: UnityEngine.EventSystems.EventTriggerType;
    static InitializePotentialDrag: UnityEngine.EventSystems.EventTriggerType;
    static BeginDrag: UnityEngine.EventSystems.EventTriggerType;
    static EndDrag: UnityEngine.EventSystems.EventTriggerType;
    static Submit: UnityEngine.EventSystems.EventTriggerType;
    static Cancel: UnityEngine.EventSystems.EventTriggerType;
  }
}
declare namespace UnityEngine.EventSystems {
  class ExecuteEvents extends System.Object {
    // constructors
    protected constructor();
    // methods
    // properties
    static readonly pointerEnterHandler: ((handler: UnityEngine.EventSystems.IPointerEnterHandler, eventData: UnityEngine.EventSystems.BaseEventData) => void);
    static readonly pointerExitHandler: ((handler: UnityEngine.EventSystems.IPointerExitHandler, eventData: UnityEngine.EventSystems.BaseEventData) => void);
    static readonly pointerDownHandler: ((handler: UnityEngine.EventSystems.IPointerDownHandler, eventData: UnityEngine.EventSystems.BaseEventData) => void);
    static readonly pointerUpHandler: ((handler: UnityEngine.EventSystems.IPointerUpHandler, eventData: UnityEngine.EventSystems.BaseEventData) => void);
    static readonly pointerClickHandler: ((handler: UnityEngine.EventSystems.IPointerClickHandler, eventData: UnityEngine.EventSystems.BaseEventData) => void);
    static readonly initializePotentialDrag: ((handler: UnityEngine.EventSystems.IInitializePotentialDragHandler, eventData: UnityEngine.EventSystems.BaseEventData) => void);
    static readonly beginDragHandler: ((handler: UnityEngine.EventSystems.IBeginDragHandler, eventData: UnityEngine.EventSystems.BaseEventData) => void);
    static readonly dragHandler: ((handler: UnityEngine.EventSystems.IDragHandler, eventData: UnityEngine.EventSystems.BaseEventData) => void);
    static readonly endDragHandler: ((handler: UnityEngine.EventSystems.IEndDragHandler, eventData: UnityEngine.EventSystems.BaseEventData) => void);
    static readonly dropHandler: ((handler: UnityEngine.EventSystems.IDropHandler, eventData: UnityEngine.EventSystems.BaseEventData) => void);
    static readonly scrollHandler: ((handler: UnityEngine.EventSystems.IScrollHandler, eventData: UnityEngine.EventSystems.BaseEventData) => void);
    static readonly updateSelectedHandler: ((handler: UnityEngine.EventSystems.IUpdateSelectedHandler, eventData: UnityEngine.EventSystems.BaseEventData) => void);
    static readonly selectHandler: ((handler: UnityEngine.EventSystems.ISelectHandler, eventData: UnityEngine.EventSystems.BaseEventData) => void);
    static readonly deselectHandler: ((handler: UnityEngine.EventSystems.IDeselectHandler, eventData: UnityEngine.EventSystems.BaseEventData) => void);
    static readonly moveHandler: ((handler: UnityEngine.EventSystems.IMoveHandler, eventData: UnityEngine.EventSystems.BaseEventData) => void);
    static readonly submitHandler: ((handler: UnityEngine.EventSystems.ISubmitHandler, eventData: UnityEngine.EventSystems.BaseEventData) => void);
    static readonly cancelHandler: ((handler: UnityEngine.EventSystems.ICancelHandler, eventData: UnityEngine.EventSystems.BaseEventData) => void);
    // fields
  }
}
declare namespace UnityEngine.EventSystems {
  class IBeginDragHandler {
    // constructors
    protected constructor();
    // methods
    OnBeginDrag(eventData: UnityEngine.EventSystems.PointerEventData): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine.EventSystems {
  class ICancelHandler {
    // constructors
    protected constructor();
    // methods
    OnCancel(eventData: UnityEngine.EventSystems.BaseEventData): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine.EventSystems {
  class IDeselectHandler {
    // constructors
    protected constructor();
    // methods
    OnDeselect(eventData: UnityEngine.EventSystems.BaseEventData): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine.EventSystems {
  class IDragHandler {
    // constructors
    protected constructor();
    // methods
    OnDrag(eventData: UnityEngine.EventSystems.PointerEventData): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine.EventSystems {
  class IDropHandler {
    // constructors
    protected constructor();
    // methods
    OnDrop(eventData: UnityEngine.EventSystems.PointerEventData): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine.EventSystems {
  class IEndDragHandler {
    // constructors
    protected constructor();
    // methods
    OnEndDrag(eventData: UnityEngine.EventSystems.PointerEventData): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine.EventSystems {
  class IEventSystemHandler {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine.EventSystems {
  class IInitializePotentialDragHandler {
    // constructors
    protected constructor();
    // methods
    OnInitializePotentialDrag(eventData: UnityEngine.EventSystems.PointerEventData): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine.EventSystems {
  class IMoveHandler {
    // constructors
    protected constructor();
    // methods
    OnMove(eventData: UnityEngine.EventSystems.AxisEventData): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine.EventSystems {
  class IPointerClickHandler {
    // constructors
    protected constructor();
    // methods
    OnPointerClick(eventData: UnityEngine.EventSystems.PointerEventData): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine.EventSystems {
  class IPointerDownHandler {
    // constructors
    protected constructor();
    // methods
    OnPointerDown(eventData: UnityEngine.EventSystems.PointerEventData): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine.EventSystems {
  class IPointerEnterHandler {
    // constructors
    protected constructor();
    // methods
    OnPointerEnter(eventData: UnityEngine.EventSystems.PointerEventData): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine.EventSystems {
  class IPointerExitHandler {
    // constructors
    protected constructor();
    // methods
    OnPointerExit(eventData: UnityEngine.EventSystems.PointerEventData): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine.EventSystems {
  class IPointerUpHandler {
    // constructors
    protected constructor();
    // methods
    OnPointerUp(eventData: UnityEngine.EventSystems.PointerEventData): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine.EventSystems {
  class IScrollHandler {
    // constructors
    protected constructor();
    // methods
    OnScroll(eventData: UnityEngine.EventSystems.PointerEventData): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine.EventSystems {
  class ISelectHandler {
    // constructors
    protected constructor();
    // methods
    OnSelect(eventData: UnityEngine.EventSystems.BaseEventData): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine.EventSystems {
  class ISubmitHandler {
    // constructors
    protected constructor();
    // methods
    OnSubmit(eventData: UnityEngine.EventSystems.BaseEventData): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine.EventSystems {
  class IUpdateSelectedHandler {
    // constructors
    protected constructor();
    // methods
    OnUpdateSelected(eventData: UnityEngine.EventSystems.BaseEventData): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine.EventSystems {
  class MoveDirection extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Left: UnityEngine.EventSystems.MoveDirection;
    static Up: UnityEngine.EventSystems.MoveDirection;
    static Right: UnityEngine.EventSystems.MoveDirection;
    static Down: UnityEngine.EventSystems.MoveDirection;
    static None: UnityEngine.EventSystems.MoveDirection;
  }
}
declare namespace UnityEngine.EventSystems {
  class Physics2DRaycaster extends UnityEngine.EventSystems.PhysicsRaycaster {
    // constructors
    protected constructor();
    // methods
    Raycast(eventData: UnityEngine.EventSystems.PointerEventData, resultAppendList: UnityEngine.EventSystems.RaycastResult[]): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine.EventSystems {
  class PhysicsRaycaster extends UnityEngine.EventSystems.BaseRaycaster {
    // constructors
    protected constructor();
    // methods
    Raycast(eventData: UnityEngine.EventSystems.PointerEventData, resultAppendList: UnityEngine.EventSystems.RaycastResult[]): void;
    // properties
    readonly eventCamera: UnityEngine.Camera;
    readonly depth: number;
    readonly finalEventMask: number;
    eventMask: UnityEngine.LayerMask;
    // fields
  }
}
declare namespace UnityEngine.EventSystems {
  class PointerEventData extends UnityEngine.EventSystems.BaseEventData {
    // constructors
    constructor(eventSystem: UnityEngine.EventSystems.EventSystem);
    // methods
    IsPointerMoving(): boolean;
    IsScrolling(): boolean;
    ToString(): string;
    // properties
    pointerEnter: UnityEngine.GameObject;
    readonly lastPress: UnityEngine.GameObject;
    rawPointerPress: UnityEngine.GameObject;
    pointerDrag: UnityEngine.GameObject;
    pointerCurrentRaycast: UnityEngine.EventSystems.RaycastResult;
    pointerPressRaycast: UnityEngine.EventSystems.RaycastResult;
    eligibleForClick: boolean;
    pointerId: number;
    position: UnityEngine.Vector2;
    delta: UnityEngine.Vector2;
    pressPosition: UnityEngine.Vector2;
    worldPosition: UnityEngine.Vector3;
    worldNormal: UnityEngine.Vector3;
    clickTime: number;
    clickCount: number;
    scrollDelta: UnityEngine.Vector2;
    useDragThreshold: boolean;
    dragging: boolean;
    button: UnityEngine.EventSystems.PointerEventData.InputButton;
    readonly enterEventCamera: UnityEngine.Camera;
    readonly pressEventCamera: UnityEngine.Camera;
    pointerPress: UnityEngine.GameObject;
    // fields
    hovered: UnityEngine.GameObject[];
  }
}
declare namespace UnityEngine.EventSystems.PointerEventData {
  class FramePressState extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Pressed: UnityEngine.EventSystems.PointerEventData.FramePressState;
    static Released: UnityEngine.EventSystems.PointerEventData.FramePressState;
    static PressedAndReleased: UnityEngine.EventSystems.PointerEventData.FramePressState;
    static NotChanged: UnityEngine.EventSystems.PointerEventData.FramePressState;
  }
}
declare namespace UnityEngine.EventSystems.PointerEventData {
  class InputButton extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Left: UnityEngine.EventSystems.PointerEventData.InputButton;
    static Right: UnityEngine.EventSystems.PointerEventData.InputButton;
    static Middle: UnityEngine.EventSystems.PointerEventData.InputButton;
  }
}
declare namespace UnityEngine.EventSystems.PointerInputModule {
  class ButtonState extends System.Object {
    // constructors
    constructor();
    // methods
    // properties
    eventData: UnityEngine.EventSystems.PointerInputModule.MouseButtonEventData;
    button: UnityEngine.EventSystems.PointerEventData.InputButton;
    // fields
  }
}
declare namespace UnityEngine.EventSystems {
  class PointerInputModule extends UnityEngine.EventSystems.BaseInputModule {
    // constructors
    protected constructor();
    // methods
    IsPointerOverGameObject(pointerId: number): boolean;
    ToString(): string;
    // properties
    // fields
    static kMouseLeftId: number;
    static kMouseRightId: number;
    static kMouseMiddleId: number;
    static kFakeTouchesId: number;
  }
}
declare namespace UnityEngine.EventSystems.PointerInputModule {
  class MouseButtonEventData extends System.Object {
    // constructors
    constructor();
    // methods
    PressedThisFrame(): boolean;
    ReleasedThisFrame(): boolean;
    // properties
    // fields
    buttonState: UnityEngine.EventSystems.PointerEventData.FramePressState;
    buttonData: UnityEngine.EventSystems.PointerEventData;
  }
}
declare namespace UnityEngine.EventSystems.PointerInputModule {
  class MouseState extends System.Object {
    // constructors
    constructor();
    // methods
    AnyPressesThisFrame(): boolean;
    AnyReleasesThisFrame(): boolean;
    GetButtonState(button: UnityEngine.EventSystems.PointerEventData.InputButton): UnityEngine.EventSystems.PointerInputModule.ButtonState;
    SetButtonState(button: UnityEngine.EventSystems.PointerEventData.InputButton, stateForMouseButton: UnityEngine.EventSystems.PointerEventData.FramePressState, data: UnityEngine.EventSystems.PointerEventData): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine.EventSystems {
  class RaycasterManager extends System.Object {
    // constructors
    protected constructor();
    // methods
    static AddRaycaster(baseRaycaster: UnityEngine.EventSystems.BaseRaycaster): void;
    static GetRaycasters(): UnityEngine.EventSystems.BaseRaycaster[];
    static RemoveRaycasters(baseRaycaster: UnityEngine.EventSystems.BaseRaycaster): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine.EventSystems {
  class RaycastResult extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    Clear(): void;
    ToString(): string;
    // properties
    gameObject: UnityEngine.GameObject;
    readonly isValid: boolean;
    // fields
    module: UnityEngine.EventSystems.BaseRaycaster;
    distance: number;
    index: number;
    depth: number;
    sortingLayer: number;
    sortingOrder: number;
    worldPosition: UnityEngine.Vector3;
    worldNormal: UnityEngine.Vector3;
    screenPosition: UnityEngine.Vector2;
  }
}
declare namespace UnityEngine.EventSystems {
  class StandaloneInputModule extends UnityEngine.EventSystems.PointerInputModule {
    // constructors
    protected constructor();
    // methods
    UpdateModule(): void;
    IsModuleSupported(): boolean;
    ShouldActivateModule(): boolean;
    ActivateModule(): void;
    DeactivateModule(): void;
    Process(): void;
    // properties
    readonly inputMode: UnityEngine.EventSystems.StandaloneInputModule.InputMode;
    allowActivationOnMobileDevice: boolean;
    forceModuleActive: boolean;
    inputActionsPerSecond: number;
    repeatDelay: number;
    horizontalAxis: string;
    verticalAxis: string;
    submitButton: string;
    cancelButton: string;
    // fields
  }
}
declare namespace UnityEngine.EventSystems.StandaloneInputModule {
  class InputMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Mouse: UnityEngine.EventSystems.StandaloneInputModule.InputMode;
    static Buttons: UnityEngine.EventSystems.StandaloneInputModule.InputMode;
  }
}
declare namespace UnityEngine.EventSystems {
  class TouchInputModule extends UnityEngine.EventSystems.PointerInputModule {
    // constructors
    protected constructor();
    // methods
    UpdateModule(): void;
    IsModuleSupported(): boolean;
    ShouldActivateModule(): boolean;
    Process(): void;
    DeactivateModule(): void;
    ToString(): string;
    // properties
    allowActivationOnStandalone: boolean;
    forceModuleActive: boolean;
    // fields
  }
}
declare namespace UnityEngine.EventSystems {
  class UIBehaviour extends UnityEngine.MonoBehaviour {
    // constructors
    protected constructor();
    // methods
    IsActive(): boolean;
    IsDestroyed(): boolean;
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class EventType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static MouseDown: UnityEngine.EventType;
    static MouseUp: UnityEngine.EventType;
    static MouseMove: UnityEngine.EventType;
    static MouseDrag: UnityEngine.EventType;
    static KeyDown: UnityEngine.EventType;
    static KeyUp: UnityEngine.EventType;
    static ScrollWheel: UnityEngine.EventType;
    static Repaint: UnityEngine.EventType;
    static Layout: UnityEngine.EventType;
    static DragUpdated: UnityEngine.EventType;
    static DragPerform: UnityEngine.EventType;
    static DragExited: UnityEngine.EventType;
    static Ignore: UnityEngine.EventType;
    static Used: UnityEngine.EventType;
    static ValidateCommand: UnityEngine.EventType;
    static ExecuteCommand: UnityEngine.EventType;
    static ContextClick: UnityEngine.EventType;
    static mouseDown: UnityEngine.EventType;
    static mouseUp: UnityEngine.EventType;
    static mouseMove: UnityEngine.EventType;
    static mouseDrag: UnityEngine.EventType;
    static keyDown: UnityEngine.EventType;
    static keyUp: UnityEngine.EventType;
    static scrollWheel: UnityEngine.EventType;
    static repaint: UnityEngine.EventType;
    static layout: UnityEngine.EventType;
    static dragUpdated: UnityEngine.EventType;
    static dragPerform: UnityEngine.EventType;
    static ignore: UnityEngine.EventType;
    static used: UnityEngine.EventType;
  }
}
declare namespace UnityEngine {
  class ExecuteInEditMode extends System.Attribute {
    // constructors
    constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class ExitGUIException extends System.Exception {
    // constructors
    constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine.Experimental.Director {
  class AnimationClipPlayable extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    static Create(clip: UnityEngine.AnimationClip): UnityEngine.Experimental.Director.AnimationClipPlayable;
    Destroy(): void;
    Equals(p: any): boolean;
    GetHashCode(): number;
    IsValid(): boolean;
    GetOutput(outputPort: number): UnityEngine.Experimental.Director.Playable;
    // properties
    state: UnityEngine.Experimental.Director.PlayState;
    time: number;
    duration: number;
    readonly outputCount: number;
    readonly clip: UnityEngine.AnimationClip;
    speed: number;
    applyFootIK: boolean;
    // fields
  }
}
declare namespace UnityEngine.Experimental.Director {
  class AnimationLayerMixerPlayable extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    static Create(): UnityEngine.Experimental.Director.AnimationLayerMixerPlayable;
    Destroy(): void;
    Equals(p: any): boolean;
    GetHashCode(): number;
    IsValid(): boolean;
    GetInput(inputPort: number): UnityEngine.Experimental.Director.Playable;
    GetOutput(outputPort: number): UnityEngine.Experimental.Director.Playable;
    GetInputWeight(index: number): number;
    SetInputWeight(inputIndex: number, weight: number): void;
    AddInput(input: UnityEngine.Experimental.Director.Playable): number;
    SetInput(source: UnityEngine.Experimental.Director.Playable, index: number): boolean;
    SetInputs(sources: any): boolean;
    RemoveInput(index: number): boolean;
    RemoveAllInputs(): boolean;
    // properties
    readonly inputCount: number;
    readonly outputCount: number;
    state: UnityEngine.Experimental.Director.PlayState;
    time: number;
    duration: number;
    // fields
  }
}
declare namespace UnityEngine.Experimental.Director {
  class AnimationMixerPlayable extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    static Create(): UnityEngine.Experimental.Director.AnimationMixerPlayable;
    Destroy(): void;
    GetInput(inputPort: number): UnityEngine.Experimental.Director.Playable;
    GetOutput(outputPort: number): UnityEngine.Experimental.Director.Playable;
    SetInputs(clips: UnityEngine.AnimationClip[]): boolean;
    SetInputs(sources: any): boolean;
    GetInputWeight(index: number): number;
    SetInputWeight(inputIndex: number, weight: number): void;
    Equals(p: any): boolean;
    GetHashCode(): number;
    IsValid(): boolean;
    AddInput(input: UnityEngine.Experimental.Director.Playable): number;
    SetInput(source: UnityEngine.Experimental.Director.Playable, index: number): boolean;
    RemoveInput(index: number): boolean;
    RemoveAllInputs(): boolean;
    // properties
    readonly inputCount: number;
    readonly outputCount: number;
    state: UnityEngine.Experimental.Director.PlayState;
    time: number;
    duration: number;
    // fields
  }
}
declare namespace UnityEngine.Experimental.Director {
  class AnimationOffsetPlayable extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    static Create(): UnityEngine.Experimental.Director.AnimationOffsetPlayable;
    Destroy(): void;
    GetInput(inputPort: number): UnityEngine.Experimental.Director.Playable;
    GetOutput(outputPort: number): UnityEngine.Experimental.Director.Playable;
    GetInputWeight(index: number): number;
    SetInputWeight(inputIndex: number, weight: number): void;
    Equals(p: any): boolean;
    GetHashCode(): number;
    IsValid(): boolean;
    AddInput(input: UnityEngine.Experimental.Director.Playable): number;
    RemoveInput(index: number): boolean;
    RemoveAllInputs(): boolean;
    // properties
    readonly inputCount: number;
    readonly outputCount: number;
    state: UnityEngine.Experimental.Director.PlayState;
    time: number;
    duration: number;
    position: UnityEngine.Vector3;
    rotation: UnityEngine.Quaternion;
    // fields
  }
}
declare namespace UnityEngine.Experimental.Director {
  class AnimationPlayable extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    Destroy(): void;
    AddInput(input: UnityEngine.Experimental.Director.Playable): number;
    SetInput(source: UnityEngine.Experimental.Director.Playable, index: number): boolean;
    SetInputs(sources: any): boolean;
    RemoveInput(index: number): boolean;
    RemoveInput(playable: UnityEngine.Experimental.Director.Playable): boolean;
    RemoveAllInputs(): boolean;
    Equals(p: any): boolean;
    GetHashCode(): number;
    IsValid(): boolean;
    GetInput(inputPort: number): UnityEngine.Experimental.Director.Playable;
    GetOutput(outputPort: number): UnityEngine.Experimental.Director.Playable;
    GetInputWeight(index: number): number;
    SetInputWeight(inputIndex: number, weight: number): void;
    // properties
    static readonly Null: UnityEngine.Experimental.Director.AnimationPlayable;
    readonly inputCount: number;
    readonly outputCount: number;
    state: UnityEngine.Experimental.Director.PlayState;
    time: number;
    duration: number;
    // fields
  }
}
declare namespace UnityEngine.Experimental.Director {
  class AnimationPlayableUtilities extends System.Object {
    // constructors
    constructor();
    // methods
    // properties
    static readonly Null: UnityEngine.Experimental.Director.AnimationPlayable;
    // fields
  }
}
declare namespace UnityEngine.Experimental.Director {
  class AnimatorControllerPlayable extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    static Create(controller: UnityEngine.RuntimeAnimatorController): UnityEngine.Experimental.Director.AnimatorControllerPlayable;
    Destroy(): void;
    GetFloat(name: string): number;
    GetFloat(id: number): number;
    SetFloat(name: string, value: number): void;
    SetFloat(id: number, value: number): void;
    GetBool(name: string): boolean;
    GetBool(id: number): boolean;
    SetBool(name: string, value: boolean): void;
    SetBool(id: number, value: boolean): void;
    GetInteger(name: string): number;
    GetInteger(id: number): number;
    SetInteger(name: string, value: number): void;
    SetInteger(id: number, value: number): void;
    SetTrigger(name: string): void;
    SetTrigger(id: number): void;
    ResetTrigger(name: string): void;
    ResetTrigger(id: number): void;
    IsParameterControlledByCurve(name: string): boolean;
    IsParameterControlledByCurve(id: number): boolean;
    GetLayerName(layerIndex: number): string;
    GetLayerIndex(layerName: string): number;
    GetLayerWeight(layerIndex: number): number;
    SetLayerWeight(layerIndex: number, weight: number): void;
    GetCurrentAnimatorStateInfo(layerIndex: number): UnityEngine.AnimatorStateInfo;
    GetNextAnimatorStateInfo(layerIndex: number): UnityEngine.AnimatorStateInfo;
    GetAnimatorTransitionInfo(layerIndex: number): UnityEngine.AnimatorTransitionInfo;
    GetCurrentAnimatorClipInfo(layerIndex: number): UnityEngine.AnimatorClipInfo[];
    GetCurrentAnimatorClipInfo(layerIndex: number, clips: UnityEngine.AnimatorClipInfo[]): void;
    GetNextAnimatorClipInfo(layerIndex: number, clips: UnityEngine.AnimatorClipInfo[]): void;
    GetNextAnimatorClipInfo(layerIndex: number): UnityEngine.AnimatorClipInfo[];
    GetCurrentAnimatorClipInfoCount(layerIndex: number): number;
    GetNextAnimatorClipInfoCount(layerIndex: number): number;
    IsInTransition(layerIndex: number): boolean;
    GetParameter(index: number): UnityEngine.AnimatorControllerParameter;
    CrossFadeInFixedTime(stateName: string, transitionDuration: number, layer: number): void;
    CrossFadeInFixedTime(stateName: string, transitionDuration: number): void;
    CrossFadeInFixedTime(stateName: string, transitionDuration: number, layer: number, fixedTime: number): void;
    CrossFadeInFixedTime(stateNameHash: number, transitionDuration: number, layer: number): void;
    CrossFadeInFixedTime(stateNameHash: number, transitionDuration: number): void;
    CrossFadeInFixedTime(stateNameHash: number, transitionDuration: number, layer: number, fixedTime: number): void;
    CrossFade(stateName: string, transitionDuration: number, layer: number): void;
    CrossFade(stateName: string, transitionDuration: number): void;
    CrossFade(stateName: string, transitionDuration: number, layer: number, normalizedTime: number): void;
    CrossFade(stateNameHash: number, transitionDuration: number, layer: number): void;
    CrossFade(stateNameHash: number, transitionDuration: number): void;
    CrossFade(stateNameHash: number, transitionDuration: number, layer: number, normalizedTime: number): void;
    PlayInFixedTime(stateName: string, layer: number): void;
    PlayInFixedTime(stateName: string): void;
    PlayInFixedTime(stateName: string, layer: number, fixedTime: number): void;
    PlayInFixedTime(stateNameHash: number, layer: number): void;
    PlayInFixedTime(stateNameHash: number): void;
    PlayInFixedTime(stateNameHash: number, layer: number, fixedTime: number): void;
    Play(stateName: string, layer: number): void;
    Play(stateName: string): void;
    Play(stateName: string, layer: number, normalizedTime: number): void;
    Play(stateNameHash: number, layer: number): void;
    Play(stateNameHash: number): void;
    Play(stateNameHash: number, layer: number, normalizedTime: number): void;
    HasState(layerIndex: number, stateID: number): boolean;
    IsValid(): boolean;
    Equals(p: any): boolean;
    GetHashCode(): number;
    // properties
    readonly animatorController: UnityEngine.RuntimeAnimatorController;
    readonly layerCount: number;
    readonly parameterCount: number;
    state: UnityEngine.Experimental.Director.PlayState;
    time: number;
    duration: number;
    // fields
  }
}
declare namespace UnityEngine.Experimental.Director {
  class CustomAnimationPlayable extends UnityEngine.Experimental.Director.ScriptPlayable {
    // constructors
    constructor();
    // methods
    Destroy(): void;
    PrepareFrame(info: UnityEngine.Experimental.Director.FrameData): void;
    OnSetTime(localTime: number): void;
    OnSetPlayState(newState: UnityEngine.Experimental.Director.PlayState): void;
    GetInput(inputPort: number): UnityEngine.Experimental.Director.Playable;
    GetOutput(outputPort: number): UnityEngine.Experimental.Director.Playable;
    GetInputWeight(index: number): number;
    SetInputWeight(inputIndex: number, weight: number): void;
    AddInput(input: UnityEngine.Experimental.Director.Playable): number;
    SetInput(source: UnityEngine.Experimental.Director.Playable, index: number): boolean;
    SetInputs(sources: any): boolean;
    RemoveInput(index: number): boolean;
    RemoveAllInputs(): boolean;
    // properties
    readonly inputCount: number;
    readonly outputCount: number;
    state: UnityEngine.Experimental.Director.PlayState;
    time: number;
    duration: number;
    // fields
  }
}
declare namespace UnityEngine.Experimental.Director {
  class DirectorPlayer extends UnityEngine.Behaviour {
    // constructors
    constructor();
    // methods
    Play(pStruct: UnityEngine.Experimental.Director.Playable): void;
    Stop(): void;
    SetTime(time: number): void;
    GetTime(): number;
    SetTimeUpdateMode(mode: UnityEngine.Experimental.Director.DirectorUpdateMode): void;
    GetTimeUpdateMode(): UnityEngine.Experimental.Director.DirectorUpdateMode;
    // properties
    // fields
  }
}
declare namespace UnityEngine.Experimental.Director {
  class DirectorUpdateMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static DSPClock: UnityEngine.Experimental.Director.DirectorUpdateMode;
    static GameTime: UnityEngine.Experimental.Director.DirectorUpdateMode;
    static UnscaledGameTime: UnityEngine.Experimental.Director.DirectorUpdateMode;
    static Manual: UnityEngine.Experimental.Director.DirectorUpdateMode;
  }
}
declare namespace UnityEngine.Experimental.Director {
  class FrameData extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    readonly updateId: number;
    readonly time: number;
    readonly lastTime: number;
    readonly deltaTime: number;
    readonly timeScale: number;
    readonly dTime: number;
    readonly dLastTime: number;
    readonly dDeltaTime: number;
    readonly dtimeScale: number;
    // fields
  }
}
declare namespace UnityEngine.Experimental.Director {
  class GenericMixerPlayable extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    static Create(): UnityEngine.Experimental.Director.GenericMixerPlayable;
    Destroy(): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine.Experimental.Director {
  class IAnimatorControllerPlayable {
    // constructors
    protected constructor();
    // methods
    GetFloat(name: string): number;
    GetFloat(id: number): number;
    SetFloat(name: string, value: number): void;
    SetFloat(id: number, value: number): void;
    GetBool(name: string): boolean;
    GetBool(id: number): boolean;
    SetBool(name: string, value: boolean): void;
    SetBool(id: number, value: boolean): void;
    GetInteger(name: string): number;
    GetInteger(id: number): number;
    SetInteger(name: string, value: number): void;
    SetInteger(id: number, value: number): void;
    SetTrigger(name: string): void;
    SetTrigger(id: number): void;
    ResetTrigger(name: string): void;
    ResetTrigger(id: number): void;
    IsParameterControlledByCurve(name: string): boolean;
    IsParameterControlledByCurve(id: number): boolean;
    GetLayerName(layerIndex: number): string;
    GetLayerIndex(layerName: string): number;
    GetLayerWeight(layerIndex: number): number;
    SetLayerWeight(layerIndex: number, weight: number): void;
    GetCurrentAnimatorStateInfo(layerIndex: number): UnityEngine.AnimatorStateInfo;
    GetNextAnimatorStateInfo(layerIndex: number): UnityEngine.AnimatorStateInfo;
    GetAnimatorTransitionInfo(layerIndex: number): UnityEngine.AnimatorTransitionInfo;
    GetCurrentAnimatorClipInfo(layerIndex: number): UnityEngine.AnimatorClipInfo[];
    GetCurrentAnimatorClipInfo(layerIndex: number, clips: UnityEngine.AnimatorClipInfo[]): void;
    GetNextAnimatorClipInfo(layerIndex: number): UnityEngine.AnimatorClipInfo[];
    GetNextAnimatorClipInfo(layerIndex: number, clips: UnityEngine.AnimatorClipInfo[]): void;
    GetCurrentAnimatorClipInfoCount(layerIndex: number): number;
    GetNextAnimatorClipInfoCount(layerIndex: number): number;
    IsInTransition(layerIndex: number): boolean;
    GetParameter(index: number): UnityEngine.AnimatorControllerParameter;
    CrossFadeInFixedTime(stateName: string, transitionDuration: number, layer: number, fixedTime: number): void;
    CrossFadeInFixedTime(stateNameHash: number, transitionDuration: number, layer: number, fixedTime: number): void;
    CrossFade(stateName: string, transitionDuration: number, layer: number, normalizedTime: number): void;
    CrossFade(stateNameHash: number, transitionDuration: number, layer: number, normalizedTime: number): void;
    PlayInFixedTime(stateName: string, layer: number, fixedTime: number): void;
    PlayInFixedTime(stateNameHash: number, layer: number, fixedTime: number): void;
    Play(stateName: string, layer: number, normalizedTime: number): void;
    Play(stateNameHash: number, layer: number, normalizedTime: number): void;
    HasState(layerIndex: number, stateID: number): boolean;
    // properties
    readonly layerCount: number;
    readonly parameterCount: number;
    // fields
  }
}
declare namespace UnityEngine.Experimental.Director {
  class Playable extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    Destroy(): void;
    IsValid(): boolean;
    static GetTypeOf(playable: UnityEngine.Experimental.Director.Playable): any;
    static Connect(source: UnityEngine.Experimental.Director.Playable, target: UnityEngine.Experimental.Director.Playable): boolean;
    static Connect(source: UnityEngine.Experimental.Director.Playable, target: UnityEngine.Experimental.Director.Playable, sourceOutputPort: number, targetInputPort: number): boolean;
    static Disconnect(target: UnityEngine.Experimental.Director.Playable, inputPort: number): void;
    GetInputs(): UnityEngine.Experimental.Director.Playable[];
    GetInput(inputPort: number): UnityEngine.Experimental.Director.Playable;
    GetOutputs(): UnityEngine.Experimental.Director.Playable[];
    GetOutput(outputPort: number): UnityEngine.Experimental.Director.Playable;
    SetInputWeight(input: UnityEngine.Experimental.Director.Playable, weight: number): void;
    SetInputWeight(inputIndex: number, weight: number): boolean;
    GetInputWeight(index: number): number;
    Equals(p: any): boolean;
    GetHashCode(): number;
    // properties
    static readonly Null: UnityEngine.Experimental.Director.Playable;
    readonly inputCount: number;
    readonly outputCount: number;
    state: UnityEngine.Experimental.Director.PlayState;
    time: number;
    duration: number;
    // fields
  }
}
declare namespace UnityEngine.Experimental.Director {
  class Playables extends System.Object {
    // constructors
    constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine.Experimental.Director {
  class PlayState extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Paused: UnityEngine.Experimental.Director.PlayState;
    static Playing: UnityEngine.Experimental.Director.PlayState;
  }
}
declare namespace UnityEngine.Experimental.Director {
  class ScriptPlayable extends System.Object {
    // constructors
    constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class FFTWindow extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Rectangular: UnityEngine.FFTWindow;
    static Triangle: UnityEngine.FFTWindow;
    static Hamming: UnityEngine.FFTWindow;
    static Hanning: UnityEngine.FFTWindow;
    static Blackman: UnityEngine.FFTWindow;
    static BlackmanHarris: UnityEngine.FFTWindow;
  }
}
declare namespace UnityEngine {
  class FilterMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Point: UnityEngine.FilterMode;
    static Bilinear: UnityEngine.FilterMode;
    static Trilinear: UnityEngine.FilterMode;
  }
}
declare namespace UnityEngine {
  class FingerDoF extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static ProximalDownUp: UnityEngine.FingerDoF;
    static ProximalInOut: UnityEngine.FingerDoF;
    static IntermediateCloseOpen: UnityEngine.FingerDoF;
    static DistalCloseOpen: UnityEngine.FingerDoF;
    static LastFingerDoF: UnityEngine.FingerDoF;
  }
}
declare namespace UnityEngine {
  class FixedJoint extends UnityEngine.Joint {
    // constructors
    constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class FixedJoint2D extends UnityEngine.AnchoredJoint2D {
    // constructors
    constructor();
    // methods
    // properties
    dampingRatio: number;
    frequency: number;
    readonly referenceAngle: number;
    // fields
  }
}
declare namespace UnityEngine {
  class Flare extends UnityEngine.Object {
    // constructors
    constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class FlareLayer extends UnityEngine.Behaviour {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class FocusType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Native: UnityEngine.FocusType;
    static Keyboard: UnityEngine.FocusType;
    static Passive: UnityEngine.FocusType;
  }
}
declare namespace UnityEngine {
  class FogMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Linear: UnityEngine.FogMode;
    static Exponential: UnityEngine.FogMode;
    static ExponentialSquared: UnityEngine.FogMode;
  }
}
declare namespace UnityEngine {
  class Font extends UnityEngine.Object {
    // constructors
    constructor();
    constructor(name: string);
    // methods
    static GetOSInstalledFontNames(): string[];
    static CreateDynamicFontFromOSFont(fontname: string, size: number): UnityEngine.Font;
    static CreateDynamicFontFromOSFont(fontnames: string[], size: number): UnityEngine.Font;
    HasCharacter(c: any): boolean;
    RequestCharactersInTexture(characters: string, size: number, style: UnityEngine.FontStyle): void;
    RequestCharactersInTexture(characters: string, size: number): void;
    RequestCharactersInTexture(characters: string): void;
    static GetMaxVertsForString(str: string): number;
    GetCharacterInfo(ch: any, info: any, size: number, style: UnityEngine.FontStyle): boolean;
    GetCharacterInfo(ch: any, info: any, size: number): boolean;
    GetCharacterInfo(ch: any, info: any): boolean;
    // properties
    material: UnityEngine.Material;
    fontNames: string[];
    characterInfo: UnityEngine.CharacterInfo[];
    textureRebuildCallback: (() => void);
    readonly dynamic: boolean;
    readonly ascent: number;
    readonly lineHeight: number;
    readonly fontSize: number;
    // fields
  }
}
declare namespace UnityEngine {
  class FontStyle extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Normal: UnityEngine.FontStyle;
    static Bold: UnityEngine.FontStyle;
    static Italic: UnityEngine.FontStyle;
    static BoldAndItalic: UnityEngine.FontStyle;
  }
}
declare namespace UnityEngine {
  class ForceMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Force: UnityEngine.ForceMode;
    static Acceleration: UnityEngine.ForceMode;
    static Impulse: UnityEngine.ForceMode;
    static VelocityChange: UnityEngine.ForceMode;
  }
}
declare namespace UnityEngine {
  class ForceMode2D extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Force: UnityEngine.ForceMode2D;
    static Impulse: UnityEngine.ForceMode2D;
  }
}
declare namespace UnityEngine {
  class FrictionJoint2D extends UnityEngine.AnchoredJoint2D {
    // constructors
    constructor();
    // methods
    // properties
    maxForce: number;
    maxTorque: number;
    // fields
  }
}
declare namespace UnityEngine {
  class FullScreenMovieControlMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Full: UnityEngine.FullScreenMovieControlMode;
    static Minimal: UnityEngine.FullScreenMovieControlMode;
    static CancelOnInput: UnityEngine.FullScreenMovieControlMode;
    static Hidden: UnityEngine.FullScreenMovieControlMode;
  }
}
declare namespace UnityEngine {
  class FullScreenMovieScalingMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static None: UnityEngine.FullScreenMovieScalingMode;
    static AspectFit: UnityEngine.FullScreenMovieScalingMode;
    static AspectFill: UnityEngine.FullScreenMovieScalingMode;
    static Fill: UnityEngine.FullScreenMovieScalingMode;
  }
}
declare namespace UnityEngine {
  class GameObject extends UnityEngine.Object {
    // constructors
    constructor(name: string);
    constructor();
    constructor(name: string, components: any[]);
    // methods
    static CreatePrimitive(type: UnityEngine.PrimitiveType): UnityEngine.GameObject;
    GetComponent(type: any): UnityEngine.Component;
    GetComponent(type: string): UnityEngine.Component;
    GetComponentInChildren(type: any, includeInactive: boolean): UnityEngine.Component;
    GetComponentInChildren(type: any): UnityEngine.Component;
    GetComponentInParent(type: any): UnityEngine.Component;
    GetComponents(type: any): UnityEngine.Component[];
    GetComponents(type: any, results: UnityEngine.Component[]): void;
    GetComponentsInChildren(type: any): UnityEngine.Component[];
    GetComponentsInChildren(type: any, includeInactive: boolean): UnityEngine.Component[];
    GetComponentsInParent(type: any): UnityEngine.Component[];
    GetComponentsInParent(type: any, includeInactive: boolean): UnityEngine.Component[];
    SetActive(value: boolean): void;
    SetActiveRecursively(state: boolean): void;
    CompareTag(tag: string): boolean;
    static FindGameObjectWithTag(tag: string): UnityEngine.GameObject;
    static FindWithTag(tag: string): UnityEngine.GameObject;
    static FindGameObjectsWithTag(tag: string): UnityEngine.GameObject[];
    SendMessageUpwards(methodName: string, value: any, options: UnityEngine.SendMessageOptions): void;
    SendMessageUpwards(methodName: string, value: any): void;
    SendMessageUpwards(methodName: string): void;
    SendMessageUpwards(methodName: string, options: UnityEngine.SendMessageOptions): void;
    SendMessage(methodName: string, value: any, options: UnityEngine.SendMessageOptions): void;
    SendMessage(methodName: string, value: any): void;
    SendMessage(methodName: string): void;
    SendMessage(methodName: string, options: UnityEngine.SendMessageOptions): void;
    BroadcastMessage(methodName: string, parameter: any, options: UnityEngine.SendMessageOptions): void;
    BroadcastMessage(methodName: string, parameter: any): void;
    BroadcastMessage(methodName: string): void;
    BroadcastMessage(methodName: string, options: UnityEngine.SendMessageOptions): void;
    AddComponent(componentType: any): UnityEngine.Component;
    AddComponent(className: string): UnityEngine.Component;
    static Find(name: string): UnityEngine.GameObject;
    SampleAnimation(clip: UnityEngine.Object, time: number): void;
    PlayAnimation(animation: UnityEngine.Object): void;
    StopAnimation(): void;
    // properties
    readonly transform: UnityEngine.Transform;
    layer: number;
    active: boolean;
    readonly activeSelf: boolean;
    readonly activeInHierarchy: boolean;
    isStatic: boolean;
    tag: string;
    readonly scene: UnityEngine.SceneManagement.Scene;
    readonly gameObject: UnityEngine.GameObject;
    readonly rigidbody: UnityEngine.Component;
    readonly rigidbody2D: UnityEngine.Component;
    readonly camera: UnityEngine.Component;
    readonly light: UnityEngine.Component;
    readonly animation: UnityEngine.Component;
    readonly constantForce: UnityEngine.Component;
    readonly renderer: UnityEngine.Component;
    readonly audio: UnityEngine.Component;
    readonly guiText: UnityEngine.Component;
    readonly networkView: UnityEngine.Component;
    readonly guiElement: UnityEngine.Component;
    readonly guiTexture: UnityEngine.Component;
    readonly collider: UnityEngine.Component;
    readonly collider2D: UnityEngine.Component;
    readonly hingeJoint: UnityEngine.Component;
    readonly particleEmitter: UnityEngine.Component;
    readonly particleSystem: UnityEngine.Component;
    // fields
  }
}
declare namespace UnityEngine {
  class GeometryUtility extends System.Object {
    // constructors
    constructor();
    // methods
    static CalculateFrustumPlanes(camera: UnityEngine.Camera): UnityEngine.Plane[];
    static CalculateFrustumPlanes(worldToProjectionMatrix: UnityEngine.Matrix4x4): UnityEngine.Plane[];
    static TestPlanesAABB(planes: UnityEngine.Plane[], bounds: UnityEngine.Bounds): boolean;
    static CalculateBounds(positions: UnityEngine.Vector3[], transform: UnityEngine.Matrix4x4): UnityEngine.Bounds;
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class Gizmos extends System.Object {
    // constructors
    constructor();
    // methods
    static DrawRay(r: UnityEngine.Ray): void;
    static DrawRay(from: UnityEngine.Vector3, direction: UnityEngine.Vector3): void;
    static DrawLine(from: UnityEngine.Vector3, to: UnityEngine.Vector3): void;
    static DrawWireSphere(center: UnityEngine.Vector3, radius: number): void;
    static DrawSphere(center: UnityEngine.Vector3, radius: number): void;
    static DrawWireCube(center: UnityEngine.Vector3, size: UnityEngine.Vector3): void;
    static DrawCube(center: UnityEngine.Vector3, size: UnityEngine.Vector3): void;
    static DrawMesh(mesh: UnityEngine.Mesh, position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion): void;
    static DrawMesh(mesh: UnityEngine.Mesh, position: UnityEngine.Vector3): void;
    static DrawMesh(mesh: UnityEngine.Mesh): void;
    static DrawMesh(mesh: UnityEngine.Mesh, position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion, scale: UnityEngine.Vector3): void;
    static DrawMesh(mesh: UnityEngine.Mesh, submeshIndex: number, position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion, scale: UnityEngine.Vector3): void;
    static DrawMesh(mesh: UnityEngine.Mesh, submeshIndex: number, position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion): void;
    static DrawMesh(mesh: UnityEngine.Mesh, submeshIndex: number, position: UnityEngine.Vector3): void;
    static DrawMesh(mesh: UnityEngine.Mesh, submeshIndex: number): void;
    static DrawWireMesh(mesh: UnityEngine.Mesh, position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion): void;
    static DrawWireMesh(mesh: UnityEngine.Mesh, position: UnityEngine.Vector3): void;
    static DrawWireMesh(mesh: UnityEngine.Mesh): void;
    static DrawWireMesh(mesh: UnityEngine.Mesh, position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion, scale: UnityEngine.Vector3): void;
    static DrawWireMesh(mesh: UnityEngine.Mesh, submeshIndex: number, position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion, scale: UnityEngine.Vector3): void;
    static DrawWireMesh(mesh: UnityEngine.Mesh, submeshIndex: number, position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion): void;
    static DrawWireMesh(mesh: UnityEngine.Mesh, submeshIndex: number, position: UnityEngine.Vector3): void;
    static DrawWireMesh(mesh: UnityEngine.Mesh, submeshIndex: number): void;
    static DrawIcon(center: UnityEngine.Vector3, name: string, allowScaling: boolean): void;
    static DrawIcon(center: UnityEngine.Vector3, name: string): void;
    static DrawGUITexture(screenRect: UnityEngine.Rect, texture: UnityEngine.Texture): void;
    static DrawGUITexture(screenRect: UnityEngine.Rect, texture: UnityEngine.Texture, mat: UnityEngine.Material): void;
    static DrawGUITexture(screenRect: UnityEngine.Rect, texture: UnityEngine.Texture, leftBorder: number, rightBorder: number, topBorder: number, bottomBorder: number, mat: UnityEngine.Material): void;
    static DrawGUITexture(screenRect: UnityEngine.Rect, texture: UnityEngine.Texture, leftBorder: number, rightBorder: number, topBorder: number, bottomBorder: number): void;
    static DrawFrustum(center: UnityEngine.Vector3, fov: number, maxRange: number, minRange: number, aspect: number): void;
    // properties
    static color: UnityEngine.Color;
    static matrix: UnityEngine.Matrix4x4;
    // fields
  }
}
declare namespace UnityEngine {
  class GL extends System.Object {
    // constructors
    constructor();
    // methods
    static Vertex3(x: number, y: number, z: number): void;
    static Vertex(v: UnityEngine.Vector3): void;
    static Color(c: UnityEngine.Color): void;
    static TexCoord(v: UnityEngine.Vector3): void;
    static TexCoord2(x: number, y: number): void;
    static TexCoord3(x: number, y: number, z: number): void;
    static MultiTexCoord2(unit: number, x: number, y: number): void;
    static MultiTexCoord3(unit: number, x: number, y: number, z: number): void;
    static MultiTexCoord(unit: number, v: UnityEngine.Vector3): void;
    static Begin(mode: number): void;
    static End(): void;
    static LoadOrtho(): void;
    static LoadPixelMatrix(): void;
    static LoadPixelMatrix(left: number, right: number, bottom: number, top: number): void;
    static Viewport(pixelRect: UnityEngine.Rect): void;
    static LoadProjectionMatrix(mat: UnityEngine.Matrix4x4): void;
    static LoadIdentity(): void;
    static MultMatrix(mat: UnityEngine.Matrix4x4): void;
    static PushMatrix(): void;
    static PopMatrix(): void;
    static GetGPUProjectionMatrix(proj: UnityEngine.Matrix4x4, renderIntoTexture: boolean): UnityEngine.Matrix4x4;
    static SetRevertBackfacing(revertBackFaces: boolean): void;
    static Clear(clearDepth: boolean, clearColor: boolean, backgroundColor: UnityEngine.Color): void;
    static Clear(clearDepth: boolean, clearColor: boolean, backgroundColor: UnityEngine.Color, depth: number): void;
    static ClearWithSkybox(clearDepth: boolean, camera: UnityEngine.Camera): void;
    static Flush(): void;
    static InvalidateState(): void;
    static IssuePluginEvent(eventID: number): void;
    static IssuePluginEvent(callback: any, eventID: number): void;
    static RenderTargetBarrier(): void;
    // properties
    static modelview: UnityEngine.Matrix4x4;
    static wireframe: boolean;
    static sRGBWrite: boolean;
    static invertCulling: boolean;
    // fields
    static TRIANGLES: number;
    static TRIANGLE_STRIP: number;
    static QUADS: number;
    static LINES: number;
  }
}
declare namespace UnityEngine {
  class Gradient extends System.Object {
    // constructors
    constructor();
    // methods
    Evaluate(time: number): UnityEngine.Color;
    SetKeys(colorKeys: UnityEngine.GradientColorKey[], alphaKeys: UnityEngine.GradientAlphaKey[]): void;
    // properties
    colorKeys: UnityEngine.GradientColorKey[];
    alphaKeys: UnityEngine.GradientAlphaKey[];
    mode: UnityEngine.GradientMode;
    // fields
  }
}
declare namespace UnityEngine {
  class GradientAlphaKey extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    alpha: number;
    time: number;
  }
}
declare namespace UnityEngine {
  class GradientColorKey extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    color: UnityEngine.Color;
    time: number;
  }
}
declare namespace UnityEngine {
  class GradientMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Blend: UnityEngine.GradientMode;
    static Fixed: UnityEngine.GradientMode;
  }
}
declare namespace UnityEngine {
  class Graphics extends System.Object {
    // constructors
    constructor();
    // methods
    static DrawMesh(mesh: UnityEngine.Mesh, position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion, material: UnityEngine.Material, layer: number, camera: UnityEngine.Camera, submeshIndex: number, properties: UnityEngine.MaterialPropertyBlock, castShadows: boolean, receiveShadows: boolean): void;
    static DrawMesh(mesh: UnityEngine.Mesh, position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion, material: UnityEngine.Material, layer: number, camera: UnityEngine.Camera, submeshIndex: number, properties: UnityEngine.MaterialPropertyBlock, castShadows: boolean): void;
    static DrawMesh(mesh: UnityEngine.Mesh, position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion, material: UnityEngine.Material, layer: number, camera: UnityEngine.Camera, submeshIndex: number, properties: UnityEngine.MaterialPropertyBlock): void;
    static DrawMesh(mesh: UnityEngine.Mesh, position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion, material: UnityEngine.Material, layer: number, camera: UnityEngine.Camera, submeshIndex: number): void;
    static DrawMesh(mesh: UnityEngine.Mesh, position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion, material: UnityEngine.Material, layer: number, camera: UnityEngine.Camera): void;
    static DrawMesh(mesh: UnityEngine.Mesh, position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion, material: UnityEngine.Material, layer: number): void;
    static DrawMesh(mesh: UnityEngine.Mesh, position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion, material: UnityEngine.Material, layer: number, camera: UnityEngine.Camera, submeshIndex: number, properties: UnityEngine.MaterialPropertyBlock, castShadows: boolean, receiveShadows: boolean, useLightProbes: boolean): void;
    static DrawMesh(mesh: UnityEngine.Mesh, position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion, material: UnityEngine.Material, layer: number, camera: UnityEngine.Camera, submeshIndex: number, properties: UnityEngine.MaterialPropertyBlock, castShadows: UnityEngine.Rendering.ShadowCastingMode, receiveShadows: boolean, probeAnchor: UnityEngine.Transform): void;
    static DrawMesh(mesh: UnityEngine.Mesh, position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion, material: UnityEngine.Material, layer: number, camera: UnityEngine.Camera, submeshIndex: number, properties: UnityEngine.MaterialPropertyBlock, castShadows: UnityEngine.Rendering.ShadowCastingMode, receiveShadows: boolean): void;
    static DrawMesh(mesh: UnityEngine.Mesh, position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion, material: UnityEngine.Material, layer: number, camera: UnityEngine.Camera, submeshIndex: number, properties: UnityEngine.MaterialPropertyBlock, castShadows: UnityEngine.Rendering.ShadowCastingMode): void;
    static DrawMesh(mesh: UnityEngine.Mesh, position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion, material: UnityEngine.Material, layer: number, camera: UnityEngine.Camera, submeshIndex: number, properties: UnityEngine.MaterialPropertyBlock, castShadows: UnityEngine.Rendering.ShadowCastingMode, receiveShadows: boolean, probeAnchor: UnityEngine.Transform, useLightProbes: boolean): void;
    static DrawMesh(mesh: UnityEngine.Mesh, matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material, layer: number, camera: UnityEngine.Camera, submeshIndex: number, properties: UnityEngine.MaterialPropertyBlock, castShadows: boolean, receiveShadows: boolean): void;
    static DrawMesh(mesh: UnityEngine.Mesh, matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material, layer: number, camera: UnityEngine.Camera, submeshIndex: number, properties: UnityEngine.MaterialPropertyBlock, castShadows: boolean): void;
    static DrawMesh(mesh: UnityEngine.Mesh, matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material, layer: number, camera: UnityEngine.Camera, submeshIndex: number, properties: UnityEngine.MaterialPropertyBlock): void;
    static DrawMesh(mesh: UnityEngine.Mesh, matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material, layer: number, camera: UnityEngine.Camera, submeshIndex: number): void;
    static DrawMesh(mesh: UnityEngine.Mesh, matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material, layer: number, camera: UnityEngine.Camera): void;
    static DrawMesh(mesh: UnityEngine.Mesh, matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material, layer: number): void;
    static DrawMesh(mesh: UnityEngine.Mesh, matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material, layer: number, camera: UnityEngine.Camera, submeshIndex: number, properties: UnityEngine.MaterialPropertyBlock, castShadows: boolean, receiveShadows: boolean, useLightProbes: boolean): void;
    static DrawMesh(mesh: UnityEngine.Mesh, matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material, layer: number, camera: UnityEngine.Camera, submeshIndex: number, properties: UnityEngine.MaterialPropertyBlock, castShadows: UnityEngine.Rendering.ShadowCastingMode, receiveShadows: boolean, probeAnchor: UnityEngine.Transform): void;
    static DrawMesh(mesh: UnityEngine.Mesh, matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material, layer: number, camera: UnityEngine.Camera, submeshIndex: number, properties: UnityEngine.MaterialPropertyBlock, castShadows: UnityEngine.Rendering.ShadowCastingMode, receiveShadows: boolean): void;
    static DrawMesh(mesh: UnityEngine.Mesh, matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material, layer: number, camera: UnityEngine.Camera, submeshIndex: number, properties: UnityEngine.MaterialPropertyBlock, castShadows: UnityEngine.Rendering.ShadowCastingMode): void;
    static DrawMesh(mesh: UnityEngine.Mesh, matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material, layer: number, camera: UnityEngine.Camera, submeshIndex: number, properties: UnityEngine.MaterialPropertyBlock, castShadows: UnityEngine.Rendering.ShadowCastingMode, receiveShadows: boolean, probeAnchor: UnityEngine.Transform, useLightProbes: boolean): void;
    static DrawMesh(mesh: UnityEngine.Mesh, position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion): void;
    static DrawMesh(mesh: UnityEngine.Mesh, position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion, materialIndex: number): void;
    static DrawMesh(mesh: UnityEngine.Mesh, matrix: UnityEngine.Matrix4x4): void;
    static DrawMesh(mesh: UnityEngine.Mesh, matrix: UnityEngine.Matrix4x4, materialIndex: number): void;
    static DrawMeshNow(mesh: UnityEngine.Mesh, position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion): void;
    static DrawMeshNow(mesh: UnityEngine.Mesh, position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion, materialIndex: number): void;
    static DrawMeshNow(mesh: UnityEngine.Mesh, matrix: UnityEngine.Matrix4x4): void;
    static DrawMeshNow(mesh: UnityEngine.Mesh, matrix: UnityEngine.Matrix4x4, materialIndex: number): void;
    static DrawProcedural(topology: UnityEngine.MeshTopology, vertexCount: number, instanceCount: number): void;
    static DrawProcedural(topology: UnityEngine.MeshTopology, vertexCount: number): void;
    static DrawProceduralIndirect(topology: UnityEngine.MeshTopology, bufferWithArgs: UnityEngine.ComputeBuffer, argsOffset: number): void;
    static DrawProceduralIndirect(topology: UnityEngine.MeshTopology, bufferWithArgs: UnityEngine.ComputeBuffer): void;
    static DrawMeshInstanced(mesh: UnityEngine.Mesh, submeshIndex: number, material: UnityEngine.Material, matrices: UnityEngine.Matrix4x4[], count: number, properties: UnityEngine.MaterialPropertyBlock, castShadows: UnityEngine.Rendering.ShadowCastingMode, receiveShadows: boolean, layer: number): void;
    static DrawMeshInstanced(mesh: UnityEngine.Mesh, submeshIndex: number, material: UnityEngine.Material, matrices: UnityEngine.Matrix4x4[], count: number, properties: UnityEngine.MaterialPropertyBlock, castShadows: UnityEngine.Rendering.ShadowCastingMode, receiveShadows: boolean): void;
    static DrawMeshInstanced(mesh: UnityEngine.Mesh, submeshIndex: number, material: UnityEngine.Material, matrices: UnityEngine.Matrix4x4[], count: number, properties: UnityEngine.MaterialPropertyBlock, castShadows: UnityEngine.Rendering.ShadowCastingMode): void;
    static DrawMeshInstanced(mesh: UnityEngine.Mesh, submeshIndex: number, material: UnityEngine.Material, matrices: UnityEngine.Matrix4x4[], count: number, properties: UnityEngine.MaterialPropertyBlock): void;
    static DrawMeshInstanced(mesh: UnityEngine.Mesh, submeshIndex: number, material: UnityEngine.Material, matrices: UnityEngine.Matrix4x4[], count: number): void;
    static DrawMeshInstanced(mesh: UnityEngine.Mesh, submeshIndex: number, material: UnityEngine.Material, matrices: UnityEngine.Matrix4x4[]): void;
    static DrawMeshInstanced(mesh: UnityEngine.Mesh, submeshIndex: number, material: UnityEngine.Material, matrices: UnityEngine.Matrix4x4[], count: number, properties: UnityEngine.MaterialPropertyBlock, castShadows: UnityEngine.Rendering.ShadowCastingMode, receiveShadows: boolean, layer: number, camera: UnityEngine.Camera): void;
    static DrawMeshInstanced(mesh: UnityEngine.Mesh, submeshIndex: number, material: UnityEngine.Material, matrices: UnityEngine.Matrix4x4[], properties: UnityEngine.MaterialPropertyBlock, castShadows: UnityEngine.Rendering.ShadowCastingMode, receiveShadows: boolean, layer: number): void;
    static DrawMeshInstanced(mesh: UnityEngine.Mesh, submeshIndex: number, material: UnityEngine.Material, matrices: UnityEngine.Matrix4x4[], properties: UnityEngine.MaterialPropertyBlock, castShadows: UnityEngine.Rendering.ShadowCastingMode, receiveShadows: boolean): void;
    static DrawMeshInstanced(mesh: UnityEngine.Mesh, submeshIndex: number, material: UnityEngine.Material, matrices: UnityEngine.Matrix4x4[], properties: UnityEngine.MaterialPropertyBlock, castShadows: UnityEngine.Rendering.ShadowCastingMode): void;
    static DrawMeshInstanced(mesh: UnityEngine.Mesh, submeshIndex: number, material: UnityEngine.Material, matrices: UnityEngine.Matrix4x4[], properties: UnityEngine.MaterialPropertyBlock): void;
    static DrawMeshInstanced(mesh: UnityEngine.Mesh, submeshIndex: number, material: UnityEngine.Material, matrices: UnityEngine.Matrix4x4[]): void;
    static DrawMeshInstanced(mesh: UnityEngine.Mesh, submeshIndex: number, material: UnityEngine.Material, matrices: UnityEngine.Matrix4x4[], properties: UnityEngine.MaterialPropertyBlock, castShadows: UnityEngine.Rendering.ShadowCastingMode, receiveShadows: boolean, layer: number, camera: UnityEngine.Camera): void;
    static DrawTexture(screenRect: UnityEngine.Rect, texture: UnityEngine.Texture, mat: UnityEngine.Material): void;
    static DrawTexture(screenRect: UnityEngine.Rect, texture: UnityEngine.Texture): void;
    static DrawTexture(screenRect: UnityEngine.Rect, texture: UnityEngine.Texture, mat: UnityEngine.Material, pass: number): void;
    static DrawTexture(screenRect: UnityEngine.Rect, texture: UnityEngine.Texture, leftBorder: number, rightBorder: number, topBorder: number, bottomBorder: number, mat: UnityEngine.Material): void;
    static DrawTexture(screenRect: UnityEngine.Rect, texture: UnityEngine.Texture, leftBorder: number, rightBorder: number, topBorder: number, bottomBorder: number): void;
    static DrawTexture(screenRect: UnityEngine.Rect, texture: UnityEngine.Texture, leftBorder: number, rightBorder: number, topBorder: number, bottomBorder: number, mat: UnityEngine.Material, pass: number): void;
    static DrawTexture(screenRect: UnityEngine.Rect, texture: UnityEngine.Texture, sourceRect: UnityEngine.Rect, leftBorder: number, rightBorder: number, topBorder: number, bottomBorder: number, mat: UnityEngine.Material): void;
    static DrawTexture(screenRect: UnityEngine.Rect, texture: UnityEngine.Texture, sourceRect: UnityEngine.Rect, leftBorder: number, rightBorder: number, topBorder: number, bottomBorder: number): void;
    static DrawTexture(screenRect: UnityEngine.Rect, texture: UnityEngine.Texture, sourceRect: UnityEngine.Rect, leftBorder: number, rightBorder: number, topBorder: number, bottomBorder: number, mat: UnityEngine.Material, pass: number): void;
    static DrawTexture(screenRect: UnityEngine.Rect, texture: UnityEngine.Texture, sourceRect: UnityEngine.Rect, leftBorder: number, rightBorder: number, topBorder: number, bottomBorder: number, color: UnityEngine.Color, mat: UnityEngine.Material): void;
    static DrawTexture(screenRect: UnityEngine.Rect, texture: UnityEngine.Texture, sourceRect: UnityEngine.Rect, leftBorder: number, rightBorder: number, topBorder: number, bottomBorder: number, color: UnityEngine.Color): void;
    static DrawTexture(screenRect: UnityEngine.Rect, texture: UnityEngine.Texture, sourceRect: UnityEngine.Rect, leftBorder: number, rightBorder: number, topBorder: number, bottomBorder: number, color: UnityEngine.Color, mat: UnityEngine.Material, pass: number): void;
    static ExecuteCommandBuffer(buffer: UnityEngine.Rendering.CommandBuffer): void;
    static Blit(source: UnityEngine.Texture, dest: UnityEngine.RenderTexture): void;
    static Blit(source: UnityEngine.Texture, dest: UnityEngine.RenderTexture, mat: UnityEngine.Material): void;
    static Blit(source: UnityEngine.Texture, dest: UnityEngine.RenderTexture, mat: UnityEngine.Material, pass: number): void;
    static Blit(source: UnityEngine.Texture, mat: UnityEngine.Material): void;
    static Blit(source: UnityEngine.Texture, mat: UnityEngine.Material, pass: number): void;
    static BlitMultiTap(source: UnityEngine.Texture, dest: UnityEngine.RenderTexture, mat: UnityEngine.Material, offsets: UnityEngine.Vector2[]): void;
    static CopyTexture(src: UnityEngine.Texture, dst: UnityEngine.Texture): void;
    static CopyTexture(src: UnityEngine.Texture, srcElement: number, srcMip: number, dst: UnityEngine.Texture, dstElement: number, dstMip: number): void;
    static CopyTexture(src: UnityEngine.Texture, srcElement: number, srcMip: number, srcX: number, srcY: number, srcWidth: number, srcHeight: number, dst: UnityEngine.Texture, dstElement: number, dstMip: number, dstX: number, dstY: number): void;
    static SetRandomWriteTarget(index: number, uav: UnityEngine.RenderTexture): void;
    static SetRandomWriteTarget(index: number, uav: UnityEngine.ComputeBuffer): void;
    static SetRandomWriteTarget(index: number, uav: UnityEngine.ComputeBuffer, preserveCounterValue: boolean): void;
    static ClearRandomWriteTargets(): void;
    static SetRenderTarget(rt: UnityEngine.RenderTexture): void;
    static SetRenderTarget(rt: UnityEngine.RenderTexture, mipLevel: number): void;
    static SetRenderTarget(rt: UnityEngine.RenderTexture, mipLevel: number, face: UnityEngine.CubemapFace): void;
    static SetRenderTarget(rt: UnityEngine.RenderTexture, mipLevel: number, face: UnityEngine.CubemapFace, depthSlice: number): void;
    static SetRenderTarget(colorBuffer: UnityEngine.RenderBuffer, depthBuffer: UnityEngine.RenderBuffer): void;
    static SetRenderTarget(colorBuffer: UnityEngine.RenderBuffer, depthBuffer: UnityEngine.RenderBuffer, mipLevel: number): void;
    static SetRenderTarget(colorBuffer: UnityEngine.RenderBuffer, depthBuffer: UnityEngine.RenderBuffer, mipLevel: number, face: UnityEngine.CubemapFace): void;
    static SetRenderTarget(colorBuffer: UnityEngine.RenderBuffer, depthBuffer: UnityEngine.RenderBuffer, mipLevel: number, face: UnityEngine.CubemapFace, depthSlice: number): void;
    static SetRenderTarget(colorBuffers: UnityEngine.RenderBuffer[], depthBuffer: UnityEngine.RenderBuffer): void;
    static SetRenderTarget(setup: UnityEngine.RenderTargetSetup): void;
    // properties
    static readonly activeColorBuffer: UnityEngine.RenderBuffer;
    static readonly activeDepthBuffer: UnityEngine.RenderBuffer;
    static activeTier: UnityEngine.Rendering.GraphicsTier;
    static readonly deviceName: string;
    static readonly deviceVendor: string;
    static readonly deviceVersion: string;
    // fields
  }
}
declare namespace UnityEngine.GUI {
  class ClipScope extends UnityEngine.GUI.Scope {
    // constructors
    constructor(position: UnityEngine.Rect);
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class GUI extends System.Object {
    // constructors
    constructor();
    // methods
    static Label(position: UnityEngine.Rect, text: string): void;
    static Label(position: UnityEngine.Rect, image: UnityEngine.Texture): void;
    static Label(position: UnityEngine.Rect, content: UnityEngine.GUIContent): void;
    static Label(position: UnityEngine.Rect, text: string, style: UnityEngine.GUIStyle): void;
    static Label(position: UnityEngine.Rect, image: UnityEngine.Texture, style: UnityEngine.GUIStyle): void;
    static Label(position: UnityEngine.Rect, content: UnityEngine.GUIContent, style: UnityEngine.GUIStyle): void;
    static DrawTexture(position: UnityEngine.Rect, image: UnityEngine.Texture): void;
    static DrawTexture(position: UnityEngine.Rect, image: UnityEngine.Texture, scaleMode: UnityEngine.ScaleMode): void;
    static DrawTexture(position: UnityEngine.Rect, image: UnityEngine.Texture, scaleMode: UnityEngine.ScaleMode, alphaBlend: boolean): void;
    static DrawTexture(position: UnityEngine.Rect, image: UnityEngine.Texture, scaleMode: UnityEngine.ScaleMode, alphaBlend: boolean, imageAspect: number): void;
    static DrawTextureWithTexCoords(position: UnityEngine.Rect, image: UnityEngine.Texture, texCoords: UnityEngine.Rect): void;
    static DrawTextureWithTexCoords(position: UnityEngine.Rect, image: UnityEngine.Texture, texCoords: UnityEngine.Rect, alphaBlend: boolean): void;
    static Box(position: UnityEngine.Rect, text: string): void;
    static Box(position: UnityEngine.Rect, image: UnityEngine.Texture): void;
    static Box(position: UnityEngine.Rect, content: UnityEngine.GUIContent): void;
    static Box(position: UnityEngine.Rect, text: string, style: UnityEngine.GUIStyle): void;
    static Box(position: UnityEngine.Rect, image: UnityEngine.Texture, style: UnityEngine.GUIStyle): void;
    static Box(position: UnityEngine.Rect, content: UnityEngine.GUIContent, style: UnityEngine.GUIStyle): void;
    static Button(position: UnityEngine.Rect, text: string): boolean;
    static Button(position: UnityEngine.Rect, image: UnityEngine.Texture): boolean;
    static Button(position: UnityEngine.Rect, content: UnityEngine.GUIContent): boolean;
    static Button(position: UnityEngine.Rect, text: string, style: UnityEngine.GUIStyle): boolean;
    static Button(position: UnityEngine.Rect, image: UnityEngine.Texture, style: UnityEngine.GUIStyle): boolean;
    static Button(position: UnityEngine.Rect, content: UnityEngine.GUIContent, style: UnityEngine.GUIStyle): boolean;
    static RepeatButton(position: UnityEngine.Rect, text: string): boolean;
    static RepeatButton(position: UnityEngine.Rect, image: UnityEngine.Texture): boolean;
    static RepeatButton(position: UnityEngine.Rect, content: UnityEngine.GUIContent): boolean;
    static RepeatButton(position: UnityEngine.Rect, text: string, style: UnityEngine.GUIStyle): boolean;
    static RepeatButton(position: UnityEngine.Rect, image: UnityEngine.Texture, style: UnityEngine.GUIStyle): boolean;
    static RepeatButton(position: UnityEngine.Rect, content: UnityEngine.GUIContent, style: UnityEngine.GUIStyle): boolean;
    static TextField(position: UnityEngine.Rect, text: string): string;
    static TextField(position: UnityEngine.Rect, text: string, maxLength: number): string;
    static TextField(position: UnityEngine.Rect, text: string, style: UnityEngine.GUIStyle): string;
    static TextField(position: UnityEngine.Rect, text: string, maxLength: number, style: UnityEngine.GUIStyle): string;
    static PasswordField(position: UnityEngine.Rect, password: string, maskChar: any): string;
    static PasswordField(position: UnityEngine.Rect, password: string, maskChar: any, maxLength: number): string;
    static PasswordField(position: UnityEngine.Rect, password: string, maskChar: any, style: UnityEngine.GUIStyle): string;
    static PasswordField(position: UnityEngine.Rect, password: string, maskChar: any, maxLength: number, style: UnityEngine.GUIStyle): string;
    static TextArea(position: UnityEngine.Rect, text: string): string;
    static TextArea(position: UnityEngine.Rect, text: string, maxLength: number): string;
    static TextArea(position: UnityEngine.Rect, text: string, style: UnityEngine.GUIStyle): string;
    static TextArea(position: UnityEngine.Rect, text: string, maxLength: number, style: UnityEngine.GUIStyle): string;
    static Toggle(position: UnityEngine.Rect, value: boolean, text: string): boolean;
    static Toggle(position: UnityEngine.Rect, value: boolean, image: UnityEngine.Texture): boolean;
    static Toggle(position: UnityEngine.Rect, value: boolean, content: UnityEngine.GUIContent): boolean;
    static Toggle(position: UnityEngine.Rect, value: boolean, text: string, style: UnityEngine.GUIStyle): boolean;
    static Toggle(position: UnityEngine.Rect, value: boolean, image: UnityEngine.Texture, style: UnityEngine.GUIStyle): boolean;
    static Toggle(position: UnityEngine.Rect, value: boolean, content: UnityEngine.GUIContent, style: UnityEngine.GUIStyle): boolean;
    static Toggle(position: UnityEngine.Rect, id: number, value: boolean, content: UnityEngine.GUIContent, style: UnityEngine.GUIStyle): boolean;
    static Toolbar(position: UnityEngine.Rect, selected: number, texts: string[]): number;
    static Toolbar(position: UnityEngine.Rect, selected: number, images: UnityEngine.Texture[]): number;
    static Toolbar(position: UnityEngine.Rect, selected: number, content: UnityEngine.GUIContent[]): number;
    static Toolbar(position: UnityEngine.Rect, selected: number, texts: string[], style: UnityEngine.GUIStyle): number;
    static Toolbar(position: UnityEngine.Rect, selected: number, images: UnityEngine.Texture[], style: UnityEngine.GUIStyle): number;
    static Toolbar(position: UnityEngine.Rect, selected: number, contents: UnityEngine.GUIContent[], style: UnityEngine.GUIStyle): number;
    static SelectionGrid(position: UnityEngine.Rect, selected: number, texts: string[], xCount: number): number;
    static SelectionGrid(position: UnityEngine.Rect, selected: number, images: UnityEngine.Texture[], xCount: number): number;
    static SelectionGrid(position: UnityEngine.Rect, selected: number, content: UnityEngine.GUIContent[], xCount: number): number;
    static SelectionGrid(position: UnityEngine.Rect, selected: number, texts: string[], xCount: number, style: UnityEngine.GUIStyle): number;
    static SelectionGrid(position: UnityEngine.Rect, selected: number, images: UnityEngine.Texture[], xCount: number, style: UnityEngine.GUIStyle): number;
    static SelectionGrid(position: UnityEngine.Rect, selected: number, contents: UnityEngine.GUIContent[], xCount: number, style: UnityEngine.GUIStyle): number;
    static HorizontalSlider(position: UnityEngine.Rect, value: number, leftValue: number, rightValue: number): number;
    static HorizontalSlider(position: UnityEngine.Rect, value: number, leftValue: number, rightValue: number, slider: UnityEngine.GUIStyle, thumb: UnityEngine.GUIStyle): number;
    static VerticalSlider(position: UnityEngine.Rect, value: number, topValue: number, bottomValue: number): number;
    static VerticalSlider(position: UnityEngine.Rect, value: number, topValue: number, bottomValue: number, slider: UnityEngine.GUIStyle, thumb: UnityEngine.GUIStyle): number;
    static Slider(position: UnityEngine.Rect, value: number, size: number, start: number, end: number, sliderStyle: UnityEngine.GUIStyle, thumbStyle: UnityEngine.GUIStyle, horiz: boolean, id: number): number;
    static HorizontalScrollbar(position: UnityEngine.Rect, value: number, size: number, leftValue: number, rightValue: number): number;
    static HorizontalScrollbar(position: UnityEngine.Rect, value: number, size: number, leftValue: number, rightValue: number, style: UnityEngine.GUIStyle): number;
    static VerticalScrollbar(position: UnityEngine.Rect, value: number, size: number, topValue: number, bottomValue: number): number;
    static VerticalScrollbar(position: UnityEngine.Rect, value: number, size: number, topValue: number, bottomValue: number, style: UnityEngine.GUIStyle): number;
    static BeginClip(position: UnityEngine.Rect, scrollOffset: UnityEngine.Vector2, renderOffset: UnityEngine.Vector2, resetOffset: boolean): void;
    static BeginClip(position: UnityEngine.Rect): void;
    static BeginGroup(position: UnityEngine.Rect): void;
    static BeginGroup(position: UnityEngine.Rect, text: string): void;
    static BeginGroup(position: UnityEngine.Rect, image: UnityEngine.Texture): void;
    static BeginGroup(position: UnityEngine.Rect, content: UnityEngine.GUIContent): void;
    static BeginGroup(position: UnityEngine.Rect, style: UnityEngine.GUIStyle): void;
    static BeginGroup(position: UnityEngine.Rect, text: string, style: UnityEngine.GUIStyle): void;
    static BeginGroup(position: UnityEngine.Rect, image: UnityEngine.Texture, style: UnityEngine.GUIStyle): void;
    static BeginGroup(position: UnityEngine.Rect, content: UnityEngine.GUIContent, style: UnityEngine.GUIStyle): void;
    static EndGroup(): void;
    static EndClip(): void;
    static BeginScrollView(position: UnityEngine.Rect, scrollPosition: UnityEngine.Vector2, viewRect: UnityEngine.Rect): UnityEngine.Vector2;
    static BeginScrollView(position: UnityEngine.Rect, scrollPosition: UnityEngine.Vector2, viewRect: UnityEngine.Rect, alwaysShowHorizontal: boolean, alwaysShowVertical: boolean): UnityEngine.Vector2;
    static BeginScrollView(position: UnityEngine.Rect, scrollPosition: UnityEngine.Vector2, viewRect: UnityEngine.Rect, horizontalScrollbar: UnityEngine.GUIStyle, verticalScrollbar: UnityEngine.GUIStyle): UnityEngine.Vector2;
    static BeginScrollView(position: UnityEngine.Rect, scrollPosition: UnityEngine.Vector2, viewRect: UnityEngine.Rect, alwaysShowHorizontal: boolean, alwaysShowVertical: boolean, horizontalScrollbar: UnityEngine.GUIStyle, verticalScrollbar: UnityEngine.GUIStyle): UnityEngine.Vector2;
    static EndScrollView(): void;
    static EndScrollView(handleScrollWheel: boolean): void;
    static ScrollTo(position: UnityEngine.Rect): void;
    static ScrollTowards(position: UnityEngine.Rect, maxDelta: number): boolean;
    static Window(id: number, clientRect: UnityEngine.Rect, func: ((id: number) => void), text: string): UnityEngine.Rect;
    static Window(id: number, clientRect: UnityEngine.Rect, func: ((id: number) => void), image: UnityEngine.Texture): UnityEngine.Rect;
    static Window(id: number, clientRect: UnityEngine.Rect, func: ((id: number) => void), content: UnityEngine.GUIContent): UnityEngine.Rect;
    static Window(id: number, clientRect: UnityEngine.Rect, func: ((id: number) => void), text: string, style: UnityEngine.GUIStyle): UnityEngine.Rect;
    static Window(id: number, clientRect: UnityEngine.Rect, func: ((id: number) => void), image: UnityEngine.Texture, style: UnityEngine.GUIStyle): UnityEngine.Rect;
    static Window(id: number, clientRect: UnityEngine.Rect, func: ((id: number) => void), title: UnityEngine.GUIContent, style: UnityEngine.GUIStyle): UnityEngine.Rect;
    static ModalWindow(id: number, clientRect: UnityEngine.Rect, func: ((id: number) => void), text: string): UnityEngine.Rect;
    static ModalWindow(id: number, clientRect: UnityEngine.Rect, func: ((id: number) => void), image: UnityEngine.Texture): UnityEngine.Rect;
    static ModalWindow(id: number, clientRect: UnityEngine.Rect, func: ((id: number) => void), content: UnityEngine.GUIContent): UnityEngine.Rect;
    static ModalWindow(id: number, clientRect: UnityEngine.Rect, func: ((id: number) => void), text: string, style: UnityEngine.GUIStyle): UnityEngine.Rect;
    static ModalWindow(id: number, clientRect: UnityEngine.Rect, func: ((id: number) => void), image: UnityEngine.Texture, style: UnityEngine.GUIStyle): UnityEngine.Rect;
    static ModalWindow(id: number, clientRect: UnityEngine.Rect, func: ((id: number) => void), content: UnityEngine.GUIContent, style: UnityEngine.GUIStyle): UnityEngine.Rect;
    static DragWindow(): void;
    static DragWindow(position: UnityEngine.Rect): void;
    static SetNextControlName(name: string): void;
    static GetNameOfFocusedControl(): string;
    static FocusControl(name: string): void;
    static BringWindowToFront(windowID: number): void;
    static BringWindowToBack(windowID: number): void;
    static FocusWindow(windowID: number): void;
    static UnfocusWindow(): void;
    // properties
    static skin: UnityEngine.GUISkin;
    static matrix: UnityEngine.Matrix4x4;
    static tooltip: string;
    static color: UnityEngine.Color;
    static backgroundColor: UnityEngine.Color;
    static contentColor: UnityEngine.Color;
    static changed: boolean;
    static enabled: boolean;
    static depth: number;
    // fields
  }
}
declare namespace UnityEngine.GUI {
  class GroupScope extends UnityEngine.GUI.Scope {
    // constructors
    constructor(position: UnityEngine.Rect);
    constructor(position: UnityEngine.Rect, text: string);
    constructor(position: UnityEngine.Rect, image: UnityEngine.Texture);
    constructor(position: UnityEngine.Rect, content: UnityEngine.GUIContent);
    constructor(position: UnityEngine.Rect, style: UnityEngine.GUIStyle);
    constructor(position: UnityEngine.Rect, text: string, style: UnityEngine.GUIStyle);
    constructor(position: UnityEngine.Rect, image: UnityEngine.Texture, style: UnityEngine.GUIStyle);
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine.GUI {
  class Scope extends System.Object {
    // constructors
    protected constructor();
    // methods
    Dispose(): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine.GUI {
  class ScrollViewScope extends UnityEngine.GUI.Scope {
    // constructors
    constructor(position: UnityEngine.Rect, scrollPosition: UnityEngine.Vector2, viewRect: UnityEngine.Rect);
    constructor(position: UnityEngine.Rect, scrollPosition: UnityEngine.Vector2, viewRect: UnityEngine.Rect, alwaysShowHorizontal: boolean, alwaysShowVertical: boolean);
    constructor(position: UnityEngine.Rect, scrollPosition: UnityEngine.Vector2, viewRect: UnityEngine.Rect, horizontalScrollbar: UnityEngine.GUIStyle, verticalScrollbar: UnityEngine.GUIStyle);
    constructor(position: UnityEngine.Rect, scrollPosition: UnityEngine.Vector2, viewRect: UnityEngine.Rect, alwaysShowHorizontal: boolean, alwaysShowVertical: boolean, horizontalScrollbar: UnityEngine.GUIStyle, verticalScrollbar: UnityEngine.GUIStyle);
    // methods
    // properties
    readonly scrollPosition: UnityEngine.Vector2;
    handleScrollWheel: boolean;
    // fields
  }
}
declare namespace UnityEngine.GUI {
  class ScrollViewState extends System.Object {
    // constructors
    constructor();
    // methods
    // properties
    // fields
    position: UnityEngine.Rect;
    visibleRect: UnityEngine.Rect;
    viewRect: UnityEngine.Rect;
    scrollPosition: UnityEngine.Vector2;
    apply: boolean;
    hasScrollTo: boolean;
  }
}
declare namespace UnityEngine {
  class GUIAspectSizer extends UnityEngine.GUILayoutEntry {
    // constructors
    constructor(aspect: number, options: UnityEngine.GUILayoutOption[]);
    // methods
    CalcHeight(): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class GUIClip extends System.Object {
    // constructors
    constructor();
    // methods
    static Unclip(pos: UnityEngine.Vector2): UnityEngine.Vector2;
    static Unclip(rect: UnityEngine.Rect): UnityEngine.Rect;
    static Clip(absolutePos: UnityEngine.Vector2): UnityEngine.Vector2;
    static Clip(absoluteRect: UnityEngine.Rect): UnityEngine.Rect;
    static GetAbsoluteMousePosition(): UnityEngine.Vector2;
    // properties
    static readonly enabled: boolean;
    static readonly topmostRect: UnityEngine.Rect;
    static readonly visibleRect: UnityEngine.Rect;
    // fields
  }
}
declare namespace UnityEngine {
  class GUIContent extends System.Object {
    // constructors
    constructor();
    constructor(text: string);
    constructor(image: UnityEngine.Texture);
    constructor(text: string, image: UnityEngine.Texture);
    constructor(text: string, tooltip: string);
    constructor(image: UnityEngine.Texture, tooltip: string);
    constructor(text: string, image: UnityEngine.Texture, tooltip: string);
    constructor(src: UnityEngine.GUIContent);
    // methods
    // properties
    text: string;
    image: UnityEngine.Texture;
    tooltip: string;
    // fields
    static none: UnityEngine.GUIContent;
  }
}
declare namespace UnityEngine {
  class GUIDebugger extends System.Object {
    // constructors
    constructor();
    // methods
    static LogLayoutEntry(rect: UnityEngine.Rect, margins: UnityEngine.RectOffset, style: UnityEngine.GUIStyle): void;
    static LogLayoutGroupEntry(rect: UnityEngine.Rect, margins: UnityEngine.RectOffset, style: UnityEngine.GUIStyle, isVertical: boolean): void;
    static LogLayoutEndGroup(): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class GUIElement extends UnityEngine.Behaviour {
    // constructors
    constructor();
    // methods
    HitTest(screenPosition: UnityEngine.Vector3, camera: UnityEngine.Camera): boolean;
    HitTest(screenPosition: UnityEngine.Vector3): boolean;
    GetScreenRect(camera: UnityEngine.Camera): UnityEngine.Rect;
    GetScreenRect(): UnityEngine.Rect;
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class GUIGridSizer extends UnityEngine.GUILayoutEntry {
    // constructors
    protected constructor();
    // methods
    static GetRect(contents: UnityEngine.GUIContent[], xCount: number, style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]): UnityEngine.Rect;
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class GUILayer extends UnityEngine.Behaviour {
    // constructors
    constructor();
    // methods
    HitTest(screenPosition: UnityEngine.Vector3): UnityEngine.GUIElement;
    // properties
    // fields
  }
}
declare namespace UnityEngine.GUILayout {
  class AreaScope extends UnityEngine.GUI.Scope {
    // constructors
    constructor(screenRect: UnityEngine.Rect);
    constructor(screenRect: UnityEngine.Rect, text: string);
    constructor(screenRect: UnityEngine.Rect, image: UnityEngine.Texture);
    constructor(screenRect: UnityEngine.Rect, content: UnityEngine.GUIContent);
    constructor(screenRect: UnityEngine.Rect, text: string, style: UnityEngine.GUIStyle);
    constructor(screenRect: UnityEngine.Rect, image: UnityEngine.Texture, style: UnityEngine.GUIStyle);
    constructor(screenRect: UnityEngine.Rect, content: UnityEngine.GUIContent, style: UnityEngine.GUIStyle);
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class GUILayout extends System.Object {
    // constructors
    constructor();
    // methods
    static Label(image: UnityEngine.Texture, options: UnityEngine.GUILayoutOption[]): void;
    static Label(text: string, options: UnityEngine.GUILayoutOption[]): void;
    static Label(content: UnityEngine.GUIContent, options: UnityEngine.GUILayoutOption[]): void;
    static Label(image: UnityEngine.Texture, style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]): void;
    static Label(text: string, style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]): void;
    static Label(content: UnityEngine.GUIContent, style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]): void;
    static Box(image: UnityEngine.Texture, options: UnityEngine.GUILayoutOption[]): void;
    static Box(text: string, options: UnityEngine.GUILayoutOption[]): void;
    static Box(content: UnityEngine.GUIContent, options: UnityEngine.GUILayoutOption[]): void;
    static Box(image: UnityEngine.Texture, style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]): void;
    static Box(text: string, style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]): void;
    static Box(content: UnityEngine.GUIContent, style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]): void;
    static Button(image: UnityEngine.Texture, options: UnityEngine.GUILayoutOption[]): boolean;
    static Button(text: string, options: UnityEngine.GUILayoutOption[]): boolean;
    static Button(content: UnityEngine.GUIContent, options: UnityEngine.GUILayoutOption[]): boolean;
    static Button(image: UnityEngine.Texture, style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]): boolean;
    static Button(text: string, style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]): boolean;
    static Button(content: UnityEngine.GUIContent, style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]): boolean;
    static RepeatButton(image: UnityEngine.Texture, options: UnityEngine.GUILayoutOption[]): boolean;
    static RepeatButton(text: string, options: UnityEngine.GUILayoutOption[]): boolean;
    static RepeatButton(content: UnityEngine.GUIContent, options: UnityEngine.GUILayoutOption[]): boolean;
    static RepeatButton(image: UnityEngine.Texture, style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]): boolean;
    static RepeatButton(text: string, style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]): boolean;
    static RepeatButton(content: UnityEngine.GUIContent, style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]): boolean;
    static TextField(text: string, options: UnityEngine.GUILayoutOption[]): string;
    static TextField(text: string, maxLength: number, options: UnityEngine.GUILayoutOption[]): string;
    static TextField(text: string, style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]): string;
    static TextField(text: string, maxLength: number, style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]): string;
    static PasswordField(password: string, maskChar: any, options: UnityEngine.GUILayoutOption[]): string;
    static PasswordField(password: string, maskChar: any, maxLength: number, options: UnityEngine.GUILayoutOption[]): string;
    static PasswordField(password: string, maskChar: any, style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]): string;
    static PasswordField(password: string, maskChar: any, maxLength: number, style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]): string;
    static TextArea(text: string, options: UnityEngine.GUILayoutOption[]): string;
    static TextArea(text: string, maxLength: number, options: UnityEngine.GUILayoutOption[]): string;
    static TextArea(text: string, style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]): string;
    static TextArea(text: string, maxLength: number, style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]): string;
    static Toggle(value: boolean, image: UnityEngine.Texture, options: UnityEngine.GUILayoutOption[]): boolean;
    static Toggle(value: boolean, text: string, options: UnityEngine.GUILayoutOption[]): boolean;
    static Toggle(value: boolean, content: UnityEngine.GUIContent, options: UnityEngine.GUILayoutOption[]): boolean;
    static Toggle(value: boolean, image: UnityEngine.Texture, style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]): boolean;
    static Toggle(value: boolean, text: string, style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]): boolean;
    static Toggle(value: boolean, content: UnityEngine.GUIContent, style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]): boolean;
    static Toolbar(selected: number, texts: string[], options: UnityEngine.GUILayoutOption[]): number;
    static Toolbar(selected: number, images: UnityEngine.Texture[], options: UnityEngine.GUILayoutOption[]): number;
    static Toolbar(selected: number, content: UnityEngine.GUIContent[], options: UnityEngine.GUILayoutOption[]): number;
    static Toolbar(selected: number, texts: string[], style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]): number;
    static Toolbar(selected: number, images: UnityEngine.Texture[], style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]): number;
    static Toolbar(selected: number, contents: UnityEngine.GUIContent[], style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]): number;
    static SelectionGrid(selected: number, texts: string[], xCount: number, options: UnityEngine.GUILayoutOption[]): number;
    static SelectionGrid(selected: number, images: UnityEngine.Texture[], xCount: number, options: UnityEngine.GUILayoutOption[]): number;
    static SelectionGrid(selected: number, content: UnityEngine.GUIContent[], xCount: number, options: UnityEngine.GUILayoutOption[]): number;
    static SelectionGrid(selected: number, texts: string[], xCount: number, style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]): number;
    static SelectionGrid(selected: number, images: UnityEngine.Texture[], xCount: number, style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]): number;
    static SelectionGrid(selected: number, contents: UnityEngine.GUIContent[], xCount: number, style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]): number;
    static HorizontalSlider(value: number, leftValue: number, rightValue: number, options: UnityEngine.GUILayoutOption[]): number;
    static HorizontalSlider(value: number, leftValue: number, rightValue: number, slider: UnityEngine.GUIStyle, thumb: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]): number;
    static VerticalSlider(value: number, leftValue: number, rightValue: number, options: UnityEngine.GUILayoutOption[]): number;
    static VerticalSlider(value: number, leftValue: number, rightValue: number, slider: UnityEngine.GUIStyle, thumb: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]): number;
    static HorizontalScrollbar(value: number, size: number, leftValue: number, rightValue: number, options: UnityEngine.GUILayoutOption[]): number;
    static HorizontalScrollbar(value: number, size: number, leftValue: number, rightValue: number, style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]): number;
    static VerticalScrollbar(value: number, size: number, topValue: number, bottomValue: number, options: UnityEngine.GUILayoutOption[]): number;
    static VerticalScrollbar(value: number, size: number, topValue: number, bottomValue: number, style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]): number;
    static Space(pixels: number): void;
    static FlexibleSpace(): void;
    static BeginHorizontal(options: UnityEngine.GUILayoutOption[]): void;
    static BeginHorizontal(style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]): void;
    static BeginHorizontal(text: string, style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]): void;
    static BeginHorizontal(image: UnityEngine.Texture, style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]): void;
    static BeginHorizontal(content: UnityEngine.GUIContent, style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]): void;
    static EndHorizontal(): void;
    static BeginVertical(options: UnityEngine.GUILayoutOption[]): void;
    static BeginVertical(style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]): void;
    static BeginVertical(text: string, style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]): void;
    static BeginVertical(image: UnityEngine.Texture, style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]): void;
    static BeginVertical(content: UnityEngine.GUIContent, style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]): void;
    static EndVertical(): void;
    static BeginArea(screenRect: UnityEngine.Rect): void;
    static BeginArea(screenRect: UnityEngine.Rect, text: string): void;
    static BeginArea(screenRect: UnityEngine.Rect, image: UnityEngine.Texture): void;
    static BeginArea(screenRect: UnityEngine.Rect, content: UnityEngine.GUIContent): void;
    static BeginArea(screenRect: UnityEngine.Rect, style: UnityEngine.GUIStyle): void;
    static BeginArea(screenRect: UnityEngine.Rect, text: string, style: UnityEngine.GUIStyle): void;
    static BeginArea(screenRect: UnityEngine.Rect, image: UnityEngine.Texture, style: UnityEngine.GUIStyle): void;
    static BeginArea(screenRect: UnityEngine.Rect, content: UnityEngine.GUIContent, style: UnityEngine.GUIStyle): void;
    static EndArea(): void;
    static BeginScrollView(scrollPosition: UnityEngine.Vector2, options: UnityEngine.GUILayoutOption[]): UnityEngine.Vector2;
    static BeginScrollView(scrollPosition: UnityEngine.Vector2, alwaysShowHorizontal: boolean, alwaysShowVertical: boolean, options: UnityEngine.GUILayoutOption[]): UnityEngine.Vector2;
    static BeginScrollView(scrollPosition: UnityEngine.Vector2, horizontalScrollbar: UnityEngine.GUIStyle, verticalScrollbar: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]): UnityEngine.Vector2;
    static BeginScrollView(scrollPosition: UnityEngine.Vector2, style: UnityEngine.GUIStyle): UnityEngine.Vector2;
    static BeginScrollView(scrollPosition: UnityEngine.Vector2, style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]): UnityEngine.Vector2;
    static BeginScrollView(scrollPosition: UnityEngine.Vector2, alwaysShowHorizontal: boolean, alwaysShowVertical: boolean, horizontalScrollbar: UnityEngine.GUIStyle, verticalScrollbar: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]): UnityEngine.Vector2;
    static BeginScrollView(scrollPosition: UnityEngine.Vector2, alwaysShowHorizontal: boolean, alwaysShowVertical: boolean, horizontalScrollbar: UnityEngine.GUIStyle, verticalScrollbar: UnityEngine.GUIStyle, background: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]): UnityEngine.Vector2;
    static EndScrollView(): void;
    static Window(id: number, screenRect: UnityEngine.Rect, func: ((id: number) => void), text: string, options: UnityEngine.GUILayoutOption[]): UnityEngine.Rect;
    static Window(id: number, screenRect: UnityEngine.Rect, func: ((id: number) => void), image: UnityEngine.Texture, options: UnityEngine.GUILayoutOption[]): UnityEngine.Rect;
    static Window(id: number, screenRect: UnityEngine.Rect, func: ((id: number) => void), content: UnityEngine.GUIContent, options: UnityEngine.GUILayoutOption[]): UnityEngine.Rect;
    static Window(id: number, screenRect: UnityEngine.Rect, func: ((id: number) => void), text: string, style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]): UnityEngine.Rect;
    static Window(id: number, screenRect: UnityEngine.Rect, func: ((id: number) => void), image: UnityEngine.Texture, style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]): UnityEngine.Rect;
    static Window(id: number, screenRect: UnityEngine.Rect, func: ((id: number) => void), content: UnityEngine.GUIContent, style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]): UnityEngine.Rect;
    static Width(width: number): UnityEngine.GUILayoutOption;
    static MinWidth(minWidth: number): UnityEngine.GUILayoutOption;
    static MaxWidth(maxWidth: number): UnityEngine.GUILayoutOption;
    static Height(height: number): UnityEngine.GUILayoutOption;
    static MinHeight(minHeight: number): UnityEngine.GUILayoutOption;
    static MaxHeight(maxHeight: number): UnityEngine.GUILayoutOption;
    static ExpandWidth(expand: boolean): UnityEngine.GUILayoutOption;
    static ExpandHeight(expand: boolean): UnityEngine.GUILayoutOption;
    // properties
    // fields
  }
}
declare namespace UnityEngine.GUILayout {
  class HorizontalScope extends UnityEngine.GUI.Scope {
    // constructors
    constructor(options: UnityEngine.GUILayoutOption[]);
    constructor(style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]);
    constructor(text: string, style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]);
    constructor(image: UnityEngine.Texture, style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]);
    constructor(content: UnityEngine.GUIContent, style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]);
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine.GUILayout {
  class LayoutedWindow extends System.Object {
    // constructors
    protected constructor();
    // methods
    DoWindow(windowID: number): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine.GUILayout {
  class ScrollViewScope extends UnityEngine.GUI.Scope {
    // constructors
    constructor(scrollPosition: UnityEngine.Vector2, options: UnityEngine.GUILayoutOption[]);
    constructor(scrollPosition: UnityEngine.Vector2, alwaysShowHorizontal: boolean, alwaysShowVertical: boolean, options: UnityEngine.GUILayoutOption[]);
    constructor(scrollPosition: UnityEngine.Vector2, horizontalScrollbar: UnityEngine.GUIStyle, verticalScrollbar: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]);
    constructor(scrollPosition: UnityEngine.Vector2, style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]);
    constructor(scrollPosition: UnityEngine.Vector2, alwaysShowHorizontal: boolean, alwaysShowVertical: boolean, horizontalScrollbar: UnityEngine.GUIStyle, verticalScrollbar: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]);
    constructor(scrollPosition: UnityEngine.Vector2, alwaysShowHorizontal: boolean, alwaysShowVertical: boolean, horizontalScrollbar: UnityEngine.GUIStyle, verticalScrollbar: UnityEngine.GUIStyle, background: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]);
    // methods
    // properties
    readonly scrollPosition: UnityEngine.Vector2;
    handleScrollWheel: boolean;
    // fields
  }
}
declare namespace UnityEngine.GUILayout {
  class VerticalScope extends UnityEngine.GUI.Scope {
    // constructors
    constructor(options: UnityEngine.GUILayoutOption[]);
    constructor(style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]);
    constructor(text: string, style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]);
    constructor(image: UnityEngine.Texture, style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]);
    constructor(content: UnityEngine.GUIContent, style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]);
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class GUILayoutEntry extends System.Object {
    // constructors
    constructor(_minWidth: number, _maxWidth: number, _minHeight: number, _maxHeight: number, _style: UnityEngine.GUIStyle);
    constructor(_minWidth: number, _maxWidth: number, _minHeight: number, _maxHeight: number, _style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]);
    // methods
    CalcWidth(): void;
    CalcHeight(): void;
    SetHorizontal(x: number, width: number): void;
    SetVertical(y: number, height: number): void;
    ApplyOptions(options: UnityEngine.GUILayoutOption[]): void;
    ToString(): string;
    // properties
    style: UnityEngine.GUIStyle;
    readonly margin: UnityEngine.RectOffset;
    // fields
    minWidth: number;
    maxWidth: number;
    minHeight: number;
    maxHeight: number;
    rect: UnityEngine.Rect;
    stretchWidth: number;
    stretchHeight: number;
  }
}
declare namespace UnityEngine {
  class GUILayoutGroup extends UnityEngine.GUILayoutEntry {
    // constructors
    constructor();
    constructor(_style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]);
    // methods
    ApplyOptions(options: UnityEngine.GUILayoutOption[]): void;
    ResetCursor(): void;
    PeekNext(): UnityEngine.Rect;
    GetNext(): UnityEngine.GUILayoutEntry;
    GetLast(): UnityEngine.Rect;
    Add(e: UnityEngine.GUILayoutEntry): void;
    CalcWidth(): void;
    SetHorizontal(x: number, width: number): void;
    CalcHeight(): void;
    SetVertical(y: number, height: number): void;
    ToString(): string;
    // properties
    readonly margin: UnityEngine.RectOffset;
    // fields
    entries: UnityEngine.GUILayoutEntry[];
    isVertical: boolean;
    resetCoords: boolean;
    spacing: number;
    sameSize: boolean;
    isWindow: boolean;
    windowID: number;
  }
}
declare namespace UnityEngine {
  class GUILayoutOption extends System.Object {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine.GUILayoutOption {
  class Type extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static fixedWidth: UnityEngine.GUILayoutOption.Type;
    static fixedHeight: UnityEngine.GUILayoutOption.Type;
    static minWidth: UnityEngine.GUILayoutOption.Type;
    static maxWidth: UnityEngine.GUILayoutOption.Type;
    static minHeight: UnityEngine.GUILayoutOption.Type;
    static maxHeight: UnityEngine.GUILayoutOption.Type;
    static stretchWidth: UnityEngine.GUILayoutOption.Type;
    static stretchHeight: UnityEngine.GUILayoutOption.Type;
    static alignStart: UnityEngine.GUILayoutOption.Type;
    static alignMiddle: UnityEngine.GUILayoutOption.Type;
    static alignEnd: UnityEngine.GUILayoutOption.Type;
    static alignJustify: UnityEngine.GUILayoutOption.Type;
    static equalSize: UnityEngine.GUILayoutOption.Type;
    static spacing: UnityEngine.GUILayoutOption.Type;
  }
}
declare namespace UnityEngine {
  class GUILayoutUtility extends System.Object {
    // constructors
    constructor();
    // methods
    static BeginGroup(GroupName: string): void;
    static EndGroup(groupName: string): void;
    static GetRect(content: UnityEngine.GUIContent, style: UnityEngine.GUIStyle): UnityEngine.Rect;
    static GetRect(content: UnityEngine.GUIContent, style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]): UnityEngine.Rect;
    static GetRect(width: number, height: number): UnityEngine.Rect;
    static GetRect(width: number, height: number, style: UnityEngine.GUIStyle): UnityEngine.Rect;
    static GetRect(width: number, height: number, options: UnityEngine.GUILayoutOption[]): UnityEngine.Rect;
    static GetRect(width: number, height: number, style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]): UnityEngine.Rect;
    static GetRect(minWidth: number, maxWidth: number, minHeight: number, maxHeight: number): UnityEngine.Rect;
    static GetRect(minWidth: number, maxWidth: number, minHeight: number, maxHeight: number, style: UnityEngine.GUIStyle): UnityEngine.Rect;
    static GetRect(minWidth: number, maxWidth: number, minHeight: number, maxHeight: number, options: UnityEngine.GUILayoutOption[]): UnityEngine.Rect;
    static GetRect(minWidth: number, maxWidth: number, minHeight: number, maxHeight: number, style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]): UnityEngine.Rect;
    static GetLastRect(): UnityEngine.Rect;
    static GetAspectRect(aspect: number): UnityEngine.Rect;
    static GetAspectRect(aspect: number, style: UnityEngine.GUIStyle): UnityEngine.Rect;
    static GetAspectRect(aspect: number, options: UnityEngine.GUILayoutOption[]): UnityEngine.Rect;
    static GetAspectRect(aspect: number, style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]): UnityEngine.Rect;
    // properties
    // fields
  }
}
declare namespace UnityEngine.GUILayoutUtility {
  class LayoutCache extends System.Object {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class GUIScrollGroup extends UnityEngine.GUILayoutGroup {
    // constructors
    constructor();
    // methods
    CalcWidth(): void;
    SetHorizontal(x: number, width: number): void;
    CalcHeight(): void;
    SetVertical(y: number, height: number): void;
    // properties
    // fields
    calcMinWidth: number;
    calcMaxWidth: number;
    calcMinHeight: number;
    calcMaxHeight: number;
    clientWidth: number;
    clientHeight: number;
    allowHorizontalScroll: boolean;
    allowVerticalScroll: boolean;
    needsHorizontalScrollbar: boolean;
    needsVerticalScrollbar: boolean;
    horizontalScrollbar: UnityEngine.GUIStyle;
    verticalScrollbar: UnityEngine.GUIStyle;
  }
}
declare namespace UnityEngine {
  class GUISettings extends System.Object {
    // constructors
    constructor();
    // methods
    // properties
    doubleClickSelectsWord: boolean;
    tripleClickSelectsLine: boolean;
    cursorColor: UnityEngine.Color;
    cursorFlashSpeed: number;
    selectionColor: UnityEngine.Color;
    // fields
  }
}
declare namespace UnityEngine {
  class GUISkin extends UnityEngine.ScriptableObject {
    // constructors
    constructor();
    // methods
    GetStyle(styleName: string): UnityEngine.GUIStyle;
    FindStyle(styleName: string): UnityEngine.GUIStyle;
    GetEnumerator(): any;
    // properties
    font: UnityEngine.Font;
    box: UnityEngine.GUIStyle;
    label: UnityEngine.GUIStyle;
    textField: UnityEngine.GUIStyle;
    textArea: UnityEngine.GUIStyle;
    button: UnityEngine.GUIStyle;
    toggle: UnityEngine.GUIStyle;
    window: UnityEngine.GUIStyle;
    horizontalSlider: UnityEngine.GUIStyle;
    horizontalSliderThumb: UnityEngine.GUIStyle;
    verticalSlider: UnityEngine.GUIStyle;
    verticalSliderThumb: UnityEngine.GUIStyle;
    horizontalScrollbar: UnityEngine.GUIStyle;
    horizontalScrollbarThumb: UnityEngine.GUIStyle;
    horizontalScrollbarLeftButton: UnityEngine.GUIStyle;
    horizontalScrollbarRightButton: UnityEngine.GUIStyle;
    verticalScrollbar: UnityEngine.GUIStyle;
    verticalScrollbarThumb: UnityEngine.GUIStyle;
    verticalScrollbarUpButton: UnityEngine.GUIStyle;
    verticalScrollbarDownButton: UnityEngine.GUIStyle;
    scrollView: UnityEngine.GUIStyle;
    customStyles: UnityEngine.GUIStyle[];
    readonly settings: UnityEngine.GUISettings;
    // fields
  }
}
declare namespace UnityEngine {
  class GUIStateObjects extends System.Object {
    // constructors
    constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class GUIStyle extends System.Object {
    // constructors
    constructor();
    constructor(other: UnityEngine.GUIStyle);
    // methods
    Draw(position: UnityEngine.Rect, isHover: boolean, isActive: boolean, on: boolean, hasKeyboardFocus: boolean): void;
    Draw(position: UnityEngine.Rect, text: string, isHover: boolean, isActive: boolean, on: boolean, hasKeyboardFocus: boolean): void;
    Draw(position: UnityEngine.Rect, image: UnityEngine.Texture, isHover: boolean, isActive: boolean, on: boolean, hasKeyboardFocus: boolean): void;
    Draw(position: UnityEngine.Rect, content: UnityEngine.GUIContent, isHover: boolean, isActive: boolean, on: boolean, hasKeyboardFocus: boolean): void;
    Draw(position: UnityEngine.Rect, content: UnityEngine.GUIContent, controlID: number): void;
    Draw(position: UnityEngine.Rect, content: UnityEngine.GUIContent, controlID: number, on: boolean): void;
    DrawCursor(position: UnityEngine.Rect, content: UnityEngine.GUIContent, controlID: number, Character: number): void;
    DrawWithTextSelection(position: UnityEngine.Rect, content: UnityEngine.GUIContent, controlID: number, firstSelectedCharacter: number, lastSelectedCharacter: number): void;
    GetCursorPixelPosition(position: UnityEngine.Rect, content: UnityEngine.GUIContent, cursorStringIndex: number): UnityEngine.Vector2;
    GetCursorStringIndex(position: UnityEngine.Rect, content: UnityEngine.GUIContent, cursorPixelPosition: UnityEngine.Vector2): number;
    CalcSize(content: UnityEngine.GUIContent): UnityEngine.Vector2;
    CalcScreenSize(contentSize: UnityEngine.Vector2): UnityEngine.Vector2;
    CalcHeight(content: UnityEngine.GUIContent, width: number): number;
    CalcMinMaxWidth(content: UnityEngine.GUIContent, minWidth: any, maxWidth: any): void;
    ToString(): string;
    // properties
    normal: UnityEngine.GUIStyleState;
    hover: UnityEngine.GUIStyleState;
    active: UnityEngine.GUIStyleState;
    onNormal: UnityEngine.GUIStyleState;
    onHover: UnityEngine.GUIStyleState;
    onActive: UnityEngine.GUIStyleState;
    focused: UnityEngine.GUIStyleState;
    onFocused: UnityEngine.GUIStyleState;
    border: UnityEngine.RectOffset;
    margin: UnityEngine.RectOffset;
    padding: UnityEngine.RectOffset;
    overflow: UnityEngine.RectOffset;
    clipOffset: UnityEngine.Vector2;
    font: UnityEngine.Font;
    readonly lineHeight: number;
    static readonly none: UnityEngine.GUIStyle;
    readonly isHeightDependantOnWidth: boolean;
    name: string;
    imagePosition: UnityEngine.ImagePosition;
    alignment: UnityEngine.TextAnchor;
    wordWrap: boolean;
    clipping: UnityEngine.TextClipping;
    contentOffset: UnityEngine.Vector2;
    fixedWidth: number;
    fixedHeight: number;
    stretchWidth: boolean;
    stretchHeight: boolean;
    fontSize: number;
    fontStyle: UnityEngine.FontStyle;
    richText: boolean;
    // fields
  }
}
declare namespace UnityEngine {
  class GUIStyleState extends System.Object {
    // constructors
    constructor();
    // methods
    // properties
    background: UnityEngine.Texture2D;
    scaledBackgrounds: UnityEngine.Texture2D[];
    textColor: UnityEngine.Color;
    // fields
  }
}
declare namespace UnityEngine {
  class GUITargetAttribute extends System.Attribute {
    // constructors
    constructor();
    constructor(displayIndex: number);
    constructor(displayIndex: number, displayIndex1: number);
    constructor(displayIndex: number, displayIndex1: number, displayIndexList: number[]);
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class GUIText extends UnityEngine.GUIElement {
    // constructors
    constructor();
    // methods
    // properties
    text: string;
    material: UnityEngine.Material;
    pixelOffset: UnityEngine.Vector2;
    font: UnityEngine.Font;
    alignment: UnityEngine.TextAlignment;
    anchor: UnityEngine.TextAnchor;
    lineSpacing: number;
    tabSize: number;
    fontSize: number;
    fontStyle: UnityEngine.FontStyle;
    richText: boolean;
    color: UnityEngine.Color;
    // fields
  }
}
declare namespace UnityEngine {
  class GUITexture extends UnityEngine.GUIElement {
    // constructors
    constructor();
    // methods
    // properties
    color: UnityEngine.Color;
    texture: UnityEngine.Texture;
    pixelInset: UnityEngine.Rect;
    border: UnityEngine.RectOffset;
    // fields
  }
}
declare namespace UnityEngine {
  class GUIUtility extends System.Object {
    // constructors
    constructor();
    // methods
    static GetControlID(focus: UnityEngine.FocusType): number;
    static GetControlID(contents: UnityEngine.GUIContent, focus: UnityEngine.FocusType): number;
    static GetControlID(focus: UnityEngine.FocusType, position: UnityEngine.Rect): number;
    static GetControlID(hint: number, focus: UnityEngine.FocusType, position: UnityEngine.Rect): number;
    static GetControlID(contents: UnityEngine.GUIContent, focus: UnityEngine.FocusType, position: UnityEngine.Rect): number;
    static GetControlID(hint: number, focus: UnityEngine.FocusType): number;
    static GetStateObject(t: any, controlID: number): any;
    static QueryStateObject(t: any, controlID: number): any;
    static ExitGUI(): void;
    static GUIToScreenPoint(guiPoint: UnityEngine.Vector2): UnityEngine.Vector2;
    static ScreenToGUIPoint(screenPoint: UnityEngine.Vector2): UnityEngine.Vector2;
    static ScreenToGUIRect(screenRect: UnityEngine.Rect): UnityEngine.Rect;
    static RotateAroundPivot(angle: number, pivotPoint: UnityEngine.Vector2): void;
    static ScaleAroundPivot(scale: UnityEngine.Vector2, pivotPoint: UnityEngine.Vector2): void;
    // properties
    static hotControl: number;
    static keyboardControl: number;
    static systemCopyBuffer: string;
    static readonly hasModalWindow: boolean;
    // fields
  }
}
declare namespace UnityEngine {
  class GUIWordWrapSizer extends UnityEngine.GUILayoutEntry {
    // constructors
    constructor(style: UnityEngine.GUIStyle, content: UnityEngine.GUIContent, options: UnityEngine.GUILayoutOption[]);
    // methods
    CalcWidth(): void;
    CalcHeight(): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class Gyroscope extends System.Object {
    // constructors
    protected constructor();
    // methods
    // properties
    readonly rotationRate: UnityEngine.Vector3;
    readonly rotationRateUnbiased: UnityEngine.Vector3;
    readonly gravity: UnityEngine.Vector3;
    readonly userAcceleration: UnityEngine.Vector3;
    readonly attitude: UnityEngine.Quaternion;
    enabled: boolean;
    updateInterval: number;
    // fields
  }
}
declare namespace UnityEngine {
  class Handheld extends System.Object {
    // constructors
    constructor();
    // methods
    static PlayFullScreenMovie(path: string, bgColor: UnityEngine.Color, controlMode: UnityEngine.FullScreenMovieControlMode, scalingMode: UnityEngine.FullScreenMovieScalingMode): boolean;
    static PlayFullScreenMovie(path: string, bgColor: UnityEngine.Color, controlMode: UnityEngine.FullScreenMovieControlMode): boolean;
    static PlayFullScreenMovie(path: string, bgColor: UnityEngine.Color): boolean;
    static PlayFullScreenMovie(path: string): boolean;
    static Vibrate(): void;
    static SetActivityIndicatorStyle(style: UnityEngine.iOS.ActivityIndicatorStyle): void;
    static SetActivityIndicatorStyle(style: UnityEngine.AndroidActivityIndicatorStyle): void;
    static SetActivityIndicatorStyle(style: UnityEngine.TizenActivityIndicatorStyle): void;
    static GetActivityIndicatorStyle(): number;
    static StartActivityIndicator(): void;
    static StopActivityIndicator(): void;
    static ClearShaderCache(): void;
    // properties
    static use32BitDisplayBuffer: boolean;
    // fields
  }
}
declare namespace UnityEngine {
  class Hash128 extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    ToString(): string;
    static Parse(hashString: string): UnityEngine.Hash128;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    // properties
    readonly isValid: boolean;
    // fields
  }
}
declare namespace UnityEngine {
  class HeadDoF extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static NeckFrontBack: UnityEngine.HeadDoF;
    static NeckLeftRight: UnityEngine.HeadDoF;
    static NeckRollLeftRight: UnityEngine.HeadDoF;
    static HeadFrontBack: UnityEngine.HeadDoF;
    static HeadLeftRight: UnityEngine.HeadDoF;
    static HeadRollLeftRight: UnityEngine.HeadDoF;
    static LeftEyeDownUp: UnityEngine.HeadDoF;
    static LeftEyeInOut: UnityEngine.HeadDoF;
    static RightEyeDownUp: UnityEngine.HeadDoF;
    static RightEyeInOut: UnityEngine.HeadDoF;
    static JawDownUp: UnityEngine.HeadDoF;
    static JawLeftRight: UnityEngine.HeadDoF;
    static LastHeadDoF: UnityEngine.HeadDoF;
  }
}
declare namespace UnityEngine {
  class HeaderAttribute extends UnityEngine.PropertyAttribute {
    // constructors
    constructor(header: string);
    // methods
    // properties
    // fields
    header: string;
  }
}
declare namespace UnityEngine {
  class HelpURLAttribute extends System.Attribute {
    // constructors
    constructor(url: string);
    // methods
    // properties
    readonly URL: string;
    // fields
  }
}
declare namespace UnityEngine {
  class HideFlags extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static None: UnityEngine.HideFlags;
    static HideInHierarchy: UnityEngine.HideFlags;
    static HideInInspector: UnityEngine.HideFlags;
    static DontSaveInEditor: UnityEngine.HideFlags;
    static NotEditable: UnityEngine.HideFlags;
    static DontSaveInBuild: UnityEngine.HideFlags;
    static DontUnloadUnusedAsset: UnityEngine.HideFlags;
    static DontSave: UnityEngine.HideFlags;
    static HideAndDontSave: UnityEngine.HideFlags;
  }
}
declare namespace UnityEngine {
  class HideInInspector extends System.Attribute {
    // constructors
    constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class HingeJoint extends UnityEngine.Joint {
    // constructors
    constructor();
    // methods
    // properties
    motor: UnityEngine.JointMotor;
    limits: UnityEngine.JointLimits;
    spring: UnityEngine.JointSpring;
    useMotor: boolean;
    useLimits: boolean;
    useSpring: boolean;
    readonly velocity: number;
    readonly angle: number;
    // fields
  }
}
declare namespace UnityEngine {
  class HingeJoint2D extends UnityEngine.AnchoredJoint2D {
    // constructors
    constructor();
    // methods
    GetMotorTorque(timeStep: number): number;
    // properties
    useMotor: boolean;
    useLimits: boolean;
    motor: UnityEngine.JointMotor2D;
    limits: UnityEngine.JointAngleLimits2D;
    readonly limitState: UnityEngine.JointLimitState2D;
    readonly referenceAngle: number;
    readonly jointAngle: number;
    readonly jointSpeed: number;
    // fields
  }
}
declare namespace UnityEngine {
  class HorizontalWrapMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Wrap: UnityEngine.HorizontalWrapMode;
    static Overflow: UnityEngine.HorizontalWrapMode;
  }
}
declare namespace UnityEngine {
  class HostData extends System.Object {
    // constructors
    constructor();
    // methods
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
declare namespace UnityEngine {
  class HumanBodyBones extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Hips: UnityEngine.HumanBodyBones;
    static LeftUpperLeg: UnityEngine.HumanBodyBones;
    static RightUpperLeg: UnityEngine.HumanBodyBones;
    static LeftLowerLeg: UnityEngine.HumanBodyBones;
    static RightLowerLeg: UnityEngine.HumanBodyBones;
    static LeftFoot: UnityEngine.HumanBodyBones;
    static RightFoot: UnityEngine.HumanBodyBones;
    static Spine: UnityEngine.HumanBodyBones;
    static Chest: UnityEngine.HumanBodyBones;
    static Neck: UnityEngine.HumanBodyBones;
    static Head: UnityEngine.HumanBodyBones;
    static LeftShoulder: UnityEngine.HumanBodyBones;
    static RightShoulder: UnityEngine.HumanBodyBones;
    static LeftUpperArm: UnityEngine.HumanBodyBones;
    static RightUpperArm: UnityEngine.HumanBodyBones;
    static LeftLowerArm: UnityEngine.HumanBodyBones;
    static RightLowerArm: UnityEngine.HumanBodyBones;
    static LeftHand: UnityEngine.HumanBodyBones;
    static RightHand: UnityEngine.HumanBodyBones;
    static LeftToes: UnityEngine.HumanBodyBones;
    static RightToes: UnityEngine.HumanBodyBones;
    static LeftEye: UnityEngine.HumanBodyBones;
    static RightEye: UnityEngine.HumanBodyBones;
    static Jaw: UnityEngine.HumanBodyBones;
    static LeftThumbProximal: UnityEngine.HumanBodyBones;
    static LeftThumbIntermediate: UnityEngine.HumanBodyBones;
    static LeftThumbDistal: UnityEngine.HumanBodyBones;
    static LeftIndexProximal: UnityEngine.HumanBodyBones;
    static LeftIndexIntermediate: UnityEngine.HumanBodyBones;
    static LeftIndexDistal: UnityEngine.HumanBodyBones;
    static LeftMiddleProximal: UnityEngine.HumanBodyBones;
    static LeftMiddleIntermediate: UnityEngine.HumanBodyBones;
    static LeftMiddleDistal: UnityEngine.HumanBodyBones;
    static LeftRingProximal: UnityEngine.HumanBodyBones;
    static LeftRingIntermediate: UnityEngine.HumanBodyBones;
    static LeftRingDistal: UnityEngine.HumanBodyBones;
    static LeftLittleProximal: UnityEngine.HumanBodyBones;
    static LeftLittleIntermediate: UnityEngine.HumanBodyBones;
    static LeftLittleDistal: UnityEngine.HumanBodyBones;
    static RightThumbProximal: UnityEngine.HumanBodyBones;
    static RightThumbIntermediate: UnityEngine.HumanBodyBones;
    static RightThumbDistal: UnityEngine.HumanBodyBones;
    static RightIndexProximal: UnityEngine.HumanBodyBones;
    static RightIndexIntermediate: UnityEngine.HumanBodyBones;
    static RightIndexDistal: UnityEngine.HumanBodyBones;
    static RightMiddleProximal: UnityEngine.HumanBodyBones;
    static RightMiddleIntermediate: UnityEngine.HumanBodyBones;
    static RightMiddleDistal: UnityEngine.HumanBodyBones;
    static RightRingProximal: UnityEngine.HumanBodyBones;
    static RightRingIntermediate: UnityEngine.HumanBodyBones;
    static RightRingDistal: UnityEngine.HumanBodyBones;
    static RightLittleProximal: UnityEngine.HumanBodyBones;
    static RightLittleIntermediate: UnityEngine.HumanBodyBones;
    static RightLittleDistal: UnityEngine.HumanBodyBones;
    static LastBone: UnityEngine.HumanBodyBones;
  }
}
declare namespace UnityEngine {
  class HumanBodyPart extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static BodyStart: UnityEngine.HumanBodyPart;
    static LeftFingerStart: UnityEngine.HumanBodyPart;
    static RightFingerStart: UnityEngine.HumanBodyPart;
    static LastBone: UnityEngine.HumanBodyPart;
  }
}
declare namespace UnityEngine {
  class HumanBone extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    boneName: string;
    humanName: string;
    // fields
    limit: UnityEngine.HumanLimit;
  }
}
declare namespace UnityEngine {
  class HumanDescription extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    upperArmTwist: number;
    lowerArmTwist: number;
    upperLegTwist: number;
    lowerLegTwist: number;
    armStretch: number;
    legStretch: number;
    feetSpacing: number;
    hasTranslationDoF: boolean;
    // fields
    human: UnityEngine.HumanBone[];
    skeleton: UnityEngine.SkeletonBone[];
  }
}
declare namespace UnityEngine {
  class HumanLimit extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    useDefaultValues: boolean;
    min: UnityEngine.Vector3;
    max: UnityEngine.Vector3;
    center: UnityEngine.Vector3;
    axisLength: number;
    // fields
  }
}
declare namespace UnityEngine {
  class HumanParameter extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static UpperArmTwist: UnityEngine.HumanParameter;
    static LowerArmTwist: UnityEngine.HumanParameter;
    static UpperLegTwist: UnityEngine.HumanParameter;
    static LowerLegTwist: UnityEngine.HumanParameter;
    static ArmStretch: UnityEngine.HumanParameter;
    static LegStretch: UnityEngine.HumanParameter;
    static FeetSpacing: UnityEngine.HumanParameter;
  }
}
declare namespace UnityEngine {
  class HumanPose extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    bodyPosition: UnityEngine.Vector3;
    bodyRotation: UnityEngine.Quaternion;
    muscles: number[];
  }
}
declare namespace UnityEngine {
  class HumanPoseHandler extends System.Object {
    // constructors
    constructor(avatar: UnityEngine.Avatar, root: UnityEngine.Transform);
    // methods
    Dispose(): void;
    GetHumanPose(humanPose: any): void;
    SetHumanPose(humanPose: any): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class HumanTrait extends System.Object {
    // constructors
    constructor();
    // methods
    static MuscleFromBone(i: number, dofIndex: number): number;
    static BoneFromMuscle(i: number): number;
    static RequiredBone(i: number): boolean;
    static GetMuscleDefaultMin(i: number): number;
    static GetMuscleDefaultMax(i: number): number;
    static GetParentBone(i: number): number;
    // properties
    static readonly MuscleCount: number;
    static readonly MuscleName: string[];
    static readonly BoneCount: number;
    static readonly BoneName: string[];
    static readonly RequiredBoneCount: number;
    // fields
  }
}
declare namespace UnityEngine {
  class ICanvasRaycastFilter {
    // constructors
    protected constructor();
    // methods
    IsRaycastLocationValid(sp: UnityEngine.Vector2, eventCamera: UnityEngine.Camera): boolean;
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class IL2CPPStructAlignmentAttribute extends System.Attribute {
    // constructors
    constructor();
    // methods
    // properties
    // fields
    Align: number;
  }
}
declare namespace UnityEngine {
  class ILogger {
    // constructors
    protected constructor();
    // methods
    IsLogTypeAllowed(logType: UnityEngine.LogType): boolean;
    Log(logType: UnityEngine.LogType, message: any): void;
    Log(logType: UnityEngine.LogType, message: any, context: UnityEngine.Object): void;
    Log(logType: UnityEngine.LogType, tag: string, message: any): void;
    Log(logType: UnityEngine.LogType, tag: string, message: any, context: UnityEngine.Object): void;
    Log(message: any): void;
    Log(tag: string, message: any): void;
    Log(tag: string, message: any, context: UnityEngine.Object): void;
    LogWarning(tag: string, message: any): void;
    LogWarning(tag: string, message: any, context: UnityEngine.Object): void;
    LogError(tag: string, message: any): void;
    LogError(tag: string, message: any, context: UnityEngine.Object): void;
    LogFormat(logType: UnityEngine.LogType, format: string, args: any[]): void;
    LogException(exception: System.Exception): void;
    // properties
    logHandler: UnityEngine.ILogHandler;
    logEnabled: boolean;
    filterLogType: UnityEngine.LogType;
    // fields
  }
}
declare namespace UnityEngine {
  class ILogHandler {
    // constructors
    protected constructor();
    // methods
    LogFormat(logType: UnityEngine.LogType, context: UnityEngine.Object, format: string, args: any[]): void;
    LogException(exception: System.Exception, context: UnityEngine.Object): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class ImageEffectAllowedInSceneView extends System.Attribute {
    // constructors
    constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class ImageEffectOpaque extends System.Attribute {
    // constructors
    constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class ImageEffectTransformsToLDR extends System.Attribute {
    // constructors
    constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class ImagePosition extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static ImageLeft: UnityEngine.ImagePosition;
    static ImageAbove: UnityEngine.ImagePosition;
    static ImageOnly: UnityEngine.ImagePosition;
    static TextOnly: UnityEngine.ImagePosition;
  }
}
declare namespace UnityEngine {
  class IMECompositionMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Auto: UnityEngine.IMECompositionMode;
    static On: UnityEngine.IMECompositionMode;
    static Off: UnityEngine.IMECompositionMode;
  }
}
declare namespace UnityEngine {
  class Input extends System.Object {
    // constructors
    constructor();
    // methods
    static GetAxis(axisName: string): number;
    static GetAxisRaw(axisName: string): number;
    static GetButton(buttonName: string): boolean;
    static GetButtonDown(buttonName: string): boolean;
    static GetButtonUp(buttonName: string): boolean;
    static GetKey(name: string): boolean;
    static GetKey(key: UnityEngine.KeyCode): boolean;
    static GetKeyDown(name: string): boolean;
    static GetKeyDown(key: UnityEngine.KeyCode): boolean;
    static GetKeyUp(name: string): boolean;
    static GetKeyUp(key: UnityEngine.KeyCode): boolean;
    static GetJoystickNames(): string[];
    static IsJoystickPreconfigured(joystickName: string): boolean;
    static GetMouseButton(button: number): boolean;
    static GetMouseButtonDown(button: number): boolean;
    static GetMouseButtonUp(button: number): boolean;
    static ResetInputAxes(): void;
    static GetAccelerationEvent(index: number): UnityEngine.AccelerationEvent;
    static GetTouch(index: number): UnityEngine.Touch;
    // properties
    static compensateSensors: boolean;
    static readonly isGyroAvailable: boolean;
    static readonly gyro: UnityEngine.Gyroscope;
    static readonly mousePosition: UnityEngine.Vector3;
    static readonly mouseScrollDelta: UnityEngine.Vector2;
    static readonly mousePresent: boolean;
    static simulateMouseWithTouches: boolean;
    static readonly anyKey: boolean;
    static readonly anyKeyDown: boolean;
    static readonly inputString: string;
    static readonly acceleration: UnityEngine.Vector3;
    static readonly accelerationEvents: UnityEngine.AccelerationEvent[];
    static readonly accelerationEventCount: number;
    static readonly touches: UnityEngine.Touch[];
    static readonly touchCount: number;
    static eatKeyPressOnTextFieldFocus: boolean;
    static readonly touchPressureSupported: boolean;
    static readonly stylusTouchSupported: boolean;
    static readonly touchSupported: boolean;
    static multiTouchEnabled: boolean;
    static readonly location: UnityEngine.LocationService;
    static readonly compass: UnityEngine.Compass;
    static readonly deviceOrientation: UnityEngine.DeviceOrientation;
    static imeCompositionMode: UnityEngine.IMECompositionMode;
    static readonly compositionString: string;
    static readonly imeIsSelected: boolean;
    static compositionCursorPos: UnityEngine.Vector2;
    static backButtonLeavesApp: boolean;
    // fields
  }
}
declare namespace UnityEngine.Internal {
  class DefaultValueAttribute extends System.Attribute {
    // constructors
    constructor(value: string);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    // properties
    readonly Value: any;
    // fields
  }
}
declare namespace UnityEngine.Internal {
  class ExcludeFromDocsAttribute extends System.Attribute {
    // constructors
    constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class InternalDrawTextureArguments extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    screenRect: UnityEngine.Rect;
    texture: UnityEngine.Texture;
    sourceRect: UnityEngine.Rect;
    leftBorder: number;
    rightBorder: number;
    topBorder: number;
    bottomBorder: number;
    color: UnityEngine.Color32;
    mat: UnityEngine.Material;
    pass: number;
  }
}
declare namespace UnityEngine {
  class InternalEmitParticleArguments extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    pos: UnityEngine.Vector3;
    velocity: UnityEngine.Vector3;
    size: number;
    energy: number;
    color: UnityEngine.Color;
    rotation: number;
    angularVelocity: number;
  }
}
declare namespace UnityEngine {
  class InternalStaticBatchingUtility extends System.Object {
    // constructors
    constructor();
    // methods
    static CombineRoot(staticBatchRoot: UnityEngine.GameObject): void;
    static Combine(staticBatchRoot: UnityEngine.GameObject, combineOnlyStatic: boolean, isEditorPostprocessScene: boolean): void;
    static CombineGameObjects(gos: UnityEngine.GameObject[], staticBatchRoot: UnityEngine.GameObject, isEditorPostprocessScene: boolean): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine.InternalStaticBatchingUtility {
  class SortGO extends System.Object {
    // constructors
    constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class Internal_DrawArguments extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    target: any;
    position: UnityEngine.Rect;
    isHover: number;
    isActive: number;
    on: number;
    hasKeyboardFocus: number;
  }
}
declare namespace UnityEngine {
  class Internal_DrawMeshMatrixArguments extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    layer: number;
    submeshIndex: number;
    matrix: UnityEngine.Matrix4x4;
    castShadows: number;
    receiveShadows: number;
    reflectionProbeAnchorInstanceID: number;
    useLightProbes: boolean;
  }
}
declare namespace UnityEngine {
  class Internal_DrawWithTextSelectionArguments extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    target: any;
    position: UnityEngine.Rect;
    firstPos: number;
    lastPos: number;
    cursorColor: UnityEngine.Color;
    selectionColor: UnityEngine.Color;
    isHover: number;
    isActive: number;
    on: number;
    hasKeyboardFocus: number;
    drawSelectionAsComposition: number;
  }
}
declare namespace UnityEngine.iOS {
  class ActivityIndicatorStyle extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static DontShow: UnityEngine.iOS.ActivityIndicatorStyle;
    static WhiteLarge: UnityEngine.iOS.ActivityIndicatorStyle;
    static White: UnityEngine.iOS.ActivityIndicatorStyle;
    static Gray: UnityEngine.iOS.ActivityIndicatorStyle;
  }
}
declare namespace UnityEngine.iOS {
  class ADBannerView extends System.Object {
    // constructors
    constructor(type: UnityEngine.iOS.ADBannerView.Type, layout: UnityEngine.iOS.ADBannerView.Layout);
    // methods
    static IsAvailable(type: UnityEngine.iOS.ADBannerView.Type): boolean;
    // properties
    readonly loaded: boolean;
    visible: boolean;
    layout: UnityEngine.iOS.ADBannerView.Layout;
    position: UnityEngine.Vector2;
    readonly size: UnityEngine.Vector2;
    // fields
  }
}
declare namespace UnityEngine.iOS.ADBannerView {
  class Layout extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Top: UnityEngine.iOS.ADBannerView.Layout;
    static Bottom: UnityEngine.iOS.ADBannerView.Layout;
    static TopLeft: UnityEngine.iOS.ADBannerView.Layout;
    static TopRight: UnityEngine.iOS.ADBannerView.Layout;
    static TopCenter: UnityEngine.iOS.ADBannerView.Layout;
    static BottomLeft: UnityEngine.iOS.ADBannerView.Layout;
    static BottomRight: UnityEngine.iOS.ADBannerView.Layout;
    static BottomCenter: UnityEngine.iOS.ADBannerView.Layout;
    static CenterLeft: UnityEngine.iOS.ADBannerView.Layout;
    static CenterRight: UnityEngine.iOS.ADBannerView.Layout;
    static Center: UnityEngine.iOS.ADBannerView.Layout;
    static Manual: UnityEngine.iOS.ADBannerView.Layout;
  }
}
declare namespace UnityEngine.iOS.ADBannerView {
  class Type extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Banner: UnityEngine.iOS.ADBannerView.Type;
    static MediumRect: UnityEngine.iOS.ADBannerView.Type;
  }
}
declare namespace UnityEngine.iOS {
  class ADInterstitialAd extends System.Object {
    // constructors
    constructor(autoReload: boolean);
    constructor();
    // methods
    Show(): void;
    ReloadAd(): void;
    // properties
    static readonly isAvailable: boolean;
    readonly loaded: boolean;
    // fields
  }
}
declare namespace UnityEngine.iOS {
  class CalendarIdentifier extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static GregorianCalendar: UnityEngine.iOS.CalendarIdentifier;
    static BuddhistCalendar: UnityEngine.iOS.CalendarIdentifier;
    static ChineseCalendar: UnityEngine.iOS.CalendarIdentifier;
    static HebrewCalendar: UnityEngine.iOS.CalendarIdentifier;
    static IslamicCalendar: UnityEngine.iOS.CalendarIdentifier;
    static IslamicCivilCalendar: UnityEngine.iOS.CalendarIdentifier;
    static JapaneseCalendar: UnityEngine.iOS.CalendarIdentifier;
    static RepublicOfChinaCalendar: UnityEngine.iOS.CalendarIdentifier;
    static PersianCalendar: UnityEngine.iOS.CalendarIdentifier;
    static IndianCalendar: UnityEngine.iOS.CalendarIdentifier;
    static ISO8601Calendar: UnityEngine.iOS.CalendarIdentifier;
  }
}
declare namespace UnityEngine.iOS {
  class CalendarUnit extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Era: UnityEngine.iOS.CalendarUnit;
    static Year: UnityEngine.iOS.CalendarUnit;
    static Month: UnityEngine.iOS.CalendarUnit;
    static Day: UnityEngine.iOS.CalendarUnit;
    static Hour: UnityEngine.iOS.CalendarUnit;
    static Minute: UnityEngine.iOS.CalendarUnit;
    static Second: UnityEngine.iOS.CalendarUnit;
    static Week: UnityEngine.iOS.CalendarUnit;
    static Weekday: UnityEngine.iOS.CalendarUnit;
    static WeekdayOrdinal: UnityEngine.iOS.CalendarUnit;
    static Quarter: UnityEngine.iOS.CalendarUnit;
  }
}
declare namespace UnityEngine.iOS {
  class Device extends System.Object {
    // constructors
    constructor();
    // methods
    static SetNoBackupFlag(path: string): void;
    static ResetNoBackupFlag(path: string): void;
    // properties
    static readonly generation: UnityEngine.iOS.DeviceGeneration;
    static readonly systemVersion: string;
    static readonly vendorIdentifier: string;
    static readonly advertisingIdentifier: string;
    static readonly advertisingTrackingEnabled: boolean;
    // fields
  }
}
declare namespace UnityEngine.iOS {
  class DeviceGeneration extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Unknown: UnityEngine.iOS.DeviceGeneration;
    static iPhone: UnityEngine.iOS.DeviceGeneration;
    static iPhone3G: UnityEngine.iOS.DeviceGeneration;
    static iPhone3GS: UnityEngine.iOS.DeviceGeneration;
    static iPodTouch1Gen: UnityEngine.iOS.DeviceGeneration;
    static iPodTouch2Gen: UnityEngine.iOS.DeviceGeneration;
    static iPodTouch3Gen: UnityEngine.iOS.DeviceGeneration;
    static iPad1Gen: UnityEngine.iOS.DeviceGeneration;
    static iPhone4: UnityEngine.iOS.DeviceGeneration;
    static iPodTouch4Gen: UnityEngine.iOS.DeviceGeneration;
    static iPad2Gen: UnityEngine.iOS.DeviceGeneration;
    static iPhone4S: UnityEngine.iOS.DeviceGeneration;
    static iPad3Gen: UnityEngine.iOS.DeviceGeneration;
    static iPhone5: UnityEngine.iOS.DeviceGeneration;
    static iPodTouch5Gen: UnityEngine.iOS.DeviceGeneration;
    static iPadMini1Gen: UnityEngine.iOS.DeviceGeneration;
    static iPad4Gen: UnityEngine.iOS.DeviceGeneration;
    static iPhone5C: UnityEngine.iOS.DeviceGeneration;
    static iPhone5S: UnityEngine.iOS.DeviceGeneration;
    static iPadAir1: UnityEngine.iOS.DeviceGeneration;
    static iPad5Gen: UnityEngine.iOS.DeviceGeneration;
    static iPadMini2Gen: UnityEngine.iOS.DeviceGeneration;
    static iPhone6: UnityEngine.iOS.DeviceGeneration;
    static iPhone6Plus: UnityEngine.iOS.DeviceGeneration;
    static iPadMini3Gen: UnityEngine.iOS.DeviceGeneration;
    static iPadAir2: UnityEngine.iOS.DeviceGeneration;
    static iPhone6S: UnityEngine.iOS.DeviceGeneration;
    static iPhone6SPlus: UnityEngine.iOS.DeviceGeneration;
    static iPadPro1Gen: UnityEngine.iOS.DeviceGeneration;
    static iPadMini4Gen: UnityEngine.iOS.DeviceGeneration;
    static iPhoneSE1Gen: UnityEngine.iOS.DeviceGeneration;
    static iPadPro10Inch1Gen: UnityEngine.iOS.DeviceGeneration;
    static iPhone7: UnityEngine.iOS.DeviceGeneration;
    static iPhone7Plus: UnityEngine.iOS.DeviceGeneration;
    static iPhoneUnknown: UnityEngine.iOS.DeviceGeneration;
    static iPadUnknown: UnityEngine.iOS.DeviceGeneration;
    static iPodTouchUnknown: UnityEngine.iOS.DeviceGeneration;
  }
}
declare namespace UnityEngine.iOS {
  class LocalNotification extends System.Object {
    // constructors
    constructor();
    // methods
    // properties
    fireDate: any;
    timeZone: string;
    repeatInterval: UnityEngine.iOS.CalendarUnit;
    repeatCalendar: UnityEngine.iOS.CalendarIdentifier;
    alertBody: string;
    alertAction: string;
    hasAction: boolean;
    alertLaunchImage: string;
    applicationIconBadgeNumber: number;
    soundName: string;
    static readonly defaultSoundName: string;
    userInfo: any;
    // fields
  }
}
declare namespace UnityEngine.iOS {
  class NotificationServices extends System.Object {
    // constructors
    constructor();
    // methods
    static GetLocalNotification(index: number): UnityEngine.iOS.LocalNotification;
    static ScheduleLocalNotification(notification: UnityEngine.iOS.LocalNotification): void;
    static PresentLocalNotificationNow(notification: UnityEngine.iOS.LocalNotification): void;
    static CancelLocalNotification(notification: UnityEngine.iOS.LocalNotification): void;
    static CancelAllLocalNotifications(): void;
    static GetRemoteNotification(index: number): UnityEngine.iOS.RemoteNotification;
    static ClearLocalNotifications(): void;
    static ClearRemoteNotifications(): void;
    static RegisterForNotifications(notificationTypes: UnityEngine.iOS.NotificationType): void;
    static RegisterForNotifications(notificationTypes: UnityEngine.iOS.NotificationType, registerForRemote: boolean): void;
    static UnregisterForRemoteNotifications(): void;
    // properties
    static readonly localNotificationCount: number;
    static readonly localNotifications: UnityEngine.iOS.LocalNotification[];
    static readonly scheduledLocalNotifications: UnityEngine.iOS.LocalNotification[];
    static readonly remoteNotificationCount: number;
    static readonly remoteNotifications: UnityEngine.iOS.RemoteNotification[];
    static readonly enabledNotificationTypes: UnityEngine.iOS.NotificationType;
    static readonly deviceToken: number[];
    static readonly registrationError: string;
    // fields
  }
}
declare namespace UnityEngine.iOS {
  class NotificationType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static None: UnityEngine.iOS.NotificationType;
    static Badge: UnityEngine.iOS.NotificationType;
    static Sound: UnityEngine.iOS.NotificationType;
    static Alert: UnityEngine.iOS.NotificationType;
  }
}
declare namespace UnityEngine.iOS {
  class OnDemandResources extends System.Object {
    // constructors
    protected constructor();
    // methods
    static PreloadAsync(tags: string[]): UnityEngine.iOS.OnDemandResourcesRequest;
    // properties
    static readonly enabled: boolean;
    // fields
  }
}
declare namespace UnityEngine.iOS {
  class OnDemandResourcesRequest extends UnityEngine.AsyncOperation {
    // constructors
    protected constructor();
    // methods
    GetResourcePath(resourceName: string): string;
    Dispose(): void;
    // properties
    readonly error: string;
    loadingPriority: number;
    // fields
  }
}
declare namespace UnityEngine.iOS {
  class RemoteNotification extends System.Object {
    // constructors
    protected constructor();
    // methods
    // properties
    readonly alertBody: string;
    readonly hasAction: boolean;
    readonly applicationIconBadgeNumber: number;
    readonly soundName: string;
    readonly userInfo: any;
    // fields
  }
}
declare namespace UnityEngine {
  class iOSActivityIndicatorStyle extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static DontShow: UnityEngine.iOSActivityIndicatorStyle;
    static WhiteLarge: UnityEngine.iOSActivityIndicatorStyle;
    static White: UnityEngine.iOSActivityIndicatorStyle;
    static Gray: UnityEngine.iOSActivityIndicatorStyle;
  }
}
declare namespace UnityEngine {
  class iPhone extends System.Object {
    // constructors
    constructor();
    // methods
    static SetNoBackupFlag(path: string): void;
    static ResetNoBackupFlag(path: string): void;
    // properties
    static readonly generation: UnityEngine.iPhoneGeneration;
    static readonly vendorIdentifier: string;
    static readonly advertisingIdentifier: string;
    static readonly advertisingTrackingEnabled: boolean;
    // fields
  }
}
declare namespace UnityEngine {
  class iPhoneAccelerationEvent extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    readonly timeDelta: number;
    readonly acceleration: UnityEngine.Vector3;
    readonly deltaTime: number;
    // fields
  }
}
declare namespace UnityEngine {
  class iPhoneGeneration extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Unknown: UnityEngine.iPhoneGeneration;
    static iPhone: UnityEngine.iPhoneGeneration;
    static iPhone3G: UnityEngine.iPhoneGeneration;
    static iPhone3GS: UnityEngine.iPhoneGeneration;
    static iPodTouch1Gen: UnityEngine.iPhoneGeneration;
    static iPodTouch2Gen: UnityEngine.iPhoneGeneration;
    static iPodTouch3Gen: UnityEngine.iPhoneGeneration;
    static iPad1Gen: UnityEngine.iPhoneGeneration;
    static iPhone4: UnityEngine.iPhoneGeneration;
    static iPodTouch4Gen: UnityEngine.iPhoneGeneration;
    static iPad2Gen: UnityEngine.iPhoneGeneration;
    static iPhone4S: UnityEngine.iPhoneGeneration;
    static iPad3Gen: UnityEngine.iPhoneGeneration;
    static iPhone5: UnityEngine.iPhoneGeneration;
    static iPodTouch5Gen: UnityEngine.iPhoneGeneration;
    static iPadMini1Gen: UnityEngine.iPhoneGeneration;
    static iPad4Gen: UnityEngine.iPhoneGeneration;
    static iPhone5C: UnityEngine.iPhoneGeneration;
    static iPhone5S: UnityEngine.iPhoneGeneration;
    static iPhoneUnknown: UnityEngine.iPhoneGeneration;
    static iPadUnknown: UnityEngine.iPhoneGeneration;
    static iPodTouchUnknown: UnityEngine.iPhoneGeneration;
  }
}
declare namespace UnityEngine {
  class iPhoneInput extends System.Object {
    // constructors
    constructor();
    // methods
    static GetTouch(index: number): UnityEngine.iPhoneTouch;
    static GetAccelerationEvent(index: number): UnityEngine.iPhoneAccelerationEvent;
    // properties
    static readonly orientation: UnityEngine.iPhoneOrientation;
    static readonly lastLocation: UnityEngine.LocationInfo;
    static readonly accelerationEvents: UnityEngine.iPhoneAccelerationEvent[];
    static readonly touches: UnityEngine.iPhoneTouch[];
    static readonly touchCount: number;
    static multiTouchEnabled: boolean;
    static readonly accelerationEventCount: number;
    static readonly acceleration: UnityEngine.Vector3;
    // fields
  }
}
declare namespace UnityEngine {
  class iPhoneKeyboard extends System.Object {
    // constructors
    constructor();
    // methods
    // properties
    text: string;
    static hideInput: boolean;
    active: boolean;
    readonly done: boolean;
    static readonly area: UnityEngine.Rect;
    static readonly visible: boolean;
    // fields
  }
}
declare namespace UnityEngine {
  class iPhoneKeyboardType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Default: UnityEngine.iPhoneKeyboardType;
    static ASCIICapable: UnityEngine.iPhoneKeyboardType;
    static NumbersAndPunctuation: UnityEngine.iPhoneKeyboardType;
    static URL: UnityEngine.iPhoneKeyboardType;
    static NumberPad: UnityEngine.iPhoneKeyboardType;
    static PhonePad: UnityEngine.iPhoneKeyboardType;
    static NamePhonePad: UnityEngine.iPhoneKeyboardType;
    static EmailAddress: UnityEngine.iPhoneKeyboardType;
  }
}
declare namespace UnityEngine {
  class iPhoneMovieControlMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Full: UnityEngine.iPhoneMovieControlMode;
    static Minimal: UnityEngine.iPhoneMovieControlMode;
    static CancelOnTouch: UnityEngine.iPhoneMovieControlMode;
    static Hidden: UnityEngine.iPhoneMovieControlMode;
    static VolumeOnly: UnityEngine.iPhoneMovieControlMode;
  }
}
declare namespace UnityEngine {
  class iPhoneMovieScalingMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static None: UnityEngine.iPhoneMovieScalingMode;
    static AspectFit: UnityEngine.iPhoneMovieScalingMode;
    static AspectFill: UnityEngine.iPhoneMovieScalingMode;
    static Fill: UnityEngine.iPhoneMovieScalingMode;
  }
}
declare namespace UnityEngine {
  class iPhoneNetworkReachability extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static NotReachable: UnityEngine.iPhoneNetworkReachability;
    static ReachableViaCarrierDataNetwork: UnityEngine.iPhoneNetworkReachability;
    static ReachableViaWiFiNetwork: UnityEngine.iPhoneNetworkReachability;
  }
}
declare namespace UnityEngine {
  class iPhoneOrientation extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Unknown: UnityEngine.iPhoneOrientation;
    static Portrait: UnityEngine.iPhoneOrientation;
    static PortraitUpsideDown: UnityEngine.iPhoneOrientation;
    static LandscapeLeft: UnityEngine.iPhoneOrientation;
    static LandscapeRight: UnityEngine.iPhoneOrientation;
    static FaceUp: UnityEngine.iPhoneOrientation;
    static FaceDown: UnityEngine.iPhoneOrientation;
  }
}
declare namespace UnityEngine {
  class iPhoneScreenOrientation extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Unknown: UnityEngine.iPhoneScreenOrientation;
    static Portrait: UnityEngine.iPhoneScreenOrientation;
    static PortraitUpsideDown: UnityEngine.iPhoneScreenOrientation;
    static LandscapeLeft: UnityEngine.iPhoneScreenOrientation;
    static LandscapeRight: UnityEngine.iPhoneScreenOrientation;
    static AutoRotation: UnityEngine.iPhoneScreenOrientation;
    static Landscape: UnityEngine.iPhoneScreenOrientation;
  }
}
declare namespace UnityEngine {
  class iPhoneSettings extends System.Object {
    // constructors
    constructor();
    // methods
    static StartLocationServiceUpdates(desiredAccuracyInMeters: number, updateDistanceInMeters: number): void;
    static StartLocationServiceUpdates(desiredAccuracyInMeters: number): void;
    static StartLocationServiceUpdates(): void;
    static StopLocationServiceUpdates(): void;
    // properties
    static readonly verticalOrientation: boolean;
    static readonly screenCanDarken: boolean;
    static readonly locationServiceStatus: UnityEngine.LocationServiceStatus;
    static readonly locationServiceEnabledByUser: boolean;
    static readonly screenOrientation: UnityEngine.iPhoneScreenOrientation;
    static readonly uniqueIdentifier: string;
    static readonly name: string;
    static readonly model: string;
    static readonly systemName: string;
    static readonly internetReachability: UnityEngine.iPhoneNetworkReachability;
    static readonly systemVersion: string;
    static readonly generation: UnityEngine.iPhoneGeneration;
    // fields
  }
}
declare namespace UnityEngine {
  class iPhoneTouch extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    readonly positionDelta: UnityEngine.Vector2;
    readonly timeDelta: number;
    readonly fingerId: number;
    readonly position: UnityEngine.Vector2;
    readonly deltaPosition: UnityEngine.Vector2;
    readonly deltaTime: number;
    readonly tapCount: number;
    readonly phase: UnityEngine.iPhoneTouchPhase;
    // fields
  }
}
declare namespace UnityEngine {
  class iPhoneTouchPhase extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Began: UnityEngine.iPhoneTouchPhase;
    static Moved: UnityEngine.iPhoneTouchPhase;
    static Stationary: UnityEngine.iPhoneTouchPhase;
    static Ended: UnityEngine.iPhoneTouchPhase;
    static Canceled: UnityEngine.iPhoneTouchPhase;
  }
}
declare namespace UnityEngine {
  class iPhoneUtils extends System.Object {
    // constructors
    constructor();
    // methods
    static PlayMovie(path: string, bgColor: UnityEngine.Color, controlMode: UnityEngine.iPhoneMovieControlMode, scalingMode: UnityEngine.iPhoneMovieScalingMode): void;
    static PlayMovie(path: string, bgColor: UnityEngine.Color, controlMode: UnityEngine.iPhoneMovieControlMode): void;
    static PlayMovie(path: string, bgColor: UnityEngine.Color): void;
    static PlayMovieURL(url: string, bgColor: UnityEngine.Color, controlMode: UnityEngine.iPhoneMovieControlMode, scalingMode: UnityEngine.iPhoneMovieScalingMode): void;
    static PlayMovieURL(url: string, bgColor: UnityEngine.Color, controlMode: UnityEngine.iPhoneMovieControlMode): void;
    static PlayMovieURL(url: string, bgColor: UnityEngine.Color): void;
    static Vibrate(): void;
    // properties
    static readonly isApplicationGenuine: boolean;
    static readonly isApplicationGenuineAvailable: boolean;
    // fields
  }
}
declare namespace UnityEngine {
  class ISerializationCallbackReceiver {
    // constructors
    protected constructor();
    // methods
    OnBeforeSerialize(): void;
    OnAfterDeserialize(): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class Joint extends UnityEngine.Component {
    // constructors
    constructor();
    // methods
    // properties
    connectedBody: UnityEngine.Rigidbody;
    axis: UnityEngine.Vector3;
    anchor: UnityEngine.Vector3;
    connectedAnchor: UnityEngine.Vector3;
    autoConfigureConnectedAnchor: boolean;
    breakForce: number;
    breakTorque: number;
    enableCollision: boolean;
    enablePreprocessing: boolean;
    readonly currentForce: UnityEngine.Vector3;
    readonly currentTorque: UnityEngine.Vector3;
    // fields
  }
}
declare namespace UnityEngine {
  class Joint2D extends UnityEngine.Behaviour {
    // constructors
    constructor();
    // methods
    GetReactionForce(timeStep: number): UnityEngine.Vector2;
    GetReactionTorque(timeStep: number): number;
    // properties
    collideConnected: boolean;
    connectedBody: UnityEngine.Rigidbody2D;
    enableCollision: boolean;
    breakForce: number;
    breakTorque: number;
    readonly reactionForce: UnityEngine.Vector2;
    readonly reactionTorque: number;
    // fields
  }
}
declare namespace UnityEngine {
  class JointAngleLimits2D extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    min: number;
    max: number;
    // fields
  }
}
declare namespace UnityEngine {
  class JointDrive extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    mode: UnityEngine.JointDriveMode;
    positionSpring: number;
    positionDamper: number;
    maximumForce: number;
    // fields
  }
}
declare namespace UnityEngine {
  class JointDriveMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static None: UnityEngine.JointDriveMode;
    static Position: UnityEngine.JointDriveMode;
    static Velocity: UnityEngine.JointDriveMode;
    static PositionAndVelocity: UnityEngine.JointDriveMode;
  }
}
declare namespace UnityEngine {
  class JointLimits extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    min: number;
    max: number;
    bounciness: number;
    bounceMinVelocity: number;
    contactDistance: number;
    // fields
    minBounce: number;
    maxBounce: number;
  }
}
declare namespace UnityEngine {
  class JointLimitState2D extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Inactive: UnityEngine.JointLimitState2D;
    static LowerLimit: UnityEngine.JointLimitState2D;
    static UpperLimit: UnityEngine.JointLimitState2D;
    static EqualLimits: UnityEngine.JointLimitState2D;
  }
}
declare namespace UnityEngine {
  class JointMotor extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    targetVelocity: number;
    force: number;
    freeSpin: boolean;
    // fields
  }
}
declare namespace UnityEngine {
  class JointMotor2D extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    motorSpeed: number;
    maxMotorTorque: number;
    // fields
  }
}
declare namespace UnityEngine {
  class JointProjectionMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static None: UnityEngine.JointProjectionMode;
    static PositionAndRotation: UnityEngine.JointProjectionMode;
    static PositionOnly: UnityEngine.JointProjectionMode;
  }
}
declare namespace UnityEngine {
  class JointSpring extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    spring: number;
    damper: number;
    targetPosition: number;
  }
}
declare namespace UnityEngine {
  class JointSuspension2D extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    dampingRatio: number;
    frequency: number;
    angle: number;
    // fields
  }
}
declare namespace UnityEngine {
  class JointTranslationLimits2D extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    min: number;
    max: number;
    // fields
  }
}
declare namespace UnityEngine {
  class JsonUtility extends System.Object {
    // constructors
    protected constructor();
    // methods
    static ToJson(obj: any): string;
    static ToJson(obj: any, prettyPrint: boolean): string;
    static FromJson(json: string, type: any): any;
    static FromJsonOverwrite(json: string, objectToOverwrite: any): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class jvalue extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    z: boolean;
    b: number;
    c: any;
    s: number;
    i: number;
    j: number;
    f: number;
    d: number;
    l: any;
  }
}
declare namespace UnityEngine {
  class KeyCode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static None: UnityEngine.KeyCode;
    static Backspace: UnityEngine.KeyCode;
    static Delete: UnityEngine.KeyCode;
    static Tab: UnityEngine.KeyCode;
    static Clear: UnityEngine.KeyCode;
    static Return: UnityEngine.KeyCode;
    static Pause: UnityEngine.KeyCode;
    static Escape: UnityEngine.KeyCode;
    static Space: UnityEngine.KeyCode;
    static Keypad0: UnityEngine.KeyCode;
    static Keypad1: UnityEngine.KeyCode;
    static Keypad2: UnityEngine.KeyCode;
    static Keypad3: UnityEngine.KeyCode;
    static Keypad4: UnityEngine.KeyCode;
    static Keypad5: UnityEngine.KeyCode;
    static Keypad6: UnityEngine.KeyCode;
    static Keypad7: UnityEngine.KeyCode;
    static Keypad8: UnityEngine.KeyCode;
    static Keypad9: UnityEngine.KeyCode;
    static KeypadPeriod: UnityEngine.KeyCode;
    static KeypadDivide: UnityEngine.KeyCode;
    static KeypadMultiply: UnityEngine.KeyCode;
    static KeypadMinus: UnityEngine.KeyCode;
    static KeypadPlus: UnityEngine.KeyCode;
    static KeypadEnter: UnityEngine.KeyCode;
    static KeypadEquals: UnityEngine.KeyCode;
    static UpArrow: UnityEngine.KeyCode;
    static DownArrow: UnityEngine.KeyCode;
    static RightArrow: UnityEngine.KeyCode;
    static LeftArrow: UnityEngine.KeyCode;
    static Insert: UnityEngine.KeyCode;
    static Home: UnityEngine.KeyCode;
    static End: UnityEngine.KeyCode;
    static PageUp: UnityEngine.KeyCode;
    static PageDown: UnityEngine.KeyCode;
    static F1: UnityEngine.KeyCode;
    static F2: UnityEngine.KeyCode;
    static F3: UnityEngine.KeyCode;
    static F4: UnityEngine.KeyCode;
    static F5: UnityEngine.KeyCode;
    static F6: UnityEngine.KeyCode;
    static F7: UnityEngine.KeyCode;
    static F8: UnityEngine.KeyCode;
    static F9: UnityEngine.KeyCode;
    static F10: UnityEngine.KeyCode;
    static F11: UnityEngine.KeyCode;
    static F12: UnityEngine.KeyCode;
    static F13: UnityEngine.KeyCode;
    static F14: UnityEngine.KeyCode;
    static F15: UnityEngine.KeyCode;
    static Alpha0: UnityEngine.KeyCode;
    static Alpha1: UnityEngine.KeyCode;
    static Alpha2: UnityEngine.KeyCode;
    static Alpha3: UnityEngine.KeyCode;
    static Alpha4: UnityEngine.KeyCode;
    static Alpha5: UnityEngine.KeyCode;
    static Alpha6: UnityEngine.KeyCode;
    static Alpha7: UnityEngine.KeyCode;
    static Alpha8: UnityEngine.KeyCode;
    static Alpha9: UnityEngine.KeyCode;
    static Exclaim: UnityEngine.KeyCode;
    static DoubleQuote: UnityEngine.KeyCode;
    static Hash: UnityEngine.KeyCode;
    static Dollar: UnityEngine.KeyCode;
    static Ampersand: UnityEngine.KeyCode;
    static Quote: UnityEngine.KeyCode;
    static LeftParen: UnityEngine.KeyCode;
    static RightParen: UnityEngine.KeyCode;
    static Asterisk: UnityEngine.KeyCode;
    static Plus: UnityEngine.KeyCode;
    static Comma: UnityEngine.KeyCode;
    static Minus: UnityEngine.KeyCode;
    static Period: UnityEngine.KeyCode;
    static Slash: UnityEngine.KeyCode;
    static Colon: UnityEngine.KeyCode;
    static Semicolon: UnityEngine.KeyCode;
    static Less: UnityEngine.KeyCode;
    //static Equals: UnityEngine.KeyCode; mmm..
    static Greater: UnityEngine.KeyCode;
    static Question: UnityEngine.KeyCode;
    static At: UnityEngine.KeyCode;
    static LeftBracket: UnityEngine.KeyCode;
    static Backslash: UnityEngine.KeyCode;
    static RightBracket: UnityEngine.KeyCode;
    static Caret: UnityEngine.KeyCode;
    static Underscore: UnityEngine.KeyCode;
    static BackQuote: UnityEngine.KeyCode;
    static A: UnityEngine.KeyCode;
    static B: UnityEngine.KeyCode;
    static C: UnityEngine.KeyCode;
    static D: UnityEngine.KeyCode;
    static E: UnityEngine.KeyCode;
    static F: UnityEngine.KeyCode;
    static G: UnityEngine.KeyCode;
    static H: UnityEngine.KeyCode;
    static I: UnityEngine.KeyCode;
    static J: UnityEngine.KeyCode;
    static K: UnityEngine.KeyCode;
    static L: UnityEngine.KeyCode;
    static M: UnityEngine.KeyCode;
    static N: UnityEngine.KeyCode;
    static O: UnityEngine.KeyCode;
    static P: UnityEngine.KeyCode;
    static Q: UnityEngine.KeyCode;
    static R: UnityEngine.KeyCode;
    static S: UnityEngine.KeyCode;
    static T: UnityEngine.KeyCode;
    static U: UnityEngine.KeyCode;
    static V: UnityEngine.KeyCode;
    static W: UnityEngine.KeyCode;
    static X: UnityEngine.KeyCode;
    static Y: UnityEngine.KeyCode;
    static Z: UnityEngine.KeyCode;
    static Numlock: UnityEngine.KeyCode;
    static CapsLock: UnityEngine.KeyCode;
    static ScrollLock: UnityEngine.KeyCode;
    static RightShift: UnityEngine.KeyCode;
    static LeftShift: UnityEngine.KeyCode;
    static RightControl: UnityEngine.KeyCode;
    static LeftControl: UnityEngine.KeyCode;
    static RightAlt: UnityEngine.KeyCode;
    static LeftAlt: UnityEngine.KeyCode;
    static LeftCommand: UnityEngine.KeyCode;
    static LeftApple: UnityEngine.KeyCode;
    static LeftWindows: UnityEngine.KeyCode;
    static RightCommand: UnityEngine.KeyCode;
    static RightApple: UnityEngine.KeyCode;
    static RightWindows: UnityEngine.KeyCode;
    static AltGr: UnityEngine.KeyCode;
    static Help: UnityEngine.KeyCode;
    static Print: UnityEngine.KeyCode;
    static SysReq: UnityEngine.KeyCode;
    static Break: UnityEngine.KeyCode;
    static Menu: UnityEngine.KeyCode;
    static Mouse0: UnityEngine.KeyCode;
    static Mouse1: UnityEngine.KeyCode;
    static Mouse2: UnityEngine.KeyCode;
    static Mouse3: UnityEngine.KeyCode;
    static Mouse4: UnityEngine.KeyCode;
    static Mouse5: UnityEngine.KeyCode;
    static Mouse6: UnityEngine.KeyCode;
    static JoystickButton0: UnityEngine.KeyCode;
    static JoystickButton1: UnityEngine.KeyCode;
    static JoystickButton2: UnityEngine.KeyCode;
    static JoystickButton3: UnityEngine.KeyCode;
    static JoystickButton4: UnityEngine.KeyCode;
    static JoystickButton5: UnityEngine.KeyCode;
    static JoystickButton6: UnityEngine.KeyCode;
    static JoystickButton7: UnityEngine.KeyCode;
    static JoystickButton8: UnityEngine.KeyCode;
    static JoystickButton9: UnityEngine.KeyCode;
    static JoystickButton10: UnityEngine.KeyCode;
    static JoystickButton11: UnityEngine.KeyCode;
    static JoystickButton12: UnityEngine.KeyCode;
    static JoystickButton13: UnityEngine.KeyCode;
    static JoystickButton14: UnityEngine.KeyCode;
    static JoystickButton15: UnityEngine.KeyCode;
    static JoystickButton16: UnityEngine.KeyCode;
    static JoystickButton17: UnityEngine.KeyCode;
    static JoystickButton18: UnityEngine.KeyCode;
    static JoystickButton19: UnityEngine.KeyCode;
    static Joystick1Button0: UnityEngine.KeyCode;
    static Joystick1Button1: UnityEngine.KeyCode;
    static Joystick1Button2: UnityEngine.KeyCode;
    static Joystick1Button3: UnityEngine.KeyCode;
    static Joystick1Button4: UnityEngine.KeyCode;
    static Joystick1Button5: UnityEngine.KeyCode;
    static Joystick1Button6: UnityEngine.KeyCode;
    static Joystick1Button7: UnityEngine.KeyCode;
    static Joystick1Button8: UnityEngine.KeyCode;
    static Joystick1Button9: UnityEngine.KeyCode;
    static Joystick1Button10: UnityEngine.KeyCode;
    static Joystick1Button11: UnityEngine.KeyCode;
    static Joystick1Button12: UnityEngine.KeyCode;
    static Joystick1Button13: UnityEngine.KeyCode;
    static Joystick1Button14: UnityEngine.KeyCode;
    static Joystick1Button15: UnityEngine.KeyCode;
    static Joystick1Button16: UnityEngine.KeyCode;
    static Joystick1Button17: UnityEngine.KeyCode;
    static Joystick1Button18: UnityEngine.KeyCode;
    static Joystick1Button19: UnityEngine.KeyCode;
    static Joystick2Button0: UnityEngine.KeyCode;
    static Joystick2Button1: UnityEngine.KeyCode;
    static Joystick2Button2: UnityEngine.KeyCode;
    static Joystick2Button3: UnityEngine.KeyCode;
    static Joystick2Button4: UnityEngine.KeyCode;
    static Joystick2Button5: UnityEngine.KeyCode;
    static Joystick2Button6: UnityEngine.KeyCode;
    static Joystick2Button7: UnityEngine.KeyCode;
    static Joystick2Button8: UnityEngine.KeyCode;
    static Joystick2Button9: UnityEngine.KeyCode;
    static Joystick2Button10: UnityEngine.KeyCode;
    static Joystick2Button11: UnityEngine.KeyCode;
    static Joystick2Button12: UnityEngine.KeyCode;
    static Joystick2Button13: UnityEngine.KeyCode;
    static Joystick2Button14: UnityEngine.KeyCode;
    static Joystick2Button15: UnityEngine.KeyCode;
    static Joystick2Button16: UnityEngine.KeyCode;
    static Joystick2Button17: UnityEngine.KeyCode;
    static Joystick2Button18: UnityEngine.KeyCode;
    static Joystick2Button19: UnityEngine.KeyCode;
    static Joystick3Button0: UnityEngine.KeyCode;
    static Joystick3Button1: UnityEngine.KeyCode;
    static Joystick3Button2: UnityEngine.KeyCode;
    static Joystick3Button3: UnityEngine.KeyCode;
    static Joystick3Button4: UnityEngine.KeyCode;
    static Joystick3Button5: UnityEngine.KeyCode;
    static Joystick3Button6: UnityEngine.KeyCode;
    static Joystick3Button7: UnityEngine.KeyCode;
    static Joystick3Button8: UnityEngine.KeyCode;
    static Joystick3Button9: UnityEngine.KeyCode;
    static Joystick3Button10: UnityEngine.KeyCode;
    static Joystick3Button11: UnityEngine.KeyCode;
    static Joystick3Button12: UnityEngine.KeyCode;
    static Joystick3Button13: UnityEngine.KeyCode;
    static Joystick3Button14: UnityEngine.KeyCode;
    static Joystick3Button15: UnityEngine.KeyCode;
    static Joystick3Button16: UnityEngine.KeyCode;
    static Joystick3Button17: UnityEngine.KeyCode;
    static Joystick3Button18: UnityEngine.KeyCode;
    static Joystick3Button19: UnityEngine.KeyCode;
    static Joystick4Button0: UnityEngine.KeyCode;
    static Joystick4Button1: UnityEngine.KeyCode;
    static Joystick4Button2: UnityEngine.KeyCode;
    static Joystick4Button3: UnityEngine.KeyCode;
    static Joystick4Button4: UnityEngine.KeyCode;
    static Joystick4Button5: UnityEngine.KeyCode;
    static Joystick4Button6: UnityEngine.KeyCode;
    static Joystick4Button7: UnityEngine.KeyCode;
    static Joystick4Button8: UnityEngine.KeyCode;
    static Joystick4Button9: UnityEngine.KeyCode;
    static Joystick4Button10: UnityEngine.KeyCode;
    static Joystick4Button11: UnityEngine.KeyCode;
    static Joystick4Button12: UnityEngine.KeyCode;
    static Joystick4Button13: UnityEngine.KeyCode;
    static Joystick4Button14: UnityEngine.KeyCode;
    static Joystick4Button15: UnityEngine.KeyCode;
    static Joystick4Button16: UnityEngine.KeyCode;
    static Joystick4Button17: UnityEngine.KeyCode;
    static Joystick4Button18: UnityEngine.KeyCode;
    static Joystick4Button19: UnityEngine.KeyCode;
    static Joystick5Button0: UnityEngine.KeyCode;
    static Joystick5Button1: UnityEngine.KeyCode;
    static Joystick5Button2: UnityEngine.KeyCode;
    static Joystick5Button3: UnityEngine.KeyCode;
    static Joystick5Button4: UnityEngine.KeyCode;
    static Joystick5Button5: UnityEngine.KeyCode;
    static Joystick5Button6: UnityEngine.KeyCode;
    static Joystick5Button7: UnityEngine.KeyCode;
    static Joystick5Button8: UnityEngine.KeyCode;
    static Joystick5Button9: UnityEngine.KeyCode;
    static Joystick5Button10: UnityEngine.KeyCode;
    static Joystick5Button11: UnityEngine.KeyCode;
    static Joystick5Button12: UnityEngine.KeyCode;
    static Joystick5Button13: UnityEngine.KeyCode;
    static Joystick5Button14: UnityEngine.KeyCode;
    static Joystick5Button15: UnityEngine.KeyCode;
    static Joystick5Button16: UnityEngine.KeyCode;
    static Joystick5Button17: UnityEngine.KeyCode;
    static Joystick5Button18: UnityEngine.KeyCode;
    static Joystick5Button19: UnityEngine.KeyCode;
    static Joystick6Button0: UnityEngine.KeyCode;
    static Joystick6Button1: UnityEngine.KeyCode;
    static Joystick6Button2: UnityEngine.KeyCode;
    static Joystick6Button3: UnityEngine.KeyCode;
    static Joystick6Button4: UnityEngine.KeyCode;
    static Joystick6Button5: UnityEngine.KeyCode;
    static Joystick6Button6: UnityEngine.KeyCode;
    static Joystick6Button7: UnityEngine.KeyCode;
    static Joystick6Button8: UnityEngine.KeyCode;
    static Joystick6Button9: UnityEngine.KeyCode;
    static Joystick6Button10: UnityEngine.KeyCode;
    static Joystick6Button11: UnityEngine.KeyCode;
    static Joystick6Button12: UnityEngine.KeyCode;
    static Joystick6Button13: UnityEngine.KeyCode;
    static Joystick6Button14: UnityEngine.KeyCode;
    static Joystick6Button15: UnityEngine.KeyCode;
    static Joystick6Button16: UnityEngine.KeyCode;
    static Joystick6Button17: UnityEngine.KeyCode;
    static Joystick6Button18: UnityEngine.KeyCode;
    static Joystick6Button19: UnityEngine.KeyCode;
    static Joystick7Button0: UnityEngine.KeyCode;
    static Joystick7Button1: UnityEngine.KeyCode;
    static Joystick7Button2: UnityEngine.KeyCode;
    static Joystick7Button3: UnityEngine.KeyCode;
    static Joystick7Button4: UnityEngine.KeyCode;
    static Joystick7Button5: UnityEngine.KeyCode;
    static Joystick7Button6: UnityEngine.KeyCode;
    static Joystick7Button7: UnityEngine.KeyCode;
    static Joystick7Button8: UnityEngine.KeyCode;
    static Joystick7Button9: UnityEngine.KeyCode;
    static Joystick7Button10: UnityEngine.KeyCode;
    static Joystick7Button11: UnityEngine.KeyCode;
    static Joystick7Button12: UnityEngine.KeyCode;
    static Joystick7Button13: UnityEngine.KeyCode;
    static Joystick7Button14: UnityEngine.KeyCode;
    static Joystick7Button15: UnityEngine.KeyCode;
    static Joystick7Button16: UnityEngine.KeyCode;
    static Joystick7Button17: UnityEngine.KeyCode;
    static Joystick7Button18: UnityEngine.KeyCode;
    static Joystick7Button19: UnityEngine.KeyCode;
    static Joystick8Button0: UnityEngine.KeyCode;
    static Joystick8Button1: UnityEngine.KeyCode;
    static Joystick8Button2: UnityEngine.KeyCode;
    static Joystick8Button3: UnityEngine.KeyCode;
    static Joystick8Button4: UnityEngine.KeyCode;
    static Joystick8Button5: UnityEngine.KeyCode;
    static Joystick8Button6: UnityEngine.KeyCode;
    static Joystick8Button7: UnityEngine.KeyCode;
    static Joystick8Button8: UnityEngine.KeyCode;
    static Joystick8Button9: UnityEngine.KeyCode;
    static Joystick8Button10: UnityEngine.KeyCode;
    static Joystick8Button11: UnityEngine.KeyCode;
    static Joystick8Button12: UnityEngine.KeyCode;
    static Joystick8Button13: UnityEngine.KeyCode;
    static Joystick8Button14: UnityEngine.KeyCode;
    static Joystick8Button15: UnityEngine.KeyCode;
    static Joystick8Button16: UnityEngine.KeyCode;
    static Joystick8Button17: UnityEngine.KeyCode;
    static Joystick8Button18: UnityEngine.KeyCode;
    static Joystick8Button19: UnityEngine.KeyCode;
  }
}
declare namespace UnityEngine {
  class Keyframe extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    time: number;
    value: number;
    inTangent: number;
    outTangent: number;
    tangentMode: number;
    // fields
  }
}
declare namespace UnityEngine {
  class LayerMask extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    static LayerToName(layer: number): string;
    static NameToLayer(layerName: string): number;
    static GetMask(layerNames: string[]): number;
    // properties
    value: number;
    // fields
  }
}
declare namespace UnityEngine {
  class LegDoF extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static UpperLegFrontBack: UnityEngine.LegDoF;
    static UpperLegInOut: UnityEngine.LegDoF;
    static UpperLegRollInOut: UnityEngine.LegDoF;
    static LegCloseOpen: UnityEngine.LegDoF;
    static LegRollInOut: UnityEngine.LegDoF;
    static FootCloseOpen: UnityEngine.LegDoF;
    static FootInOut: UnityEngine.LegDoF;
    static ToesUpDown: UnityEngine.LegDoF;
    static LastLegDoF: UnityEngine.LegDoF;
  }
}
declare namespace UnityEngine {
  class LensFlare extends UnityEngine.Behaviour {
    // constructors
    constructor();
    // methods
    // properties
    flare: UnityEngine.Flare;
    brightness: number;
    fadeSpeed: number;
    color: UnityEngine.Color;
    // fields
  }
}
declare namespace UnityEngine {
  class Light extends UnityEngine.Behaviour {
    // constructors
    constructor();
    // methods
    AddCommandBuffer(evt: UnityEngine.Rendering.LightEvent, buffer: UnityEngine.Rendering.CommandBuffer): void;
    RemoveCommandBuffer(evt: UnityEngine.Rendering.LightEvent, buffer: UnityEngine.Rendering.CommandBuffer): void;
    RemoveCommandBuffers(evt: UnityEngine.Rendering.LightEvent): void;
    RemoveAllCommandBuffers(): void;
    GetCommandBuffers(evt: UnityEngine.Rendering.LightEvent): UnityEngine.Rendering.CommandBuffer[];
    static GetLights(type: UnityEngine.LightType, layer: number): UnityEngine.Light[];
    // properties
    type: UnityEngine.LightType;
    color: UnityEngine.Color;
    intensity: number;
    bounceIntensity: number;
    shadows: UnityEngine.LightShadows;
    shadowStrength: number;
    shadowResolution: UnityEngine.Rendering.LightShadowResolution;
    shadowCustomResolution: number;
    shadowBias: number;
    shadowNormalBias: number;
    shadowNearPlane: number;
    shadowSoftness: number;
    shadowSoftnessFade: number;
    range: number;
    spotAngle: number;
    cookieSize: number;
    cookie: UnityEngine.Texture;
    flare: UnityEngine.Flare;
    renderMode: UnityEngine.LightRenderMode;
    alreadyLightmapped: boolean;
    bakedIndex: number;
    readonly isBaked: boolean;
    cullingMask: number;
    areaSize: UnityEngine.Vector2;
    lightmappingMode: UnityEngine.LightmappingMode;
    readonly commandBufferCount: number;
    static pixelLightCount: number;
    shadowConstantBias: number;
    shadowObjectSizeBias: number;
    attenuate: boolean;
    // fields
  }
}
declare namespace UnityEngine {
  class LightmapData extends System.Object {
    // constructors
    constructor();
    // methods
    // properties
    lightmapLight: UnityEngine.Texture2D;
    lightmapDir: UnityEngine.Texture2D;
    lightmap: UnityEngine.Texture2D;
    lightmapFar: UnityEngine.Texture2D;
    lightmapNear: UnityEngine.Texture2D;
    // fields
  }
}
declare namespace UnityEngine {
  class LightmappingMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Realtime: UnityEngine.LightmappingMode;
    static Baked: UnityEngine.LightmappingMode;
    static Mixed: UnityEngine.LightmappingMode;
  }
}
declare namespace UnityEngine {
  class LightmapSettings extends UnityEngine.Object {
    // constructors
    constructor();
    // methods
    // properties
    static lightmaps: UnityEngine.LightmapData[];
    static lightmapsModeLegacy: UnityEngine.LightmapsModeLegacy;
    static lightmapsMode: UnityEngine.LightmapsMode;
    static bakedColorSpace: UnityEngine.ColorSpace;
    static lightProbes: UnityEngine.LightProbes;
    // fields
  }
}
declare namespace UnityEngine {
  class LightmapsMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static NonDirectional: UnityEngine.LightmapsMode;
    static CombinedDirectional: UnityEngine.LightmapsMode;
    static SeparateDirectional: UnityEngine.LightmapsMode;
    static Single: UnityEngine.LightmapsMode;
    static Dual: UnityEngine.LightmapsMode;
    static Directional: UnityEngine.LightmapsMode;
  }
}
declare namespace UnityEngine {
  class LightmapsModeLegacy extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Single: UnityEngine.LightmapsModeLegacy;
    static Dual: UnityEngine.LightmapsModeLegacy;
    static Directional: UnityEngine.LightmapsModeLegacy;
  }
}
declare namespace UnityEngine {
  class LightProbeGroup extends UnityEngine.Behaviour {
    // constructors
    constructor();
    // methods
    // properties
    probePositions: UnityEngine.Vector3[];
    // fields
  }
}
declare namespace UnityEngine.LightProbeProxyVolume {
  class BoundingBoxMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static AutomaticLocal: UnityEngine.LightProbeProxyVolume.BoundingBoxMode;
    static AutomaticWorld: UnityEngine.LightProbeProxyVolume.BoundingBoxMode;
    static Custom: UnityEngine.LightProbeProxyVolume.BoundingBoxMode;
  }
}
declare namespace UnityEngine {
  class LightProbeProxyVolume extends UnityEngine.Behaviour {
    // constructors
    constructor();
    // methods
    Update(): void;
    // properties
    readonly boundsGlobal: UnityEngine.Bounds;
    sizeCustom: UnityEngine.Vector3;
    originCustom: UnityEngine.Vector3;
    boundingBoxMode: UnityEngine.LightProbeProxyVolume.BoundingBoxMode;
    resolutionMode: UnityEngine.LightProbeProxyVolume.ResolutionMode;
    probePositionMode: UnityEngine.LightProbeProxyVolume.ProbePositionMode;
    refreshMode: UnityEngine.LightProbeProxyVolume.RefreshMode;
    probeDensity: number;
    gridResolutionX: number;
    gridResolutionY: number;
    gridResolutionZ: number;
    static readonly isFeatureSupported: boolean;
    // fields
  }
}
declare namespace UnityEngine.LightProbeProxyVolume {
  class ProbePositionMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static CellCorner: UnityEngine.LightProbeProxyVolume.ProbePositionMode;
    static CellCenter: UnityEngine.LightProbeProxyVolume.ProbePositionMode;
  }
}
declare namespace UnityEngine.LightProbeProxyVolume {
  class RefreshMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Automatic: UnityEngine.LightProbeProxyVolume.RefreshMode;
    static EveryFrame: UnityEngine.LightProbeProxyVolume.RefreshMode;
    static ViaScripting: UnityEngine.LightProbeProxyVolume.RefreshMode;
  }
}
declare namespace UnityEngine.LightProbeProxyVolume {
  class ResolutionMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Automatic: UnityEngine.LightProbeProxyVolume.ResolutionMode;
    static Custom: UnityEngine.LightProbeProxyVolume.ResolutionMode;
  }
}
declare namespace UnityEngine {
  class LightProbes extends UnityEngine.Object {
    // constructors
    constructor();
    // methods
    static GetInterpolatedProbe(position: UnityEngine.Vector3, renderer: UnityEngine.Renderer, probe: any): void;
    GetInterpolatedLightProbe(position: UnityEngine.Vector3, renderer: UnityEngine.Renderer, coefficients: number[]): void;
    // properties
    readonly positions: UnityEngine.Vector3[];
    bakedProbes: UnityEngine.Rendering.SphericalHarmonicsL2[];
    readonly count: number;
    readonly cellCount: number;
    coefficients: number[];
    // fields
  }
}
declare namespace UnityEngine {
  class LightRenderMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Auto: UnityEngine.LightRenderMode;
    static ForcePixel: UnityEngine.LightRenderMode;
    static ForceVertex: UnityEngine.LightRenderMode;
  }
}
declare namespace UnityEngine {
  class LightShadows extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static None: UnityEngine.LightShadows;
    static Hard: UnityEngine.LightShadows;
    static Soft: UnityEngine.LightShadows;
  }
}
declare namespace UnityEngine {
  class LightType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Spot: UnityEngine.LightType;
    static Directional: UnityEngine.LightType;
    static Point: UnityEngine.LightType;
    static Area: UnityEngine.LightType;
  }
}
declare namespace UnityEngine {
  class LineRenderer extends UnityEngine.Renderer {
    // constructors
    constructor();
    // methods
    SetWidth(start: number, end: number): void;
    SetColors(start: UnityEngine.Color, end: UnityEngine.Color): void;
    SetVertexCount(count: number): void;
    SetPosition(index: number, position: UnityEngine.Vector3): void;
    GetPosition(index: number): UnityEngine.Vector3;
    SetPositions(positions: UnityEngine.Vector3[]): void;
    GetPositions(positions: UnityEngine.Vector3[]): number;
    // properties
    startWidth: number;
    endWidth: number;
    widthCurve: UnityEngine.AnimationCurve;
    widthMultiplier: number;
    startColor: UnityEngine.Color;
    endColor: UnityEngine.Color;
    colorGradient: UnityEngine.Gradient;
    numPositions: number;
    useWorldSpace: boolean;
    numCornerVertices: number;
    numCapVertices: number;
    textureMode: UnityEngine.LineTextureMode;
    // fields
  }
}
declare namespace UnityEngine {
  class LineTextureMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Stretch: UnityEngine.LineTextureMode;
    static Tile: UnityEngine.LineTextureMode;
  }
}
declare namespace UnityEngine {
  class LocalNotification extends System.Object {
    // constructors
    constructor();
    // methods
    // properties
    fireDate: any;
    timeZone: string;
    repeatInterval: UnityEngine.CalendarUnit;
    repeatCalendar: UnityEngine.CalendarIdentifier;
    alertBody: string;
    alertAction: string;
    hasAction: boolean;
    alertLaunchImage: string;
    applicationIconBadgeNumber: number;
    soundName: string;
    static readonly defaultSoundName: string;
    userInfo: any;
    // fields
  }
}
declare namespace UnityEngine {
  class LocationInfo extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    readonly latitude: number;
    readonly longitude: number;
    readonly altitude: number;
    readonly horizontalAccuracy: number;
    readonly verticalAccuracy: number;
    readonly timestamp: number;
    // fields
  }
}
declare namespace UnityEngine {
  class LocationService extends System.Object {
    // constructors
    constructor();
    // methods
    Start(desiredAccuracyInMeters: number, updateDistanceInMeters: number): void;
    Start(desiredAccuracyInMeters: number): void;
    Start(): void;
    Stop(): void;
    // properties
    readonly isEnabledByUser: boolean;
    readonly status: UnityEngine.LocationServiceStatus;
    readonly lastData: UnityEngine.LocationInfo;
    // fields
  }
}
declare namespace UnityEngine {
  class LocationServiceStatus extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Stopped: UnityEngine.LocationServiceStatus;
    static Initializing: UnityEngine.LocationServiceStatus;
    static Running: UnityEngine.LocationServiceStatus;
    static Failed: UnityEngine.LocationServiceStatus;
  }
}
declare namespace UnityEngine {
  class LOD extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    screenRelativeTransitionHeight: number;
    fadeTransitionWidth: number;
    renderers: UnityEngine.Renderer[];
  }
}
declare namespace UnityEngine {
  class LODFadeMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static None: UnityEngine.LODFadeMode;
    static CrossFade: UnityEngine.LODFadeMode;
    static SpeedTree: UnityEngine.LODFadeMode;
  }
}
declare namespace UnityEngine {
  class LODGroup extends UnityEngine.Component {
    // constructors
    constructor();
    // methods
    RecalculateBounds(): void;
    GetLODs(): UnityEngine.LOD[];
    SetLODS(lods: UnityEngine.LOD[]): void;
    SetLODs(lods: UnityEngine.LOD[]): void;
    ForceLOD(index: number): void;
    // properties
    localReferencePoint: UnityEngine.Vector3;
    size: number;
    readonly lodCount: number;
    fadeMode: UnityEngine.LODFadeMode;
    animateCrossFading: boolean;
    enabled: boolean;
    static crossFadeAnimationDuration: number;
    // fields
  }
}
declare namespace UnityEngine {
  class Logger extends System.Object {
    // constructors
    constructor(logHandler: UnityEngine.ILogHandler);
    // methods
    IsLogTypeAllowed(logType: UnityEngine.LogType): boolean;
    Log(logType: UnityEngine.LogType, message: any): void;
    Log(logType: UnityEngine.LogType, message: any, context: UnityEngine.Object): void;
    Log(logType: UnityEngine.LogType, tag: string, message: any): void;
    Log(logType: UnityEngine.LogType, tag: string, message: any, context: UnityEngine.Object): void;
    Log(message: any): void;
    Log(tag: string, message: any): void;
    Log(tag: string, message: any, context: UnityEngine.Object): void;
    LogWarning(tag: string, message: any): void;
    LogWarning(tag: string, message: any, context: UnityEngine.Object): void;
    LogError(tag: string, message: any): void;
    LogError(tag: string, message: any, context: UnityEngine.Object): void;
    LogFormat(logType: UnityEngine.LogType, format: string, args: any[]): void;
    LogFormat(logType: UnityEngine.LogType, context: UnityEngine.Object, format: string, args: any[]): void;
    LogException(exception: System.Exception): void;
    LogException(exception: System.Exception, context: UnityEngine.Object): void;
    // properties
    logHandler: UnityEngine.ILogHandler;
    logEnabled: boolean;
    filterLogType: UnityEngine.LogType;
    // fields
  }
}
declare namespace UnityEngine {
  class LogType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Error: UnityEngine.LogType;
    static Assert: UnityEngine.LogType;
    static Warning: UnityEngine.LogType;
    static Log: UnityEngine.LogType;
    static Exception: UnityEngine.LogType;
  }
}
declare namespace UnityEngine {
  class MasterServer extends System.Object {
    // constructors
    constructor();
    // methods
    static RequestHostList(gameTypeName: string): void;
    static PollHostList(): UnityEngine.HostData[];
    static RegisterHost(gameTypeName: string, gameName: string, comment: string): void;
    static RegisterHost(gameTypeName: string, gameName: string): void;
    static UnregisterHost(): void;
    static ClearHostList(): void;
    // properties
    static ipAddress: string;
    static port: number;
    static updateRate: number;
    static dedicatedServer: boolean;
    // fields
  }
}
declare namespace UnityEngine {
  class MasterServerEvent extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static RegistrationFailedGameName: UnityEngine.MasterServerEvent;
    static RegistrationFailedGameType: UnityEngine.MasterServerEvent;
    static RegistrationFailedNoServer: UnityEngine.MasterServerEvent;
    static RegistrationSucceeded: UnityEngine.MasterServerEvent;
    static HostListReceived: UnityEngine.MasterServerEvent;
  }
}
declare namespace UnityEngine {
  class MatchTargetWeightMask extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    positionXYZWeight: UnityEngine.Vector3;
    rotationWeight: number;
    // fields
  }
}
declare namespace UnityEngine {
  class Material extends UnityEngine.Object {
    // constructors
    constructor(contents: string);
    constructor(shader: UnityEngine.Shader);
    constructor(source: UnityEngine.Material);
    // methods
    SetColor(propertyName: string, color: UnityEngine.Color): void;
    SetColor(nameID: number, color: UnityEngine.Color): void;
    GetColor(propertyName: string): UnityEngine.Color;
    GetColor(nameID: number): UnityEngine.Color;
    SetVector(propertyName: string, vector: UnityEngine.Vector4): void;
    SetVector(nameID: number, vector: UnityEngine.Vector4): void;
    GetVector(propertyName: string): UnityEngine.Vector4;
    GetVector(nameID: number): UnityEngine.Vector4;
    SetTexture(propertyName: string, texture: UnityEngine.Texture): void;
    SetTexture(nameID: number, texture: UnityEngine.Texture): void;
    GetTexture(propertyName: string): UnityEngine.Texture;
    GetTexture(nameID: number): UnityEngine.Texture;
    SetTextureOffset(propertyName: string, offset: UnityEngine.Vector2): void;
    GetTextureOffset(propertyName: string): UnityEngine.Vector2;
    SetTextureScale(propertyName: string, scale: UnityEngine.Vector2): void;
    GetTextureScale(propertyName: string): UnityEngine.Vector2;
    SetMatrix(propertyName: string, matrix: UnityEngine.Matrix4x4): void;
    SetMatrix(nameID: number, matrix: UnityEngine.Matrix4x4): void;
    GetMatrix(propertyName: string): UnityEngine.Matrix4x4;
    GetMatrix(nameID: number): UnityEngine.Matrix4x4;
    SetFloat(propertyName: string, value: number): void;
    SetFloat(nameID: number, value: number): void;
    GetFloat(propertyName: string): number;
    GetFloat(nameID: number): number;
    SetFloatArray(name: string, values: number[]): void;
    SetFloatArray(nameID: number, values: number[]): void;
    SetFloatArray(name: string, values: number[]): void;
    SetFloatArray(nameID: number, values: number[]): void;
    SetVectorArray(name: string, values: UnityEngine.Vector4[]): void;
    SetVectorArray(nameID: number, values: UnityEngine.Vector4[]): void;
    SetVectorArray(name: string, values: UnityEngine.Vector4[]): void;
    SetVectorArray(nameID: number, values: UnityEngine.Vector4[]): void;
    SetColorArray(name: string, values: UnityEngine.Color[]): void;
    SetColorArray(nameID: number, values: UnityEngine.Color[]): void;
    SetColorArray(name: string, values: UnityEngine.Color[]): void;
    SetColorArray(nameID: number, values: UnityEngine.Color[]): void;
    SetMatrixArray(name: string, values: UnityEngine.Matrix4x4[]): void;
    SetMatrixArray(nameID: number, values: UnityEngine.Matrix4x4[]): void;
    SetMatrixArray(name: string, values: UnityEngine.Matrix4x4[]): void;
    SetMatrixArray(nameID: number, values: UnityEngine.Matrix4x4[]): void;
    GetFloatArray(name: string, values: number[]): void;
    GetFloatArray(nameID: number, values: number[]): void;
    GetFloatArray(name: string): number[];
    GetFloatArray(nameID: number): number[];
    GetVectorArray(name: string, values: UnityEngine.Vector4[]): void;
    GetVectorArray(nameID: number, values: UnityEngine.Vector4[]): void;
    GetVectorArray(name: string): UnityEngine.Vector4[];
    GetVectorArray(nameID: number): UnityEngine.Vector4[];
    GetColorArray(name: string, values: UnityEngine.Color[]): void;
    GetColorArray(nameID: number, values: UnityEngine.Color[]): void;
    GetColorArray(name: string): UnityEngine.Color[];
    GetColorArray(nameID: number): UnityEngine.Color[];
    GetMatrixArray(name: string, values: UnityEngine.Matrix4x4[]): void;
    GetMatrixArray(nameID: number, values: UnityEngine.Matrix4x4[]): void;
    GetMatrixArray(name: string): UnityEngine.Matrix4x4[];
    GetMatrixArray(nameID: number): UnityEngine.Matrix4x4[];
    SetInt(propertyName: string, value: number): void;
    SetInt(nameID: number, value: number): void;
    GetInt(propertyName: string): number;
    GetInt(nameID: number): number;
    SetBuffer(propertyName: string, buffer: UnityEngine.ComputeBuffer): void;
    HasProperty(propertyName: string): boolean;
    HasProperty(nameID: number): boolean;
    GetTag(tag: string, searchFallbacks: boolean, defaultValue: string): string;
    GetTag(tag: string, searchFallbacks: boolean): string;
    SetOverrideTag(tag: string, val: string): void;
    Lerp(start: UnityEngine.Material, end: UnityEngine.Material, t: number): void;
    SetPass(pass: number): boolean;
    GetPassName(pass: number): string;
    FindPass(passName: string): number;
    static Create(scriptContents: string): UnityEngine.Material;
    CopyPropertiesFromMaterial(mat: UnityEngine.Material): void;
    EnableKeyword(keyword: string): void;
    DisableKeyword(keyword: string): void;
    IsKeywordEnabled(keyword: string): boolean;
    // properties
    shader: UnityEngine.Shader;
    color: UnityEngine.Color;
    mainTexture: UnityEngine.Texture;
    mainTextureOffset: UnityEngine.Vector2;
    mainTextureScale: UnityEngine.Vector2;
    readonly passCount: number;
    renderQueue: number;
    shaderKeywords: string[];
    globalIlluminationFlags: UnityEngine.MaterialGlobalIlluminationFlags;
    // fields
  }
}
declare namespace UnityEngine {
  class MaterialGlobalIlluminationFlags extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static None: UnityEngine.MaterialGlobalIlluminationFlags;
    static RealtimeEmissive: UnityEngine.MaterialGlobalIlluminationFlags;
    static BakedEmissive: UnityEngine.MaterialGlobalIlluminationFlags;
    static EmissiveIsBlack: UnityEngine.MaterialGlobalIlluminationFlags;
  }
}
declare namespace UnityEngine {
  class MaterialPropertyBlock extends System.Object {
    // constructors
    constructor();
    // methods
    SetFloat(name: string, value: number): void;
    SetFloat(nameID: number, value: number): void;
    SetVector(name: string, value: UnityEngine.Vector4): void;
    SetVector(nameID: number, value: UnityEngine.Vector4): void;
    SetColor(name: string, value: UnityEngine.Color): void;
    SetColor(nameID: number, value: UnityEngine.Color): void;
    SetMatrix(name: string, value: UnityEngine.Matrix4x4): void;
    SetMatrix(nameID: number, value: UnityEngine.Matrix4x4): void;
    SetTexture(name: string, value: UnityEngine.Texture): void;
    SetTexture(nameID: number, value: UnityEngine.Texture): void;
    SetBuffer(name: string, value: UnityEngine.ComputeBuffer): void;
    SetBuffer(nameID: number, value: UnityEngine.ComputeBuffer): void;
    GetFloat(name: string): number;
    GetFloat(nameID: number): number;
    GetVector(name: string): UnityEngine.Vector4;
    GetVector(nameID: number): UnityEngine.Vector4;
    GetMatrix(name: string): UnityEngine.Matrix4x4;
    GetMatrix(nameID: number): UnityEngine.Matrix4x4;
    GetFloatArray(name: string, values: number[]): void;
    GetFloatArray(nameID: number, values: number[]): void;
    GetFloatArray(name: string): number[];
    GetFloatArray(nameID: number): number[];
    GetVectorArray(name: string, values: UnityEngine.Vector4[]): void;
    GetVectorArray(nameID: number, values: UnityEngine.Vector4[]): void;
    GetVectorArray(name: string): UnityEngine.Vector4[];
    GetVectorArray(nameID: number): UnityEngine.Vector4[];
    GetMatrixArray(name: string, values: UnityEngine.Matrix4x4[]): void;
    GetMatrixArray(nameID: number, values: UnityEngine.Matrix4x4[]): void;
    GetMatrixArray(name: string): UnityEngine.Matrix4x4[];
    GetMatrixArray(nameID: number): UnityEngine.Matrix4x4[];
    GetTexture(name: string): UnityEngine.Texture;
    GetTexture(nameID: number): UnityEngine.Texture;
    SetFloatArray(name: string, values: number[]): void;
    SetFloatArray(nameID: number, values: number[]): void;
    SetFloatArray(name: string, values: number[]): void;
    SetFloatArray(nameID: number, values: number[]): void;
    SetVectorArray(name: string, values: UnityEngine.Vector4[]): void;
    SetVectorArray(nameID: number, values: UnityEngine.Vector4[]): void;
    SetVectorArray(name: string, values: UnityEngine.Vector4[]): void;
    SetVectorArray(nameID: number, values: UnityEngine.Vector4[]): void;
    SetMatrixArray(name: string, values: UnityEngine.Matrix4x4[]): void;
    SetMatrixArray(nameID: number, values: UnityEngine.Matrix4x4[]): void;
    SetMatrixArray(name: string, values: UnityEngine.Matrix4x4[]): void;
    SetMatrixArray(nameID: number, values: UnityEngine.Matrix4x4[]): void;
    Clear(): void;
    AddFloat(name: string, value: number): void;
    AddFloat(nameID: number, value: number): void;
    AddVector(name: string, value: UnityEngine.Vector4): void;
    AddVector(nameID: number, value: UnityEngine.Vector4): void;
    AddColor(name: string, value: UnityEngine.Color): void;
    AddColor(nameID: number, value: UnityEngine.Color): void;
    AddMatrix(name: string, value: UnityEngine.Matrix4x4): void;
    AddMatrix(nameID: number, value: UnityEngine.Matrix4x4): void;
    AddTexture(name: string, value: UnityEngine.Texture): void;
    AddTexture(nameID: number, value: UnityEngine.Texture): void;
    // properties
    readonly isEmpty: boolean;
    // fields
  }
}
declare namespace UnityEngine {
  class Mathf extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    static ClosestPowerOfTwo(value: number): number;
    static GammaToLinearSpace(value: number): number;
    static LinearToGammaSpace(value: number): number;
    static IsPowerOfTwo(value: number): boolean;
    static NextPowerOfTwo(value: number): number;
    static PerlinNoise(x: number, y: number): number;
    static FloatToHalf(val: number): number;
    static HalfToFloat(val: number): number;
    static Sin(f: number): number;
    static Cos(f: number): number;
    static Tan(f: number): number;
    static Asin(f: number): number;
    static Acos(f: number): number;
    static Atan(f: number): number;
    static Atan2(y: number, x: number): number;
    static Sqrt(f: number): number;
    static Abs(f: number): number;
    static Abs(value: number): number;
    static Min(a: number, b: number): number;
    static Min(values: number[]): number;
    static Min(a: number, b: number): number;
    static Min(values: number[]): number;
    static Max(a: number, b: number): number;
    static Max(values: number[]): number;
    static Max(a: number, b: number): number;
    static Max(values: number[]): number;
    static Pow(f: number, p: number): number;
    static Exp(power: number): number;
    static Log(f: number, p: number): number;
    static Log(f: number): number;
    static Log10(f: number): number;
    static Ceil(f: number): number;
    static Floor(f: number): number;
    static Round(f: number): number;
    static CeilToInt(f: number): number;
    static FloorToInt(f: number): number;
    static RoundToInt(f: number): number;
    static Sign(f: number): number;
    static Clamp(value: number, min: number, max: number): number;
    static Clamp(value: number, min: number, max: number): number;
    static Clamp01(value: number): number;
    static Lerp(a: number, b: number, t: number): number;
    static LerpUnclamped(a: number, b: number, t: number): number;
    static LerpAngle(a: number, b: number, t: number): number;
    static MoveTowards(current: number, target: number, maxDelta: number): number;
    static MoveTowardsAngle(current: number, target: number, maxDelta: number): number;
    static SmoothStep(from: number, to: number, t: number): number;
    static Gamma(value: number, absmax: number, gamma: number): number;
    static Approximately(a: number, b: number): boolean;
    static SmoothDamp(current: number, target: number, currentVelocity: any, smoothTime: number, maxSpeed: number): number;
    static SmoothDamp(current: number, target: number, currentVelocity: any, smoothTime: number): number;
    static SmoothDamp(current: number, target: number, currentVelocity: any, smoothTime: number, maxSpeed: number, deltaTime: number): number;
    static SmoothDampAngle(current: number, target: number, currentVelocity: any, smoothTime: number, maxSpeed: number): number;
    static SmoothDampAngle(current: number, target: number, currentVelocity: any, smoothTime: number): number;
    static SmoothDampAngle(current: number, target: number, currentVelocity: any, smoothTime: number, maxSpeed: number, deltaTime: number): number;
    static Repeat(t: number, length: number): number;
    static PingPong(t: number, length: number): number;
    static InverseLerp(a: number, b: number, value: number): number;
    static DeltaAngle(current: number, target: number): number;
    // properties
    // fields
    static PI: number;
    static Infinity: number;
    static NegativeInfinity: number;
    static Deg2Rad: number;
    static Rad2Deg: number;
    static Epsilon: number;
  }
}
declare namespace UnityEngine {
  class Matrix4x4 extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    static Inverse(m: UnityEngine.Matrix4x4): UnityEngine.Matrix4x4;
    static Transpose(m: UnityEngine.Matrix4x4): UnityEngine.Matrix4x4;
    static Determinant(m: UnityEngine.Matrix4x4): number;
    SetTRS(pos: UnityEngine.Vector3, q: UnityEngine.Quaternion, s: UnityEngine.Vector3): void;
    static TRS(pos: UnityEngine.Vector3, q: UnityEngine.Quaternion, s: UnityEngine.Vector3): UnityEngine.Matrix4x4;
    static Ortho(left: number, right: number, bottom: number, top: number, zNear: number, zFar: number): UnityEngine.Matrix4x4;
    static Perspective(fov: number, aspect: number, zNear: number, zFar: number): UnityEngine.Matrix4x4;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetColumn(i: number): UnityEngine.Vector4;
    GetRow(i: number): UnityEngine.Vector4;
    SetColumn(i: number, v: UnityEngine.Vector4): void;
    SetRow(i: number, v: UnityEngine.Vector4): void;
    MultiplyPoint(v: UnityEngine.Vector3): UnityEngine.Vector3;
    MultiplyPoint3x4(v: UnityEngine.Vector3): UnityEngine.Vector3;
    MultiplyVector(v: UnityEngine.Vector3): UnityEngine.Vector3;
    static Scale(v: UnityEngine.Vector3): UnityEngine.Matrix4x4;
    ToString(): string;
    ToString(format: string): string;
    // properties
    readonly inverse: UnityEngine.Matrix4x4;
    readonly transpose: UnityEngine.Matrix4x4;
    readonly isIdentity: boolean;
    readonly determinant: number;
    get_Item(row: number, column: number): number;
    set_Item(row: number, column: number, value: number): void;
    get_Item(index: number): number;
    set_Item(index: number, value: number): void;
    static readonly zero: UnityEngine.Matrix4x4;
    static readonly identity: UnityEngine.Matrix4x4;
    // fields
    m00: number;
    m10: number;
    m20: number;
    m30: number;
    m01: number;
    m11: number;
    m21: number;
    m31: number;
    m02: number;
    m12: number;
    m22: number;
    m32: number;
    m03: number;
    m13: number;
    m23: number;
    m33: number;
  }
}
declare namespace UnityEngine {
  class Mesh extends UnityEngine.Object {
    // constructors
    constructor();
    // methods
    Clear(keepVertexLayout: boolean): void;
    Clear(): void;
    SetTriangles(triangles: number[], submesh: number): void;
    SetTriangles(triangles: number[], submesh: number, calculateBounds: boolean): void;
    SetTriangles(triangles: number[], submesh: number): void;
    SetTriangles(triangles: number[], submesh: number, calculateBounds: boolean): void;
    SetIndices(indices: number[], topology: UnityEngine.MeshTopology, submesh: number): void;
    SetIndices(indices: number[], topology: UnityEngine.MeshTopology, submesh: number, calculateBounds: boolean): void;
    ClearBlendShapes(): void;
    GetBlendShapeName(shapeIndex: number): string;
    GetBlendShapeFrameCount(shapeIndex: number): number;
    GetBlendShapeFrameWeight(shapeIndex: number, frameIndex: number): number;
    GetBlendShapeFrameVertices(shapeIndex: number, frameIndex: number, deltaVertices: UnityEngine.Vector3[], deltaNormals: UnityEngine.Vector3[], deltaTangents: UnityEngine.Vector3[]): void;
    AddBlendShapeFrame(shapeName: string, frameWeight: number, deltaVertices: UnityEngine.Vector3[], deltaNormals: UnityEngine.Vector3[], deltaTangents: UnityEngine.Vector3[]): void;
    GetNativeVertexBufferPtr(bufferIndex: number): any;
    GetNativeIndexBufferPtr(): any;
    RecalculateBounds(): void;
    RecalculateNormals(): void;
    Optimize(): void;
    GetTopology(submesh: number): UnityEngine.MeshTopology;
    CombineMeshes(combine: UnityEngine.CombineInstance[], mergeSubMeshes: boolean, useMatrices: boolean): void;
    CombineMeshes(combine: UnityEngine.CombineInstance[], mergeSubMeshes: boolean): void;
    CombineMeshes(combine: UnityEngine.CombineInstance[]): void;
    MarkDynamic(): void;
    UploadMeshData(markNoLogerReadable: boolean): void;
    GetBlendShapeIndex(blendShapeName: string): number;
    SetVertices(inVertices: UnityEngine.Vector3[]): void;
    SetNormals(inNormals: UnityEngine.Vector3[]): void;
    SetTangents(inTangents: UnityEngine.Vector4[]): void;
    SetColors(inColors: UnityEngine.Color[]): void;
    SetColors(inColors: UnityEngine.Color32[]): void;
    SetUVs(channel: number, uvs: UnityEngine.Vector2[]): void;
    SetUVs(channel: number, uvs: UnityEngine.Vector3[]): void;
    SetUVs(channel: number, uvs: UnityEngine.Vector4[]): void;
    GetUVs(channel: number, uvs: UnityEngine.Vector2[]): void;
    GetUVs(channel: number, uvs: UnityEngine.Vector3[]): void;
    GetUVs(channel: number, uvs: UnityEngine.Vector4[]): void;
    GetTriangles(submesh: number): number[];
    GetIndices(submesh: number): number[];
    // properties
    readonly isReadable: boolean;
    readonly blendShapeCount: number;
    readonly vertexBufferCount: number;
    bounds: UnityEngine.Bounds;
    readonly vertexCount: number;
    subMeshCount: number;
    boneWeights: UnityEngine.BoneWeight[];
    bindposes: UnityEngine.Matrix4x4[];
    uv1: UnityEngine.Vector2[];
    vertices: UnityEngine.Vector3[];
    normals: UnityEngine.Vector3[];
    tangents: UnityEngine.Vector4[];
    uv: UnityEngine.Vector2[];
    uv2: UnityEngine.Vector2[];
    uv3: UnityEngine.Vector2[];
    uv4: UnityEngine.Vector2[];
    colors: UnityEngine.Color[];
    colors32: UnityEngine.Color32[];
    triangles: number[];
    // fields
  }
}
declare namespace UnityEngine.Mesh {
  class InternalShaderChannel extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Vertex: UnityEngine.Mesh.InternalShaderChannel;
    static Normal: UnityEngine.Mesh.InternalShaderChannel;
    static Color: UnityEngine.Mesh.InternalShaderChannel;
    static TexCoord0: UnityEngine.Mesh.InternalShaderChannel;
    static TexCoord1: UnityEngine.Mesh.InternalShaderChannel;
    static TexCoord2: UnityEngine.Mesh.InternalShaderChannel;
    static TexCoord3: UnityEngine.Mesh.InternalShaderChannel;
    static Tangent: UnityEngine.Mesh.InternalShaderChannel;
  }
}
declare namespace UnityEngine.Mesh {
  class InternalVertexChannelType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Float: UnityEngine.Mesh.InternalVertexChannelType;
    static Color: UnityEngine.Mesh.InternalVertexChannelType;
  }
}
declare namespace UnityEngine {
  class MeshCollider extends UnityEngine.Collider {
    // constructors
    constructor();
    // methods
    // properties
    sharedMesh: UnityEngine.Mesh;
    convex: boolean;
    inflateMesh: boolean;
    skinWidth: number;
    smoothSphereCollisions: boolean;
    // fields
  }
}
declare namespace UnityEngine {
  class MeshFilter extends UnityEngine.Component {
    // constructors
    constructor();
    // methods
    // properties
    mesh: UnityEngine.Mesh;
    sharedMesh: UnityEngine.Mesh;
    // fields
  }
}
declare namespace UnityEngine {
  class MeshParticleEmitter extends UnityEngine.ParticleEmitter {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class MeshRenderer extends UnityEngine.Renderer {
    // constructors
    constructor();
    // methods
    // properties
    additionalVertexStreams: UnityEngine.Mesh;
    // fields
  }
}
declare namespace UnityEngine {
  class MeshSubsetCombineUtility extends System.Object {
    // constructors
    constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine.MeshSubsetCombineUtility {
  class MeshContainer extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    gameObject: UnityEngine.GameObject;
    instance: UnityEngine.MeshSubsetCombineUtility.MeshInstance;
    subMeshInstances: UnityEngine.MeshSubsetCombineUtility.SubMeshInstance[];
  }
}
declare namespace UnityEngine.MeshSubsetCombineUtility {
  class MeshInstance extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    meshInstanceID: number;
    rendererInstanceID: number;
    additionalVertexStreamsMeshInstanceID: number;
    transform: UnityEngine.Matrix4x4;
    lightmapScaleOffset: UnityEngine.Vector4;
    realtimeLightmapScaleOffset: UnityEngine.Vector4;
  }
}
declare namespace UnityEngine.MeshSubsetCombineUtility {
  class SubMeshInstance extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    meshInstanceID: number;
    vertexOffset: number;
    gameObjectInstanceID: number;
    subMeshIndex: number;
    transform: UnityEngine.Matrix4x4;
  }
}
declare namespace UnityEngine {
  class MeshTopology extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Triangles: UnityEngine.MeshTopology;
    static Quads: UnityEngine.MeshTopology;
    static Lines: UnityEngine.MeshTopology;
    static LineStrip: UnityEngine.MeshTopology;
    static Points: UnityEngine.MeshTopology;
  }
}
declare namespace UnityEngine {
  class Microphone extends System.Object {
    // constructors
    constructor();
    // methods
    static Start(deviceName: string, loop: boolean, lengthSec: number, frequency: number): UnityEngine.AudioClip;
    static End(deviceName: string): void;
    static IsRecording(deviceName: string): boolean;
    static GetPosition(deviceName: string): number;
    static GetDeviceCaps(deviceName: string, minFreq: any, maxFreq: any): void;
    // properties
    static readonly devices: string[];
    // fields
  }
}
declare namespace UnityEngine {
  class MissingComponentException extends System.SystemException {
    // constructors
    constructor();
    constructor(message: string);
    constructor(message: string, innerException: System.Exception);
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class MissingReferenceException extends System.SystemException {
    // constructors
    constructor();
    constructor(message: string);
    constructor(message: string, innerException: System.Exception);
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class MonoBehaviour extends UnityEngine.Behaviour {
    // constructors
    constructor();
    // methods
    Invoke(methodName: string, time: number): void;
    InvokeRepeating(methodName: string, time: number, repeatRate: number): void;
    CancelInvoke(): void;
    CancelInvoke(methodName: string): void;
    IsInvoking(methodName: string): boolean;
    IsInvoking(): boolean;
    StartCoroutine(routine: any): UnityEngine.Coroutine;
    StartCoroutine(methodName: string, value: any): UnityEngine.Coroutine;
    StartCoroutine(methodName: string): UnityEngine.Coroutine;
    StartCoroutine_Auto(routine: any): UnityEngine.Coroutine;
    StopCoroutine(methodName: string): void;
    StopCoroutine(routine: any): void;
    StopCoroutine(routine: UnityEngine.Coroutine): void;
    StopAllCoroutines(): void;
    static print(message: any): void;
    // properties
    useGUILayout: boolean;
    runInEditMode: boolean;
    // fields
  }
}
declare namespace UnityEngine {
  class Motion extends UnityEngine.Object {
    // constructors
    constructor();
    // methods
    ValidateIfRetargetable(val: boolean): boolean;
    // properties
    readonly averageDuration: number;
    readonly averageAngularSpeed: number;
    readonly averageSpeed: UnityEngine.Vector3;
    readonly apparentSpeed: number;
    readonly isLooping: boolean;
    readonly legacy: boolean;
    readonly isHumanMotion: boolean;
    readonly isAnimatorMotion: boolean;
    // fields
  }
}
declare namespace UnityEngine {
  class MotionVectorGenerationMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Camera: UnityEngine.MotionVectorGenerationMode;
    static Object: UnityEngine.MotionVectorGenerationMode;
    static ForceNoMotion: UnityEngine.MotionVectorGenerationMode;
  }
}
declare namespace UnityEngine {
  class MovieTexture extends UnityEngine.Texture {
    // constructors
    constructor();
    // methods
    Play(): void;
    Stop(): void;
    Pause(): void;
    // properties
    readonly audioClip: UnityEngine.AudioClip;
    loop: boolean;
    readonly isPlaying: boolean;
    readonly isReadyToPlay: boolean;
    readonly duration: number;
    // fields
  }
}
declare namespace UnityEngine {
  class MultilineAttribute extends UnityEngine.PropertyAttribute {
    // constructors
    constructor();
    constructor(lines: number);
    // methods
    // properties
    // fields
    lines: number;
  }
}
declare namespace UnityEngine {
  class Network extends System.Object {
    // constructors
    constructor();
    // methods
    static InitializeServer(connections: number, listenPort: number, useNat: boolean): UnityEngine.NetworkConnectionError;
    static InitializeServer(connections: number, listenPort: number): UnityEngine.NetworkConnectionError;
    static InitializeSecurity(): void;
    static Connect(IP: string, remotePort: number): UnityEngine.NetworkConnectionError;
    static Connect(IP: string, remotePort: number, password: string): UnityEngine.NetworkConnectionError;
    static Connect(IPs: string[], remotePort: number): UnityEngine.NetworkConnectionError;
    static Connect(IPs: string[], remotePort: number, password: string): UnityEngine.NetworkConnectionError;
    static Connect(GUID: string): UnityEngine.NetworkConnectionError;
    static Connect(GUID: string, password: string): UnityEngine.NetworkConnectionError;
    static Connect(hostData: UnityEngine.HostData): UnityEngine.NetworkConnectionError;
    static Connect(hostData: UnityEngine.HostData, password: string): UnityEngine.NetworkConnectionError;
    static Disconnect(timeout: number): void;
    static Disconnect(): void;
    static CloseConnection(target: UnityEngine.NetworkPlayer, sendDisconnectionNotification: boolean): void;
    static AllocateViewID(): UnityEngine.NetworkViewID;
    static Instantiate(prefab: UnityEngine.Object, position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion, group: number): UnityEngine.Object;
    static Destroy(viewID: UnityEngine.NetworkViewID): void;
    static Destroy(gameObject: UnityEngine.GameObject): void;
    static DestroyPlayerObjects(playerID: UnityEngine.NetworkPlayer): void;
    static RemoveRPCs(playerID: UnityEngine.NetworkPlayer): void;
    static RemoveRPCs(playerID: UnityEngine.NetworkPlayer, group: number): void;
    static RemoveRPCs(viewID: UnityEngine.NetworkViewID): void;
    static RemoveRPCsInGroup(group: number): void;
    static SetLevelPrefix(prefix: number): void;
    static GetLastPing(player: UnityEngine.NetworkPlayer): number;
    static GetAveragePing(player: UnityEngine.NetworkPlayer): number;
    static SetReceivingEnabled(player: UnityEngine.NetworkPlayer, group: number, enabled: boolean): void;
    static SetSendingEnabled(group: number, enabled: boolean): void;
    static SetSendingEnabled(player: UnityEngine.NetworkPlayer, group: number, enabled: boolean): void;
    static TestConnection(forceTest: boolean): UnityEngine.ConnectionTesterStatus;
    static TestConnection(): UnityEngine.ConnectionTesterStatus;
    static TestConnectionNAT(forceTest: boolean): UnityEngine.ConnectionTesterStatus;
    static TestConnectionNAT(): UnityEngine.ConnectionTesterStatus;
    static HavePublicAddress(): boolean;
    // properties
    static incomingPassword: string;
    static logLevel: UnityEngine.NetworkLogLevel;
    static readonly connections: UnityEngine.NetworkPlayer[];
    static readonly player: UnityEngine.NetworkPlayer;
    static readonly isClient: boolean;
    static readonly isServer: boolean;
    static readonly peerType: UnityEngine.NetworkPeerType;
    static sendRate: number;
    static isMessageQueueRunning: boolean;
    static readonly time: number;
    static minimumAllocatableViewIDs: number;
    static useNat: boolean;
    static natFacilitatorIP: string;
    static natFacilitatorPort: number;
    static connectionTesterIP: string;
    static connectionTesterPort: number;
    static maxConnections: number;
    static proxyIP: string;
    static proxyPort: number;
    static useProxy: boolean;
    static proxyPassword: string;
    // fields
  }
}
declare namespace UnityEngine {
  class NetworkConnectionError extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static NoError: UnityEngine.NetworkConnectionError;
    static RSAPublicKeyMismatch: UnityEngine.NetworkConnectionError;
    static InvalidPassword: UnityEngine.NetworkConnectionError;
    static ConnectionFailed: UnityEngine.NetworkConnectionError;
    static TooManyConnectedPlayers: UnityEngine.NetworkConnectionError;
    static ConnectionBanned: UnityEngine.NetworkConnectionError;
    static AlreadyConnectedToServer: UnityEngine.NetworkConnectionError;
    static AlreadyConnectedToAnotherServer: UnityEngine.NetworkConnectionError;
    static CreateSocketOrThreadFailure: UnityEngine.NetworkConnectionError;
    static IncorrectParameters: UnityEngine.NetworkConnectionError;
    static EmptyConnectTarget: UnityEngine.NetworkConnectionError;
    static InternalDirectConnectFailed: UnityEngine.NetworkConnectionError;
    static NATTargetNotConnected: UnityEngine.NetworkConnectionError;
    static NATTargetConnectionLost: UnityEngine.NetworkConnectionError;
    static NATPunchthroughFailed: UnityEngine.NetworkConnectionError;
  }
}
declare namespace UnityEngine {
  class NetworkDisconnection extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static LostConnection: UnityEngine.NetworkDisconnection;
    static Disconnected: UnityEngine.NetworkDisconnection;
  }
}
declare namespace UnityEngine.Networking {
  class ChannelQOS extends System.Object {
    // constructors
    constructor(value: UnityEngine.Networking.QosType);
    constructor();
    constructor(channel: UnityEngine.Networking.ChannelQOS);
    // methods
    // properties
    readonly QOS: UnityEngine.Networking.QosType;
    // fields
  }
}
declare namespace UnityEngine.Networking {
  class ConnectionConfig extends System.Object {
    // constructors
    constructor();
    constructor(config: UnityEngine.Networking.ConnectionConfig);
    // methods
    static Validate(config: UnityEngine.Networking.ConnectionConfig): void;
    AddChannel(value: UnityEngine.Networking.QosType): number;
    GetChannel(idx: number): UnityEngine.Networking.QosType;
    // properties
    PacketSize: number;
    FragmentSize: number;
    ResendTimeout: number;
    DisconnectTimeout: number;
    ConnectTimeout: number;
    MinUpdateTimeout: number;
    PingTimeout: number;
    ReducedPingTimeout: number;
    AllCostTimeout: number;
    NetworkDropThreshold: number;
    OverflowDropThreshold: number;
    MaxConnectionAttempt: number;
    AckDelay: number;
    MaxCombinedReliableMessageSize: number;
    MaxCombinedReliableMessageCount: number;
    MaxSentMessageQueueSize: number;
    IsAcksLong: boolean;
    UsePlatformSpecificProtocols: boolean;
    WebSocketReceiveBufferMaxSize: number;
    readonly ChannelCount: number;
    readonly Channels: UnityEngine.Networking.ChannelQOS[];
    // fields
  }
}
declare namespace UnityEngine.Networking {
  class ConnectionConfigInternal extends System.Object {
    // constructors
    constructor(config: UnityEngine.Networking.ConnectionConfig);
    // methods
    InitWrapper(): void;
    AddChannel(value: UnityEngine.Networking.QosType): number;
    GetChannel(i: number): UnityEngine.Networking.QosType;
    InitPacketSize(value: number): void;
    InitFragmentSize(value: number): void;
    InitResendTimeout(value: number): void;
    InitDisconnectTimeout(value: number): void;
    InitConnectTimeout(value: number): void;
    InitMinUpdateTimeout(value: number): void;
    InitPingTimeout(value: number): void;
    InitReducedPingTimeout(value: number): void;
    InitAllCostTimeout(value: number): void;
    InitNetworkDropThreshold(value: number): void;
    InitOverflowDropThreshold(value: number): void;
    InitMaxConnectionAttempt(value: number): void;
    InitAckDelay(value: number): void;
    InitMaxCombinedReliableMessageSize(value: number): void;
    InitMaxCombinedReliableMessageCount(value: number): void;
    InitMaxSentMessageQueueSize(value: number): void;
    InitIsAcksLong(value: boolean): void;
    InitUsePlatformSpecificProtocols(value: boolean): void;
    InitWebSocketReceiveBufferMaxSize(value: number): void;
    Dispose(): void;
    // properties
    readonly ChannelSize: number;
    // fields
  }
}
declare namespace UnityEngine.Networking {
  class ConnectionSimulatorConfig extends System.Object {
    // constructors
    constructor(outMinDelay: number, outAvgDelay: number, inMinDelay: number, inAvgDelay: number, packetLossPercentage: number);
    // methods
    Dispose(): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine.Networking {
  class DownloadHandler extends System.Object {
    // constructors
    protected constructor();
    // methods
    Dispose(): void;
    // properties
    readonly isDone: boolean;
    readonly data: number[];
    readonly text: string;
    // fields
  }
}
declare namespace UnityEngine.Networking {
  class DownloadHandlerAssetBundle extends UnityEngine.Networking.DownloadHandler {
    // constructors
    constructor(url: string, crc: number);
    constructor(url: string, version: number, crc: number);
    constructor(url: string, hash: UnityEngine.Hash128, crc: number);
    // methods
    static GetContent(www: UnityEngine.Networking.UnityWebRequest): UnityEngine.AssetBundle;
    // properties
    readonly assetBundle: UnityEngine.AssetBundle;
    // fields
  }
}
declare namespace UnityEngine.Networking {
  class DownloadHandlerAudioClip extends UnityEngine.Networking.DownloadHandler {
    // constructors
    constructor(url: string, audioType: UnityEngine.AudioType);
    // methods
    static GetContent(www: UnityEngine.Networking.UnityWebRequest): UnityEngine.AudioClip;
    // properties
    readonly audioClip: UnityEngine.AudioClip;
    // fields
  }
}
declare namespace UnityEngine.Networking {
  class DownloadHandlerBuffer extends UnityEngine.Networking.DownloadHandler {
    // constructors
    constructor();
    // methods
    static GetContent(www: UnityEngine.Networking.UnityWebRequest): string;
    // properties
    // fields
  }
}
declare namespace UnityEngine.Networking {
  class DownloadHandlerScript extends UnityEngine.Networking.DownloadHandler {
    // constructors
    constructor();
    constructor(preallocatedBuffer: number[]);
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine.Networking {
  class DownloadHandlerTexture extends UnityEngine.Networking.DownloadHandler {
    // constructors
    constructor();
    constructor(readable: boolean);
    // methods
    static GetContent(www: UnityEngine.Networking.UnityWebRequest): UnityEngine.Texture2D;
    // properties
    readonly texture: UnityEngine.Texture2D;
    // fields
  }
}
declare namespace UnityEngine.Networking {
  class GlobalConfig extends System.Object {
    // constructors
    constructor();
    // methods
    // properties
    ThreadAwakeTimeout: number;
    ReactorModel: UnityEngine.Networking.ReactorModel;
    ReactorMaximumReceivedMessages: number;
    ReactorMaximumSentMessages: number;
    MaxPacketSize: number;
    // fields
  }
}
declare namespace UnityEngine.Networking {
  class GlobalConfigInternal extends System.Object {
    // constructors
    constructor(config: UnityEngine.Networking.GlobalConfig);
    // methods
    InitWrapper(): void;
    InitThreadAwakeTimeout(ms: number): void;
    InitReactorModel(model: number): void;
    InitReactorMaximumReceivedMessages(size: number): void;
    InitReactorMaximumSentMessages(size: number): void;
    InitMaxPacketSize(size: number): void;
    Dispose(): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine.Networking {
  class HostTopology extends System.Object {
    // constructors
    constructor(defaultConfig: UnityEngine.Networking.ConnectionConfig, maxDefaultConnections: number);
    // methods
    GetSpecialConnectionConfig(i: number): UnityEngine.Networking.ConnectionConfig;
    AddSpecialConnectionConfig(config: UnityEngine.Networking.ConnectionConfig): number;
    // properties
    readonly DefaultConfig: UnityEngine.Networking.ConnectionConfig;
    readonly MaxDefaultConnections: number;
    readonly SpecialConnectionConfigsCount: number;
    readonly SpecialConnectionConfigs: UnityEngine.Networking.ConnectionConfig[];
    ReceivedMessagePoolSize: number;
    SentMessagePoolSize: number;
    MessagePoolSizeGrowthFactor: number;
    // fields
  }
}
declare namespace UnityEngine.Networking {
  class HostTopologyInternal extends System.Object {
    // constructors
    constructor(topology: UnityEngine.Networking.HostTopology);
    // methods
    InitWrapper(config: UnityEngine.Networking.ConnectionConfigInternal, maxDefaultConnections: number): void;
    AddSpecialConnectionConfigWrapper(config: UnityEngine.Networking.ConnectionConfigInternal): number;
    InitReceivedPoolSize(pool: number): void;
    InitSentMessagePoolSize(pool: number): void;
    InitMessagePoolSizeGrowthFactor(factor: number): void;
    Dispose(): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine.Networking {
  class IMultipartFormSection {
    // constructors
    protected constructor();
    // methods
    // properties
    readonly sectionName: string;
    readonly sectionData: number[];
    readonly fileName: string;
    readonly contentType: string;
    // fields
  }
}
declare namespace UnityEngine.Networking.Match {
  class BasicResponse extends UnityEngine.Networking.Match.Response {
    // constructors
    constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine.Networking.Match {
  class CreateMatchRequest extends UnityEngine.Networking.Match.Request {
    // constructors
    constructor();
    // methods
    ToString(): string;
    IsValid(): boolean;
    // properties
    name: string;
    size: number;
    publicAddress: string;
    privateAddress: string;
    eloScore: number;
    advertise: boolean;
    password: string;
    matchAttributes: any;
    // fields
  }
}
declare namespace UnityEngine.Networking.Match {
  class CreateMatchResponse extends UnityEngine.Networking.Match.BasicResponse {
    // constructors
    constructor();
    // methods
    ToString(): string;
    Parse(obj: any): void;
    // properties
    address: string;
    port: number;
    domain: number;
    networkId: UnityEngine.Networking.Types.NetworkID;
    accessTokenString: string;
    nodeId: UnityEngine.Networking.Types.NodeID;
    usingRelay: boolean;
    // fields
  }
}
declare namespace UnityEngine.Networking.Match {
  class CreateOrJoinMatchRequest extends UnityEngine.Networking.Match.CreateMatchRequest {
    // constructors
    constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine.Networking.Match {
  class DestroyMatchRequest extends UnityEngine.Networking.Match.Request {
    // constructors
    constructor();
    // methods
    ToString(): string;
    IsValid(): boolean;
    // properties
    networkId: UnityEngine.Networking.Types.NetworkID;
    // fields
  }
}
declare namespace UnityEngine.Networking.Match {
  class DropConnectionRequest extends UnityEngine.Networking.Match.Request {
    // constructors
    constructor();
    // methods
    ToString(): string;
    IsValid(): boolean;
    // properties
    networkId: UnityEngine.Networking.Types.NetworkID;
    nodeId: UnityEngine.Networking.Types.NodeID;
    // fields
  }
}
declare namespace UnityEngine.Networking.Match {
  class DropConnectionResponse extends UnityEngine.Networking.Match.Response {
    // constructors
    constructor();
    // methods
    ToString(): string;
    Parse(obj: any): void;
    // properties
    networkId: UnityEngine.Networking.Types.NetworkID;
    nodeId: UnityEngine.Networking.Types.NodeID;
    // fields
  }
}
declare namespace UnityEngine.Networking.Match {
  class IResponse {
    // constructors
    protected constructor();
    // methods
    SetSuccess(): void;
    SetFailure(info: string): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine.Networking.Match {
  class JoinMatchRequest extends UnityEngine.Networking.Match.Request {
    // constructors
    constructor();
    // methods
    ToString(): string;
    IsValid(): boolean;
    // properties
    networkId: UnityEngine.Networking.Types.NetworkID;
    publicAddress: string;
    privateAddress: string;
    eloScore: number;
    password: string;
    // fields
  }
}
declare namespace UnityEngine.Networking.Match {
  class JoinMatchResponse extends UnityEngine.Networking.Match.BasicResponse {
    // constructors
    constructor();
    // methods
    ToString(): string;
    Parse(obj: any): void;
    // properties
    address: string;
    port: number;
    domain: number;
    networkId: UnityEngine.Networking.Types.NetworkID;
    accessTokenString: string;
    nodeId: UnityEngine.Networking.Types.NodeID;
    usingRelay: boolean;
    // fields
  }
}
declare namespace UnityEngine.Networking.Match {
  class ListMatchRequest extends UnityEngine.Networking.Match.Request {
    // constructors
    constructor();
    // methods
    ToString(): string;
    IsValid(): boolean;
    // properties
    pageSize: number;
    pageNum: number;
    nameFilter: string;
    filterOutPrivateMatches: boolean;
    eloScore: number;
    matchAttributeFilterLessThan: any;
    matchAttributeFilterEqualTo: any;
    matchAttributeFilterGreaterThan: any;
    // fields
    includePasswordMatches: boolean;
  }
}
declare namespace UnityEngine.Networking.Match {
  class ListMatchResponse extends UnityEngine.Networking.Match.BasicResponse {
    // constructors
    constructor();
    constructor(otherMatches: UnityEngine.Networking.Match.MatchDesc[]);
    // methods
    ToString(): string;
    Parse(obj: any): void;
    // properties
    matches: UnityEngine.Networking.Match.MatchDesc[];
    // fields
  }
}
declare namespace UnityEngine.Networking.Match {
  class MatchDesc extends UnityEngine.Networking.Match.ResponseBase {
    // constructors
    constructor();
    // methods
    ToString(): string;
    Parse(obj: any): void;
    // properties
    networkId: UnityEngine.Networking.Types.NetworkID;
    name: string;
    averageEloScore: number;
    maxSize: number;
    currentSize: number;
    isPrivate: boolean;
    matchAttributes: any;
    hostNodeId: UnityEngine.Networking.Types.NodeID;
    directConnectInfos: UnityEngine.Networking.Match.MatchDirectConnectInfo[];
    // fields
  }
}
declare namespace UnityEngine.Networking.Match {
  class MatchDirectConnectInfo extends UnityEngine.Networking.Match.ResponseBase {
    // constructors
    constructor();
    // methods
    ToString(): string;
    Parse(obj: any): void;
    // properties
    nodeId: UnityEngine.Networking.Types.NodeID;
    publicAddress: string;
    privateAddress: string;
    hostPriority: UnityEngine.Networking.Types.HostPriority;
    // fields
  }
}
declare namespace UnityEngine.Networking.Match {
  class MatchInfo extends System.Object {
    // constructors
    constructor();
    // methods
    ToString(): string;
    // properties
    readonly address: string;
    readonly port: number;
    readonly domain: number;
    readonly networkId: UnityEngine.Networking.Types.NetworkID;
    readonly accessToken: UnityEngine.Networking.Types.NetworkAccessToken;
    readonly nodeId: UnityEngine.Networking.Types.NodeID;
    readonly usingRelay: boolean;
    // fields
  }
}
declare namespace UnityEngine.Networking.Match {
  class MatchInfoSnapshot extends System.Object {
    // constructors
    constructor();
    // methods
    // properties
    readonly networkId: UnityEngine.Networking.Types.NetworkID;
    readonly hostNodeId: UnityEngine.Networking.Types.NodeID;
    readonly name: string;
    readonly averageEloScore: number;
    readonly maxSize: number;
    readonly currentSize: number;
    readonly isPrivate: boolean;
    readonly matchAttributes: any;
    readonly directConnectInfos: UnityEngine.Networking.Match.MatchInfoSnapshot.MatchInfoDirectConnectSnapshot[];
    // fields
  }
}
declare namespace UnityEngine.Networking.Match.MatchInfoSnapshot {
  class MatchInfoDirectConnectSnapshot extends System.Object {
    // constructors
    constructor();
    // methods
    // properties
    readonly nodeId: UnityEngine.Networking.Types.NodeID;
    readonly publicAddress: string;
    readonly privateAddress: string;
    readonly hostPriority: UnityEngine.Networking.Types.HostPriority;
    // fields
  }
}
declare namespace UnityEngine.Networking.Match {
  class NetworkMatch extends UnityEngine.MonoBehaviour {
    // constructors
    constructor();
    // methods
    SetProgramAppID(programAppID: UnityEngine.Networking.Types.AppID): void;
    CreateMatch(matchName: string, matchSize: number, matchAdvertise: boolean, matchPassword: string, publicClientAddress: string, privateClientAddress: string, eloScoreForMatch: number, requestDomain: number, callback: ((success: boolean, extendedInfo: string, responseData: UnityEngine.Networking.Match.MatchInfo) => void)): UnityEngine.Coroutine;
    JoinMatch(netId: UnityEngine.Networking.Types.NetworkID, matchPassword: string, publicClientAddress: string, privateClientAddress: string, eloScoreForClient: number, requestDomain: number, callback: ((success: boolean, extendedInfo: string, responseData: UnityEngine.Networking.Match.MatchInfo) => void)): UnityEngine.Coroutine;
    DestroyMatch(netId: UnityEngine.Networking.Types.NetworkID, requestDomain: number, callback: ((success: boolean, extendedInfo: string) => void)): UnityEngine.Coroutine;
    DropConnection(netId: UnityEngine.Networking.Types.NetworkID, dropNodeId: UnityEngine.Networking.Types.NodeID, requestDomain: number, callback: ((success: boolean, extendedInfo: string) => void)): UnityEngine.Coroutine;
    ListMatches(startPageNumber: number, resultPageSize: number, matchNameFilter: string, filterOutPrivateMatchesFromResults: boolean, eloScoreTarget: number, requestDomain: number, callback: ((success: boolean, extendedInfo: string, responseData: UnityEngine.Networking.Match.MatchInfoSnapshot[]) => void)): UnityEngine.Coroutine;
    SetMatchAttributes(networkId: UnityEngine.Networking.Types.NetworkID, isListed: boolean, requestDomain: number, callback: ((success: boolean, extendedInfo: string) => void)): UnityEngine.Coroutine;
    // properties
    baseUri: any;
    // fields
  }
}
declare namespace UnityEngine.Networking.Match {
  class Request extends System.Object {
    // constructors
    protected constructor();
    // methods
    IsValid(): boolean;
    ToString(): string;
    // properties
    version: number;
    sourceId: UnityEngine.Networking.Types.SourceID;
    projectId: string;
    appId: UnityEngine.Networking.Types.AppID;
    accessTokenString: string;
    domain: number;
    // fields
    static currentVersion: number;
  }
}
declare namespace UnityEngine.Networking.Match {
  class Response extends UnityEngine.Networking.Match.ResponseBase {
    // constructors
    protected constructor();
    // methods
    SetSuccess(): void;
    SetFailure(info: string): void;
    ToString(): string;
    Parse(obj: any): void;
    // properties
    readonly success: boolean;
    readonly extendedInfo: string;
    // fields
  }
}
declare namespace UnityEngine.Networking.Match {
  class ResponseBase extends System.Object {
    // constructors
    protected constructor();
    // methods
    Parse(obj: any): void;
    ParseJSONString(name: string, obj: any, dictJsonObj: any): string;
    ParseJSONInt16(name: string, obj: any, dictJsonObj: any): number;
    ParseJSONInt32(name: string, obj: any, dictJsonObj: any): number;
    ParseJSONInt64(name: string, obj: any, dictJsonObj: any): number;
    ParseJSONUInt16(name: string, obj: any, dictJsonObj: any): number;
    ParseJSONUInt32(name: string, obj: any, dictJsonObj: any): number;
    ParseJSONUInt64(name: string, obj: any, dictJsonObj: any): number;
    ParseJSONBool(name: string, obj: any, dictJsonObj: any): boolean;
    ParseJSONDateTime(name: string, obj: any, dictJsonObj: any): any;
    ParseJSONListOfStrings(name: string, obj: any, dictJsonObj: any): string[];
    // properties
    // fields
  }
}
declare namespace UnityEngine.Networking.Match {
  class SetMatchAttributesRequest extends UnityEngine.Networking.Match.Request {
    // constructors
    constructor();
    // methods
    ToString(): string;
    IsValid(): boolean;
    // properties
    networkId: UnityEngine.Networking.Types.NetworkID;
    isListed: boolean;
    // fields
  }
}
declare namespace UnityEngine.Networking {
  class MultipartFormDataSection extends System.Object {
    // constructors
    constructor(name: string, data: number[], contentType: string);
    constructor(name: string, data: number[]);
    constructor(data: number[]);
    constructor(name: string, data: string, encoding: any, contentType: string);
    constructor(name: string, data: string, contentType: string);
    constructor(name: string, data: string);
    constructor(data: string);
    // methods
    // properties
    readonly sectionName: string;
    readonly sectionData: number[];
    readonly fileName: string;
    readonly contentType: string;
    // fields
  }
}
declare namespace UnityEngine.Networking {
  class MultipartFormFileSection extends System.Object {
    // constructors
    constructor(name: string, data: number[], fileName: string, contentType: string);
    constructor(data: number[]);
    constructor(fileName: string, data: number[]);
    constructor(name: string, data: string, dataEncoding: any, fileName: string);
    constructor(data: string, dataEncoding: any, fileName: string);
    constructor(data: string, fileName: string);
    // methods
    // properties
    readonly sectionName: string;
    readonly sectionData: number[];
    readonly fileName: string;
    readonly contentType: string;
    // fields
  }
}
declare namespace UnityEngine.Networking {
  class NetworkError extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Ok: UnityEngine.Networking.NetworkError;
    static WrongHost: UnityEngine.Networking.NetworkError;
    static WrongConnection: UnityEngine.Networking.NetworkError;
    static WrongChannel: UnityEngine.Networking.NetworkError;
    static NoResources: UnityEngine.Networking.NetworkError;
    static BadMessage: UnityEngine.Networking.NetworkError;
    static Timeout: UnityEngine.Networking.NetworkError;
    static MessageToLong: UnityEngine.Networking.NetworkError;
    static WrongOperation: UnityEngine.Networking.NetworkError;
    static VersionMismatch: UnityEngine.Networking.NetworkError;
    static CRCMismatch: UnityEngine.Networking.NetworkError;
    static DNSFailure: UnityEngine.Networking.NetworkError;
  }
}
declare namespace UnityEngine.Networking {
  class NetworkEventType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static DataEvent: UnityEngine.Networking.NetworkEventType;
    static ConnectEvent: UnityEngine.Networking.NetworkEventType;
    static DisconnectEvent: UnityEngine.Networking.NetworkEventType;
    static Nothing: UnityEngine.Networking.NetworkEventType;
    static BroadcastEvent: UnityEngine.Networking.NetworkEventType;
  }
}
declare namespace UnityEngine.Networking {
  class NetworkTransport extends System.Object {
    // constructors
    protected constructor();
    // methods
    static ConnectEndPoint(hostId: number, endPoint: any, exceptionConnectionId: number, error: any): number;
    static Init(): void;
    static Init(config: UnityEngine.Networking.GlobalConfig): void;
    static Shutdown(): void;
    static GetAssetId(go: UnityEngine.GameObject): string;
    static AddSceneId(id: number): void;
    static GetNextSceneId(): number;
    static ConnectAsNetworkHost(hostId: number, address: string, port: number, network: UnityEngine.Networking.Types.NetworkID, source: UnityEngine.Networking.Types.SourceID, node: UnityEngine.Networking.Types.NodeID, error: any): void;
    static DisconnectNetworkHost(hostId: number, error: any): void;
    static ReceiveRelayEventFromHost(hostId: number, error: any): UnityEngine.Networking.NetworkEventType;
    static ConnectToNetworkPeer(hostId: number, address: string, port: number, exceptionConnectionId: number, relaySlotId: number, network: UnityEngine.Networking.Types.NetworkID, source: UnityEngine.Networking.Types.SourceID, node: UnityEngine.Networking.Types.NodeID, bytesPerSec: number, bucketSizeFactor: number, error: any): number;
    static ConnectToNetworkPeer(hostId: number, address: string, port: number, exceptionConnectionId: number, relaySlotId: number, network: UnityEngine.Networking.Types.NetworkID, source: UnityEngine.Networking.Types.SourceID, node: UnityEngine.Networking.Types.NodeID, error: any): number;
    static GetCurrentIncomingMessageAmount(): number;
    static GetCurrentOutgoingMessageAmount(): number;
    static GetCurrentRtt(hostId: number, connectionId: number, error: any): number;
    static GetNetworkLostPacketNum(hostId: number, connectionId: number, error: any): number;
    static GetPacketSentRate(hostId: number, connectionId: number, error: any): number;
    static GetPacketReceivedRate(hostId: number, connectionId: number, error: any): number;
    static GetRemotePacketReceivedRate(hostId: number, connectionId: number, error: any): number;
    static GetNetIOTimeuS(): number;
    static GetConnectionInfo(hostId: number, connectionId: number, address: any, port: any, network: any, dstNode: any, error: any): void;
    static GetConnectionInfo(hostId: number, connectionId: number, port: any, network: any, dstNode: any, error: any): string;
    static GetNetworkTimestamp(): number;
    static GetRemoteDelayTimeMS(hostId: number, connectionId: number, remoteTime: number, error: any): number;
    static StartSendMulticast(hostId: number, channelId: number, buffer: number[], size: number, error: any): boolean;
    static SendMulticast(hostId: number, connectionId: number, error: any): boolean;
    static FinishSendMulticast(hostId: number, error: any): boolean;
    static AddWebsocketHost(topology: UnityEngine.Networking.HostTopology, port: number): number;
    static AddWebsocketHost(topology: UnityEngine.Networking.HostTopology, port: number, ip: string): number;
    static AddHost(topology: UnityEngine.Networking.HostTopology, port: number): number;
    static AddHost(topology: UnityEngine.Networking.HostTopology): number;
    static AddHost(topology: UnityEngine.Networking.HostTopology, port: number, ip: string): number;
    static AddHostWithSimulator(topology: UnityEngine.Networking.HostTopology, minTimeout: number, maxTimeout: number, port: number): number;
    static AddHostWithSimulator(topology: UnityEngine.Networking.HostTopology, minTimeout: number, maxTimeout: number): number;
    static AddHostWithSimulator(topology: UnityEngine.Networking.HostTopology, minTimeout: number, maxTimeout: number, port: number, ip: string): number;
    static RemoveHost(hostId: number): boolean;
    static Connect(hostId: number, address: string, port: number, exeptionConnectionId: number, error: any): number;
    static ConnectWithSimulator(hostId: number, address: string, port: number, exeptionConnectionId: number, error: any, conf: UnityEngine.Networking.ConnectionSimulatorConfig): number;
    static Disconnect(hostId: number, connectionId: number, error: any): boolean;
    static Send(hostId: number, connectionId: number, channelId: number, buffer: number[], size: number, error: any): boolean;
    static Receive(hostId: any, connectionId: any, channelId: any, buffer: number[], bufferSize: number, receivedSize: any, error: any): UnityEngine.Networking.NetworkEventType;
    static ReceiveFromHost(hostId: number, connectionId: any, channelId: any, buffer: number[], bufferSize: number, receivedSize: any, error: any): UnityEngine.Networking.NetworkEventType;
    static SetPacketStat(direction: number, packetStatId: number, numMsgs: number, numBytes: number): void;
    static StartBroadcastDiscovery(hostId: number, broadcastPort: number, key: number, version: number, subversion: number, buffer: number[], size: number, timeout: number, error: any): boolean;
    static StopBroadcastDiscovery(): void;
    static IsBroadcastDiscoveryRunning(): boolean;
    static SetBroadcastCredentials(hostId: number, key: number, version: number, subversion: number, error: any): void;
    static GetBroadcastConnectionInfo(hostId: number, port: any, error: any): string;
    static GetBroadcastConnectionInfo(hostId: number, address: any, port: any, error: any): void;
    static GetBroadcastConnectionMessage(hostId: number, buffer: number[], bufferSize: number, receivedSize: any, error: any): void;
    // properties
    static readonly IsStarted: boolean;
    // fields
  }
}
declare namespace UnityEngine.Networking {
  class QosType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Unreliable: UnityEngine.Networking.QosType;
    static UnreliableFragmented: UnityEngine.Networking.QosType;
    static UnreliableSequenced: UnityEngine.Networking.QosType;
    static Reliable: UnityEngine.Networking.QosType;
    static ReliableFragmented: UnityEngine.Networking.QosType;
    static ReliableSequenced: UnityEngine.Networking.QosType;
    static StateUpdate: UnityEngine.Networking.QosType;
    static ReliableStateUpdate: UnityEngine.Networking.QosType;
    static AllCostDelivery: UnityEngine.Networking.QosType;
  }
}
declare namespace UnityEngine.Networking {
  class ReactorModel extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static SelectReactor: UnityEngine.Networking.ReactorModel;
    static FixRateReactor: UnityEngine.Networking.ReactorModel;
  }
}
declare namespace UnityEngine.Networking.Types {
  class AppID extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Invalid: UnityEngine.Networking.Types.AppID;
  }
}
declare namespace UnityEngine.Networking.Types {
  class HostPriority extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Invalid: UnityEngine.Networking.Types.HostPriority;
  }
}
declare namespace UnityEngine.Networking.Types {
  class NetworkAccessLevel extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Invalid: UnityEngine.Networking.Types.NetworkAccessLevel;
    static User: UnityEngine.Networking.Types.NetworkAccessLevel;
    static Owner: UnityEngine.Networking.Types.NetworkAccessLevel;
    static Admin: UnityEngine.Networking.Types.NetworkAccessLevel;
  }
}
declare namespace UnityEngine.Networking.Types {
  class NetworkAccessToken extends System.Object {
    // constructors
    constructor();
    constructor(array: number[]);
    constructor(strArray: string);
    // methods
    GetByteString(): string;
    IsValid(): boolean;
    // properties
    // fields
    array: number[];
  }
}
declare namespace UnityEngine.Networking.Types {
  class NetworkID extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Invalid: UnityEngine.Networking.Types.NetworkID;
  }
}
declare namespace UnityEngine.Networking.Types {
  class NodeID extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Invalid: UnityEngine.Networking.Types.NodeID;
  }
}
declare namespace UnityEngine.Networking.Types {
  class SourceID extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Invalid: UnityEngine.Networking.Types.SourceID;
  }
}
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
declare namespace UnityEngine.Networking.UnityWebRequest {
  class UnityWebRequestError extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static OK: UnityEngine.Networking.UnityWebRequest.UnityWebRequestError;
    static Unknown: UnityEngine.Networking.UnityWebRequest.UnityWebRequestError;
    static SDKError: UnityEngine.Networking.UnityWebRequest.UnityWebRequestError;
    static UnsupportedProtocol: UnityEngine.Networking.UnityWebRequest.UnityWebRequestError;
    static MalformattedUrl: UnityEngine.Networking.UnityWebRequest.UnityWebRequestError;
    static CannotResolveProxy: UnityEngine.Networking.UnityWebRequest.UnityWebRequestError;
    static CannotResolveHost: UnityEngine.Networking.UnityWebRequest.UnityWebRequestError;
    static CannotConnectToHost: UnityEngine.Networking.UnityWebRequest.UnityWebRequestError;
    static AccessDenied: UnityEngine.Networking.UnityWebRequest.UnityWebRequestError;
    static GenericHTTPError: UnityEngine.Networking.UnityWebRequest.UnityWebRequestError;
    static WriteError: UnityEngine.Networking.UnityWebRequest.UnityWebRequestError;
    static ReadError: UnityEngine.Networking.UnityWebRequest.UnityWebRequestError;
    static OutOfMemory: UnityEngine.Networking.UnityWebRequest.UnityWebRequestError;
    static Timeout: UnityEngine.Networking.UnityWebRequest.UnityWebRequestError;
    static HTTPPostError: UnityEngine.Networking.UnityWebRequest.UnityWebRequestError;
    static SSLCannotConnect: UnityEngine.Networking.UnityWebRequest.UnityWebRequestError;
    static Aborted: UnityEngine.Networking.UnityWebRequest.UnityWebRequestError;
    static TooManyRedirects: UnityEngine.Networking.UnityWebRequest.UnityWebRequestError;
    static ReceivedNoData: UnityEngine.Networking.UnityWebRequest.UnityWebRequestError;
    static SSLNotSupported: UnityEngine.Networking.UnityWebRequest.UnityWebRequestError;
    static FailedToSendData: UnityEngine.Networking.UnityWebRequest.UnityWebRequestError;
    static FailedToReceiveData: UnityEngine.Networking.UnityWebRequest.UnityWebRequestError;
    static SSLCertificateError: UnityEngine.Networking.UnityWebRequest.UnityWebRequestError;
    static SSLCipherNotAvailable: UnityEngine.Networking.UnityWebRequest.UnityWebRequestError;
    static SSLCACertError: UnityEngine.Networking.UnityWebRequest.UnityWebRequestError;
    static UnrecognizedContentEncoding: UnityEngine.Networking.UnityWebRequest.UnityWebRequestError;
    static LoginFailed: UnityEngine.Networking.UnityWebRequest.UnityWebRequestError;
    static SSLShutdownFailed: UnityEngine.Networking.UnityWebRequest.UnityWebRequestError;
  }
}
declare namespace UnityEngine.Networking.UnityWebRequest {
  class UnityWebRequestMethod extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Get: UnityEngine.Networking.UnityWebRequest.UnityWebRequestMethod;
    static Post: UnityEngine.Networking.UnityWebRequest.UnityWebRequestMethod;
    static Put: UnityEngine.Networking.UnityWebRequest.UnityWebRequestMethod;
    static Head: UnityEngine.Networking.UnityWebRequest.UnityWebRequestMethod;
    static Custom: UnityEngine.Networking.UnityWebRequest.UnityWebRequestMethod;
  }
}
declare namespace UnityEngine.Networking {
  class UploadHandler extends System.Object {
    // constructors
    protected constructor();
    // methods
    Dispose(): void;
    // properties
    readonly data: number[];
    contentType: string;
    readonly progress: number;
    // fields
  }
}
declare namespace UnityEngine.Networking {
  class UploadHandlerRaw extends UnityEngine.Networking.UploadHandler {
    // constructors
    constructor(data: number[]);
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine.Networking {
  class Utility extends System.Object {
    // constructors
    protected constructor();
    // methods
    static GetSourceID(): UnityEngine.Networking.Types.SourceID;
    static SetAppID(newAppID: UnityEngine.Networking.Types.AppID): void;
    static GetAppID(): UnityEngine.Networking.Types.AppID;
    static SetAccessTokenForNetwork(netId: UnityEngine.Networking.Types.NetworkID, accessToken: UnityEngine.Networking.Types.NetworkAccessToken): void;
    static GetAccessTokenForNetwork(netId: UnityEngine.Networking.Types.NetworkID): UnityEngine.Networking.Types.NetworkAccessToken;
    // properties
    static useRandomSourceID: boolean;
    // fields
  }
}
declare namespace UnityEngine {
  class NetworkLogLevel extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Off: UnityEngine.NetworkLogLevel;
    static Informational: UnityEngine.NetworkLogLevel;
    static Full: UnityEngine.NetworkLogLevel;
  }
}
declare namespace UnityEngine {
  class NetworkMessageInfo extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    readonly timestamp: number;
    readonly sender: UnityEngine.NetworkPlayer;
    readonly networkView: UnityEngine.NetworkView;
    // fields
  }
}
declare namespace UnityEngine {
  class NetworkPeerType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Disconnected: UnityEngine.NetworkPeerType;
    static Server: UnityEngine.NetworkPeerType;
    static Client: UnityEngine.NetworkPeerType;
    static Connecting: UnityEngine.NetworkPeerType;
  }
}
declare namespace UnityEngine {
  class NetworkPlayer extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    GetHashCode(): number;
    Equals(other: any): boolean;
    ToString(): string;
    // properties
    readonly ipAddress: string;
    readonly port: number;
    readonly guid: string;
    readonly externalIP: string;
    readonly externalPort: number;
    // fields
  }
}
declare namespace UnityEngine {
  class NetworkReachability extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static NotReachable: UnityEngine.NetworkReachability;
    static ReachableViaCarrierDataNetwork: UnityEngine.NetworkReachability;
    static ReachableViaLocalAreaNetwork: UnityEngine.NetworkReachability;
  }
}
declare namespace UnityEngine {
  class NetworkStateSynchronization extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Off: UnityEngine.NetworkStateSynchronization;
    static ReliableDeltaCompressed: UnityEngine.NetworkStateSynchronization;
    static Unreliable: UnityEngine.NetworkStateSynchronization;
  }
}
declare namespace UnityEngine {
  class NetworkView extends UnityEngine.Behaviour {
    // constructors
    constructor();
    // methods
    RPC(name: string, mode: UnityEngine.RPCMode, args: any[]): void;
    RPC(name: string, target: UnityEngine.NetworkPlayer, args: any[]): void;
    SetScope(player: UnityEngine.NetworkPlayer, relevancy: boolean): boolean;
    static Find(viewID: UnityEngine.NetworkViewID): UnityEngine.NetworkView;
    // properties
    observed: UnityEngine.Component;
    stateSynchronization: UnityEngine.NetworkStateSynchronization;
    viewID: UnityEngine.NetworkViewID;
    group: number;
    readonly isMine: boolean;
    readonly owner: UnityEngine.NetworkPlayer;
    // fields
  }
}
declare namespace UnityEngine {
  class NetworkViewID extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    GetHashCode(): number;
    Equals(other: any): boolean;
    ToString(): string;
    // properties
    static readonly unassigned: UnityEngine.NetworkViewID;
    readonly isMine: boolean;
    readonly owner: UnityEngine.NetworkPlayer;
    // fields
  }
}
declare namespace UnityEngine {
  class NotificationServices extends System.Object {
    // constructors
    constructor();
    // methods
    static RegisterForRemoteNotificationTypes(notificationTypes: UnityEngine.RemoteNotificationType): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class NPOTSupport extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static None: UnityEngine.NPOTSupport;
    static Restricted: UnityEngine.NPOTSupport;
    static Full: UnityEngine.NPOTSupport;
  }
}
declare namespace UnityEngine {
  class Object extends System.Object {
    // constructors
    constructor();
    // methods
    static Destroy(obj: UnityEngine.Object, t: number): void;
    static Destroy(obj: UnityEngine.Object): void;
    static DestroyImmediate(obj: UnityEngine.Object, allowDestroyingAssets: boolean): void;
    static DestroyImmediate(obj: UnityEngine.Object): void;
    static FindObjectsOfType(type: any): UnityEngine.Object[];
    static DontDestroyOnLoad(target: UnityEngine.Object): void;
    static DestroyObject(obj: UnityEngine.Object, t: number): void;
    static DestroyObject(obj: UnityEngine.Object): void;
    static FindSceneObjectsOfType(type: any): UnityEngine.Object[];
    static FindObjectsOfTypeIncludingAssets(type: any): UnityEngine.Object[];
    static FindObjectsOfTypeAll(type: any): UnityEngine.Object[];
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    static Instantiate(original: UnityEngine.Object, position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion): UnityEngine.Object;
    static Instantiate(original: UnityEngine.Object, position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion, parent: UnityEngine.Transform): UnityEngine.Object;
    static Instantiate(original: UnityEngine.Object): UnityEngine.Object;
    static Instantiate(original: UnityEngine.Object, parent: UnityEngine.Transform): UnityEngine.Object;
    static Instantiate(original: UnityEngine.Object, parent: UnityEngine.Transform, instantiateInWorldSpace: boolean): UnityEngine.Object;
    static FindObjectOfType(type: any): UnityEngine.Object;
    // properties
    name: string;
    hideFlags: UnityEngine.HideFlags;
    // fields
  }
}
declare namespace UnityEngine {
  class OcclusionArea extends UnityEngine.Component {
    // constructors
    constructor();
    // methods
    // properties
    center: UnityEngine.Vector3;
    size: UnityEngine.Vector3;
    // fields
  }
}
declare namespace UnityEngine {
  class OcclusionPortal extends UnityEngine.Component {
    // constructors
    constructor();
    // methods
    // properties
    open: boolean;
    // fields
  }
}
declare namespace UnityEngine {
  class OperatingSystemFamily extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Other: UnityEngine.OperatingSystemFamily;
    static MacOSX: UnityEngine.OperatingSystemFamily;
    static Windows: UnityEngine.OperatingSystemFamily;
    static Linux: UnityEngine.OperatingSystemFamily;
  }
}
declare namespace UnityEngine {
  class Particle extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    position: UnityEngine.Vector3;
    velocity: UnityEngine.Vector3;
    energy: number;
    startEnergy: number;
    size: number;
    rotation: number;
    angularVelocity: number;
    color: UnityEngine.Color;
    // fields
  }
}
declare namespace UnityEngine {
  class ParticleAnimator extends UnityEngine.Component {
    // constructors
    constructor();
    // methods
    // properties
    doesAnimateColor: boolean;
    worldRotationAxis: UnityEngine.Vector3;
    localRotationAxis: UnityEngine.Vector3;
    sizeGrow: number;
    rndForce: UnityEngine.Vector3;
    force: UnityEngine.Vector3;
    damping: number;
    autodestruct: boolean;
    colorAnimation: UnityEngine.Color[];
    // fields
  }
}
declare namespace UnityEngine {
  class ParticleCollisionEvent extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    readonly intersection: UnityEngine.Vector3;
    readonly normal: UnityEngine.Vector3;
    readonly velocity: UnityEngine.Vector3;
    readonly collider: UnityEngine.Collider;
    readonly colliderComponent: UnityEngine.Component;
    // fields
  }
}
declare namespace UnityEngine {
  class ParticleEmitter extends UnityEngine.Component {
    // constructors
    protected constructor();
    // methods
    ClearParticles(): void;
    Emit(): void;
    Emit(count: number): void;
    Emit(pos: UnityEngine.Vector3, velocity: UnityEngine.Vector3, size: number, energy: number, color: UnityEngine.Color): void;
    Emit(pos: UnityEngine.Vector3, velocity: UnityEngine.Vector3, size: number, energy: number, color: UnityEngine.Color, rotation: number, angularVelocity: number): void;
    Simulate(deltaTime: number): void;
    // properties
    emit: boolean;
    minSize: number;
    maxSize: number;
    minEnergy: number;
    maxEnergy: number;
    minEmission: number;
    maxEmission: number;
    emitterVelocityScale: number;
    worldVelocity: UnityEngine.Vector3;
    localVelocity: UnityEngine.Vector3;
    rndVelocity: UnityEngine.Vector3;
    useWorldSpace: boolean;
    rndRotation: boolean;
    angularVelocity: number;
    rndAngularVelocity: number;
    particles: UnityEngine.Particle[];
    readonly particleCount: number;
    enabled: boolean;
    // fields
  }
}
declare namespace UnityEngine {
  class ParticlePhysicsExtensions extends System.Object {
    // constructors
    protected constructor();
    // methods
    static GetSafeCollisionEventSize(ps: UnityEngine.ParticleSystem): number;
    static GetCollisionEvents(ps: UnityEngine.ParticleSystem, go: UnityEngine.GameObject, collisionEvents: UnityEngine.ParticleCollisionEvent[]): number;
    static GetCollisionEvents(ps: UnityEngine.ParticleSystem, go: UnityEngine.GameObject, collisionEvents: UnityEngine.ParticleCollisionEvent[]): number;
    static GetSafeTriggerParticlesSize(ps: UnityEngine.ParticleSystem, type: UnityEngine.ParticleSystemTriggerEventType): number;
    static GetTriggerParticles(ps: UnityEngine.ParticleSystem, type: UnityEngine.ParticleSystemTriggerEventType, particles: UnityEngine.ParticleSystem.Particle[]): number;
    static SetTriggerParticles(ps: UnityEngine.ParticleSystem, type: UnityEngine.ParticleSystemTriggerEventType, particles: UnityEngine.ParticleSystem.Particle[], offset: number, count: number): void;
    static SetTriggerParticles(ps: UnityEngine.ParticleSystem, type: UnityEngine.ParticleSystemTriggerEventType, particles: UnityEngine.ParticleSystem.Particle[]): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class ParticleRenderer extends UnityEngine.Renderer {
    // constructors
    constructor();
    // methods
    // properties
    particleRenderMode: UnityEngine.ParticleRenderMode;
    lengthScale: number;
    velocityScale: number;
    cameraVelocityScale: number;
    maxParticleSize: number;
    uvAnimationXTile: number;
    uvAnimationYTile: number;
    uvAnimationCycles: number;
    animatedTextureCount: number;
    maxPartileSize: number;
    uvTiles: UnityEngine.Rect[];
    widthCurve: UnityEngine.AnimationCurve;
    heightCurve: UnityEngine.AnimationCurve;
    rotationCurve: UnityEngine.AnimationCurve;
    // fields
  }
}
declare namespace UnityEngine {
  class ParticleRenderMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Billboard: UnityEngine.ParticleRenderMode;
    static Stretch: UnityEngine.ParticleRenderMode;
    static SortedBillboard: UnityEngine.ParticleRenderMode;
    static HorizontalBillboard: UnityEngine.ParticleRenderMode;
    static VerticalBillboard: UnityEngine.ParticleRenderMode;
  }
}
declare namespace UnityEngine.ParticleSystem {
  class Burst extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    time: number;
    minCount: number;
    maxCount: number;
    // fields
  }
}
declare namespace UnityEngine.ParticleSystem {
  class CollisionEvent extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    readonly intersection: UnityEngine.Vector3;
    readonly normal: UnityEngine.Vector3;
    readonly velocity: UnityEngine.Vector3;
    readonly collider: UnityEngine.Collider;
    // fields
  }
}
declare namespace UnityEngine.ParticleSystem {
  class CollisionModule extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    SetPlane(index: number, transform: UnityEngine.Transform): void;
    GetPlane(index: number): UnityEngine.Transform;
    // properties
    enabled: boolean;
    type: UnityEngine.ParticleSystemCollisionType;
    mode: UnityEngine.ParticleSystemCollisionMode;
    dampen: UnityEngine.ParticleSystem.MinMaxCurve;
    dampenMultiplier: number;
    bounce: UnityEngine.ParticleSystem.MinMaxCurve;
    bounceMultiplier: number;
    lifetimeLoss: UnityEngine.ParticleSystem.MinMaxCurve;
    lifetimeLossMultiplier: number;
    minKillSpeed: number;
    maxKillSpeed: number;
    collidesWith: UnityEngine.LayerMask;
    enableDynamicColliders: boolean;
    enableInteriorCollisions: boolean;
    maxCollisionShapes: number;
    quality: UnityEngine.ParticleSystemCollisionQuality;
    voxelSize: number;
    radiusScale: number;
    sendCollisionMessages: boolean;
    readonly maxPlaneCount: number;
    // fields
  }
}
declare namespace UnityEngine.ParticleSystem {
  class ColorBySpeedModule extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    enabled: boolean;
    color: UnityEngine.ParticleSystem.MinMaxGradient;
    range: UnityEngine.Vector2;
    // fields
  }
}
declare namespace UnityEngine.ParticleSystem {
  class ColorOverLifetimeModule extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    enabled: boolean;
    color: UnityEngine.ParticleSystem.MinMaxGradient;
    // fields
  }
}
declare namespace UnityEngine {
  class ParticleSystem extends UnityEngine.Component {
    // constructors
    constructor();
    // methods
    SetParticles(particles: UnityEngine.ParticleSystem.Particle[], size: number): void;
    GetParticles(particles: UnityEngine.ParticleSystem.Particle[]): number;
    SetCustomParticleData(customData: UnityEngine.Vector4[], streamIndex: UnityEngine.ParticleSystemCustomData): void;
    GetCustomParticleData(customData: UnityEngine.Vector4[], streamIndex: UnityEngine.ParticleSystemCustomData): number;
    Simulate(t: number, withChildren: boolean, restart: boolean): void;
    Simulate(t: number, withChildren: boolean): void;
    Simulate(t: number): void;
    Simulate(t: number, withChildren: boolean, restart: boolean, fixedTimeStep: boolean): void;
    Play(): void;
    Play(withChildren: boolean): void;
    Stop(withChildren: boolean): void;
    Stop(): void;
    Stop(withChildren: boolean, stopBehavior: UnityEngine.ParticleSystemStopBehavior): void;
    Pause(): void;
    Pause(withChildren: boolean): void;
    Clear(): void;
    Clear(withChildren: boolean): void;
    IsAlive(): boolean;
    IsAlive(withChildren: boolean): boolean;
    Emit(count: number): void;
    Emit(position: UnityEngine.Vector3, velocity: UnityEngine.Vector3, size: number, lifetime: number, color: UnityEngine.Color32): void;
    Emit(particle: UnityEngine.ParticleSystem.Particle): void;
    Emit(emitParams: UnityEngine.ParticleSystem.EmitParams, count: number): void;
    // properties
    startDelay: number;
    readonly isPlaying: boolean;
    readonly isEmitting: boolean;
    readonly isStopped: boolean;
    readonly isPaused: boolean;
    loop: boolean;
    playOnAwake: boolean;
    time: number;
    readonly duration: number;
    playbackSpeed: number;
    readonly particleCount: number;
    enableEmission: boolean;
    emissionRate: number;
    startSpeed: number;
    startSize: number;
    startColor: UnityEngine.Color;
    startRotation: number;
    startRotation3D: UnityEngine.Vector3;
    startLifetime: number;
    gravityModifier: number;
    maxParticles: number;
    simulationSpace: UnityEngine.ParticleSystemSimulationSpace;
    scalingMode: UnityEngine.ParticleSystemScalingMode;
    randomSeed: number;
    useAutoRandomSeed: boolean;
    readonly main: UnityEngine.ParticleSystem.MainModule;
    readonly emission: UnityEngine.ParticleSystem.EmissionModule;
    readonly shape: UnityEngine.ParticleSystem.ShapeModule;
    readonly velocityOverLifetime: UnityEngine.ParticleSystem.VelocityOverLifetimeModule;
    readonly limitVelocityOverLifetime: UnityEngine.ParticleSystem.LimitVelocityOverLifetimeModule;
    readonly inheritVelocity: UnityEngine.ParticleSystem.InheritVelocityModule;
    readonly forceOverLifetime: UnityEngine.ParticleSystem.ForceOverLifetimeModule;
    readonly colorOverLifetime: UnityEngine.ParticleSystem.ColorOverLifetimeModule;
    readonly colorBySpeed: UnityEngine.ParticleSystem.ColorBySpeedModule;
    readonly sizeOverLifetime: UnityEngine.ParticleSystem.SizeOverLifetimeModule;
    readonly sizeBySpeed: UnityEngine.ParticleSystem.SizeBySpeedModule;
    readonly rotationOverLifetime: UnityEngine.ParticleSystem.RotationOverLifetimeModule;
    readonly rotationBySpeed: UnityEngine.ParticleSystem.RotationBySpeedModule;
    readonly externalForces: UnityEngine.ParticleSystem.ExternalForcesModule;
    readonly noise: UnityEngine.ParticleSystem.NoiseModule;
    readonly collision: UnityEngine.ParticleSystem.CollisionModule;
    readonly trigger: UnityEngine.ParticleSystem.TriggerModule;
    readonly subEmitters: UnityEngine.ParticleSystem.SubEmittersModule;
    readonly textureSheetAnimation: UnityEngine.ParticleSystem.TextureSheetAnimationModule;
    readonly lights: UnityEngine.ParticleSystem.LightsModule;
    readonly trails: UnityEngine.ParticleSystem.TrailModule;
    readonly safeCollisionEventSize: number;
    // fields
  }
}
declare namespace UnityEngine.ParticleSystem {
  class EmissionModule extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    SetBursts(bursts: UnityEngine.ParticleSystem.Burst[]): void;
    SetBursts(bursts: UnityEngine.ParticleSystem.Burst[], size: number): void;
    GetBursts(bursts: UnityEngine.ParticleSystem.Burst[]): number;
    // properties
    enabled: boolean;
    rateOverTime: UnityEngine.ParticleSystem.MinMaxCurve;
    rateOverTimeMultiplier: number;
    rateOverDistance: UnityEngine.ParticleSystem.MinMaxCurve;
    rateOverDistanceMultiplier: number;
    readonly burstCount: number;
    type: UnityEngine.ParticleSystemEmissionType;
    rate: UnityEngine.ParticleSystem.MinMaxCurve;
    rateMultiplier: number;
    // fields
  }
}
declare namespace UnityEngine.ParticleSystem {
  class EmitParams extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    ResetPosition(): void;
    ResetVelocity(): void;
    ResetAxisOfRotation(): void;
    ResetRotation(): void;
    ResetAngularVelocity(): void;
    ResetStartSize(): void;
    ResetStartColor(): void;
    ResetRandomSeed(): void;
    ResetStartLifetime(): void;
    // properties
    position: UnityEngine.Vector3;
    applyShapeToPosition: boolean;
    velocity: UnityEngine.Vector3;
    startLifetime: number;
    startSize: number;
    startSize3D: UnityEngine.Vector3;
    axisOfRotation: UnityEngine.Vector3;
    rotation: number;
    rotation3D: UnityEngine.Vector3;
    angularVelocity: number;
    angularVelocity3D: UnityEngine.Vector3;
    startColor: UnityEngine.Color32;
    randomSeed: number;
    // fields
  }
}
declare namespace UnityEngine.ParticleSystem {
  class ExternalForcesModule extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    enabled: boolean;
    multiplier: number;
    // fields
  }
}
declare namespace UnityEngine.ParticleSystem {
  class ForceOverLifetimeModule extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    enabled: boolean;
    x: UnityEngine.ParticleSystem.MinMaxCurve;
    y: UnityEngine.ParticleSystem.MinMaxCurve;
    z: UnityEngine.ParticleSystem.MinMaxCurve;
    xMultiplier: number;
    yMultiplier: number;
    zMultiplier: number;
    space: UnityEngine.ParticleSystemSimulationSpace;
    randomized: boolean;
    // fields
  }
}
declare namespace UnityEngine.ParticleSystem {
  class InheritVelocityModule extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    enabled: boolean;
    mode: UnityEngine.ParticleSystemInheritVelocityMode;
    curve: UnityEngine.ParticleSystem.MinMaxCurve;
    curveMultiplier: number;
    // fields
  }
}
declare namespace UnityEngine.ParticleSystem {
  class LightsModule extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    enabled: boolean;
    ratio: number;
    useRandomDistribution: boolean;
    light: UnityEngine.Light;
    useParticleColor: boolean;
    sizeAffectsRange: boolean;
    alphaAffectsIntensity: boolean;
    range: UnityEngine.ParticleSystem.MinMaxCurve;
    rangeMultiplier: number;
    intensity: UnityEngine.ParticleSystem.MinMaxCurve;
    intensityMultiplier: number;
    maxLights: number;
    // fields
  }
}
declare namespace UnityEngine.ParticleSystem {
  class LimitVelocityOverLifetimeModule extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    enabled: boolean;
    limitX: UnityEngine.ParticleSystem.MinMaxCurve;
    limitXMultiplier: number;
    limitY: UnityEngine.ParticleSystem.MinMaxCurve;
    limitYMultiplier: number;
    limitZ: UnityEngine.ParticleSystem.MinMaxCurve;
    limitZMultiplier: number;
    limit: UnityEngine.ParticleSystem.MinMaxCurve;
    limitMultiplier: number;
    dampen: number;
    separateAxes: boolean;
    space: UnityEngine.ParticleSystemSimulationSpace;
    // fields
  }
}
declare namespace UnityEngine.ParticleSystem {
  class MainModule extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    duration: number;
    loop: boolean;
    prewarm: boolean;
    startDelay: UnityEngine.ParticleSystem.MinMaxCurve;
    startDelayMultiplier: number;
    startLifetime: UnityEngine.ParticleSystem.MinMaxCurve;
    startLifetimeMultiplier: number;
    startSpeed: UnityEngine.ParticleSystem.MinMaxCurve;
    startSpeedMultiplier: number;
    startSize3D: boolean;
    startSize: UnityEngine.ParticleSystem.MinMaxCurve;
    startSizeMultiplier: number;
    startSizeX: UnityEngine.ParticleSystem.MinMaxCurve;
    startSizeXMultiplier: number;
    startSizeY: UnityEngine.ParticleSystem.MinMaxCurve;
    startSizeYMultiplier: number;
    startSizeZ: UnityEngine.ParticleSystem.MinMaxCurve;
    startSizeZMultiplier: number;
    startRotation3D: boolean;
    startRotation: UnityEngine.ParticleSystem.MinMaxCurve;
    startRotationMultiplier: number;
    startRotationX: UnityEngine.ParticleSystem.MinMaxCurve;
    startRotationXMultiplier: number;
    startRotationY: UnityEngine.ParticleSystem.MinMaxCurve;
    startRotationYMultiplier: number;
    startRotationZ: UnityEngine.ParticleSystem.MinMaxCurve;
    startRotationZMultiplier: number;
    randomizeRotationDirection: number;
    startColor: UnityEngine.ParticleSystem.MinMaxGradient;
    gravityModifier: UnityEngine.ParticleSystem.MinMaxCurve;
    gravityModifierMultiplier: number;
    simulationSpace: UnityEngine.ParticleSystemSimulationSpace;
    customSimulationSpace: UnityEngine.Transform;
    simulationSpeed: number;
    scalingMode: UnityEngine.ParticleSystemScalingMode;
    playOnAwake: boolean;
    maxParticles: number;
    // fields
  }
}
declare namespace UnityEngine.ParticleSystem {
  class MinMaxCurve extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    Evaluate(time: number): number;
    Evaluate(time: number, lerpFactor: number): number;
    // properties
    mode: UnityEngine.ParticleSystemCurveMode;
    curveScalar: number;
    curveMultiplier: number;
    curveMax: UnityEngine.AnimationCurve;
    curveMin: UnityEngine.AnimationCurve;
    constantMax: number;
    constantMin: number;
    constant: number;
    curve: UnityEngine.AnimationCurve;
    // fields
  }
}
declare namespace UnityEngine.ParticleSystem {
  class MinMaxGradient extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    Evaluate(time: number): UnityEngine.Color;
    Evaluate(time: number, lerpFactor: number): UnityEngine.Color;
    // properties
    mode: UnityEngine.ParticleSystemGradientMode;
    gradientMax: UnityEngine.Gradient;
    gradientMin: UnityEngine.Gradient;
    colorMax: UnityEngine.Color;
    colorMin: UnityEngine.Color;
    color: UnityEngine.Color;
    gradient: UnityEngine.Gradient;
    // fields
  }
}
declare namespace UnityEngine.ParticleSystem {
  class NoiseModule extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    enabled: boolean;
    separateAxes: boolean;
    strength: UnityEngine.ParticleSystem.MinMaxCurve;
    strengthMultiplier: number;
    strengthX: UnityEngine.ParticleSystem.MinMaxCurve;
    strengthXMultiplier: number;
    strengthY: UnityEngine.ParticleSystem.MinMaxCurve;
    strengthYMultiplier: number;
    strengthZ: UnityEngine.ParticleSystem.MinMaxCurve;
    strengthZMultiplier: number;
    frequency: number;
    damping: boolean;
    octaveCount: number;
    octaveMultiplier: number;
    octaveScale: number;
    quality: UnityEngine.ParticleSystemNoiseQuality;
    scrollSpeed: UnityEngine.ParticleSystem.MinMaxCurve;
    scrollSpeedMultiplier: number;
    remapEnabled: boolean;
    remap: UnityEngine.ParticleSystem.MinMaxCurve;
    remapMultiplier: number;
    remapX: UnityEngine.ParticleSystem.MinMaxCurve;
    remapXMultiplier: number;
    remapY: UnityEngine.ParticleSystem.MinMaxCurve;
    remapYMultiplier: number;
    remapZ: UnityEngine.ParticleSystem.MinMaxCurve;
    remapZMultiplier: number;
    // fields
  }
}
declare namespace UnityEngine.ParticleSystem {
  class Particle extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    GetCurrentSize(system: UnityEngine.ParticleSystem): number;
    GetCurrentSize3D(system: UnityEngine.ParticleSystem): UnityEngine.Vector3;
    GetCurrentColor(system: UnityEngine.ParticleSystem): UnityEngine.Color32;
    // properties
    position: UnityEngine.Vector3;
    velocity: UnityEngine.Vector3;
    lifetime: number;
    remainingLifetime: number;
    startLifetime: number;
    startSize: number;
    startSize3D: UnityEngine.Vector3;
    axisOfRotation: UnityEngine.Vector3;
    rotation: number;
    rotation3D: UnityEngine.Vector3;
    angularVelocity: number;
    angularVelocity3D: UnityEngine.Vector3;
    startColor: UnityEngine.Color32;
    randomValue: number;
    randomSeed: number;
    size: number;
    color: UnityEngine.Color32;
    // fields
  }
}
declare namespace UnityEngine.ParticleSystem {
  class RotationBySpeedModule extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    enabled: boolean;
    x: UnityEngine.ParticleSystem.MinMaxCurve;
    xMultiplier: number;
    y: UnityEngine.ParticleSystem.MinMaxCurve;
    yMultiplier: number;
    z: UnityEngine.ParticleSystem.MinMaxCurve;
    zMultiplier: number;
    separateAxes: boolean;
    range: UnityEngine.Vector2;
    // fields
  }
}
declare namespace UnityEngine.ParticleSystem {
  class RotationOverLifetimeModule extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    enabled: boolean;
    x: UnityEngine.ParticleSystem.MinMaxCurve;
    xMultiplier: number;
    y: UnityEngine.ParticleSystem.MinMaxCurve;
    yMultiplier: number;
    z: UnityEngine.ParticleSystem.MinMaxCurve;
    zMultiplier: number;
    separateAxes: boolean;
    // fields
  }
}
declare namespace UnityEngine.ParticleSystem {
  class ShapeModule extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    enabled: boolean;
    shapeType: UnityEngine.ParticleSystemShapeType;
    randomDirectionAmount: number;
    sphericalDirectionAmount: number;
    alignToDirection: boolean;
    radius: number;
    angle: number;
    length: number;
    box: UnityEngine.Vector3;
    meshShapeType: UnityEngine.ParticleSystemMeshShapeType;
    mesh: UnityEngine.Mesh;
    meshRenderer: UnityEngine.MeshRenderer;
    skinnedMeshRenderer: UnityEngine.SkinnedMeshRenderer;
    useMeshMaterialIndex: boolean;
    meshMaterialIndex: number;
    useMeshColors: boolean;
    normalOffset: number;
    meshScale: number;
    arc: number;
    randomDirection: boolean;
    // fields
  }
}
declare namespace UnityEngine.ParticleSystem {
  class SizeBySpeedModule extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    enabled: boolean;
    size: UnityEngine.ParticleSystem.MinMaxCurve;
    sizeMultiplier: number;
    x: UnityEngine.ParticleSystem.MinMaxCurve;
    xMultiplier: number;
    y: UnityEngine.ParticleSystem.MinMaxCurve;
    yMultiplier: number;
    z: UnityEngine.ParticleSystem.MinMaxCurve;
    zMultiplier: number;
    separateAxes: boolean;
    range: UnityEngine.Vector2;
    // fields
  }
}
declare namespace UnityEngine.ParticleSystem {
  class SizeOverLifetimeModule extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    enabled: boolean;
    size: UnityEngine.ParticleSystem.MinMaxCurve;
    sizeMultiplier: number;
    x: UnityEngine.ParticleSystem.MinMaxCurve;
    xMultiplier: number;
    y: UnityEngine.ParticleSystem.MinMaxCurve;
    yMultiplier: number;
    z: UnityEngine.ParticleSystem.MinMaxCurve;
    zMultiplier: number;
    separateAxes: boolean;
    // fields
  }
}
declare namespace UnityEngine.ParticleSystem {
  class SubEmittersModule extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    AddSubEmitter(subEmitter: UnityEngine.ParticleSystem, type: UnityEngine.ParticleSystemSubEmitterType, properties: UnityEngine.ParticleSystemSubEmitterProperties): void;
    RemoveSubEmitter(index: number): void;
    SetSubEmitterSystem(index: number, subEmitter: UnityEngine.ParticleSystem): void;
    SetSubEmitterType(index: number, type: UnityEngine.ParticleSystemSubEmitterType): void;
    SetSubEmitterProperties(index: number, properties: UnityEngine.ParticleSystemSubEmitterProperties): void;
    GetSubEmitterSystem(index: number): UnityEngine.ParticleSystem;
    GetSubEmitterType(index: number): UnityEngine.ParticleSystemSubEmitterType;
    GetSubEmitterProperties(index: number): UnityEngine.ParticleSystemSubEmitterProperties;
    // properties
    enabled: boolean;
    readonly subEmittersCount: number;
    birth0: UnityEngine.ParticleSystem;
    birth1: UnityEngine.ParticleSystem;
    collision0: UnityEngine.ParticleSystem;
    collision1: UnityEngine.ParticleSystem;
    death0: UnityEngine.ParticleSystem;
    death1: UnityEngine.ParticleSystem;
    // fields
  }
}
declare namespace UnityEngine.ParticleSystem {
  class TextureSheetAnimationModule extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    enabled: boolean;
    numTilesX: number;
    numTilesY: number;
    animation: UnityEngine.ParticleSystemAnimationType;
    useRandomRow: boolean;
    frameOverTime: UnityEngine.ParticleSystem.MinMaxCurve;
    frameOverTimeMultiplier: number;
    startFrame: UnityEngine.ParticleSystem.MinMaxCurve;
    startFrameMultiplier: number;
    cycleCount: number;
    rowIndex: number;
    uvChannelMask: UnityEngine.Rendering.UVChannelFlags;
    flipU: number;
    flipV: number;
    // fields
  }
}
declare namespace UnityEngine.ParticleSystem {
  class TrailModule extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    enabled: boolean;
    ratio: number;
    lifetime: UnityEngine.ParticleSystem.MinMaxCurve;
    lifetimeMultiplier: number;
    minVertexDistance: number;
    textureMode: UnityEngine.ParticleSystemTrailTextureMode;
    worldSpace: boolean;
    dieWithParticles: boolean;
    sizeAffectsWidth: boolean;
    sizeAffectsLifetime: boolean;
    inheritParticleColor: boolean;
    colorOverLifetime: UnityEngine.ParticleSystem.MinMaxGradient;
    widthOverTrail: UnityEngine.ParticleSystem.MinMaxCurve;
    widthOverTrailMultiplier: number;
    colorOverTrail: UnityEngine.ParticleSystem.MinMaxGradient;
    // fields
  }
}
declare namespace UnityEngine.ParticleSystem {
  class TriggerModule extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    SetCollider(index: number, collider: UnityEngine.Component): void;
    GetCollider(index: number): UnityEngine.Component;
    // properties
    enabled: boolean;
    inside: UnityEngine.ParticleSystemOverlapAction;
    outside: UnityEngine.ParticleSystemOverlapAction;
    enter: UnityEngine.ParticleSystemOverlapAction;
    exit: UnityEngine.ParticleSystemOverlapAction;
    radiusScale: number;
    readonly maxColliderCount: number;
    // fields
  }
}
declare namespace UnityEngine.ParticleSystem {
  class VelocityOverLifetimeModule extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    enabled: boolean;
    x: UnityEngine.ParticleSystem.MinMaxCurve;
    y: UnityEngine.ParticleSystem.MinMaxCurve;
    z: UnityEngine.ParticleSystem.MinMaxCurve;
    xMultiplier: number;
    yMultiplier: number;
    zMultiplier: number;
    space: UnityEngine.ParticleSystemSimulationSpace;
    // fields
  }
}
declare namespace UnityEngine {
  class ParticleSystemAnimationType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static WholeSheet: UnityEngine.ParticleSystemAnimationType;
    static SingleRow: UnityEngine.ParticleSystemAnimationType;
  }
}
declare namespace UnityEngine {
  class ParticleSystemCollisionMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Collision3D: UnityEngine.ParticleSystemCollisionMode;
    static Collision2D: UnityEngine.ParticleSystemCollisionMode;
  }
}
declare namespace UnityEngine {
  class ParticleSystemCollisionQuality extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static High: UnityEngine.ParticleSystemCollisionQuality;
    static Medium: UnityEngine.ParticleSystemCollisionQuality;
    static Low: UnityEngine.ParticleSystemCollisionQuality;
  }
}
declare namespace UnityEngine {
  class ParticleSystemCollisionType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Planes: UnityEngine.ParticleSystemCollisionType;
    static World: UnityEngine.ParticleSystemCollisionType;
  }
}
declare namespace UnityEngine {
  class ParticleSystemCurveMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Constant: UnityEngine.ParticleSystemCurveMode;
    static Curve: UnityEngine.ParticleSystemCurveMode;
    static TwoCurves: UnityEngine.ParticleSystemCurveMode;
    static TwoConstants: UnityEngine.ParticleSystemCurveMode;
  }
}
declare namespace UnityEngine {
  class ParticleSystemCustomData extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Custom1: UnityEngine.ParticleSystemCustomData;
    static Custom2: UnityEngine.ParticleSystemCustomData;
  }
}
declare namespace UnityEngine {
  class ParticleSystemEmissionType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Time: UnityEngine.ParticleSystemEmissionType;
    static Distance: UnityEngine.ParticleSystemEmissionType;
  }
}
declare namespace UnityEngine {
  class ParticleSystemExtensionsImpl extends System.Object {
    // constructors
    constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class ParticleSystemGradientMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Color: UnityEngine.ParticleSystemGradientMode;
    static Gradient: UnityEngine.ParticleSystemGradientMode;
    static TwoColors: UnityEngine.ParticleSystemGradientMode;
    static TwoGradients: UnityEngine.ParticleSystemGradientMode;
    static RandomColor: UnityEngine.ParticleSystemGradientMode;
  }
}
declare namespace UnityEngine {
  class ParticleSystemInheritVelocityMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Initial: UnityEngine.ParticleSystemInheritVelocityMode;
    static Current: UnityEngine.ParticleSystemInheritVelocityMode;
  }
}
declare namespace UnityEngine {
  class ParticleSystemMeshShapeType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Vertex: UnityEngine.ParticleSystemMeshShapeType;
    static Edge: UnityEngine.ParticleSystemMeshShapeType;
    static Triangle: UnityEngine.ParticleSystemMeshShapeType;
  }
}
declare namespace UnityEngine {
  class ParticleSystemNoiseQuality extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Low: UnityEngine.ParticleSystemNoiseQuality;
    static Medium: UnityEngine.ParticleSystemNoiseQuality;
    static High: UnityEngine.ParticleSystemNoiseQuality;
  }
}
declare namespace UnityEngine {
  class ParticleSystemOverlapAction extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Ignore: UnityEngine.ParticleSystemOverlapAction;
    static Kill: UnityEngine.ParticleSystemOverlapAction;
    static Callback: UnityEngine.ParticleSystemOverlapAction;
  }
}
declare namespace UnityEngine {
  class ParticleSystemRenderer extends UnityEngine.Renderer {
    // constructors
    constructor();
    // methods
    GetMeshes(meshes: UnityEngine.Mesh[]): number;
    SetMeshes(meshes: UnityEngine.Mesh[]): void;
    SetMeshes(meshes: UnityEngine.Mesh[], size: number): void;
    EnableVertexStreams(streams: UnityEngine.ParticleSystemVertexStreams): void;
    DisableVertexStreams(streams: UnityEngine.ParticleSystemVertexStreams): void;
    AreVertexStreamsEnabled(streams: UnityEngine.ParticleSystemVertexStreams): boolean;
    GetEnabledVertexStreams(streams: UnityEngine.ParticleSystemVertexStreams): UnityEngine.ParticleSystemVertexStreams;
    // properties
    renderMode: UnityEngine.ParticleSystemRenderMode;
    lengthScale: number;
    velocityScale: number;
    cameraVelocityScale: number;
    normalDirection: number;
    alignment: UnityEngine.ParticleSystemRenderSpace;
    pivot: UnityEngine.Vector3;
    sortMode: UnityEngine.ParticleSystemSortMode;
    sortingFudge: number;
    minParticleSize: number;
    maxParticleSize: number;
    mesh: UnityEngine.Mesh;
    readonly meshCount: number;
    trailMaterial: UnityEngine.Material;
    // fields
  }
}
declare namespace UnityEngine {
  class ParticleSystemRenderMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Billboard: UnityEngine.ParticleSystemRenderMode;
    static Stretch: UnityEngine.ParticleSystemRenderMode;
    static HorizontalBillboard: UnityEngine.ParticleSystemRenderMode;
    static VerticalBillboard: UnityEngine.ParticleSystemRenderMode;
    static Mesh: UnityEngine.ParticleSystemRenderMode;
    static None: UnityEngine.ParticleSystemRenderMode;
  }
}
declare namespace UnityEngine {
  class ParticleSystemRenderSpace extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static View: UnityEngine.ParticleSystemRenderSpace;
    static World: UnityEngine.ParticleSystemRenderSpace;
    static Local: UnityEngine.ParticleSystemRenderSpace;
    static Facing: UnityEngine.ParticleSystemRenderSpace;
  }
}
declare namespace UnityEngine {
  class ParticleSystemScalingMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Hierarchy: UnityEngine.ParticleSystemScalingMode;
    static Local: UnityEngine.ParticleSystemScalingMode;
    static Shape: UnityEngine.ParticleSystemScalingMode;
  }
}
declare namespace UnityEngine {
  class ParticleSystemShapeType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Sphere: UnityEngine.ParticleSystemShapeType;
    static SphereShell: UnityEngine.ParticleSystemShapeType;
    static Hemisphere: UnityEngine.ParticleSystemShapeType;
    static HemisphereShell: UnityEngine.ParticleSystemShapeType;
    static Cone: UnityEngine.ParticleSystemShapeType;
    static Box: UnityEngine.ParticleSystemShapeType;
    static Mesh: UnityEngine.ParticleSystemShapeType;
    static ConeShell: UnityEngine.ParticleSystemShapeType;
    static ConeVolume: UnityEngine.ParticleSystemShapeType;
    static ConeVolumeShell: UnityEngine.ParticleSystemShapeType;
    static Circle: UnityEngine.ParticleSystemShapeType;
    static CircleEdge: UnityEngine.ParticleSystemShapeType;
    static SingleSidedEdge: UnityEngine.ParticleSystemShapeType;
    static MeshRenderer: UnityEngine.ParticleSystemShapeType;
    static SkinnedMeshRenderer: UnityEngine.ParticleSystemShapeType;
    static BoxShell: UnityEngine.ParticleSystemShapeType;
    static BoxEdge: UnityEngine.ParticleSystemShapeType;
  }
}
declare namespace UnityEngine {
  class ParticleSystemSimulationSpace extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Local: UnityEngine.ParticleSystemSimulationSpace;
    static World: UnityEngine.ParticleSystemSimulationSpace;
    static Custom: UnityEngine.ParticleSystemSimulationSpace;
  }
}
declare namespace UnityEngine {
  class ParticleSystemSortMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static None: UnityEngine.ParticleSystemSortMode;
    static Distance: UnityEngine.ParticleSystemSortMode;
    static OldestInFront: UnityEngine.ParticleSystemSortMode;
    static YoungestInFront: UnityEngine.ParticleSystemSortMode;
  }
}
declare namespace UnityEngine {
  class ParticleSystemStopBehavior extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static StopEmittingAndClear: UnityEngine.ParticleSystemStopBehavior;
    static StopEmitting: UnityEngine.ParticleSystemStopBehavior;
  }
}
declare namespace UnityEngine {
  class ParticleSystemSubEmitterProperties extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static InheritNothing: UnityEngine.ParticleSystemSubEmitterProperties;
    static InheritEverything: UnityEngine.ParticleSystemSubEmitterProperties;
    static InheritColor: UnityEngine.ParticleSystemSubEmitterProperties;
    static InheritSize: UnityEngine.ParticleSystemSubEmitterProperties;
    static InheritRotation: UnityEngine.ParticleSystemSubEmitterProperties;
  }
}
declare namespace UnityEngine {
  class ParticleSystemSubEmitterType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Birth: UnityEngine.ParticleSystemSubEmitterType;
    static Collision: UnityEngine.ParticleSystemSubEmitterType;
    static Death: UnityEngine.ParticleSystemSubEmitterType;
  }
}
declare namespace UnityEngine {
  class ParticleSystemTrailTextureMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Stretch: UnityEngine.ParticleSystemTrailTextureMode;
    static Tile: UnityEngine.ParticleSystemTrailTextureMode;
  }
}
declare namespace UnityEngine {
  class ParticleSystemTriggerEventType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Inside: UnityEngine.ParticleSystemTriggerEventType;
    static Outside: UnityEngine.ParticleSystemTriggerEventType;
    static Enter: UnityEngine.ParticleSystemTriggerEventType;
    static Exit: UnityEngine.ParticleSystemTriggerEventType;
  }
}
declare namespace UnityEngine {
  class ParticleSystemVertexStreams extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Position: UnityEngine.ParticleSystemVertexStreams;
    static Normal: UnityEngine.ParticleSystemVertexStreams;
    static Tangent: UnityEngine.ParticleSystemVertexStreams;
    static Color: UnityEngine.ParticleSystemVertexStreams;
    static UV: UnityEngine.ParticleSystemVertexStreams;
    static UV2BlendAndFrame: UnityEngine.ParticleSystemVertexStreams;
    static CenterAndVertexID: UnityEngine.ParticleSystemVertexStreams;
    static Size: UnityEngine.ParticleSystemVertexStreams;
    static Rotation: UnityEngine.ParticleSystemVertexStreams;
    static Velocity: UnityEngine.ParticleSystemVertexStreams;
    static Lifetime: UnityEngine.ParticleSystemVertexStreams;
    static Custom1: UnityEngine.ParticleSystemVertexStreams;
    static Custom2: UnityEngine.ParticleSystemVertexStreams;
    static Random: UnityEngine.ParticleSystemVertexStreams;
    static None: UnityEngine.ParticleSystemVertexStreams;
    static All: UnityEngine.ParticleSystemVertexStreams;
  }
}
declare namespace UnityEngine {
  class PhysicMaterial extends UnityEngine.Object {
    // constructors
    constructor();
    constructor(name: string);
    // methods
    // properties
    dynamicFriction: number;
    staticFriction: number;
    bounciness: number;
    bouncyness: number;
    frictionDirection2: UnityEngine.Vector3;
    dynamicFriction2: number;
    staticFriction2: number;
    frictionCombine: UnityEngine.PhysicMaterialCombine;
    bounceCombine: UnityEngine.PhysicMaterialCombine;
    frictionDirection: UnityEngine.Vector3;
    // fields
  }
}
declare namespace UnityEngine {
  class PhysicMaterialCombine extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Average: UnityEngine.PhysicMaterialCombine;
    static Minimum: UnityEngine.PhysicMaterialCombine;
    static Multiply: UnityEngine.PhysicMaterialCombine;
    static Maximum: UnityEngine.PhysicMaterialCombine;
  }
}
declare namespace UnityEngine {
  class Physics extends System.Object {
    // constructors
    constructor();
    // methods
    static Raycast(origin: UnityEngine.Vector3, direction: UnityEngine.Vector3, maxDistance: number, layerMask: number): boolean;
    static Raycast(origin: UnityEngine.Vector3, direction: UnityEngine.Vector3, maxDistance: number): boolean;
    static Raycast(origin: UnityEngine.Vector3, direction: UnityEngine.Vector3): boolean;
    static Raycast(origin: UnityEngine.Vector3, direction: UnityEngine.Vector3, maxDistance: number, layerMask: number, queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): boolean;
    static Raycast(origin: UnityEngine.Vector3, direction: UnityEngine.Vector3, hitInfo: any, maxDistance: number, layerMask: number): boolean;
    static Raycast(origin: UnityEngine.Vector3, direction: UnityEngine.Vector3, hitInfo: any, maxDistance: number): boolean;
    static Raycast(origin: UnityEngine.Vector3, direction: UnityEngine.Vector3, hitInfo: any): boolean;
    static Raycast(origin: UnityEngine.Vector3, direction: UnityEngine.Vector3, hitInfo: any, maxDistance: number, layerMask: number, queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): boolean;
    static Raycast(ray: UnityEngine.Ray, maxDistance: number, layerMask: number): boolean;
    static Raycast(ray: UnityEngine.Ray, maxDistance: number): boolean;
    static Raycast(ray: UnityEngine.Ray): boolean;
    static Raycast(ray: UnityEngine.Ray, maxDistance: number, layerMask: number, queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): boolean;
    static Raycast(ray: UnityEngine.Ray, hitInfo: any, maxDistance: number, layerMask: number): boolean;
    static Raycast(ray: UnityEngine.Ray, hitInfo: any, maxDistance: number): boolean;
    static Raycast(ray: UnityEngine.Ray, hitInfo: any): boolean;
    static Raycast(ray: UnityEngine.Ray, hitInfo: any, maxDistance: number, layerMask: number, queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): boolean;
    static RaycastAll(ray: UnityEngine.Ray, maxDistance: number, layerMask: number): UnityEngine.RaycastHit[];
    static RaycastAll(ray: UnityEngine.Ray, maxDistance: number): UnityEngine.RaycastHit[];
    static RaycastAll(ray: UnityEngine.Ray): UnityEngine.RaycastHit[];
    static RaycastAll(ray: UnityEngine.Ray, maxDistance: number, layerMask: number, queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): UnityEngine.RaycastHit[];
    static RaycastAll(origin: UnityEngine.Vector3, direction: UnityEngine.Vector3, maxDistance: number, layermask: number, queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): UnityEngine.RaycastHit[];
    static RaycastAll(origin: UnityEngine.Vector3, direction: UnityEngine.Vector3, maxDistance: number, layermask: number): UnityEngine.RaycastHit[];
    static RaycastAll(origin: UnityEngine.Vector3, direction: UnityEngine.Vector3, maxDistance: number): UnityEngine.RaycastHit[];
    static RaycastAll(origin: UnityEngine.Vector3, direction: UnityEngine.Vector3): UnityEngine.RaycastHit[];
    static RaycastNonAlloc(ray: UnityEngine.Ray, results: UnityEngine.RaycastHit[], maxDistance: number, layerMask: number): number;
    static RaycastNonAlloc(ray: UnityEngine.Ray, results: UnityEngine.RaycastHit[], maxDistance: number): number;
    static RaycastNonAlloc(ray: UnityEngine.Ray, results: UnityEngine.RaycastHit[]): number;
    static RaycastNonAlloc(ray: UnityEngine.Ray, results: UnityEngine.RaycastHit[], maxDistance: number, layerMask: number, queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): number;
    static RaycastNonAlloc(origin: UnityEngine.Vector3, direction: UnityEngine.Vector3, results: UnityEngine.RaycastHit[], maxDistance: number, layermask: number, queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): number;
    static RaycastNonAlloc(origin: UnityEngine.Vector3, direction: UnityEngine.Vector3, results: UnityEngine.RaycastHit[], maxDistance: number, layermask: number): number;
    static RaycastNonAlloc(origin: UnityEngine.Vector3, direction: UnityEngine.Vector3, results: UnityEngine.RaycastHit[], maxDistance: number): number;
    static RaycastNonAlloc(origin: UnityEngine.Vector3, direction: UnityEngine.Vector3, results: UnityEngine.RaycastHit[]): number;
    static Linecast(start: UnityEngine.Vector3, end: UnityEngine.Vector3, layerMask: number): boolean;
    static Linecast(start: UnityEngine.Vector3, end: UnityEngine.Vector3): boolean;
    static Linecast(start: UnityEngine.Vector3, end: UnityEngine.Vector3, layerMask: number, queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): boolean;
    static Linecast(start: UnityEngine.Vector3, end: UnityEngine.Vector3, hitInfo: any, layerMask: number): boolean;
    static Linecast(start: UnityEngine.Vector3, end: UnityEngine.Vector3, hitInfo: any): boolean;
    static Linecast(start: UnityEngine.Vector3, end: UnityEngine.Vector3, hitInfo: any, layerMask: number, queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): boolean;
    static OverlapSphere(position: UnityEngine.Vector3, radius: number, layerMask: number, queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): UnityEngine.Collider[];
    static OverlapSphere(position: UnityEngine.Vector3, radius: number, layerMask: number): UnityEngine.Collider[];
    static OverlapSphere(position: UnityEngine.Vector3, radius: number): UnityEngine.Collider[];
    static OverlapSphereNonAlloc(position: UnityEngine.Vector3, radius: number, results: UnityEngine.Collider[], layerMask: number, queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): number;
    static OverlapSphereNonAlloc(position: UnityEngine.Vector3, radius: number, results: UnityEngine.Collider[], layerMask: number): number;
    static OverlapSphereNonAlloc(position: UnityEngine.Vector3, radius: number, results: UnityEngine.Collider[]): number;
    static OverlapCapsule(point0: UnityEngine.Vector3, point1: UnityEngine.Vector3, radius: number, layerMask: number, queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): UnityEngine.Collider[];
    static OverlapCapsule(point0: UnityEngine.Vector3, point1: UnityEngine.Vector3, radius: number, layerMask: number): UnityEngine.Collider[];
    static OverlapCapsule(point0: UnityEngine.Vector3, point1: UnityEngine.Vector3, radius: number): UnityEngine.Collider[];
    static OverlapCapsuleNonAlloc(point0: UnityEngine.Vector3, point1: UnityEngine.Vector3, radius: number, results: UnityEngine.Collider[], layerMask: number, queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): number;
    static OverlapCapsuleNonAlloc(point0: UnityEngine.Vector3, point1: UnityEngine.Vector3, radius: number, results: UnityEngine.Collider[], layerMask: number): number;
    static OverlapCapsuleNonAlloc(point0: UnityEngine.Vector3, point1: UnityEngine.Vector3, radius: number, results: UnityEngine.Collider[]): number;
    static CapsuleCast(point1: UnityEngine.Vector3, point2: UnityEngine.Vector3, radius: number, direction: UnityEngine.Vector3, maxDistance: number, layerMask: number): boolean;
    static CapsuleCast(point1: UnityEngine.Vector3, point2: UnityEngine.Vector3, radius: number, direction: UnityEngine.Vector3, maxDistance: number): boolean;
    static CapsuleCast(point1: UnityEngine.Vector3, point2: UnityEngine.Vector3, radius: number, direction: UnityEngine.Vector3): boolean;
    static CapsuleCast(point1: UnityEngine.Vector3, point2: UnityEngine.Vector3, radius: number, direction: UnityEngine.Vector3, maxDistance: number, layerMask: number, queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): boolean;
    static CapsuleCast(point1: UnityEngine.Vector3, point2: UnityEngine.Vector3, radius: number, direction: UnityEngine.Vector3, hitInfo: any, maxDistance: number, layerMask: number): boolean;
    static CapsuleCast(point1: UnityEngine.Vector3, point2: UnityEngine.Vector3, radius: number, direction: UnityEngine.Vector3, hitInfo: any, maxDistance: number): boolean;
    static CapsuleCast(point1: UnityEngine.Vector3, point2: UnityEngine.Vector3, radius: number, direction: UnityEngine.Vector3, hitInfo: any): boolean;
    static CapsuleCast(point1: UnityEngine.Vector3, point2: UnityEngine.Vector3, radius: number, direction: UnityEngine.Vector3, hitInfo: any, maxDistance: number, layerMask: number, queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): boolean;
    static SphereCast(origin: UnityEngine.Vector3, radius: number, direction: UnityEngine.Vector3, hitInfo: any, maxDistance: number, layerMask: number): boolean;
    static SphereCast(origin: UnityEngine.Vector3, radius: number, direction: UnityEngine.Vector3, hitInfo: any, maxDistance: number): boolean;
    static SphereCast(origin: UnityEngine.Vector3, radius: number, direction: UnityEngine.Vector3, hitInfo: any): boolean;
    static SphereCast(origin: UnityEngine.Vector3, radius: number, direction: UnityEngine.Vector3, hitInfo: any, maxDistance: number, layerMask: number, queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): boolean;
    static SphereCast(ray: UnityEngine.Ray, radius: number, maxDistance: number, layerMask: number): boolean;
    static SphereCast(ray: UnityEngine.Ray, radius: number, maxDistance: number): boolean;
    static SphereCast(ray: UnityEngine.Ray, radius: number): boolean;
    static SphereCast(ray: UnityEngine.Ray, radius: number, maxDistance: number, layerMask: number, queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): boolean;
    static SphereCast(ray: UnityEngine.Ray, radius: number, hitInfo: any, maxDistance: number, layerMask: number): boolean;
    static SphereCast(ray: UnityEngine.Ray, radius: number, hitInfo: any, maxDistance: number): boolean;
    static SphereCast(ray: UnityEngine.Ray, radius: number, hitInfo: any): boolean;
    static SphereCast(ray: UnityEngine.Ray, radius: number, hitInfo: any, maxDistance: number, layerMask: number, queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): boolean;
    static CapsuleCastAll(point1: UnityEngine.Vector3, point2: UnityEngine.Vector3, radius: number, direction: UnityEngine.Vector3, maxDistance: number, layermask: number, queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): UnityEngine.RaycastHit[];
    static CapsuleCastAll(point1: UnityEngine.Vector3, point2: UnityEngine.Vector3, radius: number, direction: UnityEngine.Vector3, maxDistance: number, layermask: number): UnityEngine.RaycastHit[];
    static CapsuleCastAll(point1: UnityEngine.Vector3, point2: UnityEngine.Vector3, radius: number, direction: UnityEngine.Vector3, maxDistance: number): UnityEngine.RaycastHit[];
    static CapsuleCastAll(point1: UnityEngine.Vector3, point2: UnityEngine.Vector3, radius: number, direction: UnityEngine.Vector3): UnityEngine.RaycastHit[];
    static CapsuleCastNonAlloc(point1: UnityEngine.Vector3, point2: UnityEngine.Vector3, radius: number, direction: UnityEngine.Vector3, results: UnityEngine.RaycastHit[], maxDistance: number, layermask: number, queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): number;
    static CapsuleCastNonAlloc(point1: UnityEngine.Vector3, point2: UnityEngine.Vector3, radius: number, direction: UnityEngine.Vector3, results: UnityEngine.RaycastHit[], maxDistance: number, layermask: number): number;
    static CapsuleCastNonAlloc(point1: UnityEngine.Vector3, point2: UnityEngine.Vector3, radius: number, direction: UnityEngine.Vector3, results: UnityEngine.RaycastHit[], maxDistance: number): number;
    static CapsuleCastNonAlloc(point1: UnityEngine.Vector3, point2: UnityEngine.Vector3, radius: number, direction: UnityEngine.Vector3, results: UnityEngine.RaycastHit[]): number;
    static SphereCastAll(origin: UnityEngine.Vector3, radius: number, direction: UnityEngine.Vector3, maxDistance: number, layerMask: number): UnityEngine.RaycastHit[];
    static SphereCastAll(origin: UnityEngine.Vector3, radius: number, direction: UnityEngine.Vector3, maxDistance: number): UnityEngine.RaycastHit[];
    static SphereCastAll(origin: UnityEngine.Vector3, radius: number, direction: UnityEngine.Vector3): UnityEngine.RaycastHit[];
    static SphereCastAll(origin: UnityEngine.Vector3, radius: number, direction: UnityEngine.Vector3, maxDistance: number, layerMask: number, queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): UnityEngine.RaycastHit[];
    static SphereCastAll(ray: UnityEngine.Ray, radius: number, maxDistance: number, layerMask: number): UnityEngine.RaycastHit[];
    static SphereCastAll(ray: UnityEngine.Ray, radius: number, maxDistance: number): UnityEngine.RaycastHit[];
    static SphereCastAll(ray: UnityEngine.Ray, radius: number): UnityEngine.RaycastHit[];
    static SphereCastAll(ray: UnityEngine.Ray, radius: number, maxDistance: number, layerMask: number, queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): UnityEngine.RaycastHit[];
    static SphereCastNonAlloc(origin: UnityEngine.Vector3, radius: number, direction: UnityEngine.Vector3, results: UnityEngine.RaycastHit[], maxDistance: number, layerMask: number): number;
    static SphereCastNonAlloc(origin: UnityEngine.Vector3, radius: number, direction: UnityEngine.Vector3, results: UnityEngine.RaycastHit[], maxDistance: number): number;
    static SphereCastNonAlloc(origin: UnityEngine.Vector3, radius: number, direction: UnityEngine.Vector3, results: UnityEngine.RaycastHit[]): number;
    static SphereCastNonAlloc(origin: UnityEngine.Vector3, radius: number, direction: UnityEngine.Vector3, results: UnityEngine.RaycastHit[], maxDistance: number, layerMask: number, queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): number;
    static SphereCastNonAlloc(ray: UnityEngine.Ray, radius: number, results: UnityEngine.RaycastHit[], maxDistance: number, layerMask: number): number;
    static SphereCastNonAlloc(ray: UnityEngine.Ray, radius: number, results: UnityEngine.RaycastHit[], maxDistance: number): number;
    static SphereCastNonAlloc(ray: UnityEngine.Ray, radius: number, results: UnityEngine.RaycastHit[]): number;
    static SphereCastNonAlloc(ray: UnityEngine.Ray, radius: number, results: UnityEngine.RaycastHit[], maxDistance: number, layerMask: number, queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): number;
    static CheckSphere(position: UnityEngine.Vector3, radius: number, layerMask: number, queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): boolean;
    static CheckSphere(position: UnityEngine.Vector3, radius: number, layerMask: number): boolean;
    static CheckSphere(position: UnityEngine.Vector3, radius: number): boolean;
    static CheckCapsule(start: UnityEngine.Vector3, end: UnityEngine.Vector3, radius: number, layermask: number, queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): boolean;
    static CheckCapsule(start: UnityEngine.Vector3, end: UnityEngine.Vector3, radius: number, layermask: number): boolean;
    static CheckCapsule(start: UnityEngine.Vector3, end: UnityEngine.Vector3, radius: number): boolean;
    static CheckBox(center: UnityEngine.Vector3, halfExtents: UnityEngine.Vector3, orientation: UnityEngine.Quaternion, layermask: number, queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): boolean;
    static CheckBox(center: UnityEngine.Vector3, halfExtents: UnityEngine.Vector3, orientation: UnityEngine.Quaternion, layermask: number): boolean;
    static CheckBox(center: UnityEngine.Vector3, halfExtents: UnityEngine.Vector3, orientation: UnityEngine.Quaternion): boolean;
    static CheckBox(center: UnityEngine.Vector3, halfExtents: UnityEngine.Vector3): boolean;
    static OverlapBox(center: UnityEngine.Vector3, halfExtents: UnityEngine.Vector3, orientation: UnityEngine.Quaternion, layerMask: number, queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): UnityEngine.Collider[];
    static OverlapBox(center: UnityEngine.Vector3, halfExtents: UnityEngine.Vector3, orientation: UnityEngine.Quaternion, layerMask: number): UnityEngine.Collider[];
    static OverlapBox(center: UnityEngine.Vector3, halfExtents: UnityEngine.Vector3, orientation: UnityEngine.Quaternion): UnityEngine.Collider[];
    static OverlapBox(center: UnityEngine.Vector3, halfExtents: UnityEngine.Vector3): UnityEngine.Collider[];
    static OverlapBoxNonAlloc(center: UnityEngine.Vector3, halfExtents: UnityEngine.Vector3, results: UnityEngine.Collider[], orientation: UnityEngine.Quaternion, layerMask: number, queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): number;
    static OverlapBoxNonAlloc(center: UnityEngine.Vector3, halfExtents: UnityEngine.Vector3, results: UnityEngine.Collider[], orientation: UnityEngine.Quaternion, layerMask: number): number;
    static OverlapBoxNonAlloc(center: UnityEngine.Vector3, halfExtents: UnityEngine.Vector3, results: UnityEngine.Collider[], orientation: UnityEngine.Quaternion): number;
    static OverlapBoxNonAlloc(center: UnityEngine.Vector3, halfExtents: UnityEngine.Vector3, results: UnityEngine.Collider[]): number;
    static BoxCastAll(center: UnityEngine.Vector3, halfExtents: UnityEngine.Vector3, direction: UnityEngine.Vector3, orientation: UnityEngine.Quaternion, maxDistance: number, layermask: number, queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): UnityEngine.RaycastHit[];
    static BoxCastAll(center: UnityEngine.Vector3, halfExtents: UnityEngine.Vector3, direction: UnityEngine.Vector3, orientation: UnityEngine.Quaternion, maxDistance: number, layermask: number): UnityEngine.RaycastHit[];
    static BoxCastAll(center: UnityEngine.Vector3, halfExtents: UnityEngine.Vector3, direction: UnityEngine.Vector3, orientation: UnityEngine.Quaternion, maxDistance: number): UnityEngine.RaycastHit[];
    static BoxCastAll(center: UnityEngine.Vector3, halfExtents: UnityEngine.Vector3, direction: UnityEngine.Vector3, orientation: UnityEngine.Quaternion): UnityEngine.RaycastHit[];
    static BoxCastAll(center: UnityEngine.Vector3, halfExtents: UnityEngine.Vector3, direction: UnityEngine.Vector3): UnityEngine.RaycastHit[];
    static BoxCastNonAlloc(center: UnityEngine.Vector3, halfExtents: UnityEngine.Vector3, direction: UnityEngine.Vector3, results: UnityEngine.RaycastHit[], orientation: UnityEngine.Quaternion, maxDistance: number, layermask: number, queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): number;
    static BoxCastNonAlloc(center: UnityEngine.Vector3, halfExtents: UnityEngine.Vector3, direction: UnityEngine.Vector3, results: UnityEngine.RaycastHit[], orientation: UnityEngine.Quaternion, maxDistance: number, layermask: number): number;
    static BoxCastNonAlloc(center: UnityEngine.Vector3, halfExtents: UnityEngine.Vector3, direction: UnityEngine.Vector3, results: UnityEngine.RaycastHit[], orientation: UnityEngine.Quaternion, maxDistance: number): number;
    static BoxCastNonAlloc(center: UnityEngine.Vector3, halfExtents: UnityEngine.Vector3, direction: UnityEngine.Vector3, results: UnityEngine.RaycastHit[], orientation: UnityEngine.Quaternion): number;
    static BoxCastNonAlloc(center: UnityEngine.Vector3, halfExtents: UnityEngine.Vector3, direction: UnityEngine.Vector3, results: UnityEngine.RaycastHit[]): number;
    static BoxCast(center: UnityEngine.Vector3, halfExtents: UnityEngine.Vector3, direction: UnityEngine.Vector3, orientation: UnityEngine.Quaternion, maxDistance: number, layerMask: number): boolean;
    static BoxCast(center: UnityEngine.Vector3, halfExtents: UnityEngine.Vector3, direction: UnityEngine.Vector3, orientation: UnityEngine.Quaternion, maxDistance: number): boolean;
    static BoxCast(center: UnityEngine.Vector3, halfExtents: UnityEngine.Vector3, direction: UnityEngine.Vector3, orientation: UnityEngine.Quaternion): boolean;
    static BoxCast(center: UnityEngine.Vector3, halfExtents: UnityEngine.Vector3, direction: UnityEngine.Vector3): boolean;
    static BoxCast(center: UnityEngine.Vector3, halfExtents: UnityEngine.Vector3, direction: UnityEngine.Vector3, orientation: UnityEngine.Quaternion, maxDistance: number, layerMask: number, queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): boolean;
    static BoxCast(center: UnityEngine.Vector3, halfExtents: UnityEngine.Vector3, direction: UnityEngine.Vector3, hitInfo: any, orientation: UnityEngine.Quaternion, maxDistance: number, layerMask: number): boolean;
    static BoxCast(center: UnityEngine.Vector3, halfExtents: UnityEngine.Vector3, direction: UnityEngine.Vector3, hitInfo: any, orientation: UnityEngine.Quaternion, maxDistance: number): boolean;
    static BoxCast(center: UnityEngine.Vector3, halfExtents: UnityEngine.Vector3, direction: UnityEngine.Vector3, hitInfo: any, orientation: UnityEngine.Quaternion): boolean;
    static BoxCast(center: UnityEngine.Vector3, halfExtents: UnityEngine.Vector3, direction: UnityEngine.Vector3, hitInfo: any): boolean;
    static BoxCast(center: UnityEngine.Vector3, halfExtents: UnityEngine.Vector3, direction: UnityEngine.Vector3, hitInfo: any, orientation: UnityEngine.Quaternion, maxDistance: number, layerMask: number, queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): boolean;
    static IgnoreCollision(collider1: UnityEngine.Collider, collider2: UnityEngine.Collider, ignore: boolean): void;
    static IgnoreCollision(collider1: UnityEngine.Collider, collider2: UnityEngine.Collider): void;
    static IgnoreLayerCollision(layer1: number, layer2: number, ignore: boolean): void;
    static IgnoreLayerCollision(layer1: number, layer2: number): void;
    static GetIgnoreLayerCollision(layer1: number, layer2: number): boolean;
    // properties
    static gravity: UnityEngine.Vector3;
    static minPenetrationForPenalty: number;
    static defaultContactOffset: number;
    static bounceThreshold: number;
    static bounceTreshold: number;
    static sleepVelocity: number;
    static sleepAngularVelocity: number;
    static maxAngularVelocity: number;
    static defaultSolverIterations: number;
    static solverIterationCount: number;
    static defaultSolverVelocityIterations: number;
    static solverVelocityIterationCount: number;
    static sleepThreshold: number;
    static queriesHitTriggers: boolean;
    static queriesHitBackfaces: boolean;
    static penetrationPenaltyForce: number;
    // fields
    static IgnoreRaycastLayer: number;
    static kIgnoreRaycastLayer: number;
    static DefaultRaycastLayers: number;
    static kDefaultRaycastLayers: number;
    static AllLayers: number;
    static kAllLayers: number;
  }
}
declare namespace UnityEngine {
  class Physics2D extends System.Object {
    // constructors
    constructor();
    // methods
    static IgnoreCollision(collider1: UnityEngine.Collider2D, collider2: UnityEngine.Collider2D, ignore: boolean): void;
    static IgnoreCollision(collider1: UnityEngine.Collider2D, collider2: UnityEngine.Collider2D): void;
    static GetIgnoreCollision(collider1: UnityEngine.Collider2D, collider2: UnityEngine.Collider2D): boolean;
    static IgnoreLayerCollision(layer1: number, layer2: number, ignore: boolean): void;
    static IgnoreLayerCollision(layer1: number, layer2: number): void;
    static GetIgnoreLayerCollision(layer1: number, layer2: number): boolean;
    static SetLayerCollisionMask(layer: number, layerMask: number): void;
    static GetLayerCollisionMask(layer: number): number;
    static IsTouching(collider1: UnityEngine.Collider2D, collider2: UnityEngine.Collider2D): boolean;
    static IsTouchingLayers(collider: UnityEngine.Collider2D, layerMask: number): boolean;
    static IsTouchingLayers(collider: UnityEngine.Collider2D): boolean;
    static Linecast(start: UnityEngine.Vector2, end: UnityEngine.Vector2, layerMask: number, minDepth: number): UnityEngine.RaycastHit2D;
    static Linecast(start: UnityEngine.Vector2, end: UnityEngine.Vector2, layerMask: number): UnityEngine.RaycastHit2D;
    static Linecast(start: UnityEngine.Vector2, end: UnityEngine.Vector2): UnityEngine.RaycastHit2D;
    static Linecast(start: UnityEngine.Vector2, end: UnityEngine.Vector2, layerMask: number, minDepth: number, maxDepth: number): UnityEngine.RaycastHit2D;
    static LinecastAll(start: UnityEngine.Vector2, end: UnityEngine.Vector2, layerMask: number, minDepth: number, maxDepth: number): UnityEngine.RaycastHit2D[];
    static LinecastAll(start: UnityEngine.Vector2, end: UnityEngine.Vector2, layerMask: number, minDepth: number): UnityEngine.RaycastHit2D[];
    static LinecastAll(start: UnityEngine.Vector2, end: UnityEngine.Vector2, layerMask: number): UnityEngine.RaycastHit2D[];
    static LinecastAll(start: UnityEngine.Vector2, end: UnityEngine.Vector2): UnityEngine.RaycastHit2D[];
    static LinecastNonAlloc(start: UnityEngine.Vector2, end: UnityEngine.Vector2, results: UnityEngine.RaycastHit2D[], layerMask: number, minDepth: number, maxDepth: number): number;
    static LinecastNonAlloc(start: UnityEngine.Vector2, end: UnityEngine.Vector2, results: UnityEngine.RaycastHit2D[], layerMask: number, minDepth: number): number;
    static LinecastNonAlloc(start: UnityEngine.Vector2, end: UnityEngine.Vector2, results: UnityEngine.RaycastHit2D[], layerMask: number): number;
    static LinecastNonAlloc(start: UnityEngine.Vector2, end: UnityEngine.Vector2, results: UnityEngine.RaycastHit2D[]): number;
    static Raycast(origin: UnityEngine.Vector2, direction: UnityEngine.Vector2, distance: number, layerMask: number, minDepth: number): UnityEngine.RaycastHit2D;
    static Raycast(origin: UnityEngine.Vector2, direction: UnityEngine.Vector2, distance: number, layerMask: number): UnityEngine.RaycastHit2D;
    static Raycast(origin: UnityEngine.Vector2, direction: UnityEngine.Vector2, distance: number): UnityEngine.RaycastHit2D;
    static Raycast(origin: UnityEngine.Vector2, direction: UnityEngine.Vector2): UnityEngine.RaycastHit2D;
    static Raycast(origin: UnityEngine.Vector2, direction: UnityEngine.Vector2, distance: number, layerMask: number, minDepth: number, maxDepth: number): UnityEngine.RaycastHit2D;
    static RaycastAll(origin: UnityEngine.Vector2, direction: UnityEngine.Vector2, distance: number, layerMask: number, minDepth: number, maxDepth: number): UnityEngine.RaycastHit2D[];
    static RaycastAll(origin: UnityEngine.Vector2, direction: UnityEngine.Vector2, distance: number, layerMask: number, minDepth: number): UnityEngine.RaycastHit2D[];
    static RaycastAll(origin: UnityEngine.Vector2, direction: UnityEngine.Vector2, distance: number, layerMask: number): UnityEngine.RaycastHit2D[];
    static RaycastAll(origin: UnityEngine.Vector2, direction: UnityEngine.Vector2, distance: number): UnityEngine.RaycastHit2D[];
    static RaycastAll(origin: UnityEngine.Vector2, direction: UnityEngine.Vector2): UnityEngine.RaycastHit2D[];
    static RaycastNonAlloc(origin: UnityEngine.Vector2, direction: UnityEngine.Vector2, results: UnityEngine.RaycastHit2D[], distance: number, layerMask: number, minDepth: number, maxDepth: number): number;
    static RaycastNonAlloc(origin: UnityEngine.Vector2, direction: UnityEngine.Vector2, results: UnityEngine.RaycastHit2D[], distance: number, layerMask: number, minDepth: number): number;
    static RaycastNonAlloc(origin: UnityEngine.Vector2, direction: UnityEngine.Vector2, results: UnityEngine.RaycastHit2D[], distance: number, layerMask: number): number;
    static RaycastNonAlloc(origin: UnityEngine.Vector2, direction: UnityEngine.Vector2, results: UnityEngine.RaycastHit2D[], distance: number): number;
    static RaycastNonAlloc(origin: UnityEngine.Vector2, direction: UnityEngine.Vector2, results: UnityEngine.RaycastHit2D[]): number;
    static CircleCast(origin: UnityEngine.Vector2, radius: number, direction: UnityEngine.Vector2, distance: number, layerMask: number, minDepth: number): UnityEngine.RaycastHit2D;
    static CircleCast(origin: UnityEngine.Vector2, radius: number, direction: UnityEngine.Vector2, distance: number, layerMask: number): UnityEngine.RaycastHit2D;
    static CircleCast(origin: UnityEngine.Vector2, radius: number, direction: UnityEngine.Vector2, distance: number): UnityEngine.RaycastHit2D;
    static CircleCast(origin: UnityEngine.Vector2, radius: number, direction: UnityEngine.Vector2): UnityEngine.RaycastHit2D;
    static CircleCast(origin: UnityEngine.Vector2, radius: number, direction: UnityEngine.Vector2, distance: number, layerMask: number, minDepth: number, maxDepth: number): UnityEngine.RaycastHit2D;
    static CircleCastAll(origin: UnityEngine.Vector2, radius: number, direction: UnityEngine.Vector2, distance: number, layerMask: number, minDepth: number, maxDepth: number): UnityEngine.RaycastHit2D[];
    static CircleCastAll(origin: UnityEngine.Vector2, radius: number, direction: UnityEngine.Vector2, distance: number, layerMask: number, minDepth: number): UnityEngine.RaycastHit2D[];
    static CircleCastAll(origin: UnityEngine.Vector2, radius: number, direction: UnityEngine.Vector2, distance: number, layerMask: number): UnityEngine.RaycastHit2D[];
    static CircleCastAll(origin: UnityEngine.Vector2, radius: number, direction: UnityEngine.Vector2, distance: number): UnityEngine.RaycastHit2D[];
    static CircleCastAll(origin: UnityEngine.Vector2, radius: number, direction: UnityEngine.Vector2): UnityEngine.RaycastHit2D[];
    static CircleCastNonAlloc(origin: UnityEngine.Vector2, radius: number, direction: UnityEngine.Vector2, results: UnityEngine.RaycastHit2D[], distance: number, layerMask: number, minDepth: number, maxDepth: number): number;
    static CircleCastNonAlloc(origin: UnityEngine.Vector2, radius: number, direction: UnityEngine.Vector2, results: UnityEngine.RaycastHit2D[], distance: number, layerMask: number, minDepth: number): number;
    static CircleCastNonAlloc(origin: UnityEngine.Vector2, radius: number, direction: UnityEngine.Vector2, results: UnityEngine.RaycastHit2D[], distance: number, layerMask: number): number;
    static CircleCastNonAlloc(origin: UnityEngine.Vector2, radius: number, direction: UnityEngine.Vector2, results: UnityEngine.RaycastHit2D[], distance: number): number;
    static CircleCastNonAlloc(origin: UnityEngine.Vector2, radius: number, direction: UnityEngine.Vector2, results: UnityEngine.RaycastHit2D[]): number;
    static BoxCast(origin: UnityEngine.Vector2, size: UnityEngine.Vector2, angle: number, direction: UnityEngine.Vector2, distance: number, layerMask: number, minDepth: number): UnityEngine.RaycastHit2D;
    static BoxCast(origin: UnityEngine.Vector2, size: UnityEngine.Vector2, angle: number, direction: UnityEngine.Vector2, distance: number, layerMask: number): UnityEngine.RaycastHit2D;
    static BoxCast(origin: UnityEngine.Vector2, size: UnityEngine.Vector2, angle: number, direction: UnityEngine.Vector2, distance: number): UnityEngine.RaycastHit2D;
    static BoxCast(origin: UnityEngine.Vector2, size: UnityEngine.Vector2, angle: number, direction: UnityEngine.Vector2): UnityEngine.RaycastHit2D;
    static BoxCast(origin: UnityEngine.Vector2, size: UnityEngine.Vector2, angle: number, direction: UnityEngine.Vector2, distance: number, layerMask: number, minDepth: number, maxDepth: number): UnityEngine.RaycastHit2D;
    static BoxCastAll(origin: UnityEngine.Vector2, size: UnityEngine.Vector2, angle: number, direction: UnityEngine.Vector2, distance: number, layerMask: number, minDepth: number, maxDepth: number): UnityEngine.RaycastHit2D[];
    static BoxCastAll(origin: UnityEngine.Vector2, size: UnityEngine.Vector2, angle: number, direction: UnityEngine.Vector2, distance: number, layerMask: number, minDepth: number): UnityEngine.RaycastHit2D[];
    static BoxCastAll(origin: UnityEngine.Vector2, size: UnityEngine.Vector2, angle: number, direction: UnityEngine.Vector2, distance: number, layerMask: number): UnityEngine.RaycastHit2D[];
    static BoxCastAll(origin: UnityEngine.Vector2, size: UnityEngine.Vector2, angle: number, direction: UnityEngine.Vector2, distance: number): UnityEngine.RaycastHit2D[];
    static BoxCastAll(origin: UnityEngine.Vector2, size: UnityEngine.Vector2, angle: number, direction: UnityEngine.Vector2): UnityEngine.RaycastHit2D[];
    static BoxCastNonAlloc(origin: UnityEngine.Vector2, size: UnityEngine.Vector2, angle: number, direction: UnityEngine.Vector2, results: UnityEngine.RaycastHit2D[], distance: number, layerMask: number, minDepth: number, maxDepth: number): number;
    static BoxCastNonAlloc(origin: UnityEngine.Vector2, size: UnityEngine.Vector2, angle: number, direction: UnityEngine.Vector2, results: UnityEngine.RaycastHit2D[], distance: number, layerMask: number, minDepth: number): number;
    static BoxCastNonAlloc(origin: UnityEngine.Vector2, size: UnityEngine.Vector2, angle: number, direction: UnityEngine.Vector2, results: UnityEngine.RaycastHit2D[], distance: number, layerMask: number): number;
    static BoxCastNonAlloc(origin: UnityEngine.Vector2, size: UnityEngine.Vector2, angle: number, direction: UnityEngine.Vector2, results: UnityEngine.RaycastHit2D[], distance: number): number;
    static BoxCastNonAlloc(origin: UnityEngine.Vector2, size: UnityEngine.Vector2, angle: number, direction: UnityEngine.Vector2, results: UnityEngine.RaycastHit2D[]): number;
    static CapsuleCast(origin: UnityEngine.Vector2, size: UnityEngine.Vector2, capsuleDirection: UnityEngine.CapsuleDirection2D, angle: number, direction: UnityEngine.Vector2, distance: number, layerMask: number, minDepth: number): UnityEngine.RaycastHit2D;
    static CapsuleCast(origin: UnityEngine.Vector2, size: UnityEngine.Vector2, capsuleDirection: UnityEngine.CapsuleDirection2D, angle: number, direction: UnityEngine.Vector2, distance: number, layerMask: number): UnityEngine.RaycastHit2D;
    static CapsuleCast(origin: UnityEngine.Vector2, size: UnityEngine.Vector2, capsuleDirection: UnityEngine.CapsuleDirection2D, angle: number, direction: UnityEngine.Vector2, distance: number): UnityEngine.RaycastHit2D;
    static CapsuleCast(origin: UnityEngine.Vector2, size: UnityEngine.Vector2, capsuleDirection: UnityEngine.CapsuleDirection2D, angle: number, direction: UnityEngine.Vector2): UnityEngine.RaycastHit2D;
    static CapsuleCast(origin: UnityEngine.Vector2, size: UnityEngine.Vector2, capsuleDirection: UnityEngine.CapsuleDirection2D, angle: number, direction: UnityEngine.Vector2, distance: number, layerMask: number, minDepth: number, maxDepth: number): UnityEngine.RaycastHit2D;
    static CapsuleCastAll(origin: UnityEngine.Vector2, size: UnityEngine.Vector2, capsuleDirection: UnityEngine.CapsuleDirection2D, angle: number, direction: UnityEngine.Vector2, distance: number, layerMask: number, minDepth: number, maxDepth: number): UnityEngine.RaycastHit2D[];
    static CapsuleCastAll(origin: UnityEngine.Vector2, size: UnityEngine.Vector2, capsuleDirection: UnityEngine.CapsuleDirection2D, angle: number, direction: UnityEngine.Vector2, distance: number, layerMask: number, minDepth: number): UnityEngine.RaycastHit2D[];
    static CapsuleCastAll(origin: UnityEngine.Vector2, size: UnityEngine.Vector2, capsuleDirection: UnityEngine.CapsuleDirection2D, angle: number, direction: UnityEngine.Vector2, distance: number, layerMask: number): UnityEngine.RaycastHit2D[];
    static CapsuleCastAll(origin: UnityEngine.Vector2, size: UnityEngine.Vector2, capsuleDirection: UnityEngine.CapsuleDirection2D, angle: number, direction: UnityEngine.Vector2, distance: number): UnityEngine.RaycastHit2D[];
    static CapsuleCastAll(origin: UnityEngine.Vector2, size: UnityEngine.Vector2, capsuleDirection: UnityEngine.CapsuleDirection2D, angle: number, direction: UnityEngine.Vector2): UnityEngine.RaycastHit2D[];
    static CapsuleCastNonAlloc(origin: UnityEngine.Vector2, size: UnityEngine.Vector2, capsuleDirection: UnityEngine.CapsuleDirection2D, angle: number, direction: UnityEngine.Vector2, results: UnityEngine.RaycastHit2D[], distance: number, layerMask: number, minDepth: number, maxDepth: number): number;
    static CapsuleCastNonAlloc(origin: UnityEngine.Vector2, size: UnityEngine.Vector2, capsuleDirection: UnityEngine.CapsuleDirection2D, angle: number, direction: UnityEngine.Vector2, results: UnityEngine.RaycastHit2D[], distance: number, layerMask: number, minDepth: number): number;
    static CapsuleCastNonAlloc(origin: UnityEngine.Vector2, size: UnityEngine.Vector2, capsuleDirection: UnityEngine.CapsuleDirection2D, angle: number, direction: UnityEngine.Vector2, results: UnityEngine.RaycastHit2D[], distance: number, layerMask: number): number;
    static CapsuleCastNonAlloc(origin: UnityEngine.Vector2, size: UnityEngine.Vector2, capsuleDirection: UnityEngine.CapsuleDirection2D, angle: number, direction: UnityEngine.Vector2, results: UnityEngine.RaycastHit2D[], distance: number): number;
    static CapsuleCastNonAlloc(origin: UnityEngine.Vector2, size: UnityEngine.Vector2, capsuleDirection: UnityEngine.CapsuleDirection2D, angle: number, direction: UnityEngine.Vector2, results: UnityEngine.RaycastHit2D[]): number;
    static GetRayIntersection(ray: UnityEngine.Ray, distance: number): UnityEngine.RaycastHit2D;
    static GetRayIntersection(ray: UnityEngine.Ray): UnityEngine.RaycastHit2D;
    static GetRayIntersection(ray: UnityEngine.Ray, distance: number, layerMask: number): UnityEngine.RaycastHit2D;
    static GetRayIntersectionAll(ray: UnityEngine.Ray, distance: number, layerMask: number): UnityEngine.RaycastHit2D[];
    static GetRayIntersectionAll(ray: UnityEngine.Ray, distance: number): UnityEngine.RaycastHit2D[];
    static GetRayIntersectionAll(ray: UnityEngine.Ray): UnityEngine.RaycastHit2D[];
    static GetRayIntersectionNonAlloc(ray: UnityEngine.Ray, results: UnityEngine.RaycastHit2D[], distance: number, layerMask: number): number;
    static GetRayIntersectionNonAlloc(ray: UnityEngine.Ray, results: UnityEngine.RaycastHit2D[], distance: number): number;
    static GetRayIntersectionNonAlloc(ray: UnityEngine.Ray, results: UnityEngine.RaycastHit2D[]): number;
    static OverlapPoint(point: UnityEngine.Vector2, layerMask: number, minDepth: number, maxDepth: number): UnityEngine.Collider2D;
    static OverlapPoint(point: UnityEngine.Vector2, layerMask: number, minDepth: number): UnityEngine.Collider2D;
    static OverlapPoint(point: UnityEngine.Vector2, layerMask: number): UnityEngine.Collider2D;
    static OverlapPoint(point: UnityEngine.Vector2): UnityEngine.Collider2D;
    static OverlapPointAll(point: UnityEngine.Vector2, layerMask: number, minDepth: number, maxDepth: number): UnityEngine.Collider2D[];
    static OverlapPointAll(point: UnityEngine.Vector2, layerMask: number, minDepth: number): UnityEngine.Collider2D[];
    static OverlapPointAll(point: UnityEngine.Vector2, layerMask: number): UnityEngine.Collider2D[];
    static OverlapPointAll(point: UnityEngine.Vector2): UnityEngine.Collider2D[];
    static OverlapPointNonAlloc(point: UnityEngine.Vector2, results: UnityEngine.Collider2D[], layerMask: number, minDepth: number, maxDepth: number): number;
    static OverlapPointNonAlloc(point: UnityEngine.Vector2, results: UnityEngine.Collider2D[], layerMask: number, minDepth: number): number;
    static OverlapPointNonAlloc(point: UnityEngine.Vector2, results: UnityEngine.Collider2D[], layerMask: number): number;
    static OverlapPointNonAlloc(point: UnityEngine.Vector2, results: UnityEngine.Collider2D[]): number;
    static OverlapCircle(point: UnityEngine.Vector2, radius: number, layerMask: number, minDepth: number, maxDepth: number): UnityEngine.Collider2D;
    static OverlapCircle(point: UnityEngine.Vector2, radius: number, layerMask: number, minDepth: number): UnityEngine.Collider2D;
    static OverlapCircle(point: UnityEngine.Vector2, radius: number, layerMask: number): UnityEngine.Collider2D;
    static OverlapCircle(point: UnityEngine.Vector2, radius: number): UnityEngine.Collider2D;
    static OverlapCircleAll(point: UnityEngine.Vector2, radius: number, layerMask: number, minDepth: number, maxDepth: number): UnityEngine.Collider2D[];
    static OverlapCircleAll(point: UnityEngine.Vector2, radius: number, layerMask: number, minDepth: number): UnityEngine.Collider2D[];
    static OverlapCircleAll(point: UnityEngine.Vector2, radius: number, layerMask: number): UnityEngine.Collider2D[];
    static OverlapCircleAll(point: UnityEngine.Vector2, radius: number): UnityEngine.Collider2D[];
    static OverlapCircleNonAlloc(point: UnityEngine.Vector2, radius: number, results: UnityEngine.Collider2D[], layerMask: number, minDepth: number, maxDepth: number): number;
    static OverlapCircleNonAlloc(point: UnityEngine.Vector2, radius: number, results: UnityEngine.Collider2D[], layerMask: number, minDepth: number): number;
    static OverlapCircleNonAlloc(point: UnityEngine.Vector2, radius: number, results: UnityEngine.Collider2D[], layerMask: number): number;
    static OverlapCircleNonAlloc(point: UnityEngine.Vector2, radius: number, results: UnityEngine.Collider2D[]): number;
    static OverlapBox(point: UnityEngine.Vector2, size: UnityEngine.Vector2, angle: number, layerMask: number, minDepth: number, maxDepth: number): UnityEngine.Collider2D;
    static OverlapBox(point: UnityEngine.Vector2, size: UnityEngine.Vector2, angle: number, layerMask: number, minDepth: number): UnityEngine.Collider2D;
    static OverlapBox(point: UnityEngine.Vector2, size: UnityEngine.Vector2, angle: number, layerMask: number): UnityEngine.Collider2D;
    static OverlapBox(point: UnityEngine.Vector2, size: UnityEngine.Vector2, angle: number): UnityEngine.Collider2D;
    static OverlapBoxAll(point: UnityEngine.Vector2, size: UnityEngine.Vector2, angle: number, layerMask: number, minDepth: number, maxDepth: number): UnityEngine.Collider2D[];
    static OverlapBoxAll(point: UnityEngine.Vector2, size: UnityEngine.Vector2, angle: number, layerMask: number, minDepth: number): UnityEngine.Collider2D[];
    static OverlapBoxAll(point: UnityEngine.Vector2, size: UnityEngine.Vector2, angle: number, layerMask: number): UnityEngine.Collider2D[];
    static OverlapBoxAll(point: UnityEngine.Vector2, size: UnityEngine.Vector2, angle: number): UnityEngine.Collider2D[];
    static OverlapBoxNonAlloc(point: UnityEngine.Vector2, size: UnityEngine.Vector2, angle: number, results: UnityEngine.Collider2D[], layerMask: number, minDepth: number, maxDepth: number): number;
    static OverlapBoxNonAlloc(point: UnityEngine.Vector2, size: UnityEngine.Vector2, angle: number, results: UnityEngine.Collider2D[], layerMask: number, minDepth: number): number;
    static OverlapBoxNonAlloc(point: UnityEngine.Vector2, size: UnityEngine.Vector2, angle: number, results: UnityEngine.Collider2D[], layerMask: number): number;
    static OverlapBoxNonAlloc(point: UnityEngine.Vector2, size: UnityEngine.Vector2, angle: number, results: UnityEngine.Collider2D[]): number;
    static OverlapArea(pointA: UnityEngine.Vector2, pointB: UnityEngine.Vector2, layerMask: number, minDepth: number, maxDepth: number): UnityEngine.Collider2D;
    static OverlapArea(pointA: UnityEngine.Vector2, pointB: UnityEngine.Vector2, layerMask: number, minDepth: number): UnityEngine.Collider2D;
    static OverlapArea(pointA: UnityEngine.Vector2, pointB: UnityEngine.Vector2, layerMask: number): UnityEngine.Collider2D;
    static OverlapArea(pointA: UnityEngine.Vector2, pointB: UnityEngine.Vector2): UnityEngine.Collider2D;
    static OverlapAreaAll(pointA: UnityEngine.Vector2, pointB: UnityEngine.Vector2, layerMask: number, minDepth: number, maxDepth: number): UnityEngine.Collider2D[];
    static OverlapAreaAll(pointA: UnityEngine.Vector2, pointB: UnityEngine.Vector2, layerMask: number, minDepth: number): UnityEngine.Collider2D[];
    static OverlapAreaAll(pointA: UnityEngine.Vector2, pointB: UnityEngine.Vector2, layerMask: number): UnityEngine.Collider2D[];
    static OverlapAreaAll(pointA: UnityEngine.Vector2, pointB: UnityEngine.Vector2): UnityEngine.Collider2D[];
    static OverlapAreaNonAlloc(pointA: UnityEngine.Vector2, pointB: UnityEngine.Vector2, results: UnityEngine.Collider2D[], layerMask: number, minDepth: number, maxDepth: number): number;
    static OverlapAreaNonAlloc(pointA: UnityEngine.Vector2, pointB: UnityEngine.Vector2, results: UnityEngine.Collider2D[], layerMask: number, minDepth: number): number;
    static OverlapAreaNonAlloc(pointA: UnityEngine.Vector2, pointB: UnityEngine.Vector2, results: UnityEngine.Collider2D[], layerMask: number): number;
    static OverlapAreaNonAlloc(pointA: UnityEngine.Vector2, pointB: UnityEngine.Vector2, results: UnityEngine.Collider2D[]): number;
    static OverlapCapsule(point: UnityEngine.Vector2, size: UnityEngine.Vector2, direction: UnityEngine.CapsuleDirection2D, angle: number, layerMask: number, minDepth: number, maxDepth: number): UnityEngine.Collider2D;
    static OverlapCapsule(point: UnityEngine.Vector2, size: UnityEngine.Vector2, direction: UnityEngine.CapsuleDirection2D, angle: number, layerMask: number, minDepth: number): UnityEngine.Collider2D;
    static OverlapCapsule(point: UnityEngine.Vector2, size: UnityEngine.Vector2, direction: UnityEngine.CapsuleDirection2D, angle: number, layerMask: number): UnityEngine.Collider2D;
    static OverlapCapsule(point: UnityEngine.Vector2, size: UnityEngine.Vector2, direction: UnityEngine.CapsuleDirection2D, angle: number): UnityEngine.Collider2D;
    static OverlapCapsuleAll(point: UnityEngine.Vector2, size: UnityEngine.Vector2, direction: UnityEngine.CapsuleDirection2D, angle: number, layerMask: number, minDepth: number, maxDepth: number): UnityEngine.Collider2D[];
    static OverlapCapsuleAll(point: UnityEngine.Vector2, size: UnityEngine.Vector2, direction: UnityEngine.CapsuleDirection2D, angle: number, layerMask: number, minDepth: number): UnityEngine.Collider2D[];
    static OverlapCapsuleAll(point: UnityEngine.Vector2, size: UnityEngine.Vector2, direction: UnityEngine.CapsuleDirection2D, angle: number, layerMask: number): UnityEngine.Collider2D[];
    static OverlapCapsuleAll(point: UnityEngine.Vector2, size: UnityEngine.Vector2, direction: UnityEngine.CapsuleDirection2D, angle: number): UnityEngine.Collider2D[];
    static OverlapCapsuleNonAlloc(point: UnityEngine.Vector2, size: UnityEngine.Vector2, direction: UnityEngine.CapsuleDirection2D, angle: number, results: UnityEngine.Collider2D[], layerMask: number, minDepth: number, maxDepth: number): number;
    static OverlapCapsuleNonAlloc(point: UnityEngine.Vector2, size: UnityEngine.Vector2, direction: UnityEngine.CapsuleDirection2D, angle: number, results: UnityEngine.Collider2D[], layerMask: number, minDepth: number): number;
    static OverlapCapsuleNonAlloc(point: UnityEngine.Vector2, size: UnityEngine.Vector2, direction: UnityEngine.CapsuleDirection2D, angle: number, results: UnityEngine.Collider2D[], layerMask: number): number;
    static OverlapCapsuleNonAlloc(point: UnityEngine.Vector2, size: UnityEngine.Vector2, direction: UnityEngine.CapsuleDirection2D, angle: number, results: UnityEngine.Collider2D[]): number;
    // properties
    static raycastsHitTriggers: boolean;
    static raycastsStartInColliders: boolean;
    static deleteStopsCallbacks: boolean;
    static velocityIterations: number;
    static positionIterations: number;
    static gravity: UnityEngine.Vector2;
    static queriesHitTriggers: boolean;
    static queriesStartInColliders: boolean;
    static changeStopsCallbacks: boolean;
    static velocityThreshold: number;
    static maxLinearCorrection: number;
    static maxAngularCorrection: number;
    static maxTranslationSpeed: number;
    static maxRotationSpeed: number;
    static minPenetrationForPenalty: number;
    static baumgarteScale: number;
    static baumgarteTOIScale: number;
    static timeToSleep: number;
    static linearSleepTolerance: number;
    static angularSleepTolerance: number;
    static alwaysShowColliders: boolean;
    static showColliderSleep: boolean;
    static showColliderContacts: boolean;
    static showColliderAABB: boolean;
    static contactArrowScale: number;
    static colliderAwakeColor: UnityEngine.Color;
    static colliderAsleepColor: UnityEngine.Color;
    static colliderContactColor: UnityEngine.Color;
    static colliderAABBColor: UnityEngine.Color;
    // fields
    static IgnoreRaycastLayer: number;
    static DefaultRaycastLayers: number;
    static AllLayers: number;
  }
}
declare namespace UnityEngine {
  class PhysicsMaterial2D extends UnityEngine.Object {
    // constructors
    constructor();
    constructor(name: string);
    // methods
    // properties
    bounciness: number;
    friction: number;
    // fields
  }
}
declare namespace UnityEngine {
  class PhysicsUpdateBehaviour2D extends UnityEngine.Behaviour {
    // constructors
    constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class Ping extends System.Object {
    // constructors
    constructor(address: string);
    // methods
    DestroyPing(): void;
    // properties
    readonly isDone: boolean;
    readonly time: number;
    readonly ip: string;
    // fields
  }
}
declare namespace UnityEngine {
  class Plane extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    SetNormalAndPosition(inNormal: UnityEngine.Vector3, inPoint: UnityEngine.Vector3): void;
    Set3Points(a: UnityEngine.Vector3, b: UnityEngine.Vector3, c: UnityEngine.Vector3): void;
    GetDistanceToPoint(inPt: UnityEngine.Vector3): number;
    GetSide(inPt: UnityEngine.Vector3): boolean;
    SameSide(inPt0: UnityEngine.Vector3, inPt1: UnityEngine.Vector3): boolean;
    Raycast(ray: UnityEngine.Ray, enter: any): boolean;
    // properties
    normal: UnityEngine.Vector3;
    distance: number;
    // fields
  }
}
declare namespace UnityEngine {
  class PlatformEffector2D extends UnityEngine.Effector2D {
    // constructors
    constructor();
    // methods
    // properties
    oneWay: boolean;
    sideFriction: boolean;
    sideBounce: boolean;
    sideAngleVariance: number;
    useOneWay: boolean;
    useOneWayGrouping: boolean;
    useSideFriction: boolean;
    useSideBounce: boolean;
    surfaceArc: number;
    sideArc: number;
    rotationalOffset: number;
    // fields
  }
}
declare namespace UnityEngine {
  class PlatformSelection extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Native: UnityEngine.PlatformSelection;
    static Mac: UnityEngine.PlatformSelection;
    static Windows: UnityEngine.PlatformSelection;
  }
}
declare namespace UnityEngine {
  class PlayerPrefs extends System.Object {
    // constructors
    constructor();
    // methods
    static SetInt(key: string, value: number): void;
    static GetInt(key: string, defaultValue: number): number;
    static GetInt(key: string): number;
    static SetFloat(key: string, value: number): void;
    static GetFloat(key: string, defaultValue: number): number;
    static GetFloat(key: string): number;
    static SetString(key: string, value: string): void;
    static GetString(key: string, defaultValue: string): string;
    static GetString(key: string): string;
    static HasKey(key: string): boolean;
    static DeleteKey(key: string): void;
    static DeleteAll(): void;
    static Save(): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class PlayerPrefsException extends System.Exception {
    // constructors
    constructor(error: string);
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class PlayMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static StopSameLayer: UnityEngine.PlayMode;
    static StopAll: UnityEngine.PlayMode;
  }
}
declare namespace UnityEngine {
  class PointEffector2D extends UnityEngine.Effector2D {
    // constructors
    constructor();
    // methods
    // properties
    forceMagnitude: number;
    forceVariation: number;
    distanceScale: number;
    drag: number;
    angularDrag: number;
    forceSource: UnityEngine.EffectorSelection2D;
    forceTarget: UnityEngine.EffectorSelection2D;
    forceMode: UnityEngine.EffectorForceMode2D;
    // fields
  }
}
declare namespace UnityEngine {
  class PolygonCollider2D extends UnityEngine.Collider2D {
    // constructors
    constructor();
    // methods
    GetPath(index: number): UnityEngine.Vector2[];
    SetPath(index: number, points: UnityEngine.Vector2[]): void;
    GetTotalPointCount(): number;
    CreatePrimitive(sides: number, scale: UnityEngine.Vector2, offset: UnityEngine.Vector2): void;
    CreatePrimitive(sides: number, scale: UnityEngine.Vector2): void;
    CreatePrimitive(sides: number): void;
    // properties
    points: UnityEngine.Vector2[];
    pathCount: number;
    // fields
  }
}
declare namespace UnityEngine {
  class PreferBinarySerialization extends System.Attribute {
    // constructors
    constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class PrimitiveType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Sphere: UnityEngine.PrimitiveType;
    static Capsule: UnityEngine.PrimitiveType;
    static Cylinder: UnityEngine.PrimitiveType;
    static Cube: UnityEngine.PrimitiveType;
    static Plane: UnityEngine.PrimitiveType;
    static Quad: UnityEngine.PrimitiveType;
  }
}
declare namespace UnityEngine {
  class ProceduralCacheSize extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Tiny: UnityEngine.ProceduralCacheSize;
    static Medium: UnityEngine.ProceduralCacheSize;
    static Heavy: UnityEngine.ProceduralCacheSize;
    static NoLimit: UnityEngine.ProceduralCacheSize;
    static None: UnityEngine.ProceduralCacheSize;
  }
}
declare namespace UnityEngine {
  class ProceduralLoadingBehavior extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static DoNothing: UnityEngine.ProceduralLoadingBehavior;
    static Generate: UnityEngine.ProceduralLoadingBehavior;
    static BakeAndKeep: UnityEngine.ProceduralLoadingBehavior;
    static BakeAndDiscard: UnityEngine.ProceduralLoadingBehavior;
    static Cache: UnityEngine.ProceduralLoadingBehavior;
    static DoNothingAndCache: UnityEngine.ProceduralLoadingBehavior;
  }
}
declare namespace UnityEngine {
  class ProceduralMaterial extends UnityEngine.Material {
    // constructors
    protected constructor();
    // methods
    GetProceduralPropertyDescriptions(): UnityEngine.ProceduralPropertyDescription[];
    HasProceduralProperty(inputName: string): boolean;
    GetProceduralBoolean(inputName: string): boolean;
    IsProceduralPropertyVisible(inputName: string): boolean;
    SetProceduralBoolean(inputName: string, value: boolean): void;
    GetProceduralFloat(inputName: string): number;
    SetProceduralFloat(inputName: string, value: number): void;
    GetProceduralVector(inputName: string): UnityEngine.Vector4;
    SetProceduralVector(inputName: string, value: UnityEngine.Vector4): void;
    GetProceduralColor(inputName: string): UnityEngine.Color;
    SetProceduralColor(inputName: string, value: UnityEngine.Color): void;
    GetProceduralEnum(inputName: string): number;
    SetProceduralEnum(inputName: string, value: number): void;
    GetProceduralTexture(inputName: string): UnityEngine.Texture2D;
    SetProceduralTexture(inputName: string, value: UnityEngine.Texture2D): void;
    IsProceduralPropertyCached(inputName: string): boolean;
    CacheProceduralProperty(inputName: string, value: boolean): void;
    ClearCache(): void;
    RebuildTextures(): void;
    RebuildTexturesImmediately(): void;
    static StopRebuilds(): void;
    GetGeneratedTextures(): UnityEngine.Texture[];
    GetGeneratedTexture(textureName: string): UnityEngine.ProceduralTexture;
    FreezeAndReleaseSourceData(): void;
    // properties
    cacheSize: UnityEngine.ProceduralCacheSize;
    animationUpdateRate: number;
    readonly isProcessing: boolean;
    readonly isCachedDataAvailable: boolean;
    isLoadTimeGenerated: boolean;
    readonly loadingBehavior: UnityEngine.ProceduralLoadingBehavior;
    static readonly isSupported: boolean;
    static substanceProcessorUsage: UnityEngine.ProceduralProcessorUsage;
    preset: string;
    isReadable: boolean;
    readonly isFrozen: boolean;
    // fields
  }
}
declare namespace UnityEngine {
  class ProceduralOutputType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Unknown: UnityEngine.ProceduralOutputType;
    static Diffuse: UnityEngine.ProceduralOutputType;
    static Normal: UnityEngine.ProceduralOutputType;
    static Height: UnityEngine.ProceduralOutputType;
    static Emissive: UnityEngine.ProceduralOutputType;
    static Specular: UnityEngine.ProceduralOutputType;
    static Opacity: UnityEngine.ProceduralOutputType;
    static Smoothness: UnityEngine.ProceduralOutputType;
    static AmbientOcclusion: UnityEngine.ProceduralOutputType;
    static DetailMask: UnityEngine.ProceduralOutputType;
    static Metallic: UnityEngine.ProceduralOutputType;
    static Roughness: UnityEngine.ProceduralOutputType;
  }
}
declare namespace UnityEngine {
  class ProceduralProcessorUsage extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Unsupported: UnityEngine.ProceduralProcessorUsage;
    static One: UnityEngine.ProceduralProcessorUsage;
    static Half: UnityEngine.ProceduralProcessorUsage;
    static All: UnityEngine.ProceduralProcessorUsage;
  }
}
declare namespace UnityEngine {
  class ProceduralPropertyDescription extends System.Object {
    // constructors
    constructor();
    // methods
    // properties
    // fields
    name: string;
    label: string;
    group: string;
    type: UnityEngine.ProceduralPropertyType;
    hasRange: boolean;
    minimum: number;
    maximum: number;
    step: number;
    enumOptions: string[];
    componentLabels: string[];
  }
}
declare namespace UnityEngine {
  class ProceduralPropertyType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Boolean: UnityEngine.ProceduralPropertyType;
    static Float: UnityEngine.ProceduralPropertyType;
    static Vector2: UnityEngine.ProceduralPropertyType;
    static Vector3: UnityEngine.ProceduralPropertyType;
    static Vector4: UnityEngine.ProceduralPropertyType;
    static Color3: UnityEngine.ProceduralPropertyType;
    static Color4: UnityEngine.ProceduralPropertyType;
    static Enum: UnityEngine.ProceduralPropertyType;
    static Texture: UnityEngine.ProceduralPropertyType;
  }
}
declare namespace UnityEngine {
  class ProceduralTexture extends UnityEngine.Texture {
    // constructors
    constructor();
    // methods
    GetProceduralOutputType(): UnityEngine.ProceduralOutputType;
    GetPixels32(x: number, y: number, blockWidth: number, blockHeight: number): UnityEngine.Color32[];
    // properties
    readonly hasAlpha: boolean;
    readonly format: UnityEngine.TextureFormat;
    // fields
  }
}
declare namespace UnityEngine.Profiling {
  class Profiler extends System.Object {
    // constructors
    constructor();
    // methods
    static AddFramesFromFile(file: string): void;
    static BeginSample(name: string): void;
    static BeginSample(name: string, targetObject: UnityEngine.Object): void;
    static EndSample(): void;
    static GetRuntimeMemorySize(o: UnityEngine.Object): number;
    static GetMonoHeapSize(): number;
    static GetMonoUsedSize(): number;
    static SetTempAllocatorRequestedSize(size: number): boolean;
    static GetTempAllocatorSize(): number;
    static GetTotalAllocatedMemory(): number;
    static GetTotalUnusedReservedMemory(): number;
    static GetTotalReservedMemory(): number;
    // properties
    static readonly supported: boolean;
    static logFile: string;
    static enableBinaryLog: boolean;
    static enabled: boolean;
    static maxNumberOfSamplesPerFrame: number;
    static readonly usedHeapSize: number;
    // fields
  }
}
declare namespace UnityEngine.Profiling {
  class Sampler extends System.Object {
    // constructors
    protected constructor();
    // methods
    // properties
    readonly name: string;
    enabled: boolean;
    // fields
  }
}
declare namespace UnityEngine {
  class Projector extends UnityEngine.Behaviour {
    // constructors
    constructor();
    // methods
    // properties
    nearClipPlane: number;
    farClipPlane: number;
    fieldOfView: number;
    aspectRatio: number;
    orthographic: boolean;
    orthographicSize: number;
    ignoreLayers: number;
    material: UnityEngine.Material;
    isOrthoGraphic: boolean;
    orthoGraphicSize: number;
    // fields
  }
}
declare namespace UnityEngine {
  class PropertyAttribute extends System.Attribute {
    // constructors
    protected constructor();
    // methods
    // properties
    order: number;
    // fields
  }
}
declare namespace UnityEngine {
  class QualityLevel extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Fastest: UnityEngine.QualityLevel;
    static Fast: UnityEngine.QualityLevel;
    static Simple: UnityEngine.QualityLevel;
    static Good: UnityEngine.QualityLevel;
    static Beautiful: UnityEngine.QualityLevel;
    static Fantastic: UnityEngine.QualityLevel;
  }
}
declare namespace UnityEngine {
  class QualitySettings extends UnityEngine.Object {
    // constructors
    constructor();
    // methods
    static GetQualityLevel(): number;
    static SetQualityLevel(index: number, applyExpensiveChanges: boolean): void;
    static SetQualityLevel(index: number): void;
    static IncreaseLevel(applyExpensiveChanges: boolean): void;
    static IncreaseLevel(): void;
    static DecreaseLevel(applyExpensiveChanges: boolean): void;
    static DecreaseLevel(): void;
    // properties
    static readonly names: string[];
    static currentLevel: UnityEngine.QualityLevel;
    static pixelLightCount: number;
    static shadows: UnityEngine.ShadowQuality;
    static shadowProjection: UnityEngine.ShadowProjection;
    static shadowCascades: number;
    static shadowDistance: number;
    static shadowResolution: UnityEngine.ShadowResolution;
    static shadowNearPlaneOffset: number;
    static shadowCascade2Split: number;
    static shadowCascade4Split: UnityEngine.Vector3;
    static masterTextureLimit: number;
    static anisotropicFiltering: UnityEngine.AnisotropicFiltering;
    static lodBias: number;
    static maximumLODLevel: number;
    static particleRaycastBudget: number;
    static softParticles: boolean;
    static softVegetation: boolean;
    static realtimeReflectionProbes: boolean;
    static billboardsFaceCameraPosition: boolean;
    static maxQueuedFrames: number;
    static vSyncCount: number;
    static antiAliasing: number;
    static readonly desiredColorSpace: UnityEngine.ColorSpace;
    static readonly activeColorSpace: UnityEngine.ColorSpace;
    static blendWeights: UnityEngine.BlendWeights;
    static asyncUploadTimeSlice: number;
    static asyncUploadBufferSize: number;
    // fields
  }
}
declare namespace UnityEngine {
  class Quaternion extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    static AngleAxis(angle: number, axis: UnityEngine.Vector3): UnityEngine.Quaternion;
    ToAngleAxis(angle: any, axis: any): void;
    static FromToRotation(fromDirection: UnityEngine.Vector3, toDirection: UnityEngine.Vector3): UnityEngine.Quaternion;
    SetFromToRotation(fromDirection: UnityEngine.Vector3, toDirection: UnityEngine.Vector3): void;
    static LookRotation(forward: UnityEngine.Vector3, upwards: UnityEngine.Vector3): UnityEngine.Quaternion;
    static LookRotation(forward: UnityEngine.Vector3): UnityEngine.Quaternion;
    static Slerp(a: UnityEngine.Quaternion, b: UnityEngine.Quaternion, t: number): UnityEngine.Quaternion;
    static SlerpUnclamped(a: UnityEngine.Quaternion, b: UnityEngine.Quaternion, t: number): UnityEngine.Quaternion;
    static Lerp(a: UnityEngine.Quaternion, b: UnityEngine.Quaternion, t: number): UnityEngine.Quaternion;
    static LerpUnclamped(a: UnityEngine.Quaternion, b: UnityEngine.Quaternion, t: number): UnityEngine.Quaternion;
    static RotateTowards(from: UnityEngine.Quaternion, to: UnityEngine.Quaternion, maxDegreesDelta: number): UnityEngine.Quaternion;
    static Inverse(rotation: UnityEngine.Quaternion): UnityEngine.Quaternion;
    static Euler(x: number, y: number, z: number): UnityEngine.Quaternion;
    static Euler(euler: UnityEngine.Vector3): UnityEngine.Quaternion;
    static EulerRotation(x: number, y: number, z: number): UnityEngine.Quaternion;
    static EulerRotation(euler: UnityEngine.Vector3): UnityEngine.Quaternion;
    SetEulerRotation(x: number, y: number, z: number): void;
    SetEulerRotation(euler: UnityEngine.Vector3): void;
    ToEuler(): UnityEngine.Vector3;
    static EulerAngles(x: number, y: number, z: number): UnityEngine.Quaternion;
    static EulerAngles(euler: UnityEngine.Vector3): UnityEngine.Quaternion;
    ToAxisAngle(axis: any, angle: any): void;
    SetEulerAngles(x: number, y: number, z: number): void;
    SetEulerAngles(euler: UnityEngine.Vector3): void;
    static ToEulerAngles(rotation: UnityEngine.Quaternion): UnityEngine.Vector3;
    ToEulerAngles(): UnityEngine.Vector3;
    static AxisAngle(axis: UnityEngine.Vector3, angle: number): UnityEngine.Quaternion;
    SetAxisAngle(axis: UnityEngine.Vector3, angle: number): void;
    Set(new_x: number, new_y: number, new_z: number, new_w: number): void;
    static Dot(a: UnityEngine.Quaternion, b: UnityEngine.Quaternion): number;
    SetLookRotation(view: UnityEngine.Vector3): void;
    SetLookRotation(view: UnityEngine.Vector3, up: UnityEngine.Vector3): void;
    static Angle(a: UnityEngine.Quaternion, b: UnityEngine.Quaternion): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    ToString(): string;
    ToString(format: string): string;
    // properties
    eulerAngles: UnityEngine.Vector3;
    get_Item(index: number): number;
    set_Item(index: number, value: number): void;
    static readonly identity: UnityEngine.Quaternion;
    // fields
    x: number;
    y: number;
    z: number;
    w: number;
    static kEpsilon: number;
  }
}
declare namespace UnityEngine {
  class QueryTriggerInteraction extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static UseGlobal: UnityEngine.QueryTriggerInteraction;
    static Ignore: UnityEngine.QueryTriggerInteraction;
    static Collide: UnityEngine.QueryTriggerInteraction;
  }
}
declare namespace UnityEngine {
  class QueueMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static CompleteOthers: UnityEngine.QueueMode;
    static PlayNow: UnityEngine.QueueMode;
  }
}
declare namespace UnityEngine {
  class Random extends System.Object {
    // constructors
    constructor();
    // methods
    static InitState(seed: number): void;
    static Range(min: number, max: number): number;
    static Range(min: number, max: number): number;
    static RandomRange(min: number, max: number): number;
    static RandomRange(min: number, max: number): number;
    static ColorHSV(): UnityEngine.Color;
    static ColorHSV(hueMin: number, hueMax: number): UnityEngine.Color;
    static ColorHSV(hueMin: number, hueMax: number, saturationMin: number, saturationMax: number): UnityEngine.Color;
    static ColorHSV(hueMin: number, hueMax: number, saturationMin: number, saturationMax: number, valueMin: number, valueMax: number): UnityEngine.Color;
    static ColorHSV(hueMin: number, hueMax: number, saturationMin: number, saturationMax: number, valueMin: number, valueMax: number, alphaMin: number, alphaMax: number): UnityEngine.Color;
    // properties
    static seed: number;
    static state: UnityEngine.Random.State;
    static readonly value: number;
    static readonly insideUnitSphere: UnityEngine.Vector3;
    static readonly insideUnitCircle: UnityEngine.Vector2;
    static readonly onUnitSphere: UnityEngine.Vector3;
    static readonly rotation: UnityEngine.Quaternion;
    static readonly rotationUniform: UnityEngine.Quaternion;
    // fields
  }
}
declare namespace UnityEngine.Random {
  class State extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class RangeAttribute extends UnityEngine.PropertyAttribute {
    // constructors
    constructor(min: number, max: number);
    // methods
    // properties
    // fields
    min: number;
    max: number;
  }
}
declare namespace UnityEngine {
  class Ray extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    GetPoint(distance: number): UnityEngine.Vector3;
    ToString(): string;
    ToString(format: string): string;
    // properties
    origin: UnityEngine.Vector3;
    direction: UnityEngine.Vector3;
    // fields
  }
}
declare namespace UnityEngine {
  class Ray2D extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    GetPoint(distance: number): UnityEngine.Vector2;
    ToString(): string;
    ToString(format: string): string;
    // properties
    origin: UnityEngine.Vector2;
    direction: UnityEngine.Vector2;
    // fields
  }
}
declare namespace UnityEngine {
  class RaycastHit extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    point: UnityEngine.Vector3;
    normal: UnityEngine.Vector3;
    barycentricCoordinate: UnityEngine.Vector3;
    distance: number;
    readonly triangleIndex: number;
    readonly textureCoord: UnityEngine.Vector2;
    readonly textureCoord2: UnityEngine.Vector2;
    readonly textureCoord1: UnityEngine.Vector2;
    readonly lightmapCoord: UnityEngine.Vector2;
    readonly collider: UnityEngine.Collider;
    readonly rigidbody: UnityEngine.Rigidbody;
    readonly transform: UnityEngine.Transform;
    // fields
  }
}
declare namespace UnityEngine {
  class RaycastHit2D extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    CompareTo(other: UnityEngine.RaycastHit2D): number;
    // properties
    centroid: UnityEngine.Vector2;
    point: UnityEngine.Vector2;
    normal: UnityEngine.Vector2;
    distance: number;
    fraction: number;
    readonly collider: UnityEngine.Collider2D;
    readonly rigidbody: UnityEngine.Rigidbody2D;
    readonly transform: UnityEngine.Transform;
    // fields
  }
}
declare namespace UnityEngine {
  class Rect extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    static MinMaxRect(xmin: number, ymin: number, xmax: number, ymax: number): UnityEngine.Rect;
    Set(x: number, y: number, width: number, height: number): void;
    Contains(point: UnityEngine.Vector2): boolean;
    Contains(point: UnityEngine.Vector3): boolean;
    Contains(point: UnityEngine.Vector3, allowInverse: boolean): boolean;
    Overlaps(other: UnityEngine.Rect): boolean;
    Overlaps(other: UnityEngine.Rect, allowInverse: boolean): boolean;
    static NormalizedToPoint(rectangle: UnityEngine.Rect, normalizedRectCoordinates: UnityEngine.Vector2): UnityEngine.Vector2;
    static PointToNormalized(rectangle: UnityEngine.Rect, point: UnityEngine.Vector2): UnityEngine.Vector2;
    GetHashCode(): number;
    Equals(other: any): boolean;
    ToString(): string;
    ToString(format: string): string;
    // properties
    static readonly zero: UnityEngine.Rect;
    x: number;
    y: number;
    position: UnityEngine.Vector2;
    center: UnityEngine.Vector2;
    min: UnityEngine.Vector2;
    max: UnityEngine.Vector2;
    width: number;
    height: number;
    size: UnityEngine.Vector2;
    xMin: number;
    yMin: number;
    xMax: number;
    yMax: number;
    readonly left: number;
    readonly right: number;
    readonly top: number;
    readonly bottom: number;
    // fields
  }
}
declare namespace UnityEngine {
  class RectOffset extends System.Object {
    // constructors
    constructor();
    constructor(left: number, right: number, top: number, bottom: number);
    // methods
    Add(rect: UnityEngine.Rect): UnityEngine.Rect;
    Remove(rect: UnityEngine.Rect): UnityEngine.Rect;
    ToString(): string;
    // properties
    left: number;
    right: number;
    top: number;
    bottom: number;
    readonly horizontal: number;
    readonly vertical: number;
    // fields
  }
}
declare namespace UnityEngine.RectTransform {
  class Axis extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Horizontal: UnityEngine.RectTransform.Axis;
    static Vertical: UnityEngine.RectTransform.Axis;
  }
}
declare namespace UnityEngine {
  class RectTransform extends UnityEngine.Transform {
    // constructors
    constructor();
    // methods
    GetLocalCorners(fourCornersArray: UnityEngine.Vector3[]): void;
    GetWorldCorners(fourCornersArray: UnityEngine.Vector3[]): void;
    SetInsetAndSizeFromParentEdge(edge: UnityEngine.RectTransform.Edge, inset: number, size: number): void;
    SetSizeWithCurrentAnchors(axis: UnityEngine.RectTransform.Axis, size: number): void;
    // properties
    readonly rect: UnityEngine.Rect;
    anchorMin: UnityEngine.Vector2;
    anchorMax: UnityEngine.Vector2;
    anchoredPosition3D: UnityEngine.Vector3;
    anchoredPosition: UnityEngine.Vector2;
    sizeDelta: UnityEngine.Vector2;
    pivot: UnityEngine.Vector2;
    offsetMin: UnityEngine.Vector2;
    offsetMax: UnityEngine.Vector2;
    // fields
  }
}
declare namespace UnityEngine.RectTransform {
  class Edge extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Left: UnityEngine.RectTransform.Edge;
    static Right: UnityEngine.RectTransform.Edge;
    static Top: UnityEngine.RectTransform.Edge;
    static Bottom: UnityEngine.RectTransform.Edge;
  }
}
declare namespace UnityEngine {
  class RectTransformUtility extends System.Object {
    // constructors
    protected constructor();
    // methods
    static RectangleContainsScreenPoint(rect: UnityEngine.RectTransform, screenPoint: UnityEngine.Vector2): boolean;
    static RectangleContainsScreenPoint(rect: UnityEngine.RectTransform, screenPoint: UnityEngine.Vector2, cam: UnityEngine.Camera): boolean;
    static ScreenPointToWorldPointInRectangle(rect: UnityEngine.RectTransform, screenPoint: UnityEngine.Vector2, cam: UnityEngine.Camera, worldPoint: any): boolean;
    static ScreenPointToLocalPointInRectangle(rect: UnityEngine.RectTransform, screenPoint: UnityEngine.Vector2, cam: UnityEngine.Camera, localPoint: any): boolean;
    static ScreenPointToRay(cam: UnityEngine.Camera, screenPos: UnityEngine.Vector2): UnityEngine.Ray;
    static WorldToScreenPoint(cam: UnityEngine.Camera, worldPoint: UnityEngine.Vector3): UnityEngine.Vector2;
    static CalculateRelativeRectTransformBounds(root: UnityEngine.Transform, child: UnityEngine.Transform): UnityEngine.Bounds;
    static CalculateRelativeRectTransformBounds(trans: UnityEngine.Transform): UnityEngine.Bounds;
    static FlipLayoutOnAxis(rect: UnityEngine.RectTransform, axis: number, keepPositioning: boolean, recursive: boolean): void;
    static FlipLayoutAxes(rect: UnityEngine.RectTransform, keepPositioning: boolean, recursive: boolean): void;
    static PixelAdjustPoint(point: UnityEngine.Vector2, elementTransform: UnityEngine.Transform, canvas: UnityEngine.Canvas): UnityEngine.Vector2;
    static PixelAdjustRect(rectTransform: UnityEngine.RectTransform, canvas: UnityEngine.Canvas): UnityEngine.Rect;
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class ReflectionProbe extends UnityEngine.Behaviour {
    // constructors
    constructor();
    // methods
    RenderProbe(targetTexture: UnityEngine.RenderTexture): number;
    RenderProbe(): number;
    IsFinishedRendering(renderId: number): boolean;
    static BlendCubemap(src: UnityEngine.Texture, dst: UnityEngine.Texture, blend: number, target: UnityEngine.RenderTexture): boolean;
    // properties
    type: UnityEngine.Rendering.ReflectionProbeType;
    hdr: boolean;
    size: UnityEngine.Vector3;
    center: UnityEngine.Vector3;
    nearClipPlane: number;
    farClipPlane: number;
    shadowDistance: number;
    resolution: number;
    cullingMask: number;
    clearFlags: UnityEngine.Rendering.ReflectionProbeClearFlags;
    backgroundColor: UnityEngine.Color;
    intensity: number;
    blendDistance: number;
    boxProjection: boolean;
    readonly bounds: UnityEngine.Bounds;
    mode: UnityEngine.Rendering.ReflectionProbeMode;
    importance: number;
    refreshMode: UnityEngine.Rendering.ReflectionProbeRefreshMode;
    timeSlicingMode: UnityEngine.Rendering.ReflectionProbeTimeSlicingMode;
    bakedTexture: UnityEngine.Texture;
    customBakedTexture: UnityEngine.Texture;
    readonly texture: UnityEngine.Texture;
    static readonly minBakedCubemapResolution: number;
    static readonly maxBakedCubemapResolution: number;
    // fields
  }
}
declare namespace UnityEngine {
  class RelativeJoint2D extends UnityEngine.Joint2D {
    // constructors
    constructor();
    // methods
    // properties
    maxForce: number;
    maxTorque: number;
    correctionScale: number;
    autoConfigureOffset: boolean;
    linearOffset: UnityEngine.Vector2;
    angularOffset: number;
    readonly target: UnityEngine.Vector2;
    // fields
  }
}
declare namespace UnityEngine {
  class RemoteNotification extends System.Object {
    // constructors
    constructor();
    // methods
    // properties
    readonly alertBody: string;
    readonly hasAction: boolean;
    readonly applicationIconBadgeNumber: number;
    readonly soundName: string;
    readonly userInfo: any;
    // fields
  }
}
declare namespace UnityEngine {
  class RemoteNotificationType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static None: UnityEngine.RemoteNotificationType;
    static Badge: UnityEngine.RemoteNotificationType;
    static Sound: UnityEngine.RemoteNotificationType;
    static Alert: UnityEngine.RemoteNotificationType;
  }
}
declare namespace UnityEngine {
  class RemoteSettings extends System.Object {
    // constructors
    constructor();
    // methods
    static CallOnUpdate(): void;
    static GetInt(key: string, defaultValue: number): number;
    static GetInt(key: string): number;
    static GetFloat(key: string, defaultValue: number): number;
    static GetFloat(key: string): number;
    static GetString(key: string, defaultValue: string): string;
    static GetString(key: string): string;
    static GetBool(key: string, defaultValue: boolean): boolean;
    static GetBool(key: string): boolean;
    static HasKey(key: string): boolean;
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class RenderBuffer extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    GetNativeRenderBufferPtr(): any;
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class RenderBufferHelper extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class Renderer extends UnityEngine.Component {
    // constructors
    constructor();
    // methods
    SetPropertyBlock(properties: UnityEngine.MaterialPropertyBlock): void;
    GetPropertyBlock(dest: UnityEngine.MaterialPropertyBlock): void;
    GetClosestReflectionProbes(result: UnityEngine.Rendering.ReflectionProbeBlendInfo[]): void;
    // properties
    readonly isPartOfStaticBatch: boolean;
    readonly worldToLocalMatrix: UnityEngine.Matrix4x4;
    readonly localToWorldMatrix: UnityEngine.Matrix4x4;
    enabled: boolean;
    shadowCastingMode: UnityEngine.Rendering.ShadowCastingMode;
    castShadows: boolean;
    receiveShadows: boolean;
    material: UnityEngine.Material;
    sharedMaterial: UnityEngine.Material;
    materials: UnityEngine.Material[];
    sharedMaterials: UnityEngine.Material[];
    readonly bounds: UnityEngine.Bounds;
    lightmapIndex: number;
    realtimeLightmapIndex: number;
    lightmapScaleOffset: UnityEngine.Vector4;
    motionVectorGenerationMode: UnityEngine.MotionVectorGenerationMode;
    realtimeLightmapScaleOffset: UnityEngine.Vector4;
    readonly isVisible: boolean;
    useLightProbes: boolean;
    lightProbeUsage: UnityEngine.Rendering.LightProbeUsage;
    lightProbeProxyVolumeOverride: UnityEngine.GameObject;
    probeAnchor: UnityEngine.Transform;
    reflectionProbeUsage: UnityEngine.Rendering.ReflectionProbeUsage;
    sortingLayerName: string;
    sortingLayerID: number;
    sortingOrder: number;
    lightmapTilingOffset: UnityEngine.Vector4;
    lightProbeAnchor: UnityEngine.Transform;
    // fields
  }
}
declare namespace UnityEngine.Rendering {
  class AmbientMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Skybox: UnityEngine.Rendering.AmbientMode;
    static Trilight: UnityEngine.Rendering.AmbientMode;
    static Flat: UnityEngine.Rendering.AmbientMode;
    static Custom: UnityEngine.Rendering.AmbientMode;
  }
}
declare namespace UnityEngine.Rendering {
  class BlendMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Zero: UnityEngine.Rendering.BlendMode;
    static One: UnityEngine.Rendering.BlendMode;
    static DstColor: UnityEngine.Rendering.BlendMode;
    static SrcColor: UnityEngine.Rendering.BlendMode;
    static OneMinusDstColor: UnityEngine.Rendering.BlendMode;
    static SrcAlpha: UnityEngine.Rendering.BlendMode;
    static OneMinusSrcColor: UnityEngine.Rendering.BlendMode;
    static DstAlpha: UnityEngine.Rendering.BlendMode;
    static OneMinusDstAlpha: UnityEngine.Rendering.BlendMode;
    static SrcAlphaSaturate: UnityEngine.Rendering.BlendMode;
    static OneMinusSrcAlpha: UnityEngine.Rendering.BlendMode;
  }
}
declare namespace UnityEngine.Rendering {
  class BlendOp extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Add: UnityEngine.Rendering.BlendOp;
    static Subtract: UnityEngine.Rendering.BlendOp;
    static ReverseSubtract: UnityEngine.Rendering.BlendOp;
    static Min: UnityEngine.Rendering.BlendOp;
    static Max: UnityEngine.Rendering.BlendOp;
    static LogicalClear: UnityEngine.Rendering.BlendOp;
    static LogicalSet: UnityEngine.Rendering.BlendOp;
    static LogicalCopy: UnityEngine.Rendering.BlendOp;
    static LogicalCopyInverted: UnityEngine.Rendering.BlendOp;
    static LogicalNoop: UnityEngine.Rendering.BlendOp;
    static LogicalInvert: UnityEngine.Rendering.BlendOp;
    static LogicalAnd: UnityEngine.Rendering.BlendOp;
    static LogicalNand: UnityEngine.Rendering.BlendOp;
    static LogicalOr: UnityEngine.Rendering.BlendOp;
    static LogicalNor: UnityEngine.Rendering.BlendOp;
    static LogicalXor: UnityEngine.Rendering.BlendOp;
    static LogicalEquivalence: UnityEngine.Rendering.BlendOp;
    static LogicalAndReverse: UnityEngine.Rendering.BlendOp;
    static LogicalAndInverted: UnityEngine.Rendering.BlendOp;
    static LogicalOrReverse: UnityEngine.Rendering.BlendOp;
    static LogicalOrInverted: UnityEngine.Rendering.BlendOp;
    static Multiply: UnityEngine.Rendering.BlendOp;
    static Screen: UnityEngine.Rendering.BlendOp;
    static Overlay: UnityEngine.Rendering.BlendOp;
    static Darken: UnityEngine.Rendering.BlendOp;
    static Lighten: UnityEngine.Rendering.BlendOp;
    static ColorDodge: UnityEngine.Rendering.BlendOp;
    static ColorBurn: UnityEngine.Rendering.BlendOp;
    static HardLight: UnityEngine.Rendering.BlendOp;
    static SoftLight: UnityEngine.Rendering.BlendOp;
    static Difference: UnityEngine.Rendering.BlendOp;
    static Exclusion: UnityEngine.Rendering.BlendOp;
    static HSLHue: UnityEngine.Rendering.BlendOp;
    static HSLSaturation: UnityEngine.Rendering.BlendOp;
    static HSLColor: UnityEngine.Rendering.BlendOp;
    static HSLLuminosity: UnityEngine.Rendering.BlendOp;
  }
}
declare namespace UnityEngine.Rendering {
  class BuiltinRenderTextureType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static BindableTexture: UnityEngine.Rendering.BuiltinRenderTextureType;
    static None: UnityEngine.Rendering.BuiltinRenderTextureType;
    static CurrentActive: UnityEngine.Rendering.BuiltinRenderTextureType;
    static CameraTarget: UnityEngine.Rendering.BuiltinRenderTextureType;
    static Depth: UnityEngine.Rendering.BuiltinRenderTextureType;
    static DepthNormals: UnityEngine.Rendering.BuiltinRenderTextureType;
    static ResolvedDepth: UnityEngine.Rendering.BuiltinRenderTextureType;
    static PrepassNormalsSpec: UnityEngine.Rendering.BuiltinRenderTextureType;
    static PrepassLight: UnityEngine.Rendering.BuiltinRenderTextureType;
    static PrepassLightSpec: UnityEngine.Rendering.BuiltinRenderTextureType;
    static GBuffer0: UnityEngine.Rendering.BuiltinRenderTextureType;
    static GBuffer1: UnityEngine.Rendering.BuiltinRenderTextureType;
    static GBuffer2: UnityEngine.Rendering.BuiltinRenderTextureType;
    static GBuffer3: UnityEngine.Rendering.BuiltinRenderTextureType;
    static Reflections: UnityEngine.Rendering.BuiltinRenderTextureType;
  }
}
declare namespace UnityEngine.Rendering {
  class BuiltinShaderMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Disabled: UnityEngine.Rendering.BuiltinShaderMode;
    static UseBuiltin: UnityEngine.Rendering.BuiltinShaderMode;
    static UseCustom: UnityEngine.Rendering.BuiltinShaderMode;
  }
}
declare namespace UnityEngine.Rendering {
  class BuiltinShaderType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static DeferredShading: UnityEngine.Rendering.BuiltinShaderType;
    static DeferredReflections: UnityEngine.Rendering.BuiltinShaderType;
    static LegacyDeferredLighting: UnityEngine.Rendering.BuiltinShaderType;
    static ScreenSpaceShadows: UnityEngine.Rendering.BuiltinShaderType;
    static DepthNormals: UnityEngine.Rendering.BuiltinShaderType;
    static LightHalo: UnityEngine.Rendering.BuiltinShaderType;
    static LensFlare: UnityEngine.Rendering.BuiltinShaderType;
    static Sprite: UnityEngine.Rendering.BuiltinShaderType;
    static MotionVectors: UnityEngine.Rendering.BuiltinShaderType;
  }
}
declare namespace UnityEngine.Rendering {
  class CameraEvent extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static BeforeDepthTexture: UnityEngine.Rendering.CameraEvent;
    static AfterDepthTexture: UnityEngine.Rendering.CameraEvent;
    static BeforeDepthNormalsTexture: UnityEngine.Rendering.CameraEvent;
    static AfterDepthNormalsTexture: UnityEngine.Rendering.CameraEvent;
    static BeforeGBuffer: UnityEngine.Rendering.CameraEvent;
    static AfterGBuffer: UnityEngine.Rendering.CameraEvent;
    static BeforeLighting: UnityEngine.Rendering.CameraEvent;
    static AfterLighting: UnityEngine.Rendering.CameraEvent;
    static BeforeFinalPass: UnityEngine.Rendering.CameraEvent;
    static AfterFinalPass: UnityEngine.Rendering.CameraEvent;
    static BeforeForwardOpaque: UnityEngine.Rendering.CameraEvent;
    static AfterForwardOpaque: UnityEngine.Rendering.CameraEvent;
    static BeforeImageEffectsOpaque: UnityEngine.Rendering.CameraEvent;
    static AfterImageEffectsOpaque: UnityEngine.Rendering.CameraEvent;
    static BeforeSkybox: UnityEngine.Rendering.CameraEvent;
    static AfterSkybox: UnityEngine.Rendering.CameraEvent;
    static BeforeForwardAlpha: UnityEngine.Rendering.CameraEvent;
    static AfterForwardAlpha: UnityEngine.Rendering.CameraEvent;
    static BeforeImageEffects: UnityEngine.Rendering.CameraEvent;
    static AfterImageEffects: UnityEngine.Rendering.CameraEvent;
    static AfterEverything: UnityEngine.Rendering.CameraEvent;
    static BeforeReflections: UnityEngine.Rendering.CameraEvent;
    static AfterReflections: UnityEngine.Rendering.CameraEvent;
  }
}
declare namespace UnityEngine.Rendering {
  class ColorWriteMask extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Alpha: UnityEngine.Rendering.ColorWriteMask;
    static Blue: UnityEngine.Rendering.ColorWriteMask;
    static Green: UnityEngine.Rendering.ColorWriteMask;
    static Red: UnityEngine.Rendering.ColorWriteMask;
    static All: UnityEngine.Rendering.ColorWriteMask;
  }
}
declare namespace UnityEngine.Rendering {
  class CommandBuffer extends System.Object {
    // constructors
    constructor();
    // methods
    Dispose(): void;
    Release(): void;
    Clear(): void;
    DrawMesh(mesh: UnityEngine.Mesh, matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material, submeshIndex: number, shaderPass: number): void;
    DrawMesh(mesh: UnityEngine.Mesh, matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material, submeshIndex: number): void;
    DrawMesh(mesh: UnityEngine.Mesh, matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material): void;
    DrawMesh(mesh: UnityEngine.Mesh, matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material, submeshIndex: number, shaderPass: number, properties: UnityEngine.MaterialPropertyBlock): void;
    DrawRenderer(renderer: UnityEngine.Renderer, material: UnityEngine.Material, submeshIndex: number): void;
    DrawRenderer(renderer: UnityEngine.Renderer, material: UnityEngine.Material): void;
    DrawRenderer(renderer: UnityEngine.Renderer, material: UnityEngine.Material, submeshIndex: number, shaderPass: number): void;
    DrawProcedural(matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material, shaderPass: number, topology: UnityEngine.MeshTopology, vertexCount: number, instanceCount: number): void;
    DrawProcedural(matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material, shaderPass: number, topology: UnityEngine.MeshTopology, vertexCount: number): void;
    DrawProcedural(matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material, shaderPass: number, topology: UnityEngine.MeshTopology, vertexCount: number, instanceCount: number, properties: UnityEngine.MaterialPropertyBlock): void;
    DrawProceduralIndirect(matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material, shaderPass: number, topology: UnityEngine.MeshTopology, bufferWithArgs: UnityEngine.ComputeBuffer, argsOffset: number): void;
    DrawProceduralIndirect(matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material, shaderPass: number, topology: UnityEngine.MeshTopology, bufferWithArgs: UnityEngine.ComputeBuffer): void;
    DrawProceduralIndirect(matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material, shaderPass: number, topology: UnityEngine.MeshTopology, bufferWithArgs: UnityEngine.ComputeBuffer, argsOffset: number, properties: UnityEngine.MaterialPropertyBlock): void;
    DrawMeshInstanced(mesh: UnityEngine.Mesh, submeshIndex: number, material: UnityEngine.Material, shaderPass: number, matrices: UnityEngine.Matrix4x4[], count: number): void;
    DrawMeshInstanced(mesh: UnityEngine.Mesh, submeshIndex: number, material: UnityEngine.Material, shaderPass: number, matrices: UnityEngine.Matrix4x4[]): void;
    DrawMeshInstanced(mesh: UnityEngine.Mesh, submeshIndex: number, material: UnityEngine.Material, shaderPass: number, matrices: UnityEngine.Matrix4x4[], count: number, properties: UnityEngine.MaterialPropertyBlock): void;
    SetRenderTarget(rt: UnityEngine.Rendering.RenderTargetIdentifier): void;
    SetRenderTarget(rt: UnityEngine.Rendering.RenderTargetIdentifier, mipLevel: number): void;
    SetRenderTarget(rt: UnityEngine.Rendering.RenderTargetIdentifier, mipLevel: number, cubemapFace: UnityEngine.CubemapFace): void;
    SetRenderTarget(rt: UnityEngine.Rendering.RenderTargetIdentifier, mipLevel: number, cubemapFace: UnityEngine.CubemapFace, depthSlice: number): void;
    SetRenderTarget(color: UnityEngine.Rendering.RenderTargetIdentifier, depth: UnityEngine.Rendering.RenderTargetIdentifier): void;
    SetRenderTarget(color: UnityEngine.Rendering.RenderTargetIdentifier, depth: UnityEngine.Rendering.RenderTargetIdentifier, mipLevel: number): void;
    SetRenderTarget(color: UnityEngine.Rendering.RenderTargetIdentifier, depth: UnityEngine.Rendering.RenderTargetIdentifier, mipLevel: number, cubemapFace: UnityEngine.CubemapFace): void;
    SetRenderTarget(color: UnityEngine.Rendering.RenderTargetIdentifier, depth: UnityEngine.Rendering.RenderTargetIdentifier, mipLevel: number, cubemapFace: UnityEngine.CubemapFace, depthSlice: number): void;
    SetRenderTarget(colors: UnityEngine.Rendering.RenderTargetIdentifier[], depth: UnityEngine.Rendering.RenderTargetIdentifier): void;
    Blit(source: UnityEngine.Texture, dest: UnityEngine.Rendering.RenderTargetIdentifier): void;
    Blit(source: UnityEngine.Texture, dest: UnityEngine.Rendering.RenderTargetIdentifier, mat: UnityEngine.Material): void;
    Blit(source: UnityEngine.Texture, dest: UnityEngine.Rendering.RenderTargetIdentifier, mat: UnityEngine.Material, pass: number): void;
    Blit(source: UnityEngine.Rendering.RenderTargetIdentifier, dest: UnityEngine.Rendering.RenderTargetIdentifier): void;
    Blit(source: UnityEngine.Rendering.RenderTargetIdentifier, dest: UnityEngine.Rendering.RenderTargetIdentifier, mat: UnityEngine.Material): void;
    Blit(source: UnityEngine.Rendering.RenderTargetIdentifier, dest: UnityEngine.Rendering.RenderTargetIdentifier, mat: UnityEngine.Material, pass: number): void;
    GetTemporaryRT(nameID: number, width: number, height: number, depthBuffer: number, filter: UnityEngine.FilterMode, format: UnityEngine.RenderTextureFormat, readWrite: UnityEngine.RenderTextureReadWrite, antiAliasing: number): void;
    GetTemporaryRT(nameID: number, width: number, height: number, depthBuffer: number, filter: UnityEngine.FilterMode, format: UnityEngine.RenderTextureFormat, readWrite: UnityEngine.RenderTextureReadWrite): void;
    GetTemporaryRT(nameID: number, width: number, height: number, depthBuffer: number, filter: UnityEngine.FilterMode, format: UnityEngine.RenderTextureFormat): void;
    GetTemporaryRT(nameID: number, width: number, height: number, depthBuffer: number, filter: UnityEngine.FilterMode): void;
    GetTemporaryRT(nameID: number, width: number, height: number, depthBuffer: number): void;
    GetTemporaryRT(nameID: number, width: number, height: number): void;
    ReleaseTemporaryRT(nameID: number): void;
    ClearRenderTarget(clearDepth: boolean, clearColor: boolean, backgroundColor: UnityEngine.Color, depth: number): void;
    ClearRenderTarget(clearDepth: boolean, clearColor: boolean, backgroundColor: UnityEngine.Color): void;
    SetGlobalFloat(name: string, value: number): void;
    SetGlobalFloat(nameID: number, value: number): void;
    SetGlobalVector(name: string, value: UnityEngine.Vector4): void;
    SetGlobalVector(nameID: number, value: UnityEngine.Vector4): void;
    SetGlobalColor(name: string, value: UnityEngine.Color): void;
    SetGlobalColor(nameID: number, value: UnityEngine.Color): void;
    SetGlobalMatrix(name: string, value: UnityEngine.Matrix4x4): void;
    SetGlobalMatrix(nameID: number, value: UnityEngine.Matrix4x4): void;
    SetGlobalFloatArray(propertyName: string, values: number[]): void;
    SetGlobalFloatArray(nameID: number, values: number[]): void;
    SetGlobalFloatArray(propertyName: string, values: number[]): void;
    SetGlobalFloatArray(nameID: number, values: number[]): void;
    SetGlobalVectorArray(propertyName: string, values: UnityEngine.Vector4[]): void;
    SetGlobalVectorArray(nameID: number, values: UnityEngine.Vector4[]): void;
    SetGlobalVectorArray(propertyName: string, values: UnityEngine.Vector4[]): void;
    SetGlobalVectorArray(nameID: number, values: UnityEngine.Vector4[]): void;
    SetGlobalMatrixArray(propertyName: string, values: UnityEngine.Matrix4x4[]): void;
    SetGlobalMatrixArray(nameID: number, values: UnityEngine.Matrix4x4[]): void;
    SetGlobalMatrixArray(propertyName: string, values: UnityEngine.Matrix4x4[]): void;
    SetGlobalMatrixArray(nameID: number, values: UnityEngine.Matrix4x4[]): void;
    SetGlobalTexture(name: string, value: UnityEngine.Rendering.RenderTargetIdentifier): void;
    SetGlobalTexture(nameID: number, value: UnityEngine.Rendering.RenderTargetIdentifier): void;
    SetGlobalBuffer(name: string, value: UnityEngine.ComputeBuffer): void;
    SetGlobalBuffer(nameID: number, value: UnityEngine.ComputeBuffer): void;
    SetShadowSamplingMode(shadowmap: UnityEngine.Rendering.RenderTargetIdentifier, mode: UnityEngine.Rendering.ShadowSamplingMode): void;
    IssuePluginEvent(callback: any, eventID: number): void;
    // properties
    name: string;
    readonly sizeInBytes: number;
    // fields
  }
}
declare namespace UnityEngine.Rendering {
  class CompareFunction extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Disabled: UnityEngine.Rendering.CompareFunction;
    static Never: UnityEngine.Rendering.CompareFunction;
    static Less: UnityEngine.Rendering.CompareFunction;
    static Equal: UnityEngine.Rendering.CompareFunction;
    static LessEqual: UnityEngine.Rendering.CompareFunction;
    static Greater: UnityEngine.Rendering.CompareFunction;
    static NotEqual: UnityEngine.Rendering.CompareFunction;
    static GreaterEqual: UnityEngine.Rendering.CompareFunction;
    static Always: UnityEngine.Rendering.CompareFunction;
  }
}
declare namespace UnityEngine.Rendering {
  class CopyTextureSupport extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static None: UnityEngine.Rendering.CopyTextureSupport;
    static Basic: UnityEngine.Rendering.CopyTextureSupport;
    static Copy3D: UnityEngine.Rendering.CopyTextureSupport;
    static DifferentTypes: UnityEngine.Rendering.CopyTextureSupport;
    static TextureToRT: UnityEngine.Rendering.CopyTextureSupport;
    static RTToTexture: UnityEngine.Rendering.CopyTextureSupport;
  }
}
declare namespace UnityEngine.Rendering {
  class CullMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Off: UnityEngine.Rendering.CullMode;
    static Front: UnityEngine.Rendering.CullMode;
    static Back: UnityEngine.Rendering.CullMode;
  }
}
declare namespace UnityEngine.Rendering {
  class DefaultReflectionMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Skybox: UnityEngine.Rendering.DefaultReflectionMode;
    static Custom: UnityEngine.Rendering.DefaultReflectionMode;
  }
}
declare namespace UnityEngine.Rendering {
  class GraphicsDeviceType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static OpenGL2: UnityEngine.Rendering.GraphicsDeviceType;
    static Direct3D9: UnityEngine.Rendering.GraphicsDeviceType;
    static Direct3D11: UnityEngine.Rendering.GraphicsDeviceType;
    static PlayStation3: UnityEngine.Rendering.GraphicsDeviceType;
    static Null: UnityEngine.Rendering.GraphicsDeviceType;
    static Xbox360: UnityEngine.Rendering.GraphicsDeviceType;
    static OpenGLES2: UnityEngine.Rendering.GraphicsDeviceType;
    static OpenGLES3: UnityEngine.Rendering.GraphicsDeviceType;
    static PlayStationVita: UnityEngine.Rendering.GraphicsDeviceType;
    static PlayStation4: UnityEngine.Rendering.GraphicsDeviceType;
    static XboxOne: UnityEngine.Rendering.GraphicsDeviceType;
    static PlayStationMobile: UnityEngine.Rendering.GraphicsDeviceType;
    static Metal: UnityEngine.Rendering.GraphicsDeviceType;
    static OpenGLCore: UnityEngine.Rendering.GraphicsDeviceType;
    static Direct3D12: UnityEngine.Rendering.GraphicsDeviceType;
    static N3DS: UnityEngine.Rendering.GraphicsDeviceType;
    static Vulkan: UnityEngine.Rendering.GraphicsDeviceType;
  }
}
declare namespace UnityEngine.Rendering {
  class GraphicsSettings extends UnityEngine.Object {
    // constructors
    constructor();
    // methods
    static SetShaderMode(type: UnityEngine.Rendering.BuiltinShaderType, mode: UnityEngine.Rendering.BuiltinShaderMode): void;
    static GetShaderMode(type: UnityEngine.Rendering.BuiltinShaderType): UnityEngine.Rendering.BuiltinShaderMode;
    static SetCustomShader(type: UnityEngine.Rendering.BuiltinShaderType, shader: UnityEngine.Shader): void;
    static GetCustomShader(type: UnityEngine.Rendering.BuiltinShaderType): UnityEngine.Shader;
    // properties
    // fields
  }
}
declare namespace UnityEngine.Rendering {
  class GraphicsTier extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Tier1: UnityEngine.Rendering.GraphicsTier;
    static Tier2: UnityEngine.Rendering.GraphicsTier;
    static Tier3: UnityEngine.Rendering.GraphicsTier;
  }
}
declare namespace UnityEngine.Rendering {
  class LightEvent extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static BeforeShadowMap: UnityEngine.Rendering.LightEvent;
    static AfterShadowMap: UnityEngine.Rendering.LightEvent;
    static BeforeScreenspaceMask: UnityEngine.Rendering.LightEvent;
    static AfterScreenspaceMask: UnityEngine.Rendering.LightEvent;
  }
}
declare namespace UnityEngine.Rendering {
  class LightProbeUsage extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Off: UnityEngine.Rendering.LightProbeUsage;
    static BlendProbes: UnityEngine.Rendering.LightProbeUsage;
    static UseProxyVolume: UnityEngine.Rendering.LightProbeUsage;
  }
}
declare namespace UnityEngine.Rendering {
  class LightShadowResolution extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static FromQualitySettings: UnityEngine.Rendering.LightShadowResolution;
    static Low: UnityEngine.Rendering.LightShadowResolution;
    static Medium: UnityEngine.Rendering.LightShadowResolution;
    static High: UnityEngine.Rendering.LightShadowResolution;
    static VeryHigh: UnityEngine.Rendering.LightShadowResolution;
  }
}
declare namespace UnityEngine.Rendering {
  class OpaqueSortMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Default: UnityEngine.Rendering.OpaqueSortMode;
    static FrontToBack: UnityEngine.Rendering.OpaqueSortMode;
    static NoDistanceSort: UnityEngine.Rendering.OpaqueSortMode;
  }
}
declare namespace UnityEngine.Rendering {
  class PassType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Normal: UnityEngine.Rendering.PassType;
    static Vertex: UnityEngine.Rendering.PassType;
    static VertexLM: UnityEngine.Rendering.PassType;
    static VertexLMRGBM: UnityEngine.Rendering.PassType;
    static ForwardBase: UnityEngine.Rendering.PassType;
    static ForwardAdd: UnityEngine.Rendering.PassType;
    static LightPrePassBase: UnityEngine.Rendering.PassType;
    static LightPrePassFinal: UnityEngine.Rendering.PassType;
    static ShadowCaster: UnityEngine.Rendering.PassType;
    static Deferred: UnityEngine.Rendering.PassType;
    static Meta: UnityEngine.Rendering.PassType;
    static MotionVectors: UnityEngine.Rendering.PassType;
  }
}
declare namespace UnityEngine.Rendering {
  class ReflectionCubemapCompression extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Uncompressed: UnityEngine.Rendering.ReflectionCubemapCompression;
    static Compressed: UnityEngine.Rendering.ReflectionCubemapCompression;
    static Auto: UnityEngine.Rendering.ReflectionCubemapCompression;
  }
}
declare namespace UnityEngine.Rendering {
  class ReflectionProbeBlendInfo extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    probe: UnityEngine.ReflectionProbe;
    weight: number;
  }
}
declare namespace UnityEngine.Rendering {
  class ReflectionProbeClearFlags extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Skybox: UnityEngine.Rendering.ReflectionProbeClearFlags;
    static SolidColor: UnityEngine.Rendering.ReflectionProbeClearFlags;
  }
}
declare namespace UnityEngine.Rendering {
  class ReflectionProbeMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Baked: UnityEngine.Rendering.ReflectionProbeMode;
    static Realtime: UnityEngine.Rendering.ReflectionProbeMode;
    static Custom: UnityEngine.Rendering.ReflectionProbeMode;
  }
}
declare namespace UnityEngine.Rendering {
  class ReflectionProbeRefreshMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static OnAwake: UnityEngine.Rendering.ReflectionProbeRefreshMode;
    static EveryFrame: UnityEngine.Rendering.ReflectionProbeRefreshMode;
    static ViaScripting: UnityEngine.Rendering.ReflectionProbeRefreshMode;
  }
}
declare namespace UnityEngine.Rendering {
  class ReflectionProbeTimeSlicingMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static AllFacesAtOnce: UnityEngine.Rendering.ReflectionProbeTimeSlicingMode;
    static IndividualFaces: UnityEngine.Rendering.ReflectionProbeTimeSlicingMode;
    static NoTimeSlicing: UnityEngine.Rendering.ReflectionProbeTimeSlicingMode;
  }
}
declare namespace UnityEngine.Rendering {
  class ReflectionProbeType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Cube: UnityEngine.Rendering.ReflectionProbeType;
    static Card: UnityEngine.Rendering.ReflectionProbeType;
  }
}
declare namespace UnityEngine.Rendering {
  class ReflectionProbeUsage extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Off: UnityEngine.Rendering.ReflectionProbeUsage;
    static BlendProbes: UnityEngine.Rendering.ReflectionProbeUsage;
    static BlendProbesAndSkybox: UnityEngine.Rendering.ReflectionProbeUsage;
    static Simple: UnityEngine.Rendering.ReflectionProbeUsage;
  }
}
declare namespace UnityEngine.Rendering {
  class RenderBufferLoadAction extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Load: UnityEngine.Rendering.RenderBufferLoadAction;
    static DontCare: UnityEngine.Rendering.RenderBufferLoadAction;
  }
}
declare namespace UnityEngine.Rendering {
  class RenderBufferStoreAction extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Store: UnityEngine.Rendering.RenderBufferStoreAction;
    static DontCare: UnityEngine.Rendering.RenderBufferStoreAction;
  }
}
declare namespace UnityEngine.Rendering {
  class RenderQueue extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Background: UnityEngine.Rendering.RenderQueue;
    static Geometry: UnityEngine.Rendering.RenderQueue;
    static AlphaTest: UnityEngine.Rendering.RenderQueue;
    static Transparent: UnityEngine.Rendering.RenderQueue;
    static Overlay: UnityEngine.Rendering.RenderQueue;
  }
}
declare namespace UnityEngine.Rendering {
  class RenderTargetIdentifier extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine.Rendering {
  class ShaderHardwareTier extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Tier1: UnityEngine.Rendering.ShaderHardwareTier;
    static Tier2: UnityEngine.Rendering.ShaderHardwareTier;
    static Tier3: UnityEngine.Rendering.ShaderHardwareTier;
  }
}
declare namespace UnityEngine.Rendering {
  class ShadowCastingMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Off: UnityEngine.Rendering.ShadowCastingMode;
    static On: UnityEngine.Rendering.ShadowCastingMode;
    static TwoSided: UnityEngine.Rendering.ShadowCastingMode;
    static ShadowsOnly: UnityEngine.Rendering.ShadowCastingMode;
  }
}
declare namespace UnityEngine.Rendering {
  class ShadowSamplingMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static CompareDepths: UnityEngine.Rendering.ShadowSamplingMode;
    static RawDepth: UnityEngine.Rendering.ShadowSamplingMode;
  }
}
declare namespace UnityEngine.Rendering {
  class SphericalHarmonicsL2 extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    Clear(): void;
    AddAmbientLight(color: UnityEngine.Color): void;
    AddDirectionalLight(direction: UnityEngine.Vector3, color: UnityEngine.Color, intensity: number): void;
    GetHashCode(): number;
    Equals(other: any): boolean;
    // properties
    get_Item(rgb: number, coefficient: number): number;
    set_Item(rgb: number, coefficient: number, value: number): void;
    // fields
  }
}
declare namespace UnityEngine.Rendering {
  class SplashScreen extends System.Object {
    // constructors
    constructor();
    // methods
    static Begin(): void;
    static Draw(): void;
    // properties
    static readonly isFinished: boolean;
    // fields
  }
}
declare namespace UnityEngine.Rendering {
  class StencilOp extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Keep: UnityEngine.Rendering.StencilOp;
    static Zero: UnityEngine.Rendering.StencilOp;
    static Replace: UnityEngine.Rendering.StencilOp;
    static IncrementSaturate: UnityEngine.Rendering.StencilOp;
    static DecrementSaturate: UnityEngine.Rendering.StencilOp;
    static Invert: UnityEngine.Rendering.StencilOp;
    static IncrementWrap: UnityEngine.Rendering.StencilOp;
    static DecrementWrap: UnityEngine.Rendering.StencilOp;
  }
}
declare namespace UnityEngine.Rendering {
  class TextureDimension extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Unknown: UnityEngine.Rendering.TextureDimension;
    static None: UnityEngine.Rendering.TextureDimension;
    static Any: UnityEngine.Rendering.TextureDimension;
    static Tex2D: UnityEngine.Rendering.TextureDimension;
    static Tex3D: UnityEngine.Rendering.TextureDimension;
    static Cube: UnityEngine.Rendering.TextureDimension;
    static Tex2DArray: UnityEngine.Rendering.TextureDimension;
    static CubeArray: UnityEngine.Rendering.TextureDimension;
  }
}
declare namespace UnityEngine.Rendering {
  class UVChannelFlags extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static UV0: UnityEngine.Rendering.UVChannelFlags;
    static UV1: UnityEngine.Rendering.UVChannelFlags;
    static UV2: UnityEngine.Rendering.UVChannelFlags;
    static UV3: UnityEngine.Rendering.UVChannelFlags;
  }
}
declare namespace UnityEngine {
  class RenderingPath extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static UsePlayerSettings: UnityEngine.RenderingPath;
    static VertexLit: UnityEngine.RenderingPath;
    static Forward: UnityEngine.RenderingPath;
    static DeferredLighting: UnityEngine.RenderingPath;
    static DeferredShading: UnityEngine.RenderingPath;
  }
}
declare namespace UnityEngine {
  class RenderMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static ScreenSpaceOverlay: UnityEngine.RenderMode;
    static ScreenSpaceCamera: UnityEngine.RenderMode;
    static WorldSpace: UnityEngine.RenderMode;
  }
}
declare namespace UnityEngine {
  class RenderSettings extends UnityEngine.Object {
    // constructors
    constructor();
    // methods
    // properties
    static fog: boolean;
    static fogMode: UnityEngine.FogMode;
    static fogColor: UnityEngine.Color;
    static fogDensity: number;
    static fogStartDistance: number;
    static fogEndDistance: number;
    static ambientMode: UnityEngine.Rendering.AmbientMode;
    static ambientSkyColor: UnityEngine.Color;
    static ambientEquatorColor: UnityEngine.Color;
    static ambientGroundColor: UnityEngine.Color;
    static ambientLight: UnityEngine.Color;
    static ambientIntensity: number;
    static ambientProbe: UnityEngine.Rendering.SphericalHarmonicsL2;
    static reflectionIntensity: number;
    static reflectionBounces: number;
    static haloStrength: number;
    static flareStrength: number;
    static flareFadeSpeed: number;
    static skybox: UnityEngine.Material;
    static sun: UnityEngine.Light;
    static defaultReflectionMode: UnityEngine.Rendering.DefaultReflectionMode;
    static defaultReflectionResolution: number;
    static customReflection: UnityEngine.Cubemap;
    static ambientSkyboxAmount: number;
    // fields
  }
}
declare namespace UnityEngine {
  class RenderTargetSetup extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    color: UnityEngine.RenderBuffer[];
    depth: UnityEngine.RenderBuffer;
    mipLevel: number;
    cubemapFace: UnityEngine.CubemapFace;
    depthSlice: number;
    colorLoad: UnityEngine.Rendering.RenderBufferLoadAction[];
    colorStore: UnityEngine.Rendering.RenderBufferStoreAction[];
    depthLoad: UnityEngine.Rendering.RenderBufferLoadAction;
    depthStore: UnityEngine.Rendering.RenderBufferStoreAction;
  }
}
declare namespace UnityEngine {
  class RenderTexture extends UnityEngine.Texture {
    // constructors
    constructor(width: number, height: number, depth: number, format: UnityEngine.RenderTextureFormat, readWrite: UnityEngine.RenderTextureReadWrite);
    constructor(width: number, height: number, depth: number, format: UnityEngine.RenderTextureFormat);
    constructor(width: number, height: number, depth: number);
    // methods
    static GetTemporary(width: number, height: number, depthBuffer: number, format: UnityEngine.RenderTextureFormat, readWrite: UnityEngine.RenderTextureReadWrite, antiAliasing: number): UnityEngine.RenderTexture;
    static GetTemporary(width: number, height: number, depthBuffer: number, format: UnityEngine.RenderTextureFormat, readWrite: UnityEngine.RenderTextureReadWrite): UnityEngine.RenderTexture;
    static GetTemporary(width: number, height: number, depthBuffer: number, format: UnityEngine.RenderTextureFormat): UnityEngine.RenderTexture;
    static GetTemporary(width: number, height: number, depthBuffer: number): UnityEngine.RenderTexture;
    static GetTemporary(width: number, height: number): UnityEngine.RenderTexture;
    static ReleaseTemporary(temp: UnityEngine.RenderTexture): void;
    Create(): boolean;
    Release(): void;
    IsCreated(): boolean;
    DiscardContents(): void;
    DiscardContents(discardColor: boolean, discardDepth: boolean): void;
    MarkRestoreExpected(): void;
    GenerateMips(): void;
    GetNativeDepthBufferPtr(): any;
    SetGlobalShaderProperty(propertyName: string): void;
    GetTexelOffset(): UnityEngine.Vector2;
    static SupportsStencil(rt: UnityEngine.RenderTexture): boolean;
    SetBorderColor(color: UnityEngine.Color): void;
    // properties
    width: number;
    height: number;
    depth: number;
    isPowerOfTwo: boolean;
    readonly sRGB: boolean;
    format: UnityEngine.RenderTextureFormat;
    useMipMap: boolean;
    autoGenerateMips: boolean;
    dimension: UnityEngine.Rendering.TextureDimension;
    isCubemap: boolean;
    isVolume: boolean;
    volumeDepth: number;
    antiAliasing: number;
    enableRandomWrite: boolean;
    readonly colorBuffer: UnityEngine.RenderBuffer;
    readonly depthBuffer: UnityEngine.RenderBuffer;
    static active: UnityEngine.RenderTexture;
    static enabled: boolean;
    generateMips: boolean;
    // fields
  }
}
declare namespace UnityEngine {
  class RenderTextureFormat extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static ARGB32: UnityEngine.RenderTextureFormat;
    static Depth: UnityEngine.RenderTextureFormat;
    static ARGBHalf: UnityEngine.RenderTextureFormat;
    static Shadowmap: UnityEngine.RenderTextureFormat;
    static RGB565: UnityEngine.RenderTextureFormat;
    static ARGB4444: UnityEngine.RenderTextureFormat;
    static ARGB1555: UnityEngine.RenderTextureFormat;
    static Default: UnityEngine.RenderTextureFormat;
    static ARGB2101010: UnityEngine.RenderTextureFormat;
    static DefaultHDR: UnityEngine.RenderTextureFormat;
    static ARGBFloat: UnityEngine.RenderTextureFormat;
    static RGFloat: UnityEngine.RenderTextureFormat;
    static RGHalf: UnityEngine.RenderTextureFormat;
    static RFloat: UnityEngine.RenderTextureFormat;
    static RHalf: UnityEngine.RenderTextureFormat;
    static R8: UnityEngine.RenderTextureFormat;
    static ARGBInt: UnityEngine.RenderTextureFormat;
    static RGInt: UnityEngine.RenderTextureFormat;
    static RInt: UnityEngine.RenderTextureFormat;
    static BGRA32: UnityEngine.RenderTextureFormat;
    static RGB111110Float: UnityEngine.RenderTextureFormat;
  }
}
declare namespace UnityEngine {
  class RenderTextureReadWrite extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Default: UnityEngine.RenderTextureReadWrite;
    static Linear: UnityEngine.RenderTextureReadWrite;
    static sRGB: UnityEngine.RenderTextureReadWrite;
  }
}
declare namespace UnityEngine {
  class RequireComponent extends System.Attribute {
    // constructors
    constructor(requiredComponent: any);
    constructor(requiredComponent: any, requiredComponent2: any);
    constructor(requiredComponent: any, requiredComponent2: any, requiredComponent3: any);
    // methods
    // properties
    // fields
    m_Type0: any;
    m_Type1: any;
    m_Type2: any;
  }
}
declare namespace UnityEngine {
  class Resolution extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    ToString(): string;
    // properties
    width: number;
    height: number;
    refreshRate: number;
    // fields
  }
}
declare namespace UnityEngine {
  class ResourceRequest extends UnityEngine.AsyncOperation {
    // constructors
    constructor();
    // methods
    // properties
    readonly asset: UnityEngine.Object;
    // fields
  }
}
declare namespace UnityEngine {
  class Resources extends System.Object {
    // constructors
    constructor();
    // methods
    static FindObjectsOfTypeAll(type: any): UnityEngine.Object[];
    static Load(path: string): UnityEngine.Object;
    static Load(path: string, systemTypeInstance: any): UnityEngine.Object;
    static LoadAsync(path: string): UnityEngine.ResourceRequest;
    static LoadAsync(path: string, type: any): UnityEngine.ResourceRequest;
    static LoadAll(path: string, systemTypeInstance: any): UnityEngine.Object[];
    static LoadAll(path: string): UnityEngine.Object[];
    static GetBuiltinResource(type: any, path: string): UnityEngine.Object;
    static UnloadAsset(assetToUnload: UnityEngine.Object): void;
    static UnloadUnusedAssets(): UnityEngine.AsyncOperation;
    static LoadAssetAtPath(assetPath: string, type: any): UnityEngine.Object;
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class Rigidbody extends UnityEngine.Component {
    // constructors
    constructor();
    // methods
    SetDensity(density: number): void;
    AddForce(force: UnityEngine.Vector3, mode: UnityEngine.ForceMode): void;
    AddForce(force: UnityEngine.Vector3): void;
    AddForce(x: number, y: number, z: number): void;
    AddForce(x: number, y: number, z: number, mode: UnityEngine.ForceMode): void;
    AddRelativeForce(force: UnityEngine.Vector3, mode: UnityEngine.ForceMode): void;
    AddRelativeForce(force: UnityEngine.Vector3): void;
    AddRelativeForce(x: number, y: number, z: number): void;
    AddRelativeForce(x: number, y: number, z: number, mode: UnityEngine.ForceMode): void;
    AddTorque(torque: UnityEngine.Vector3, mode: UnityEngine.ForceMode): void;
    AddTorque(torque: UnityEngine.Vector3): void;
    AddTorque(x: number, y: number, z: number): void;
    AddTorque(x: number, y: number, z: number, mode: UnityEngine.ForceMode): void;
    AddRelativeTorque(torque: UnityEngine.Vector3, mode: UnityEngine.ForceMode): void;
    AddRelativeTorque(torque: UnityEngine.Vector3): void;
    AddRelativeTorque(x: number, y: number, z: number): void;
    AddRelativeTorque(x: number, y: number, z: number, mode: UnityEngine.ForceMode): void;
    AddForceAtPosition(force: UnityEngine.Vector3, position: UnityEngine.Vector3, mode: UnityEngine.ForceMode): void;
    AddForceAtPosition(force: UnityEngine.Vector3, position: UnityEngine.Vector3): void;
    AddExplosionForce(explosionForce: number, explosionPosition: UnityEngine.Vector3, explosionRadius: number, upwardsModifier: number, mode: UnityEngine.ForceMode): void;
    AddExplosionForce(explosionForce: number, explosionPosition: UnityEngine.Vector3, explosionRadius: number, upwardsModifier: number): void;
    AddExplosionForce(explosionForce: number, explosionPosition: UnityEngine.Vector3, explosionRadius: number): void;
    ClosestPointOnBounds(position: UnityEngine.Vector3): UnityEngine.Vector3;
    GetRelativePointVelocity(relativePoint: UnityEngine.Vector3): UnityEngine.Vector3;
    GetPointVelocity(worldPoint: UnityEngine.Vector3): UnityEngine.Vector3;
    MovePosition(position: UnityEngine.Vector3): void;
    MoveRotation(rot: UnityEngine.Quaternion): void;
    Sleep(): void;
    IsSleeping(): boolean;
    WakeUp(): void;
    ResetCenterOfMass(): void;
    ResetInertiaTensor(): void;
    SweepTest(direction: UnityEngine.Vector3, hitInfo: any, maxDistance: number, queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): boolean;
    SweepTest(direction: UnityEngine.Vector3, hitInfo: any, maxDistance: number): boolean;
    SweepTest(direction: UnityEngine.Vector3, hitInfo: any): boolean;
    SweepTestAll(direction: UnityEngine.Vector3, maxDistance: number, queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): UnityEngine.RaycastHit[];
    SweepTestAll(direction: UnityEngine.Vector3, maxDistance: number): UnityEngine.RaycastHit[];
    SweepTestAll(direction: UnityEngine.Vector3): UnityEngine.RaycastHit[];
    SetMaxAngularVelocity(a: number): void;
    // properties
    velocity: UnityEngine.Vector3;
    angularVelocity: UnityEngine.Vector3;
    drag: number;
    angularDrag: number;
    mass: number;
    useGravity: boolean;
    maxDepenetrationVelocity: number;
    isKinematic: boolean;
    freezeRotation: boolean;
    constraints: UnityEngine.RigidbodyConstraints;
    collisionDetectionMode: UnityEngine.CollisionDetectionMode;
    centerOfMass: UnityEngine.Vector3;
    readonly worldCenterOfMass: UnityEngine.Vector3;
    inertiaTensorRotation: UnityEngine.Quaternion;
    inertiaTensor: UnityEngine.Vector3;
    detectCollisions: boolean;
    useConeFriction: boolean;
    position: UnityEngine.Vector3;
    rotation: UnityEngine.Quaternion;
    interpolation: UnityEngine.RigidbodyInterpolation;
    solverIterations: number;
    solverIterationCount: number;
    solverVelocityIterations: number;
    solverVelocityIterationCount: number;
    sleepVelocity: number;
    sleepAngularVelocity: number;
    sleepThreshold: number;
    maxAngularVelocity: number;
    // fields
  }
}
declare namespace UnityEngine {
  class Rigidbody2D extends UnityEngine.Component {
    // constructors
    constructor();
    // methods
    MovePosition(position: UnityEngine.Vector2): void;
    MoveRotation(angle: number): void;
    IsSleeping(): boolean;
    IsAwake(): boolean;
    Sleep(): void;
    WakeUp(): void;
    IsTouching(collider: UnityEngine.Collider2D): boolean;
    IsTouchingLayers(layerMask: number): boolean;
    IsTouchingLayers(): boolean;
    OverlapPoint(point: UnityEngine.Vector2): boolean;
    Cast(direction: UnityEngine.Vector2, results: UnityEngine.RaycastHit2D[], distance: number): number;
    Cast(direction: UnityEngine.Vector2, results: UnityEngine.RaycastHit2D[]): number;
    AddForce(force: UnityEngine.Vector2, mode: UnityEngine.ForceMode2D): void;
    AddForce(force: UnityEngine.Vector2): void;
    AddRelativeForce(relativeForce: UnityEngine.Vector2, mode: UnityEngine.ForceMode2D): void;
    AddRelativeForce(relativeForce: UnityEngine.Vector2): void;
    AddForceAtPosition(force: UnityEngine.Vector2, position: UnityEngine.Vector2, mode: UnityEngine.ForceMode2D): void;
    AddForceAtPosition(force: UnityEngine.Vector2, position: UnityEngine.Vector2): void;
    AddTorque(torque: number, mode: UnityEngine.ForceMode2D): void;
    AddTorque(torque: number): void;
    GetPoint(point: UnityEngine.Vector2): UnityEngine.Vector2;
    GetRelativePoint(relativePoint: UnityEngine.Vector2): UnityEngine.Vector2;
    GetVector(vector: UnityEngine.Vector2): UnityEngine.Vector2;
    GetRelativeVector(relativeVector: UnityEngine.Vector2): UnityEngine.Vector2;
    GetPointVelocity(point: UnityEngine.Vector2): UnityEngine.Vector2;
    GetRelativePointVelocity(relativePoint: UnityEngine.Vector2): UnityEngine.Vector2;
    // properties
    position: UnityEngine.Vector2;
    rotation: number;
    velocity: UnityEngine.Vector2;
    angularVelocity: number;
    useAutoMass: boolean;
    mass: number;
    sharedMaterial: UnityEngine.PhysicsMaterial2D;
    centerOfMass: UnityEngine.Vector2;
    readonly worldCenterOfMass: UnityEngine.Vector2;
    inertia: number;
    drag: number;
    angularDrag: number;
    gravityScale: number;
    bodyType: UnityEngine.RigidbodyType2D;
    useFullKinematicContacts: boolean;
    isKinematic: boolean;
    fixedAngle: boolean;
    freezeRotation: boolean;
    constraints: UnityEngine.RigidbodyConstraints2D;
    simulated: boolean;
    interpolation: UnityEngine.RigidbodyInterpolation2D;
    sleepMode: UnityEngine.RigidbodySleepMode2D;
    collisionDetectionMode: UnityEngine.CollisionDetectionMode2D;
    // fields
  }
}
declare namespace UnityEngine {
  class RigidbodyConstraints extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static None: UnityEngine.RigidbodyConstraints;
    static FreezePositionX: UnityEngine.RigidbodyConstraints;
    static FreezePositionY: UnityEngine.RigidbodyConstraints;
    static FreezePositionZ: UnityEngine.RigidbodyConstraints;
    static FreezeRotationX: UnityEngine.RigidbodyConstraints;
    static FreezeRotationY: UnityEngine.RigidbodyConstraints;
    static FreezeRotationZ: UnityEngine.RigidbodyConstraints;
    static FreezePosition: UnityEngine.RigidbodyConstraints;
    static FreezeRotation: UnityEngine.RigidbodyConstraints;
    static FreezeAll: UnityEngine.RigidbodyConstraints;
  }
}
declare namespace UnityEngine {
  class RigidbodyConstraints2D extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static None: UnityEngine.RigidbodyConstraints2D;
    static FreezePositionX: UnityEngine.RigidbodyConstraints2D;
    static FreezePositionY: UnityEngine.RigidbodyConstraints2D;
    static FreezeRotation: UnityEngine.RigidbodyConstraints2D;
    static FreezePosition: UnityEngine.RigidbodyConstraints2D;
    static FreezeAll: UnityEngine.RigidbodyConstraints2D;
  }
}
declare namespace UnityEngine {
  class RigidbodyInterpolation extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static None: UnityEngine.RigidbodyInterpolation;
    static Interpolate: UnityEngine.RigidbodyInterpolation;
    static Extrapolate: UnityEngine.RigidbodyInterpolation;
  }
}
declare namespace UnityEngine {
  class RigidbodyInterpolation2D extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static None: UnityEngine.RigidbodyInterpolation2D;
    static Interpolate: UnityEngine.RigidbodyInterpolation2D;
    static Extrapolate: UnityEngine.RigidbodyInterpolation2D;
  }
}
declare namespace UnityEngine {
  class RigidbodySleepMode2D extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static NeverSleep: UnityEngine.RigidbodySleepMode2D;
    static StartAwake: UnityEngine.RigidbodySleepMode2D;
    static StartAsleep: UnityEngine.RigidbodySleepMode2D;
  }
}
declare namespace UnityEngine {
  class RigidbodyType2D extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Dynamic: UnityEngine.RigidbodyType2D;
    static Kinematic: UnityEngine.RigidbodyType2D;
    static Static: UnityEngine.RigidbodyType2D;
  }
}
declare namespace UnityEngine {
  class RotationDriveMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static XYAndZ: UnityEngine.RotationDriveMode;
    static Slerp: UnityEngine.RotationDriveMode;
  }
}
declare namespace UnityEngine {
  class RotationOrder extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static OrderXYZ: UnityEngine.RotationOrder;
    static OrderXZY: UnityEngine.RotationOrder;
    static OrderYZX: UnityEngine.RotationOrder;
    static OrderYXZ: UnityEngine.RotationOrder;
    static OrderZXY: UnityEngine.RotationOrder;
    static OrderZYX: UnityEngine.RotationOrder;
  }
}
declare namespace UnityEngine {
  class RPC extends System.Attribute {
    // constructors
    constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class RPCMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Server: UnityEngine.RPCMode;
    static Others: UnityEngine.RPCMode;
    static OthersBuffered: UnityEngine.RPCMode;
    static All: UnityEngine.RPCMode;
    static AllBuffered: UnityEngine.RPCMode;
  }
}
declare namespace UnityEngine {
  class RuntimeAnimatorController extends UnityEngine.Object {
    // constructors
    constructor();
    // methods
    // properties
    readonly animationClips: UnityEngine.AnimationClip[];
    // fields
  }
}
declare namespace UnityEngine {
  class RuntimeInitializeLoadType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static AfterSceneLoad: UnityEngine.RuntimeInitializeLoadType;
    static BeforeSceneLoad: UnityEngine.RuntimeInitializeLoadType;
  }
}
declare namespace UnityEngine {
  class RuntimeInitializeOnLoadMethodAttribute extends UnityEngine.Scripting.PreserveAttribute {
    // constructors
    constructor();
    constructor(loadType: UnityEngine.RuntimeInitializeLoadType);
    // methods
    // properties
    readonly loadType: UnityEngine.RuntimeInitializeLoadType;
    // fields
  }
}
declare namespace UnityEngine {
  class RuntimePlatform extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static OSXEditor: UnityEngine.RuntimePlatform;
    static OSXPlayer: UnityEngine.RuntimePlatform;
    static WindowsPlayer: UnityEngine.RuntimePlatform;
    static OSXWebPlayer: UnityEngine.RuntimePlatform;
    static OSXDashboardPlayer: UnityEngine.RuntimePlatform;
    static WindowsWebPlayer: UnityEngine.RuntimePlatform;
    static WindowsEditor: UnityEngine.RuntimePlatform;
    static IPhonePlayer: UnityEngine.RuntimePlatform;
    static XBOX360: UnityEngine.RuntimePlatform;
    static PS3: UnityEngine.RuntimePlatform;
    static Android: UnityEngine.RuntimePlatform;
    static NaCl: UnityEngine.RuntimePlatform;
    static FlashPlayer: UnityEngine.RuntimePlatform;
    static LinuxPlayer: UnityEngine.RuntimePlatform;
    static LinuxEditor: UnityEngine.RuntimePlatform;
    static WebGLPlayer: UnityEngine.RuntimePlatform;
    static MetroPlayerX86: UnityEngine.RuntimePlatform;
    static WSAPlayerX86: UnityEngine.RuntimePlatform;
    static MetroPlayerX64: UnityEngine.RuntimePlatform;
    static WSAPlayerX64: UnityEngine.RuntimePlatform;
    static MetroPlayerARM: UnityEngine.RuntimePlatform;
    static WSAPlayerARM: UnityEngine.RuntimePlatform;
    static WP8Player: UnityEngine.RuntimePlatform;
    static BB10Player: UnityEngine.RuntimePlatform;
    static BlackBerryPlayer: UnityEngine.RuntimePlatform;
    static TizenPlayer: UnityEngine.RuntimePlatform;
    static PSP2: UnityEngine.RuntimePlatform;
    static PS4: UnityEngine.RuntimePlatform;
    static PSM: UnityEngine.RuntimePlatform;
    static XboxOne: UnityEngine.RuntimePlatform;
    static SamsungTVPlayer: UnityEngine.RuntimePlatform;
    static WiiU: UnityEngine.RuntimePlatform;
    static tvOS: UnityEngine.RuntimePlatform;
  }
}
declare namespace UnityEngine {
  class RuntimeUndo extends System.Object {
    // constructors
    constructor();
    // methods
    static SetTransformParent(transform: UnityEngine.Transform, newParent: UnityEngine.Transform, name: string): void;
    static RecordObject(objectToUndo: UnityEngine.Object, name: string): void;
    static RecordObjects(objectsToUndo: UnityEngine.Object[], name: string): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class SamsungTV extends System.Object {
    // constructors
    constructor();
    // methods
    static SetSystemLanguage(language: UnityEngine.SystemLanguage): void;
    // properties
    static touchPadMode: UnityEngine.SamsungTV.TouchPadMode;
    static gestureMode: UnityEngine.SamsungTV.GestureMode;
    static readonly airMouseConnected: boolean;
    static readonly gestureWorking: boolean;
    static gamePadMode: UnityEngine.SamsungTV.GamePadMode;
    // fields
  }
}
declare namespace UnityEngine.SamsungTV {
  class GamePadMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Default: UnityEngine.SamsungTV.GamePadMode;
    static Mouse: UnityEngine.SamsungTV.GamePadMode;
  }
}
declare namespace UnityEngine.SamsungTV {
  class GestureMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Off: UnityEngine.SamsungTV.GestureMode;
    static Mouse: UnityEngine.SamsungTV.GestureMode;
    static Joystick: UnityEngine.SamsungTV.GestureMode;
  }
}
declare namespace UnityEngine.SamsungTV {
  class OpenAPI extends System.Object {
    // constructors
    constructor();
    // methods
    // properties
    static readonly serverType: UnityEngine.SamsungTV.OpenAPI.OpenAPIServerType;
    static readonly timeOnTV: string;
    static readonly uid: string;
    static readonly dUid: string;
    // fields
  }
}
declare namespace UnityEngine.SamsungTV.OpenAPI {
  class OpenAPIServerType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Operating: UnityEngine.SamsungTV.OpenAPI.OpenAPIServerType;
    static Development: UnityEngine.SamsungTV.OpenAPI.OpenAPIServerType;
    static Developing: UnityEngine.SamsungTV.OpenAPI.OpenAPIServerType;
    static Invalid: UnityEngine.SamsungTV.OpenAPI.OpenAPIServerType;
  }
}
declare namespace UnityEngine.SamsungTV {
  class TouchPadMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Dpad: UnityEngine.SamsungTV.TouchPadMode;
    static Joystick: UnityEngine.SamsungTV.TouchPadMode;
    static Mouse: UnityEngine.SamsungTV.TouchPadMode;
  }
}
declare namespace UnityEngine {
  class ScaleMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static StretchToFill: UnityEngine.ScaleMode;
    static ScaleAndCrop: UnityEngine.ScaleMode;
    static ScaleToFit: UnityEngine.ScaleMode;
  }
}
declare namespace UnityEngine.SceneManagement {
  class LoadSceneMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Single: UnityEngine.SceneManagement.LoadSceneMode;
    static Additive: UnityEngine.SceneManagement.LoadSceneMode;
  }
}
declare namespace UnityEngine.SceneManagement {
  class Scene extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    IsValid(): boolean;
    GetRootGameObjects(): UnityEngine.GameObject[];
    GetRootGameObjects(rootGameObjects: UnityEngine.GameObject[]): void;
    GetHashCode(): number;
    Equals(other: any): boolean;
    // properties
    readonly path: string;
    readonly name: string;
    readonly isLoaded: boolean;
    readonly buildIndex: number;
    readonly isDirty: boolean;
    readonly rootCount: number;
    // fields
  }
}
declare namespace UnityEngine.SceneManagement.Scene {
  class LoadingState extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static NotLoaded: UnityEngine.SceneManagement.Scene.LoadingState;
    static Loading: UnityEngine.SceneManagement.Scene.LoadingState;
    static Loaded: UnityEngine.SceneManagement.Scene.LoadingState;
  }
}
declare namespace UnityEngine.SceneManagement {
  class SceneManager extends System.Object {
    // constructors
    constructor();
    // methods
    static GetActiveScene(): UnityEngine.SceneManagement.Scene;
    static SetActiveScene(scene: UnityEngine.SceneManagement.Scene): boolean;
    static GetSceneByPath(scenePath: string): UnityEngine.SceneManagement.Scene;
    static GetSceneByName(name: string): UnityEngine.SceneManagement.Scene;
    static GetSceneByBuildIndex(buildIndex: number): UnityEngine.SceneManagement.Scene;
    static GetSceneAt(index: number): UnityEngine.SceneManagement.Scene;
    static GetAllScenes(): UnityEngine.SceneManagement.Scene[];
    static LoadScene(sceneName: string): void;
    static LoadScene(sceneName: string, mode: UnityEngine.SceneManagement.LoadSceneMode): void;
    static LoadScene(sceneBuildIndex: number): void;
    static LoadScene(sceneBuildIndex: number, mode: UnityEngine.SceneManagement.LoadSceneMode): void;
    static LoadSceneAsync(sceneName: string): UnityEngine.AsyncOperation;
    static LoadSceneAsync(sceneName: string, mode: UnityEngine.SceneManagement.LoadSceneMode): UnityEngine.AsyncOperation;
    static LoadSceneAsync(sceneBuildIndex: number): UnityEngine.AsyncOperation;
    static LoadSceneAsync(sceneBuildIndex: number, mode: UnityEngine.SceneManagement.LoadSceneMode): UnityEngine.AsyncOperation;
    static CreateScene(sceneName: string): UnityEngine.SceneManagement.Scene;
    static UnloadScene(scene: UnityEngine.SceneManagement.Scene): boolean;
    static UnloadScene(sceneBuildIndex: number): boolean;
    static UnloadScene(sceneName: string): boolean;
    static UnloadSceneAsync(sceneBuildIndex: number): UnityEngine.AsyncOperation;
    static UnloadSceneAsync(sceneName: string): UnityEngine.AsyncOperation;
    static UnloadSceneAsync(scene: UnityEngine.SceneManagement.Scene): UnityEngine.AsyncOperation;
    static MergeScenes(sourceScene: UnityEngine.SceneManagement.Scene, destinationScene: UnityEngine.SceneManagement.Scene): void;
    static MoveGameObjectToScene(go: UnityEngine.GameObject, scene: UnityEngine.SceneManagement.Scene): void;
    // properties
    static readonly sceneCount: number;
    static readonly sceneCountInBuildSettings: number;
    // fields
  }
}
declare namespace UnityEngine.SceneManagement {
  class SceneUtility extends System.Object {
    // constructors
    protected constructor();
    // methods
    static GetScenePathByBuildIndex(buildIndex: number): string;
    static GetBuildIndexByScenePath(scenePath: string): number;
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class Screen extends System.Object {
    // constructors
    constructor();
    // methods
    static SetResolution(width: number, height: number, fullscreen: boolean, preferredRefreshRate: number): void;
    static SetResolution(width: number, height: number, fullscreen: boolean): void;
    // properties
    static readonly resolutions: UnityEngine.Resolution[];
    static lockCursor: boolean;
    static readonly currentResolution: UnityEngine.Resolution;
    static readonly width: number;
    static readonly height: number;
    static readonly dpi: number;
    static fullScreen: boolean;
    static autorotateToPortrait: boolean;
    static autorotateToPortraitUpsideDown: boolean;
    static autorotateToLandscapeLeft: boolean;
    static autorotateToLandscapeRight: boolean;
    static orientation: UnityEngine.ScreenOrientation;
    static sleepTimeout: number;
    static readonly GetResolution: UnityEngine.Resolution[];
    static showCursor: boolean;
    // fields
  }
}
declare namespace UnityEngine {
  class ScreenOrientation extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Unknown: UnityEngine.ScreenOrientation;
    static Portrait: UnityEngine.ScreenOrientation;
    static PortraitUpsideDown: UnityEngine.ScreenOrientation;
    static LandscapeLeft: UnityEngine.ScreenOrientation;
    static LandscapeRight: UnityEngine.ScreenOrientation;
    static AutoRotation: UnityEngine.ScreenOrientation;
    static Landscape: UnityEngine.ScreenOrientation;
  }
}
declare namespace UnityEngine {
  class ScriptableObject extends UnityEngine.Object {
    // constructors
    constructor();
    // methods
    SetDirty(): void;
    static CreateInstance(className: string): UnityEngine.ScriptableObject;
    static CreateInstance(type: any): UnityEngine.ScriptableObject;
    // properties
    // fields
  }
}
declare namespace UnityEngine.Scripting.APIUpdating {
  class MovedFromAttribute extends System.Attribute {
    // constructors
    constructor(sourceNamespace: string);
    // methods
    // properties
    readonly Namespace: string;
    // fields
  }
}
declare namespace UnityEngine.Scripting {
  class PreserveAttribute extends System.Attribute {
    // constructors
    constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine.Scripting {
  class RequiredByNativeCodeAttribute extends System.Attribute {
    // constructors
    constructor();
    constructor(name: string);
    constructor(optional: boolean);
    constructor(name: string, optional: boolean);
    // methods
    // properties
    Name: string;
    Optional: boolean;
    // fields
  }
}
declare namespace UnityEngine.Scripting {
  class UsedByNativeCodeAttribute extends System.Attribute {
    // constructors
    constructor();
    constructor(name: string);
    // methods
    // properties
    Name: string;
    // fields
  }
}
declare namespace UnityEngine {
  class ScrollWaitDefinitions extends System.Object {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    static firstWait: number;
    static regularWait: number;
  }
}
declare namespace UnityEngine {
  class Security extends System.Object {
    // constructors
    constructor();
    // methods
    static PrefetchSocketPolicy(ip: string, atPort: number): boolean;
    static PrefetchSocketPolicy(ip: string, atPort: number, timeout: number): boolean;
    static LoadAndVerifyAssembly(assemblyData: number[], authorizationKey: string): any;
    static LoadAndVerifyAssembly(assemblyData: number[]): any;
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class SelectionBaseAttribute extends System.Attribute {
    // constructors
    constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class SendMessageOptions extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static RequireReceiver: UnityEngine.SendMessageOptions;
    static DontRequireReceiver: UnityEngine.SendMessageOptions;
  }
}
declare namespace UnityEngine {
  class SendMouseEvents extends System.Object {
    // constructors
    constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine.SendMouseEvents {
  class HitInfo extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    SendMessage(name: string): void;
    static Compare(lhs: UnityEngine.SendMouseEvents.HitInfo, rhs: UnityEngine.SendMouseEvents.HitInfo): boolean;
    // properties
    // fields
    target: UnityEngine.GameObject;
    camera: UnityEngine.Camera;
  }
}
declare namespace UnityEngine.Serialization {
  class FormerlySerializedAsAttribute extends System.Attribute {
    // constructors
    constructor(oldName: string);
    // methods
    // properties
    readonly oldName: string;
    // fields
  }
}
declare namespace UnityEngine.Serialization {
  class ListSerializationSurrogate extends System.Object {
    // constructors
    constructor();
    // methods
    GetObjectData(obj: any, info: any, context: any): void;
    SetObjectData(obj: any, info: any, context: any, selector: any): any;
    // properties
    // fields
    static Default: any;
  }
}
declare namespace UnityEngine.Serialization {
  class UnitySurrogateSelector extends System.Object {
    // constructors
    constructor();
    // methods
    GetSurrogate(type: any, context: any, selector: any): any;
    ChainSelector(selector: any): void;
    GetNextSelector(): any;
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class SerializeField extends System.Attribute {
    // constructors
    constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class SerializePrivateVariables extends System.Attribute {
    // constructors
    constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class SetupCoroutine extends System.Object {
    // constructors
    constructor();
    // methods
    static InvokeMoveNext(enumerator: any, returnValueAddress: any): void;
    static InvokeMember(behaviour: any, name: string, variable: any): any;
    static InvokeStatic(klass: any, name: string, variable: any): any;
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class Shader extends UnityEngine.Object {
    // constructors
    constructor();
    // methods
    static Find(name: string): UnityEngine.Shader;
    static EnableKeyword(keyword: string): void;
    static DisableKeyword(keyword: string): void;
    static IsKeywordEnabled(keyword: string): boolean;
    static SetGlobalVector(propertyName: string, vec: UnityEngine.Vector4): void;
    static SetGlobalVector(nameID: number, vec: UnityEngine.Vector4): void;
    static SetGlobalColor(propertyName: string, color: UnityEngine.Color): void;
    static SetGlobalColor(nameID: number, color: UnityEngine.Color): void;
    static SetGlobalFloat(propertyName: string, value: number): void;
    static SetGlobalFloat(nameID: number, value: number): void;
    static SetGlobalInt(propertyName: string, value: number): void;
    static SetGlobalInt(nameID: number, value: number): void;
    static SetGlobalMatrix(propertyName: string, mat: UnityEngine.Matrix4x4): void;
    static SetGlobalMatrix(nameID: number, mat: UnityEngine.Matrix4x4): void;
    static SetGlobalTexture(propertyName: string, tex: UnityEngine.Texture): void;
    static SetGlobalTexture(nameID: number, tex: UnityEngine.Texture): void;
    static SetGlobalFloatArray(name: string, values: number[]): void;
    static SetGlobalFloatArray(nameID: number, values: number[]): void;
    static SetGlobalFloatArray(propertyName: string, values: number[]): void;
    static SetGlobalFloatArray(nameID: number, values: number[]): void;
    static SetGlobalVectorArray(name: string, values: UnityEngine.Vector4[]): void;
    static SetGlobalVectorArray(nameID: number, values: UnityEngine.Vector4[]): void;
    static SetGlobalVectorArray(propertyName: string, values: UnityEngine.Vector4[]): void;
    static SetGlobalVectorArray(nameID: number, values: UnityEngine.Vector4[]): void;
    static SetGlobalMatrixArray(name: string, values: UnityEngine.Matrix4x4[]): void;
    static SetGlobalMatrixArray(nameID: number, values: UnityEngine.Matrix4x4[]): void;
    static SetGlobalMatrixArray(propertyName: string, values: UnityEngine.Matrix4x4[]): void;
    static SetGlobalMatrixArray(nameID: number, values: UnityEngine.Matrix4x4[]): void;
    static SetGlobalBuffer(name: string, buffer: UnityEngine.ComputeBuffer): void;
    static SetGlobalBuffer(nameID: number, buffer: UnityEngine.ComputeBuffer): void;
    static GetGlobalFloat(name: string): number;
    static GetGlobalFloat(nameID: number): number;
    static GetGlobalInt(name: string): number;
    static GetGlobalInt(nameID: number): number;
    static GetGlobalVector(name: string): UnityEngine.Vector4;
    static GetGlobalVector(nameID: number): UnityEngine.Vector4;
    static GetGlobalColor(name: string): UnityEngine.Color;
    static GetGlobalColor(nameID: number): UnityEngine.Color;
    static GetGlobalMatrix(name: string): UnityEngine.Matrix4x4;
    static GetGlobalMatrix(nameID: number): UnityEngine.Matrix4x4;
    static GetGlobalTexture(name: string): UnityEngine.Texture;
    static GetGlobalTexture(nameID: number): UnityEngine.Texture;
    static GetGlobalFloatArray(name: string, values: number[]): void;
    static GetGlobalFloatArray(nameID: number, values: number[]): void;
    static GetGlobalFloatArray(name: string): number[];
    static GetGlobalFloatArray(nameID: number): number[];
    static GetGlobalVectorArray(name: string, values: UnityEngine.Vector4[]): void;
    static GetGlobalVectorArray(nameID: number, values: UnityEngine.Vector4[]): void;
    static GetGlobalVectorArray(name: string): UnityEngine.Vector4[];
    static GetGlobalVectorArray(nameID: number): UnityEngine.Vector4[];
    static GetGlobalMatrixArray(name: string, values: UnityEngine.Matrix4x4[]): void;
    static GetGlobalMatrixArray(nameID: number, values: UnityEngine.Matrix4x4[]): void;
    static GetGlobalMatrixArray(name: string): UnityEngine.Matrix4x4[];
    static GetGlobalMatrixArray(nameID: number): UnityEngine.Matrix4x4[];
    static PropertyToID(name: string): number;
    static WarmupAllShaders(): void;
    static SetGlobalTexGenMode(propertyName: string, mode: UnityEngine.TexGenMode): void;
    static SetGlobalTextureMatrixName(propertyName: string, matrixName: string): void;
    // properties
    readonly isSupported: boolean;
    maximumLOD: number;
    static globalMaximumLOD: number;
    readonly renderQueue: number;
    static globalShaderHardwareTier: UnityEngine.Rendering.ShaderHardwareTier;
    // fields
  }
}
declare namespace UnityEngine {
  class ShaderVariantCollection extends UnityEngine.Object {
    // constructors
    constructor();
    // methods
    Add(variant: UnityEngine.ShaderVariantCollection.ShaderVariant): boolean;
    Remove(variant: UnityEngine.ShaderVariantCollection.ShaderVariant): boolean;
    Contains(variant: UnityEngine.ShaderVariantCollection.ShaderVariant): boolean;
    Clear(): void;
    WarmUp(): void;
    // properties
    readonly shaderCount: number;
    readonly variantCount: number;
    readonly isWarmedUp: boolean;
    // fields
  }
}
declare namespace UnityEngine.ShaderVariantCollection {
  class ShaderVariant extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    shader: UnityEngine.Shader;
    passType: UnityEngine.Rendering.PassType;
    keywords: string[];
  }
}
declare namespace UnityEngine {
  class ShadowProjection extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static CloseFit: UnityEngine.ShadowProjection;
    static StableFit: UnityEngine.ShadowProjection;
  }
}
declare namespace UnityEngine {
  class ShadowQuality extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Disable: UnityEngine.ShadowQuality;
    static HardOnly: UnityEngine.ShadowQuality;
    static All: UnityEngine.ShadowQuality;
  }
}
declare namespace UnityEngine {
  class ShadowResolution extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Low: UnityEngine.ShadowResolution;
    static Medium: UnityEngine.ShadowResolution;
    static High: UnityEngine.ShadowResolution;
    static VeryHigh: UnityEngine.ShadowResolution;
  }
}
declare namespace UnityEngine {
  class SharedBetweenAnimatorsAttribute extends System.Attribute {
    // constructors
    constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class SkeletonBone extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    transformModified: number;
    // fields
    name: string;
    position: UnityEngine.Vector3;
    rotation: UnityEngine.Quaternion;
    scale: UnityEngine.Vector3;
  }
}
declare namespace UnityEngine {
  class SkinnedMeshRenderer extends UnityEngine.Renderer {
    // constructors
    constructor();
    // methods
    BakeMesh(mesh: UnityEngine.Mesh): void;
    GetBlendShapeWeight(index: number): number;
    SetBlendShapeWeight(index: number, value: number): void;
    // properties
    bones: UnityEngine.Transform[];
    rootBone: UnityEngine.Transform;
    quality: UnityEngine.SkinQuality;
    sharedMesh: UnityEngine.Mesh;
    updateWhenOffscreen: boolean;
    skinnedMotionVectors: boolean;
    localBounds: UnityEngine.Bounds;
    // fields
  }
}
declare namespace UnityEngine {
  class SkinQuality extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Auto: UnityEngine.SkinQuality;
    static Bone1: UnityEngine.SkinQuality;
    static Bone2: UnityEngine.SkinQuality;
    static Bone4: UnityEngine.SkinQuality;
  }
}
declare namespace UnityEngine {
  class Skybox extends UnityEngine.Behaviour {
    // constructors
    constructor();
    // methods
    // properties
    material: UnityEngine.Material;
    // fields
  }
}
declare namespace UnityEngine {
  class SleepTimeout extends System.Object {
    // constructors
    constructor();
    // methods
    // properties
    // fields
    static NeverSleep: number;
    static SystemSetting: number;
  }
}
declare namespace UnityEngine {
  class SliderHandler extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    Handle(): number;
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class SliderJoint2D extends UnityEngine.AnchoredJoint2D {
    // constructors
    constructor();
    // methods
    GetMotorForce(timeStep: number): number;
    // properties
    autoConfigureAngle: boolean;
    angle: number;
    useMotor: boolean;
    useLimits: boolean;
    motor: UnityEngine.JointMotor2D;
    limits: UnityEngine.JointTranslationLimits2D;
    readonly limitState: UnityEngine.JointLimitState2D;
    readonly referenceAngle: number;
    readonly jointTranslation: number;
    readonly jointSpeed: number;
    // fields
  }
}
declare namespace UnityEngine {
  class SliderState extends System.Object {
    // constructors
    constructor();
    // methods
    // properties
    // fields
    dragStartPos: number;
    dragStartValue: number;
    isDragging: boolean;
  }
}
declare namespace UnityEngine {
  class Social extends System.Object {
    // constructors
    protected constructor();
    // methods
    static LoadUsers(userIDs: string[], callback: ((obj: UnityEngine.SocialPlatforms.IUserProfile[]) => void)): void;
    static ReportProgress(achievementID: string, progress: number, callback: ((obj: boolean) => void)): void;
    static LoadAchievementDescriptions(callback: ((obj: UnityEngine.SocialPlatforms.IAchievementDescription[]) => void)): void;
    static LoadAchievements(callback: ((obj: UnityEngine.SocialPlatforms.IAchievement[]) => void)): void;
    static ReportScore(score: number, board: string, callback: ((obj: boolean) => void)): void;
    static LoadScores(leaderboardID: string, callback: ((obj: UnityEngine.SocialPlatforms.IScore[]) => void)): void;
    static CreateLeaderboard(): UnityEngine.SocialPlatforms.ILeaderboard;
    static CreateAchievement(): UnityEngine.SocialPlatforms.IAchievement;
    static ShowAchievementsUI(): void;
    static ShowLeaderboardUI(): void;
    // properties
    static Active: UnityEngine.SocialPlatforms.ISocialPlatform;
    static readonly localUser: UnityEngine.SocialPlatforms.ILocalUser;
    // fields
  }
}
declare namespace UnityEngine.SocialPlatforms {
  class ActivePlatform extends System.Object {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine.SocialPlatforms.GameCenter {
  class GameCenterPlatform extends UnityEngine.SocialPlatforms.Local {
    // constructors
    constructor();
    // methods
    static ResetAllAchievements(callback: ((obj: boolean) => void)): void;
    static ShowDefaultAchievementCompletionBanner(value: boolean): void;
    static ShowLeaderboardUI(leaderboardID: string, timeScope: UnityEngine.SocialPlatforms.TimeScope): void;
    ShowLeaderboardUI(): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine.SocialPlatforms {
  class IAchievement {
    // constructors
    protected constructor();
    // methods
    ReportProgress(callback: ((obj: boolean) => void)): void;
    // properties
    id: string;
    percentCompleted: number;
    readonly completed: boolean;
    readonly hidden: boolean;
    readonly lastReportedDate: any;
    // fields
  }
}
declare namespace UnityEngine.SocialPlatforms {
  class IAchievementDescription {
    // constructors
    protected constructor();
    // methods
    // properties
    id: string;
    readonly title: string;
    readonly image: UnityEngine.Texture2D;
    readonly achievedDescription: string;
    readonly unachievedDescription: string;
    readonly hidden: boolean;
    readonly points: number;
    // fields
  }
}
declare namespace UnityEngine.SocialPlatforms {
  class ILeaderboard {
    // constructors
    protected constructor();
    // methods
    SetUserFilter(userIDs: string[]): void;
    LoadScores(callback: ((obj: boolean) => void)): void;
    // properties
    readonly loading: boolean;
    id: string;
    userScope: UnityEngine.SocialPlatforms.UserScope;
    range: UnityEngine.SocialPlatforms.Range;
    timeScope: UnityEngine.SocialPlatforms.TimeScope;
    readonly localUserScore: UnityEngine.SocialPlatforms.IScore;
    readonly maxRange: number;
    readonly scores: UnityEngine.SocialPlatforms.IScore[];
    readonly title: string;
    // fields
  }
}
declare namespace UnityEngine.SocialPlatforms {
  class ILocalUser {
    // constructors
    protected constructor();
    // methods
    Authenticate(callback: ((obj: boolean) => void)): void;
    Authenticate(callback: ((arg1: boolean, arg2: string) => void)): void;
    LoadFriends(callback: ((obj: boolean) => void)): void;
    // properties
    readonly friends: UnityEngine.SocialPlatforms.IUserProfile[];
    readonly authenticated: boolean;
    readonly underage: boolean;
    // fields
  }
}
declare namespace UnityEngine.SocialPlatforms.Impl {
  class Achievement extends System.Object {
    // constructors
    constructor(id: string, percentCompleted: number, completed: boolean, hidden: boolean, lastReportedDate: any);
    constructor(id: string, percent: number);
    constructor();
    // methods
    ToString(): string;
    ReportProgress(callback: ((obj: boolean) => void)): void;
    SetCompleted(value: boolean): void;
    SetHidden(value: boolean): void;
    SetLastReportedDate(date: any): void;
    // properties
    id: string;
    percentCompleted: number;
    readonly completed: boolean;
    readonly hidden: boolean;
    readonly lastReportedDate: any;
    // fields
  }
}
declare namespace UnityEngine.SocialPlatforms.Impl {
  class AchievementDescription extends System.Object {
    // constructors
    constructor(id: string, title: string, image: UnityEngine.Texture2D, achievedDescription: string, unachievedDescription: string, hidden: boolean, points: number);
    // methods
    ToString(): string;
    SetImage(image: UnityEngine.Texture2D): void;
    // properties
    id: string;
    readonly title: string;
    readonly image: UnityEngine.Texture2D;
    readonly achievedDescription: string;
    readonly unachievedDescription: string;
    readonly hidden: boolean;
    readonly points: number;
    // fields
  }
}
declare namespace UnityEngine.SocialPlatforms.Impl {
  class Leaderboard extends System.Object {
    // constructors
    constructor();
    // methods
    SetUserFilter(userIDs: string[]): void;
    ToString(): string;
    LoadScores(callback: ((obj: boolean) => void)): void;
    SetLocalUserScore(score: UnityEngine.SocialPlatforms.IScore): void;
    SetMaxRange(maxRange: number): void;
    SetScores(scores: UnityEngine.SocialPlatforms.IScore[]): void;
    SetTitle(title: string): void;
    GetUserFilter(): string[];
    // properties
    readonly loading: boolean;
    id: string;
    userScope: UnityEngine.SocialPlatforms.UserScope;
    range: UnityEngine.SocialPlatforms.Range;
    timeScope: UnityEngine.SocialPlatforms.TimeScope;
    readonly localUserScore: UnityEngine.SocialPlatforms.IScore;
    readonly maxRange: number;
    readonly scores: UnityEngine.SocialPlatforms.IScore[];
    readonly title: string;
    // fields
  }
}
declare namespace UnityEngine.SocialPlatforms.Impl {
  class LocalUser extends UnityEngine.SocialPlatforms.Impl.UserProfile {
    // constructors
    constructor();
    // methods
    Authenticate(callback: ((obj: boolean) => void)): void;
    Authenticate(callback: ((arg1: boolean, arg2: string) => void)): void;
    LoadFriends(callback: ((obj: boolean) => void)): void;
    SetFriends(friends: UnityEngine.SocialPlatforms.IUserProfile[]): void;
    SetAuthenticated(value: boolean): void;
    SetUnderage(value: boolean): void;
    // properties
    readonly friends: UnityEngine.SocialPlatforms.IUserProfile[];
    readonly authenticated: boolean;
    readonly underage: boolean;
    // fields
  }
}
declare namespace UnityEngine.SocialPlatforms.Impl {
  class Score extends System.Object {
    // constructors
    constructor();
    constructor(leaderboardID: string, value: number);
    constructor(leaderboardID: string, value: number, userID: string, date: any, formattedValue: string, rank: number);
    // methods
    ToString(): string;
    ReportScore(callback: ((obj: boolean) => void)): void;
    SetDate(date: any): void;
    SetFormattedValue(value: string): void;
    SetUserID(userID: string): void;
    SetRank(rank: number): void;
    // properties
    leaderboardID: string;
    value: number;
    readonly date: any;
    readonly formattedValue: string;
    readonly userID: string;
    readonly rank: number;
    // fields
  }
}
declare namespace UnityEngine.SocialPlatforms.Impl {
  class UserProfile extends System.Object {
    // constructors
    constructor();
    constructor(name: string, id: string, friend: boolean);
    constructor(name: string, id: string, friend: boolean, state: UnityEngine.SocialPlatforms.UserState, image: UnityEngine.Texture2D);
    // methods
    ToString(): string;
    SetUserName(name: string): void;
    SetUserID(id: string): void;
    SetImage(image: UnityEngine.Texture2D): void;
    SetIsFriend(value: boolean): void;
    SetState(state: UnityEngine.SocialPlatforms.UserState): void;
    // properties
    readonly userName: string;
    readonly id: string;
    readonly isFriend: boolean;
    readonly state: UnityEngine.SocialPlatforms.UserState;
    readonly image: UnityEngine.Texture2D;
    // fields
  }
}
declare namespace UnityEngine.SocialPlatforms {
  class IScore {
    // constructors
    protected constructor();
    // methods
    ReportScore(callback: ((obj: boolean) => void)): void;
    // properties
    leaderboardID: string;
    value: number;
    readonly date: any;
    readonly formattedValue: string;
    readonly userID: string;
    readonly rank: number;
    // fields
  }
}
declare namespace UnityEngine.SocialPlatforms {
  class ISocialPlatform {
    // constructors
    protected constructor();
    // methods
    LoadUsers(userIDs: string[], callback: ((obj: UnityEngine.SocialPlatforms.IUserProfile[]) => void)): void;
    ReportProgress(achievementID: string, progress: number, callback: ((obj: boolean) => void)): void;
    LoadAchievementDescriptions(callback: ((obj: UnityEngine.SocialPlatforms.IAchievementDescription[]) => void)): void;
    LoadAchievements(callback: ((obj: UnityEngine.SocialPlatforms.IAchievement[]) => void)): void;
    CreateAchievement(): UnityEngine.SocialPlatforms.IAchievement;
    ReportScore(score: number, board: string, callback: ((obj: boolean) => void)): void;
    LoadScores(leaderboardID: string, callback: ((obj: UnityEngine.SocialPlatforms.IScore[]) => void)): void;
    LoadScores(board: UnityEngine.SocialPlatforms.ILeaderboard, callback: ((obj: boolean) => void)): void;
    CreateLeaderboard(): UnityEngine.SocialPlatforms.ILeaderboard;
    ShowAchievementsUI(): void;
    ShowLeaderboardUI(): void;
    Authenticate(user: UnityEngine.SocialPlatforms.ILocalUser, callback: ((obj: boolean) => void)): void;
    Authenticate(user: UnityEngine.SocialPlatforms.ILocalUser, callback: ((arg1: boolean, arg2: string) => void)): void;
    LoadFriends(user: UnityEngine.SocialPlatforms.ILocalUser, callback: ((obj: boolean) => void)): void;
    GetLoading(board: UnityEngine.SocialPlatforms.ILeaderboard): boolean;
    // properties
    readonly localUser: UnityEngine.SocialPlatforms.ILocalUser;
    // fields
  }
}
declare namespace UnityEngine.SocialPlatforms {
  class IUserProfile {
    // constructors
    protected constructor();
    // methods
    // properties
    readonly userName: string;
    readonly id: string;
    readonly isFriend: boolean;
    readonly state: UnityEngine.SocialPlatforms.UserState;
    readonly image: UnityEngine.Texture2D;
    // fields
  }
}
declare namespace UnityEngine.SocialPlatforms {
  class Local extends System.Object {
    // constructors
    constructor();
    // methods
    LoadUsers(userIDs: string[], callback: ((obj: UnityEngine.SocialPlatforms.IUserProfile[]) => void)): void;
    ReportProgress(id: string, progress: number, callback: ((obj: boolean) => void)): void;
    LoadAchievementDescriptions(callback: ((obj: UnityEngine.SocialPlatforms.IAchievementDescription[]) => void)): void;
    LoadAchievements(callback: ((obj: UnityEngine.SocialPlatforms.IAchievement[]) => void)): void;
    ReportScore(score: number, board: string, callback: ((obj: boolean) => void)): void;
    LoadScores(leaderboardID: string, callback: ((obj: UnityEngine.SocialPlatforms.IScore[]) => void)): void;
    ShowAchievementsUI(): void;
    ShowLeaderboardUI(): void;
    CreateLeaderboard(): UnityEngine.SocialPlatforms.ILeaderboard;
    CreateAchievement(): UnityEngine.SocialPlatforms.IAchievement;
    // properties
    readonly localUser: UnityEngine.SocialPlatforms.ILocalUser;
    // fields
  }
}
declare namespace UnityEngine.SocialPlatforms {
  class Range extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    from: number;
    count: number;
  }
}
declare namespace UnityEngine.SocialPlatforms {
  class TimeScope extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Today: UnityEngine.SocialPlatforms.TimeScope;
    static Week: UnityEngine.SocialPlatforms.TimeScope;
    static AllTime: UnityEngine.SocialPlatforms.TimeScope;
  }
}
declare namespace UnityEngine.SocialPlatforms {
  class UserScope extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Global: UnityEngine.SocialPlatforms.UserScope;
    static FriendsOnly: UnityEngine.SocialPlatforms.UserScope;
  }
}
declare namespace UnityEngine.SocialPlatforms {
  class UserState extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Online: UnityEngine.SocialPlatforms.UserState;
    static OnlineAndAway: UnityEngine.SocialPlatforms.UserState;
    static OnlineAndBusy: UnityEngine.SocialPlatforms.UserState;
    static Offline: UnityEngine.SocialPlatforms.UserState;
    static Playing: UnityEngine.SocialPlatforms.UserState;
  }
}
declare namespace UnityEngine {
  class SoftJointLimit extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    limit: number;
    spring: number;
    damper: number;
    bounciness: number;
    contactDistance: number;
    bouncyness: number;
    // fields
  }
}
declare namespace UnityEngine {
  class SoftJointLimitSpring extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    spring: number;
    damper: number;
    // fields
  }
}
declare namespace UnityEngine {
  class SortingLayer extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    static GetLayerValueFromID(id: number): number;
    static GetLayerValueFromName(name: string): number;
    static NameToID(name: string): number;
    static IDToName(id: number): string;
    static IsValid(id: number): boolean;
    // properties
    readonly id: number;
    readonly name: string;
    readonly value: number;
    static readonly layers: UnityEngine.SortingLayer[];
    // fields
  }
}
declare namespace UnityEngine {
  class Space extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static World: UnityEngine.Space;
    static Self: UnityEngine.Space;
  }
}
declare namespace UnityEngine {
  class SpaceAttribute extends UnityEngine.PropertyAttribute {
    // constructors
    constructor();
    constructor(height: number);
    // methods
    // properties
    // fields
    height: number;
  }
}
declare namespace UnityEngine {
  class SparseTexture extends UnityEngine.Texture {
    // constructors
    constructor(width: number, height: number, format: UnityEngine.TextureFormat, mipCount: number);
    constructor(width: number, height: number, format: UnityEngine.TextureFormat, mipCount: number, linear: boolean);
    // methods
    UpdateTile(tileX: number, tileY: number, miplevel: number, data: UnityEngine.Color32[]): void;
    UpdateTileRaw(tileX: number, tileY: number, miplevel: number, data: number[]): void;
    UnloadTile(tileX: number, tileY: number, miplevel: number): void;
    // properties
    readonly tileWidth: number;
    readonly tileHeight: number;
    readonly isCreated: boolean;
    // fields
  }
}
declare namespace UnityEngine {
  class SpeedTreeWindAsset extends UnityEngine.Object {
    // constructors
    constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class SphereCollider extends UnityEngine.Collider {
    // constructors
    constructor();
    // methods
    // properties
    center: UnityEngine.Vector3;
    radius: number;
    // fields
  }
}
declare namespace UnityEngine {
  class SplatPrototype extends System.Object {
    // constructors
    constructor();
    // methods
    // properties
    texture: UnityEngine.Texture2D;
    normalMap: UnityEngine.Texture2D;
    tileSize: UnityEngine.Vector2;
    tileOffset: UnityEngine.Vector2;
    specular: UnityEngine.Color;
    metallic: number;
    smoothness: number;
    // fields
  }
}
declare namespace UnityEngine {
  class SpringJoint extends UnityEngine.Joint {
    // constructors
    constructor();
    // methods
    // properties
    spring: number;
    damper: number;
    minDistance: number;
    maxDistance: number;
    tolerance: number;
    // fields
  }
}
declare namespace UnityEngine {
  class SpringJoint2D extends UnityEngine.AnchoredJoint2D {
    // constructors
    constructor();
    // methods
    // properties
    autoConfigureDistance: boolean;
    distance: number;
    dampingRatio: number;
    frequency: number;
    // fields
  }
}
declare namespace UnityEngine {
  class Sprite extends UnityEngine.Object {
    // constructors
    constructor();
    // methods
    static Create(texture: UnityEngine.Texture2D, rect: UnityEngine.Rect, pivot: UnityEngine.Vector2, pixelsPerUnit: number, extrude: number, meshType: UnityEngine.SpriteMeshType, border: UnityEngine.Vector4): UnityEngine.Sprite;
    static Create(texture: UnityEngine.Texture2D, rect: UnityEngine.Rect, pivot: UnityEngine.Vector2, pixelsPerUnit: number, extrude: number, meshType: UnityEngine.SpriteMeshType): UnityEngine.Sprite;
    static Create(texture: UnityEngine.Texture2D, rect: UnityEngine.Rect, pivot: UnityEngine.Vector2, pixelsPerUnit: number, extrude: number): UnityEngine.Sprite;
    static Create(texture: UnityEngine.Texture2D, rect: UnityEngine.Rect, pivot: UnityEngine.Vector2, pixelsPerUnit: number): UnityEngine.Sprite;
    static Create(texture: UnityEngine.Texture2D, rect: UnityEngine.Rect, pivot: UnityEngine.Vector2): UnityEngine.Sprite;
    OverrideGeometry(vertices: UnityEngine.Vector2[], triangles: number[]): void;
    // properties
    readonly bounds: UnityEngine.Bounds;
    readonly rect: UnityEngine.Rect;
    readonly pixelsPerUnit: number;
    readonly texture: UnityEngine.Texture2D;
    readonly associatedAlphaSplitTexture: UnityEngine.Texture2D;
    readonly textureRect: UnityEngine.Rect;
    readonly textureRectOffset: UnityEngine.Vector2;
    readonly packed: boolean;
    readonly packingMode: UnityEngine.SpritePackingMode;
    readonly packingRotation: UnityEngine.SpritePackingRotation;
    readonly pivot: UnityEngine.Vector2;
    readonly border: UnityEngine.Vector4;
    readonly vertices: UnityEngine.Vector2[];
    readonly triangles: number[];
    readonly uv: UnityEngine.Vector2[];
    // fields
  }
}
declare namespace UnityEngine {
  class SpriteAlignment extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Center: UnityEngine.SpriteAlignment;
    static TopLeft: UnityEngine.SpriteAlignment;
    static TopCenter: UnityEngine.SpriteAlignment;
    static TopRight: UnityEngine.SpriteAlignment;
    static LeftCenter: UnityEngine.SpriteAlignment;
    static RightCenter: UnityEngine.SpriteAlignment;
    static BottomLeft: UnityEngine.SpriteAlignment;
    static BottomCenter: UnityEngine.SpriteAlignment;
    static BottomRight: UnityEngine.SpriteAlignment;
    static Custom: UnityEngine.SpriteAlignment;
  }
}
declare namespace UnityEngine {
  class SpriteMeshType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static FullRect: UnityEngine.SpriteMeshType;
    static Tight: UnityEngine.SpriteMeshType;
  }
}
declare namespace UnityEngine {
  class SpritePackingMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Tight: UnityEngine.SpritePackingMode;
    static Rectangle: UnityEngine.SpritePackingMode;
  }
}
declare namespace UnityEngine {
  class SpritePackingRotation extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static None: UnityEngine.SpritePackingRotation;
    static Any: UnityEngine.SpritePackingRotation;
  }
}
declare namespace UnityEngine {
  class SpriteRenderer extends UnityEngine.Renderer {
    // constructors
    constructor();
    // methods
    // properties
    sprite: UnityEngine.Sprite;
    color: UnityEngine.Color;
    flipX: boolean;
    flipY: boolean;
    // fields
  }
}
declare namespace UnityEngine.Sprites {
  class DataUtility extends System.Object {
    // constructors
    constructor();
    // methods
    static GetInnerUV(sprite: UnityEngine.Sprite): UnityEngine.Vector4;
    static GetOuterUV(sprite: UnityEngine.Sprite): UnityEngine.Vector4;
    static GetPadding(sprite: UnityEngine.Sprite): UnityEngine.Vector4;
    static GetMinSize(sprite: UnityEngine.Sprite): UnityEngine.Vector2;
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class StackTraceLogType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static None: UnityEngine.StackTraceLogType;
    static ScriptOnly: UnityEngine.StackTraceLogType;
    static Full: UnityEngine.StackTraceLogType;
  }
}
declare namespace UnityEngine {
  class StackTraceUtility extends System.Object {
    // constructors
    constructor();
    // methods
    static ExtractStackTrace(): string;
    static ExtractStringFromException(exception: any): string;
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class StateMachineBehaviour extends UnityEngine.ScriptableObject {
    // constructors
    protected constructor();
    // methods
    OnStateEnter(animator: UnityEngine.Animator, stateInfo: UnityEngine.AnimatorStateInfo, layerIndex: number): void;
    OnStateEnter(animator: UnityEngine.Animator, stateInfo: UnityEngine.AnimatorStateInfo, layerIndex: number, controller: UnityEngine.Experimental.Director.AnimatorControllerPlayable): void;
    OnStateUpdate(animator: UnityEngine.Animator, stateInfo: UnityEngine.AnimatorStateInfo, layerIndex: number): void;
    OnStateUpdate(animator: UnityEngine.Animator, stateInfo: UnityEngine.AnimatorStateInfo, layerIndex: number, controller: UnityEngine.Experimental.Director.AnimatorControllerPlayable): void;
    OnStateExit(animator: UnityEngine.Animator, stateInfo: UnityEngine.AnimatorStateInfo, layerIndex: number): void;
    OnStateExit(animator: UnityEngine.Animator, stateInfo: UnityEngine.AnimatorStateInfo, layerIndex: number, controller: UnityEngine.Experimental.Director.AnimatorControllerPlayable): void;
    OnStateMove(animator: UnityEngine.Animator, stateInfo: UnityEngine.AnimatorStateInfo, layerIndex: number): void;
    OnStateMove(animator: UnityEngine.Animator, stateInfo: UnityEngine.AnimatorStateInfo, layerIndex: number, controller: UnityEngine.Experimental.Director.AnimatorControllerPlayable): void;
    OnStateIK(animator: UnityEngine.Animator, stateInfo: UnityEngine.AnimatorStateInfo, layerIndex: number): void;
    OnStateIK(animator: UnityEngine.Animator, stateInfo: UnityEngine.AnimatorStateInfo, layerIndex: number, controller: UnityEngine.Experimental.Director.AnimatorControllerPlayable): void;
    OnStateMachineEnter(animator: UnityEngine.Animator, stateMachinePathHash: number): void;
    OnStateMachineEnter(animator: UnityEngine.Animator, stateMachinePathHash: number, controller: UnityEngine.Experimental.Director.AnimatorControllerPlayable): void;
    OnStateMachineExit(animator: UnityEngine.Animator, stateMachinePathHash: number): void;
    OnStateMachineExit(animator: UnityEngine.Animator, stateMachinePathHash: number, controller: UnityEngine.Experimental.Director.AnimatorControllerPlayable): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class StaticBatchingUtility extends System.Object {
    // constructors
    constructor();
    // methods
    static Combine(staticBatchRoot: UnityEngine.GameObject): void;
    static Combine(gos: UnityEngine.GameObject[], staticBatchRoot: UnityEngine.GameObject): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class StereoTargetEyeMask extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static None: UnityEngine.StereoTargetEyeMask;
    static Left: UnityEngine.StereoTargetEyeMask;
    static Right: UnityEngine.StereoTargetEyeMask;
    static Both: UnityEngine.StereoTargetEyeMask;
  }
}
declare namespace UnityEngine {
  class SurfaceEffector2D extends UnityEngine.Effector2D {
    // constructors
    constructor();
    // methods
    // properties
    speed: number;
    speedVariation: number;
    forceScale: number;
    useContactForce: boolean;
    useFriction: boolean;
    useBounce: boolean;
    // fields
  }
}
declare namespace UnityEngine {
  class SystemClock extends System.Object {
    // constructors
    constructor();
    // methods
    static ToUnixTimeMilliseconds(date: any): number;
    static ToUnixTimeSeconds(date: any): number;
    // properties
    static readonly now: any;
    // fields
  }
}
declare namespace UnityEngine {
  class SystemInfo extends System.Object {
    // constructors
    constructor();
    // methods
    static SupportsRenderTextureFormat(format: UnityEngine.RenderTextureFormat): boolean;
    static SupportsTextureFormat(format: UnityEngine.TextureFormat): boolean;
    // properties
    static readonly operatingSystem: string;
    static readonly operatingSystemFamily: UnityEngine.OperatingSystemFamily;
    static readonly processorType: string;
    static readonly processorFrequency: number;
    static readonly processorCount: number;
    static readonly systemMemorySize: number;
    static readonly graphicsMemorySize: number;
    static readonly graphicsDeviceName: string;
    static readonly graphicsDeviceVendor: string;
    static readonly graphicsDeviceID: number;
    static readonly graphicsDeviceVendorID: number;
    static readonly graphicsDeviceType: UnityEngine.Rendering.GraphicsDeviceType;
    static readonly graphicsDeviceVersion: string;
    static readonly graphicsShaderLevel: number;
    static readonly graphicsPixelFillrate: number;
    static readonly supportsVertexPrograms: boolean;
    static readonly graphicsMultiThreaded: boolean;
    static readonly supportsShadows: boolean;
    static readonly supportsRawShadowDepthSampling: boolean;
    static readonly supportsRenderTextures: boolean;
    static readonly supportsMotionVectors: boolean;
    static readonly supportsRenderToCubemap: boolean;
    static readonly supportsImageEffects: boolean;
    static readonly supports3DTextures: boolean;
    static readonly supports2DArrayTextures: boolean;
    static readonly supportsCubemapArrayTextures: boolean;
    static readonly copyTextureSupport: UnityEngine.Rendering.CopyTextureSupport;
    static readonly supportsComputeShaders: boolean;
    static readonly supportsInstancing: boolean;
    static readonly supportsSparseTextures: boolean;
    static readonly supportedRenderTargetCount: number;
    static readonly usesReversedZBuffer: boolean;
    static readonly supportsStencil: number;
    static readonly npotSupport: UnityEngine.NPOTSupport;
    static readonly deviceUniqueIdentifier: string;
    static readonly deviceName: string;
    static readonly deviceModel: string;
    static readonly supportsAccelerometer: boolean;
    static readonly supportsGyroscope: boolean;
    static readonly supportsLocationService: boolean;
    static readonly supportsVibration: boolean;
    static readonly supportsAudio: boolean;
    static readonly deviceType: UnityEngine.DeviceType;
    static readonly maxTextureSize: number;
    // fields
    static unsupportedIdentifier: string;
  }
}
declare namespace UnityEngine {
  class SystemLanguage extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Afrikaans: UnityEngine.SystemLanguage;
    static Arabic: UnityEngine.SystemLanguage;
    static Basque: UnityEngine.SystemLanguage;
    static Belarusian: UnityEngine.SystemLanguage;
    static Bulgarian: UnityEngine.SystemLanguage;
    static Catalan: UnityEngine.SystemLanguage;
    static Chinese: UnityEngine.SystemLanguage;
    static Czech: UnityEngine.SystemLanguage;
    static Danish: UnityEngine.SystemLanguage;
    static Dutch: UnityEngine.SystemLanguage;
    static English: UnityEngine.SystemLanguage;
    static Estonian: UnityEngine.SystemLanguage;
    static Faroese: UnityEngine.SystemLanguage;
    static Finnish: UnityEngine.SystemLanguage;
    static French: UnityEngine.SystemLanguage;
    static German: UnityEngine.SystemLanguage;
    static Greek: UnityEngine.SystemLanguage;
    static Hebrew: UnityEngine.SystemLanguage;
    static Hugarian: UnityEngine.SystemLanguage;
    static Icelandic: UnityEngine.SystemLanguage;
    static Indonesian: UnityEngine.SystemLanguage;
    static Italian: UnityEngine.SystemLanguage;
    static Japanese: UnityEngine.SystemLanguage;
    static Korean: UnityEngine.SystemLanguage;
    static Latvian: UnityEngine.SystemLanguage;
    static Lithuanian: UnityEngine.SystemLanguage;
    static Norwegian: UnityEngine.SystemLanguage;
    static Polish: UnityEngine.SystemLanguage;
    static Portuguese: UnityEngine.SystemLanguage;
    static Romanian: UnityEngine.SystemLanguage;
    static Russian: UnityEngine.SystemLanguage;
    static SerboCroatian: UnityEngine.SystemLanguage;
    static Slovak: UnityEngine.SystemLanguage;
    static Slovenian: UnityEngine.SystemLanguage;
    static Spanish: UnityEngine.SystemLanguage;
    static Swedish: UnityEngine.SystemLanguage;
    static Thai: UnityEngine.SystemLanguage;
    static Turkish: UnityEngine.SystemLanguage;
    static Ukrainian: UnityEngine.SystemLanguage;
    static Vietnamese: UnityEngine.SystemLanguage;
    static ChineseSimplified: UnityEngine.SystemLanguage;
    static ChineseTraditional: UnityEngine.SystemLanguage;
    static Unknown: UnityEngine.SystemLanguage;
    static Hungarian: UnityEngine.SystemLanguage;
  }
}
declare namespace UnityEngine {
  class TargetJoint2D extends UnityEngine.Joint2D {
    // constructors
    constructor();
    // methods
    // properties
    anchor: UnityEngine.Vector2;
    target: UnityEngine.Vector2;
    autoConfigureTarget: boolean;
    maxForce: number;
    dampingRatio: number;
    frequency: number;
    // fields
  }
}
declare namespace UnityEngine {
  class Terrain extends UnityEngine.Behaviour {
    // constructors
    constructor();
    // methods
    GetClosestReflectionProbes(result: UnityEngine.Rendering.ReflectionProbeBlendInfo[]): void;
    SampleHeight(worldPosition: UnityEngine.Vector3): number;
    ApplyDelayedHeightmapModification(): void;
    AddTreeInstance(instance: UnityEngine.TreeInstance): void;
    SetNeighbors(left: UnityEngine.Terrain, top: UnityEngine.Terrain, right: UnityEngine.Terrain, bottom: UnityEngine.Terrain): void;
    GetPosition(): UnityEngine.Vector3;
    Flush(): void;
    SetSplatMaterialPropertyBlock(properties: UnityEngine.MaterialPropertyBlock): void;
    GetSplatMaterialPropertyBlock(dest: UnityEngine.MaterialPropertyBlock): void;
    static CreateTerrainGameObject(assignTerrain: UnityEngine.TerrainData): UnityEngine.GameObject;
    // properties
    terrainData: UnityEngine.TerrainData;
    treeDistance: number;
    treeBillboardDistance: number;
    treeCrossFadeLength: number;
    treeMaximumFullLODCount: number;
    detailObjectDistance: number;
    detailObjectDensity: number;
    heightmapPixelError: number;
    heightmapMaximumLOD: number;
    basemapDistance: number;
    splatmapDistance: number;
    lightmapIndex: number;
    realtimeLightmapIndex: number;
    lightmapScaleOffset: UnityEngine.Vector4;
    realtimeLightmapScaleOffset: UnityEngine.Vector4;
    castShadows: boolean;
    reflectionProbeUsage: UnityEngine.Rendering.ReflectionProbeUsage;
    materialType: UnityEngine.Terrain.MaterialType;
    materialTemplate: UnityEngine.Material;
    legacySpecular: UnityEngine.Color;
    legacyShininess: number;
    drawHeightmap: boolean;
    drawTreesAndFoliage: boolean;
    treeLODBiasMultiplier: number;
    collectDetailPatches: boolean;
    editorRenderFlags: UnityEngine.TerrainRenderFlags;
    bakeLightProbesForTrees: boolean;
    static readonly activeTerrain: UnityEngine.Terrain;
    static readonly activeTerrains: UnityEngine.Terrain[];
    // fields
  }
}
declare namespace UnityEngine.Terrain {
  class MaterialType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static BuiltInStandard: UnityEngine.Terrain.MaterialType;
    static BuiltInLegacyDiffuse: UnityEngine.Terrain.MaterialType;
    static BuiltInLegacySpecular: UnityEngine.Terrain.MaterialType;
    static Custom: UnityEngine.Terrain.MaterialType;
  }
}
declare namespace UnityEngine {
  class TerrainChangedFlags extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Heightmap: UnityEngine.TerrainChangedFlags;
    static TreeInstances: UnityEngine.TerrainChangedFlags;
    static DelayedHeightmapUpdate: UnityEngine.TerrainChangedFlags;
    static FlushEverythingImmediately: UnityEngine.TerrainChangedFlags;
    static RemoveDirtyDetailsImmediately: UnityEngine.TerrainChangedFlags;
    static WillBeDestroyed: UnityEngine.TerrainChangedFlags;
  }
}
declare namespace UnityEngine {
  class TerrainCollider extends UnityEngine.Collider {
    // constructors
    constructor();
    // methods
    // properties
    terrainData: UnityEngine.TerrainData;
    // fields
  }
}
declare namespace UnityEngine {
  class TerrainData extends UnityEngine.Object {
    // constructors
    constructor();
    // methods
    GetHeight(x: number, y: number): number;
    GetInterpolatedHeight(x: number, y: number): number;
    GetHeights(xBase: number, yBase: number, width: number, height: number): number[];
    SetHeights(xBase: number, yBase: number, heights: number[]): void;
    SetHeightsDelayLOD(xBase: number, yBase: number, heights: number[]): void;
    GetSteepness(x: number, y: number): number;
    GetInterpolatedNormal(x: number, y: number): UnityEngine.Vector3;
    SetDetailResolution(detailResolution: number, resolutionPerPatch: number): void;
    RefreshPrototypes(): void;
    GetSupportedLayers(xBase: number, yBase: number, totalWidth: number, totalHeight: number): number[];
    GetDetailLayer(xBase: number, yBase: number, width: number, height: number, layer: number): number[];
    SetDetailLayer(xBase: number, yBase: number, layer: number, details: number[]): void;
    GetTreeInstance(index: number): UnityEngine.TreeInstance;
    SetTreeInstance(index: number, instance: UnityEngine.TreeInstance): void;
    GetAlphamaps(x: number, y: number, width: number, height: number): number[];
    SetAlphamaps(x: number, y: number, map: number[]): void;
    // properties
    readonly heightmapWidth: number;
    readonly heightmapHeight: number;
    heightmapResolution: number;
    readonly heightmapScale: UnityEngine.Vector3;
    size: UnityEngine.Vector3;
    readonly bounds: UnityEngine.Bounds;
    thickness: number;
    wavingGrassStrength: number;
    wavingGrassAmount: number;
    wavingGrassSpeed: number;
    wavingGrassTint: UnityEngine.Color;
    readonly detailWidth: number;
    readonly detailHeight: number;
    readonly detailResolution: number;
    detailPrototypes: UnityEngine.DetailPrototype[];
    treeInstances: UnityEngine.TreeInstance[];
    readonly treeInstanceCount: number;
    treePrototypes: UnityEngine.TreePrototype[];
    readonly alphamapLayers: number;
    alphamapResolution: number;
    readonly alphamapWidth: number;
    readonly alphamapHeight: number;
    baseMapResolution: number;
    readonly alphamapTextures: UnityEngine.Texture2D[];
    splatPrototypes: UnityEngine.SplatPrototype[];
    // fields
  }
}
declare namespace UnityEngine {
  class TerrainRenderFlags extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static heightmap: UnityEngine.TerrainRenderFlags;
    static trees: UnityEngine.TerrainRenderFlags;
    static details: UnityEngine.TerrainRenderFlags;
    static all: UnityEngine.TerrainRenderFlags;
  }
}
declare namespace UnityEngine {
  class TexGenMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static None: UnityEngine.TexGenMode;
    static SphereMap: UnityEngine.TexGenMode;
    static Object: UnityEngine.TexGenMode;
    static EyeLinear: UnityEngine.TexGenMode;
    static CubeReflect: UnityEngine.TexGenMode;
    static CubeNormal: UnityEngine.TexGenMode;
  }
}
declare namespace UnityEngine {
  class TextAlignment extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Left: UnityEngine.TextAlignment;
    static Center: UnityEngine.TextAlignment;
    static Right: UnityEngine.TextAlignment;
  }
}
declare namespace UnityEngine {
  class TextAnchor extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static UpperLeft: UnityEngine.TextAnchor;
    static UpperCenter: UnityEngine.TextAnchor;
    static UpperRight: UnityEngine.TextAnchor;
    static MiddleLeft: UnityEngine.TextAnchor;
    static MiddleCenter: UnityEngine.TextAnchor;
    static MiddleRight: UnityEngine.TextAnchor;
    static LowerLeft: UnityEngine.TextAnchor;
    static LowerCenter: UnityEngine.TextAnchor;
    static LowerRight: UnityEngine.TextAnchor;
  }
}
declare namespace UnityEngine {
  class TextAreaAttribute extends UnityEngine.PropertyAttribute {
    // constructors
    constructor();
    constructor(minLines: number, maxLines: number);
    // methods
    // properties
    // fields
    minLines: number;
    maxLines: number;
  }
}
declare namespace UnityEngine {
  class TextAsset extends UnityEngine.Object {
    // constructors
    constructor();
    // methods
    ToString(): string;
    // properties
    readonly text: string;
    readonly bytes: number[];
    // fields
  }
}
declare namespace UnityEngine {
  class TextClipping extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Overflow: UnityEngine.TextClipping;
    static Clip: UnityEngine.TextClipping;
  }
}
declare namespace UnityEngine.TextEditor {
  class CharacterType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static LetterLike: UnityEngine.TextEditor.CharacterType;
    static Symbol: UnityEngine.TextEditor.CharacterType;
    static Symbol2: UnityEngine.TextEditor.CharacterType;
    static WhiteSpace: UnityEngine.TextEditor.CharacterType;
  }
}
declare namespace UnityEngine {
  class TextEditor extends System.Object {
    // constructors
    constructor();
    // methods
    OnFocus(): void;
    OnLostFocus(): void;
    HandleKeyEvent(e: UnityEngine.Event): boolean;
    DeleteLineBack(): boolean;
    DeleteWordBack(): boolean;
    DeleteWordForward(): boolean;
    Delete(): boolean;
    CanPaste(): boolean;
    Backspace(): boolean;
    SelectAll(): void;
    SelectNone(): void;
    DeleteSelection(): boolean;
    ReplaceSelection(replace: string): void;
    Insert(c: any): void;
    MoveSelectionToAltCursor(): void;
    MoveRight(): void;
    MoveLeft(): void;
    MoveUp(): void;
    MoveDown(): void;
    MoveLineStart(): void;
    MoveLineEnd(): void;
    MoveGraphicalLineStart(): void;
    MoveGraphicalLineEnd(): void;
    MoveTextStart(): void;
    MoveTextEnd(): void;
    MoveParagraphForward(): void;
    MoveParagraphBackward(): void;
    MoveCursorToPosition(cursorPosition: UnityEngine.Vector2): void;
    MoveAltCursorToPosition(cursorPosition: UnityEngine.Vector2): void;
    IsOverSelection(cursorPosition: UnityEngine.Vector2): boolean;
    SelectToPosition(cursorPosition: UnityEngine.Vector2): void;
    SelectLeft(): void;
    SelectRight(): void;
    SelectUp(): void;
    SelectDown(): void;
    SelectTextEnd(): void;
    SelectTextStart(): void;
    MouseDragSelectsWholeWords(on: boolean): void;
    DblClickSnap(snapping: UnityEngine.TextEditor.DblClickSnapping): void;
    MoveWordRight(): void;
    MoveToStartOfNextWord(): void;
    MoveToEndOfPreviousWord(): void;
    SelectToStartOfNextWord(): void;
    SelectToEndOfPreviousWord(): void;
    FindStartOfNextWord(p: number): number;
    MoveWordLeft(): void;
    SelectWordRight(): void;
    SelectWordLeft(): void;
    ExpandSelectGraphicalLineStart(): void;
    ExpandSelectGraphicalLineEnd(): void;
    SelectGraphicalLineStart(): void;
    SelectGraphicalLineEnd(): void;
    SelectParagraphForward(): void;
    SelectParagraphBackward(): void;
    SelectCurrentWord(): void;
    SelectCurrentParagraph(): void;
    UpdateScrollOffsetIfNeeded(evt: UnityEngine.Event): void;
    DrawCursor(newText: string): void;
    SaveBackup(): void;
    Undo(): void;
    Cut(): boolean;
    Copy(): void;
    Paste(): boolean;
    DetectFocusChange(): void;
    // properties
    content: UnityEngine.GUIContent;
    text: string;
    position: UnityEngine.Rect;
    cursorIndex: number;
    selectIndex: number;
    readonly hasSelection: boolean;
    readonly SelectedText: string;
    // fields
    keyboardOnScreen: UnityEngine.TouchScreenKeyboard;
    controlID: number;
    style: UnityEngine.GUIStyle;
    multiline: boolean;
    hasHorizontalCursorPos: boolean;
    isPasswordField: boolean;
    scrollOffset: UnityEngine.Vector2;
    graphicalCursorPos: UnityEngine.Vector2;
    graphicalSelectCursorPos: UnityEngine.Vector2;
  }
}
declare namespace UnityEngine.TextEditor {
  class DblClickSnapping extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static WORDS: UnityEngine.TextEditor.DblClickSnapping;
    static PARAGRAPHS: UnityEngine.TextEditor.DblClickSnapping;
  }
}
declare namespace UnityEngine.TextEditor {
  class TextEditOp extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static MoveLeft: UnityEngine.TextEditor.TextEditOp;
    static MoveRight: UnityEngine.TextEditor.TextEditOp;
    static MoveUp: UnityEngine.TextEditor.TextEditOp;
    static MoveDown: UnityEngine.TextEditor.TextEditOp;
    static MoveLineStart: UnityEngine.TextEditor.TextEditOp;
    static MoveLineEnd: UnityEngine.TextEditor.TextEditOp;
    static MoveTextStart: UnityEngine.TextEditor.TextEditOp;
    static MoveTextEnd: UnityEngine.TextEditor.TextEditOp;
    static MovePageUp: UnityEngine.TextEditor.TextEditOp;
    static MovePageDown: UnityEngine.TextEditor.TextEditOp;
    static MoveGraphicalLineStart: UnityEngine.TextEditor.TextEditOp;
    static MoveGraphicalLineEnd: UnityEngine.TextEditor.TextEditOp;
    static MoveWordLeft: UnityEngine.TextEditor.TextEditOp;
    static MoveWordRight: UnityEngine.TextEditor.TextEditOp;
    static MoveParagraphForward: UnityEngine.TextEditor.TextEditOp;
    static MoveParagraphBackward: UnityEngine.TextEditor.TextEditOp;
    static MoveToStartOfNextWord: UnityEngine.TextEditor.TextEditOp;
    static MoveToEndOfPreviousWord: UnityEngine.TextEditor.TextEditOp;
    static SelectLeft: UnityEngine.TextEditor.TextEditOp;
    static SelectRight: UnityEngine.TextEditor.TextEditOp;
    static SelectUp: UnityEngine.TextEditor.TextEditOp;
    static SelectDown: UnityEngine.TextEditor.TextEditOp;
    static SelectTextStart: UnityEngine.TextEditor.TextEditOp;
    static SelectTextEnd: UnityEngine.TextEditor.TextEditOp;
    static SelectPageUp: UnityEngine.TextEditor.TextEditOp;
    static SelectPageDown: UnityEngine.TextEditor.TextEditOp;
    static ExpandSelectGraphicalLineStart: UnityEngine.TextEditor.TextEditOp;
    static ExpandSelectGraphicalLineEnd: UnityEngine.TextEditor.TextEditOp;
    static SelectGraphicalLineStart: UnityEngine.TextEditor.TextEditOp;
    static SelectGraphicalLineEnd: UnityEngine.TextEditor.TextEditOp;
    static SelectWordLeft: UnityEngine.TextEditor.TextEditOp;
    static SelectWordRight: UnityEngine.TextEditor.TextEditOp;
    static SelectToEndOfPreviousWord: UnityEngine.TextEditor.TextEditOp;
    static SelectToStartOfNextWord: UnityEngine.TextEditor.TextEditOp;
    static SelectParagraphBackward: UnityEngine.TextEditor.TextEditOp;
    static SelectParagraphForward: UnityEngine.TextEditor.TextEditOp;
    static Delete: UnityEngine.TextEditor.TextEditOp;
    static Backspace: UnityEngine.TextEditor.TextEditOp;
    static DeleteWordBack: UnityEngine.TextEditor.TextEditOp;
    static DeleteWordForward: UnityEngine.TextEditor.TextEditOp;
    static DeleteLineBack: UnityEngine.TextEditor.TextEditOp;
    static Cut: UnityEngine.TextEditor.TextEditOp;
    static Copy: UnityEngine.TextEditor.TextEditOp;
    static Paste: UnityEngine.TextEditor.TextEditOp;
    static SelectAll: UnityEngine.TextEditor.TextEditOp;
    static SelectNone: UnityEngine.TextEditor.TextEditOp;
    static ScrollStart: UnityEngine.TextEditor.TextEditOp;
    static ScrollEnd: UnityEngine.TextEditor.TextEditOp;
    static ScrollPageUp: UnityEngine.TextEditor.TextEditOp;
    static ScrollPageDown: UnityEngine.TextEditor.TextEditOp;
  }
}
declare namespace UnityEngine {
  class TextGenerationError extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static None: UnityEngine.TextGenerationError;
    static CustomSizeOnNonDynamicFont: UnityEngine.TextGenerationError;
    static CustomStyleOnNonDynamicFont: UnityEngine.TextGenerationError;
    static NoFont: UnityEngine.TextGenerationError;
  }
}
declare namespace UnityEngine {
  class TextGenerationSettings extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    Equals(other: UnityEngine.TextGenerationSettings): boolean;
    Equals(obj: any): boolean;
    // properties
    // fields
    font: UnityEngine.Font;
    color: UnityEngine.Color;
    fontSize: number;
    lineSpacing: number;
    richText: boolean;
    scaleFactor: number;
    fontStyle: UnityEngine.FontStyle;
    textAnchor: UnityEngine.TextAnchor;
    alignByGeometry: boolean;
    resizeTextForBestFit: boolean;
    resizeTextMinSize: number;
    resizeTextMaxSize: number;
    updateBounds: boolean;
    verticalOverflow: UnityEngine.VerticalWrapMode;
    horizontalOverflow: UnityEngine.HorizontalWrapMode;
    generationExtents: UnityEngine.Vector2;
    pivot: UnityEngine.Vector2;
    generateOutOfBounds: boolean;
  }
}
declare namespace UnityEngine {
  class TextGenerator extends System.Object {
    // constructors
    constructor();
    constructor(initialCapacity: number);
    // methods
    Invalidate(): void;
    GetCharacters(characters: UnityEngine.UICharInfo[]): void;
    GetLines(lines: UnityEngine.UILineInfo[]): void;
    GetVertices(vertices: UnityEngine.UIVertex[]): void;
    GetPreferredWidth(str: string, settings: UnityEngine.TextGenerationSettings): number;
    GetPreferredHeight(str: string, settings: UnityEngine.TextGenerationSettings): number;
    PopulateWithErrors(str: string, settings: UnityEngine.TextGenerationSettings, context: UnityEngine.GameObject): boolean;
    Populate(str: string, settings: UnityEngine.TextGenerationSettings): boolean;
    GetVerticesArray(): UnityEngine.UIVertex[];
    GetCharactersArray(): UnityEngine.UICharInfo[];
    GetLinesArray(): UnityEngine.UILineInfo[];
    // properties
    readonly verts: UnityEngine.UIVertex[];
    readonly characters: UnityEngine.UICharInfo[];
    readonly lines: UnityEngine.UILineInfo[];
    readonly rectExtents: UnityEngine.Rect;
    readonly vertexCount: number;
    readonly characterCount: number;
    readonly characterCountVisible: number;
    readonly lineCount: number;
    readonly fontSizeUsedForBestFit: number;
    // fields
  }
}
declare namespace UnityEngine {
  class TextMesh extends UnityEngine.Component {
    // constructors
    constructor();
    // methods
    // properties
    text: string;
    font: UnityEngine.Font;
    fontSize: number;
    fontStyle: UnityEngine.FontStyle;
    offsetZ: number;
    alignment: UnityEngine.TextAlignment;
    anchor: UnityEngine.TextAnchor;
    characterSize: number;
    lineSpacing: number;
    tabSize: number;
    richText: boolean;
    color: UnityEngine.Color;
    // fields
  }
}
declare namespace UnityEngine {
  class Texture extends UnityEngine.Object {
    // constructors
    constructor();
    // methods
    static SetGlobalAnisotropicFilteringLimits(forcedMin: number, globalMax: number): void;
    GetNativeTexturePtr(): any;
    GetNativeTextureID(): number;
    // properties
    static masterTextureLimit: number;
    static anisotropicFiltering: UnityEngine.AnisotropicFiltering;
    width: number;
    height: number;
    dimension: UnityEngine.Rendering.TextureDimension;
    filterMode: UnityEngine.FilterMode;
    anisoLevel: number;
    wrapMode: UnityEngine.TextureWrapMode;
    mipMapBias: number;
    readonly texelSize: UnityEngine.Vector2;
    // fields
  }
}
declare namespace UnityEngine {
  class Texture2D extends UnityEngine.Texture {
    // constructors
    constructor(width: number, height: number);
    constructor(width: number, height: number, format: UnityEngine.TextureFormat, mipmap: boolean);
    constructor(width: number, height: number, format: UnityEngine.TextureFormat, mipmap: boolean, linear: boolean);
    // methods
    static CreateExternalTexture(width: number, height: number, format: UnityEngine.TextureFormat, mipmap: boolean, linear: boolean, nativeTex: any): UnityEngine.Texture2D;
    UpdateExternalTexture(nativeTex: any): void;
    SetPixel(x: number, y: number, color: UnityEngine.Color): void;
    GetPixel(x: number, y: number): UnityEngine.Color;
    GetPixelBilinear(u: number, v: number): UnityEngine.Color;
    SetPixels(colors: UnityEngine.Color[]): void;
    SetPixels(colors: UnityEngine.Color[], miplevel: number): void;
    SetPixels(x: number, y: number, blockWidth: number, blockHeight: number, colors: UnityEngine.Color[], miplevel: number): void;
    SetPixels(x: number, y: number, blockWidth: number, blockHeight: number, colors: UnityEngine.Color[]): void;
    SetPixels32(colors: UnityEngine.Color32[]): void;
    SetPixels32(colors: UnityEngine.Color32[], miplevel: number): void;
    SetPixels32(x: number, y: number, blockWidth: number, blockHeight: number, colors: UnityEngine.Color32[]): void;
    SetPixels32(x: number, y: number, blockWidth: number, blockHeight: number, colors: UnityEngine.Color32[], miplevel: number): void;
    LoadImage(data: number[], markNonReadable: boolean): boolean;
    LoadImage(data: number[]): boolean;
    LoadRawTextureData(data: number[]): void;
    LoadRawTextureData(data: any, size: number): void;
    GetRawTextureData(): number[];
    GetPixels(): UnityEngine.Color[];
    GetPixels(miplevel: number): UnityEngine.Color[];
    GetPixels(x: number, y: number, blockWidth: number, blockHeight: number, miplevel: number): UnityEngine.Color[];
    GetPixels(x: number, y: number, blockWidth: number, blockHeight: number): UnityEngine.Color[];
    GetPixels32(miplevel: number): UnityEngine.Color32[];
    GetPixels32(): UnityEngine.Color32[];
    Apply(updateMipmaps: boolean, makeNoLongerReadable: boolean): void;
    Apply(updateMipmaps: boolean): void;
    Apply(): void;
    Resize(width: number, height: number, format: UnityEngine.TextureFormat, hasMipMap: boolean): boolean;
    Resize(width: number, height: number): boolean;
    Compress(highQuality: boolean): void;
    PackTextures(textures: UnityEngine.Texture2D[], padding: number, maximumAtlasSize: number, makeNoLongerReadable: boolean): UnityEngine.Rect[];
    PackTextures(textures: UnityEngine.Texture2D[], padding: number, maximumAtlasSize: number): UnityEngine.Rect[];
    PackTextures(textures: UnityEngine.Texture2D[], padding: number): UnityEngine.Rect[];
    ReadPixels(source: UnityEngine.Rect, destX: number, destY: number, recalculateMipMaps: boolean): void;
    ReadPixels(source: UnityEngine.Rect, destX: number, destY: number): void;
    EncodeToPNG(): number[];
    EncodeToJPG(quality: number): number[];
    EncodeToJPG(): number[];
    // properties
    readonly mipmapCount: number;
    readonly format: UnityEngine.TextureFormat;
    static readonly whiteTexture: UnityEngine.Texture2D;
    static readonly blackTexture: UnityEngine.Texture2D;
    alphaIsTransparency: boolean;
    // fields
  }
}
declare namespace UnityEngine {
  class Texture2DArray extends UnityEngine.Texture {
    // constructors
    constructor(width: number, height: number, depth: number, format: UnityEngine.TextureFormat, mipmap: boolean);
    constructor(width: number, height: number, depth: number, format: UnityEngine.TextureFormat, mipmap: boolean, linear: boolean);
    // methods
    Apply(updateMipmaps: boolean, makeNoLongerReadable: boolean): void;
    Apply(updateMipmaps: boolean): void;
    Apply(): void;
    SetPixels(colors: UnityEngine.Color[], arrayElement: number, miplevel: number): void;
    SetPixels(colors: UnityEngine.Color[], arrayElement: number): void;
    SetPixels32(colors: UnityEngine.Color32[], arrayElement: number, miplevel: number): void;
    SetPixels32(colors: UnityEngine.Color32[], arrayElement: number): void;
    GetPixels(arrayElement: number, miplevel: number): UnityEngine.Color[];
    GetPixels(arrayElement: number): UnityEngine.Color[];
    GetPixels32(arrayElement: number, miplevel: number): UnityEngine.Color32[];
    GetPixels32(arrayElement: number): UnityEngine.Color32[];
    // properties
    readonly depth: number;
    readonly format: UnityEngine.TextureFormat;
    // fields
  }
}
declare namespace UnityEngine {
  class Texture3D extends UnityEngine.Texture {
    // constructors
    constructor(width: number, height: number, depth: number, format: UnityEngine.TextureFormat, mipmap: boolean);
    // methods
    GetPixels(miplevel: number): UnityEngine.Color[];
    GetPixels(): UnityEngine.Color[];
    GetPixels32(miplevel: number): UnityEngine.Color32[];
    GetPixels32(): UnityEngine.Color32[];
    SetPixels(colors: UnityEngine.Color[], miplevel: number): void;
    SetPixels(colors: UnityEngine.Color[]): void;
    SetPixels32(colors: UnityEngine.Color32[], miplevel: number): void;
    SetPixels32(colors: UnityEngine.Color32[]): void;
    Apply(updateMipmaps: boolean, makeNoLongerReadable: boolean): void;
    Apply(updateMipmaps: boolean): void;
    Apply(): void;
    // properties
    readonly depth: number;
    readonly format: UnityEngine.TextureFormat;
    // fields
  }
}
declare namespace UnityEngine {
  class TextureCompressionQuality extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Fast: UnityEngine.TextureCompressionQuality;
    static Normal: UnityEngine.TextureCompressionQuality;
    static Best: UnityEngine.TextureCompressionQuality;
  }
}
declare namespace UnityEngine {
  class TextureFormat extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Alpha8: UnityEngine.TextureFormat;
    static ARGB4444: UnityEngine.TextureFormat;
    static RGB24: UnityEngine.TextureFormat;
    static RGBA32: UnityEngine.TextureFormat;
    static ARGB32: UnityEngine.TextureFormat;
    static RGB565: UnityEngine.TextureFormat;
    static R16: UnityEngine.TextureFormat;
    static DXT1: UnityEngine.TextureFormat;
    static DXT5: UnityEngine.TextureFormat;
    static RGBA4444: UnityEngine.TextureFormat;
    static BGRA32: UnityEngine.TextureFormat;
    static RHalf: UnityEngine.TextureFormat;
    static RGHalf: UnityEngine.TextureFormat;
    static RGBAHalf: UnityEngine.TextureFormat;
    static RFloat: UnityEngine.TextureFormat;
    static RGFloat: UnityEngine.TextureFormat;
    static RGBAFloat: UnityEngine.TextureFormat;
    static YUY2: UnityEngine.TextureFormat;
    static BC4: UnityEngine.TextureFormat;
    static BC5: UnityEngine.TextureFormat;
    static BC6H: UnityEngine.TextureFormat;
    static BC7: UnityEngine.TextureFormat;
    static DXT1Crunched: UnityEngine.TextureFormat;
    static DXT5Crunched: UnityEngine.TextureFormat;
    static PVRTC_RGB2: UnityEngine.TextureFormat;
    static PVRTC_RGBA2: UnityEngine.TextureFormat;
    static PVRTC_RGB4: UnityEngine.TextureFormat;
    static PVRTC_RGBA4: UnityEngine.TextureFormat;
    static ETC_RGB4: UnityEngine.TextureFormat;
    static ATC_RGB4: UnityEngine.TextureFormat;
    static ATC_RGBA8: UnityEngine.TextureFormat;
    static EAC_R: UnityEngine.TextureFormat;
    static EAC_R_SIGNED: UnityEngine.TextureFormat;
    static EAC_RG: UnityEngine.TextureFormat;
    static EAC_RG_SIGNED: UnityEngine.TextureFormat;
    static ETC2_RGB: UnityEngine.TextureFormat;
    static ETC2_RGBA1: UnityEngine.TextureFormat;
    static ETC2_RGBA8: UnityEngine.TextureFormat;
    static ASTC_RGB_4x4: UnityEngine.TextureFormat;
    static ASTC_RGB_5x5: UnityEngine.TextureFormat;
    static ASTC_RGB_6x6: UnityEngine.TextureFormat;
    static ASTC_RGB_8x8: UnityEngine.TextureFormat;
    static ASTC_RGB_10x10: UnityEngine.TextureFormat;
    static ASTC_RGB_12x12: UnityEngine.TextureFormat;
    static ASTC_RGBA_4x4: UnityEngine.TextureFormat;
    static ASTC_RGBA_5x5: UnityEngine.TextureFormat;
    static ASTC_RGBA_6x6: UnityEngine.TextureFormat;
    static ASTC_RGBA_8x8: UnityEngine.TextureFormat;
    static ASTC_RGBA_10x10: UnityEngine.TextureFormat;
    static ASTC_RGBA_12x12: UnityEngine.TextureFormat;
    static ETC_RGB4_3DS: UnityEngine.TextureFormat;
    static ETC_RGBA8_3DS: UnityEngine.TextureFormat;
    static PVRTC_2BPP_RGB: UnityEngine.TextureFormat;
    static PVRTC_2BPP_RGBA: UnityEngine.TextureFormat;
    static PVRTC_4BPP_RGB: UnityEngine.TextureFormat;
    static PVRTC_4BPP_RGBA: UnityEngine.TextureFormat;
  }
}
declare namespace UnityEngine {
  class TextureWrapMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Repeat: UnityEngine.TextureWrapMode;
    static Clamp: UnityEngine.TextureWrapMode;
  }
}
declare namespace UnityEngine {
  class ThreadAndSerializationSafe extends System.Attribute {
    // constructors
    constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class ThreadPriority extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Low: UnityEngine.ThreadPriority;
    static BelowNormal: UnityEngine.ThreadPriority;
    static Normal: UnityEngine.ThreadPriority;
    static High: UnityEngine.ThreadPriority;
  }
}
declare namespace UnityEngine {
  class ThreadSafeAttribute extends System.Attribute {
    // constructors
    constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class Time extends System.Object {
    // constructors
    constructor();
    // methods
    // properties
    static readonly time: number;
    static readonly timeSinceLevelLoad: number;
    static readonly deltaTime: number;
    static readonly fixedTime: number;
    static readonly unscaledTime: number;
    static readonly unscaledDeltaTime: number;
    static fixedDeltaTime: number;
    static maximumDeltaTime: number;
    static readonly smoothDeltaTime: number;
    static maximumParticleDeltaTime: number;
    static timeScale: number;
    static readonly frameCount: number;
    static readonly renderedFrameCount: number;
    static readonly realtimeSinceStartup: number;
    static captureFramerate: number;
    // fields
  }
}
declare namespace UnityEngine.Tizen {
  class Window extends System.Object {
    // constructors
    constructor();
    // methods
    // properties
    static readonly windowHandle: any;
    static readonly evasGL: any;
    // fields
  }
}
declare namespace UnityEngine {
  class TizenActivityIndicatorStyle extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static DontShow: UnityEngine.TizenActivityIndicatorStyle;
    static Large: UnityEngine.TizenActivityIndicatorStyle;
    static InversedLarge: UnityEngine.TizenActivityIndicatorStyle;
    static Small: UnityEngine.TizenActivityIndicatorStyle;
    static InversedSmall: UnityEngine.TizenActivityIndicatorStyle;
  }
}
declare namespace UnityEngine {
  class TooltipAttribute extends UnityEngine.PropertyAttribute {
    // constructors
    constructor(tooltip: string);
    // methods
    // properties
    // fields
    tooltip: string;
  }
}
declare namespace UnityEngine {
  class Touch extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    fingerId: number;
    position: UnityEngine.Vector2;
    rawPosition: UnityEngine.Vector2;
    deltaPosition: UnityEngine.Vector2;
    deltaTime: number;
    tapCount: number;
    phase: UnityEngine.TouchPhase;
    pressure: number;
    maximumPossiblePressure: number;
    type: UnityEngine.TouchType;
    altitudeAngle: number;
    azimuthAngle: number;
    radius: number;
    radiusVariance: number;
    // fields
  }
}
declare namespace UnityEngine {
  class TouchPhase extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Began: UnityEngine.TouchPhase;
    static Moved: UnityEngine.TouchPhase;
    static Stationary: UnityEngine.TouchPhase;
    static Ended: UnityEngine.TouchPhase;
    static Canceled: UnityEngine.TouchPhase;
  }
}
declare namespace UnityEngine {
  class TouchScreenKeyboard extends System.Object {
    // constructors
    constructor(text: string, keyboardType: UnityEngine.TouchScreenKeyboardType, autocorrection: boolean, multiline: boolean, secure: boolean, alert: boolean, textPlaceholder: string);
    // methods
    static Open(text: string, keyboardType: UnityEngine.TouchScreenKeyboardType, autocorrection: boolean, multiline: boolean, secure: boolean, alert: boolean): UnityEngine.TouchScreenKeyboard;
    static Open(text: string, keyboardType: UnityEngine.TouchScreenKeyboardType, autocorrection: boolean, multiline: boolean, secure: boolean): UnityEngine.TouchScreenKeyboard;
    static Open(text: string, keyboardType: UnityEngine.TouchScreenKeyboardType, autocorrection: boolean, multiline: boolean): UnityEngine.TouchScreenKeyboard;
    static Open(text: string, keyboardType: UnityEngine.TouchScreenKeyboardType, autocorrection: boolean): UnityEngine.TouchScreenKeyboard;
    static Open(text: string, keyboardType: UnityEngine.TouchScreenKeyboardType): UnityEngine.TouchScreenKeyboard;
    static Open(text: string): UnityEngine.TouchScreenKeyboard;
    static Open(text: string, keyboardType: UnityEngine.TouchScreenKeyboardType, autocorrection: boolean, multiline: boolean, secure: boolean, alert: boolean, textPlaceholder: string): UnityEngine.TouchScreenKeyboard;
    // properties
    static readonly isSupported: boolean;
    text: string;
    static hideInput: boolean;
    active: boolean;
    readonly done: boolean;
    readonly wasCanceled: boolean;
    targetDisplay: number;
    static readonly area: UnityEngine.Rect;
    static readonly visible: boolean;
    // fields
  }
}
declare namespace UnityEngine {
  class TouchScreenKeyboardType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Default: UnityEngine.TouchScreenKeyboardType;
    static ASCIICapable: UnityEngine.TouchScreenKeyboardType;
    static NumbersAndPunctuation: UnityEngine.TouchScreenKeyboardType;
    static URL: UnityEngine.TouchScreenKeyboardType;
    static NumberPad: UnityEngine.TouchScreenKeyboardType;
    static PhonePad: UnityEngine.TouchScreenKeyboardType;
    static NamePhonePad: UnityEngine.TouchScreenKeyboardType;
    static EmailAddress: UnityEngine.TouchScreenKeyboardType;
    static NintendoNetworkAccount: UnityEngine.TouchScreenKeyboardType;
  }
}
declare namespace UnityEngine {
  class TouchScreenKeyboard_InternalConstructorHelperArguments extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    keyboardType: number;
    autocorrection: number;
    multiline: number;
    secure: number;
    alert: number;
  }
}
declare namespace UnityEngine {
  class TouchType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Direct: UnityEngine.TouchType;
    static Indirect: UnityEngine.TouchType;
    static Stylus: UnityEngine.TouchType;
  }
}
declare namespace UnityEngine {
  class TrackedReference extends System.Object {
    // constructors
    protected constructor();
    // methods
    Equals(o: any): boolean;
    GetHashCode(): number;
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class TrailRenderer extends UnityEngine.Renderer {
    // constructors
    constructor();
    // methods
    Clear(): void;
    // properties
    time: number;
    startWidth: number;
    endWidth: number;
    widthCurve: UnityEngine.AnimationCurve;
    widthMultiplier: number;
    startColor: UnityEngine.Color;
    endColor: UnityEngine.Color;
    colorGradient: UnityEngine.Gradient;
    autodestruct: boolean;
    numCornerVertices: number;
    numCapVertices: number;
    minVertexDistance: number;
    textureMode: UnityEngine.LineTextureMode;
    // fields
  }
}
declare namespace UnityEngine {
  class Transform extends UnityEngine.Component {
    // constructors
    protected constructor();
    // methods
    SetParent(parent: UnityEngine.Transform): void;
    SetParent(parent: UnityEngine.Transform, worldPositionStays: boolean): void;
    Translate(translation: UnityEngine.Vector3): void;
    Translate(translation: UnityEngine.Vector3, relativeTo: UnityEngine.Space): void;
    Translate(x: number, y: number, z: number): void;
    Translate(x: number, y: number, z: number, relativeTo: UnityEngine.Space): void;
    Translate(translation: UnityEngine.Vector3, relativeTo: UnityEngine.Transform): void;
    Translate(x: number, y: number, z: number, relativeTo: UnityEngine.Transform): void;
    Rotate(eulerAngles: UnityEngine.Vector3): void;
    Rotate(eulerAngles: UnityEngine.Vector3, relativeTo: UnityEngine.Space): void;
    Rotate(xAngle: number, yAngle: number, zAngle: number): void;
    Rotate(xAngle: number, yAngle: number, zAngle: number, relativeTo: UnityEngine.Space): void;
    Rotate(axis: UnityEngine.Vector3, angle: number): void;
    Rotate(axis: UnityEngine.Vector3, angle: number, relativeTo: UnityEngine.Space): void;
    RotateAround(point: UnityEngine.Vector3, axis: UnityEngine.Vector3, angle: number): void;
    RotateAround(axis: UnityEngine.Vector3, angle: number): void;
    LookAt(target: UnityEngine.Transform): void;
    LookAt(target: UnityEngine.Transform, worldUp: UnityEngine.Vector3): void;
    LookAt(worldPosition: UnityEngine.Vector3, worldUp: UnityEngine.Vector3): void;
    LookAt(worldPosition: UnityEngine.Vector3): void;
    TransformDirection(direction: UnityEngine.Vector3): UnityEngine.Vector3;
    TransformDirection(x: number, y: number, z: number): UnityEngine.Vector3;
    InverseTransformDirection(direction: UnityEngine.Vector3): UnityEngine.Vector3;
    InverseTransformDirection(x: number, y: number, z: number): UnityEngine.Vector3;
    TransformVector(vector: UnityEngine.Vector3): UnityEngine.Vector3;
    TransformVector(x: number, y: number, z: number): UnityEngine.Vector3;
    InverseTransformVector(vector: UnityEngine.Vector3): UnityEngine.Vector3;
    InverseTransformVector(x: number, y: number, z: number): UnityEngine.Vector3;
    TransformPoint(position: UnityEngine.Vector3): UnityEngine.Vector3;
    TransformPoint(x: number, y: number, z: number): UnityEngine.Vector3;
    InverseTransformPoint(position: UnityEngine.Vector3): UnityEngine.Vector3;
    InverseTransformPoint(x: number, y: number, z: number): UnityEngine.Vector3;
    DetachChildren(): void;
    SetAsFirstSibling(): void;
    SetAsLastSibling(): void;
    SetSiblingIndex(index: number): void;
    GetSiblingIndex(): number;
    Find(name: string): UnityEngine.Transform;
    IsChildOf(parent: UnityEngine.Transform): boolean;
    FindChild(name: string): UnityEngine.Transform;
    GetEnumerator(): any;
    RotateAroundLocal(axis: UnityEngine.Vector3, angle: number): void;
    GetChild(index: number): UnityEngine.Transform;
    GetChildCount(): number;
    // properties
    position: UnityEngine.Vector3;
    localPosition: UnityEngine.Vector3;
    eulerAngles: UnityEngine.Vector3;
    localEulerAngles: UnityEngine.Vector3;
    right: UnityEngine.Vector3;
    up: UnityEngine.Vector3;
    forward: UnityEngine.Vector3;
    rotation: UnityEngine.Quaternion;
    localRotation: UnityEngine.Quaternion;
    localScale: UnityEngine.Vector3;
    parent: UnityEngine.Transform;
    readonly worldToLocalMatrix: UnityEngine.Matrix4x4;
    readonly localToWorldMatrix: UnityEngine.Matrix4x4;
    readonly root: UnityEngine.Transform;
    readonly childCount: number;
    readonly lossyScale: UnityEngine.Vector3;
    hasChanged: boolean;
    hierarchyCapacity: number;
    readonly hierarchyCount: number;
    // fields
  }
}
declare namespace UnityEngine.Transform {
  class Enumerator extends System.Object {
    // constructors
    protected constructor();
    // methods
    MoveNext(): boolean;
    Reset(): void;
    // properties
    readonly Current: any;
    // fields
  }
}
declare namespace UnityEngine {
  class TransitionType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Normal: UnityEngine.TransitionType;
    static Entry: UnityEngine.TransitionType;
    static Exit: UnityEngine.TransitionType;
  }
}
declare namespace UnityEngine {
  class TransparencySortMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Default: UnityEngine.TransparencySortMode;
    static Perspective: UnityEngine.TransparencySortMode;
    static Orthographic: UnityEngine.TransparencySortMode;
  }
}
declare namespace UnityEngine {
  class Tree extends UnityEngine.Component {
    // constructors
    constructor();
    // methods
    // properties
    data: UnityEngine.ScriptableObject;
    readonly hasSpeedTreeWind: boolean;
    // fields
  }
}
declare namespace UnityEngine {
  class TreeInstance extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    position: UnityEngine.Vector3;
    widthScale: number;
    heightScale: number;
    rotation: number;
    color: UnityEngine.Color32;
    lightmapColor: UnityEngine.Color32;
    prototypeIndex: number;
  }
}
declare namespace UnityEngine {
  class TreePrototype extends System.Object {
    // constructors
    constructor();
    // methods
    // properties
    prefab: UnityEngine.GameObject;
    bendFactor: number;
    // fields
  }
}
declare namespace UnityEngine {
  class Types extends System.Object {
    // constructors
    protected constructor();
    // methods
    static GetType(typeName: string, assemblyName: string): any;
    GetType(): any;
    // properties
    // fields
  }
}
declare namespace UnityEngine.UI {
  class AnimationTriggers extends System.Object {
    // constructors
    constructor();
    // methods
    // properties
    normalTrigger: string;
    highlightedTrigger: string;
    pressedTrigger: string;
    disabledTrigger: string;
    // fields
  }
}
declare namespace UnityEngine.UI.AspectRatioFitter {
  class AspectMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static None: UnityEngine.UI.AspectRatioFitter.AspectMode;
    static WidthControlsHeight: UnityEngine.UI.AspectRatioFitter.AspectMode;
    static HeightControlsWidth: UnityEngine.UI.AspectRatioFitter.AspectMode;
    static FitInParent: UnityEngine.UI.AspectRatioFitter.AspectMode;
    static EnvelopeParent: UnityEngine.UI.AspectRatioFitter.AspectMode;
  }
}
declare namespace UnityEngine.UI {
  class AspectRatioFitter extends UnityEngine.EventSystems.UIBehaviour {
    // constructors
    protected constructor();
    // methods
    SetLayoutHorizontal(): void;
    SetLayoutVertical(): void;
    // properties
    aspectMode: UnityEngine.UI.AspectRatioFitter.AspectMode;
    aspectRatio: number;
    // fields
  }
}
declare namespace UnityEngine.UI {
  class BaseMeshEffect extends UnityEngine.EventSystems.UIBehaviour {
    // constructors
    protected constructor();
    // methods
    ModifyMesh(mesh: UnityEngine.Mesh): void;
    ModifyMesh(vh: UnityEngine.UI.VertexHelper): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine.UI {
  class BaseVertexEffect extends System.Object {
    // constructors
    protected constructor();
    // methods
    ModifyVertices(vertices: UnityEngine.UIVertex[]): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine.UI.Button {
  class ButtonClickedEvent extends UnityEngine.Events.UnityEvent {
    // constructors
    constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine.UI {
  class Button extends UnityEngine.UI.Selectable {
    // constructors
    protected constructor();
    // methods
    OnPointerClick(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnSubmit(eventData: UnityEngine.EventSystems.BaseEventData): void;
    // properties
    onClick: UnityEngine.UI.Button.ButtonClickedEvent;
    // fields
  }
}
declare namespace UnityEngine.UI {
  class CanvasScaler extends UnityEngine.EventSystems.UIBehaviour {
    // constructors
    protected constructor();
    // methods
    // properties
    uiScaleMode: UnityEngine.UI.CanvasScaler.ScaleMode;
    referencePixelsPerUnit: number;
    scaleFactor: number;
    referenceResolution: UnityEngine.Vector2;
    screenMatchMode: UnityEngine.UI.CanvasScaler.ScreenMatchMode;
    matchWidthOrHeight: number;
    physicalUnit: UnityEngine.UI.CanvasScaler.Unit;
    fallbackScreenDPI: number;
    defaultSpriteDPI: number;
    dynamicPixelsPerUnit: number;
    // fields
  }
}
declare namespace UnityEngine.UI.CanvasScaler {
  class ScaleMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static ConstantPixelSize: UnityEngine.UI.CanvasScaler.ScaleMode;
    static ScaleWithScreenSize: UnityEngine.UI.CanvasScaler.ScaleMode;
    static ConstantPhysicalSize: UnityEngine.UI.CanvasScaler.ScaleMode;
  }
}
declare namespace UnityEngine.UI.CanvasScaler {
  class ScreenMatchMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static MatchWidthOrHeight: UnityEngine.UI.CanvasScaler.ScreenMatchMode;
    static Expand: UnityEngine.UI.CanvasScaler.ScreenMatchMode;
    static Shrink: UnityEngine.UI.CanvasScaler.ScreenMatchMode;
  }
}
declare namespace UnityEngine.UI.CanvasScaler {
  class Unit extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Centimeters: UnityEngine.UI.CanvasScaler.Unit;
    static Millimeters: UnityEngine.UI.CanvasScaler.Unit;
    static Inches: UnityEngine.UI.CanvasScaler.Unit;
    static Points: UnityEngine.UI.CanvasScaler.Unit;
    static Picas: UnityEngine.UI.CanvasScaler.Unit;
  }
}
declare namespace UnityEngine.UI {
  class CanvasUpdate extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Prelayout: UnityEngine.UI.CanvasUpdate;
    static Layout: UnityEngine.UI.CanvasUpdate;
    static PostLayout: UnityEngine.UI.CanvasUpdate;
    static PreRender: UnityEngine.UI.CanvasUpdate;
    static LatePreRender: UnityEngine.UI.CanvasUpdate;
    static MaxUpdateValue: UnityEngine.UI.CanvasUpdate;
  }
}
declare namespace UnityEngine.UI {
  class CanvasUpdateRegistry extends System.Object {
    // constructors
    protected constructor();
    // methods
    static RegisterCanvasElementForLayoutRebuild(element: UnityEngine.UI.ICanvasElement): void;
    static TryRegisterCanvasElementForLayoutRebuild(element: UnityEngine.UI.ICanvasElement): boolean;
    static RegisterCanvasElementForGraphicRebuild(element: UnityEngine.UI.ICanvasElement): void;
    static TryRegisterCanvasElementForGraphicRebuild(element: UnityEngine.UI.ICanvasElement): boolean;
    static UnRegisterCanvasElementForRebuild(element: UnityEngine.UI.ICanvasElement): void;
    static IsRebuildingLayout(): boolean;
    static IsRebuildingGraphics(): boolean;
    // properties
    static readonly instance: UnityEngine.UI.CanvasUpdateRegistry;
    // fields
  }
}
declare namespace UnityEngine.UI {
  class ClipperRegistry extends System.Object {
    // constructors
    protected constructor();
    // methods
    Cull(): void;
    static Register(c: UnityEngine.UI.IClipper): void;
    static Unregister(c: UnityEngine.UI.IClipper): void;
    // properties
    static readonly instance: UnityEngine.UI.ClipperRegistry;
    // fields
  }
}
declare namespace UnityEngine.UI {
  class Clipping extends System.Object {
    // constructors
    protected constructor();
    // methods
    static FindCullAndClipWorldRect(rectMaskParents: UnityEngine.UI.RectMask2D[], validRect: any): UnityEngine.Rect;
    // properties
    // fields
  }
}
declare namespace UnityEngine.UI {
  class ColorBlock extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    Equals(obj: any): boolean;
    Equals(other: UnityEngine.UI.ColorBlock): boolean;
    GetHashCode(): number;
    // properties
    normalColor: UnityEngine.Color;
    highlightedColor: UnityEngine.Color;
    pressedColor: UnityEngine.Color;
    disabledColor: UnityEngine.Color;
    colorMultiplier: number;
    fadeDuration: number;
    static readonly defaultColorBlock: UnityEngine.UI.ColorBlock;
    // fields
  }
}
declare namespace UnityEngine.UI {
  class ContentSizeFitter extends UnityEngine.EventSystems.UIBehaviour {
    // constructors
    protected constructor();
    // methods
    SetLayoutHorizontal(): void;
    SetLayoutVertical(): void;
    // properties
    horizontalFit: UnityEngine.UI.ContentSizeFitter.FitMode;
    verticalFit: UnityEngine.UI.ContentSizeFitter.FitMode;
    // fields
  }
}
declare namespace UnityEngine.UI.ContentSizeFitter {
  class FitMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Unconstrained: UnityEngine.UI.ContentSizeFitter.FitMode;
    static MinSize: UnityEngine.UI.ContentSizeFitter.FitMode;
    static PreferredSize: UnityEngine.UI.ContentSizeFitter.FitMode;
  }
}
declare namespace UnityEngine.UI.CoroutineTween.ColorTween {
  class ColorTweenCallback {
    // constructors
    constructor();
    // methods
    AddListener(call: ((arg0: UnityEngine.Color) => void)): void;
    RemoveListener(call: ((arg0: UnityEngine.Color) => void)): void;
    Invoke(arg0: UnityEngine.Color): void;
    GetPersistentEventCount(): number;
    GetPersistentTarget(index: number): UnityEngine.Object;
    GetPersistentMethodName(index: number): string;
    SetPersistentListenerState(index: number, state: UnityEngine.Events.UnityEventCallState): void;
    RemoveAllListeners(): void;
    ToString(): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
  }
}
declare namespace UnityEngine.UI.CoroutineTween.ColorTween {
  class ColorTweenMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static All: UnityEngine.UI.CoroutineTween.ColorTween.ColorTweenMode;
    static RGB: UnityEngine.UI.CoroutineTween.ColorTween.ColorTweenMode;
    static Alpha: UnityEngine.UI.CoroutineTween.ColorTween.ColorTweenMode;
  }
}
declare namespace UnityEngine.UI.CoroutineTween {
  class ColorTween extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    TweenValue(floatPercentage: number): void;
    AddOnChangedCallback(callback: ((arg0: UnityEngine.Color) => void)): void;
    GetIgnoreTimescale(): boolean;
    GetDuration(): number;
    ValidTarget(): boolean;
    // properties
    startColor: UnityEngine.Color;
    targetColor: UnityEngine.Color;
    tweenMode: UnityEngine.UI.CoroutineTween.ColorTween.ColorTweenMode;
    duration: number;
    ignoreTimeScale: boolean;
    // fields
  }
}
declare namespace UnityEngine.UI.CoroutineTween {
  class FloatTween extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    TweenValue(floatPercentage: number): void;
    AddOnChangedCallback(callback: ((arg0: number) => void)): void;
    GetIgnoreTimescale(): boolean;
    GetDuration(): number;
    ValidTarget(): boolean;
    // properties
    startValue: number;
    targetValue: number;
    duration: number;
    ignoreTimeScale: boolean;
    // fields
  }
}
declare namespace UnityEngine.UI.CoroutineTween.FloatTween {
  class FloatTweenCallback {
    // constructors
    constructor();
    // methods
    AddListener(call: ((arg0: number) => void)): void;
    RemoveListener(call: ((arg0: number) => void)): void;
    Invoke(arg0: number): void;
    GetPersistentEventCount(): number;
    GetPersistentTarget(index: number): UnityEngine.Object;
    GetPersistentMethodName(index: number): string;
    SetPersistentListenerState(index: number, state: UnityEngine.Events.UnityEventCallState): void;
    RemoveAllListeners(): void;
    ToString(): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
  }
}
declare namespace UnityEngine.UI.CoroutineTween {
  class ITweenValue {
    // constructors
    protected constructor();
    // methods
    TweenValue(floatPercentage: number): void;
    ValidTarget(): boolean;
    // properties
    readonly ignoreTimeScale: boolean;
    readonly duration: number;
    // fields
  }
}
declare namespace UnityEngine.UI {
  class DefaultControls extends System.Object {
    // constructors
    protected constructor();
    // methods
    static CreatePanel(resources: UnityEngine.UI.DefaultControls.Resources): UnityEngine.GameObject;
    static CreateButton(resources: UnityEngine.UI.DefaultControls.Resources): UnityEngine.GameObject;
    static CreateText(resources: UnityEngine.UI.DefaultControls.Resources): UnityEngine.GameObject;
    static CreateImage(resources: UnityEngine.UI.DefaultControls.Resources): UnityEngine.GameObject;
    static CreateRawImage(resources: UnityEngine.UI.DefaultControls.Resources): UnityEngine.GameObject;
    static CreateSlider(resources: UnityEngine.UI.DefaultControls.Resources): UnityEngine.GameObject;
    static CreateScrollbar(resources: UnityEngine.UI.DefaultControls.Resources): UnityEngine.GameObject;
    static CreateToggle(resources: UnityEngine.UI.DefaultControls.Resources): UnityEngine.GameObject;
    static CreateInputField(resources: UnityEngine.UI.DefaultControls.Resources): UnityEngine.GameObject;
    static CreateDropdown(resources: UnityEngine.UI.DefaultControls.Resources): UnityEngine.GameObject;
    static CreateScrollView(resources: UnityEngine.UI.DefaultControls.Resources): UnityEngine.GameObject;
    // properties
    // fields
  }
}
declare namespace UnityEngine.UI.DefaultControls {
  class Resources extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    standard: UnityEngine.Sprite;
    background: UnityEngine.Sprite;
    inputField: UnityEngine.Sprite;
    knob: UnityEngine.Sprite;
    checkmark: UnityEngine.Sprite;
    dropdown: UnityEngine.Sprite;
    mask: UnityEngine.Sprite;
  }
}
declare namespace UnityEngine.UI {
  class Dropdown extends UnityEngine.UI.Selectable {
    // constructors
    protected constructor();
    // methods
    RefreshShownValue(): void;
    AddOptions(options: UnityEngine.UI.Dropdown.OptionData[]): void;
    AddOptions(options: string[]): void;
    AddOptions(options: UnityEngine.Sprite[]): void;
    ClearOptions(): void;
    OnPointerClick(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnSubmit(eventData: UnityEngine.EventSystems.BaseEventData): void;
    OnCancel(eventData: UnityEngine.EventSystems.BaseEventData): void;
    Show(): void;
    Hide(): void;
    // properties
    template: UnityEngine.RectTransform;
    captionText: UnityEngine.UI.Text;
    captionImage: UnityEngine.UI.Image;
    itemText: UnityEngine.UI.Text;
    itemImage: UnityEngine.UI.Image;
    options: UnityEngine.UI.Dropdown.OptionData[];
    onValueChanged: UnityEngine.UI.Dropdown.DropdownEvent;
    value: number;
    // fields
  }
}
declare namespace UnityEngine.UI.Dropdown {
  class DropdownEvent {
    // constructors
    constructor();
    // methods
    AddListener(call: ((arg0: number) => void)): void;
    RemoveListener(call: ((arg0: number) => void)): void;
    Invoke(arg0: number): void;
    GetPersistentEventCount(): number;
    GetPersistentTarget(index: number): UnityEngine.Object;
    GetPersistentMethodName(index: number): string;
    SetPersistentListenerState(index: number, state: UnityEngine.Events.UnityEventCallState): void;
    RemoveAllListeners(): void;
    ToString(): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
  }
}
declare namespace UnityEngine.UI.Dropdown {
  class DropdownItem extends UnityEngine.MonoBehaviour {
    // constructors
    constructor();
    // methods
    OnPointerEnter(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnCancel(eventData: UnityEngine.EventSystems.BaseEventData): void;
    // properties
    text: UnityEngine.UI.Text;
    image: UnityEngine.UI.Image;
    rectTransform: UnityEngine.RectTransform;
    toggle: UnityEngine.UI.Toggle;
    // fields
  }
}
declare namespace UnityEngine.UI.Dropdown {
  class OptionData extends System.Object {
    // constructors
    constructor();
    constructor(text: string);
    constructor(image: UnityEngine.Sprite);
    constructor(text: string, image: UnityEngine.Sprite);
    // methods
    // properties
    text: string;
    image: UnityEngine.Sprite;
    // fields
  }
}
declare namespace UnityEngine.UI.Dropdown {
  class OptionDataList extends System.Object {
    // constructors
    constructor();
    // methods
    // properties
    options: UnityEngine.UI.Dropdown.OptionData[];
    // fields
  }
}
declare namespace UnityEngine.UI {
  class FontData extends System.Object {
    // constructors
    constructor();
    // methods
    // properties
    static readonly defaultFontData: UnityEngine.UI.FontData;
    font: UnityEngine.Font;
    fontSize: number;
    fontStyle: UnityEngine.FontStyle;
    bestFit: boolean;
    minSize: number;
    maxSize: number;
    alignment: UnityEngine.TextAnchor;
    alignByGeometry: boolean;
    richText: boolean;
    horizontalOverflow: UnityEngine.HorizontalWrapMode;
    verticalOverflow: UnityEngine.VerticalWrapMode;
    lineSpacing: number;
    // fields
  }
}
declare namespace UnityEngine.UI {
  class FontUpdateTracker extends System.Object {
    // constructors
    protected constructor();
    // methods
    static TrackText(t: UnityEngine.UI.Text): void;
    static UntrackText(t: UnityEngine.UI.Text): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine.UI {
  class Graphic extends UnityEngine.EventSystems.UIBehaviour {
    // constructors
    protected constructor();
    // methods
    SetAllDirty(): void;
    SetLayoutDirty(): void;
    SetVerticesDirty(): void;
    SetMaterialDirty(): void;
    Rebuild(update: UnityEngine.UI.CanvasUpdate): void;
    LayoutComplete(): void;
    GraphicUpdateComplete(): void;
    OnRebuildRequested(): void;
    SetNativeSize(): void;
    Raycast(sp: UnityEngine.Vector2, eventCamera: UnityEngine.Camera): boolean;
    PixelAdjustPoint(point: UnityEngine.Vector2): UnityEngine.Vector2;
    GetPixelAdjustedRect(): UnityEngine.Rect;
    CrossFadeColor(targetColor: UnityEngine.Color, duration: number, ignoreTimeScale: boolean, useAlpha: boolean): void;
    CrossFadeColor(targetColor: UnityEngine.Color, duration: number, ignoreTimeScale: boolean, useAlpha: boolean, useRGB: boolean): void;
    CrossFadeAlpha(alpha: number, duration: number, ignoreTimeScale: boolean): void;
    RegisterDirtyLayoutCallback(action: (() => void)): void;
    UnregisterDirtyLayoutCallback(action: (() => void)): void;
    RegisterDirtyVerticesCallback(action: (() => void)): void;
    UnregisterDirtyVerticesCallback(action: (() => void)): void;
    RegisterDirtyMaterialCallback(action: (() => void)): void;
    UnregisterDirtyMaterialCallback(action: (() => void)): void;
    // properties
    static readonly defaultGraphicMaterial: UnityEngine.Material;
    color: UnityEngine.Color;
    raycastTarget: boolean;
    readonly depth: number;
    readonly rectTransform: UnityEngine.RectTransform;
    readonly canvas: UnityEngine.Canvas;
    readonly canvasRenderer: UnityEngine.CanvasRenderer;
    readonly defaultMaterial: UnityEngine.Material;
    material: UnityEngine.Material;
    readonly materialForRendering: UnityEngine.Material;
    readonly mainTexture: UnityEngine.Texture;
    // fields
  }
}
declare namespace UnityEngine.UI.GraphicRaycaster {
  class BlockingObjects extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static None: UnityEngine.UI.GraphicRaycaster.BlockingObjects;
    static TwoD: UnityEngine.UI.GraphicRaycaster.BlockingObjects;
    static ThreeD: UnityEngine.UI.GraphicRaycaster.BlockingObjects;
    static All: UnityEngine.UI.GraphicRaycaster.BlockingObjects;
  }
}
declare namespace UnityEngine.UI {
  class GraphicRaycaster extends UnityEngine.EventSystems.BaseRaycaster {
    // constructors
    protected constructor();
    // methods
    Raycast(eventData: UnityEngine.EventSystems.PointerEventData, resultAppendList: UnityEngine.EventSystems.RaycastResult[]): void;
    // properties
    readonly sortOrderPriority: number;
    readonly renderOrderPriority: number;
    ignoreReversedGraphics: boolean;
    blockingObjects: UnityEngine.UI.GraphicRaycaster.BlockingObjects;
    readonly eventCamera: UnityEngine.Camera;
    // fields
  }
}
declare namespace UnityEngine.UI {
  class GraphicRebuildTracker extends System.Object {
    // constructors
    protected constructor();
    // methods
    static TrackGraphic(g: UnityEngine.UI.Graphic): void;
    static UnTrackGraphic(g: UnityEngine.UI.Graphic): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine.UI {
  class GraphicRegistry extends System.Object {
    // constructors
    protected constructor();
    // methods
    static RegisterGraphicForCanvas(c: UnityEngine.Canvas, graphic: UnityEngine.UI.Graphic): void;
    static UnregisterGraphicForCanvas(c: UnityEngine.Canvas, graphic: UnityEngine.UI.Graphic): void;
    static GetGraphicsForCanvas(canvas: UnityEngine.Canvas): UnityEngine.UI.Graphic[];
    // properties
    static readonly instance: UnityEngine.UI.GraphicRegistry;
    // fields
  }
}
declare namespace UnityEngine.UI.GridLayoutGroup {
  class Axis extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Horizontal: UnityEngine.UI.GridLayoutGroup.Axis;
    static Vertical: UnityEngine.UI.GridLayoutGroup.Axis;
  }
}
declare namespace UnityEngine.UI.GridLayoutGroup {
  class Constraint extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Flexible: UnityEngine.UI.GridLayoutGroup.Constraint;
    static FixedColumnCount: UnityEngine.UI.GridLayoutGroup.Constraint;
    static FixedRowCount: UnityEngine.UI.GridLayoutGroup.Constraint;
  }
}
declare namespace UnityEngine.UI.GridLayoutGroup {
  class Corner extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static UpperLeft: UnityEngine.UI.GridLayoutGroup.Corner;
    static UpperRight: UnityEngine.UI.GridLayoutGroup.Corner;
    static LowerLeft: UnityEngine.UI.GridLayoutGroup.Corner;
    static LowerRight: UnityEngine.UI.GridLayoutGroup.Corner;
  }
}
declare namespace UnityEngine.UI {
  class GridLayoutGroup extends UnityEngine.UI.LayoutGroup {
    // constructors
    protected constructor();
    // methods
    CalculateLayoutInputHorizontal(): void;
    CalculateLayoutInputVertical(): void;
    SetLayoutHorizontal(): void;
    SetLayoutVertical(): void;
    // properties
    startCorner: UnityEngine.UI.GridLayoutGroup.Corner;
    startAxis: UnityEngine.UI.GridLayoutGroup.Axis;
    cellSize: UnityEngine.Vector2;
    spacing: UnityEngine.Vector2;
    constraint: UnityEngine.UI.GridLayoutGroup.Constraint;
    constraintCount: number;
    // fields
  }
}
declare namespace UnityEngine.UI {
  class HorizontalLayoutGroup extends UnityEngine.UI.HorizontalOrVerticalLayoutGroup {
    // constructors
    protected constructor();
    // methods
    CalculateLayoutInputHorizontal(): void;
    CalculateLayoutInputVertical(): void;
    SetLayoutHorizontal(): void;
    SetLayoutVertical(): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine.UI {
  class HorizontalOrVerticalLayoutGroup extends UnityEngine.UI.LayoutGroup {
    // constructors
    protected constructor();
    // methods
    // properties
    spacing: number;
    childForceExpandWidth: boolean;
    childForceExpandHeight: boolean;
    childControlWidth: boolean;
    childControlHeight: boolean;
    // fields
  }
}
declare namespace UnityEngine.UI {
  class ICanvasElement {
    // constructors
    protected constructor();
    // methods
    Rebuild(executing: UnityEngine.UI.CanvasUpdate): void;
    LayoutComplete(): void;
    GraphicUpdateComplete(): void;
    IsDestroyed(): boolean;
    // properties
    readonly transform: UnityEngine.Transform;
    // fields
  }
}
declare namespace UnityEngine.UI {
  class IClippable {
    // constructors
    protected constructor();
    // methods
    RecalculateClipping(): void;
    Cull(clipRect: UnityEngine.Rect, validRect: boolean): void;
    SetClipRect(value: UnityEngine.Rect, validRect: boolean): void;
    // properties
    readonly gameObject: UnityEngine.GameObject;
    readonly rectTransform: UnityEngine.RectTransform;
    // fields
  }
}
declare namespace UnityEngine.UI {
  class IClipper {
    // constructors
    protected constructor();
    // methods
    PerformClipping(): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine.UI {
  class IGraphicEnabledDisabled {
    // constructors
    protected constructor();
    // methods
    OnSiblingGraphicEnabledDisabled(): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine.UI {
  class ILayoutController {
    // constructors
    protected constructor();
    // methods
    SetLayoutHorizontal(): void;
    SetLayoutVertical(): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine.UI {
  class ILayoutElement {
    // constructors
    protected constructor();
    // methods
    CalculateLayoutInputHorizontal(): void;
    CalculateLayoutInputVertical(): void;
    // properties
    readonly minWidth: number;
    readonly preferredWidth: number;
    readonly flexibleWidth: number;
    readonly minHeight: number;
    readonly preferredHeight: number;
    readonly flexibleHeight: number;
    readonly layoutPriority: number;
    // fields
  }
}
declare namespace UnityEngine.UI {
  class ILayoutGroup {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine.UI {
  class ILayoutIgnorer {
    // constructors
    protected constructor();
    // methods
    // properties
    readonly ignoreLayout: boolean;
    // fields
  }
}
declare namespace UnityEngine.UI {
  class ILayoutSelfController {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine.UI {
  class Image extends UnityEngine.UI.MaskableGraphic {
    // constructors
    protected constructor();
    // methods
    OnBeforeSerialize(): void;
    OnAfterDeserialize(): void;
    SetNativeSize(): void;
    CalculateLayoutInputHorizontal(): void;
    CalculateLayoutInputVertical(): void;
    IsRaycastLocationValid(screenPoint: UnityEngine.Vector2, eventCamera: UnityEngine.Camera): boolean;
    // properties
    sprite: UnityEngine.Sprite;
    overrideSprite: UnityEngine.Sprite;
    type: UnityEngine.UI.Image.Type;
    preserveAspect: boolean;
    fillCenter: boolean;
    fillMethod: UnityEngine.UI.Image.FillMethod;
    fillAmount: number;
    fillClockwise: boolean;
    fillOrigin: number;
    eventAlphaThreshold: number;
    alphaHitTestMinimumThreshold: number;
    static readonly defaultETC1GraphicMaterial: UnityEngine.Material;
    readonly mainTexture: UnityEngine.Texture;
    readonly hasBorder: boolean;
    readonly pixelsPerUnit: number;
    material: UnityEngine.Material;
    readonly minWidth: number;
    readonly preferredWidth: number;
    readonly flexibleWidth: number;
    readonly minHeight: number;
    readonly preferredHeight: number;
    readonly flexibleHeight: number;
    readonly layoutPriority: number;
    // fields
  }
}
declare namespace UnityEngine.UI.Image {
  class FillMethod extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Horizontal: UnityEngine.UI.Image.FillMethod;
    static Vertical: UnityEngine.UI.Image.FillMethod;
    static Radial90: UnityEngine.UI.Image.FillMethod;
    static Radial180: UnityEngine.UI.Image.FillMethod;
    static Radial360: UnityEngine.UI.Image.FillMethod;
  }
}
declare namespace UnityEngine.UI.Image {
  class Origin180 extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Bottom: UnityEngine.UI.Image.Origin180;
    static Left: UnityEngine.UI.Image.Origin180;
    static Top: UnityEngine.UI.Image.Origin180;
    static Right: UnityEngine.UI.Image.Origin180;
  }
}
declare namespace UnityEngine.UI.Image {
  class Origin360 extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Bottom: UnityEngine.UI.Image.Origin360;
    static Right: UnityEngine.UI.Image.Origin360;
    static Top: UnityEngine.UI.Image.Origin360;
    static Left: UnityEngine.UI.Image.Origin360;
  }
}
declare namespace UnityEngine.UI.Image {
  class Origin90 extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static BottomLeft: UnityEngine.UI.Image.Origin90;
    static TopLeft: UnityEngine.UI.Image.Origin90;
    static TopRight: UnityEngine.UI.Image.Origin90;
    static BottomRight: UnityEngine.UI.Image.Origin90;
  }
}
declare namespace UnityEngine.UI.Image {
  class OriginHorizontal extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Left: UnityEngine.UI.Image.OriginHorizontal;
    static Right: UnityEngine.UI.Image.OriginHorizontal;
  }
}
declare namespace UnityEngine.UI.Image {
  class OriginVertical extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Bottom: UnityEngine.UI.Image.OriginVertical;
    static Top: UnityEngine.UI.Image.OriginVertical;
  }
}
declare namespace UnityEngine.UI.Image {
  class Type extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Simple: UnityEngine.UI.Image.Type;
    static Sliced: UnityEngine.UI.Image.Type;
    static Tiled: UnityEngine.UI.Image.Type;
    static Filled: UnityEngine.UI.Image.Type;
  }
}
declare namespace UnityEngine.UI {
  class IMask {
    // constructors
    protected constructor();
    // methods
    Enabled(): boolean;
    // properties
    readonly rectTransform: UnityEngine.RectTransform;
    // fields
  }
}
declare namespace UnityEngine.UI {
  class IMaskable {
    // constructors
    protected constructor();
    // methods
    RecalculateMasking(): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine.UI {
  class IMaterialModifier {
    // constructors
    protected constructor();
    // methods
    GetModifiedMaterial(baseMaterial: UnityEngine.Material): UnityEngine.Material;
    // properties
    // fields
  }
}
declare namespace UnityEngine.UI {
  class IMeshModifier {
    // constructors
    protected constructor();
    // methods
    ModifyMesh(mesh: UnityEngine.Mesh): void;
    ModifyMesh(verts: UnityEngine.UI.VertexHelper): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine.UI.InputField {
  class CharacterValidation extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static None: UnityEngine.UI.InputField.CharacterValidation;
    static Integer: UnityEngine.UI.InputField.CharacterValidation;
    static Decimal: UnityEngine.UI.InputField.CharacterValidation;
    static Alphanumeric: UnityEngine.UI.InputField.CharacterValidation;
    static Name: UnityEngine.UI.InputField.CharacterValidation;
    static EmailAddress: UnityEngine.UI.InputField.CharacterValidation;
  }
}
declare namespace UnityEngine.UI.InputField {
  class ContentType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Standard: UnityEngine.UI.InputField.ContentType;
    static Autocorrected: UnityEngine.UI.InputField.ContentType;
    static IntegerNumber: UnityEngine.UI.InputField.ContentType;
    static DecimalNumber: UnityEngine.UI.InputField.ContentType;
    static Alphanumeric: UnityEngine.UI.InputField.ContentType;
    static Name: UnityEngine.UI.InputField.ContentType;
    static EmailAddress: UnityEngine.UI.InputField.ContentType;
    static Password: UnityEngine.UI.InputField.ContentType;
    static Pin: UnityEngine.UI.InputField.ContentType;
    static Custom: UnityEngine.UI.InputField.ContentType;
  }
}
declare namespace UnityEngine.UI {
  class InputField extends UnityEngine.UI.Selectable {
    // constructors
    protected constructor();
    // methods
    MoveTextEnd(shift: boolean): void;
    MoveTextStart(shift: boolean): void;
    ScreenToLocal(screen: UnityEngine.Vector2): UnityEngine.Vector2;
    OnBeginDrag(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnDrag(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnEndDrag(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnPointerDown(eventData: UnityEngine.EventSystems.PointerEventData): void;
    ProcessEvent(e: UnityEngine.Event): void;
    OnUpdateSelected(eventData: UnityEngine.EventSystems.BaseEventData): void;
    ForceLabelUpdate(): void;
    Rebuild(update: UnityEngine.UI.CanvasUpdate): void;
    LayoutComplete(): void;
    GraphicUpdateComplete(): void;
    ActivateInputField(): void;
    OnSelect(eventData: UnityEngine.EventSystems.BaseEventData): void;
    OnPointerClick(eventData: UnityEngine.EventSystems.PointerEventData): void;
    DeactivateInputField(): void;
    OnDeselect(eventData: UnityEngine.EventSystems.BaseEventData): void;
    OnSubmit(eventData: UnityEngine.EventSystems.BaseEventData): void;
    CalculateLayoutInputHorizontal(): void;
    CalculateLayoutInputVertical(): void;
    // properties
    shouldHideMobileInput: boolean;
    text: string;
    readonly isFocused: boolean;
    caretBlinkRate: number;
    caretWidth: number;
    textComponent: UnityEngine.UI.Text;
    placeholder: UnityEngine.UI.Graphic;
    caretColor: UnityEngine.Color;
    customCaretColor: boolean;
    selectionColor: UnityEngine.Color;
    onEndEdit: UnityEngine.UI.InputField.SubmitEvent;
    onValueChange: UnityEngine.UI.InputField.OnChangeEvent;
    onValueChanged: UnityEngine.UI.InputField.OnChangeEvent;
    onValidateInput: ((text: string, charIndex: number, addedChar: any) => any);
    characterLimit: number;
    contentType: UnityEngine.UI.InputField.ContentType;
    lineType: UnityEngine.UI.InputField.LineType;
    inputType: UnityEngine.UI.InputField.InputType;
    keyboardType: UnityEngine.TouchScreenKeyboardType;
    characterValidation: UnityEngine.UI.InputField.CharacterValidation;
    readOnly: boolean;
    readonly multiLine: boolean;
    asteriskChar: any;
    readonly wasCanceled: boolean;
    readonly caretSelectPosition: number;
    caretPosition: number;
    selectionAnchorPosition: number;
    selectionFocusPosition: number;
    readonly minWidth: number;
    readonly preferredWidth: number;
    readonly flexibleWidth: number;
    readonly minHeight: number;
    readonly preferredHeight: number;
    readonly flexibleHeight: number;
    readonly layoutPriority: number;
    // fields
  }
}
declare namespace UnityEngine.UI.InputField {
  class EditState extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Continue: UnityEngine.UI.InputField.EditState;
    static Finish: UnityEngine.UI.InputField.EditState;
  }
}
declare namespace UnityEngine.UI.InputField {
  class InputType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Standard: UnityEngine.UI.InputField.InputType;
    static AutoCorrect: UnityEngine.UI.InputField.InputType;
    static Password: UnityEngine.UI.InputField.InputType;
  }
}
declare namespace UnityEngine.UI.InputField {
  class LineType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static SingleLine: UnityEngine.UI.InputField.LineType;
    static MultiLineSubmit: UnityEngine.UI.InputField.LineType;
    static MultiLineNewline: UnityEngine.UI.InputField.LineType;
  }
}
declare namespace UnityEngine.UI.InputField {
  class OnChangeEvent {
    // constructors
    constructor();
    // methods
    AddListener(call: ((arg0: string) => void)): void;
    RemoveListener(call: ((arg0: string) => void)): void;
    Invoke(arg0: string): void;
    GetPersistentEventCount(): number;
    GetPersistentTarget(index: number): UnityEngine.Object;
    GetPersistentMethodName(index: number): string;
    SetPersistentListenerState(index: number, state: UnityEngine.Events.UnityEventCallState): void;
    RemoveAllListeners(): void;
    ToString(): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
  }
}
declare namespace UnityEngine.UI.InputField {
  class SubmitEvent {
    // constructors
    constructor();
    // methods
    AddListener(call: ((arg0: string) => void)): void;
    RemoveListener(call: ((arg0: string) => void)): void;
    Invoke(arg0: string): void;
    GetPersistentEventCount(): number;
    GetPersistentTarget(index: number): UnityEngine.Object;
    GetPersistentMethodName(index: number): string;
    SetPersistentListenerState(index: number, state: UnityEngine.Events.UnityEventCallState): void;
    RemoveAllListeners(): void;
    ToString(): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
  }
}
declare namespace UnityEngine.UI {
  class IVertexModifier {
    // constructors
    protected constructor();
    // methods
    ModifyVertices(verts: UnityEngine.UIVertex[]): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine.UI {
  class LayoutElement extends UnityEngine.EventSystems.UIBehaviour {
    // constructors
    protected constructor();
    // methods
    CalculateLayoutInputHorizontal(): void;
    CalculateLayoutInputVertical(): void;
    // properties
    ignoreLayout: boolean;
    minWidth: number;
    minHeight: number;
    preferredWidth: number;
    preferredHeight: number;
    flexibleWidth: number;
    flexibleHeight: number;
    readonly layoutPriority: number;
    // fields
  }
}
declare namespace UnityEngine.UI {
  class LayoutGroup extends UnityEngine.EventSystems.UIBehaviour {
    // constructors
    protected constructor();
    // methods
    CalculateLayoutInputHorizontal(): void;
    CalculateLayoutInputVertical(): void;
    SetLayoutHorizontal(): void;
    SetLayoutVertical(): void;
    // properties
    padding: UnityEngine.RectOffset;
    childAlignment: UnityEngine.TextAnchor;
    readonly minWidth: number;
    readonly preferredWidth: number;
    readonly flexibleWidth: number;
    readonly minHeight: number;
    readonly preferredHeight: number;
    readonly flexibleHeight: number;
    readonly layoutPriority: number;
    // fields
  }
}
declare namespace UnityEngine.UI {
  class LayoutRebuilder extends System.Object {
    // constructors
    constructor();
    // methods
    IsDestroyed(): boolean;
    static ForceRebuildLayoutImmediate(layoutRoot: UnityEngine.RectTransform): void;
    Rebuild(executing: UnityEngine.UI.CanvasUpdate): void;
    static MarkLayoutForRebuild(rect: UnityEngine.RectTransform): void;
    LayoutComplete(): void;
    GraphicUpdateComplete(): void;
    GetHashCode(): number;
    Equals(obj: any): boolean;
    ToString(): string;
    // properties
    readonly transform: UnityEngine.Transform;
    // fields
  }
}
declare namespace UnityEngine.UI {
  class LayoutUtility extends System.Object {
    // constructors
    protected constructor();
    // methods
    static GetMinSize(rect: UnityEngine.RectTransform, axis: number): number;
    static GetPreferredSize(rect: UnityEngine.RectTransform, axis: number): number;
    static GetFlexibleSize(rect: UnityEngine.RectTransform, axis: number): number;
    static GetMinWidth(rect: UnityEngine.RectTransform): number;
    static GetPreferredWidth(rect: UnityEngine.RectTransform): number;
    static GetFlexibleWidth(rect: UnityEngine.RectTransform): number;
    static GetMinHeight(rect: UnityEngine.RectTransform): number;
    static GetPreferredHeight(rect: UnityEngine.RectTransform): number;
    static GetFlexibleHeight(rect: UnityEngine.RectTransform): number;
    static GetLayoutProperty(rect: UnityEngine.RectTransform, property: ((arg1: UnityEngine.UI.ILayoutElement) => number), defaultValue: number): number;
    static GetLayoutProperty(rect: UnityEngine.RectTransform, property: ((arg1: UnityEngine.UI.ILayoutElement) => number), defaultValue: number, source: any): number;
    // properties
    // fields
  }
}
declare namespace UnityEngine.UI {
  class Mask extends UnityEngine.EventSystems.UIBehaviour {
    // constructors
    protected constructor();
    // methods
    MaskEnabled(): boolean;
    OnSiblingGraphicEnabledDisabled(): void;
    IsRaycastLocationValid(sp: UnityEngine.Vector2, eventCamera: UnityEngine.Camera): boolean;
    GetModifiedMaterial(baseMaterial: UnityEngine.Material): UnityEngine.Material;
    // properties
    readonly rectTransform: UnityEngine.RectTransform;
    showMaskGraphic: boolean;
    readonly graphic: UnityEngine.UI.Graphic;
    // fields
  }
}
declare namespace UnityEngine.UI.MaskableGraphic {
  class CullStateChangedEvent {
    // constructors
    constructor();
    // methods
    AddListener(call: ((arg0: boolean) => void)): void;
    RemoveListener(call: ((arg0: boolean) => void)): void;
    Invoke(arg0: boolean): void;
    GetPersistentEventCount(): number;
    GetPersistentTarget(index: number): UnityEngine.Object;
    GetPersistentMethodName(index: number): string;
    SetPersistentListenerState(index: number, state: UnityEngine.Events.UnityEventCallState): void;
    RemoveAllListeners(): void;
    ToString(): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
  }
}
declare namespace UnityEngine.UI {
  class MaskableGraphic extends UnityEngine.UI.Graphic {
    // constructors
    protected constructor();
    // methods
    GetModifiedMaterial(baseMaterial: UnityEngine.Material): UnityEngine.Material;
    Cull(clipRect: UnityEngine.Rect, validRect: boolean): void;
    SetClipRect(clipRect: UnityEngine.Rect, validRect: boolean): void;
    ParentMaskStateChanged(): void;
    RecalculateClipping(): void;
    RecalculateMasking(): void;
    // properties
    onCullStateChanged: UnityEngine.UI.MaskableGraphic.CullStateChangedEvent;
    maskable: boolean;
    // fields
  }
}
declare namespace UnityEngine.UI {
  class MaskUtilities extends System.Object {
    // constructors
    constructor();
    // methods
    static Notify2DMaskStateChanged(mask: UnityEngine.Component): void;
    static NotifyStencilStateChanged(mask: UnityEngine.Component): void;
    static FindRootSortOverrideCanvas(start: UnityEngine.Transform): UnityEngine.Transform;
    static GetStencilDepth(transform: UnityEngine.Transform, stopAfter: UnityEngine.Transform): number;
    static IsDescendantOrSelf(father: UnityEngine.Transform, child: UnityEngine.Transform): boolean;
    static GetRectMaskForClippable(clippable: UnityEngine.UI.IClippable): UnityEngine.UI.RectMask2D;
    static GetRectMasksForClip(clipper: UnityEngine.UI.RectMask2D, masks: UnityEngine.UI.RectMask2D[]): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine.UI {
  class Misc extends System.Object {
    // constructors
    protected constructor();
    // methods
    static Destroy(obj: UnityEngine.Object): void;
    static DestroyImmediate(obj: UnityEngine.Object): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine.UI {
  class Navigation extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    Equals(other: UnityEngine.UI.Navigation): boolean;
    Equals(obj: any): boolean;
    // properties
    mode: UnityEngine.UI.Navigation.Mode;
    selectOnUp: UnityEngine.UI.Selectable;
    selectOnDown: UnityEngine.UI.Selectable;
    selectOnLeft: UnityEngine.UI.Selectable;
    selectOnRight: UnityEngine.UI.Selectable;
    static readonly defaultNavigation: UnityEngine.UI.Navigation;
    // fields
  }
}
declare namespace UnityEngine.UI.Navigation {
  class Mode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static None: UnityEngine.UI.Navigation.Mode;
    static Horizontal: UnityEngine.UI.Navigation.Mode;
    static Vertical: UnityEngine.UI.Navigation.Mode;
    static Automatic: UnityEngine.UI.Navigation.Mode;
    static Explicit: UnityEngine.UI.Navigation.Mode;
  }
}
declare namespace UnityEngine.UI {
  class Outline extends UnityEngine.UI.Shadow {
    // constructors
    protected constructor();
    // methods
    ModifyMesh(vh: UnityEngine.UI.VertexHelper): void;
    ModifyMesh(mesh: UnityEngine.Mesh): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine.UI {
  class PositionAsUV1 extends UnityEngine.UI.BaseMeshEffect {
    // constructors
    protected constructor();
    // methods
    ModifyMesh(vh: UnityEngine.UI.VertexHelper): void;
    ModifyMesh(mesh: UnityEngine.Mesh): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine.UI {
  class RawImage extends UnityEngine.UI.MaskableGraphic {
    // constructors
    protected constructor();
    // methods
    SetNativeSize(): void;
    // properties
    readonly mainTexture: UnityEngine.Texture;
    texture: UnityEngine.Texture;
    uvRect: UnityEngine.Rect;
    // fields
  }
}
declare namespace UnityEngine.UI {
  class RectangularVertexClipper extends System.Object {
    // constructors
    constructor();
    // methods
    GetCanvasRect(t: UnityEngine.RectTransform, c: UnityEngine.Canvas): UnityEngine.Rect;
    // properties
    // fields
  }
}
declare namespace UnityEngine.UI {
  class RectMask2D extends UnityEngine.EventSystems.UIBehaviour {
    // constructors
    protected constructor();
    // methods
    IsRaycastLocationValid(sp: UnityEngine.Vector2, eventCamera: UnityEngine.Camera): boolean;
    PerformClipping(): void;
    AddClippable(clippable: UnityEngine.UI.IClippable): void;
    RemoveClippable(clippable: UnityEngine.UI.IClippable): void;
    // properties
    readonly canvasRect: UnityEngine.Rect;
    readonly rectTransform: UnityEngine.RectTransform;
    // fields
  }
}
declare namespace UnityEngine.UI {
  class ReflectionMethodsCache extends System.Object {
    // constructors
    constructor();
    // methods
    // properties
    static readonly Singleton: UnityEngine.UI.ReflectionMethodsCache;
    // fields
    raycast3D: ((r: UnityEngine.Ray, hit: any, f: number, i: number) => boolean);
    raycast3DAll: ((r: UnityEngine.Ray, f: number, i: number) => UnityEngine.RaycastHit[]);
    raycast2D: ((p1: UnityEngine.Vector2, p2: UnityEngine.Vector2, f: number, i: number) => UnityEngine.RaycastHit2D);
    getRayIntersectionAll: ((r: UnityEngine.Ray, f: number, i: number) => UnityEngine.RaycastHit2D[]);
  }
}
declare namespace UnityEngine.UI.Scrollbar {
  class Axis extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Horizontal: UnityEngine.UI.Scrollbar.Axis;
    static Vertical: UnityEngine.UI.Scrollbar.Axis;
  }
}
declare namespace UnityEngine.UI {
  class Scrollbar extends UnityEngine.UI.Selectable {
    // constructors
    protected constructor();
    // methods
    Rebuild(executing: UnityEngine.UI.CanvasUpdate): void;
    LayoutComplete(): void;
    GraphicUpdateComplete(): void;
    OnBeginDrag(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnDrag(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnPointerDown(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnPointerUp(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnMove(eventData: UnityEngine.EventSystems.AxisEventData): void;
    FindSelectableOnLeft(): UnityEngine.UI.Selectable;
    FindSelectableOnRight(): UnityEngine.UI.Selectable;
    FindSelectableOnUp(): UnityEngine.UI.Selectable;
    FindSelectableOnDown(): UnityEngine.UI.Selectable;
    OnInitializePotentialDrag(eventData: UnityEngine.EventSystems.PointerEventData): void;
    SetDirection(direction: UnityEngine.UI.Scrollbar.Direction, includeRectLayouts: boolean): void;
    // properties
    handleRect: UnityEngine.RectTransform;
    direction: UnityEngine.UI.Scrollbar.Direction;
    value: number;
    size: number;
    numberOfSteps: number;
    onValueChanged: UnityEngine.UI.Scrollbar.ScrollEvent;
    // fields
  }
}
declare namespace UnityEngine.UI.Scrollbar {
  class Direction extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static LeftToRight: UnityEngine.UI.Scrollbar.Direction;
    static RightToLeft: UnityEngine.UI.Scrollbar.Direction;
    static BottomToTop: UnityEngine.UI.Scrollbar.Direction;
    static TopToBottom: UnityEngine.UI.Scrollbar.Direction;
  }
}
declare namespace UnityEngine.UI.Scrollbar {
  class ScrollEvent {
    // constructors
    constructor();
    // methods
    AddListener(call: ((arg0: number) => void)): void;
    RemoveListener(call: ((arg0: number) => void)): void;
    Invoke(arg0: number): void;
    GetPersistentEventCount(): number;
    GetPersistentTarget(index: number): UnityEngine.Object;
    GetPersistentMethodName(index: number): string;
    SetPersistentListenerState(index: number, state: UnityEngine.Events.UnityEventCallState): void;
    RemoveAllListeners(): void;
    ToString(): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
  }
}
declare namespace UnityEngine.UI {
  class ScrollRect extends UnityEngine.EventSystems.UIBehaviour {
    // constructors
    protected constructor();
    // methods
    Rebuild(executing: UnityEngine.UI.CanvasUpdate): void;
    LayoutComplete(): void;
    GraphicUpdateComplete(): void;
    IsActive(): boolean;
    StopMovement(): void;
    OnScroll(data: UnityEngine.EventSystems.PointerEventData): void;
    OnInitializePotentialDrag(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnBeginDrag(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnEndDrag(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnDrag(eventData: UnityEngine.EventSystems.PointerEventData): void;
    CalculateLayoutInputHorizontal(): void;
    CalculateLayoutInputVertical(): void;
    SetLayoutHorizontal(): void;
    SetLayoutVertical(): void;
    // properties
    content: UnityEngine.RectTransform;
    horizontal: boolean;
    vertical: boolean;
    movementType: UnityEngine.UI.ScrollRect.MovementType;
    elasticity: number;
    inertia: boolean;
    decelerationRate: number;
    scrollSensitivity: number;
    viewport: UnityEngine.RectTransform;
    horizontalScrollbar: UnityEngine.UI.Scrollbar;
    verticalScrollbar: UnityEngine.UI.Scrollbar;
    horizontalScrollbarVisibility: UnityEngine.UI.ScrollRect.ScrollbarVisibility;
    verticalScrollbarVisibility: UnityEngine.UI.ScrollRect.ScrollbarVisibility;
    horizontalScrollbarSpacing: number;
    verticalScrollbarSpacing: number;
    onValueChanged: UnityEngine.UI.ScrollRect.ScrollRectEvent;
    velocity: UnityEngine.Vector2;
    normalizedPosition: UnityEngine.Vector2;
    horizontalNormalizedPosition: number;
    verticalNormalizedPosition: number;
    readonly minWidth: number;
    readonly preferredWidth: number;
    readonly flexibleWidth: number;
    readonly minHeight: number;
    readonly preferredHeight: number;
    readonly flexibleHeight: number;
    readonly layoutPriority: number;
    // fields
  }
}
declare namespace UnityEngine.UI.ScrollRect {
  class MovementType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Unrestricted: UnityEngine.UI.ScrollRect.MovementType;
    static Elastic: UnityEngine.UI.ScrollRect.MovementType;
    static Clamped: UnityEngine.UI.ScrollRect.MovementType;
  }
}
declare namespace UnityEngine.UI.ScrollRect {
  class ScrollbarVisibility extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Permanent: UnityEngine.UI.ScrollRect.ScrollbarVisibility;
    static AutoHide: UnityEngine.UI.ScrollRect.ScrollbarVisibility;
    static AutoHideAndExpandViewport: UnityEngine.UI.ScrollRect.ScrollbarVisibility;
  }
}
declare namespace UnityEngine.UI.ScrollRect {
  class ScrollRectEvent {
    // constructors
    constructor();
    // methods
    AddListener(call: ((arg0: UnityEngine.Vector2) => void)): void;
    RemoveListener(call: ((arg0: UnityEngine.Vector2) => void)): void;
    Invoke(arg0: UnityEngine.Vector2): void;
    GetPersistentEventCount(): number;
    GetPersistentTarget(index: number): UnityEngine.Object;
    GetPersistentMethodName(index: number): string;
    SetPersistentListenerState(index: number, state: UnityEngine.Events.UnityEventCallState): void;
    RemoveAllListeners(): void;
    ToString(): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
  }
}
declare namespace UnityEngine.UI {
  class Selectable extends UnityEngine.EventSystems.UIBehaviour {
    // constructors
    protected constructor();
    // methods
    IsInteractable(): boolean;
    FindSelectable(dir: UnityEngine.Vector3): UnityEngine.UI.Selectable;
    FindSelectableOnLeft(): UnityEngine.UI.Selectable;
    FindSelectableOnRight(): UnityEngine.UI.Selectable;
    FindSelectableOnUp(): UnityEngine.UI.Selectable;
    FindSelectableOnDown(): UnityEngine.UI.Selectable;
    OnMove(eventData: UnityEngine.EventSystems.AxisEventData): void;
    OnPointerDown(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnPointerUp(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnPointerEnter(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnPointerExit(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnSelect(eventData: UnityEngine.EventSystems.BaseEventData): void;
    OnDeselect(eventData: UnityEngine.EventSystems.BaseEventData): void;
    Select(): void;
    // properties
    static readonly allSelectables: UnityEngine.UI.Selectable[];
    navigation: UnityEngine.UI.Navigation;
    transition: UnityEngine.UI.Selectable.Transition;
    colors: UnityEngine.UI.ColorBlock;
    spriteState: UnityEngine.UI.SpriteState;
    animationTriggers: UnityEngine.UI.AnimationTriggers;
    targetGraphic: UnityEngine.UI.Graphic;
    interactable: boolean;
    image: UnityEngine.UI.Image;
    readonly animator: UnityEngine.Animator;
    // fields
  }
}
declare namespace UnityEngine.UI.Selectable {
  class SelectionState extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Normal: UnityEngine.UI.Selectable.SelectionState;
    static Highlighted: UnityEngine.UI.Selectable.SelectionState;
    static Pressed: UnityEngine.UI.Selectable.SelectionState;
    static Disabled: UnityEngine.UI.Selectable.SelectionState;
  }
}
declare namespace UnityEngine.UI.Selectable {
  class Transition extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static None: UnityEngine.UI.Selectable.Transition;
    static ColorTint: UnityEngine.UI.Selectable.Transition;
    static SpriteSwap: UnityEngine.UI.Selectable.Transition;
    static Animation: UnityEngine.UI.Selectable.Transition;
  }
}
declare namespace UnityEngine.UI {
  class SetPropertyUtility extends System.Object {
    // constructors
    protected constructor();
    // methods
    static SetColor(currentValue: any, newValue: UnityEngine.Color): boolean;
    // properties
    // fields
  }
}
declare namespace UnityEngine.UI {
  class Shadow extends UnityEngine.UI.BaseMeshEffect {
    // constructors
    protected constructor();
    // methods
    ModifyMesh(vh: UnityEngine.UI.VertexHelper): void;
    ModifyMesh(mesh: UnityEngine.Mesh): void;
    // properties
    effectColor: UnityEngine.Color;
    effectDistance: UnityEngine.Vector2;
    useGraphicAlpha: boolean;
    // fields
  }
}
declare namespace UnityEngine.UI.Slider {
  class Axis extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Horizontal: UnityEngine.UI.Slider.Axis;
    static Vertical: UnityEngine.UI.Slider.Axis;
  }
}
declare namespace UnityEngine.UI {
  class Slider extends UnityEngine.UI.Selectable {
    // constructors
    protected constructor();
    // methods
    Rebuild(executing: UnityEngine.UI.CanvasUpdate): void;
    LayoutComplete(): void;
    GraphicUpdateComplete(): void;
    OnPointerDown(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnDrag(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnMove(eventData: UnityEngine.EventSystems.AxisEventData): void;
    FindSelectableOnLeft(): UnityEngine.UI.Selectable;
    FindSelectableOnRight(): UnityEngine.UI.Selectable;
    FindSelectableOnUp(): UnityEngine.UI.Selectable;
    FindSelectableOnDown(): UnityEngine.UI.Selectable;
    OnInitializePotentialDrag(eventData: UnityEngine.EventSystems.PointerEventData): void;
    SetDirection(direction: UnityEngine.UI.Slider.Direction, includeRectLayouts: boolean): void;
    // properties
    fillRect: UnityEngine.RectTransform;
    handleRect: UnityEngine.RectTransform;
    direction: UnityEngine.UI.Slider.Direction;
    minValue: number;
    maxValue: number;
    wholeNumbers: boolean;
    value: number;
    normalizedValue: number;
    onValueChanged: UnityEngine.UI.Slider.SliderEvent;
    // fields
  }
}
declare namespace UnityEngine.UI.Slider {
  class Direction extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static LeftToRight: UnityEngine.UI.Slider.Direction;
    static RightToLeft: UnityEngine.UI.Slider.Direction;
    static BottomToTop: UnityEngine.UI.Slider.Direction;
    static TopToBottom: UnityEngine.UI.Slider.Direction;
  }
}
declare namespace UnityEngine.UI.Slider {
  class SliderEvent {
    // constructors
    constructor();
    // methods
    AddListener(call: ((arg0: number) => void)): void;
    RemoveListener(call: ((arg0: number) => void)): void;
    Invoke(arg0: number): void;
    GetPersistentEventCount(): number;
    GetPersistentTarget(index: number): UnityEngine.Object;
    GetPersistentMethodName(index: number): string;
    SetPersistentListenerState(index: number, state: UnityEngine.Events.UnityEventCallState): void;
    RemoveAllListeners(): void;
    ToString(): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
  }
}
declare namespace UnityEngine.UI {
  class SpriteState extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    Equals(other: UnityEngine.UI.SpriteState): boolean;
    Equals(obj: any): boolean;
    // properties
    highlightedSprite: UnityEngine.Sprite;
    pressedSprite: UnityEngine.Sprite;
    disabledSprite: UnityEngine.Sprite;
    // fields
  }
}
declare namespace UnityEngine.UI {
  class StencilMaterial extends System.Object {
    // constructors
    protected constructor();
    // methods
    static Add(baseMat: UnityEngine.Material, stencilID: number): UnityEngine.Material;
    static Add(baseMat: UnityEngine.Material, stencilID: number, operation: UnityEngine.Rendering.StencilOp, compareFunction: UnityEngine.Rendering.CompareFunction, colorWriteMask: UnityEngine.Rendering.ColorWriteMask): UnityEngine.Material;
    static Add(baseMat: UnityEngine.Material, stencilID: number, operation: UnityEngine.Rendering.StencilOp, compareFunction: UnityEngine.Rendering.CompareFunction, colorWriteMask: UnityEngine.Rendering.ColorWriteMask, readMask: number, writeMask: number): UnityEngine.Material;
    static Remove(customMat: UnityEngine.Material): void;
    static ClearAll(): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine.UI.StencilMaterial {
  class MatEntry extends System.Object {
    // constructors
    constructor();
    // methods
    // properties
    // fields
    baseMat: UnityEngine.Material;
    customMat: UnityEngine.Material;
    count: number;
    stencilId: number;
    operation: UnityEngine.Rendering.StencilOp;
    compareFunction: UnityEngine.Rendering.CompareFunction;
    readMask: number;
    writeMask: number;
    useAlphaClip: boolean;
    colorMask: UnityEngine.Rendering.ColorWriteMask;
  }
}
declare namespace UnityEngine.UI {
  class Text extends UnityEngine.UI.MaskableGraphic {
    // constructors
    protected constructor();
    // methods
    FontTextureChanged(): void;
    GetGenerationSettings(extents: UnityEngine.Vector2): UnityEngine.TextGenerationSettings;
    static GetTextAnchorPivot(anchor: UnityEngine.TextAnchor): UnityEngine.Vector2;
    CalculateLayoutInputHorizontal(): void;
    CalculateLayoutInputVertical(): void;
    OnRebuildRequested(): void;
    // properties
    readonly cachedTextGenerator: UnityEngine.TextGenerator;
    readonly cachedTextGeneratorForLayout: UnityEngine.TextGenerator;
    readonly mainTexture: UnityEngine.Texture;
    font: UnityEngine.Font;
    text: string;
    supportRichText: boolean;
    resizeTextForBestFit: boolean;
    resizeTextMinSize: number;
    resizeTextMaxSize: number;
    alignment: UnityEngine.TextAnchor;
    alignByGeometry: boolean;
    fontSize: number;
    horizontalOverflow: UnityEngine.HorizontalWrapMode;
    verticalOverflow: UnityEngine.VerticalWrapMode;
    lineSpacing: number;
    fontStyle: UnityEngine.FontStyle;
    readonly pixelsPerUnit: number;
    readonly minWidth: number;
    readonly preferredWidth: number;
    readonly flexibleWidth: number;
    readonly minHeight: number;
    readonly preferredHeight: number;
    readonly flexibleHeight: number;
    readonly layoutPriority: number;
    // fields
  }
}
declare namespace UnityEngine.UI {
  class Toggle extends UnityEngine.UI.Selectable {
    // constructors
    protected constructor();
    // methods
    Rebuild(executing: UnityEngine.UI.CanvasUpdate): void;
    LayoutComplete(): void;
    GraphicUpdateComplete(): void;
    OnPointerClick(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnSubmit(eventData: UnityEngine.EventSystems.BaseEventData): void;
    // properties
    group: UnityEngine.UI.ToggleGroup;
    isOn: boolean;
    // fields
    toggleTransition: UnityEngine.UI.Toggle.ToggleTransition;
    graphic: UnityEngine.UI.Graphic;
    onValueChanged: UnityEngine.UI.Toggle.ToggleEvent;
  }
}
declare namespace UnityEngine.UI.Toggle {
  class ToggleEvent {
    // constructors
    constructor();
    // methods
    AddListener(call: ((arg0: boolean) => void)): void;
    RemoveListener(call: ((arg0: boolean) => void)): void;
    Invoke(arg0: boolean): void;
    GetPersistentEventCount(): number;
    GetPersistentTarget(index: number): UnityEngine.Object;
    GetPersistentMethodName(index: number): string;
    SetPersistentListenerState(index: number, state: UnityEngine.Events.UnityEventCallState): void;
    RemoveAllListeners(): void;
    ToString(): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
  }
}
declare namespace UnityEngine.UI.Toggle {
  class ToggleTransition extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static None: UnityEngine.UI.Toggle.ToggleTransition;
    static Fade: UnityEngine.UI.Toggle.ToggleTransition;
  }
}
declare namespace UnityEngine.UI {
  class ToggleGroup extends UnityEngine.EventSystems.UIBehaviour {
    // constructors
    protected constructor();
    // methods
    NotifyToggleOn(toggle: UnityEngine.UI.Toggle): void;
    UnregisterToggle(toggle: UnityEngine.UI.Toggle): void;
    RegisterToggle(toggle: UnityEngine.UI.Toggle): void;
    AnyTogglesOn(): boolean;
    ActiveToggles(): any;
    SetAllTogglesOff(): void;
    // properties
    allowSwitchOff: boolean;
    // fields
  }
}
declare namespace UnityEngine.UI {
  class VertexHelper extends System.Object {
    // constructors
    constructor();
    constructor(m: UnityEngine.Mesh);
    // methods
    Clear(): void;
    PopulateUIVertex(vertex: any, i: number): void;
    SetUIVertex(vertex: UnityEngine.UIVertex, i: number): void;
    FillMesh(mesh: UnityEngine.Mesh): void;
    Dispose(): void;
    AddVert(position: UnityEngine.Vector3, color: UnityEngine.Color32, uv0: UnityEngine.Vector2, uv1: UnityEngine.Vector2, normal: UnityEngine.Vector3, tangent: UnityEngine.Vector4): void;
    AddVert(position: UnityEngine.Vector3, color: UnityEngine.Color32, uv0: UnityEngine.Vector2): void;
    AddVert(v: UnityEngine.UIVertex): void;
    AddTriangle(idx0: number, idx1: number, idx2: number): void;
    AddUIVertexQuad(verts: UnityEngine.UIVertex[]): void;
    AddUIVertexStream(verts: UnityEngine.UIVertex[], indices: number[]): void;
    AddUIVertexTriangleStream(verts: UnityEngine.UIVertex[]): void;
    GetUIVertexStream(stream: UnityEngine.UIVertex[]): void;
    // properties
    readonly currentVertCount: number;
    readonly currentIndexCount: number;
    // fields
  }
}
declare namespace UnityEngine.UI {
  class VerticalLayoutGroup extends UnityEngine.UI.HorizontalOrVerticalLayoutGroup {
    // constructors
    protected constructor();
    // methods
    CalculateLayoutInputHorizontal(): void;
    CalculateLayoutInputVertical(): void;
    SetLayoutHorizontal(): void;
    SetLayoutVertical(): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class UICharInfo extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    cursorPos: UnityEngine.Vector2;
    charWidth: number;
  }
}
declare namespace UnityEngine {
  class UILineInfo extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    startCharIdx: number;
    height: number;
    topY: number;
  }
}
declare namespace UnityEngine {
  class UIVertex extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    position: UnityEngine.Vector3;
    normal: UnityEngine.Vector3;
    color: UnityEngine.Color32;
    uv0: UnityEngine.Vector2;
    uv1: UnityEngine.Vector2;
    tangent: UnityEngine.Vector4;
    static simpleVert: UnityEngine.UIVertex;
  }
}
declare namespace UnityEngine {
  class UnassignedReferenceException extends System.SystemException {
    // constructors
    constructor();
    constructor(message: string);
    constructor(message: string, innerException: System.Exception);
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class UnhandledExceptionHandler extends System.Object {
    // constructors
    constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class UnityAPICompatibilityVersionAttribute extends System.Attribute {
    // constructors
    constructor(version: string);
    // methods
    // properties
    readonly version: string;
    // fields
  }
}
declare namespace UnityEngine {
  class UnityEventQueueSystem extends System.Object {
    // constructors
    constructor();
    // methods
    static GenerateEventIdForPayload(eventPayloadName: string): string;
    static GetGlobalEventQueue(): any;
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class UnityException extends System.SystemException {
    // constructors
    constructor();
    constructor(message: string);
    constructor(message: string, innerException: System.Exception);
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class UnityLogWriter extends System.IO.TextWriter {
    // constructors
    constructor();
    // methods
    static WriteStringToUnityLog(s: string): void;
    static Init(): void;
    Write(value: any): void;
    Write(s: string): void;
    Write(value: boolean): void;
    Write(buffer: any[]): void;
    Write(value: number): void;
    Write(value: number): void;
    Write(value: number): void;
    Write(value: number): void;
    Write(value: any): void;
    Write(value: number): void;
    Write(value: number): void;
    Write(value: number): void;
    Write(format: string, arg0: any): void;
    Write(format: string, arg: any[]): void;
    Write(buffer: any[], index: number, count: number): void;
    Write(format: string, arg0: any, arg1: any): void;
    Write(format: string, arg0: any, arg1: any, arg2: any): void;
    // properties
    readonly Encoding: any;
    // fields
  }
}
declare namespace UnityEngine {
  class UnityString extends System.Object {
    // constructors
    constructor();
    // methods
    static Format(fmt: string, args: any[]): string;
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class UserAuthorization extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static WebCam: UnityEngine.UserAuthorization;
    static Microphone: UnityEngine.UserAuthorization;
  }
}
declare namespace UnityEngine {
  class UserAuthorizationDialog extends UnityEngine.MonoBehaviour {
    // constructors
    constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class Vector2 extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    Set(newX: number, newY: number): void;
    static Lerp(a: UnityEngine.Vector2, b: UnityEngine.Vector2, t: number): UnityEngine.Vector2;
    static LerpUnclamped(a: UnityEngine.Vector2, b: UnityEngine.Vector2, t: number): UnityEngine.Vector2;
    static MoveTowards(current: UnityEngine.Vector2, target: UnityEngine.Vector2, maxDistanceDelta: number): UnityEngine.Vector2;
    static Scale(a: UnityEngine.Vector2, b: UnityEngine.Vector2): UnityEngine.Vector2;
    Scale(scale: UnityEngine.Vector2): void;
    Normalize(): void;
    ToString(): string;
    ToString(format: string): string;
    GetHashCode(): number;
    Equals(other: any): boolean;
    static Reflect(inDirection: UnityEngine.Vector2, inNormal: UnityEngine.Vector2): UnityEngine.Vector2;
    static Dot(lhs: UnityEngine.Vector2, rhs: UnityEngine.Vector2): number;
    static Angle(from: UnityEngine.Vector2, to: UnityEngine.Vector2): number;
    static Distance(a: UnityEngine.Vector2, b: UnityEngine.Vector2): number;
    static ClampMagnitude(vector: UnityEngine.Vector2, maxLength: number): UnityEngine.Vector2;
    static SqrMagnitude(a: UnityEngine.Vector2): number;
    SqrMagnitude(): number;
    static Min(lhs: UnityEngine.Vector2, rhs: UnityEngine.Vector2): UnityEngine.Vector2;
    static Max(lhs: UnityEngine.Vector2, rhs: UnityEngine.Vector2): UnityEngine.Vector2;
    static SmoothDamp(current: UnityEngine.Vector2, target: UnityEngine.Vector2, currentVelocity: any, smoothTime: number, maxSpeed: number, deltaTime: number): UnityEngine.Vector2;
    // properties
    get_Item(index: number): number;
    set_Item(index: number, value: number): void;
    readonly normalized: UnityEngine.Vector2;
    readonly magnitude: number;
    readonly sqrMagnitude: number;
    static readonly zero: UnityEngine.Vector2;
    static readonly one: UnityEngine.Vector2;
    static readonly up: UnityEngine.Vector2;
    static readonly down: UnityEngine.Vector2;
    static readonly left: UnityEngine.Vector2;
    static readonly right: UnityEngine.Vector2;
    // fields
    x: number;
    y: number;
    static kEpsilon: number;
  }
}
declare namespace UnityEngine {
  class Vector3 extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    static Slerp(a: UnityEngine.Vector3, b: UnityEngine.Vector3, t: number): UnityEngine.Vector3;
    static SlerpUnclamped(a: UnityEngine.Vector3, b: UnityEngine.Vector3, t: number): UnityEngine.Vector3;
    static OrthoNormalize(normal: any, tangent: any): void;
    static OrthoNormalize(normal: any, tangent: any, binormal: any): void;
    static RotateTowards(current: UnityEngine.Vector3, target: UnityEngine.Vector3, maxRadiansDelta: number, maxMagnitudeDelta: number): UnityEngine.Vector3;
    static Exclude(excludeThis: UnityEngine.Vector3, fromThat: UnityEngine.Vector3): UnityEngine.Vector3;
    static Lerp(a: UnityEngine.Vector3, b: UnityEngine.Vector3, t: number): UnityEngine.Vector3;
    static LerpUnclamped(a: UnityEngine.Vector3, b: UnityEngine.Vector3, t: number): UnityEngine.Vector3;
    static MoveTowards(current: UnityEngine.Vector3, target: UnityEngine.Vector3, maxDistanceDelta: number): UnityEngine.Vector3;
    static SmoothDamp(current: UnityEngine.Vector3, target: UnityEngine.Vector3, currentVelocity: any, smoothTime: number, maxSpeed: number): UnityEngine.Vector3;
    static SmoothDamp(current: UnityEngine.Vector3, target: UnityEngine.Vector3, currentVelocity: any, smoothTime: number): UnityEngine.Vector3;
    static SmoothDamp(current: UnityEngine.Vector3, target: UnityEngine.Vector3, currentVelocity: any, smoothTime: number, maxSpeed: number, deltaTime: number): UnityEngine.Vector3;
    Set(new_x: number, new_y: number, new_z: number): void;
    static Scale(a: UnityEngine.Vector3, b: UnityEngine.Vector3): UnityEngine.Vector3;
    Scale(scale: UnityEngine.Vector3): void;
    static Cross(lhs: UnityEngine.Vector3, rhs: UnityEngine.Vector3): UnityEngine.Vector3;
    GetHashCode(): number;
    Equals(other: any): boolean;
    static Reflect(inDirection: UnityEngine.Vector3, inNormal: UnityEngine.Vector3): UnityEngine.Vector3;
    static Normalize(value: UnityEngine.Vector3): UnityEngine.Vector3;
    Normalize(): void;
    static Dot(lhs: UnityEngine.Vector3, rhs: UnityEngine.Vector3): number;
    static Project(vector: UnityEngine.Vector3, onNormal: UnityEngine.Vector3): UnityEngine.Vector3;
    static ProjectOnPlane(vector: UnityEngine.Vector3, planeNormal: UnityEngine.Vector3): UnityEngine.Vector3;
    static Angle(from: UnityEngine.Vector3, to: UnityEngine.Vector3): number;
    static Distance(a: UnityEngine.Vector3, b: UnityEngine.Vector3): number;
    static ClampMagnitude(vector: UnityEngine.Vector3, maxLength: number): UnityEngine.Vector3;
    static Magnitude(a: UnityEngine.Vector3): number;
    static SqrMagnitude(a: UnityEngine.Vector3): number;
    static Min(lhs: UnityEngine.Vector3, rhs: UnityEngine.Vector3): UnityEngine.Vector3;
    static Max(lhs: UnityEngine.Vector3, rhs: UnityEngine.Vector3): UnityEngine.Vector3;
    ToString(): string;
    ToString(format: string): string;
    static AngleBetween(from: UnityEngine.Vector3, to: UnityEngine.Vector3): number;
    // properties
    get_Item(index: number): number;
    set_Item(index: number, value: number): void;
    readonly normalized: UnityEngine.Vector3;
    readonly magnitude: number;
    readonly sqrMagnitude: number;
    static readonly zero: UnityEngine.Vector3;
    static readonly one: UnityEngine.Vector3;
    static readonly forward: UnityEngine.Vector3;
    static readonly back: UnityEngine.Vector3;
    static readonly up: UnityEngine.Vector3;
    static readonly down: UnityEngine.Vector3;
    static readonly left: UnityEngine.Vector3;
    static readonly right: UnityEngine.Vector3;
    static readonly fwd: UnityEngine.Vector3;
    // fields
    static kEpsilon: number;
    x: number;
    y: number;
    z: number;
  }
}
declare namespace UnityEngine {
  class Vector4 extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    Set(new_x: number, new_y: number, new_z: number, new_w: number): void;
    static Lerp(a: UnityEngine.Vector4, b: UnityEngine.Vector4, t: number): UnityEngine.Vector4;
    static LerpUnclamped(a: UnityEngine.Vector4, b: UnityEngine.Vector4, t: number): UnityEngine.Vector4;
    static MoveTowards(current: UnityEngine.Vector4, target: UnityEngine.Vector4, maxDistanceDelta: number): UnityEngine.Vector4;
    static Scale(a: UnityEngine.Vector4, b: UnityEngine.Vector4): UnityEngine.Vector4;
    Scale(scale: UnityEngine.Vector4): void;
    GetHashCode(): number;
    Equals(other: any): boolean;
    static Normalize(a: UnityEngine.Vector4): UnityEngine.Vector4;
    Normalize(): void;
    static Dot(a: UnityEngine.Vector4, b: UnityEngine.Vector4): number;
    static Project(a: UnityEngine.Vector4, b: UnityEngine.Vector4): UnityEngine.Vector4;
    static Distance(a: UnityEngine.Vector4, b: UnityEngine.Vector4): number;
    static Magnitude(a: UnityEngine.Vector4): number;
    static Min(lhs: UnityEngine.Vector4, rhs: UnityEngine.Vector4): UnityEngine.Vector4;
    static Max(lhs: UnityEngine.Vector4, rhs: UnityEngine.Vector4): UnityEngine.Vector4;
    ToString(): string;
    ToString(format: string): string;
    static SqrMagnitude(a: UnityEngine.Vector4): number;
    SqrMagnitude(): number;
    // properties
    get_Item(index: number): number;
    set_Item(index: number, value: number): void;
    readonly normalized: UnityEngine.Vector4;
    readonly magnitude: number;
    readonly sqrMagnitude: number;
    static readonly zero: UnityEngine.Vector4;
    static readonly one: UnityEngine.Vector4;
    // fields
    static kEpsilon: number;
    x: number;
    y: number;
    z: number;
    w: number;
  }
}
declare namespace UnityEngine {
  class VerticalWrapMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Truncate: UnityEngine.VerticalWrapMode;
    static Overflow: UnityEngine.VerticalWrapMode;
  }
}
declare namespace UnityEngine.VR {
  class InputTracking extends System.Object {
    // constructors
    protected constructor();
    // methods
    static GetLocalPosition(node: UnityEngine.VR.VRNode): UnityEngine.Vector3;
    static GetLocalRotation(node: UnityEngine.VR.VRNode): UnityEngine.Quaternion;
    static Recenter(): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine.VR {
  class VRDevice extends System.Object {
    // constructors
    protected constructor();
    // methods
    static GetNativePtr(): any;
    // properties
    static readonly isPresent: boolean;
    static readonly family: string;
    static readonly model: string;
    static readonly refreshRate: number;
    // fields
  }
}
declare namespace UnityEngine.VR {
  class VRDeviceType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Morpheus: UnityEngine.VR.VRDeviceType;
    static None: UnityEngine.VR.VRDeviceType;
    static Stereo: UnityEngine.VR.VRDeviceType;
    static Split: UnityEngine.VR.VRDeviceType;
    static Oculus: UnityEngine.VR.VRDeviceType;
    static PlayStationVR: UnityEngine.VR.VRDeviceType;
    static Unknown: UnityEngine.VR.VRDeviceType;
  }
}
declare namespace UnityEngine.VR {
  class VRNode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static LeftEye: UnityEngine.VR.VRNode;
    static RightEye: UnityEngine.VR.VRNode;
    static CenterEye: UnityEngine.VR.VRNode;
    static Head: UnityEngine.VR.VRNode;
    static LeftHand: UnityEngine.VR.VRNode;
    static RightHand: UnityEngine.VR.VRNode;
  }
}
declare namespace UnityEngine.VR {
  class VRSettings extends System.Object {
    // constructors
    protected constructor();
    // methods
    static LoadDeviceByName(deviceName: string): void;
    static LoadDeviceByName(prioritizedDeviceNameList: string[]): void;
    // properties
    static enabled: boolean;
    static readonly isDeviceActive: boolean;
    static showDeviceView: boolean;
    static renderScale: number;
    static readonly eyeTextureWidth: number;
    static readonly eyeTextureHeight: number;
    static renderViewportScale: number;
    static loadedDevice: UnityEngine.VR.VRDeviceType;
    static readonly loadedDeviceName: string;
    static readonly supportedDevices: string[];
    // fields
  }
}
declare namespace UnityEngine.VR {
  class VRStats extends System.Object {
    // constructors
    protected constructor();
    // methods
    // properties
    static readonly gpuTimeLastFrame: number;
    // fields
  }
}
declare namespace UnityEngine.VR.WSA {
  class HolographicSettings extends System.Object {
    // constructors
    constructor();
    // methods
    static SetFocusPointForFrame(position: UnityEngine.Vector3): void;
    static SetFocusPointForFrame(position: UnityEngine.Vector3, normal: UnityEngine.Vector3): void;
    static SetFocusPointForFrame(position: UnityEngine.Vector3, normal: UnityEngine.Vector3, velocity: UnityEngine.Vector3): void;
    static ActivateLatentFramePresentation(activated: boolean): void;
    // properties
    static readonly IsLatentFramePresentation: boolean;
    // fields
  }
}
declare namespace UnityEngine.VR.WSA.Input {
  class GestureRecognizer extends System.Object {
    // constructors
    constructor();
    // methods
    Dispose(): void;
    SetRecognizableGestures(newMaskValue: UnityEngine.VR.WSA.Input.GestureSettings): UnityEngine.VR.WSA.Input.GestureSettings;
    GetRecognizableGestures(): UnityEngine.VR.WSA.Input.GestureSettings;
    StartCapturingGestures(): void;
    StopCapturingGestures(): void;
    IsCapturingGestures(): boolean;
    CancelGestures(): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine.VR.WSA.Input.GestureRecognizer {
  class GestureEventType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static InteractionDetected: UnityEngine.VR.WSA.Input.GestureRecognizer.GestureEventType;
    static HoldCanceled: UnityEngine.VR.WSA.Input.GestureRecognizer.GestureEventType;
    static HoldCompleted: UnityEngine.VR.WSA.Input.GestureRecognizer.GestureEventType;
    static HoldStarted: UnityEngine.VR.WSA.Input.GestureRecognizer.GestureEventType;
    static TapDetected: UnityEngine.VR.WSA.Input.GestureRecognizer.GestureEventType;
    static ManipulationCanceled: UnityEngine.VR.WSA.Input.GestureRecognizer.GestureEventType;
    static ManipulationCompleted: UnityEngine.VR.WSA.Input.GestureRecognizer.GestureEventType;
    static ManipulationStarted: UnityEngine.VR.WSA.Input.GestureRecognizer.GestureEventType;
    static ManipulationUpdated: UnityEngine.VR.WSA.Input.GestureRecognizer.GestureEventType;
    static NavigationCanceled: UnityEngine.VR.WSA.Input.GestureRecognizer.GestureEventType;
    static NavigationCompleted: UnityEngine.VR.WSA.Input.GestureRecognizer.GestureEventType;
    static NavigationStarted: UnityEngine.VR.WSA.Input.GestureRecognizer.GestureEventType;
    static NavigationUpdated: UnityEngine.VR.WSA.Input.GestureRecognizer.GestureEventType;
    static RecognitionStarted: UnityEngine.VR.WSA.Input.GestureRecognizer.GestureEventType;
    static RecognitionEnded: UnityEngine.VR.WSA.Input.GestureRecognizer.GestureEventType;
  }
}
declare namespace UnityEngine.VR.WSA.Input {
  class GestureSettings extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static None: UnityEngine.VR.WSA.Input.GestureSettings;
    static Tap: UnityEngine.VR.WSA.Input.GestureSettings;
    static DoubleTap: UnityEngine.VR.WSA.Input.GestureSettings;
    static Hold: UnityEngine.VR.WSA.Input.GestureSettings;
    static ManipulationTranslate: UnityEngine.VR.WSA.Input.GestureSettings;
    static NavigationX: UnityEngine.VR.WSA.Input.GestureSettings;
    static NavigationY: UnityEngine.VR.WSA.Input.GestureSettings;
    static NavigationZ: UnityEngine.VR.WSA.Input.GestureSettings;
    static NavigationRailsX: UnityEngine.VR.WSA.Input.GestureSettings;
    static NavigationRailsY: UnityEngine.VR.WSA.Input.GestureSettings;
    static NavigationRailsZ: UnityEngine.VR.WSA.Input.GestureSettings;
  }
}
declare namespace UnityEngine.VR.WSA.Input {
  class InteractionManager extends System.Object {
    // constructors
    constructor();
    // methods
    static GetCurrentReading(sourceStates: UnityEngine.VR.WSA.Input.InteractionSourceState[]): number;
    static GetCurrentReading(): UnityEngine.VR.WSA.Input.InteractionSourceState[];
    // properties
    static readonly numSourceStates: number;
    // fields
  }
}
declare namespace UnityEngine.VR.WSA.Input.InteractionManager {
  class EventType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static SourceDetected: UnityEngine.VR.WSA.Input.InteractionManager.EventType;
    static SourceLost: UnityEngine.VR.WSA.Input.InteractionManager.EventType;
    static SourceUpdated: UnityEngine.VR.WSA.Input.InteractionManager.EventType;
    static SourcePressed: UnityEngine.VR.WSA.Input.InteractionManager.EventType;
    static SourceReleased: UnityEngine.VR.WSA.Input.InteractionManager.EventType;
  }
}
declare namespace UnityEngine.VR.WSA.Input {
  class InteractionSource extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    readonly id: number;
    readonly kind: UnityEngine.VR.WSA.Input.InteractionSourceKind;
    // fields
  }
}
declare namespace UnityEngine.VR.WSA.Input {
  class InteractionSourceKind extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Other: UnityEngine.VR.WSA.Input.InteractionSourceKind;
    static Hand: UnityEngine.VR.WSA.Input.InteractionSourceKind;
    static Voice: UnityEngine.VR.WSA.Input.InteractionSourceKind;
    static Controller: UnityEngine.VR.WSA.Input.InteractionSourceKind;
  }
}
declare namespace UnityEngine.VR.WSA.Input {
  class InteractionSourceLocation extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    TryGetPosition(position: any): boolean;
    TryGetVelocity(velocity: any): boolean;
    // properties
    // fields
  }
}
declare namespace UnityEngine.VR.WSA.Input {
  class InteractionSourceProperties extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    readonly sourceLossRisk: number;
    readonly sourceLossMitigationDirection: UnityEngine.Vector3;
    readonly location: UnityEngine.VR.WSA.Input.InteractionSourceLocation;
    // fields
  }
}
declare namespace UnityEngine.VR.WSA.Input {
  class InteractionSourceState extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    readonly pressed: boolean;
    readonly properties: UnityEngine.VR.WSA.Input.InteractionSourceProperties;
    readonly source: UnityEngine.VR.WSA.Input.InteractionSource;
    readonly headRay: UnityEngine.Ray;
    // fields
  }
}
declare namespace UnityEngine.VR.WSA.Persistence {
  class WorldAnchorStore extends System.Object {
    // constructors
    protected constructor();
    // methods
    static GetAsync(onCompleted: ((store: UnityEngine.VR.WSA.Persistence.WorldAnchorStore) => void)): void;
    Save(id: string, anchor: UnityEngine.VR.WSA.WorldAnchor): boolean;
    Load(id: string, go: UnityEngine.GameObject): UnityEngine.VR.WSA.WorldAnchor;
    Delete(id: string): boolean;
    Clear(): void;
    GetAllIds(ids: string[]): number;
    GetAllIds(): string[];
    // properties
    readonly anchorCount: number;
    // fields
  }
}
declare namespace UnityEngine.VR.WSA {
  class PositionalLocatorState extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Unavailable: UnityEngine.VR.WSA.PositionalLocatorState;
    static OrientationOnly: UnityEngine.VR.WSA.PositionalLocatorState;
    static Activating: UnityEngine.VR.WSA.PositionalLocatorState;
    static Active: UnityEngine.VR.WSA.PositionalLocatorState;
    static Inhibited: UnityEngine.VR.WSA.PositionalLocatorState;
  }
}
declare namespace UnityEngine.VR.WSA.Sharing {
  class SerializationCompletionReason extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Succeeded: UnityEngine.VR.WSA.Sharing.SerializationCompletionReason;
    static NotSupported: UnityEngine.VR.WSA.Sharing.SerializationCompletionReason;
    static AccessDenied: UnityEngine.VR.WSA.Sharing.SerializationCompletionReason;
    static UnknownError: UnityEngine.VR.WSA.Sharing.SerializationCompletionReason;
  }
}
declare namespace UnityEngine.VR.WSA.Sharing {
  class WorldAnchorTransferBatch extends System.Object {
    // constructors
    constructor();
    // methods
    static ExportAsync(transferBatch: UnityEngine.VR.WSA.Sharing.WorldAnchorTransferBatch, onDataAvailable: ((data: number[]) => void), onCompleted: ((completionReason: UnityEngine.VR.WSA.Sharing.SerializationCompletionReason) => void)): void;
    static ImportAsync(serializedData: number[], onComplete: ((completionReason: UnityEngine.VR.WSA.Sharing.SerializationCompletionReason, deserializedTransferBatch: UnityEngine.VR.WSA.Sharing.WorldAnchorTransferBatch) => void)): void;
    static ImportAsync(serializedData: number[], offset: number, length: number, onComplete: ((completionReason: UnityEngine.VR.WSA.Sharing.SerializationCompletionReason, deserializedTransferBatch: UnityEngine.VR.WSA.Sharing.WorldAnchorTransferBatch) => void)): void;
    AddWorldAnchor(id: string, anchor: UnityEngine.VR.WSA.WorldAnchor): boolean;
    GetAllIds(ids: string[]): number;
    GetAllIds(): string[];
    LockObject(id: string, go: UnityEngine.GameObject): UnityEngine.VR.WSA.WorldAnchor;
    Dispose(): void;
    // properties
    readonly anchorCount: number;
    // fields
  }
}
declare namespace UnityEngine.VR.WSA {
  class SurfaceChange extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Added: UnityEngine.VR.WSA.SurfaceChange;
    static Updated: UnityEngine.VR.WSA.SurfaceChange;
    static Removed: UnityEngine.VR.WSA.SurfaceChange;
  }
}
declare namespace UnityEngine.VR.WSA {
  class SurfaceData extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    id: UnityEngine.VR.WSA.SurfaceId;
    outputMesh: UnityEngine.MeshFilter;
    outputAnchor: UnityEngine.VR.WSA.WorldAnchor;
    outputCollider: UnityEngine.MeshCollider;
    trianglesPerCubicMeter: number;
    bakeCollider: boolean;
  }
}
declare namespace UnityEngine.VR.WSA {
  class SurfaceId extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    handle: number;
  }
}
declare namespace UnityEngine.VR.WSA {
  class SurfaceObserver extends System.Object {
    // constructors
    constructor();
    // methods
    SetVolumeAsAxisAlignedBox(origin: UnityEngine.Vector3, extents: UnityEngine.Vector3): void;
    SetVolumeAsSphere(origin: UnityEngine.Vector3, radiusMeters: number): void;
    SetVolumeAsOrientedBox(origin: UnityEngine.Vector3, extents: UnityEngine.Vector3, orientation: UnityEngine.Quaternion): void;
    SetVolumeAsFrustum(planes: UnityEngine.Plane[]): void;
    Update(onSurfaceChanged: ((surfaceId: UnityEngine.VR.WSA.SurfaceId, changeType: UnityEngine.VR.WSA.SurfaceChange, bounds: UnityEngine.Bounds, updateTime: any) => void)): void;
    RequestMeshAsync(dataRequest: UnityEngine.VR.WSA.SurfaceData, onDataReady: ((bakedData: UnityEngine.VR.WSA.SurfaceData, outputWritten: boolean, elapsedBakeTimeSeconds: number) => void)): boolean;
    Dispose(): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine.VR.WSA.WebCam {
  class CameraParameters extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    hologramOpacity: number;
    frameRate: number;
    cameraResolutionWidth: number;
    cameraResolutionHeight: number;
    pixelFormat: UnityEngine.VR.WSA.WebCam.CapturePixelFormat;
    // fields
  }
}
declare namespace UnityEngine.VR.WSA.WebCam {
  class CapturePixelFormat extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static BGRA32: UnityEngine.VR.WSA.WebCam.CapturePixelFormat;
    static NV12: UnityEngine.VR.WSA.WebCam.CapturePixelFormat;
    static JPEG: UnityEngine.VR.WSA.WebCam.CapturePixelFormat;
    static PNG: UnityEngine.VR.WSA.WebCam.CapturePixelFormat;
  }
}
declare namespace UnityEngine.VR.WSA.WebCam.PhotoCapture {
  class CaptureResultType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Success: UnityEngine.VR.WSA.WebCam.PhotoCapture.CaptureResultType;
    static UnknownError: UnityEngine.VR.WSA.WebCam.PhotoCapture.CaptureResultType;
  }
}
declare namespace UnityEngine.VR.WSA.WebCam {
  class PhotoCapture extends System.Object {
    // constructors
    protected constructor();
    // methods
    static CreateAsync(showHolograms: boolean, onCreatedCallback: ((captureObject: UnityEngine.VR.WSA.WebCam.PhotoCapture) => void)): void;
    StartPhotoModeAsync(setupParams: UnityEngine.VR.WSA.WebCam.CameraParameters, onPhotoModeStartedCallback: ((result: UnityEngine.VR.WSA.WebCam.PhotoCapture.PhotoCaptureResult) => void)): void;
    StopPhotoModeAsync(onPhotoModeStoppedCallback: ((result: UnityEngine.VR.WSA.WebCam.PhotoCapture.PhotoCaptureResult) => void)): void;
    TakePhotoAsync(filename: string, fileOutputFormat: UnityEngine.VR.WSA.WebCam.PhotoCaptureFileOutputFormat, onCapturedPhotoToDiskCallback: ((result: UnityEngine.VR.WSA.WebCam.PhotoCapture.PhotoCaptureResult) => void)): void;
    TakePhotoAsync(onCapturedPhotoToMemoryCallback: ((result: UnityEngine.VR.WSA.WebCam.PhotoCapture.PhotoCaptureResult, photoCaptureFrame: UnityEngine.VR.WSA.WebCam.PhotoCaptureFrame) => void)): void;
    GetUnsafePointerToVideoDeviceController(): any;
    Dispose(): void;
    // properties
    static readonly SupportedResolutions: any;
    // fields
  }
}
declare namespace UnityEngine.VR.WSA.WebCam.PhotoCapture {
  class PhotoCaptureResult extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    readonly success: boolean;
    // fields
    resultType: UnityEngine.VR.WSA.WebCam.PhotoCapture.CaptureResultType;
    hResult: number;
  }
}
declare namespace UnityEngine.VR.WSA.WebCam {
  class PhotoCaptureFileOutputFormat extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static PNG: UnityEngine.VR.WSA.WebCam.PhotoCaptureFileOutputFormat;
    static JPG: UnityEngine.VR.WSA.WebCam.PhotoCaptureFileOutputFormat;
  }
}
declare namespace UnityEngine.VR.WSA.WebCam {
  class PhotoCaptureFrame extends System.Object {
    // constructors
    protected constructor();
    // methods
    TryGetCameraToWorldMatrix(cameraToWorldMatrix: any): boolean;
    TryGetProjectionMatrix(projectionMatrix: any): boolean;
    TryGetProjectionMatrix(nearClipPlane: number, farClipPlane: number, projectionMatrix: any): boolean;
    UploadImageDataToTexture(targetTexture: UnityEngine.Texture2D): void;
    GetUnsafePointerToBuffer(): any;
    CopyRawImageDataIntoBuffer(byteBuffer: number[]): void;
    Dispose(): void;
    // properties
    readonly dataLength: number;
    readonly hasLocationData: boolean;
    readonly pixelFormat: UnityEngine.VR.WSA.WebCam.CapturePixelFormat;
    // fields
  }
}
declare namespace UnityEngine.VR.WSA.WebCam.VideoCapture {
  class AudioState extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static MicAudio: UnityEngine.VR.WSA.WebCam.VideoCapture.AudioState;
    static ApplicationAudio: UnityEngine.VR.WSA.WebCam.VideoCapture.AudioState;
    static ApplicationAndMicAudio: UnityEngine.VR.WSA.WebCam.VideoCapture.AudioState;
    static None: UnityEngine.VR.WSA.WebCam.VideoCapture.AudioState;
  }
}
declare namespace UnityEngine.VR.WSA.WebCam.VideoCapture {
  class CaptureResultType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Success: UnityEngine.VR.WSA.WebCam.VideoCapture.CaptureResultType;
    static UnknownError: UnityEngine.VR.WSA.WebCam.VideoCapture.CaptureResultType;
  }
}
declare namespace UnityEngine.VR.WSA.WebCam {
  class VideoCapture extends System.Object {
    // constructors
    protected constructor();
    // methods
    static GetSupportedFrameRatesForResolution(resolution: UnityEngine.Resolution): any;
    static CreateAsync(showHolograms: boolean, onCreatedCallback: ((captureObject: UnityEngine.VR.WSA.WebCam.VideoCapture) => void)): void;
    StartVideoModeAsync(setupParams: UnityEngine.VR.WSA.WebCam.CameraParameters, audioState: UnityEngine.VR.WSA.WebCam.VideoCapture.AudioState, onVideoModeStartedCallback: ((result: UnityEngine.VR.WSA.WebCam.VideoCapture.VideoCaptureResult) => void)): void;
    StopVideoModeAsync(onVideoModeStoppedCallback: ((result: UnityEngine.VR.WSA.WebCam.VideoCapture.VideoCaptureResult) => void)): void;
    StartRecordingAsync(filename: string, onStartedRecordingVideoCallback: ((result: UnityEngine.VR.WSA.WebCam.VideoCapture.VideoCaptureResult) => void)): void;
    StopRecordingAsync(onStoppedRecordingVideoCallback: ((result: UnityEngine.VR.WSA.WebCam.VideoCapture.VideoCaptureResult) => void)): void;
    GetUnsafePointerToVideoDeviceController(): any;
    Dispose(): void;
    // properties
    static readonly SupportedResolutions: any;
    readonly IsRecording: boolean;
    // fields
  }
}
declare namespace UnityEngine.VR.WSA.WebCam.VideoCapture {
  class VideoCaptureResult extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    readonly success: boolean;
    // fields
    resultType: UnityEngine.VR.WSA.WebCam.VideoCapture.CaptureResultType;
    hResult: number;
  }
}
declare namespace UnityEngine.VR.WSA.WebCam {
  class WebCam extends System.Object {
    // constructors
    protected constructor();
    // methods
    // properties
    static readonly Mode: UnityEngine.VR.WSA.WebCam.WebCamMode;
    // fields
  }
}
declare namespace UnityEngine.VR.WSA.WebCam {
  class WebCamMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static None: UnityEngine.VR.WSA.WebCam.WebCamMode;
    static PhotoMode: UnityEngine.VR.WSA.WebCam.WebCamMode;
    static VideoMode: UnityEngine.VR.WSA.WebCam.WebCamMode;
  }
}
declare namespace UnityEngine.VR.WSA {
  class WorldAnchor extends UnityEngine.Component {
    // constructors
    protected constructor();
    // methods
    // properties
    readonly isLocated: boolean;
    // fields
  }
}
declare namespace UnityEngine.VR.WSA {
  class WorldManager extends System.Object {
    // constructors
    constructor();
    // methods
    static GetNativeISpatialCoordinateSystemPtr(): any;
    // properties
    static readonly state: UnityEngine.VR.WSA.PositionalLocatorState;
    // fields
  }
}
declare namespace UnityEngine {
  class WaitForEndOfFrame extends UnityEngine.YieldInstruction {
    // constructors
    constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class WaitForFixedUpdate extends UnityEngine.YieldInstruction {
    // constructors
    constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class WaitForSeconds extends UnityEngine.YieldInstruction {
    // constructors
    constructor(seconds: number);
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class WaitForSecondsRealtime extends UnityEngine.CustomYieldInstruction {
    // constructors
    constructor(time: number);
    // methods
    // properties
    readonly keepWaiting: boolean;
    // fields
  }
}
declare namespace UnityEngine {
  class WaitUntil extends UnityEngine.CustomYieldInstruction {
    // constructors
    constructor(predicate: (() => boolean));
    // methods
    // properties
    readonly keepWaiting: boolean;
    // fields
  }
}
declare namespace UnityEngine {
  class WaitWhile extends UnityEngine.CustomYieldInstruction {
    // constructors
    constructor(predicate: (() => boolean));
    // methods
    // properties
    readonly keepWaiting: boolean;
    // fields
  }
}
declare namespace UnityEngine {
  class WeakListenerBindings extends System.Object {
    // constructors
    constructor();
    // methods
    static InvokeCallbacks(inst: any, gchandle: any, parameters: any[]): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class WebCamDevice extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    readonly name: string;
    readonly isFrontFacing: boolean;
    // fields
  }
}
declare namespace UnityEngine {
  class WebCamFlags extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static FrontFacing: UnityEngine.WebCamFlags;
  }
}
declare namespace UnityEngine {
  class WebCamTexture extends UnityEngine.Texture {
    // constructors
    constructor(deviceName: string, requestedWidth: number, requestedHeight: number, requestedFPS: number);
    constructor(deviceName: string, requestedWidth: number, requestedHeight: number);
    constructor(deviceName: string);
    constructor(requestedWidth: number, requestedHeight: number, requestedFPS: number);
    constructor(requestedWidth: number, requestedHeight: number);
    constructor();
    // methods
    Play(): void;
    Pause(): void;
    Stop(): void;
    MarkNonReadable(): void;
    GetPixel(x: number, y: number): UnityEngine.Color;
    GetPixels(): UnityEngine.Color[];
    GetPixels(x: number, y: number, blockWidth: number, blockHeight: number): UnityEngine.Color[];
    GetPixels32(colors: UnityEngine.Color32[]): UnityEngine.Color32[];
    GetPixels32(): UnityEngine.Color32[];
    // properties
    readonly isPlaying: boolean;
    deviceName: string;
    requestedFPS: number;
    requestedWidth: number;
    requestedHeight: number;
    readonly isReadable: boolean;
    static readonly devices: UnityEngine.WebCamDevice[];
    readonly videoRotationAngle: number;
    readonly videoVerticallyMirrored: boolean;
    readonly didUpdateThisFrame: boolean;
    // fields
  }
}
declare namespace UnityEngine {
  class WheelCollider extends UnityEngine.Collider {
    // constructors
    constructor();
    // methods
    ConfigureVehicleSubsteps(speedThreshold: number, stepsBelowThreshold: number, stepsAboveThreshold: number): void;
    GetGroundHit(hit: any): boolean;
    GetWorldPose(pos: any, quat: any): void;
    // properties
    center: UnityEngine.Vector3;
    radius: number;
    suspensionDistance: number;
    suspensionSpring: UnityEngine.JointSpring;
    forceAppPointDistance: number;
    mass: number;
    wheelDampingRate: number;
    forwardFriction: UnityEngine.WheelFrictionCurve;
    sidewaysFriction: UnityEngine.WheelFrictionCurve;
    motorTorque: number;
    brakeTorque: number;
    steerAngle: number;
    readonly isGrounded: boolean;
    readonly sprungMass: number;
    readonly rpm: number;
    // fields
  }
}
declare namespace UnityEngine {
  class WheelFrictionCurve extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    extremumSlip: number;
    extremumValue: number;
    asymptoteSlip: number;
    asymptoteValue: number;
    stiffness: number;
    // fields
  }
}
declare namespace UnityEngine {
  class WheelHit extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    collider: UnityEngine.Collider;
    point: UnityEngine.Vector3;
    normal: UnityEngine.Vector3;
    forwardDir: UnityEngine.Vector3;
    sidewaysDir: UnityEngine.Vector3;
    force: number;
    forwardSlip: number;
    sidewaysSlip: number;
    // fields
  }
}
declare namespace UnityEngine {
  class WheelJoint2D extends UnityEngine.AnchoredJoint2D {
    // constructors
    constructor();
    // methods
    GetMotorTorque(timeStep: number): number;
    // properties
    suspension: UnityEngine.JointSuspension2D;
    useMotor: boolean;
    motor: UnityEngine.JointMotor2D;
    readonly jointTranslation: number;
    readonly jointSpeed: number;
    // fields
  }
}
declare namespace UnityEngine.Windows.Speech {
  class ConfidenceLevel extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static High: UnityEngine.Windows.Speech.ConfidenceLevel;
    static Medium: UnityEngine.Windows.Speech.ConfidenceLevel;
    static Low: UnityEngine.Windows.Speech.ConfidenceLevel;
    static Rejected: UnityEngine.Windows.Speech.ConfidenceLevel;
  }
}
declare namespace UnityEngine.Windows.Speech {
  class DictationCompletionCause extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Complete: UnityEngine.Windows.Speech.DictationCompletionCause;
    static AudioQualityFailure: UnityEngine.Windows.Speech.DictationCompletionCause;
    static Canceled: UnityEngine.Windows.Speech.DictationCompletionCause;
    static TimeoutExceeded: UnityEngine.Windows.Speech.DictationCompletionCause;
    static PauseLimitExceeded: UnityEngine.Windows.Speech.DictationCompletionCause;
    static NetworkFailure: UnityEngine.Windows.Speech.DictationCompletionCause;
    static MicrophoneUnavailable: UnityEngine.Windows.Speech.DictationCompletionCause;
    static UnknownError: UnityEngine.Windows.Speech.DictationCompletionCause;
  }
}
declare namespace UnityEngine.Windows.Speech {
  class DictationRecognizer extends System.Object {
    // constructors
    constructor();
    constructor(confidenceLevel: UnityEngine.Windows.Speech.ConfidenceLevel);
    constructor(topic: UnityEngine.Windows.Speech.DictationTopicConstraint);
    constructor(minimumConfidence: UnityEngine.Windows.Speech.ConfidenceLevel, topic: UnityEngine.Windows.Speech.DictationTopicConstraint);
    // methods
    Start(): void;
    Stop(): void;
    Dispose(): void;
    // properties
    readonly Status: UnityEngine.Windows.Speech.SpeechSystemStatus;
    AutoSilenceTimeoutSeconds: number;
    InitialSilenceTimeoutSeconds: number;
    // fields
  }
}
declare namespace UnityEngine.Windows.Speech {
  class DictationTopicConstraint extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static WebSearch: UnityEngine.Windows.Speech.DictationTopicConstraint;
    static Form: UnityEngine.Windows.Speech.DictationTopicConstraint;
    static Dictation: UnityEngine.Windows.Speech.DictationTopicConstraint;
  }
}
declare namespace UnityEngine.Windows.Speech {
  class GrammarRecognizer extends UnityEngine.Windows.Speech.PhraseRecognizer {
    // constructors
    constructor(grammarFilePath: string);
    constructor(grammarFilePath: string, minimumConfidence: UnityEngine.Windows.Speech.ConfidenceLevel);
    // methods
    // properties
    readonly GrammarFilePath: string;
    // fields
  }
}
declare namespace UnityEngine.Windows.Speech {
  class KeywordRecognizer extends UnityEngine.Windows.Speech.PhraseRecognizer {
    // constructors
    constructor(keywords: string[]);
    constructor(keywords: string[], minimumConfidence: UnityEngine.Windows.Speech.ConfidenceLevel);
    // methods
    // properties
    readonly Keywords: any;
    // fields
  }
}
declare namespace UnityEngine.Windows.Speech {
  class PhraseRecognitionSystem extends System.Object {
    // constructors
    protected constructor();
    // methods
    static Restart(): void;
    static Shutdown(): void;
    // properties
    static readonly isSupported: boolean;
    static readonly Status: UnityEngine.Windows.Speech.SpeechSystemStatus;
    // fields
  }
}
declare namespace UnityEngine.Windows.Speech {
  class PhraseRecognizedEventArgs extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    confidence: UnityEngine.Windows.Speech.ConfidenceLevel;
    semanticMeanings: UnityEngine.Windows.Speech.SemanticMeaning[];
    text: string;
    phraseStartTime: any;
    phraseDuration: any;
  }
}
declare namespace UnityEngine.Windows.Speech {
  class PhraseRecognizer extends System.Object {
    // constructors
    protected constructor();
    // methods
    Start(): void;
    Stop(): void;
    Dispose(): void;
    // properties
    readonly IsRunning: boolean;
    // fields
  }
}
declare namespace UnityEngine.Windows.Speech {
  class SemanticMeaning extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    key: string;
    values: string[];
  }
}
declare namespace UnityEngine.Windows.Speech {
  class SpeechError extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static NoError: UnityEngine.Windows.Speech.SpeechError;
    static TopicLanguageNotSupported: UnityEngine.Windows.Speech.SpeechError;
    static GrammarLanguageMismatch: UnityEngine.Windows.Speech.SpeechError;
    static GrammarCompilationFailure: UnityEngine.Windows.Speech.SpeechError;
    static AudioQualityFailure: UnityEngine.Windows.Speech.SpeechError;
    static PauseLimitExceeded: UnityEngine.Windows.Speech.SpeechError;
    static TimeoutExceeded: UnityEngine.Windows.Speech.SpeechError;
    static NetworkFailure: UnityEngine.Windows.Speech.SpeechError;
    static MicrophoneUnavailable: UnityEngine.Windows.Speech.SpeechError;
    static UnknownError: UnityEngine.Windows.Speech.SpeechError;
  }
}
declare namespace UnityEngine.Windows.Speech {
  class SpeechSystemStatus extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Stopped: UnityEngine.Windows.Speech.SpeechSystemStatus;
    static Running: UnityEngine.Windows.Speech.SpeechSystemStatus;
    static Failed: UnityEngine.Windows.Speech.SpeechSystemStatus;
  }
}
declare namespace UnityEngine {
  class WindZone extends UnityEngine.Component {
    // constructors
    constructor();
    // methods
    // properties
    mode: UnityEngine.WindZoneMode;
    radius: number;
    windMain: number;
    windTurbulence: number;
    windPulseMagnitude: number;
    windPulseFrequency: number;
    // fields
  }
}
declare namespace UnityEngine {
  class WindZoneMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Directional: UnityEngine.WindZoneMode;
    static Spherical: UnityEngine.WindZoneMode;
  }
}
declare namespace UnityEngine {
  class WrapMode extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Once: UnityEngine.WrapMode;
    static Loop: UnityEngine.WrapMode;
    static PingPong: UnityEngine.WrapMode;
    static Default: UnityEngine.WrapMode;
    static ClampForever: UnityEngine.WrapMode;
    static Clamp: UnityEngine.WrapMode;
  }
}
declare namespace UnityEngine {
  class WritableAttribute extends System.Attribute {
    // constructors
    constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine.WSA {
  class Application extends System.Object {
    // constructors
    constructor();
    // methods
    static InvokeOnAppThread(item: (() => void), waitUntilDone: boolean): void;
    static InvokeOnUIThread(item: (() => void), waitUntilDone: boolean): void;
    static TryInvokeOnAppThread(item: (() => void), waitUntilDone: boolean): boolean;
    static TryInvokeOnUIThread(item: (() => void), waitUntilDone: boolean): boolean;
    static RunningOnAppThread(): boolean;
    static RunningOnUIThread(): boolean;
    // properties
    static readonly "arguments": string;
    static readonly advertisingIdentifier: string;
    // fields
  }
}
declare namespace UnityEngine.WSA {
  class Cursor extends System.Object {
    // constructors
    constructor();
    // methods
    static SetCustomCursor(id: number): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine.WSA {
  class Folder extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Installation: UnityEngine.WSA.Folder;
    static Temporary: UnityEngine.WSA.Folder;
    static Local: UnityEngine.WSA.Folder;
    static Roaming: UnityEngine.WSA.Folder;
    static CameraRoll: UnityEngine.WSA.Folder;
    static DocumentsLibrary: UnityEngine.WSA.Folder;
    static HomeGroup: UnityEngine.WSA.Folder;
    static MediaServerDevices: UnityEngine.WSA.Folder;
    static MusicLibrary: UnityEngine.WSA.Folder;
    static PicturesLibrary: UnityEngine.WSA.Folder;
    static Playlists: UnityEngine.WSA.Folder;
    static RemovableDevices: UnityEngine.WSA.Folder;
    static SavedPictures: UnityEngine.WSA.Folder;
    static VideosLibrary: UnityEngine.WSA.Folder;
  }
}
declare namespace UnityEngine.WSA {
  class Launcher extends System.Object {
    // constructors
    constructor();
    // methods
    static LaunchFile(folder: UnityEngine.WSA.Folder, relativeFilePath: string, showWarning: boolean): void;
    static LaunchFileWithPicker(fileExtension: string): void;
    static LaunchUri(uri: string, showWarning: boolean): void;
    // properties
    // fields
  }
}
declare namespace UnityEngine.WSA {
  class SecondaryTileData extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    backgroundColor: UnityEngine.Color32;
    // fields
    "arguments": string;
    backgroundColorSet: boolean;
    displayName: string;
    foregroundText: UnityEngine.WSA.TileForegroundText;
    lockScreenBadgeLogo: string;
    lockScreenDisplayBadgeAndTileText: boolean;
    phoneticName: string;
    roamingEnabled: boolean;
    showNameOnSquare150x150Logo: boolean;
    showNameOnSquare310x310Logo: boolean;
    showNameOnWide310x150Logo: boolean;
    square150x150Logo: string;
    square30x30Logo: string;
    square310x310Logo: string;
    square70x70Logo: string;
    tileId: string;
    wide310x150Logo: string;
  }
}
declare namespace UnityEngine.WSA {
  class Tile extends System.Object {
    // constructors
    protected constructor();
    // methods
    static GetTemplate(templ: UnityEngine.WSA.TileTemplate): string;
    Update(xml: string): void;
    Update(medium: string, wide: string, large: string, text: string): void;
    PeriodicUpdate(uri: string, interval: number): void;
    StopPeriodicUpdate(): void;
    UpdateBadgeImage(image: string): void;
    UpdateBadgeNumber(number: number): void;
    RemoveBadge(): void;
    PeriodicBadgeUpdate(uri: string, interval: number): void;
    StopPeriodicBadgeUpdate(): void;
    static Exists(tileId: string): boolean;
    static CreateOrUpdateSecondary(data: UnityEngine.WSA.SecondaryTileData): UnityEngine.WSA.Tile;
    static CreateOrUpdateSecondary(data: UnityEngine.WSA.SecondaryTileData, pos: UnityEngine.Vector2): UnityEngine.WSA.Tile;
    static CreateOrUpdateSecondary(data: UnityEngine.WSA.SecondaryTileData, area: UnityEngine.Rect): UnityEngine.WSA.Tile;
    static GetSecondary(tileId: string): UnityEngine.WSA.Tile;
    static GetSecondaries(): UnityEngine.WSA.Tile[];
    Delete(): void;
    Delete(pos: UnityEngine.Vector2): void;
    Delete(area: UnityEngine.Rect): void;
    static DeleteSecondary(tileId: string): void;
    static DeleteSecondary(tileId: string, pos: UnityEngine.Vector2): void;
    static DeleteSecondary(tileId: string, area: UnityEngine.Rect): void;
    // properties
    static readonly main: UnityEngine.WSA.Tile;
    readonly id: string;
    readonly hasUserConsent: boolean;
    readonly exists: boolean;
    // fields
  }
}
declare namespace UnityEngine.WSA {
  class TileForegroundText extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Default: UnityEngine.WSA.TileForegroundText;
    static Dark: UnityEngine.WSA.TileForegroundText;
    static Light: UnityEngine.WSA.TileForegroundText;
  }
}
declare namespace UnityEngine.WSA {
  class TileTemplate extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static TileSquare150x150Image: UnityEngine.WSA.TileTemplate;
    static TileSquare150x150Block: UnityEngine.WSA.TileTemplate;
    static TileSquare150x150Text01: UnityEngine.WSA.TileTemplate;
    static TileSquare150x150Text02: UnityEngine.WSA.TileTemplate;
    static TileSquare150x150Text03: UnityEngine.WSA.TileTemplate;
    static TileSquare150x150Text04: UnityEngine.WSA.TileTemplate;
    static TileSquare150x150PeekImageAndText01: UnityEngine.WSA.TileTemplate;
    static TileSquare150x150PeekImageAndText02: UnityEngine.WSA.TileTemplate;
    static TileSquare150x150PeekImageAndText03: UnityEngine.WSA.TileTemplate;
    static TileSquare150x150PeekImageAndText04: UnityEngine.WSA.TileTemplate;
    static TileWide310x150Image: UnityEngine.WSA.TileTemplate;
    static TileWide310x150ImageCollection: UnityEngine.WSA.TileTemplate;
    static TileWide310x150ImageAndText01: UnityEngine.WSA.TileTemplate;
    static TileWide310x150ImageAndText02: UnityEngine.WSA.TileTemplate;
    static TileWide310x150BlockAndText01: UnityEngine.WSA.TileTemplate;
    static TileWide310x150BlockAndText02: UnityEngine.WSA.TileTemplate;
    static TileWide310x150PeekImageCollection01: UnityEngine.WSA.TileTemplate;
    static TileWide310x150PeekImageCollection02: UnityEngine.WSA.TileTemplate;
    static TileWide310x150PeekImageCollection03: UnityEngine.WSA.TileTemplate;
    static TileWide310x150PeekImageCollection04: UnityEngine.WSA.TileTemplate;
    static TileWide310x150PeekImageCollection05: UnityEngine.WSA.TileTemplate;
    static TileWide310x150PeekImageCollection06: UnityEngine.WSA.TileTemplate;
    static TileWide310x150PeekImageAndText01: UnityEngine.WSA.TileTemplate;
    static TileWide310x150PeekImageAndText02: UnityEngine.WSA.TileTemplate;
    static TileWide310x150PeekImage01: UnityEngine.WSA.TileTemplate;
    static TileWide310x150PeekImage02: UnityEngine.WSA.TileTemplate;
    static TileWide310x150PeekImage03: UnityEngine.WSA.TileTemplate;
    static TileWide310x150PeekImage04: UnityEngine.WSA.TileTemplate;
    static TileWide310x150PeekImage05: UnityEngine.WSA.TileTemplate;
    static TileWide310x150PeekImage06: UnityEngine.WSA.TileTemplate;
    static TileWide310x150SmallImageAndText01: UnityEngine.WSA.TileTemplate;
    static TileWide310x150SmallImageAndText02: UnityEngine.WSA.TileTemplate;
    static TileWide310x150SmallImageAndText03: UnityEngine.WSA.TileTemplate;
    static TileWide310x150SmallImageAndText04: UnityEngine.WSA.TileTemplate;
    static TileWide310x150SmallImageAndText05: UnityEngine.WSA.TileTemplate;
    static TileWide310x150Text01: UnityEngine.WSA.TileTemplate;
    static TileWide310x150Text02: UnityEngine.WSA.TileTemplate;
    static TileWide310x150Text03: UnityEngine.WSA.TileTemplate;
    static TileWide310x150Text04: UnityEngine.WSA.TileTemplate;
    static TileWide310x150Text05: UnityEngine.WSA.TileTemplate;
    static TileWide310x150Text06: UnityEngine.WSA.TileTemplate;
    static TileWide310x150Text07: UnityEngine.WSA.TileTemplate;
    static TileWide310x150Text08: UnityEngine.WSA.TileTemplate;
    static TileWide310x150Text09: UnityEngine.WSA.TileTemplate;
    static TileWide310x150Text10: UnityEngine.WSA.TileTemplate;
    static TileWide310x150Text11: UnityEngine.WSA.TileTemplate;
    static TileSquare310x310BlockAndText01: UnityEngine.WSA.TileTemplate;
    static TileSquare310x310BlockAndText02: UnityEngine.WSA.TileTemplate;
    static TileSquare310x310Image: UnityEngine.WSA.TileTemplate;
    static TileSquare310x310ImageAndText01: UnityEngine.WSA.TileTemplate;
    static TileSquare310x310ImageAndText02: UnityEngine.WSA.TileTemplate;
    static TileSquare310x310ImageAndTextOverlay01: UnityEngine.WSA.TileTemplate;
    static TileSquare310x310ImageAndTextOverlay02: UnityEngine.WSA.TileTemplate;
    static TileSquare310x310ImageAndTextOverlay03: UnityEngine.WSA.TileTemplate;
    static TileSquare310x310ImageCollectionAndText01: UnityEngine.WSA.TileTemplate;
    static TileSquare310x310ImageCollectionAndText02: UnityEngine.WSA.TileTemplate;
    static TileSquare310x310ImageCollection: UnityEngine.WSA.TileTemplate;
    static TileSquare310x310SmallImagesAndTextList01: UnityEngine.WSA.TileTemplate;
    static TileSquare310x310SmallImagesAndTextList02: UnityEngine.WSA.TileTemplate;
    static TileSquare310x310SmallImagesAndTextList03: UnityEngine.WSA.TileTemplate;
    static TileSquare310x310SmallImagesAndTextList04: UnityEngine.WSA.TileTemplate;
    static TileSquare310x310Text01: UnityEngine.WSA.TileTemplate;
    static TileSquare310x310Text02: UnityEngine.WSA.TileTemplate;
    static TileSquare310x310Text03: UnityEngine.WSA.TileTemplate;
    static TileSquare310x310Text04: UnityEngine.WSA.TileTemplate;
    static TileSquare310x310Text05: UnityEngine.WSA.TileTemplate;
    static TileSquare310x310Text06: UnityEngine.WSA.TileTemplate;
    static TileSquare310x310Text07: UnityEngine.WSA.TileTemplate;
    static TileSquare310x310Text08: UnityEngine.WSA.TileTemplate;
    static TileSquare310x310TextList01: UnityEngine.WSA.TileTemplate;
    static TileSquare310x310TextList02: UnityEngine.WSA.TileTemplate;
    static TileSquare310x310TextList03: UnityEngine.WSA.TileTemplate;
    static TileSquare310x310SmallImageAndText01: UnityEngine.WSA.TileTemplate;
    static TileSquare310x310SmallImagesAndTextList05: UnityEngine.WSA.TileTemplate;
    static TileSquare310x310Text09: UnityEngine.WSA.TileTemplate;
    static TileSquare71x71IconWithBadge: UnityEngine.WSA.TileTemplate;
    static TileSquare150x150IconWithBadge: UnityEngine.WSA.TileTemplate;
    static TileWide310x150IconWithBadgeAndText: UnityEngine.WSA.TileTemplate;
    static TileSquare71x71Image: UnityEngine.WSA.TileTemplate;
    static TileTall150x310Image: UnityEngine.WSA.TileTemplate;
    static TileSquare99x99IconWithBadge: UnityEngine.WSA.TileTemplate;
    static TileSquare210x210IconWithBadge: UnityEngine.WSA.TileTemplate;
    static TileWide432x210IconWithBadgeAndText: UnityEngine.WSA.TileTemplate;
  }
}
declare namespace UnityEngine.WSA {
  class Toast extends System.Object {
    // constructors
    protected constructor();
    // methods
    static GetTemplate(templ: UnityEngine.WSA.ToastTemplate): string;
    static Create(xml: string): UnityEngine.WSA.Toast;
    static Create(image: string, text: string): UnityEngine.WSA.Toast;
    Show(): void;
    Hide(): void;
    // properties
    "arguments": string;
    readonly activated: boolean;
    readonly dismissed: boolean;
    readonly dismissedByUser: boolean;
    // fields
  }
}
declare namespace UnityEngine.WSA {
  class ToastTemplate extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static ToastImageAndText01: UnityEngine.WSA.ToastTemplate;
    static ToastImageAndText02: UnityEngine.WSA.ToastTemplate;
    static ToastImageAndText03: UnityEngine.WSA.ToastTemplate;
    static ToastImageAndText04: UnityEngine.WSA.ToastTemplate;
    static ToastText01: UnityEngine.WSA.ToastTemplate;
    static ToastText02: UnityEngine.WSA.ToastTemplate;
    static ToastText03: UnityEngine.WSA.ToastTemplate;
    static ToastText04: UnityEngine.WSA.ToastTemplate;
  }
}
declare namespace UnityEngine.WSA {
  class WindowActivationState extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static CodeActivated: UnityEngine.WSA.WindowActivationState;
    static Deactivated: UnityEngine.WSA.WindowActivationState;
    static PointerActivated: UnityEngine.WSA.WindowActivationState;
  }
}
declare namespace UnityEngine {
  class WWW extends System.Object {
    // constructors
    constructor(url: string);
    constructor(url: string, form: UnityEngine.WWWForm);
    constructor(url: string, postData: number[]);
    constructor(url: string, postData: number[], headers: any);
    // methods
    Dispose(): void;
    InitWWW(url: string, postData: number[], iHeaders: string[]): void;
    static EscapeURL(s: string): string;
    static EscapeURL(s: string, e: any): string;
    static UnEscapeURL(s: string): string;
    static UnEscapeURL(s: string, e: any): string;
    GetAudioClip(threeD: boolean): UnityEngine.AudioClip;
    GetAudioClip(threeD: boolean, stream: boolean): UnityEngine.AudioClip;
    GetAudioClip(threeD: boolean, stream: boolean, audioType: UnityEngine.AudioType): UnityEngine.AudioClip;
    GetAudioClipCompressed(): UnityEngine.AudioClip;
    GetAudioClipCompressed(threeD: boolean): UnityEngine.AudioClip;
    GetAudioClipCompressed(threeD: boolean, audioType: UnityEngine.AudioType): UnityEngine.AudioClip;
    LoadImageIntoTexture(tex: UnityEngine.Texture2D): void;
    static GetURL(url: string): string;
    static GetTextureFromURL(url: string): UnityEngine.Texture2D;
    LoadUnityWeb(): void;
    static LoadFromCacheOrDownload(url: string, version: number): UnityEngine.WWW;
    static LoadFromCacheOrDownload(url: string, version: number, crc: number): UnityEngine.WWW;
    static LoadFromCacheOrDownload(url: string, hash: UnityEngine.Hash128): UnityEngine.WWW;
    static LoadFromCacheOrDownload(url: string, hash: UnityEngine.Hash128, crc: number): UnityEngine.WWW;
    // properties
    readonly responseHeaders: any;
    readonly text: string;
    readonly data: string;
    readonly bytes: number[];
    readonly size: number;
    readonly error: string;
    readonly texture: UnityEngine.Texture2D;
    readonly textureNonReadable: UnityEngine.Texture2D;
    readonly audioClip: UnityEngine.AudioClip;
    readonly movie: UnityEngine.MovieTexture;
    readonly isDone: boolean;
    readonly progress: number;
    readonly uploadProgress: number;
    readonly bytesDownloaded: number;
    readonly oggVorbis: UnityEngine.AudioClip;
    readonly url: string;
    readonly assetBundle: UnityEngine.AssetBundle;
    threadPriority: UnityEngine.ThreadPriority;
    // fields
  }
}
declare namespace UnityEngine {
  class WWWForm extends System.Object {
    // constructors
    constructor();
    // methods
    AddField(fieldName: string, value: string): void;
    AddField(fieldName: string, value: string, e: any): void;
    AddField(fieldName: string, i: number): void;
    AddBinaryData(fieldName: string, contents: number[], fileName: string): void;
    AddBinaryData(fieldName: string, contents: number[]): void;
    AddBinaryData(fieldName: string, contents: number[], fileName: string, mimeType: string): void;
    // properties
    readonly headers: any;
    readonly data: number[];
    // fields
  }
}
declare namespace UnityEngine {
  class WWWTranscoder extends System.Object {
    // constructors
    constructor();
    // methods
    static URLEncode(toEncode: string): string;
    static URLEncode(toEncode: string, e: any): string;
    static URLEncode(toEncode: number[]): number[];
    static QPEncode(toEncode: string): string;
    static QPEncode(toEncode: string, e: any): string;
    static QPEncode(toEncode: number[]): number[];
    static Encode(input: number[], escapeChar: number, space: number, forbidden: number[], uppercase: boolean): number[];
    static URLDecode(toEncode: string): string;
    static URLDecode(toEncode: string, e: any): string;
    static URLDecode(toEncode: number[]): number[];
    static QPDecode(toEncode: string): string;
    static QPDecode(toEncode: string, e: any): string;
    static QPDecode(toEncode: number[]): number[];
    static Decode(input: number[], escapeChar: number, space: number): number[];
    static SevenBitClean(s: string): boolean;
    static SevenBitClean(s: string, e: any): boolean;
    static SevenBitClean(input: number[]): boolean;
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class YieldInstruction extends System.Object {
    // constructors
    constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngine {
  class _AndroidJNIHelper extends System.Object {
    // constructors
    constructor();
    // methods
    static CreateJavaProxy(delegateHandle: number, proxy: UnityEngine.AndroidJavaProxy): any;
    static CreateJavaRunnable(jrunnable: (() => void)): any;
    static InvokeJavaProxyMethod(proxy: UnityEngine.AndroidJavaProxy, jmethodName: any, jargs: any): any;
    static CreateJNIArgArray(args: any[]): UnityEngine.jvalue[];
    static UnboxArray(obj: UnityEngine.AndroidJavaObject): any;
    static Unbox(obj: UnityEngine.AndroidJavaObject): any;
    static Box(obj: any): UnityEngine.AndroidJavaObject;
    static DeleteJNIArgArray(args: any[], jniArgs: UnityEngine.jvalue[]): void;
    static ConvertToJNIArray(array: any): any;
    static GetConstructorID(jclass: any, args: any[]): any;
    static GetConstructorID(jclass: any, signature: string): any;
    static GetMethodID(jclass: any, methodName: string, args: any[], isStatic: boolean): any;
    static GetMethodID(jclass: any, methodName: string, signature: string, isStatic: boolean): any;
    static GetFieldID(jclass: any, fieldName: string, signature: string, isStatic: boolean): any;
    static GetSignature(obj: any): string;
    static GetSignature(args: any[]): string;
    // properties
    // fields
  }
}
declare namespace UnityEngineInternal {
  class APIUpdaterRuntimeServices extends System.Object {
    // constructors
    constructor();
    // methods
    static AddComponent(go: UnityEngine.GameObject, sourceInfo: string, name: string): UnityEngine.Component;
    // properties
    // fields
  }
}
declare namespace UnityEngineInternal {
  class GenericStack extends System.Collections.Stack {
    // constructors
    constructor();
    // methods
    // properties
    // fields
  }
}
declare namespace UnityEngineInternal {
  class GIDebugVisualisation extends System.Object {
    // constructors
    constructor();
    // methods
    static ResetRuntimeInputTextures(): void;
    static PlayCycleMode(): void;
    static PauseCycleMode(): void;
    static StopCycleMode(): void;
    static CycleSkipInstances(skip: number): void;
    static CycleSkipSystems(skip: number): void;
    // properties
    static readonly cycleMode: boolean;
    static readonly pauseCycleMode: boolean;
    static texType: UnityEngineInternal.GITextureType;
    // fields
  }
}
declare namespace UnityEngineInternal {
  class GITextureType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Charting: UnityEngineInternal.GITextureType;
    static Albedo: UnityEngineInternal.GITextureType;
    static Emissive: UnityEngineInternal.GITextureType;
    static Irradiance: UnityEngineInternal.GITextureType;
    static Directionality: UnityEngineInternal.GITextureType;
    static Baked: UnityEngineInternal.GITextureType;
    static BakedDirectional: UnityEngineInternal.GITextureType;
    static InputWorkspace: UnityEngineInternal.GITextureType;
  }
}
declare namespace UnityEngineInternal {
  class LightmapType extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static NoLightmap: UnityEngineInternal.LightmapType;
    static StaticLightmap: UnityEngineInternal.LightmapType;
    static DynamicLightmap: UnityEngineInternal.LightmapType;
  }
}
declare namespace UnityEngineInternal {
  class MathfInternal extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    static FloatMinNormal: number;
    static FloatMinDenormal: number;
    static IsFlushToZeroEnabled: boolean;
  }
}
declare namespace UnityEngineInternal {
  class NetFxCoreExtensions extends System.Object {
    // constructors
    protected constructor();
    // methods
    static CreateDelegate(self: any, delegateType: any, target: any): any;
    static GetMethodInfo(self: any): any;
    // properties
    // fields
  }
}
declare namespace UnityEngineInternal {
  class ScriptingUtils extends System.Object {
    // constructors
    constructor();
    // methods
    static CreateDelegate(type: any, methodInfo: any): any;
    // properties
    // fields
  }
}
declare namespace UnityEngineInternal {
  class TypeInferenceRuleAttribute extends System.Attribute {
    // constructors
    constructor(rule: UnityEngineInternal.TypeInferenceRules);
    constructor(rule: string);
    // methods
    ToString(): string;
    // properties
    // fields
  }
}
declare namespace UnityEngineInternal {
  class TypeInferenceRules extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static TypeReferencedByFirstArgument: UnityEngineInternal.TypeInferenceRules;
    static TypeReferencedBySecondArgument: UnityEngineInternal.TypeInferenceRules;
    static ArrayOfTypeReferencedByFirstArgument: UnityEngineInternal.TypeInferenceRules;
    static TypeOfFirstArgument: UnityEngineInternal.TypeInferenceRules;
  }
}
declare namespace UnityEngineInternal {
  class WebRequestUtils extends System.Object {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
  }
}
