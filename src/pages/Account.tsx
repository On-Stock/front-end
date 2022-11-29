import { useAppContext } from '../context/hook'

export default function Account() {
  const { state } = useAppContext()
  state.page = 'account'

  return (
    <div>
      <h1>Account</h1>
    </div>
  )
}
