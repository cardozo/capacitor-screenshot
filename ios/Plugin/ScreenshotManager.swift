import Foundation

@objc public class ScreenshotManager: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }

    @objc public func ping(message: String) -> String {
    print("Ping: \(message)")
    return "Pong"
}
}


