package com.cardozo.capacitor.screenshot;

import android.util.Log;
import android.app.Activity;
import android.view.WindowManager;

public class ScreenshotManager {

    private Activity activity;

    public ScreenshotManager(Activity activity) {
        this.activity = activity;
    }

    public String echo(String value) {
        Log.i("Echo", value);
        return value;
    }

    public void blockScreenshots() {
        activity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                activity.getWindow().addFlags(WindowManager.LayoutParams.FLAG_SECURE);
            }
        });
    }

    public void allowScreenshots() {
        activity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                activity.getWindow().clearFlags(WindowManager.LayoutParams.FLAG_SECURE);
            }
        });
    }
}
