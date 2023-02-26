import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify'
window.getRandomId = () => {
    return Math.random().toString(36).substring(2, 9)
}

window.notify = (msg, type) => {
    switch (type) {
        case 'success':
            return toast.success(msg)
        case 'error':
            return toast.error(msg)
        case 'warning':
            return toast.warning(msg)
        default:
            return toast(msg)
    }
}