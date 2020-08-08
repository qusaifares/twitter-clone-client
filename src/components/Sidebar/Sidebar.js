import React from 'react'
import './Sidebar.css'
import {Button} from '@material-ui/core'
import {Twitter, Home, Search, NotificationsNone, MailOutline, BookmarkBorder, ListAlt, PermIdentity, MoreHoriz} from '@material-ui/icons'
import SidebarOption from '../SidebarOption/SidebarOption'

const Sidebar = () => {
    return (
        <div>
            <Twitter />
            <SidebarOption active text='Home' Icon={Home} />
            <SidebarOption text='Explore' Icon={Search} />
            <SidebarOption text='Notifications' Icon={NotificationsNone} />
            <SidebarOption text='Messages' Icon={MailOutline} />
            <SidebarOption text='Bookmarks' Icon={BookmarkBorder} />
            <SidebarOption text='Lists' Icon={ListAlt} />
            <SidebarOption text='Profile' Icon={PermIdentity} />
            <SidebarOption text='More' Icon={MoreHoriz} />
            <Button variant='outlined' className='sidebar__tweet'>Tweet</Button>
        </div>
    )
}

export default Sidebar
