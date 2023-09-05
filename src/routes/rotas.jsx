import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import Faq from '../pages/Faq'

import Profile from '../pages/Profile'
import EditProfile from '../pages/EditProfile'

import AdoptFriend from '../pages/AdoptFriend'
import PublishAnimal from '../pages/PublishAnimal'
import MoreInformationPet from '../pages/MoreInformationPet'
import NgoCampaigns from '../pages/NgoCampaigns'
import EditPublications from '../pages/EditPublications'

import SignUp from '../pages/SignUp'
import Login from '../pages/Login'

import NotFound from '../pages/NotFound'

import ScrollToTop from './ScrollToTop'


export default function Rotas(){
    return(
        <Router>
            <ScrollToTop />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/faq' element={<Faq />} />

                <Route path='/profile' element={<Profile />} />
                <Route path='/edit-profile' element={<EditProfile />} />

                <Route path='/adoptfriend' element={<AdoptFriend />} />
                <Route path='/publish-animal' element={<PublishAnimal />} />
                <Route path='/edit-animal/:id' element={<EditPublications />} />
                <Route path='/more-information-pet/:id' element={<MoreInformationPet />} />
                <Route path='/ngo-campaigns' element={<NgoCampaigns />} />

                <Route path='/sign-up' element={<SignUp />} />
                <Route path='/login' element={<Login />} />

                <Route path='*' element={<NotFound />} />

            </Routes>
        </Router>

    )
}