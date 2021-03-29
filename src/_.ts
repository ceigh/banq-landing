export function getPhoneNumberHref (phoneNumber: string): string {
  return `tel:${phoneNumber.replace(/[^0-9]/g, '')}`
}
