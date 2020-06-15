export declare class Cache {
    static has(name: string): boolean;
    static get(name: string): Promise<string | undefined>;
    static set(name: string, audio: string | Uint8Array): Promise<void>;
}
