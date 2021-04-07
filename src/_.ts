export function getPhoneNumberHref (phoneNumber: string): string {
  return `tel:${phoneNumber.replace(/[^0-9]/g, '')}`
}

function isVisible (el: Element): boolean {
  const box = el.getBoundingClientRect()
  return (box.top >= 0) && (box.bottom <= window.innerHeight)
}
export function checkVisibility (): void {
  const tags = 'h1, h2, p'
  document.querySelectorAll(tags).forEach(e => {
    if (isVisible(e)) (e as HTMLElement).dataset.isVisible = '1'
  })
}
