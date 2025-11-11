import toast from "react-hot-toast";

type NotificationType = "login" | "login_encorrect";

export const notificationApi = () => {
  const notify = (type: NotificationType) => {
    switch (type) {
      case "login":
        return toast.success("Welcome to Dashboard");
        break;

      case "login_encorrect":
        return toast.error("Password or email error !");
    }
  };

  return notify;
};
