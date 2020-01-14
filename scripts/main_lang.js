var arrLang = {
			'ge' :{
				'language' : 'ენა',
				'infiNET+' : 'infiNET+',
				'ინტერნეტი' : 'ინტერნეტი',
				'ინფინი TV' : 'ინფინი TV',
				'დომენი' : 'დომენი',
				'ჰოსტინგი' : 'ჰოსტინგი',
				'კონტაქტი' : 'კონტაქტი',
				'slider1' : 'infiNET და Smartlux გაერთიანდნენ',
				'slider2' : 'შესაძლებელია თუ არა მთვარესთან ლაივ კავშირი ?',
				'slider3' : 'საახალწლო საჩუქრები infiNETისაგან. არ გამოტოვოთ',
				'start' : 'Start პაკეტი',
				'start_speed' : 'სიჩქარე 20 მბ/წმ',
				'medium' : 'Medium პაკეტი',
				'medium_speed' : 'სიჩქარე 40 მბ/წმ',
				'pro' : 'Premium პაკეტი',
				'pro_speed'	: 'სიჩქარე 50 მბ/წმ',
				'full'	: 'infiNET+ პაკეტი',
				'full_speed' : 'სიჩქარე 100 მბ/წმ'

			},
			'en' : {
				'language' : 'Language',
				'infiNET+' : 'infiNET+',
				'ინტერნეტი' : 'Internet',
				'ინფინი TV' : 'Infini TV',
				'დომენი' : 'Domain',
				'ჰოსტინგი' : 'Hosting',
				'კონტაქტი' : 'Contact',
				'slider1' : 'infiNET and Smartlux merged',
				'slider2' : 'Is it possible to have a live connection with the moon?',
				'slider3' : 'New Year gifts from infiNET. Dont miss out',
				'start' : 'Start Box',
				'start_speed' : 'Speed 20 mb/s',
				'medium' : 'Medium Box',
				'medium_speed' : 'Speed 40 mb/s',
				'pro' : 'Premium Box',
				'pro_speed'	: 'speed 50 mb/s',
				'full'	: 'infiNET+ Box',
				'full_speed' : 'speed 100 mb/s'
			}
		};
$(function() {
      $('.translate').click(function() {
        var lang = $(this).attr('id');

        $('.lang').each(function(index, item) {
          $(this).text(arrLang[lang][$(this).attr('key')]);
        });
      });
    });