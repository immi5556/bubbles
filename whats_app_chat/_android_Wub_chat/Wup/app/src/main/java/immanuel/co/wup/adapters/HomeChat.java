package immanuel.co.wup.adapters;

public class HomeChat {
	private int ID = 0, newCount;
    private String name,date,hint;
	String image;
    public HomeChat(){
 	   
    }
     public HomeChat(String name, String hint, String image, String date,
                     int newCount, int ID) {
         this.name = name;
         this.hint = hint;
         this.image = image;
         this.date = date;
         this.newCount = newCount;
         this.ID = ID;
     }
    public void setCount(int newCount) {
    	this.newCount = newCount;
	}
	public void setID(int ID) {
		this.ID = ID;
		
	}
	public void setName(String name) {
		 this.name = name;
		
	}
	public void setHint(String hint){
		this.hint = hint;
	}
	public void setImage(String image) {
		this.image = image;
		
	}
	public void setDate(String date) {
		this.date = date;
	}
	public int getID() {
		return this.ID;
		
	}
	public String getName() {
		return this.name;
		
	}
	public String getHint(){
		return this.hint;
	}
	public String getDate() {
		return this.date;
	}
	public String getImage() {
		return this.image;
	}
	public int getCount() {
    	return this.newCount;
	}
}
