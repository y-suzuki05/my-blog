import { Profile } from "@/app/profile/components/Profile";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プロフィール | szyk-tech-blog",
  description: "プロフィールページです。",
};

export default function Page() {
  return <Profile />;
}
