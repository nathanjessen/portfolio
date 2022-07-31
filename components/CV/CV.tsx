export const CV = () => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Ideal Position
        </h3>
        <p className="mt-1 max-w-2xl text-base leading-6 text-gray-500">
          If you know of a position that meets the criteria below, please reach out.
        </p>
      </div>
      <div className="px-4 py-5 sm:px-6">
        <dl className="grid grid-cols-1 gap-y-6">
          <div className="col-span-1">
            <dt className="text-base leading-6 font-medium text-gray-500">
              Position
            </dt>
            <dd className="mt-1 text-base leading-6 text-gray-900">
              Frontend Developer
            </dd>
          </div>

          <div className="col-span-1">
            <dt className="text-base leading-6 font-medium text-gray-500">
              Technology
            </dt>
            <dd className="mt-1 text-base leading-6 text-gray-900">
              ReactJS, Typescript, Storybook, HTML, CSS
            </dd>
          </div>

          {/* <div className="col-span-1">
              <dt className="text-base leading-6 font-medium text-gray-500">
                Salary expectation
              </dt>
              <dd className="mt-1 text-base leading-6 text-gray-900">
                $120,000+
              </dd>
            </div> */}

          <div className="col-span-1">
            <dt className="text-base leading-6 font-medium text-gray-500">
              Responsibilities
            </dt>
            <dd className="mt-1 text-base leading-6 text-gray-900">
              <ul className="space-y-1">
                <li>Implement best practices and introduce tooling to help a growing team stay
                  consistent and efficient.</li>
                <li>Collaborate with design team to implement solutions for the front-end</li>
                <li>Ensure the technical feasibility of UI/UX designs</li>
                <li>A user first mindset and strong sensibilities for UX and design</li>
                <li>Work across the organization to standardize the UI of the website</li>
                <li>Implement and maintain Storybook documentation in partnership with the design team</li>
                <li>Work within pre-defined requirements and produce code that meet those requirements</li>
                <li>Implement code that adheres to SEO principles and accessibility standards</li>
                <li>Implement semantic markup</li>
                <li>Perform cross-browser compatibility tests and iterate to work through bugs</li>
              </ul>
            </dd>
          </div>

          <div className="col-span-1">
            {/* <AttachmentList /> */}
          </div>
        </dl>
      </div>
    </div>
  );
};