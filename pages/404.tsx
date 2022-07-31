import Link from "next/link";
import Container from "../components/Layouts/Container";
import DefaultLayout from "../components/Layouts/DefaultLayout";

export default function Custom404() {
  return (
    <DefaultLayout title="404 Not Found | Nathan Jessen">
      <Container>
        <div className="flex-shrink-0 my-auto py-16 sm:py-32">
          <p className="text-sm font-semibold text-error uppercase tracking-wide">404 error</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">Page not found</h1>
          <p className="mt-6 text-base">Sorry, we couldn&apos;t find the page you&apos;re looking for.</p>
          <div className="mt-6">
            <Link href="/">
              <a className="link text-base font-medium text-primary hover:text-primary-focus">
                Go back home <span aria-hidden="true">&rarr;</span>
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </DefaultLayout>
  );
}
