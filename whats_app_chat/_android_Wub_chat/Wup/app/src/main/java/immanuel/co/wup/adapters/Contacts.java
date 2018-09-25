package immanuel.co.wup.adapters;

public class Contacts {
	private String name,status,from,image;
	public Contacts(){
		
	}
	public Contacts(String image, String name, String status, String from){
		this.image = image;
		this.name = name;
		this.status = status;
		this.from = from;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public void setName(String name) {
		this.name = name;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public void setFrom(String from) {
		this.from = from;
	}
	public String getImage() {
		return this.image;
	}
	public String getName() {
		return this.name;
	}
	public String getStatus() {
		return this.status;
	}
	public String getFrom() {
		return this.from;
	}
}
