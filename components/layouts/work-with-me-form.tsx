import {
  PopoverForm,
  PopoverFormButton,
  PopoverFormCutOutLeftIcon,
  PopoverFormCutOutRightIcon,
  PopoverFormSeparator,
  PopoverFormSuccess,
} from "@/components/ui/popover-form";
import { useEffect, useState } from "react";
type FormState = "idle" | "loading" | "success";
const WorkWithMeForm = () => {
  const [formState, setFormState] = useState<FormState>("idle");
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
   const sendToWhatsApp = (message: string, phone?: string) => {
    const text = encodeURIComponent(message.trim());
    const phoneNumber = phone?.replace(/\D/g, "");

    const url = phoneNumber
      ? `https://wa.me/${phoneNumber}?text=${text}`
      : `https://wa.me/?text=${text}`;

    window.open(url, "_blank");
  };
  function submit() {
    setFormState("loading");
    setTimeout(() => {
      setFormState("success");
    }, 1500);
    setTimeout(() => {
      setOpen(false);
      setFormState("idle");
      setName("");
      setEmail("");
      setMessage("");
    }, 3300);
  }
  return (
    <div>
      <PopoverForm
        title="Work with me"
        open={open}
        setOpen={setOpen}
        // width="364px"
        // height="300px"
        showCloseButton={formState !== "success"}
        showSuccess={formState === "success"}
        openChild={
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!name  || !message) return;
              // submit();
            
              sendToWhatsApp(message,"+6282190612618")
            }}
            className="z-50 space-y-4"
          >
            <div className="px-4 pt-4 space-y-4">
              <p className="font-bold">Get in Touch </p>
              <p className="text-muted-foreground text-sm">
                Have a project in mind, a question, or just want to connect?
                Drop me a message below.
              </p>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-muted-foreground mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border  rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white dark:bg-black"
                required
              />
            </div>

            <div className="px-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-muted-foreground mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white dark:bg-black"
                rows={3}
                required
              />
            </div>
            <div className="relative flex h-12 items-center px-[10px]">
              <PopoverFormSeparator />
              <div className="absolute left-0 top-0 -translate-x-[1.5px] -translate-y-1/2">
                <PopoverFormCutOutLeftIcon />
              </div>
              <div className="absolute right-0 top-0 translate-x-[1.5px] -translate-y-1/2 rotate-180">
                <PopoverFormCutOutRightIcon />
              </div>
              <PopoverFormButton
                loading={formState === "loading"}
                text="Send to Whatsapp"
              />
            </div>
          </form>
        }
        successChild={
          <PopoverFormSuccess
            title="Message Sent"
            description="Thank you for contacting us. We'll get back to you soon!"
          />
        }
      />
    </div>
  );
};

export default WorkWithMeForm;
