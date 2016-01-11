package vaporizer.immi.vaporizer;

import android.content.Context;
import android.util.AttributeSet;
import android.view.GestureDetector;
import android.view.MotionEvent;
import android.webkit.WebView;
import android.widget.Toast;

/**
 * Created by Immanuel Raj on 1/10/2016.
 */
public final class MyWebView extends WebView {
    Context mContext;
    GestureDetector gestureDetector = new GestureDetector(new MyGestureDetector());


    public MyWebView(Context context) {
        super(context);
        mContext=context;
    }

    public MyWebView(Context context, AttributeSet attrs, int defStyle) {
        super(context, attrs, defStyle);
        mContext=context;
    }

    public MyWebView(Context context, AttributeSet attrs) {
        super(context, attrs);
        mContext=context;
    }

    @Override
    public void onScrollChanged(int l, int t, int oldl, int oldt) {
    }


    private static final int SWIPE_MIN_DISTANCE = 120;
    private static final int SWIPE_MAX_OFF_PATH = 250;
    private static final int SWIPE_THRESHOLD_VELOCITY = 200;

    class MyGestureDetector extends GestureDetector.SimpleOnGestureListener {

        @Override
        public boolean onDown(MotionEvent e) {
            return true;
        }

        @Override
        public boolean onScroll(MotionEvent e1, MotionEvent e2,
                                float distanceX, float distanceY) {
            return super.onScroll(e1, e2, distanceX, distanceY);
        }

        @Override
        public boolean onFling(MotionEvent e1, MotionEvent e2, float velocityX,
                               float velocityY) {
            try {
                if (Math.abs(e1.getY() - e2.getY()) > SWIPE_MAX_OFF_PATH)
                    return false;
                // right to left swipe
                if (e1.getX() - e2.getX() > SWIPE_MIN_DISTANCE
                        && Math.abs(velocityX) > SWIPE_THRESHOLD_VELOCITY) {
                    Toast.makeText(mContext, "Left Swipe", Toast.LENGTH_SHORT)
                            .show();
                } else if (e2.getX() - e1.getX() > SWIPE_MIN_DISTANCE
                        && Math.abs(velocityX) > SWIPE_THRESHOLD_VELOCITY) {
                    Toast.makeText(mContext, "Right Swipe", Toast.LENGTH_SHORT)
                            .show();
                }
            } catch (Exception e) {
                // nothing
            }
            return false;
        }

        public boolean onTouchEvent(MotionEvent ev) {
            return (gestureDetector.onTouchEvent(ev) || true);
        }

    }
}
