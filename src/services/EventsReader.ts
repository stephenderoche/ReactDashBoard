import { HubConnection, HubConnectionBuilder, HubConnectionState } from '@aspnet/signalr';
import { Store } from "redux";
import { GROUP_SELECTED, groupSelected } from '../store/actions';
import { IApplicationState } from "../store/states";

interface IContextEvent {
    name: string,
    payload: any,
}

// todo: make this configurable
const commonBackendUrl = 'http://localhost:5000';

export function connectToCommonBackend(store: Store<IApplicationState>){

    const connection: HubConnection = new HubConnectionBuilder().withUrl(`${commonBackendUrl}/appsHub`).build();

    // React to context events:
    connection.on("context", (contextEvent: IContextEvent) => {

        if (contextEvent.name === GROUP_SELECTED){
            const action: any = groupSelected(
                contextEvent.payload.selection,
                contextEvent.payload.sourceId);
            store.dispatch(action);
        }
        
    });

    // Subscribe to context event changes:
    connection.start().then(() => {
        if (connection.state === HubConnectionState.Connected) {
            connection.invoke("HandleMessage", "subscription", "context");               
      }
    });
}