import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import getUserProfileData from "@/services/profile.service";

interface ProfileProps {
  profile: {
    name: string;
    email: string;
  };
}

async function Profile({ profile }: ProfileProps) {
  return (
    <div className="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">
      <div>
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Profile
        </h2>
        <dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
          <div className="pt-6 sm:flex">
            <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
              Full name
            </dt>
            <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
              <div className="text-gray-900">{profile.name}</div>
            </dd>
          </div>
          <div className="pt-6 sm:flex">
            <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
              Email address
            </dt>
            <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
              <div className="text-gray-900">{profile.email}</div>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

const UserProfile = withPageAuthRequired(
  async () => {
    const profile = await getUserProfileData();
    return (
      <Profile profile={{ name: profile.nickname, email: profile.email }} />
    );
  },
  {
    returnTo: "/profile",
  }
);

export default UserProfile;
