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
    // const res = await fetch("https://api.ipify.org?format=json");
    // const data = await res.json();
    // const payload = { ...form, ip_address: data.ip };
    // const { error } = await supabase.from("landingMessage").insert([payload]);
    try {
      const res = await fetch("/api/messageLanding", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error(data.error);
        onError?.();
      }

      onSuccess?.();
    } catch (error) {
      console.error(error);
      onError?.();
    }
  };
}
