import React from 'react'
import { redirect } from 'next/navigation'

/**
 * next 14 redirect
 * https://nextjs.org/docs/app/api-reference/functions/redirect
 * */
const Login = () => {
  redirect('/i/flow/login')
}

export default Login
