import { toast } from 'react-toastify'
import theme from '../../styles/theme'
import { ToastProps } from './ToastProps'

export const SuccessToast = ({ errorMessage, time = 5000 }: ToastProps) => {
  toast.success(errorMessage, {
    position: 'top-right',
    autoClose: time,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
    style: {
      backgroundColor: theme.color.success,
    },
  })
}
