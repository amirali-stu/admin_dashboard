import { useEffect, useState } from "react";
import { Snackbar, Slide, Alert } from "@mui/material";

function RTLAlert({
  active,
  message = "پیام پیش‌فرض",
  severity = "success",
  onClose,
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (active) {
      setOpen(true);

      const timer = setTimeout(() => {
        setOpen(false);
        if (onClose) onClose(); // اگر تابع onClose دادی، اجرا میشه
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [active, onClose]);

  function SlideTransition(props) {
    return <Slide {...props} direction="right" />;
  }

  return (
    <Snackbar
      open={open}
      TransitionComponent={SlideTransition}
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
      sx={{ direction: "ltr" }}
    >
      <Alert
        severity={severity}
        variant="filled"
        sx={{ width: "100%", textAlign: "right", padding: "10px" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}

export default RTLAlert;
