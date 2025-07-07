import { supabase } from "./supabase/client";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

export function getHandleSubmit(
  form: FormData,
  onSuccess?: () => void,
  onError?: () => void
) {
  return async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("https://api.ipify.org?format=json");
    const data = await res.json();
    const payload = { ...form, ip_address: data.ip };
    const { error } = await supabase.from("landingMessage").insert([payload]);
    if (error) {
      console.log(error);
      onError?.();
    } else {
      onSuccess?.();
    }
  };
}
