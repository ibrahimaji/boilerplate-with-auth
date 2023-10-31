import { AuthTemplate } from "@/components/auth/login/auth.template";

export default function Layout({ children }) {
  return <AuthTemplate>{children}</AuthTemplate>;
}
