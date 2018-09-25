package immanuel.co.wup.adapters;

public class ChatMessages {
	String message,from,date,seen;
	public ChatMessages(){
		
	}
	public  ChatMessages(String message, String from, String date, String seen){
		this.message = message;
		this.from = from;
		this.date = date;
		this.seen = seen;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public void setFrom(String from) {
		this.from = from;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public void setSeen(String seen) {
		this.seen = seen;
	}
	public String getMessage() {
		return this.message;
	}
	public String getFrom() {
		return this.from;
	}
	public String getDate() {
		return this.date;
	}
	public String getSeen() {
		return this.seen;
	}
}
