package com.atouchsimo.whatsup.adapters;

import java.util.List;

import com.atouchsimo.whatsapp.R;
import com.atouchsimo.whatsup.helpers.ImageCircular;

import android.app.Activity;
import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.ImageView;
import android.widget.TextView;

public class GroupContactsListAdapter extends BaseAdapter{
	private Activity activity;
	private List<Contacts> contacts;
    private LayoutInflater inflater;
	public GroupContactsListAdapter(Activity activity, List<Contacts> contacts) {
		this.activity = activity;
		this.contacts = contacts;
	}

	@Override
	public int getCount() {
		return contacts.size();
	}

	@Override
	public Object getItem(int location) {
		return contacts.get(location);
	}

	@Override
	public long getItemId(int position) {
		return position;
	}

	@Override
	public View getView(int position, View convertView, ViewGroup parent) {
		if (inflater == null)
            inflater = (LayoutInflater) activity
                    .getSystemService(Context.LAYOUT_INFLATER_SERVICE);
		if (convertView == null) {
        	convertView = inflater.inflate(R.layout.list_item_group_contacts, null);
		}
		Contacts contact = (Contacts) getItem(position);
		int id = activity.getResources().getIdentifier(contact.getImage(), "drawable", activity.getApplicationContext().getApplicationInfo().packageName);
        Bitmap mBitmap = BitmapFactory.decodeResource(activity.getResources(),id);
        ImageView image = (ImageView) convertView.findViewById(R.id.groupListItemImage);
        ImageCircular img = new ImageCircular(mBitmap);
        image.setImageDrawable(img);
		TextView name = (TextView) convertView.findViewById(R.id.groupListItemName);
		name.setText(contact.getName());
		return convertView;
	}

}
