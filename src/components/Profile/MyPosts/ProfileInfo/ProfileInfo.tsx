import { ProfileInfoType } from '../../../../redux/profileReducer';
import { Preloader } from '../../../Common/Preloader/Preloader';
import classes from './ProfileInfo.module.css';

type ProfileInfoPropsType = {
  profile: ProfileInfoType
}

export function ProfileInfo(props: ProfileInfoPropsType) {

  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <div>
        <img
          src="https://i.siteapi.org/no2IMQtVA-Jko-HOxCRaQpEC3FE=/fit-in/900x1000/center/top/filters:format(png)/5045b586a05f134.s.siteapi.org/img/d35c0d1ac7c8dd12e1e4146f14df612b9c31a4a3.jpg"
          alt="nature" />
      </div>
      <div className={classes.descriptionBlock}>
        <div>
          <img src={props.profile.photos.large ? props.profile.photos.large : '#'} />
        </div>
        <div>
          {props.profile.aboutMe}
        </div>
      </div>
    </div>
  )
}