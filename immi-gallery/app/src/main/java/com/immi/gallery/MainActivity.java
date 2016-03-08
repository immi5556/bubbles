package com.immi.gallery;

import android.content.Intent;
import android.content.res.Configuration;
import android.graphics.Bitmap;
import android.net.Uri;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.Window;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class MainActivity extends AppCompatActivity {

    WebView web;

    private ValueCallback<Uri> mUploadMessage;
    private final static int FILECHOOSER_RESULTCODE=1;

    @Override
    protected void onActivityResult(int requestCode, int resultCode,
                                    Intent intent) {
        if(requestCode==FILECHOOSER_RESULTCODE)
        {
            if (null == mUploadMessage) return;
            Uri result = intent == null || resultCode != RESULT_OK ? null
                    : intent.getData();
            mUploadMessage.onReceiveValue(result);
            mUploadMessage = null;
        }
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        web = (WebView) findViewById(R.id.webview);
        web = new WebView(this);
        web.getSettings().setJavaScriptEnabled(true);
        web.loadUrl("http://photos.immanuel.co/");
        web.setWebViewClient(new myWebClient());
        web.setWebChromeClient(new WebChromeClient() {
            //The undocumented magic method override
            //Eclipse will swear at you if you try to put @Override here
            // For Android 3.0+
            public void openFileChooser(ValueCallback<Uri> uploadMsg) {

                mUploadMessage = uploadMsg;
                Intent i = new Intent(Intent.ACTION_GET_CONTENT);
                i.addCategory(Intent.CATEGORY_OPENABLE);
                i.setType("image/*");
                MainActivity.this.startActivityForResult(Intent.createChooser(i, "File Chooser"), FILECHOOSER_RESULTCODE);

            }

            // For Android 3.0+
            public void openFileChooser(ValueCallback uploadMsg, String acceptType) {
                mUploadMessage = uploadMsg;
                Intent i = new Intent(Intent.ACTION_GET_CONTENT);
                i.addCategory(Intent.CATEGORY_OPENABLE);
                i.setType("*/*");
                MainActivity.this.startActivityForResult(
                        Intent.createChooser(i, "File Browser"),
                        FILECHOOSER_RESULTCODE);
            }

            //For Android 4.1
            public void openFileChooser(ValueCallback<Uri> uploadMsg, String acceptType, String capture) {
                mUploadMessage = uploadMsg;
                Intent i = new Intent(Intent.ACTION_GET_CONTENT);
                i.addCategory(Intent.CATEGORY_OPENABLE);
                i.setType("image/*");
                MainActivity.this.startActivityForResult(Intent.createChooser(i, "File Chooser"), MainActivity.FILECHOOSER_RESULTCODE);

            }

        });


        setContentView(web);
    }

    public class myWebClient extends WebViewClient
    {
        @Override
        public void onPageStarted(WebView view, String url, Bitmap favicon) {
            // TODO Auto-generated method stub
            super.onPageStarted(view, url, favicon);
        }

        @Override
        public boolean shouldOverrideUrlLoading(WebView view, String url) {
            // TODO Auto-generated method stub

            view.loadUrl(url);
            return true;

        }

        @Override
        public void onPageFinished(WebView view, String url) {
            // TODO Auto-generated method stub
            super.onPageFinished(view, url);


        }
    }

    @Override
    public void onConfigurationChanged(Configuration newConfig){
        super.onConfigurationChanged(newConfig);
    }
}
