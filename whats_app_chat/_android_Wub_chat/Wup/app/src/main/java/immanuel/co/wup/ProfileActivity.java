package immanuel.co.wup;

import android.app.Activity;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.os.Bundle;
import android.widget.ImageView;

import immanuel.co.wup.helpers.ImageCircular;


public class ProfileActivity extends Activity {
	/* Type: View Element
	 * Description: Profile Image
	 * ---- Layout: res/layout/activity_profile.xml
	 * */
	public ImageView profilePicture;
	// Bitmap Constant
	public Bitmap mBitmap;
	/* Class: ImageCircular
	 * Package: com.atouchsimo.helpers
	 * */
	public ImageCircular mImageCircular;
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_profile);
		// change ActionBar Title and Background
		getActionBar().setTitle("Contact Info");
		getActionBar().setBackgroundDrawable(getResources().getDrawable(R.drawable.bg_action_bar));
		/* here i define profile image only
		 * and the name and all other information in: res/layout/activity_profile.xml
		 * is not changing you have to do it daynamically from here its so easy :)
		 * */
		profilePicture = (ImageView) findViewById(R.id.profileImage);
		mBitmap = BitmapFactory.decodeResource(getResources(),R.drawable.user_image_3);
		mImageCircular = new ImageCircular(mBitmap);
        profilePicture.setImageDrawable(mImageCircular);
	}
}
