import Link from "next/link";
import ContainerBlock from "../components/Layouts/ContainerBlock";

export default function Custom404() {
  return (
    <ContainerBlock title="404 Not Found | Nathan Jessen">
      <div className="mx-auto max-w-7xl w-full flex flex-col px-4 sm:px-6 lg:px-8">
        <div className="flex-shrink-0 my-auto py-16 sm:py-32">
          <p className="text-sm font-semibold text-error-content uppercase tracking-wide">404 error</p>
          <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Page not found</h1>
          <p className="mt-2 text-base text-gray-500">Sorry, we couldn&apos;t find the page you&apos;re looking for.</p>
          <div className="mt-6">
            <Link href="/" className="link text-base font-medium text-primary hover:text-primary-focus">
              <span>Go back home <span aria-hidden="true">&rarr;</span></span>
            </Link>
          </div>
        </div>
      </div>
    </ContainerBlock>
  );
}
