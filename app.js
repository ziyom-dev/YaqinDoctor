$.fn.toggleAttr = function(attr, attr1, attr2) {
    return this.each(function() {
        var self = $(this);
        if (self.attr(attr) == attr1)
            self.attr(attr, attr2);
        else
            self.attr(attr, attr1);
    });
};

var arrLang = {
    'uz': {
        'thisLang': 'Uz',
        'leftAbout': 'Xavotir olmang! Endi bularning barchasi uchun biz bormiz! Va eng muhimi,Biz mutlaqo bepul xizmat korsatamiz va umuman reytinq sotmaymiz! ',
        'rightAbout': 'Shifokorni yoki protsedurani izlayapsizmi?Tahlillarni qayerda topshirishni bilmayapsizmi? Uyingizga yoki ishingizga yaqinini qidiriyapsizmi? Yoki narxlarni taqqoslashdan charchadingizmi? ',
        'tryBtn': 'Sinab korish',
        'socialTitle': 'Sog’liqni saqlash haqida mavzulariga qiziqiyapsizmi?<br> Bizning blogimizni o’qing! Chunki bu biz bilan oson, quvnoq va qiziqarli! i!',
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

$(function() {
    $('.translate').click(function() {
        var lang = $("html").attr('lang');
        $('html').toggleAttr('lang', 'uz', 'ru');

        $('.lang').each(function(index, item) {
            $(this).html(arrLang[lang][$(this).attr('key')]);
        });
    });
});