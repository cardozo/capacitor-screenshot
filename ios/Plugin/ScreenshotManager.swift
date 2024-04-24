import Foundation

@objc public class ScreenshotManager: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
