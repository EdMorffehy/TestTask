import { FC } from "react";

import FolderIcon from "@shared/assets/folder.svg?react";
import { Text } from "@shared/components";

import cl from "./SocialLink.module.css";

interface ISocialLinkProps {
  name: string;
  path: string;
}

const SocialLink: FC<ISocialLinkProps> = ({ name, path }) => (
  <Text
    rootClassName={cl.SocialLinkRoot}
    className={cl.SocialLinkText}
    prefix={<FolderIcon />}
    onClick={() => {
      console.info(path);
    }}
  >
    {name}
  </Text>
);

export default SocialLink;
