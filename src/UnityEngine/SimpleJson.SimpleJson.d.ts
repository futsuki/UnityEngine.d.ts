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
