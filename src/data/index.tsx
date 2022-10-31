import { MdLiveTv } from 'react-icons/md'
import { FiPlayCircle } from 'react-icons/fi'
import { AiFillHome } from 'react-icons/ai'
import { MdOutlineExplore } from 'react-icons/md'
import { AiOutlinePlaySquare } from 'react-icons/ai'
import { MdSubscriptions } from 'react-icons/md'
import { BiLibrary } from 'react-icons/bi'
import { MdHistory } from 'react-icons/md'
import { BiVideo } from 'react-icons/bi'
import { BsStopwatch } from 'react-icons/bs'
import { MdLocalMovies } from 'react-icons/md'
import { SiFacebookgaming } from 'react-icons/si'
import { SiLivechat } from 'react-icons/si'
import { GiLargeDress } from 'react-icons/gi'
import { AiFillYoutube } from 'react-icons/ai'
import { SiYoutubestudio } from 'react-icons/si'
import { TbBrandYoutube } from 'react-icons/tb'
import { CgYoutube } from 'react-icons/cg'
import { FiSettings } from 'react-icons/fi'
import { FaHistory } from 'react-icons/fa'
import { FiHelpCircle } from 'react-icons/fi'
import { MdFeedback } from 'react-icons/md'
import { GrChannel } from 'react-icons/gr'
import { MdCardMembership } from 'react-icons/md'
import { SiReasonstudios } from 'react-icons/si'
import { AiOutlineDatabase } from 'react-icons/ai'
import { FiPlay } from 'react-icons/fi'

export const uploadMenuItems = [
  { id: 1, icon: <FiPlayCircle size={24} />, text: 'Upload Video' },
  { id: 2, icon: <MdLiveTv size={24} />, text: 'Go Live' },
]

export const userProfileItems = [
  { id: 1, text: 'Your Channel', icon: <GrChannel size={24} /> },
  { id: 2, text: 'Youtube Studio', icon: <SiReasonstudios size={24} /> },
  { id: 3, text: 'Switch Account', icon: <GrChannel size={24} /> },
  { id: 4, text: 'Sign out', icon: <SiReasonstudios size={24} /> },
  { id: 5, divider: true },
  {
    id: 6,
    text: 'Purchase & Membership',
    icon: <MdCardMembership size={24} />,
  },
  {
    id: 7,
    text: 'Your data in Youtube',
    icon: <AiOutlineDatabase size={24} />,
  },
]

export const notificationData = [
  {
    id: 1,
    text: 'Vercel is live! Personalization at the edge',
    time: '7 hours ago',
    url: '/',
    avatar: 'https://i.pravatar.cc/150?img=1',
    alt: 'item 1',
  },
  {
    id: 2,
    text: 'Recommended: ThinkMedia upload new video',
    time: '11 hours ago',
    url: '/',
    avatar: 'https://i.pravatar.cc/150?img=2',
    alt: 'item 2',
  },
  {
    id: 3,
    text: 'SportsCentral: Uploaded India vs Pak Match',
    time: '12 hours ago',
    url: '/',
    avatar: 'https://i.pravatar.cc/150?img=3',
    alt: 'item 3',
  },
  {
    id: 4,
    text: 'SunMusic: PS1 Video Ponni Nadhi | AR Rahman | Mani Ratnam',
    time: '1 day ago',
    url: '/',
    avatar: 'https://i.pravatar.cc/150?img=4',
    alt: 'item 4',
  },
]

export const sideListItems = [
  { id: 1, text: 'Home', icon: <AiFillHome size={24} /> },
  { id: 2, text: 'Explore', icon: <MdOutlineExplore size={24} /> },
  { id: 3, text: 'Shorts', icon: <AiOutlinePlaySquare size={24} /> },
  { id: 4, text: 'Subscriptions', icon: <MdSubscriptions size={24} /> },
  { id: 5, divider: true },
  { id: 6, text: 'Library', icon: <BiLibrary size={24} /> },
  { id: 7, text: 'History', icon: <MdHistory size={24} /> },
  { id: 8, text: 'Your Videos', icon: <BiVideo size={24} /> },
  { id: 9, text: 'Watch Later', icon: <BsStopwatch size={24} /> },
  { id: 10, subdivision: true, text: 'Explore' },
  { id: 11, text: 'Movies & Shows', icon: <MdLocalMovies size={24} /> },
  { id: 12, text: 'Gaming', icon: <SiFacebookgaming size={24} /> },
  { id: 13, text: 'Live', icon: <SiLivechat size={24} /> },
  { id: 14, text: 'Fashion & Beauty', icon: <GiLargeDress size={24} /> },
  { id: 15, subdivision: true, text: 'More from Youtube' },
  {
    id: 16,
    text: 'Youtube Premium',
    icon: <AiFillYoutube size={24} color='red' />,
  },
  {
    id: 17,
    text: 'Creator Studio',
    icon: <SiYoutubestudio size={24} color='red' />,
  },
  {
    id: 18,
    text: 'Youtube Music',
    icon: <TbBrandYoutube size={24} color='red' />,
  },
  { id: 19, text: 'Youtube TV', icon: <CgYoutube size={24} color='red' /> },
  { id: 20, divider: true },
  { id: 21, text: 'Settings', icon: <FiSettings size={24} /> },
  { id: 22, text: 'Report History', icon: <FaHistory size={24} /> },
  { id: 23, text: 'Help', icon: <FiHelpCircle size={24} /> },
  { id: 24, text: 'Send Feedback', icon: <MdFeedback size={24} /> },
]
