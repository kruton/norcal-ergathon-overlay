import axios from "axios";

export type Result = {
  data: {
    items: Donation[];
    cursor: number;
  };
};

export type Donation = {
  id: string;
  createdAtUtc: string;
  commandId: string;
  transferrableAmount: number;
  status: string;
  currency: string;
  basicRefundedAmount: number;
  formType: string;
  formId: string;
  firstName: string;
  lastName: string;
  corporationName: string | null;
  displayStatus: string;
  isAnonymous: boolean;
  thankYouComment: string | null;
};

export type DonationList = {
  donations: Donation[];
  cursor: number;
};

export const fetchDonations: (cursor: number) => Promise<DonationList> = async (
  cursor
) => {
  const args = {
    formId: "cc672cdb-8e63-408a-9bbc-dff52cf0fcdd",
    parameters: { limit: 10, filters: [] },
    cursor: cursor,
  };
  const encoded = encodeURI(JSON.stringify(args));
  const response = await axios.get(
    `http://localhost:8080/https://api.zeffy.com/_api/trpc/getLatestDonationFormTransactions?input=${encoded}`
  );
  return {
    donations: response.data.result.data.items,
    cursor: response.data.result.data.nextCursor,
  };
};

export const getDonorName = (donation: Donation) => {
  return donation.isAnonymous
    ? "Anonymous"
    : `${donation.firstName} ${donation.lastName}`;
};

export const getDonationAmount = (donation: Donation) => {
  return (donation.transferrableAmount / 100).toFixed(2);
};
