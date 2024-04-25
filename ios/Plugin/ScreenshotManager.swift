import UIKit
import Foundation

@objc public class ScreenshotManager: NSObject {
    override init() {
        super.init()
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
        self.bridge?.notifyListeners("screenshotEvent", data: ["message": "Screenshot taken!"])
    }
    
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }

    @objc public func ping(message: String) -> String {
        print("Ping: \(message)")
        return "Pong"
    }
}
