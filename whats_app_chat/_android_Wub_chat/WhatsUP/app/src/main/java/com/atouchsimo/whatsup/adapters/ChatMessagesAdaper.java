package com.atouchsimo.whatsup.adapters;

import java.util.List;

import com.atouchsimo.whatsapp.R;

import android.app.Activity;
import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.TextView;

public class ChatMessagesAdaper extends BaseAdapter{
	private Activity activity;
    private LayoutInflater inflater;
    public List<ChatMessages> chats;
    public TextView chatMessage, chatDate;
    public ChatMessagesAdaper(Activity activity, List<ChatMessages> chats) {
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
	public View getView(int position, View convertView, ViewGroup parent) {
		if (inflater == null)
            inflater = (LayoutInflater) activity
                    .getSystemService(Context.LAYOUT_INFLATER_SERVICE);
		ChatMessages message = (ChatMessages) getItem(position);
		if (message.getFrom() == "me"){
        	convertView = inflater.inflate(R.layout.bubble_left, null);
        }else{
        	convertView = inflater.inflate(R.layout.bubble_right, null);
        }
        chatMessage = (TextView) convertView.findViewById(R.id.chatMessage);
        chatDate = (TextView) convertView.findViewById(R.id.chatDate);
        chatMessage.setText(message.getMessage()+":"+position);
        chatDate.setText(message.getDate());
		return convertView;
	}

}
