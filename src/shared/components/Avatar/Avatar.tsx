import { FC } from "react";

import cl from "./Avatar.module.css";

interface IAvatarProps {
  name: string;
}

const Avatar: FC<IAvatarProps> = ({ name }) => {
  const isFullName = name.split(" ").length > 1;
  const avatarName = isFullName ? name.split(" ")[0][0] + name.split(" ")[1][0] : name[0];

  return (
    <div className={cl.Avatar}>
      <p>{avatarName.toUpperCase()}</p>
    </div>
  );
};

export default Avatar;
