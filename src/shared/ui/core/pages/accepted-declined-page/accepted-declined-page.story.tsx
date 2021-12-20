import { storiesOf } from '@storybook/react-native';
import { AcceptedDeclinedPage } from '..';

storiesOf('ui/pages', module).add('accepted-declined-page', () => {
  return (
    <AcceptedDeclinedPage
      submitButton={{
        title: 'Готово',
        checkConditions: () => void 0,
      }}
      acceptedDeclinedText={{
        title: 'Оплачено',
        info: '1 500',
        success: true,
        isLoading: false,
      }}
    />
  );
});
