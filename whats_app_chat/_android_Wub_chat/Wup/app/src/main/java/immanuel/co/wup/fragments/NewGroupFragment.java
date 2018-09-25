package immanuel.co.wup.fragments;

import android.app.Fragment;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ListView;

import java.util.ArrayList;
import java.util.List;

import immanuel.co.wup.R;
import immanuel.co.wup.adapters.Contacts;
import immanuel.co.wup.adapters.GroupContactsListAdapter;

public class NewGroupFragment extends Fragment {
	/* Home contacts array
	 * Class: Contacts
	 * Package: com.atouchsimo.whatsup.adapters
	 * */
	public List<Contacts> contacts = new ArrayList<Contacts>();
	@Override
	public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
		View v = inflater.inflate(R.layout.fragment_new_group, container,false);
		ListView lv = (ListView) v.findViewById(R.id.contactList);
		/* Class: GroupContactsListAdapter
    	 * Package: com.atouchsimo.whatsup.adapters
    	 * */
		GroupContactsListAdapter adapter = new GroupContactsListAdapter(getActivity(), contacts);
		lv.setAdapter(adapter);
        String[] names = getResources().getStringArray(R.array.chatListNames);
        String[] images = getResources().getStringArray(R.array.chatListImages);
		for (int i = 0; i < names.length; i++) {
			Contacts contact = new Contacts();
			/* we use here Contacts Class to set data
			 * then we add it to contacts array
			 * */
			contact.setImage(images[i]);
			contact.setName(names[i]);
			contacts.add(contact);
		}
		adapter.notifyDataSetChanged();
		return v;
	}
}
