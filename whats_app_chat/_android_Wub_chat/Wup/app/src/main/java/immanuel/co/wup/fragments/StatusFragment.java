package immanuel.co.wup.fragments;

import android.app.Fragment;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.View.OnClickListener;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.AdapterView.OnItemClickListener;
import android.widget.EditText;
import android.widget.ImageButton;
import android.widget.ListView;
import android.widget.TextView;

import immanuel.co.wup.R;
import immanuel.co.wup.adapters.StatusListAdapter;

public class StatusFragment extends Fragment {
	View mView;
	@Override
	public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
		mView = inflater.inflate(R.layout.fragment_status, container, false);
		ListView statusList = (ListView) mView.findViewById(R.id.statusList);
		String[] status = getResources().getStringArray(R.array.status);
		/* Class: StatusListAdapter
    	 * Package: com.atouchsimo.whatsup.adapters
    	 * */
		StatusListAdapter adapter = new StatusListAdapter(getActivity(), status);
		statusList.setAdapter(adapter);
		// res/layout/fragment_status.xml
		ImageButton currentStatusEditBtn = (ImageButton) mView.findViewById(R.id.currentStatusEditBtn);
		currentStatusEditBtn.setOnClickListener(new OnClickListener() {
			
			@Override
			public void onClick(View v) {
				TextView currentStatus = (TextView) mView.findViewById(R.id.currentStatus);
				EditText currentStatusEdit = (EditText) mView.findViewById(R.id.currentStatusEdit);
				if(currentStatus.getVisibility() == View.VISIBLE){
					currentStatus.setVisibility(View.GONE);
					currentStatusEdit.setVisibility(View.VISIBLE);
					currentStatusEdit.setText(currentStatus.getText());
				}else{
					currentStatus.setText(currentStatusEdit.getText().toString());
					currentStatusEdit.setVisibility(View.GONE);
					currentStatus.setVisibility(View.VISIBLE);
				}
			}
		});
		statusList.setOnItemClickListener(new OnItemClickListener() {

			@Override
			public void onItemClick(AdapterView<?> arg0, View v, int arg2,
                                    long arg3) {
				TextView currentStatus = (TextView) mView.findViewById(R.id.currentStatus);
				TextView statusItem = (TextView) v.findViewById(R.id.statu);
				currentStatus.setText(statusItem.getText());
			}
		});
		return mView;
	}
}
