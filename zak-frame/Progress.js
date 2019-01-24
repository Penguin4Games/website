function UnityProgress (dom) {
	this.progress = 0.0;
	this.message = "";
	this.dom = dom;
	
	this.box = document.getElementById("progressBox");
	this.bar = document.getElementById("progressBar");
	this.messageArea = document.getElementById("progressMessage");
	
	this.SetProgress = function (progress) {
		if (this.progress < progress)
			this.progress = progress; 
	  
		if (progress == 1)
			this.SetMessage("Preparing...");
		
		this.Update();
	}
	this.SetMessage = function (message) {
		if(message == "Downloading (0.0/1)")
			message = "Downloading...";
		
		this.message = message;
		this.Update();
	}
	this.Clear = function() {
		this.box.style.display = "none";
	}
	this.Update = function() {
		this.messageArea.innerHTML = this.message;
		
		this.bar.style.width = (100 * Math.min(this.progress, 1)) + "%";
	}
	this.Update();
}
