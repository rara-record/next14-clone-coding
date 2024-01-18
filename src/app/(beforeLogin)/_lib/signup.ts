'use server'

import { redirect } from 'next/navigation'

const validation = (formData: FormData) => {
  if (!formData.get('id') || !(formData.get('id') as string)?.trim()) {
    return { message: 'no_id' }
  }
  if (!formData.get('name') || !(formData.get('name') as string)?.trim()) {
    return { message: 'no_name' }
  }
  if (!formData.get('password') || !(formData.get('password') as string)?.trim()) {
    return { message: 'no_password' }
  }
  if (!formData.get('image')) {
    return { message: 'no_image' }
  }
}

const onSubmit = async (prevState: { message: string | null }, formData: FormData) => {
  const errorMessage = validation(formData)

  if (errorMessage) return errorMessage

  let shouldRedirect = false

  console.log('submit')

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`, {
      method: 'post',
      body: formData,
      credentials: 'include',
    })
    shouldRedirect = true

    console.log(await response.json())
  } catch (err) {
    console.error(err)
  }

  if (shouldRedirect) {
    redirect('/home') /** 1. redirect는 서버컴포넌트에서 사용할 수 있다. 2. try catch 문 "안' 에서 실행하면 안된다*/
  }

  return { message: null }
}

export default onSubmit
