package com.rho.genpropbag;

import java.util.Map;

import com.rhomobile.rhodes.api.IMethodResult;
import com.rhomobile.rhodes.api.MethodResult;

import com.rhomobile.rhodes.Logger;

public class GenPropBag extends GenPropBagBase implements IGenPropBag {

	private MethodResult callback = null;
    
    public GenPropBag(String id) {
        super(id);
    }

    public void setCallbackProp(IMethodResult result) {
    	if (result.hasCallback())
    	{
    		Logger.I("GenPropBag", "setCallback");
			((MethodResult) result).keepAlive();
			callback = ((MethodResult) result);
    	}
    }
    public void callCallback(IMethodResult result) {
    	if (callback != null && callback.hasCallback()) {
    		Logger.I("GenPropBag", "FireCallback");
    		callback.set("set");
    	}
    }

}