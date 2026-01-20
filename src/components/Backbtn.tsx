import React from 'react'

import { Link } from '@/i18n/navigation'

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from './ui/breadcrumb'

interface BackbtnProps {
    blogTitle?: string
}

const Backbtn = ({ blogTitle }: BackbtnProps) => {
    return (
        <div>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <Link href='/' className='transition-colors hover:text-foreground'>Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <Link href='/blogs' className='transition-colors hover:text-foreground'>Blogs</Link>
                    </BreadcrumbItem>
                    {blogTitle && (
                        <>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>{blogTitle}</BreadcrumbPage>
                            </BreadcrumbItem>
                        </>
                    )}
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    )
}

export default Backbtn
