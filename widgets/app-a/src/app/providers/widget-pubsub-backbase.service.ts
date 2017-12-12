import {Injectable, NgZone} from "@angular/core";
import {WidgetPubsubService} from "./widget-pubsub.service";

@Injectable()
export class WidgetPubSubBackbaseService implements WidgetPubsubService {
  constructor(private window: Window, private zone: NgZone) {}

  /**
   * Publish event to pubsub mechanism
   * @param {string} eventName The event name to send
   * @param payload The payload to send
   */
  publish(eventName: string, payload: any): void {
    (<any>this.window).gadgets.pubsub.publish(eventName, payload);
  }

  /**
   * Subscribe for events from the pubsub mechanism. Change detection is taken care of.
   * @param {string} eventName The event name to subscribe to
   * @param {Function} callback The callback to execute whenever the event was fired
   */
  subscribe(eventName: string, callback: Function): void {
    let theZone = this.zone;
    (<any>this.window).gadgets.pubsub.subscribe(eventName, (payload: any) => {
      // let Angular know it should trigger change detection
      theZone.run(() => {
        callback(payload);
      })
    });
  }
}
