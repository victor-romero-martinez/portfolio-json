/** Devuelve un string del año */
export function getYearsFn(start: string, end: string) {
  const startYear = new Date(start).getFullYear();
  const endYear = end != null
                  ? new Date(end).getFullYear()
                  : 'Actual';
return `${startYear} - ${endYear}`
}