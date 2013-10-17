/* Hide the Address Bar in iPhone and iOS
http://mobile.tutsplus.com/tutorials/mobile-web-apps/remove-address-bar/
---------------------------------------------------------------------*/

function hideAddressBar(){
  if(!window.location.hash)
  {
      if(document.height < window.outerHeight)
      {
          document.body.style.height = (window.outerHeight + 50) + 'px';
      }

      setTimeout( function(){ window.scrollTo(0, 1); }, 50 );
  }
}

window.addEventListener("load", function(){ if(!window.pageYOffset){ hideAddressBar(); } } );
window.addEventListener("orientationchange", hideAddressBar );// JavaScript Document

/*
	Author: Michel Marrache
*/
window.currentComp = 1;
function showComp(compNum){
	//console.log('current comp is '+compNum);
	$('.comps img').remove();
	$('.comp').hide();
	$('.comp.comp_'+compNum).show();
	
};
function previousComp(){
	currentComp--;
	currentComp = Math.max(currentComp, 0);
	if(currentComp < 1)currentComp = $totalImages;
	showComp(currentComp);
};
function nextComp(){
	currentComp++;
	currentComp = Math.min(currentComp, $totalImages+1);
	if(currentComp > $totalImages)currentComp = 1;
	showComp(currentComp);
};
$(window).resize(function(){
	$('#prev_btn,#next_btn').css({'height':$(window).height()});
});

(function($){
	$.fn.compit = function(userOptions){
		
		var settings = $.extend({
			clientName	: '',
			minWidth	: 1000,
			bgColor		: '#FFF'
		}, userOptions);
		
		return this.each(function(){
			var $this = $(this);
			var $imageFiles = $this.children();
			window.$totalImages = $imageFiles.size();
			$('body').append('<a href="javascript:;" id="prev_btn" onclick="previousComp()"></a>');
			$('body').append('<a href="javascript:;" id="next_btn" onclick="nextComp()"></a>');
			$('#prev_btn,#next_btn').css({'height':$(window).height()});
			for(i=1;i<=$totalImages;i++){
				//console.log($this.find('img:eq('+(i-1)+')').attr('height'));
				$('.comps').append('<div class="comp comp_'+i+'"></div>');
				$('.comp_'+i).css({
					'display'				: 'none',
					'position'				: 'absolute',
					'top'					: '0',
					'left'					: '0',
					'width'					: '100%',
					'background-image'		: 'url('+$this.find('img:eq('+(i-1)+')').attr('src')+')',
					'background-position'	: '50% 0%',
					'background-color'		: settings.bgColor,
					'background-repeat'		: 'no-repeat',
					'height'				: $this.find('img:eq('+(i-1)+')').attr('height'),
					'min-width'				: settings.minWidth
				});
			}
			document.title = settings.clientName;
			showComp(currentComp);
		});
	};
})(jQuery);