

export const shipping: {
  name: string;
  order: number;
  required: boolean;
  warning: string;
  inputs: {
    size: number;
    heading: {
      name: string;
      placeholder: string;
      type: string;
      class: string;
    }[], required:boolean, class:string;
  }[];
} = {
  name: "Shipping",
  order: 2,
  required: true,
  warning: "No shipping methods are avialable for the adress given.",
  inputs: [
    {
      size: 1,
      heading: [
        {
          name: "Email",
          placeholder: "",
          type: "",
          class: "",
        },
      ],
      required: true,
      class: "",
    },
    {
      size: 1,
      heading: [
        {
          name: "Full Name",
          placeholder: "",
          type: "",
          class: "",
        },
      ],
      required: true,
      class: "",
    },
    {
      size: 1,
      heading: [
        {
          name: "Street Adress",
          placeholder: "",
          type: "",
          class: "",
        },
      ],
      required: true,
      class: "",
    },
    {
      size: 3,
      heading: [
        {
          name: "City",
          placeholder: "",
          type: "",
          class: "",
        },
        {
          name: "State/Province",
          placeholder: "",
          type: "",
          class: "",
        },
        {
          name: "ZIP/Postal code",
          placeholder: "",
          type: "",
          class: "lg:col-span-3 xl:col-span-1 grid-flow-row",
        },
      ],
      required: true,
      class:
        "grid md:grid-cols-3 lg:grid-cols-2  xl:grid-cols-3 sm:flex-row lg:flex-col xl:flex-row gap-y-4",
    },
    {
      size: 1,
      heading: [
        {
          name: "Country",
          placeholder: "",
          type: "",
          class: "",
        },
      ],
      required: true,
      class: "",
    },
  ],
};

export const payment: {
  name: string;
  order: number;
  required: boolean;
  warning: string;
  inputs: {
    size: number;
    heading: {
      name: string;
      placeholder: string;
      type: string;
      class: string;
    }[], required:boolean, class:string;
  }[];
} = {
  name: "Payment",
  order: 3,
  required: true,
  warning: "Billing adress sava as shipping.",
  inputs: [
    {
      size: 1,
      heading: [
        {
          name: "CARD NUMBER",
          placeholder: "XXXX XXXX XXXX XXXX",
          type: "text",
          class: "",
        },
      ],
      required: true,
      class: "",
    },
    {
      size: 2,
      heading: [
        {
          name: "EXPIRATION DATE",
          placeholder: "MM/YY",
          type: "year month",
          class: "",
        },
        {
          name: "SECURITY CODE",
          placeholder: "CVC",
          type: "text",
          class: "",
        },
      ],
      required: true,
      class: "flex flex-col sm:flex-row",
    },
  ],
};

