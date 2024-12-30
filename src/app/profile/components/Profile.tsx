import Link from "next/link";
import { profileData } from "@/app/profile/constants/profile-data";

export const Profile = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold px-4">プロフィール</h2>
      <div className="mx-auto px-4 py-12 max-w-5xl">
        <table className="w-full text-sm text-left">
          <tbody>
            {profileData.accounts.map((account, index) => (
              <tr key={account.name}>
                <th className="px-6 pv-4 font-bold whitespace-nowrap">
                  {index === 0 ? "Accounts" : ""}
                </th>
                <td className="px-6 py-4">
                  <Link href={account.url}>{account.name}</Link>
                </td>
              </tr>
            ))}
            <tr>
              <th className="px-6 pv-4 font-bold whitespace-nowrap">Job</th>
              <td className="px-6 py-4">{profileData.job}</td>
            </tr>
            {profileData.skills.map((skill, index) => (
              <tr key={index}>
                <th className="px-6 pv-4 font-bold whitespace-nowrap">
                  {index === 0 ? "Skills" : ""}
                </th>
                <td className="px-6 py-4">{skill}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
