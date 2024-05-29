import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";
import UserProfileFormSkeleton from "@/skeleton/UserProfileFormSkeleton";

const UserProfilePage = () => {
  const { currentUser, isLoading: isGetLoading } = useGetMyUser();
  const { updateUser, isLoading: isUpdatingLoading } = useUpdateMyUser();

  if(isGetLoading){
    return (<UserProfileFormSkeleton />)
  }

  if(!currentUser){
    return <span>Unable to load user profile</span>
  }


  return <UserProfileForm currentUser={currentUser} onSave={updateUser} isLoading={isUpdatingLoading} />;
};

export default UserProfilePage;
