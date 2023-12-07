import React from 'react'
import type { Metadata } from 'next'
import styles from '@/app/(beforeLogin)/_component/main.module.css'

export const metadata: Metadata = {
  title: 'X. It’s what’s happening / X',
  description: 'X.com Home page',
}

type Props = {
  children: React.ReactNode
  modal: React.ReactNode
}
export default function BeforeLoginLayout({ children, modal }: Props) {
  return <div className={styles.container}>
    {children}
    {modal}
  </div>
}
