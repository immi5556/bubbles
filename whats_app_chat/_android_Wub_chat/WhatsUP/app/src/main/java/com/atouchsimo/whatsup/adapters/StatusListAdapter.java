package com.atouchsimo.whatsup.adapters;

import com.atouchsimo.whatsapp.R;

import android.app.Activity;
import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.TextView;

public class StatusListAdapter extends BaseAdapter{
    private LayoutInflater inflater;
	Activity mActivity;
	String[] status;
	public StatusListAdapter(Activity mActivity,String[] status){
		this.mActivity = mActivity;
		this.status = status;
	}
	@Override
	public int getCount() {
		return status.length;
	}

	@Override
	public Object getItem(int position) {
		return this.status[position];
	}

	@Override
	public long getItemId(int position) {
		return position;
	}

	@Override
	public View getView(int position, View convertView, ViewGroup parent) {
		if (inflater == null)
            inflater = (LayoutInflater) mActivity
                    .getSystemService(Context.LAYOUT_INFLATER_SERVICE);
        if (convertView == null)
            convertView = inflater.inflate(R.layout.list_item_status, null);
        TextView statu = (TextView) convertView.findViewById(R.id.statu);
        statu.setText(status[position]);
		return convertView;
	}

}
