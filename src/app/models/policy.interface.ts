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

interface Services {
  title: string;
}

export interface PolicyDetails {
  title: string;
  policyNum: number;
  status: string;
  isDue: boolean;
  details: Details[];
}

interface Details {
  name: string;
  value: number;
}
