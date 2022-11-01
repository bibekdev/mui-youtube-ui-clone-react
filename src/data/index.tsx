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
// import { FiPlay } from 'react-icons/fi'

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

export const tabItems = [
  { id: 1, text: 'All' },
  { id: 2, text: 'Music' },
  { id: 3, text: 'A.R. Rahman' },
  { id: 4, text: 'Cinema' },
  { id: 5, text: 'Javascript' },
  { id: 6, text: 'Live' },
  { id: 7, text: 'Editing' },
  { id: 8, text: 'Web Development' },
  { id: 9, text: 'Wes Bos' },
  { id: 10, text: 'Film' },
  { id: 11, text: 'Debate' },
  { id: 12, text: 'Football' },
  { id: 13, text: 'Conversation' },
  { id: 14, text: 'Pop Music' },
  { id: 15, text: 'Recently Updated' },
]

export const youtubeResponse = [
  {
    id: 1,
    image: 'https://i.ytimg.com/vi/DHjqpvDnNGE/hqdefault.jpg',
    title: 'Javascript in 100 seconds',
    channelName: 'FireShip',
    videoId: 'DHjqpvDnNGE',
    avatar:
      'https://yt3.ggpht.com/ytc/AMLnZu80d66aj0mK3KEyMfpdGFyrVWdV5tfezE17IwRkhw=s68-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 2,
    image: 'https://i.ytimg.com/vi/HGoTIw-EiJg/hqdefault.jpg',
    title: 'Saath Hum Rahein (Official Video):Drishyam 2|',
    channelName: 'Panaroma Music',
    videoId: 'HGoTIw-EiJg',
    avatar:
      'https://yt3.ggpht.com/3HhNopeNng6gtLaaO2-uKQ6DzL7y6A81up3FLJA20gHntArc7y8Mk6aaJwyMRm7VQz5XV4AjAqs=s88-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 3,
    image: 'https://i.ytimg.com/vi/j2r2nDhTzO4/hqdefault.jpg',
    title: 'Poison - Every Rose Has Its Thorn (Official Music Video)',
    channelName: 'Poison',
    videoId: 'j2r2nDhTzO4',
    avatar:
      'https://yt3.ggpht.com/3HhNopeNng6gtLaaO2-uKQ6DzL7y6A81up3FLJA20gHntArc7y8Mk6aaJwyMRm7VQz5XV4AjAqs=s88-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 4,
    image: 'https://i.ytimg.com/vi/cuqZPx0H7a0/hqdefault.jpg',
    title: 'U2 - Song For Someone',
    channelName: 'U2',
    videoId: 'cuqZPx0H7a0',
    avatar:
      'https://yt3.ggpht.com/IKDZxEFtNCEOxYt90MJylCo500S1hwYBgt7J1Gq2MBmzD1YKVKXNHSe2niOFs9YvpBibpUWZdA=s88-c-k-c0x00ffffff-no-nd-rj',
  },
  {
    id: 5,
    image: 'https://i.ytimg.com/vi/p7OUQ9U2qIw/hqdefault.jpg',
    title: '1899 | Official Trailer | Netflix',
    channelName: 'Netflix',
    videoId: 'p7OUQ9U2qIw',
    avatar:
      'https://yt3.ggpht.com/ytc/AMLnZu8ez2zjv7E2Sp0qzjYCnrpBMLMm5c26MJkGBIQHww=s68-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 6,
    image: 'https://i.ytimg.com/vi/A_MjCqQoLLA/hqdefault.jpg',
    title: 'The Beatles - Hey Jude',
    channelName: 'The Beatles',
    videoId: 'A_MjCqQoLLA',
    avatar:
      'https://yt3.ggpht.com/ytc/AMLnZu_I8jMv3bySvvG5aqNqUtlZKDRtL4J5EjsgbO3knA=s88-c-k-c0x00ffffff-no-rj-mo',
  },
]
