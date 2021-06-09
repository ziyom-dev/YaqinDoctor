const sr = ScrollReveal();

sr.reveal(".from-left", {
    origin: "left",
    distance: "50px",
    duration: 2000,
    reset: true
});
sr.reveal(".from-right", {
    origin: "right",
    distance: "50px",
    duration: 2000,
    reset: true
});
sr.reveal(".from-bottom", {
    origin: "bottom",
    distance: "50px",
    duration: 2000,
    reset: true
});
sr.reveal(".from-top", {
    origin: "top",
    distance: "50px",
    duration: 2000,
    reset: true
});
sr.reveal(".from-center", {
    scale: 0,
    duration: 2000,
    reset: true
});

$.fn.toggleAttr = function(attr, attr1, attr2) {
    return this.each(function() {
        var self = $(this);
        if (self.attr(attr) == attr1)
            self.attr(attr, attr2);
        else
            self.attr(attr, attr1);
    });
};



$(function() {


    $('.translate').click(function() {
        $('html').toggleAttr('lang', 'uz', 'ru');
        var lang = $("html").attr('lang');

        $('.lang').each(function(index, item) {
            $(this).html(arrLang[lang][$(this).attr('key')]);
        });
    });
});

var arrLang = {
    'uz': {
        'thisLang': 'Uz',
        'leftAbout': 'Xavotir olmang! Endi bularning barchasi uchun biz bormiz! Va eng muhimi, Biz mutlaqo bepul xizmat korsatamiz va umuman reytinq sotmaymiz! ',
        'rightAbout': 'Shifokorni yoki protsedurani izlayapsizmi? Tahlillarni qayerda topshirishni bilmayapsizmi? Uyingizga yoki ishingizga yaqinini qidiriyapsizmi? Yoki narxlarni taqqoslashdan charchadingizmi? ',
        'tryBtn': 'Sinab korish',
        'socialTitle': 'Sog’liqni saqlash haqida mavzulariga qiziqiyapsizmi?<br> Bizning blogimizni o’qing! Chunki bu biz bilan oson, quvnoq va qiziqarli!',
        'footerTitle': 'Biz sizning sog\'lig\'ingiz haqida qayg\'uramiz!',
    },
    'ru': {
        'thisLang': 'Ру',
        'leftAbout': 'Теперь для этого есть мы!<br> Мы-абсолютно бесплатный сервис и мы не продаем рейтинги!',
        'rightAbout': 'Ищете врача или процедуру?<br> Не знаете где сдать анализы? Ищете около дома или работы? Устали сравнивать цены?',
        'tryBtn': 'Попробовать',
        'socialTitle': 'Интересуетесь темами про здоровье?<br> Читайте наш блог! С нами легко,весело и интересно!',
        'footerTitle': 'Мы заботимся о вашем здоровье!',
    }
}