$(document).ajaxStop(function () {
    if($('.swiper-container .box-banner').length > 1){
        var swiper = new Swiper('.swiper-container', {
            paginationClickable: true,
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: 3500,
            autoplayDisableOnInteraction: false
        });
    }
    
    if (!$('.newsletter-footer .politica').length) {
        $('.newsletter-footer input#newsletterClientEmail').after('<span class="politica">Ao inserir seus dados você concorda com nossa <a href="/central-de-atendimento/politica-de-privacidade" target="_blank">política de privacidade</a>.</span>')
    };

    setTimeout(function(){ 
        if ($('.newsletter-footer .success').length) {
            $('.newsletter-footer fieldset.success').html('<p>Obrigada por se cadastrar!</p><br><p>Utilize o cupom <span>BEMVINDAMM</span> na sacola de compras.</p> ');
        };
    }, 300);

    $('span.top-desconto').click(function(){
        $.cookie('popupAberto', 0);
        startPopup();
        setTimeout(function(){
            $('.newsletter-client-name').blur();
        },10);
        if($('body.account').length){
            $('.modalCloseImg').addClass("simplemodal-close");
        }
    });

    $('button.btn-link').click(function(){
       $('button.close').click();
    });

    $(".btn-buscar").attr("value", "Pesquisar");

    // $('.globalMenu h3').each(function () {
    // var conteudo = $(this).next('ul');
    // $(this).append(conteudo);
    // });

    //POSICIONAR MINIATURAS DOS PRODUTOS DOS DEPARTAMENTOS NO MENU PRINCIPAL
    $(".menu-departamento ul.sale").append($(".MinProdutos .n1colunas ul li.sale a"));
    $(".menu-departamento ul.casa").append($(".MinProdutos .n1colunas ul li.casa a"));
    $(".menu-departamento ul.acessorios").append($(".MinProdutos .n1colunas ul li.acessorios a"));
    $(".menu-departamento ul.roupas").append($(".MinProdutos .n1colunas ul li.roupas a"));
    $(".menu-departamento ul.off-price").append($(".MinProdutos .n1colunas ul li.off-price a"));
    $(".menu-departamento ul.sapatos").append($(".MinProdutos .n1colunas ul li.sapatos a"));
    $(".contentHeader .minhasCompras").text("Meus produtos");
    $(".newsletter fieldset p").html("<span>CADASTRE-SE</span> E SURPREENDA-SE");
    $("#newsletterButtonOK").attr("value", "Enviar");
    $("#newsletterSuccess").attr("value", "");
    $("#newsletterSuccess2").attr("value", "Parabéns! Seu Cadastro Foi Realizado com Sucesso.");
    $(".preview-verao-2015 span.outOfStock").text("Em breve");
    $(".menu-departamento ul.sale a.productImage,.menu-departamento ul.casa a.productImage,.menu-departamento ul.acessorios a.productImage,.menu-departamento ul.roupas a.productImage,.menu-departamento ul.off-price a.productImage, .menu-departamento ul.sapatos a.productImage").css("display", "block");
    $(window).scroll(function(){
        if($(this).scrollTop() > '150'){
            $('.floater').fadeIn('fast');
        }else{
            $('.floater').fadeOut('fast');
        };
    });
    $('.floater.wrap-header .menu-departamento ul').each(function(){
        $(this).appendTo( $(this).prev() );
    });

}); 

