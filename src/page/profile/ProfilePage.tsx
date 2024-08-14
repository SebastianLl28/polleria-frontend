import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import PasswordForm from './forms/password-form/PasswordForm'
import ProfileForm from './forms/profile-form/ProfileForm'

const ProfilePage = () => {
  return (
    <div className='flex justify-center'>
      <Tabs defaultValue='account'>
        <TabsList className='w-full'>
          <TabsTrigger value='account' className='w-full'>
            Account
          </TabsTrigger>
          <TabsTrigger value='password' className='w-full'>
            Password
          </TabsTrigger>
        </TabsList>
        <TabsContent value='account'>
          <ProfileForm />
        </TabsContent>
        <TabsContent value='password'>
          <PasswordForm />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default ProfilePage
