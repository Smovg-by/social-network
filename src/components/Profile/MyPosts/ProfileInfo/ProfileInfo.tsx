
import { ProfileInfoType } from '../../../../redux/profileReducer';
import { Preloader } from '../../../Common/Preloader/Preloader';
import classes from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

type ProfileInfoPropsType = {
  profile: ProfileInfoType | null

}

export function ProfileInfo(props: ProfileInfoPropsType) {

  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      {/* <div>
        <img
          src="https://i.siteapi.org/no2IMQtVA-Jko-HOxCRaQpEC3FE=/fit-in/900x1000/center/top/filters:format(png)/5045b586a05f134.s.siteapi.org/img/d35c0d1ac7c8dd12e1e4146f14df612b9c31a4a3.jpg"
          alt="beautiful nature" />
      </div> */}
      <div className={classes.descriptionBlock}>
        <div>
          <img src={props.profile.photos.large ? props.profile.photos.large : '#'} alt="user avatar" />
        </div>
        <div>
          <ProfileStatus status={'This is my status'} />
          <div>ABOUT ME: {props.profile.aboutMe}</div>
          <div>ID: {props.profile.userId}</div>
        </div>
      </div>
    </div>
  )
}