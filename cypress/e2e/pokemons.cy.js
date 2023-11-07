describe('Проверка покупки фото', function () {

     it('Ввод валидных номера карты, даты на карте,cvv=успех,имени на английском языке, правильного пароля в cмс', function () {
        cy.visit('https://pokemonbattle.me/login');
        cy.get(':nth-child(1) > .auth__input').type('terehova171289@gmail.com');
        cy.get('#password').type('171289Kate');
        cy.get('.auth__button').click();
        cy.get('.header__id-texts').contains('2608');
        cy.get('.header__btns > [href="/shop"]').click();
        cy.get(':nth-child(1) > .shop__button').click();
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111 1111 1111 1111');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('12/25');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Katerin Terehova');
        cy.get('.pay-btn').should('be.enabled');
        cy.get('.pay-btn').click();
        cy.get('.payment__form-defolt').contains('Подтверждение покупки');
        cy.get('.payment__submit-button').should('be.disabled');
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').should('be.enabled');
        cy.get('.payment__submit-button').click();
        cy.get('.payment__padding').contains('Покупка прошла успешно');
         })

it('Ввод валидных номера карты, даты на карте,cvv=успех, имени на русском языке,правильного пароля в cмс', function () {
        cy.visit('https://pokemonbattle.me/login');
        cy.get(':nth-child(1) > .auth__input').type('terehova171289@gmail.com');
        cy.get('#password').type('171289Kate');
        cy.get('.auth__button').click();
        cy.get('.header__id-texts').contains('2608');
        cy.get('.header__btns > [href="/shop"]').click();
        cy.get(':nth-child(2) > .shop__button').click();
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111 1111 1111 1111');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('12/25');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Екатерина Терехова');
        cy.get('.pay-btn').should('be.enabled');
        cy.get('.pay-btn').click();
        cy.get('.payment__form-defolt').contains('Подтверждение покупки');
        cy.get('.payment__submit-button').should('be.disabled');
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').should('be.enabled');
        cy.get('.payment__submit-button').click();
        cy.get('.payment__padding').contains('Покупка прошла успешно');
         })

      it('Ввод невалидного номера карты', function () {
        cy.visit('https://pokemonbattle.me/login');
        cy.get(':nth-child(1) > .auth__input').type('terehova171289@gmail.com');
        cy.get('#password').type('171289Kate');
        cy.get('.auth__button').click();
        cy.get('.header__id-texts').contains('2608');
        cy.get('.header__btns > [href="/shop"]').click();
        cy.get(':nth-child(7) > .shop__button').click();
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('1111 1111 1111 1111');
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay__mistake-v2').contains('Неверный номер карты');
        })


       it('Ввод валидных номера карты, невалидной даты на карте', function () {
        cy.visit('https://pokemonbattle.me/login');
        cy.get(':nth-child(1) > .auth__input').type('terehova171289@gmail.com');
        cy.get('#password').type('171289Kate');
        cy.get('.auth__button').click();
        cy.get('.header__id-texts').contains('2608');
        cy.get('.header__btns > [href="/shop"]').click();
        cy.get(':nth-child(5) > .shop__button').click();
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111 1111 1111 1111');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('12/20');
        cy.get(':nth-child(1) > .pay__mistake-v2').contains('Неверный срок');
        })

       it('Ввод валидных номера карты, невалидной даты на карте', function () {
        cy.visit('https://pokemonbattle.me/login');
        cy.get(':nth-child(1) > .auth__input').type('terehova171289@gmail.com');
        cy.get('#password').type('171289Kate');
        cy.get('.auth__button').click();
        cy.get('.header__id-texts').contains('2608');
        cy.get('.header__btns > [href="/shop"]').click();
        cy.get(':nth-child(5) > .shop__button').click();
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111 1111 1111 1111');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('12/20');
        cy.get(':nth-child(1) > .pay__mistake-v2').contains('Неверный срок');
        })


        it('Ввод валидных номера карты, валидной даты на карте', function () {
        cy.visit('https://pokemonbattle.me/login');
        cy.get(':nth-child(1) > .auth__input').type('terehova171289@gmail.com');
        cy.get('#password').type('171289Kate');
        cy.get('.auth__button').click();
        cy.get('.header__id-texts').contains('2608');
        cy.get('.header__btns > [href="/shop"]').click();
        cy.get(':nth-child(5) > .shop__button').click();
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111 1111 1111 1111');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('12/25');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('200');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Katerin Terehova');
        cy.get('.pay-btn').should('be.enabled');
        cy.get('.pay-btn').click();
        cy.get('.pay-inputs-box > :nth-child(2) > .pay__mistake-v2').contains('Неверный код');
        })


         it('Ввод валидных номера карты, даты на карте,cvv=успех,имени на английском языке, невалидного пароля в cмс', function () {
        cy.visit('https://pokemonbattle.me/login');
        cy.get(':nth-child(1) > .auth__input').type('terehova171289@gmail.com');
        cy.get('#password').type('171289Kate');
        cy.get('.auth__button').click();
        cy.get('.header__id-texts').contains('2608');
        cy.get('.header__btns > [href="/shop"]').click();
        cy.get(':nth-child(7) > .shop__button').click();
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111 1111 1111 1111');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('12/25');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Katerin Terehova');
        cy.get('.pay-btn').should('be.enabled');
        cy.get('.pay-btn').click();
        cy.get('.payment__form-defolt').contains('Подтверждение покупки');
        cy.get('.payment__submit-button').should('be.disabled');
        cy.get('#cardnumber').type('123456');
        cy.get('.payment__submit-button').should('be.enabled');
        cy.get('.payment__submit-button').click();
        cy.get('.payment__mistake').contains('Не совпадает с отправленным кодом');
         })

      it('Ввод валидных номера карты, даты на карте, имени,cvv=денег нет на карте, валидного пароля в cмс', function () {
        cy.visit('https://pokemonbattle.me/login');
        cy.get(':nth-child(1) > .auth__input').type('terehova171289@gmail.com');
        cy.get('#password').type('171289Kate');
        cy.get('.auth__button').click();
        cy.get('.header__id-texts').contains('2608');
        cy.get('.header__btns > [href="/shop"]').click();
        cy.get(':nth-child(7) > .shop__button').click();
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111 1111 1111 1111');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('12/25');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('300');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Katerin Terehova');
        cy.get('.pay-btn').should('be.enabled');
        cy.get('.pay-btn').click();
        cy.get('.payment__form-defolt').contains('Подтверждение покупки');
        cy.get('.payment__submit-button').should('be.disabled');
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').should('be.enabled');
        cy.get('.payment__submit-button').click();
        cy.get('.payment__font-for-success').contains('При оплате произошла ошибка');
        cy.get('.textmaun').contains('Попробуйте снова или оплатите другим способом');
         })

      it('Ввод невалидных номера карты, даты на карте,cvv', function () {
        cy.visit('https://pokemonbattle.me/login');
        cy.get(':nth-child(1) > .auth__input').type('terehova171289@gmail.com');
        cy.get('#password').type('171289Kate');
        cy.get('.auth__button').click();
        cy.get('.header__id-texts').contains('2608');
        cy.get('.header__btns > [href="/shop"]').click();
        cy.get(':nth-child(1) > .shop__button').click();
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('1111 1111 1111 1111');
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay__mistake-v2').contains('Неверный номер карты');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('12/20');
        cy.get(':nth-child(1) > .pay__mistake-v2').contains('Неверный срок');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('200');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Katerin Terehova');
         })


      it('Ввод  номера карты < 16 цифр, даты на карте > 12/35,cvv <3 цифр, имя <3 букв', function () {
        cy.visit('https://pokemonbattle.me/login');
        cy.get(':nth-child(1) > .auth__input').type('terehova171289@gmail.com');
        cy.get('#password').type('171289Kate');
        cy.get('.auth__button').click();
        cy.get('.header__id-texts').contains('2608');
        cy.get('.header__btns > [href="/shop"]').click();
        cy.get(':nth-child(1) > .shop__button').click();
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('1111 1111 1111 111');
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay__mistake-v2').contains('Неверный номер карты');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('01/36');
        cy.get(':nth-child(1) > .pay__mistake-v2').contains('Неверный срок');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('12');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay__mistake-v2').contains('Неверный код');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Ka');
        cy.get('.pay__input-box-last-of > .pay__mistake-v2').contains('Неверное имя');
         })

       it('Ввод валидных номера карты, даты на карте,cvv=успех,имени, пароля в cмс <5 цифр', function () {
        cy.visit('https://pokemonbattle.me/login');
        cy.get(':nth-child(1) > .auth__input').type('terehova171289@gmail.com');
        cy.get('#password').type('171289Kate');
        cy.get('.auth__button').click();
        cy.get('.header__id-texts').contains('2608');
        cy.get('.header__btns > [href="/shop"]').click();
        cy.get(':nth-child(7) > .shop__button').click();
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111 1111 1111 1111');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('12/25');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Katerin Terehova');
        cy.get('.pay-btn').should('be.enabled');
        cy.get('.pay-btn').click();
        cy.get('.payment__form-defolt').contains('Подтверждение покупки');
        cy.get('.payment__submit-button').should('be.disabled');
        cy.get('#cardnumber').type('5645');
        cy.get('.payment__submit-button').should('be.disabled');
         })

})





