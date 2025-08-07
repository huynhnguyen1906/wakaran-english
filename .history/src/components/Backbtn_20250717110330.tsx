import React from 'react'

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from './ui/breadcrumb'

const Backbtn = () => {
    return (
        <div>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href='/components'>Blogs</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    )
}

export default Backbtn
