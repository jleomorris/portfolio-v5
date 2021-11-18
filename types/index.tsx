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
}

export interface Feature {
  title: string;
  subTitle: string;
  description: string[];
  imgURL: string;
}
