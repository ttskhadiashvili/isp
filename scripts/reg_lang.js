var arrLang = {
			'ge' :{
				'language' : 'ენა',
				'name' : 'სრული სახელი',
				'mail' : 'ელ.ფოსტა',
				'country' : 'ქვეყანა',
				'city' : 'ქალაქი',
				'tel' : 'ტელეფონი',
				'pass' : 'პაროლი',
				'smsym' : '<b>პატარა</b> სიმბოლო</p>',
				'bgsym' : '<b>დიდი</b> სიმბოლო</p>',
				'number' : '>ციფრი',
				'8sym' : 'მინიმუმ <b>8 სიმბოლო',
				'repeat' : 'დაადასტურეთ პაროლი',
				'already' : 'გაქვთ უკვე ანგარიში? ',
				'regdate' : 'რეგისტრაციის თარიღი',
				'auth' : 'ავტორიზაცია',

			},
			'en' : {
				'language' : 'Language',
				'name' : 'Full Name',
				'mail' : 'Mail',
				'country' : 'Country',
				'city' : 'City',
				'tel' : 'Phone Number',
				'pass' : 'Password',
				'smsym' : 'small letter',
				'bgsym' : 'capital letter',
				'number' : 'number',
				'8sym' : 'minimum 8 symbol',
				'repeat' : 'Repeat Password',
				'already' : 'Already have an account ?',
				'regdate' : 'Registration Date',
				'auth' : 'Log in'
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