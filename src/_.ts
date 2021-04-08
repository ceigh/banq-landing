export function getPhoneNumberHref (phoneNumber: string): string {
  return `tel:${phoneNumber.replace(/[^0-9]/g, '')}`
}

function isVisible (el: Element): boolean {
  const box = el.getBoundingClientRect()
  return (box.top >= 0) && (box.bottom <= window.innerHeight)
}

const elements: Element[] = []
export function checkVisibility (): void {
  const selectors = `h2, .card p, .blue-heading, .but-text,
#properly p, .saving-text, #call .heading`
  if (!elements.length) elements.push(...document.querySelectorAll(selectors))
  elements.forEach(e => {
    if (isVisible(e)) (e as HTMLElement).dataset.isVisible = '1'
  })
}
