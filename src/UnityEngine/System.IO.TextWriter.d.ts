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
