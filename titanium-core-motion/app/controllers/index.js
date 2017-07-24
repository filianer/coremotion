
$.index.addEventListener('open', function(){
	initCoreMotion();
});

$.index.open();

function test(e){
	alert("Estoy vivo!! ;)");
}

function initCoreMotion(){
        var CoreMotion = require('ti.coremotion');
        var MotionActivity = CoreMotion.createMotionActivity();

        if ( MotionActivity.isActivityAvailable() ){
    		MotionActivity.startActivityUpdates(function(e){
                if ( e.activity ) {
                    var data = e.activity;

                    var type = "No definido";
                    if (data.automotive) {
        	            type = "En coche";
        	        }
        	        else if (data.running) {
        	            type = "Corriendo";
        	        }
        	        else if (data.stationary) {
        	            type = "Parado";
        	        }
        	        else if (data.walking) {
        	            type = "Andando";
        	        }

                    // Only capture data if the confidence is medium or high
                    if (data.confidence != CoreMotion.MOTION_ACTIVITY_CONFIDENCE_LOW) {
                        $.coreMotionStatus.text = type;
                    } else {
						console.log("Cambio no significativo");
                    }
                }
            });
    	} else {
            alert("CORE MOTION NO DISPONIBLE!!");
        }
    }
