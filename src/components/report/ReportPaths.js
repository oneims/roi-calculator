export const ReportPaths = id => {
  const items = [
    {
      label: "Dashboard",
      icon: "D",
      destination: `/report/${id}`,
    },
    {
      label: "Editor",
      icon: "E",
      destination: `/editor/${id}`,
    },
  ]
  return items
}
