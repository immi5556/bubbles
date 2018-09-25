package immanuel.co.wup;

import android.app.Activity;
import android.os.Bundle;
import android.view.Menu;

public class ProfileEditActivity extends Activity {

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_profile_edit);
		/* Everything is clear here ;)
		 * */
		getActionBar().setTitle("Edit Profile");
		getActionBar().setBackgroundDrawable(getResources().getDrawable(R.drawable.bg_action_bar));
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.profile_edit, menu);
		return true;
	}

}
