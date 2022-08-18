import { faAddressBook, faBookBookmark, faCircleInfo, faPhone } from "@fortawesome/free-solid-svg-icons";
import { AppProps } from "../../../types/phone";
import Contacts from "../apps/contacts/Contacts";
import Details from "../apps/details/Details";
import { PHONE_STRINGS } from "./config";

export const APPS: AppProps[] = [
  {
    label: PHONE_STRINGS.APP_DETAILS,
    rootPath: "/details",
    style: {
      background: "linear-gradient(323deg, rgba(19,115,189,1) 0%, rgba(158,213,255,1) 100%)",
    },
    icon: faCircleInfo,
    component: Details,
  },
  {
    label: PHONE_STRINGS.APP_CONTACTS,
    rootPath: "/contacts",
    style: {
      background: "linear-gradient(323deg, rgba(18,147,10,1) 0%, rgba(181,236,207,1) 100%)",
    },
    icon: faAddressBook,
    component: Contacts,
  },
]