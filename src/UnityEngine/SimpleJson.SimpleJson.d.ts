declare namespace SimpleJson {
  class SimpleJson {
    // constructors
    private constructor();
    // methods
    static DeserializeObject(json: string): any;
    static TryDeserializeObject(json: string, obj: any): boolean;
    static DeserializeObject(json: string, type: any, jsonSerializerStrategy: SimpleJson.IJsonSerializerStrategy): any;
    static DeserializeObject(json: string, type: any): any;
    static SerializeObject(json: any, jsonSerializerStrategy: SimpleJson.IJsonSerializerStrategy): string;
    static SerializeObject(json: any): string;
    static EscapeToJavascriptString(jsonString: string): string;
    // properties
    // fields
  }
}