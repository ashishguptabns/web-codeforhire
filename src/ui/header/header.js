import NotificationImportantOutlinedIcon from '@mui/icons-material/NotificationImportantOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { Container, HomeIcon, LeftContainer, NotifIcon, ProfileImg, SearchBox, SearchInput, WriteBox } from './header-style';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import { useEffect } from 'react';
import { fetchUserDetailsUseCase } from '../../lib/data';
import { useState } from 'react';

export const Header = () => {
    const [user, setUser] = useState({})

    const fetchUserDetails = async () => {
        const user = await fetchUserDetailsUseCase()
        user && setUser(user)
    }

    useEffect(() => {
        fetchUserDetails()
    }, [])

    return (
        <Container>
            <LeftContainer>
                <HomeIcon href='/' />
                <SearchBox>
                    <SearchIcon />
                    <SearchInput placeholder='Search' />
                </SearchBox>
            </LeftContainer>
            <WriteBox href='/new-story'>
                <EditNoteOutlinedIcon />
                <p>Write</p>
            </WriteBox>
            <NotifIcon href='/notif'>
                <NotificationImportantOutlinedIcon />
            </NotifIcon>
            <ProfileImg $imgUrl={user.imgUrl} href='/profile' />
        </Container>
    )
}