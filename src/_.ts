export function getPhoneNumberHref (phoneNumber: string): string {
  return `tel:${phoneNumber.replace(/[^0-9]/g, '')}`
}

export function isVisible (el: Element): boolean {
  const box = el.getBoundingClientRect()
  return (box.top >= 0) && (box.bottom <= window.innerHeight)
}
