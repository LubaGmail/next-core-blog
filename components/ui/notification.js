import ReactDOM from 'react-dom';

import classes from './notification.module.css';

function Notification(props) {
  const { appStatus, detail, statusCode } = props;
 
  let statusClasses = '';

  if (appStatus === 'success') {
    statusClasses = classes.success;
  }

  if (appStatus === 'error') {
    statusClasses = classes.error;
  }

  const cssClasses = `${classes.notification} ${statusClasses}`;

  return ReactDOM.createPortal(
    <div className={cssClasses}>
      <p>{appStatus.toUpperCase()}</p>
      <p>{statusCode}</p>
      <p>{detail}</p>
    </div>,
    document.getElementById('notifications')
  );
}

export default Notification;
