import Foundation
import Capacitor

@objc(ScreenshotManagerPlugin)
public class ScreenshotManagerPlugin: CAPPlugin {
    
    override public func load() {
        // Registrar para notificações de screenshot
        NotificationCenter.default.addObserver(
            self,
            selector: #selector(screenshotTaken),
            name: UIApplication.userDidTakeScreenshotNotification,
            object: nil
        )
    }

    deinit {
        // Remover o observador quando a instância é desalocada
        NotificationCenter.default.removeObserver(self)
    }

    @objc func screenshotTaken() {
        print("Screenshot taken!")
        self.notifyListeners("screenshotEvent", data: ["message": "Screenshot taken!"])
    }

    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        print(value)
        call.resolve([
            "value": value
        ])
    }

    @objc func ping(_ call: CAPPluginCall) {
        let message = call.getString("message") ?? ""
        print("Ping: \(message)")
        call.resolve([
            "response": "Pong"
        ])
    }
}
