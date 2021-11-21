export interface project {
  link: string;
  description: string;
  subTitle: string;
  challenge: {
    title: string;
    description: string[];
  };
  title: string;
  backgroundColor: string;
  textColor: string;
  headerTextColor: string;
  headerImgURL: string;
  sectionImgURL: string;
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
  subTitle: string;
  description: string[];
  imgURL: string;
}
