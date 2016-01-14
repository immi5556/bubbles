package bubbler.immi.bubbleand;

import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.LayoutInflater;
import android.view.View;

import com.txusballesteros.bubbles.BubbleLayout;
import com.txusballesteros.bubbles.BubblesManager;

public class bubble extends AppCompatActivity {
    private BubblesManager bubblesManager;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        bubblesManager = new BubblesManager.Builder(this)
                .build();
        bubblesManager.initialize();

        BubbleLayout bubbleView = (BubbleLayout) LayoutInflater
                .from(this).inflate(R.layout.activity_bubble, null);
        bubblesManager.addBubble(bubbleView, 60, 20);
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_bubble);
    }

}
