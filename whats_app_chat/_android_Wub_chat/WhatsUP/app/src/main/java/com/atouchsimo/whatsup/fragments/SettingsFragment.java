package com.atouchsimo.whatsup.fragments;

import com.atouchsimo.whatsapp.R;
import com.atouchsimo.whatsup.ProfileEditActivity;
import com.atouchsimo.whatsup.adapters.SettingsListAdapter;

import android.app.Fragment;
import android.content.Intent;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.AdapterView.OnItemClickListener;
import android.widget.ListView;
import android.widget.Toast;

public class SettingsFragment extends Fragment {
	View mView;
	@Override
	public View onCreateView(LayoutInflater inflater, ViewGroup container,
			Bundle savedInstanceState) {
		mView = inflater.inflate(R.layout.fragment_settings, container, false);
		ListView settingsList = (ListView) mView.findViewById(R.id.settingsList);
		String[] settingItems = getResources().getStringArray(R.array.settings);
		/* Class: SettingsListAdapter
    	 * Package: com.atouchsimo.whatsup.adapters
    	 * */
		SettingsListAdapter adapter = new SettingsListAdapter(getActivity(), settingItems);
		settingsList.setAdapter(adapter);
		settingsList.setOnItemClickListener(new OnItemClickListener() {

			@Override
			public void onItemClick(AdapterView<?> arg0, View v, int position,
					long arg3) {
				/* i position equals zero means Profile Settings is clickef
				 * the we start ProfileEditActivity
				 * */
				if(position == 0){
					Intent i = new Intent(getActivity(), ProfileEditActivity.class);
					getActivity().startActivity(i);
				}else{
					Toast.makeText(getActivity(), position, Toast.LENGTH_LONG).show();	
				}
				
			}
		});
		return mView;
	}
}
