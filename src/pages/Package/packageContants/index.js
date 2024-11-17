export const initialState = {
  Payments: {
    TotalAmountPaid: 123456,
    PaymentMethod: "",
    PaymentStatus: "",
    PaymentDate: "",
  },
  Cancel: {
    CancellationReason: "",
    RefundAmount: "",
    RefundConditions: "",
  },
  SuitableMonths: [],
  DiscountCode: "",
  CancellationPolicy: "",
  DiscountedAmount: 0,
  PackageId: "",
  DestinationId: null,
  DestinationName: null,
  PackageName: "",
  PackageTitle: null,
  ExclusionList: ["Visa", "Flight", "Cab"],
  OtherExclusionList: "",
  InclusionList: ["Accommodation", "Sightseeing", "Airport Transfer"],
  OtherInclusionList: "",
  HeroBanners: {
    BestSellingHeroBanner: "",
    Landscape: "url",
    Portait: "url",
  },
  Itineary: [
    {
      Day: "",
      ActivityImg: "url",
      ActivityName: "url",
      DayTitle: "",
      Descriptions: "",
      Hotel: {
        HotelImg: "",
        HotelName: "",
        HotelRatting: "",
        NearByFacilities: ["Hospitals", "Police Station", "Atm"],
      },
      packageHighLightFlag: true,
    },
  ],
  ActivityList: [],
  HospitalRatingList: [],
  HotelRatingList: [],
  Nights: 0,
  Days: 1,

  Pax: 0,
  Child: 0,

  AddedIntoCart: 85,
  CreationDate: new Date(),
  ExpiryDate: "",
  TotalLeadGenerated: "",
  Rating: "4.5",
  ReleaseDate: "",
  UpdatedBy: [
    {
      TimeStamp: "",
      Updater: "",
    },
  ],

  Category: "",
  Type: "",

  BasePrice: 42000,
  OnSale: true,
  PercentageOff: 0,
  PriceType: "Per Couple",
  SellingPrice: 42000,
  IsValid: false,
  Status: false,
};

export const initialMonths = [
  { value: "january", label: "January" },
  { value: "february", label: "February" },
  { value: "march", label: "March" },
  { value: "april", label: "April" },
  { value: "may", label: "May" },
  { value: "june", label: "June" },
  { value: "july", label: "July" },
  { value: "august", label: "August" },
  { value: "september", label: "September" },
  { value: "october", label: "October" },
  { value: "november", label: "November" },
  { value: "december", label: "December" },
];