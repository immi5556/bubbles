package vaporizer.immi.vaporizer;

import android.webkit.WebView;
import android.webkit.WebViewClient;

/**
 * Created by Immanuel Raj on 1/10/2016.
 */
public class MyWebViewClient extends WebViewClient {
    public void onReceivedHttpError (WebView view, int errorCode, String description, String failingUrl) {
        view.loadUrl("file:///android_asset/error.html");
    }
}
