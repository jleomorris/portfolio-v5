export interface project {
  link: string;
  description: string;
  subTitle: string;
  challenge: {
    title: string;
    description: (string | undefined)[];
  };
  title: string;
  backgroundColor: string;
  textColor: string;
  headerTextColor: string;
  headerImgURL: string;
  descriptionImgURL: string;
  challengeImgURL: string;
  sectionImgURL: string;
  links: { title: string; href: string }[];
  features: Feature[];
  services: string[];
  team: Team[];
  attributions: Attribution[];
}

export interface Team {
  name: string;
  role: string[];
}

export interface Attribution {
  name: string;
  role: string[];
}

export interface Feature {
  title: string;
  description: string[];
  imgURL: string;
}
