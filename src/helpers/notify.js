import { TiInfoOutline } from 'react-icons/ti';
import { toast } from 'react-toastify';

export const notify = message => {
  toast(message, {
    className: 'toast-message',
    icon: <TiInfoOutline />,
  });
  toast.clearWaitingQueue();
};
