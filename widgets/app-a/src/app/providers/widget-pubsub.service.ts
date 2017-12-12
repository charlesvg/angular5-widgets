
export abstract class WidgetPubsubService {
  abstract publish(eventName: string, payLoad: any): void;
  abstract subscribe(eventName, callbackFn: Function);
}
