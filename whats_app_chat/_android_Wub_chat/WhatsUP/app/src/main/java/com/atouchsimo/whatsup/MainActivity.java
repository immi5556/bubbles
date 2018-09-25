package com.atouchsimo.whatsup;


import java.util.ArrayList;

import com.atouchsimo.whatsapp.R;
import com.atouchsimo.whatsup.adapters.NavDrawerItem;
import com.atouchsimo.whatsup.adapters.NavDrawerListAdapter;
import com.atouchsimo.whatsup.fragments.HomeFragment;
import com.atouchsimo.whatsup.fragments.NewBroadCastFragment;
import com.atouchsimo.whatsup.fragments.NewChatFragment;
import com.atouchsimo.whatsup.fragments.NewGroupFragment;
import com.atouchsimo.whatsup.fragments.SettingsFragment;
import com.atouchsimo.whatsup.fragments.StatusFragment;

import android.os.Bundle;
import android.annotation.SuppressLint;
import android.app.Activity;
import android.app.Fragment;
import android.app.FragmentManager;
import android.content.res.Configuration;
import android.content.res.TypedArray;
import android.support.v4.app.ActionBarDrawerToggle;
import android.support.v4.widget.DrawerLayout;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ListView;


@SuppressLint("NewApi")
public class MainActivity extends Activity {
	// a constant for DrawerLayout
	private DrawerLayout mDrawerLayout;
	// a constant for DrawerList
	private ListView mDrawerList;
	// a constant for ActionBarDrawerToggle
	private ActionBarDrawerToggle mDrawerToggle;
	/* Type: Variables
	 * Description:
	 * ---- mDrawerTitle: Navigation Drawer Title
	 * ---- mTitle: Application Title
	 * */
	private CharSequence mDrawerTitle,mTitle;
	/* a constant for Fragment 
	 * */
	private Fragment mFragment = null;
	private FragmentManager mFragmentManager;
	/* Type: Variables
	 * Description: Navigation Drawer Items
	 * ---- navMenuTitles: Drawer List items title check: res/values/strings.xml
	 * ---- navMenuIcons: Drawer List items icon check: res/values/strings.xml
	 * */
	private String[] navMenuTitles;
	private TypedArray navMenuIcons;
	/* Type: Array
	 * Description: Navigation Drawer Items
	 * ---- Class: NavDrawerItem Package: com.atouchsimo.whatsup.adapters
	 * */
	private ArrayList<NavDrawerItem> navDrawerItems;
	/* Type: List Adapter
	 * Description: Navigation Drawer List Adapter
	 * ---- Class: NavDrawerListAdapter Package: com.atouchsimo.whatsup.adapters
	 * */
	private NavDrawerListAdapter adapter;
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);
		// define mTitle, mDrawerTitle to equals the app Title
		mTitle = mDrawerTitle = getTitle();
		/* We load navMenuTitles,navMenuIcons From Resources
		 * check: res/values/strings.xml
		 * */
		navMenuTitles = getResources().getStringArray(R.array.navDrawerItems);
		navMenuIcons = getResources().obtainTypedArray(R.array.navDrawerIcons);
		/* we define mDrawerLayout,mDrawerList
		 * check: res/layout/activity_main.xml
		 * */
		mDrawerLayout = (DrawerLayout) findViewById(R.id.drawerlayout);
		mDrawerList = (ListView) findViewById(R.id.drawerList);
		// Class: NavDrawerItem Package: com.atouchsimo.whatsup.adapters
		navDrawerItems = new ArrayList<NavDrawerItem>();
		// Chats
		navDrawerItems.add(new NavDrawerItem(navMenuTitles[0], navMenuIcons.getResourceId(0, -1)));
		// New Chat
		navDrawerItems.add(new NavDrawerItem(navMenuTitles[1], navMenuIcons.getResourceId(1, -1)));
		// New Group
		navDrawerItems.add(new NavDrawerItem(navMenuTitles[2], navMenuIcons.getResourceId(2, -1)));
		// New Broadcast
		navDrawerItems.add(new NavDrawerItem(navMenuTitles[3], navMenuIcons.getResourceId(3, -1)));
		// Settings
		navDrawerItems.add(new NavDrawerItem(navMenuTitles[4], navMenuIcons.getResourceId(4, -1)));
		// Status
		navDrawerItems.add(new NavDrawerItem(navMenuTitles[5], navMenuIcons.getResourceId(5, -1)));
		navMenuIcons.recycle();
		/* when an item from the drawer list is clicked we call class SlideMenuClickListener
		 * */
		mDrawerList.setOnItemClickListener(new SlideMenuClickListener());
		/* we add navDrawerItems to the NavDrawerListAdapter
		 * then we set it as an adapter to mDrawerList
		 * */
		adapter = new NavDrawerListAdapter(getApplicationContext(), navDrawerItems);
		mDrawerList.setAdapter(adapter);
		
		getActionBar().setDisplayHomeAsUpEnabled(true);
		getActionBar().setHomeButtonEnabled(true);
		getActionBar().setBackgroundDrawable(getResources().getDrawable(R.drawable.bg_action_bar));
		// we define drawer toggle listener
		mDrawerToggle = new ActionBarDrawerToggle(this, mDrawerLayout, 
				R.drawable.ic_drawer, 
				R.string.app_name, 
				R.string.app_name)
		{
			/* when the Drawer closed we set the actionbar title equals to default title
			 * */
			public void onDrawerClosed(View view) {
				getActionBar().setTitle(mTitle);
				// calling onPrepareOptionsMenu() to show action bar icons
				invalidateOptionsMenu();
			}
			/* when the Drawer opened we set the actionbar title equals to DrawerItem Title
			 * */
			public void onDrawerOpened(View drawerView) {
				getActionBar().setTitle(mDrawerTitle);
				// calling onPrepareOptionsMenu() to hide action bar icons
				invalidateOptionsMenu();
			}
		};
		mDrawerLayout.setDrawerListener(mDrawerToggle);
		if (savedInstanceState == null) {
			// on first time display view for first nav item
			displayView(0);
		}
	}
	// this class called when and item on mDrawerList is clicked
	private class SlideMenuClickListener implements
	ListView.OnItemClickListener {
		@Override
		public void onItemClick(AdapterView<?> parent, View view, int position,
				long id) {
			// Display view for selected nav drawer item
			displayView(position);
		}
	}
	// this function used to start fragment using DrawerListItem position
	private void displayView(int position) {
		
		switch (position) {
		case 0:
			/* Class: HomeFragment
			 * Package: com.atouchsimo.whatsup.fragments
			 * */
			mFragment = new HomeFragment();
			break;
		case 1:
			/* Class: NewChatFragment
			 * Package: com.atouchsimo.whatsup.fragments
			 * */
			mFragment = new NewChatFragment();
			break;
		case 2:
			/* Class: NewGroupFragment
			 * Package: com.atouchsimo.whatsup.fragments
			 * */
			mFragment = new NewGroupFragment();
			break;
		case 3:
			/* Class: NewBroadCastFragment
			 * Package: com.atouchsimo.whatsup.fragments
			 * */
			mFragment = new NewBroadCastFragment();
			break;
		case 4:
			/* Class: SettingsFragment
			 * Package: com.atouchsimo.whatsup.fragments
			 * */
			mFragment = new SettingsFragment();
			break;
		case 5:
			/* Class: StatusFragment
			 * Package: com.atouchsimo.whatsup.fragments
			 * */
			mFragment = new StatusFragment();
			break;

		default:
			break;
		}

		if (mFragment != null) {
			mFragmentManager = getFragmentManager();
			/* we begin transaction to replace frameConatiner to the fragment view
			 * check: res/layout/activity_main.xml
			 * */
			mFragmentManager.beginTransaction()
					.replace(R.id.frameContainer, mFragment).commit();

			// Update selected item and title, then close the drawer
			mDrawerList.setItemChecked(position, true);
			mDrawerList.setSelection(position);
			setTitle(navMenuTitles[position]);
			mDrawerLayout.closeDrawer(mDrawerList);
		} else {
			Log.e("MainActivity", "Error in creating fragment");
		}
	}
	@Override
	public boolean onOptionsItemSelected(MenuItem item) {
		// toggle nav drawer on selecting action bar app icon/title
		if (mDrawerToggle.onOptionsItemSelected(item)) {
			return true;
		}
		// Handle action bar actions click
		switch (item.getItemId()) {
		case R.id.action_settings:
			return true;
		default:
			return super.onOptionsItemSelected(item);
		}
	}

	/* *
	 * Called when invalidateOptionsMenu() is triggered
	 */
	@Override
	public boolean onPrepareOptionsMenu(Menu menu) {
		// if nav drawer is opened, hide the action items
		boolean drawerOpen = mDrawerLayout.isDrawerOpen(mDrawerList);
		menu.findItem(R.id.action_settings).setVisible(!drawerOpen);
		return super.onPrepareOptionsMenu(menu);
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.main, menu);
		return true;
	}
	@Override
	public void setTitle(CharSequence title) {
		mTitle = title;
		getActionBar().setTitle(mTitle);
	}

	/**
	 * When using the ActionBarDrawerToggle, you must call it during
	 * onPostCreate() and onConfigurationChanged()...
	 */

	@Override
	protected void onPostCreate(Bundle savedInstanceState) {
		super.onPostCreate(savedInstanceState);
		// Sync the toggle state after onRestoreInstanceState has occurred.
		mDrawerToggle.syncState();
	}

	@Override
	public void onConfigurationChanged(Configuration newConfig) {
		super.onConfigurationChanged(newConfig);
		// Pass any configuration change to the drawer toggls
		mDrawerToggle.onConfigurationChanged(newConfig);
	}

}
