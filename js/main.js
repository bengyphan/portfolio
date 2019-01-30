$('div.burger').on("click", function(){
		
		if( !$(this).hasClass('open')) { openMenu();}
		else { closeMenu();}
	});
function openMenu(){
		$('div.menu, #profile, div.burger ').addClass('open');	
		$('div.x, div.y, div.z').addClass('close');
 
		setTimeout(function(){
			$('div.y').hide();
			$('div.x').addClass('rotate45'); 
			$('div.z').addClass('rotate135');  
		}, 120);	
	};
	
function closeMenu(){
	$('div.menu, #profile, div.burger').removeClass('open');	
	$('div.x').removeClass('rotate45')
	$('div.z').removeClass('rotate135')

	setTimeout(function(){
		$('div.y').show(); 
		$('div.x, div.y, div.z').removeClass('close');
	}, 70);			
};