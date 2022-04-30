require("../node_modules/glider-js/glider.css");
require("../node_modules/glider-js/glider-compat.min.js");
Glider=require("glider-js");
gcycle=(function(){
	var slider;
	function sliderglider(obj,options){
		var index=0;
		var slider;
		var objfinal;
		objfinal=g(obj).getEl();
		slider=new Glider(objfinal,options);
		if(options.autoplay==true){
			//programación del AUTOPLAY
			var timeint=setInterval(function(){
				if(index!=0){
					slider.scrollItem(index);
				}
				else{
					slider.scrollItem(0);
				}
				if(index==(slider.slides.length - 1)){
					index=0;
				}
				else{
					index++;
				}
			},parseInt(slider.opt.durationbs));
			/////////////////////////////////
		}
		if(options.getobject==true){
			genrl.log("Devolviendo objeto...");
			return slider;
		}
	}
  	return{
  		run:function(options){
			var obj;
			var options;
			var slider;
			var objname;
			if(!window.genrl){
				genrl.error("No se ha importado la librería General.JS");
			}
			if(!window.g){
				genrl.error("No se ha importado la librería GDOM.JS");
			}
			if(!options.container){
				genrl.error("No se especificó el contenedor. Vuelva a intentarlo.");
			}
			else{
				objname=options.container;
				g(objname).css({
					'overflow':'hidden'
				});
				if(!options.getobject){
					try{
						genrl.warn("No se encontró parámetro GetObject.");
						sliderglider(objname,options);
						return 0;
					}
					catch{
						genrl.error("No se pudo crear el objeto.");
					}
				}
				else{
					try{
						return sliderglider(objname,options);
					}
					catch{
						genrl.error("No se pudo crear objeto.");
					}
				}
			}
  		}
	}
}());
module.exports=gcycle;
