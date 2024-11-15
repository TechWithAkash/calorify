import { useSession } from 'next-auth/react'

export default function Profile() {
  const { data: session } = useSession()

  if (!session) {
    return (
      <div className="text-center py-8">
        <h2 className="text-2xl font-bold">You are not logged in.</h2>
        <p>Please log in to see your profile.</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-4">Welcome, {session.user.name}!</h1>
      <p className="text-lg mb-4">Here is your profile information:</p>
      <div>
        <strong>Email:</strong> {session.user.email}
      </div>
      <div>
        <strong>Profile Picture:</strong>
        <img src={session.user.image} alt={session.user.name} className="w-24 h-24 rounded-full mt-2" />
      </div>
    </div>
  )
}
