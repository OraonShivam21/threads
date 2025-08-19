import { UserButton } from "@clerk/nextjs";

export default function HomePage() {
  return (
    <div>
      <UserButton afterSwitchSessionUrl="/" />
    </div>
  );
}
