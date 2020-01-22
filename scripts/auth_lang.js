var arrLang = {
			'ge' :{
				'language' : 'ენა',
				'mail' : 'ელ.ფოსტა',
				'pass' : 'პაროლი',
				'notyet' : 'არ გაქვთ ანგარიში? ',
				'auth' : 'ავტორიზაცია',
				'reg' : 'რეგისტრაცია',

			},
			'en' : {
				'language' : 'Language',
				'mail' : 'Mail',
				'pass' : 'Password',
				'notyet' : 'Not Registered yet ? ',
				'auth' : 'Log in',
				'reg' : 'Registration',
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