import userData from '../../constants/userData';

export const CallToAction = () => {
  return (
    <div className="bg-primary">
      <div className="max-w-screen-xl mx-auto py-8 px-4 sm:px-6 lg:py-12 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10">
          Have a request?
          <br />
          <span className="text-primary-content">Reach out to me.</span>
        </h2>
        {(userData.socialLinks.twitter || userData.socialLinks.linkedin) && (
          <div className="mt-8 lg:mt-0 flex lg:flex-shrink-0 gap-3">
            {userData.socialLinks.twitter && (
              <a href={userData.socialLinks.twitter}
                target="_blank"
                rel="noreferrer"
                className="btn bg-[#1da1f2] border-[#1da1f2] text-white">
                Twitter
              </a>
            )}
            {userData.socialLinks.linkedin && (
              <a href={userData.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary">
                LinkedIn
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
