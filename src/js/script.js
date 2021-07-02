'use strict'
let app = new Vue({
    el: '#app',    
    data(){
	return{        
        name : null,
	    lastname : null,
	    address : null
	}
    },
    methods: {
        submitForm : function(event){
            event.preventDefault(),            
            event.target.reset(),
            event.target.style.color="red"
        }
    }
});