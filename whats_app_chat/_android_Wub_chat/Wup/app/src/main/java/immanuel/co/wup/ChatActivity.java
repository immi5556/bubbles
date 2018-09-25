package immanuel.co.wup;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.drawable.Drawable;
import android.os.Bundle;
import android.text.Editable;
import android.text.Spannable;
import android.text.SpannableStringBuilder;
import android.text.TextWatcher;
import android.text.style.ImageSpan;
import android.view.LayoutInflater;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.view.View.OnClickListener;
import android.view.animation.Animation;
import android.view.animation.AnimationUtils;
import android.widget.EditText;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.PopupMenu;
import android.widget.PopupMenu.OnMenuItemClickListener;
import android.widget.ScrollView;
import android.widget.TextView;
import android.widget.Toast;

import immanuel.co.wup.adapters.ChatMessages;
import immanuel.co.wup.helpers.ImageCircular;

import java.util.ArrayList;
import java.util.List;

@SuppressLint("NewApi")
public class ChatActivity extends Activity {
	/* Type: Variable
	 * Name: Chats List Array
	 * Class: ChatMessages.java
	 * Package: com.atouchsimo.whatsup.adapters
	 * */
	public List<ChatMessages> chats = new ArrayList<ChatMessages>();
	/* Type: View Element
	 * Name: chatMessageInput
	 * Layout: res/layout/activity_chat.xml
	 * */
	public EditText chatMessageInput;
	// View Constant
	public View mView = null;
	/* Type: Variable
	 * Description: they are constants for chat list items
	 * ---- names: Users Name
	 * ---- lastSeen: Message Last Seen
	 * ---- images: Users Images
	 * ---- messages: Users messages
	 * ---- dates: Messages Dates
	 * ---- from: To detect who's the sender
	 * */
	public String[] names,lastSeen,images,messages,dates,from;
	/* Type: View Element
	 * Name: mScrollView
	 * Layout: res/layout/activity_chat.xml
	 * Description: It's the container of messages
	 * */
	public ScrollView mScrollView;
	public LinearLayout mLinearLayout;
	public LayoutInflater mLayoutInflater;
	/* Type: Variables
	 * Description:
	 * ---- position: used in for loop
	 * ---- imageID: used to get user image using a String name
	 * ---- i: used in for loop
	 * ---- count: used to contain chatMessageInput Text lentgh
	 * */
	public int position,imageID,i,count;
	/* Type: View Elements
	 * Description: 
	 * ---- chatMessage: -> layout: res/layout/activity_chat.xml
	 * ---- chatDate: -> layout: res/layout/activity_chat.xml
	 * */
	public TextView chatMessage,chatDate;
	/* Type: View Elements
	 * Description:
	 * ---- chatmessagePhoto: Attach Image Button
	 * --------- Layout: res/layout/activity_chat.xml
	 * ---- chatMessageMicrophone: Record Audio 
	 * --------- Layout: res/layout/activity_chat.xml
	 * ---- chatMessageSend: Message Send Button
	 * --------- Layout: res/layout/activity_chat.xml
	 * */
	public ImageButton chatMessagePhoto,chatMessageMicrophone,chatMessageSend;
	// a constant for Animation
	public Animation mAnimation;
	/* Type: View Elements
	 * Description: used as constant of emojis images
	 * ---- Layout: res/layout/activity_chat.xml
	 * */
	public ImageView emo1,emo2,emo3,emo4,emo5,emo6;
	/* Type: View Element
	 * Description: this button used to hide/show emoji panel
	 * ---- Layout: res/layout/activity_chat.xml
	 * */
	public ImageButton chatEmosOrKeyBoard;
	// a constant for Bitmap
    private Bitmap mBitmap;
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_chat);
		/* Loads (names,lastSeen,images) From Resources
		 * Here you can load it from a Web Server
		 * */
		names 		= getResources().getStringArray(R.array.chatListNames);
		lastSeen 	= getResources().getStringArray(R.array.usersLastSeen);
		images 		= getResources().getStringArray(R.array.chatListImages);
		/* Get Position 
		 * That provided from: HomeFragment Line: 45
		 * */
		position 	= getIntent().getExtras().getInt("position");
		/* Set ActionBarTitle = the name of user from (names) array
		 * Set ActionBarSubTitle = lastSeen if user from (lastSeen) array
		 * Set ActionBarBackground = res/drawable/bg_action_bar
		 * */
		getActionBar().setTitle(names[position]);
		getActionBar().setSubtitle(lastSeen[position]);
		getActionBar().setBackgroundDrawable(getResources().getDrawable(R.drawable.bg_action_bar));
		/* Load imageID using its name from (images) array
		 * Then we decode it to be a Bitmap
		 * Then we use ImageCircular class from package: com.atouch.whatsup.helpers to make it as a circle
		 * */
		imageID 	= getResources().getIdentifier(images[position], "drawable", this.getApplicationContext().getApplicationInfo().packageName);
		mBitmap = BitmapFactory.decodeResource(getResources(),imageID);
        ImageCircular img = new ImageCircular(mBitmap);
        // here we change the actionbar icon to the user image
		getActionBar().setIcon(img);
		/* Here we Load messages date from resources
		 * messages: res/values/strings.xml
		 * dates: res/values/strings.xml
		 * from: res/values/strings.xml
		 * */
		messages 	= getResources().getStringArray(R.array.chatMessages);
		dates		= getResources().getStringArray(R.array.chatMessagesDate);
		from 		= getResources().getStringArray(R.array.chatMessagesFrom);
		/* Define ScrollView that will contains messages
		 * Then we define LinearLayout the child of the ScrollView
		 * Check: res/layout/chat_activity.xml
		 * */
		mScrollView=(ScrollView)findViewById(R.id.scrollView);
		mLinearLayout = (LinearLayout)mScrollView.findViewById(R.id.vertical_container);
		// we define Layoutinflater to use it for inflating chat bubbles
		mLayoutInflater = (LayoutInflater)getSystemService(Context.LAYOUT_INFLATER_SERVICE);
		/* Here i used for loop to append bubbles to a scroll
		 * You can use a ListView Adapter instead
		 * check: you can use this
		 * ---- Class: ChatMessages,ChatMessagesAdapter
		 * ---- Package: com.atouchsimo.adapters
		 * */
		for (i = 0; i < messages.length; i++) {
			/* Here when the message is from me
			 * we inflate R.layout.bubble_left: res/layout/bubble_left
			 * and if it's from the other person 
			 * we inflate R.layout.bubble_right: res/layout/bubble_right 
			 * */
			if(from[i].equals("me")){
				mView = mLayoutInflater.inflate(R.layout.bubble_left, null);
			}else{
				mView = mLayoutInflater.inflate(R.layout.bubble_right, null);
			}
			/* here we set the text of chatMessage, chatDate
			 * you'll find chatMessage & chatDate in:
			 * res/layout/bubble_left and also in res/layout/bubble_right
			 * */
			chatMessage = (TextView) mView.findViewById(R.id.chatMessage);
			chatDate 	= (TextView) mView.findViewById(R.id.chatDate);
			chatMessage.setText(messages[i]);
			chatDate.setText(dates[i]);
			mLinearLayout.addView(mView);
		}
		// define chaMessageInput from: res/layout/chat_activity.xml
		chatMessageInput = (EditText) findViewById(R.id.chatMessageInput);
		// we add a listener to chatMessageInput 
		chatMessageInput.addTextChangedListener(new TextWatcher() {
			@Override
			public void onTextChanged(CharSequence arg0, int arg1, int arg2, int arg3) {}
			@Override
			public void beforeTextChanged(CharSequence arg0, int arg1, int arg2, int arg3) {}
			@Override
			public void afterTextChanged(Editable s) {
				/* after text of chatMessageInput changed
				 * we store it in a variable
				 * */
				String text = s.toString().trim();
				/* we define chatMessagePhoto,chatMessageMicrophone,chatMessageSend
				 * res/layout/chat_activity.xml
				 * */
				chatMessagePhoto = (ImageButton) findViewById(R.id.chatMessagePhoto);
				chatMessageMicrophone = (ImageButton) findViewById(R.id.chatMessageMicrophone);
				chatMessageSend = (ImageButton) findViewById(R.id.chatMessageSend);
				/* here we count the text length after user made changes
				 * */
				count = text.length();
				/* if count does not equals zero & the chatMessagePhoto button is visible
				 * we add Animation (res/anim/out_animation.xml) to : chatMessagePhoto, chatMessageMicrophone
				 * Then we make them invisible
				 * */
				if(count > 0 && chatMessagePhoto.getVisibility() == View.VISIBLE){
					mAnimation = AnimationUtils.loadAnimation(ChatActivity.this, R.anim.out_animation);
					chatMessagePhoto.startAnimation(mAnimation);
					chatMessagePhoto.setVisibility(View.GONE);
					chatMessageMicrophone.startAnimation(mAnimation);
					chatMessageMicrophone.setVisibility(View.GONE);
					/* here after we hide chatMessagePhoto, chatMessageMicrophone buttons
					 * we show chatMessageSend
					 * after checking if it's invisible 
					 * */
					if(chatMessageSend.getVisibility() == View.GONE){
						chatMessageSend.setVisibility(View.VISIBLE);
					}
					/* here if count equals zero the chatMessagePhoto button is not visible
					 * we add Animation (res/anim/in_animation.xml) to : chatMessagePhoto, chatMessageMicrophone
					 * Then we make them visible
					 * */
				}else if(count == 0 && chatMessagePhoto.getVisibility() != View.VISIBLE){
					mAnimation = AnimationUtils.loadAnimation(ChatActivity.this, R.anim.in_animation);
					chatMessagePhoto.startAnimation(mAnimation);
					chatMessagePhoto.setVisibility(View.VISIBLE);
					chatMessageMicrophone.startAnimation(mAnimation);
					chatMessageMicrophone.setVisibility(View.VISIBLE);
					/* here after we show chatMessagePhoto, chatMessageMicrophone buttons
					 * we hide chatMessageSend
					 * after checking if it's visible 
					 * */
					if(chatMessageSend.getVisibility() == View.VISIBLE){
						chatMessageSend.setVisibility(View.GONE);
					}
				}
			}
		});
		/* we define emojis Element
		 * check: res/layout/chat_activity.xml
		 * here i added only 6 emos you can add as much as you want
		 * */
		emo1 = (ImageView) findViewById(R.id.emo1);
		emo2 = (ImageView) findViewById(R.id.emo2);
		emo3 = (ImageView) findViewById(R.id.emo3);
		emo4 = (ImageView) findViewById(R.id.emo4);
		emo5 = (ImageView) findViewById(R.id.emo5);
		emo6 = (ImageView) findViewById(R.id.emo6);
		/* here we add a Click Listener to each emoji image
		 * then on the  onClick function
		 * we use addImageBetweenText to add the emoji image to the chatMessageInput
		 * */
		emo1.setOnClickListener(new OnClickListener() {
			@Override
			public void onClick(View v) {
				addImageBetweenText(emo1.getDrawable());
			}
		});
		emo2.setOnClickListener(new OnClickListener() {
			@Override
			public void onClick(View v) {
				addImageBetweenText(emo2.getDrawable());
			}
		});
		emo3.setOnClickListener(new OnClickListener() {
			@Override
			public void onClick(View v) {
				addImageBetweenText(emo3.getDrawable());
			}
		});
		emo4.setOnClickListener(new OnClickListener() {
			@Override
			public void onClick(View v) {
				addImageBetweenText(emo4.getDrawable());
			}
		});
		emo5.setOnClickListener(new OnClickListener() {
			@Override
			public void onClick(View v) {
				addImageBetweenText(emo5.getDrawable());
			}
		});
		emo6.setOnClickListener(new OnClickListener() {
			@Override
			public void onClick(View v) {
				addImageBetweenText(emo6.getDrawable());
			}
		});
		/* here we define chatEmosOrKeyBoard: res/layout/chat_activity.xml
		 * and we add to it a Click Listener
		 * to hide/show emojis panel
		 * */
		chatEmosOrKeyBoard = (ImageButton) findViewById(R.id.chatEmosOrKeyBoard);
		chatEmosOrKeyBoard.setOnClickListener(new OnClickListener() {
			
			@Override
			public void onClick(View v) {
				mLinearLayout = (LinearLayout) findViewById(R.id.chatEmoslayout);
				if(mLinearLayout.getVisibility() == View.VISIBLE){
					mLinearLayout.setVisibility(View.GONE);
					chatEmosOrKeyBoard.setImageResource(R.drawable.ic_action_user);
				}else{
					mLinearLayout.setVisibility(View.VISIBLE);
					chatEmosOrKeyBoard.setImageResource(R.drawable.ic_action_keyboard);
				}
			}
		});
	}
	/* this funtion used to add emojis icon to the input text (chatMessageInput)
	 * */
	private void addImageBetweenText(Drawable drawable) {
	        drawable.setBounds(0, 0, drawable.getIntrinsicWidth(), drawable.getIntrinsicHeight());
	        int selectionCursor = chatMessageInput.getSelectionStart();
	        chatMessageInput.getText().insert(selectionCursor, ".");
	        selectionCursor = chatMessageInput.getSelectionStart();
	        SpannableStringBuilder builder = new SpannableStringBuilder(chatMessageInput.getText());
	        builder.setSpan(new ImageSpan(drawable), selectionCursor - ".".length(), selectionCursor, Spannable.SPAN_EXCLUSIVE_EXCLUSIVE);
	        chatMessageInput.setText(builder);
	        chatMessageInput.setSelection(selectionCursor);
	}
	/* Inflate the menu; this adds items to the action bar if it is present.
	 * check: res/menu/chat_conversation.xml
	 * */
	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		getMenuInflater().inflate(R.menu.chat_conversation, menu);
		return true;
	}
	/* here when an option from menu is selected
	 * */
	@Override
	public boolean onOptionsItemSelected(MenuItem item) {
		PopupMenu mPopupMenu;
		switch (item.getItemId()) {
		/* if the selected option is R.id.actionConversationOptions
		 * check: res/menu/chat_conversation.xml
		 * */
		case R.id.actionConversationOptions:
			/* we define actionConversationOptions element
			 * then we create a new PopupMenu
			 * */
			View menuItemView = findViewById(R.id.actionConversationOptions);
			mPopupMenu = new PopupMenu(ChatActivity.this,menuItemView);
			/* here we inflate R.menu.chat_list_item_popup as a popup
			 * check: res/menu/chat_list_item_popup.xml
			 * */
			mPopupMenu.getMenuInflater().inflate(R.menu.chat_list_item_popup, mPopupMenu.getMenu());
			/* we add a listener when an item from the popup (chat_list_item_popup) is selected
			 * */
			mPopupMenu.setOnMenuItemClickListener(new OnMenuItemClickListener() {
				
				@Override
				public boolean onMenuItemClick(MenuItem item) {
					/* if the item that is clicked is "View Contact"
					 * we start ProfileActivity
					 * and we put an Extra called position
					 * here i put it manually (1) you can make daynamic
					 * */
					if(item.getTitle().equals("View Contact")){
						Intent i = new Intent(ChatActivity.this, ProfileActivity.class);
						i.putExtra("position", 1);
						startActivity(i);
					}else{
						/* if the clicked item is not "View Contact"
						 * we just show a Toast
						 * you can make what you want
						 * */
						Toast.makeText(ChatActivity.this, "popup :"+item, Toast.LENGTH_LONG).show();
					}
					return true;
				}
			});
			mPopupMenu.show();
		default:
			return super.onOptionsItemSelected(item);
		}
	}
}
