export interface Policy {
  title: string;
  details: string;
  icon: {
    name: string;
    bgcolor: string;
  };
}

export interface PolicyServices {
  header: string;
  icon: string;
  items: Services[];
}

export interface Services {
  title: string;
}
