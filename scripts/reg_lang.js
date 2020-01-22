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
				'reg' : 'რეგისტრაცია',
				'already' : 'გაქვთ უკვე ანგარიში? ',
				'auth' : 'ავტორიზაცია',
				'regdate' : 'რეგისტრაციის თარიღი'

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
				'reg' : 'Registration',
				'already' : 'Already have an account ?',
				'auth' : ' Authorisation',
				'regdate' : 'Registration Date'
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