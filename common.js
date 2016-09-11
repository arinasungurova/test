function show(state){
        for (var i = 0; i < 1; i++) {
            document.getElementsByClassName('popup')[i].style.display = state;			
			document.getElementsByClassName('shade')[i].style.display = state; 	
        }		
}