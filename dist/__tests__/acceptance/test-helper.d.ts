import { Client } from '@loopback/testlab';
import { MyApplication } from '../..';
export declare function setupApplication(): Promise<AppWithClient>;
export interface AppWithClient {
    app: MyApplication;
    client: Client;
}
