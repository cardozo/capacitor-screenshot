package com.cardozo.capacitor.screenshot;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "ScreenshotManager")
public class ScreenshotManagerPlugin extends Plugin {

    private ScreenshotManager implementation;

    @Override
    public void load() {
        implementation = new ScreenshotManager(getActivity());
    }

    @PluginMethod
    public void echo(PluginCall call) {
        String value = call.getString("value");
        JSObject ret = new JSObject();
        ret.put("value", implementation.echo(value));
        call.resolve(ret);
    }

    @PluginMethod
    public void blockScreenshots(PluginCall call) {
        implementation.blockScreenshots();
        call.resolve(new JSObject().put("success", true));
    }

    @PluginMethod
    public void allowScreenshots(PluginCall call) {
        implementation.allowScreenshots();
        call.resolve(new JSObject().put("success", true));
    }
}
