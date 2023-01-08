import { useParams } from 'react-router-dom';

const data = {
  developer: {
    name: '문영식',
    description: 'UI/UX 개발자',
  },
  c201: {
    name: 'C201',
    description: '2학기 공통 프로젝트 2반 1조입니다',
  },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];

  return (
    <div>
      <h1>개발자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
};

export default Profile;