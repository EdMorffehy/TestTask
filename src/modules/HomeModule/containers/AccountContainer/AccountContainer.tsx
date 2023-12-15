import { FC } from "react";

import { Avatar, Text } from "@shared/components";

import cl from "./AccountContainer.module.css";
import SocialLink from "../../components/SocialLink";

const AccountContainer: FC = () => {
  const SOCIAL_LINKS = [
    {
      name: "Telegram",
      path: "/telegram"
    },
    {
      name: "GitHub",
      path: "/github"
    },
    {
      name: "Резюме",
      path: "/cv"
    }
  ];

  return (
    <div className={cl.AccountContainer}>
      <Avatar name='Алексей Иванов' />
      <div className={cl.AccountContainerName}>
        <Text fontSize={20} fontWeight={700}>
          Алексей Иванов
        </Text>
        <div className={cl.AccountContainerSocial}>
          {SOCIAL_LINKS.map(({ path, name }) => (
            <SocialLink key={name} name={name} path={path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccountContainer;
