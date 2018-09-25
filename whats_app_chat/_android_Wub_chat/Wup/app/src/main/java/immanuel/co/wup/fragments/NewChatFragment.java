package immanuel.co.wup.fragments;

import android.app.Fragment;
import android.content.Intent;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.AdapterView.OnItemClickListener;
import android.widget.ListView;

import java.util.ArrayList;
import java.util.List;

import immanuel.co.wup.ChatActivity;
import immanuel.co.wup.R;
import immanuel.co.wup.adapters.Contacts;
import immanuel.co.wup.adapters.ContactsListAdapter;

public class NewChatFragment extends Fragment {
	/* Home contacts array
	 * Class: Contacts
	 * Package: com.atouchsimo.whatsup.adapters
	 * */
	public List<Contacts> contacts = new ArrayList<Contacts>();
	@Override
	public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
		View v = inflater.inflate(R.layout.fragment_new_chat, container, false);
		ListView contactsList = (ListView) v.findViewById(R.id.contactsList);
		/* Class: ContactsListAdapter
    	 * Package: com.atouchsimo.whatsup.adapters
    	 * */
		ContactsListAdapter adapter = new ContactsListAdapter(getActivity(),contacts);
		contactsList.setAdapter(adapter);
		contactsList.setOnItemClickListener(new OnItemClickListener() {

			@Override
			public void onItemClick(AdapterView<?> arg0, View view, int position,
                                    long arg3) {
				/* when an item Clicked we run ChatActivity
				 * And we put an Extra "position" 
				 * */
				Intent i = new Intent(getActivity(),ChatActivity.class);
				i.putExtra("position", position);
				startActivity(i);
			}
		});
		/* we load chats data from Resources
         * res/values/strings.xml
         * */
        String[] names = getResources().getStringArray(R.array.chatListNames);
        String[] images = getResources().getStringArray(R.array.chatListImages);
        String[] contactsStatus = getResources().getStringArray(R.array.contactsStatus);
        for (int i = 0; i < names.length; i++) {
			Contacts contact = new Contacts();
			/* we use here Contacts Class to set data
			 * then we add it to contacts array
			 * */
			contact.setImage(images[i]);
			contact.setName(names[i]);
			contact.setStatus(contactsStatus[i]);
			contact.setFrom("Mobile");
			contacts.add(contact);
		}
        adapter.notifyDataSetChanged();
        
		return v;
	}
}
