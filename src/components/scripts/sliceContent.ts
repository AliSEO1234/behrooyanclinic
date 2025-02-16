export const operationDescription = (
    fullDesc: string | null,
    indexOf: number
  ) => {
    const truncatedDescription = fullDesc
      ? fullDesc.split(" ").slice(0, indexOf).join(" ")
      : null;
    if (truncatedDescription) {
      return truncatedDescription;
    } else {
      return;
    }
  };
  