import Image from 'next/image'
import { Paper, Avatar, Chip } from '@material-ui/core'

import layoutStyle from '../styles/Layout.module.css'

const IntroductionCard = () => {
  return (
    <Paper elevation={3} style={{ height: '400px', padding: '10px', minWidth: '200px' }}>
      <Image
        priority
        src="/images/profile.jpeg"
        className={layoutStyle.borderCircle}
        height={144}
        width={144}
        alt='jjuhey'
      />
      <div style={{ fontSize: '1.2rem' }}>JJUHEY CHOI</div>
      <div style={{ fontSize: '0.8rem' }}>Web developer</div>
      {/* <Avatar alt="jjuhey" src='../public/vercel.svg'>Ju</Avatar> */}
      <div style={{ padding: '10px' }}>
        <Chip style={{ marginRight: '5px' }} size='small' label="JavaScript" />
        <Chip style={{ marginRight: '5px' }} size='small' label="TypeScript" />
        <Chip style={{ marginRight: '5px' }} size='small' label="Nodejs" />
        <Chip style={{ marginRight: '5px' }} size='small' label="React" />
        <Chip style={{ marginRight: '5px' }} size='small' label="MongoDB" />
        <Chip style={{ marginRight: '5px' }} size='small' label="CSS" />
        <Chip size='small' label="HTML" />
      </div>
    </Paper>
  )
}

export default IntroductionCard;
