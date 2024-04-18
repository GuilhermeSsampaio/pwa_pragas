import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Notification extends React.Component {
  componentDidMount() {
    window.addEventListener('offline', this.handleNetworkChange);
    window.addEventListener('online', this.handleNetworkChange);
  }

  componentWillUnmount() {
    window.removeEventListener('offline', this.handleNetworkChange);
    window.removeEventListener('online', this.handleNetworkChange);
  }

  handleNetworkChange = (event) => {
    if (event.type === 'offline') {
      toast.error('Você está offline');
    } else {
      toast.success('Você está online');
    }
  }

  render() {
    return <ToastContainer />;
  }
}

export default Notification;