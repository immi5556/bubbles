package com.atouchsimo.whatsup.adapters;


import java.util.List;

import com.atouchsimo.whatsapp.R;
import com.atouchsimo.whatsup.ProfileActivity;
import com.atouchsimo.whatsup.helpers.ImageCircular;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.view.LayoutInflater;
import android.view.MenuItem;
import android.view.View;
import android.view.View.OnClickListener;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.ImageView;
import android.widget.PopupMenu;
import android.widget.PopupMenu.OnMenuItemClickListener;
import android.widget.TextView;
import android.widget.Toast;

public class HomeChatListAdapter extends BaseAdapter {
	private Activity activity;
    private LayoutInflater inflater;
    public List<HomeChat> chats;
    private Bitmap mBitmap;
    private TextView name,date,hints,newCount;
    private ImageView chatListItemImage,chatListItemMenuButton;
    private PopupMenu mPopupMenu;
    public HomeChatListAdapter(Activity activity, List<HomeChat> chats) {
		this.activity = activity;
		this.chats = chats;
	}
	@Override
	public int getCount() {
		return chats.size();
	}

	@Override
	public Object getItem(int location) {
		return chats.get(location);
	}

	@Override
	public long getItemId(int position) { 
		return position;
	}

	@Override
	public View getView(final int position, View convertView, ViewGroup parent) {
		if (inflater == null)
            inflater = (LayoutInflater) activity
                    .getSystemService(Context.LAYOUT_INFLATER_SERVICE);
        if (convertView == null)
            convertView = inflater.inflate(R.layout.list_item_chats, null);
		
		name 		= (TextView) convertView.findViewById(R.id.chatListItemName);
        date 		= (TextView) convertView.findViewById(R.id.chatListItemDate);
       	hints 		= (TextView) convertView.findViewById(R.id.chatListItemHints);
       	newCount 	= (TextView) convertView.findViewById(R.id.icNewCount);
       	chatListItemImage = (ImageView) convertView.findViewById(R.id.chatListItemImage);
       
        HomeChat chat = (HomeChat) getItem(position);
        name.setText(chat.getName());
        date.setText(chat.getDate());
        hints.setText(chat.getHint());
        /* if the number of new message equals zero
         * we hide the newCount (R.id.icNewCount) res/layout/list_item_chats.xml
         * */
        if(chat.getCount() == 0){
        	newCount.setVisibility(View.GONE);
        }else{
        	newCount.setText(chat.getCount()+"");
        }
        int id = activity.getResources().getIdentifier(chat.getImage(), "drawable", activity.getApplicationContext().getApplicationInfo().packageName);
        mBitmap = BitmapFactory.decodeResource(activity.getResources(),id);
        ImageCircular img = new ImageCircular(mBitmap);
        chatListItemImage.setImageDrawable(img);
        chatListItemMenuButton = (ImageView) convertView.findViewById(R.id.chatListItemMenuButton);
        chatListItemMenuButton.setOnClickListener(new OnClickListener() {
			
			@Override
			public void onClick(View v) {
				mPopupMenu = new PopupMenu(activity, v);
				mPopupMenu.getMenuInflater().inflate(R.menu.chat_list_item_popup, mPopupMenu.getMenu());
				mPopupMenu.setOnMenuItemClickListener(new OnMenuItemClickListener() {
					
					@Override
					public boolean onMenuItemClick(MenuItem item) {
						
						if(item.getTitle().equals("View Contact")){
							Intent i = new Intent(activity, ProfileActivity.class);
							i.putExtra("position", position);
							activity.startActivity(i);
						}else{
							Toast.makeText(activity, "popup :"+item, Toast.LENGTH_LONG).show();
						}
						return true;
					}
				});
				mPopupMenu.show();
			}
		});
		return convertView;
	}
}
