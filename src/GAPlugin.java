package com.plugins.gaplugin;

import org.apache.cordova.api.Plugin;
import org.apache.cordova.api.PluginResult;
import org.apache.cordova.api.PluginResult.Status;
import org.json.JSONArray;
import org.json.JSONException;
import com.google.analytics.tracking.android.*;

import android.util.Log;

public class GAPlugin extends Plugin {
	public static final String INIT = "init";
	public static final String SEND_EVENT = "sendEvent";
	public static final String DISPATCH = "dispatch";
    
	private Tracker mGaTracker;
	private GoogleAnalytics mGaInstance;
	
	public GAPlugin() {
	}
	
	@Override
	public PluginResult execute(String action, JSONArray data, String callbackId) {
		PluginResult result = null;
		if (INIT.equals(action)) {
			try {
				init(data.getString(0));
				result = new PluginResult(Status.OK);
			} catch (JSONException e) {
				result = new PluginResult(Status.JSON_EXCEPTION);
			}
		}  else if (SEND_EVENT.equals(action)) {
			try {
				sendEvent(data.getString(0), data.getString(1), data.getString(2), data.getInt(3));
				result = new PluginResult(Status.OK);
			} catch (JSONException e) {
				result = new PluginResult(Status.JSON_EXCEPTION);
			}
		}	else if (DISPATCH.equals(action)) {
			dispatch();
			result = new PluginResult(Status.OK);
		}  else {
			result = new PluginResult(Status.INVALID_ACTION);
		}
		return result;
	}
	
	private void init(String accountId) {
		mGaInstance = GoogleAnalytics.getInstance(this.cordova.getActivity());
		mGaTracker = mGaInstance.getTracker(accountId);
	}
    
	private void sendEvent(String category, String action, String label, int value){
		mGaTracker.sendEvent(category, action, label, (long) value);
	}
	
	private void dispatch(){
		GAServiceManager.getInstance().dispatch();
		//mGaTracker.close();
	}
}