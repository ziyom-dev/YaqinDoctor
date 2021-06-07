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
        'leftAbout': 'Endi buning uchun biz bor! Biz mutlaqo bepul xizmat va biz reytinglarni sotmaymiz!',
        'rightAbout': 'Shifokor yoki amaliyotni qidiryapsizmi? Sinovlarni qaerdan olish kerakligini bilmaymanmi? Uy yoki ish yonida qidiryapsizmi? Narxlarni taqqoslashdan charchadingizmi?',
        'tryBtn': 'Sinab korish',
        'socialTitle': 'Sog\'liqni saqlash masalalari bilan qiziqasizmi?<br> bizning blog o\'qish! Biz bilan oson, qiziqarli va qiziqarli!',
        'footerTitle': 'Sizning sog\'lig\'ingizga g\'amxo\'rlik qilamiz!',
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