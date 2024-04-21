import { RIDE_STATUS } from "@/constants/ridesStatus";
export const statusFormatter = (status: string) => {
  switch (status) {
    case RIDE_STATUS.pending:
      return "Pendiente";
      break;
    case RIDE_STATUS.inProgress:
      return "En Progreso";
      break;
    case RIDE_STATUS.finished:
      return "Finalizado";
      break;
    case RIDE_STATUS.canceled:
      return "Cancelado";
      break;
  }
};
