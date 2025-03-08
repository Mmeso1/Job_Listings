import { ICardDetails } from "./cardDetails";

export interface IModal {
  showModal: boolean;
  jobDetails: ICardDetails | null;
  closeModal: () => void;
}
