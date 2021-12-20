import { styled } from '@shared/ui/theme';
import { storiesOf } from '@storybook/react-native';
import { ConfirmationList } from './confirmation-list';

const Background = styled.View`
  background-color: ${({ theme }) => theme.palette.background.secondary};
  justify-content: center;
`;
storiesOf('ui/organisms', module).add('confirmation-list', () => {
  return (
    <Background>
      <ConfirmationList
        list={[
          { title: 'Карта для оплаты', info: 'Карта зарплатная' },
          { title: 'Телефон получателя', info: '+7 951 775 52 24' },
          { title: 'Мобильный оператор', info: 'Tele2' },
          { title: 'Имя получаетля', info: 'Иван Иванович Иванов' },
          { title: 'Сумма платежа', info: '5000' + ' ₽' },
          { title: 'Кешбек', info: '400' + ' ₽' },
        ]}
      />
    </Background>
  );
});
