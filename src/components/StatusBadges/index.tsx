import { RIDE_STATUS } from "@/constants/ridesStatus";
import { statusFormatter } from "@/utils/statusFormatter";
import { Chip } from "@mui/material";
import React from "react";

type StatusBadgesProps = {
  status: string;
};
function StatusBadges({ status }: StatusBadgesProps) {
  const statusColor =
    status === RIDE_STATUS.pending
      ? "warning"
      : status === RIDE_STATUS.inProgress
        ? "success"
        : status === RIDE_STATUS.finished
          ? "info"
          : "error";
  return (
    <Chip
      label={statusFormatter(status)}
      color={statusColor}
      style={{ width: 120 }}
    />
  );
}

export default StatusBadges;
