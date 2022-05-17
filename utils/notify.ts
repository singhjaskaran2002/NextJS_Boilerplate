import { toast } from "react-toastify";

export const notify = (
	type: "success" | "info" | "error" | "warning" | "default",
	message: string
) => {
	if (!toast.isActive(message)) {
		toast(message, { type, toastId: message });
	}
};
