import { UserProfile } from "@clerk/nextjs"

interface AccountPageProp {

}

const AccountPage: React.FC<AccountPageProp> = () => {
  return (
    <UserProfile />
  )
}

export default AccountPage