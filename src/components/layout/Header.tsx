import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-background text-foreground">
      <div className="container mx-auto max-w-7xl p-4 flex items-center justify-between">
        <h1 className="text-base font-bold sm:text-3xl">
          <Link href={"/"}>szyk-tech-blog</Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/posts"}>Posts</Link>
            </li>
            <li>
              <Link href={"/profile"}>Profile</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
