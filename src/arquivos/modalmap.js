montIframe = function(endereco){
	var iframe = "<div class='x-map-modal'><iframe width='750' height='420' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='https://maps.google.com.br/maps?" +endereco + "'></iframe></div>"
	return iframe;
};

recursiva = function(){
	$('.x-map-modal').click(function(){
		$('.x-map').html("");
	});
};

modalMap = function(){
    $('.cambui').click(function(){
		$('.x-map').html(montIframe('pb=!1m18!1m12!1m3!1d3675.537142960544!2d-47.053731085041306!3d-22.89355058501851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8cf511815111b%3A0x58d5426de01d08ad!2sR.+Santos+Dumont%2C+835+-+Cambu%C3%AD%2C+Campinas+-+SP!5e0!3m2!1spt-BR!2sbr!4v1481294631521'));
		recursiva();
	});
	$('.alameda').click(function(){
		$('.x-map').html(montIframe('f=q&amp;source=s_q&amp;hl=pt-BR&amp;geocode=&amp;q=alameda+lorena,+1626&amp;aq=&amp;sll=-14.239424,-53.186502&amp;sspn=50.293231,79.013672&amp;ie=UTF8&amp;hq=&amp;hnear=Alameda+Lorena,+1626+-+Jardim+Paulista,+S%C3%A3o+Paulo,+01424-002&amp;t=m&amp;z=14&amp;ll=-23.563198,-46.666587&amp;output=embed'));
		recursiva();
	});
	$('.analia_franco').click(function(){
		$('.x-map').html(montIframe('f=q&amp;source=s_q&amp;hl=pt-BR&amp;geocode=&amp;q=Shopping+An%C3%A1lia+Franco&amp;aq=&amp;sll=-23.563198,-46.666587&amp;sspn=0.011978,0.01929&amp;ie=UTF8&amp;hq=&amp;hnear=Condom%C3%ADnio+Jardim+Analia+Franco+-+Av.+Regente+Feij%C3%B3,+1739+-+Jardim+Analia+Franc,+S%C3%A3o+Paulo,+03342-000&amp;ll=-23.561056,-46.564285&amp;spn=0.002995,0.004823&amp;t=m&amp;z=14&amp;output=embed'));
		recursiva();
	});
	$('.outlet_premium').click(function(){
		$('.x-map').html(montIframe('f=q&amp;source=s_q&amp;hl=pt-BR&amp;geocode=&amp;q=RODOVIA+DOS+BANDEIRANTES,+KM72+Rio+Abaixo,+Itupeva+-+SP,+13295-000&amp;aq=&amp;sll=-23.105096,-47.00773&amp;sspn=0.01202,0.01929&amp;ie=UTF8&amp;hq=RODOVIA+DOS+BANDEIRANTES,+KM72+Rio+Abaixo,+Itupeva+-+SP,+13295-000&amp;hnear=&amp;radius=15000&amp;t=m&amp;ll=-23.103373,-47.012242&amp;spn=0.071946,0.071946&amp;output=embed'));
		recursiva();
	});
	$('.joao_cachoeira').click(function(){
		$('.x-map').html(montIframe('f=q&amp;source=s_q&amp;hl=pt-BR&amp;geocode=&amp;q=Rua+Jo%C3%A3o+Cachoeira,+1125&amp;aq=&amp;sll=-23.000283,-47.100605&amp;sspn=1.53966,2.469177&amp;ie=UTF8&amp;hq=&amp;hnear=R.+Jo%C3%A3o+Cachoeira,+1125+-+Vila+Nova+Concei%C3%A7%C3%A3o,+S%C3%A3o+Paulo,+04535-013&amp;t=m&amp;z=14&amp;ll=-23.590198,-46.676099&amp;output=embed'));
		recursiva();
	});
	$('.iguatemi').click(function(){
		$('.x-map').html(montIframe('f=q&amp;source=s_q&amp;hl=pt-BR&amp;geocode=&amp;q=Avenida+Iguatemi,+777&amp;aq=&amp;sll=-23.103373,-47.012242&amp;sspn=0.096157,0.154324&amp;ie=UTF8&amp;hq=&amp;hnear=Avenida+Iguatemi,+777&amp;t=m&amp;z=14&amp;ll=-22.893862,-47.025393&amp;output=embed'));
		recursiva();
	});
	$('.parque_dom_pedro').click(function(){
		$('.x-map').html(montIframe('f=q&amp;source=s_q&amp;hl=pt-BR&amp;geocode=&amp;q=Rodovia+D.Pedro+I,+KM+137&amp;aq=&amp;sll=-22.893862,-47.025393&amp;sspn=0.012038,0.01929&amp;ie=UTF8&amp;hq=&amp;hnear=Rod.+Dom+Pedro+I,+137,+Valinhos+-+S%C3%A3o+Paulo&amp;t=m&amp;z=14&amp;ll=-22.909987,-46.969761&amp;output=embed'));
		recursiva();
	});
	$('.continente').click(function(){
		$('.x-map').html(montIframe('f=q&amp;source=s_q&amp;hl=pt-BR&amp;geocode=&amp;q=Floripa+BR+101,+KM+210&amp;aq=&amp;sll=-22.909987,-46.969761&amp;sspn=0.012037,0.01929&amp;ie=UTF8&amp;hq=101,+KM+210&amp;hnear=Florian%C3%B3polis,+Santa+Catarina&amp;t=m&amp;ll=-27.61875,-48.646764&amp;spn=0.052536,0.216798&amp;output=embed'));
		recursiva();
	});
	$('.jundiai_shop').click(function(){
		$('.x-map').html(montIframe('f=q&amp;source=s_q&amp;hl=pt-BR&amp;geocode=&amp;q=Av.+Nove+de+Julho,+3333,+Centro,+Jundia%C3%AD+-+S%C3%A3o+Paulo&amp;aq=0&amp;oq=Av.+9+de+Julho,+3333+-+Jund&amp;sll=-23.569182,-46.660917&amp;sspn=0.011978,0.01929&amp;ie=UTF8&amp;hq=&amp;hnear=Av.+Nove+de+Julho,+3333+-+Centro,+S%C3%A3o+Paulo,+13209-011&amp;t=m&amp;z=14&amp;ll=-23.201928,-46.892175&amp;output=embed'));
		recursiva();
	});
	$('.ribeirao_shop').click(function(){
		$('.x-map').html(montIframe('f=q&amp;source=s_q&amp;hl=pt-BR&amp;geocode=&amp;q=Avenida+Coronel+Fernando+Ferreira+Leite,+Ribeir%C3%A3o+Preto+-+S%C3%A3o+Paulo&amp;aq=0&amp;oq=Avenida+Coronel+Fernando+&amp;sll=-23.201928,-46.892175&amp;sspn=0.012011,0.01929&amp;ie=UTF8&amp;hq=&amp;hnear=Av.+Cel.+Fernando+Ferreira+Leite,+Ribeir%C3%A3o+Preto+-+S%C3%A3o+Paulo,+14026-020&amp;t=m&amp;z=14&amp;ll=-21.213429,-47.816016&amp;output=embed'));
		recursiva();
	});
	$('.joinville_garten').click(function(){
		$('.x-map').html(montIframe('f=q&amp;source=s_q&amp;hl=pt-BR&amp;geocode=&amp;q=Avenida+Rolf+Wiest+-+333&amp;aq=&amp;sll=-21.213429,-47.816016&amp;sspn=0.012182,0.01929&amp;ie=UTF8&amp;hq=Avenida+Rolf+Wiest+-+333&amp;hnear=&amp;radius=15000&amp;t=m&amp;ll=-26.253639,-48.853106&amp;spn=0.071946,0.071946&amp;output=embed'));
		recursiva();
	});
	$('.praiamar').click(function(){
		$('.x-map').html(montIframe('f=q&amp;source=s_q&amp;hl=pt-BR&amp;geocode=&amp;q=Rua+Alexandre+Martins,+80,+Aparecida,+Santos+-+S%C3%A3o+Paulo&amp;aq=0&amp;oq=Rua+Alexandre+Martis,+80+-+Santos&amp;sll=-26.253639,-48.853106&amp;sspn=0.093758,0.154324&amp;ie=UTF8&amp;hq=&amp;hnear=R.+Alexandre+Martins,+80+-+Aparecida,+S%C3%A3o+Paulo,+11025-202&amp;t=m&amp;z=14&amp;ll=-23.976871,-46.310585&amp;output=embed'));
		recursiva();
	});
	$('.piracicaba_shop').click(function(){
		$('.x-map').html(montIframe('f=q&amp;source=s_q&amp;hl=pt-BR&amp;geocode=&amp;q=Avenida+Limeira,+722,+Piracicaba+-+S%C3%A3o+Paulo&amp;aq=0&amp;oq=Rua+Limeira,+722+-+Pi&amp;sll=-24.003335,-46.413001&amp;sspn=0.011938,0.01929&amp;ie=UTF8&amp;hq=&amp;hnear=Av.+Limeira,+722,+Piracicaba+-+S%C3%A3o+Paulo&amp;t=m&amp;z=14&amp;ll=-22.703638,-47.649715&amp;output=embed'));
		recursiva();
	});
	$('.shop_cataui').click(function(){
		$('.x-map').html(montIframe('f=q&amp;source=s_q&amp;hl=pt-BR&amp;q=Catau%C3%AD+Shopping+Londrina,+Shopping+Catua%C3%AD+-+Rod.+Celso+Garcia+Cid,+377+-+Terra+Bonita,+Londrina+-+Paran%C3%A1,+86050-901&amp;aq=&amp;sll=-22.703638,-47.649715&amp;sspn=0.012055,0.01929&amp;ie=UTF8&amp;geocode=FVXUm_4dLfny_A&amp;split=0&amp;hq=&amp;hnear=Catau%C3%AD+Shopping+Londrina+-+Rod.+Celso+Garcia+Cid,+377,+Londrina+-+Paran%C3%A1,+86050-901&amp;t=m&amp;z=14&amp;ll=-23.341995,-51.185363&amp;output=embed'));
		recursiva();
	});
};

containerInfo = function() {
	$('.x-container.saopaulo').show();
	$('.x-menu ul li').click(function(){
		$('.x-menu ul li').removeClass('x-active');
		$('.x-container').hide();
		var id = '.' + ($(this).attr('class'));
		$(this).addClass('x-active');
		$(id).show();
	});
};

$(document).ready(function(){
   modalMap();
   containerInfo();
});