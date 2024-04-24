import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(ScreenshotManagerPlugin)
public class ScreenshotManagerPlugin: CAPPlugin {
    private let implementation = ScreenshotManager()

    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.resolve([
            "value": implementation.echo(value)
        ])
    }

    @objc func ping(_ call: CAPPluginCall) {
        let message = call.getString("message") ?? "No message"
        let response = implementation.ping(message: message)
        
        call.resolve([
            "response": response
        ])
    }
}


