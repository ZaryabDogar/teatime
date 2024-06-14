import Toast from "@/components/Toast";
import { toast } from "react-toastify";

export const handleToast = (message, icon, success) => {
  toast.success(<Toast message={message} icon={icon} success={success} />);
};
