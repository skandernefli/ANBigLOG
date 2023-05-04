import React, { useState } from 'react';
import Snackbar from '@mui/base/Snackbar';
import Alert from '@mui/material/Alert';


const Notification = ({ message, duration = 3000, type = "error", onClose }) => {
    const handleClose = (event, reason) => {
      if (reason === "clickaway") {
        return;
      }
      onClose();
    };
  
    return (
      <Snackbar open={!!message} autoHideDuration={duration} onClose={handleClose}>
        <Alert onClose={handleClose} variant="filled" severity={type}>
          {message}
        </Alert>
      </Snackbar>
    );
  };
  
  export default Notification;


