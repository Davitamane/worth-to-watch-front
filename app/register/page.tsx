import { redirect } from "next/navigation";

export default function RegisterPage() {
  redirect("/?modal=register");
}
