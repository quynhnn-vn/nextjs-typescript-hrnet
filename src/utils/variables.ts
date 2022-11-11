import { uniqueId } from "lodash";

export const COLORS = {
  primary: "#547404",
  secondary: "#eee",
  tertiary: "#e5ebb2",
  danger: "#ff6347",
};

export const SIZE = {
  logo: 100,
};

export const initialFormValues = {
  firstName: "",
  lastName: "",
  birthday: "01/01/2020",
  startDate: "01/01/2022",
  street: "",
  city: "",
  state: "",
  zipCode: 0,
  department: "",
};

export const FORM_FIELDS = [
  {
    type: "text",
    id: "firstName",
    placeholder: "First name",
  },
  {
    type: "text",
    id: "lastName",
    placeholder: "Last name",
  },
  {
    type: "date",
    id: "birthday",
    placeholder: "Date of birth",
  },
  {
    type: "date",
    id: "startDate",
    placeholder: "Start date",
  },
  {
    type: "select",
    id: "department",
    placeholder: "Department",
  },
  {
    type: "text",
    id: "street",
    placeholder: "Street",
  },
  {
    type: "text",
    id: "city",
    placeholder: "City",
  },
  {
    type: "select",
    id: "state",
    placeholder: "State",
  },
  {
    type: "number",
    id: "zipCode",
    placeholder: "Zip code",
  },
];

export const STATES = [
  {
    name: "Alabama",
    id: "AL",
  },
  {
    name: "Alaska",
    id: "AK",
  },
  {
    name: "American Samoa",
    id: "AS",
  },
  {
    name: "Arizona",
    id: "AZ",
  },
  {
    name: "Arkansas",
    id: "AR",
  },
  {
    name: "California",
    id: "CA",
  },
  {
    name: "Colorado",
    id: "CO",
  },
  {
    name: "Connecticut",
    id: "CT",
  },
  {
    name: "Delaware",
    id: "DE",
  },
  {
    name: "District Of Columbia",
    id: "DC",
  },
  {
    name: "Federated States Of Micronesia",
    id: "FM",
  },
  {
    name: "Florida",
    id: "FL",
  },
  {
    name: "Georgia",
    id: "GA",
  },
  {
    name: "Guam",
    id: "GU",
  },
  {
    name: "Hawaii",
    id: "HI",
  },
  {
    name: "Idaho",
    id: "ID",
  },
  {
    name: "Illinois",
    id: "IL",
  },
  {
    name: "Indiana",
    id: "IN",
  },
  {
    name: "Iowa",
    id: "IA",
  },
  {
    name: "Kansas",
    id: "KS",
  },
  {
    name: "Kentucky",
    id: "KY",
  },
  {
    name: "Louisiana",
    id: "LA",
  },
  {
    name: "Maine",
    id: "ME",
  },
  {
    name: "Marshall Islands",
    id: "MH",
  },
  {
    name: "Maryland",
    id: "MD",
  },
  {
    name: "Massachusetts",
    id: "MA",
  },
  {
    name: "Michigan",
    id: "MI",
  },
  {
    name: "Minnesota",
    id: "MN",
  },
  {
    name: "Mississippi",
    id: "MS",
  },
  {
    name: "Missouri",
    id: "MO",
  },
  {
    name: "Montana",
    id: "MT",
  },
  {
    name: "Nebraska",
    id: "NE",
  },
  {
    name: "Nevada",
    id: "NV",
  },
  {
    name: "New Hampshire",
    id: "NH",
  },
  {
    name: "New Jersey",
    id: "NJ",
  },
  {
    name: "New Mexico",
    id: "NM",
  },
  {
    name: "New York",
    id: "NY",
  },
  {
    name: "North Carolina",
    id: "NC",
  },
  {
    name: "North Dakota",
    id: "ND",
  },
  {
    name: "Northern Mariana Islands",
    id: "MP",
  },
  {
    name: "Ohio",
    id: "OH",
  },
  {
    name: "Oklahoma",
    id: "OK",
  },
  {
    name: "Oregon",
    id: "OR",
  },
  {
    name: "Palau",
    id: "PW",
  },
  {
    name: "Pennsylvania",
    id: "PA",
  },
  {
    name: "Puerto Rico",
    id: "PR",
  },
  {
    name: "Rhode Island",
    id: "RI",
  },
  {
    name: "South Carolina",
    id: "SC",
  },
  {
    name: "South Dakota",
    id: "SD",
  },
  {
    name: "Tennessee",
    id: "TN",
  },
  {
    name: "Texas",
    id: "TX",
  },
  {
    name: "Utah",
    id: "UT",
  },
  {
    name: "Vermont",
    id: "VT",
  },
  {
    name: "Virgin Islands",
    id: "VI",
  },
  {
    name: "Virginia",
    id: "VA",
  },
  {
    name: "Washington",
    id: "WA",
  },
  {
    name: "West Virginia",
    id: "WV",
  },
  {
    name: "Wisconsin",
    id: "WI",
  },
  {
    name: "Wyoming",
    id: "WY",
  },
];

export const DEPARTMENTS = [
  {
    id: "1",
    name: "Sales",
  },
  {
    id: "2",
    name: "Marketing",
  },
  {
    id: "3",
    name: "Engineering",
  },
  {
    id: "4",
    name: "Human Resources",
  },
  {
    id: "5",
    name: "Legal",
  },
];
